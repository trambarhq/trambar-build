var App = module.exports = {};

App.name = 'trambar';

App.version = '0.0.1';

App.sections = {
    admin: {
        folder: 'admin'
    },
    backend: {
        folder: 'backend'
    },
    client: {
        folder: 'client'
    },
};

App.images = {
    development: [
        {
            name: 'trambar-node-dev',
            folder: 'node-dev',
            copy: {
                'backend/package.json': 'backend/package.json',
            }
        },
        {
            name: 'trambar-ngnix-dev',
            folder: 'nginx-dev',
        },
        {
            name: 'trambar-postgres-dev',
            folder: 'postgres-dev',
        }
    ]
};
