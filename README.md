# 依赖说明
## webpack相关
- webpack：webpack核心
- webpack-cli：wenpack脚手架，方便操作webpack
- webpack-dev-server：webpack开发服务器，用于开发环境下的热更新
- webpack-merge：合并不同配置文件的webpack配置，用于管理公共配置和特定环境配置
- cross-env：跨平台设置和使用环境变量

## 样式相关
- mini-css-extract-plugin: 抽离css代码到单独的文件
- MiniCssExtractPlugin.loader：mini-css-extract-plugin提供的压缩css代码的loader，使用时替换掉style-loader
- css-minimizer-webpack-plugin：优化和压缩css
- style-loader：将模块导出的内容作为样式添加到dom中
- css-loader：加载css文件并解析import的css文件，最终返回css代码
- sass-loader：加载并编译sass/scss文件转换为css文件
- less-loader：加载并编译less文件转换为css文件
- postcss-loader：加载并转换css/sss文件

## html模板插件
- html-webpack-plugin：自动生成index.htmk文件并将打包后的js文件通过script标签引入

## 静态资源
### webpack4
- file-loader：将文件发送到输出目录
- url-loader：将文件作为data URI内联到bundle中
- raw-loader：将文件导入为字符串

### webpack5
- asset/resource：发送一个单独的文件并导出URL。之前使用file-loader
- asset/inline：导出一个资源的data URI。之前使用url-loader
- asset/source：导出资源的源代码。之前使用raw-loader
- asset：在导出一个data URL和发送一个独立的文件之间自动选择。之前使用url-loader，且有配置资源体积有限

## babel相关
### babel 7.4之后
- babel-loader：webpack中用babel解析ES6的桥梁，可以将ES6语法转为ES5
- @babel/core：babel的核心模块
- @babel/preset-env：babel预设，一组babel插件的集合
- @babel/runtime：内部包含了helper辅助函数，这些函数是babel转化语法时用到的
- @babel/plugin-transform-runtime：babel插件，用于和@babel/runtime配合使用，以引用helper函数减小代码体积

- core-js：模块化标准库，维护了ECMAScript所有标准的polyfill实现
- regenerator-runtime：为生成器函数提供运行时

## react相关
- @babel/preset-react：将jsx转为ES5
- react：react核心
- react-dom：react与dom的连接