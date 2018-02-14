var React = require('react'), PropTypes = React.PropTypes;
var ComponentRefs = require('utils/component-refs');

require('./collapsible-container.scss');

module.exports = React.createClass({
    displayName: 'CollapsibleContainer',
    propTypes: {
        open: React.PropTypes.bool,
    },

    /**
     * Return initial state of component
     *
     * @return {Object}
     */
    getInitialState: function() {
        this.components = ComponentRefs({
            container: HTMLDivElement,
            contents: HTMLDivElement,
        });
        return {
            contentHeight: undefined,
            collapsing: false,
            expanding: false,
        };
    },

    /**
     * Change state.hidden when props.open changes
     *
     * @param  {Object} nextProps
     */
    componentWillReceiveProps: function(nextProps) {
        if (this.props.open !== nextProps.open) {
            if (nextProps.open) {
                this.setState({ collapsing: false, expanding: true });
            } else {
                this.setState({ collapsing: true, expanding: false });
            }
        }
    },

    /**
     * Render component
     *
     * @return {ReactElement}
     */
    render: function() {
        var setters = this.components.setters;
        var style = {};
        if (this.props.open) {
            style.height = this.state.contentHeight;
        } else {
            style.height = 0;
        }
        var className = 'collapsible-container';
        if (this.state.expanding) {
            className += ' expanding';
        } else if (this.state.collapsing) {
            className += ' collapsing';
        }
        return (
            <div ref={setters.container} className={className} style={style}>
                <div ref={setters.contents} className="collapsible-contents">
                    {this.props.children}
                </div>
            </div>
        );
    },

    /**
     * Update height when component draws for the first time
     */
    componentDidMount: function() {
        if (this.props.open) {
            this.updateHeight();
            // sometimes height of the scrollbar isn't accounted for initially
            this.updateTimeout = setTimeout(this.updateHeight, 10);
        }
    },

    /**
     * Update height on redraw
     *
     * @param  {Object} prevProps
     * @param  {Object} prevState
     */
    componentDidUpdate: function(prevProps, prevState) {
        this.updateHeight();
        this.updateTimeout = setTimeout(this.updateHeight, 10);
    },

    /**
     * Clear timeout on unmount
     */
    componentWillUnmount: function() {
        if (this.updateTimeout) {
            clearTimeout(this.updateTimeout);
        }
    },

    /**
     * Get the height of the contents, saving it if it's different
     */
    updateHeight: function() {
        if (this.components.contents) {
            var contentHeight = getContentHeight(this.components.contents);
            if (this.state.contentHeight !== contentHeight) {
                this.setState({ contentHeight });
            }
        }
    },
});

function getContentHeight(div) {
    var height = div.offsetHeight;
    // find nexted collapsible containers
    var others = div.getElementsByClassName('collapsible-container');
    _.each(others, (other) => {
        // remove the container's current height
        height -= other.offsetHeight;
        // then add its eventual height when transition completes
        // (zero or height of its contents)
        if (parseInt(other.style.height) > 0) {
            var contents = other.children[0];
            height += contents.offsetHeight;
        }
    });
    return height;
}
