// 构建打包
const path = require('path');

module.exports = {
  //启用 Watch 模式。这意味着在初始构建之后，webpack 将继续监听任何已解析文件的更改。
  watch: true,
  // 导入
  // entry: './src/entry.js',
  entry: './src/core/entry.ts',
  // 解析文件
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  // 规则
  module: {
    rules: [
      {
        test: /\.tsx?$/, //引入所有通过断言测试的模块。如果你提供了一个 Rule.test 选项，就不能再提供 Rule.resource
        use:'ts-loader',//每个入口(entry)指定使用一个 loader。
        exclude: /node_modules/,//排除所有符合条件的模块。如果你提供了 Rule.exclude 选项，就不能再提供 Rule.resource。
    },
    ]
  },
  //导出
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'src'),
    //CommonJS 环境
    libraryTarget: 'commonjs2',
  }
};