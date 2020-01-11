// -> 处理Html
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [
    // —> 主页
    new HtmlWebpackPlugin({
        // 模板文件
        template: "./src/index.html",
        // 文件名(相对于output.path)，可通过文件名设置目录，如 static/pages/detail.html
        filename: "index.html",
        // 静态资源位置
        inject: "body",
        // 指定输出文件所依赖的入口文件（*.js）的[name]
        chunks: ["main"],
        // 控制压缩
        minify: {
            collapseWhitespace: false,
            removeComments: true,
            removeAttributeQuotes: true,
            removeEmptyAttributes: true
        }
    }),
    // —> 登录的依赖
    new HtmlWebpackPlugin({
        // 模板文件
        template: "./src/pages/login.html",
        // 文件名(相对于output.path)，可通过文件名设置目录，如 static/pages/detail.html
        filename: "static/pages/login.html",
        // 静态资源位置
        inject: "body",
        // 指定输出文件所依赖的入口文件（*.js）的[name]
        chunks: ["Login"],
        // 控制压缩
        minify: {
            collapseWhitespace: false,
            removeComments: true,
            removeAttributeQuotes: true,
            removeEmptyAttributes: true
        }
    }),
    // register的依赖
    new HtmlWebpackPlugin({
        // 模板文件
        template: "./src/pages/register.html",
        // 文件名(相对于output.path)，可通过文件名设置目录，如 static/pages/detail.html
        filename: "static/pages/register.html",
        // 静态资源位置
        inject: "body",
        // 指定输出文件所依赖的入口文件（*.js）的[name]
        chunks: ["Register"],
        // 控制压缩
        minify: {
            collapseWhitespace: false,
            removeComments: true,
            removeAttributeQuotes: true,
            removeEmptyAttributes: true
        }
    }),
    // share-page的依赖
    new HtmlWebpackPlugin({
        // 模板文件
        template: "./src/pages/share-page.html",
        // 文件名(相对于output.path)，可通过文件名设置目录，如 static/pages/detail.html
        filename: "static/pages/share-page.html",
        // 静态资源位置
        inject: "body",
        // 指定输出文件所依赖的入口文件（*.js）的[name]
        chunks: ["sharePage"],
        // 控制压缩
        minify: {
            collapseWhitespace: false,
            removeComments: true,
            removeAttributeQuotes: true,
            removeEmptyAttributes: true
        }
    }),
    // top-search的依赖
    new HtmlWebpackPlugin({
        // 模板文件
        template: "./src/pages/top-search.html",
        // 文件名(相对于output.path)，可通过文件名设置目录，如 static/pages/detail.html
        filename: "static/pages/top-search.html",
        // 静态资源位置
        inject: "body",
        // 指定输出文件所依赖的入口文件（*.js）的[name]
        chunks: ["topSearch"],
        // 控制压缩
        minify: {
            collapseWhitespace: false,
            removeComments: true,
            removeAttributeQuotes: true,
            removeEmptyAttributes: true
        }
    }),
    // home-page的依赖
    new HtmlWebpackPlugin({
        // 模板文件
        template: "./src/pages/home-page.html",
        // 文件名(相对于output.path)，可通过文件名设置目录，如 static/pages/detail.html
        filename: "static/pages/home-page.html",
        // 静态资源位置
        inject: "body",
        // 指定输出文件所依赖的入口文件（*.js）的[name]
        chunks: ["homePage"],
        // 控制压缩
        minify: {
            collapseWhitespace: false,
            removeComments: true,
            removeAttributeQuotes: true,
            removeEmptyAttributes: true
        }
    }),
    // video-page的依赖
    new HtmlWebpackPlugin({
        // 模板文件
        template: "./src/pages/video-page.html",
        // 文件名(相对于output.path)，可通过文件名设置目录，如 static/pages/detail.html
        filename: "static/pages/video-page.html",
        // 静态资源位置
        inject: "body",
        // 指定输出文件所依赖的入口文件（*.js）的[name]
        chunks: ["videoPage"],
        // 控制压缩
        minify: {
            collapseWhitespace: false,
            removeComments: true,
            removeAttributeQuotes: true,
            removeEmptyAttributes: true
        }
    }),
    // myhobby-page的依赖
    new HtmlWebpackPlugin({
        // 模板文件
        template: "./src/pages/myhobby-page.html",
        // 文件名(相对于output.path)，可通过文件名设置目录，如 static/pages/detail.html
        filename: "static/pages/myhobby-page.html",
        // 静态资源位置
        inject: "body",
        // 指定输出文件所依赖的入口文件（*.js）的[name]
        chunks: ["myhobbyPage"],
        // 控制压缩
        minify: {
            collapseWhitespace: false,
            removeComments: true,
            removeAttributeQuotes: true,
            removeEmptyAttributes: true
        }
    }),
    // capture-page的依赖
    new HtmlWebpackPlugin({
        // 模板文件
        template: "./src/pages/capture-page.html",
        // 文件名(相对于output.path)，可通过文件名设置目录，如 static/pages/detail.html
        filename: "static/pages/capture-page.html",
        // 静态资源位置
        inject: "body",
        // 指定输出文件所依赖的入口文件（*.js）的[name]
        chunks: ["capturePage"],
        // 控制压缩
        minify: {
            collapseWhitespace: false,
            removeComments: true,
            removeAttributeQuotes: true,
            removeEmptyAttributes: true
        }
    }),
    new HtmlWebpackPlugin({
        // 模板文件
        template: "./src/pages/infor-page.html",
        // 文件名(相对于output.path)，可通过文件名设置目录，如 static/pages/detail.html
        filename: "static/pages/infor-page.html",
        // 静态资源位置
        inject: "body",
        // 指定输出文件所依赖的入口文件（*.js）的[name]
        chunks: ["inforPage"],
        // 控制压缩
        minify: {
            collapseWhitespace: false,
            removeComments: true,
            removeAttributeQuotes: true,
            removeEmptyAttributes: true
        }
    }),


]