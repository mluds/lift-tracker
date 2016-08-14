const path = require('path');

module.exports = {
    entry: './client/app.jsx',
    output: {
        path: './static',
        filename: 'client.bundle.js'
    },
    module: {
        loaders: [
            { loader: 'babel-loader' }
        ]
    },
    watchOptions: {
        poll: true
    }
};