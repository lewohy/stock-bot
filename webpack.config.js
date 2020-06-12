const nodeExternals = require('webpack-node-externals');
const path = require('path');

module.exports = {
    mode: 'development',
    //mode: 'production',
    entry: {
        'index': ['./src/ts/index.ts']
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './src/dist')
    },
    resolve: {
        extensions: ['.ts', '.js', '.json']
    },
    devtool: 'inline-source-map',
    devServer: {
        host : '127.0.0.1',
        contentBase: path.join(__dirname, './'),
        compress: true,
        hot : true,
        inline: true,
        port: 9000,
        open : true
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'ts-loader'
                    }
                ]
            },
            {
                test: /\.node$/,
                loader: 'node-loader'
            }
        ]
    },
    target: 'node',
    externals: [ nodeExternals() ]
}