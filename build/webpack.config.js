// 1. 引入模块
const path = require('path');
const entry = require('./entry');
const loaders = require('./loader');
const plugins = require('./plugins');
// 2. 导出配置
// const MY_URL = '192.168.110.182'
// 无线网地址
const MY_URL = '127.0.0.1'
const PORT = 8081
    // 本地地址
module.exports = {
    // 配置基础路径为当前目录（默认为配置文件所在的当前目录）
    context: path.resolve(__dirname, '../'),
    // 打包模式 development - 未压缩 | production - 压缩
    mode: 'development',
    // 入口 sztring | array | object
    entry,
    // 出口
    output: {
        // 输出目录/绝对路径
        path: path.resolve(__dirname, '../dist/'),
        // 输出文件名
        filename: 'static/js/[name]-bundle.js',
        // 处理静态资源的路径
        publicPath: `http://${MY_URL}:${PORT}/`,
    },
    // 加载器
    module: {
        rules: loaders
    },
    // 插件
    plugins,
    // 开发服务
    devServer: {
        contentBase: path.resolve(__dirname, "./dist/"),
        host: MY_URL,
        port: 8081,
        open: true,
        inline: true,
        hot: false // 热替换
    }
};