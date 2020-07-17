// __dirname是node.js中的一个全局变量，它指向当前执行脚本所在的目录
// path是node.js中提供的处理文件路径的小工具。 (http://www.runoob.com/nodejs/nodejs-path-module.html)
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    // 项目入口，webpack从此处开始构建
    entry: {
        app: ["./src/app.tsx"]
    },
    output: {
        path: path.join(__dirname, "dist"), // bundle生成(emit)到哪里
        filename: "bundle.js", // bundle生成文件的名称
    },
    // webpack.config.js
    plugins: [
        new HtmlWebpackPlugin({
            title: "Webpack App"
        })
    ],
    devServer: {
        // contentBase: path.join(__dirname, ""),
        contentBase: false, //since we use CopyWebpackPlugin.
        clientLogLevel: 'warning',
        publicPath: '/',
        hot: true,
        progress: true,
        overlay: { warnings: false, errors: true },
        historyApiFallback: {
            rewrites: [
                { from: /.*/, to: path.posix.join('/', 'index.html') },
            ],
        },
        // historyApiFallback: true,
        // quiet: true, // necessary for FriendlyErrorsPlugin
        compress: true,
        inline: true,
        port: 8083,
        host: '127.0.0.1',
        watchOptions: {
            poll: false,
        }
    },
}