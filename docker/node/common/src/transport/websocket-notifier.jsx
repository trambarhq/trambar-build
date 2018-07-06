var _ = require('lodash');
var Promise = require('bluebird');
var React = require('react'), PropTypes = React.PropTypes;
var SockJS = require('sockjs-client');
var Async = require('async-do-while');
var NotificationUnpacker = require('transport/notification-unpacker');

var Locale = require('locale/locale');

// widgets
var Diagnostics = require('widgets/diagnostics');
var DiagnosticsSection = require('widgets/diagnostics-section');

module.exports = React.createClass({
    displayName: 'WebsocketNotifier',
    propTypes: {
        serverAddress: PropTypes.string,
        basePath: PropTypes.string,
        initialReconnectionDelay: PropTypes.number,
        maximumReconnectionDelay: PropTypes.number,
        defaultProfileImage: PropTypes.string,
        online: PropTypes.bool,

        locale: PropTypes.instanceOf(Locale),

        onConnect: PropTypes.func,
        onDisconnect: PropTypes.func,
        onNotify: PropTypes.func,
        onAlertClick: PropTypes.func,
        onRevalidate: PropTypes.func,
    },

    statics: {
        isAvailable: function() {
            return (process.env.PLATFORM !== 'mobile');
        }
    },

    /**
     * Return default props
     *
     * @return {Object}
     */
    getDefaultProps: function() {
        return {
            basePath: '/srv/socket',
            online: true,
            initialReconnectionDelay: 500,
            maximumReconnectionDelay: 30000,
        };
    },

    /**
     * Return initial state of component
     *
     * @return {Object}
     */
    getInitialState: function() {
        return {
            socket: null,
            notificationPermitted: false,
            reconnectionCount: 0,
            recentMessages: [],
        };
    },

     /**
      * Ask user for permission to show notification on mount
      */
     componentWillMount: function() {
         requestNotificationPermission().then(() => {
             this.setState({ notificationPermitted: true })
         }).catch((err) => {
         })

         // connect on mount if we somehow have the info (unlikely)
         this.updateConnection(this.props);
     },

    /**
     * Change the connect when server or schema changes
     *
     * @param  {Object} nextProps
     */
    componentWillReceiveProps: function(nextProps) {
        if (this.props.serverAddress !== nextProps.serverAddress) {
             this.updateConnection(nextProps);
        }
        if (!this.props.online && nextProps.online) {
            if (this.onConnectivity) {
                this.onConnectivity();
            }
        } else if(this.props.online && !nextProps.online) {
            if (this.state.socket) {
                // putting Chrome into offline mode does not automatically
                // break the WebSocket connection--do it manually
                this.state.socket.close();
            }
        }
    },

    /**
     * Update the connection to reflect new props
     *
     * @param  {Object} nextProps
     */
    updateConnection: function(nextProps) {
        this.disconnect();
        if (nextProps.serverAddress) {
            this.connect(nextProps.serverAddress)
        }
    },

    /**
     * Wait for props.online to become true
     *
     * @return {Promise}
     */
    waitForConnectivity: function() {
        if (this.props.online) {
            return Promise.resolve();
        } else {
            if (!this.connectivityPromise) {
                this.connectivityPromise = new Promise((resolve, reject) => {
                    // call function in componentWillReceiveProps
                    this.onConnectivity = () => {
                        this.connectivityPromise = null;
                        this.onConnectivity = null;
                        resolve();
                    };
                });
            }
            return this.connectivityPromise;
        }
    },

    /**
     * Connect to server
     *
     * @param  {String} serverAddress
     *
     * @return {Boolean}
     */
    connect: function(serverAddress) {
        // track connection attempt with an object
        var attempt = this.connectionAttempt;
        if (attempt) {
            if (attempt.serverAddress === serverAddress) {
                // already connecting to server
                return attempt.promise;
            }
        }
        attempt = this.connectionAttempt = { serverAddress };

        var connected = false;
        var delay = this.props.initialReconnectionDelay;
        var maximumDelay = this.props.maximumReconnectionDelay;

        // keep trying to connect until the effort is abandoned (i.e. user
        // goes to a different server)
        Async.do(() => {
            return this.createSocket(serverAddress).then((socket) => {
                if (attempt === this.connectionAttempt) {
                    socket.onmessage = (evt) => {
                        if (this.state.socket === socket) {
                            var msg = parseJSON(evt.data);
                            var payload = _.assign({ address: serverAddress }, msg);
                            var notification = NotificationUnpacker.unpack(payload);
                            if (notification.type === 'change') {
                                this.triggerNotifyEvent(notification.changes);
                            } else if (notification.type === 'alert') {
                                this.showAlert(notification.alert);
                            } else if (notification.type === 'connection') {
                                socket.id = notification.connection.token;
                                this.triggerConnectEvent(notification.connection);
                            } else if (notification.type === 'revalidation') {
                                this.triggerRevalidateEvent(notification.revalidation);
                            }
                            var recentMessages = _.slice(this.state.recentMessages);
                            recentMessages.unshift(msg);
                            if (recentMessages.length > 10) {
                               recentMessages.splice(10);
                            }
                            this.setState({ recentMessages })
                        }
                    };
                    socket.onclose = () => {
                        if (this.state.socket === socket) {
                            // we're still supposed to be connected
                            // try to reestablish connection
                            this.setState({ socket: null }, () => {
                                this.connect(serverAddress).then((connected) => {
                                    if (connected) {
                                        var reconnectionCount = this.state.reconnectionCount + 1;
                                        this.setState({ reconnectionCount })
                                        console.log('Connection reestablished');
                                    }
                                });
                            });
                            if (this.props.serverAddress === serverAddress) {
                                console.log('Disconnect');
                                this.triggerDisconnectEvent();
                            }
                        }
                    };
                    this.setState({ socket });
                }
                connected = true;
            }).catch((err) => {
                delay *= 2;
                if (delay > maximumDelay) {
                    delay = maximumDelay;
                }
                console.log(`Connection attempt in ${delay}ms: ${serverAddress}`);
                return Promise.delay(delay);
            });
        });
        Async.while(() => {
            if (attempt === this.connectionAttempt) {
                return !connected;
            } else {
                return false;
            }
        });
        Async.return(() => {
            this.connectionAttempt = null;
            return connected;
        });
        attempt.promise = Async.end();
        return attempt.promise;
    },

    /**
     * Close web-socket connection
     */
    disconnect: function() {
        var socket = this.state.socket;
        if (socket) {
            // set state.socket to null first, to stop reconnection attempt
            this.setState({ socket: null, reconnectionCount: 0 }, () => {
                socket.close();
            });
        }
    },

    /**
     * Create a SockJS socket
     *
     * @param  {String} serverAddress
     *
     * @return {Promise<SockJS>}
     */
    createSocket: function(serverAddress) {
        var basePath = this.props.basePath;
        return this.waitForConnectivity().then(() => {
            return new Promise((resolve, reject) => {
                var url = `${serverAddress}${basePath}`;
                var socket = new SockJS(url);
                var isFulfilled = false;
                socket.onopen = (evt) => {
                    if (!isFulfilled) {
                        isFulfilled = true;
                        resolve(socket);
                    }
                };
                socket.onclose = () => {
                    if (!isFulfilled) {
                        // neither onopen() or onerror() was called
                        reject(new Error('Unable to establish a connection'));
                    }
                };
                socket.onerror = (evt) => {
                    if (!isFulfilled) {
                        isFulfilled = true;
                        reject(new Error(evt.message));
                    }
                };
            });
        });
    },

    /**
     * Notify parent component that a change event was received
     *
     * @param  {String} address
     * @param  {Array<Object>} changes
     */
    triggerNotifyEvent: function(changes) {
        if (this.props.onNotify) {
            this.props.onNotify({
                type: 'notify',
                target: this,
                changes,
            });
        }
    },

    /**
     * Notify parent component that a connection was established
     *
     * @param  {Object} connection
     */
    triggerConnectEvent: function(connection) {
        if (this.props.onConnect) {
            this.props.onConnect({
                type: 'connect',
                target: this,
                connection,
            });
        }
    },

    /**
     * Notify parent component that a connection was lost
     */
    triggerDisconnectEvent: function() {
        if (this.props.onDisconnect) {
            this.props.onDisconnect({
                type: 'disconnect',
                target: this,
            });
        }
    },

    /**
     * Inform parent component that an alert was clicked
     *
     * @param  {Object} alert
     */
    triggerAlertClickEvent: function(alert) {
        if (this.props.onAlertClick) {
            this.props.onAlertClick({
                type: 'alertclick',
                target: this,
                alert,
            })
        }
    },

    /**
     * Notify parent component that
     *
     * @param  {Object} revalidation
     */
    triggerRevalidateEvent: function(revalidation) {
        if (this.props.onRevalidate) {
            this.props.onRevalidate({
                type: 'invalidate',
                target: this,
                revalidation,
            });
        }
    },

    /**
     * Display an alert popup
     *
     * @param  {Object} alert
     */
    showAlert: function(alert) {
        if (this.state.notificationPermitted) {
            var options = {};
            if (alert.profile_image) {
                options.icon = alert.profile_image;
            } else {
                options.icon = this.props.defaultProfileImage;
            }
            if (alert.message) {
                options.body = alert.message;
            } else if (alert.attached_image) {
                // show attach image only if there's no text
                options.image = alert.attached_image;
            }
            options.lang = _.get(this.props.locale, 'languageCode');
            var notification = new Notification(alert.title, options);
            notification.addEventListener('click', () => {
                this.triggerAlertClickEvent(alert);
                notification.close();
            });
        }
    },

    /**
     * Render diagnostics
     *
     * @return {ReactElement}
     */
    render: function() {
        var id = _.get(this.state.socket, 'id');
        return (
            <Diagnostics type="websocket-notifier">
                <DiagnosticsSection label="Connection">
                    <div>ID: {id}</div>
                    <div>Socket: {this.state.socket ? 'established' : 'none'}</div>
                    <div>Reconnection count: {this.state.reconnectionCount}</div>
                    <div>Notification: {this.state.notificationPermitted ? 'permitted' : 'denied'}</div>
                </DiagnosticsSection>
                <DiagnosticsSection label="Recent messages">
                    {_.map(this.state.recentMessages, renderJSON)}
                </DiagnosticsSection>
            </Diagnostics>
        );
    },
});

function requestNotificationPermission() {
    return new Promise((resolve, reject) => {
        Notification.requestPermission((status) => {
            if (status === 'granted') {
                resolve();
            } else {
                reject(new Error('Unable to gain permission'))
            }
        })
    });
}

function renderJSON(object, i) {
    return <pre key={i}>{JSON.stringify(object, undefined, 4)}</pre>;
}

function parseJSON(text) {
    try {
        return JSON.parse(text);
    } catch (err) {
        return {};
    }
}
