module.exports = {
    entry: "./index.js",
    output: {
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                },
                {
                    loader: "css-loader" // translates CSS into CommonJS
                },
                {
                    loader: "sass-loader", // compiles Sass to CSS
                    options: {
                        includePaths: [
                            "css"
                        ]
                    }
                }]
            },
            {
                test: /\.css$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                },
                {
                    loader: "css-loader" // translates CSS into CommonJS
                }]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    "file-loader"
                ]
            }
        ]
    }
};