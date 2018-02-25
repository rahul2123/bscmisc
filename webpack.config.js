const path = require('path');
module.exports = {
    entry: './reactApp/src/index.js',
    output: {
        path: path.resolve('dist'),
        filename: 'index_bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [{
                    loader: 'babel-loader',
                    options : {
                        presets : [
                            "es2015",
                            "react",
                            "es2016",
                            "stage-2"
                        ]
                    }
                }],
                exclude: /node_modules/,
            },
            {
                test: /\.jsx$/,
                use: [{
                    loader: 'babel-loader',
                    options : {
                        presets : [
                            "es2015",
                            "react",
                            "es2016",
                            "stage-2"
                        ]
                    }
                }],
                exclude: /node_modules/
            }
        ]
    }
}