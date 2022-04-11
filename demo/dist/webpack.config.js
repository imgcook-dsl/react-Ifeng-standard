
  const webpack = require("webpack");
  const path = require("path");
  // 生成Html插件
  const HtmlWebpackPlugin = require("html-webpack-plugin");
  // px2rem 库
  const adaptive = require("postcss-adaptive-extra");
  
  // webpack 配置
  var config = {
    mode: "development", // production development
    // 项目的入口文件，webpack会从这个文件开始读取整个项目的依赖模块
    // entry: ["./src/index.js"],
    // 设置实时更新
    entry: [
      "webpack/hot/dev-server",
      "webpack-dev-server/client?http://localhost:3000",
      "./src/mobile/index/app.js",
    ], // 入口文件
    // 打包输出文件
    output: {
      path: path.resolve(__dirname, "dist"), //自定义打包后的文件路径
      filename: "bundle.js", //自定义打包后的文件名称
    },
    module: {
      rules: [
        {
          test: /.css$/, // 匹配css文件
          use: [
            { loader: "style-loader" },
            {
              loader: "css-loader",
              options: {
                // 模块化配置
                modules: {
                  localIdentName: "[path][name]__[local]--[hash:base64:5]", //编译后的css类名
                },
              },
            },
            // px2rem
            {
              loader: "postcss-loader",
              options: {
                postcssOptions: {
                  plugins: [
                    adaptive({
                      remUnit: 75,
                      autoRem: true,
                      useCssModules: true,
                    }),
                  ],
                },
              },
            },
            { loader: "less-loader" },
          ],
        },
        // 模版语法
        {
          test: /(.html$)|(.ejs$)|(.handlebars$)|(.hbs)/,
          loader: "handlebars-loader",
        },
        {
          test: /.js|jsx$/, // 匹配js文件
          exclude: /node_modules/, // 排除node_modules文件
          use: [{ loader: "babel-loader" }], // babel编译:es6语法
        },
        {
          test: /.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: "file-loader",
            },
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: "Hello React",
        template: "./src/mobile/index/index.html", //源文件
      }),
    ],
    // 自动补全后缀名
    resolve: {
      extensions: [".js", ".jsx", ".json"],
    },
  };
  
  module.exports = config;  
  