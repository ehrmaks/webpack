const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: {
        index: "./source/index.js",
        about: "./source/about.js"
    },
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "[name]_bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader', // 가져온 css 코드를 웹페이지 안에 스타일로 주입해주는 로더이다.
                    'css-loader' // css파일을 웹팩 안으로 로드 시켜주는 특수한 명령이다.
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './source/index.html',
            filename: './index.html',
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            template: './source/about.html',
            filename: './about.html',
            chunks: ['about']
        })
    ]
}