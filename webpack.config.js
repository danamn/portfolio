module.exports = {
    entry: './src/react/main.js',
    output: {
        path: __dirname + "/src",
        filename: 'main.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
              presets: ['es2015', 'react']
            }
        }]
    }
};