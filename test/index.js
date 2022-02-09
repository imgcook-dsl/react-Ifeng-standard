// 可以直接在仓库执行 node 命令进行 DSL 输出测试

const co = require('co');
// 引入xtpl模版语法
const xtpl = require('xtpl');
// 文件引用
const fs = require('fs');
// 参数传名调用
const thunkify = require('thunkify');
// 文件路径模块
const path = require('path');
// 美化代码
const prettier = require('prettier');
// 虚拟机/沙箱=> 运行代码 => 返回结果
const { NodeVM } = require('vm2');
//  JavaScript 实用工具库
const _ = require('lodash');
// imgcook生成schema数据
const data = require('./data');

// JavaScript代码可以被编译然后立即运行，或者编译，保存，并且之后运行。
const vm = new NodeVM({
  console: 'inherit',
  sandbox: {}
});

co(function*() {
  const xtplRender = thunkify(xtpl.render);
  // 读取文件
  const code = fs.readFileSync(
    path.resolve(__dirname, '../src/index.js'),
    'utf8'
  );
  // 执行脚本=>生成UI渲染信息
  const renderInfo = vm.run(code)(data, {
    // 美化代码
    prettier: prettier,
    // JavaScript 实用工具库
    _: _,
    // 宽度
    responsive: {
      width: 750,
      viewportWidth: 375
    },
    // 工具
    utils: {
      print: function(value) {
        // console.log(value);
      }
    }
  });

  //不使用模版
  if (renderInfo.noTemplate) {
    renderInfo.panelDisplay.forEach((file) => {
      // 创建文件并写入代码
      fs.writeFileSync(path.join(__dirname, `../code/${file.panelName}`), file.panelValue);
    });
  } else { 
    const renderData = renderInfo.renderData;
    const ret = yield xtplRender(
      path.resolve(__dirname, '../src/template.xtpl'),
      renderData,
      {}
    );

    const prettierOpt = renderInfo.prettierOpt || {
      printWidth: 120
    };

    const prettierRes = prettier.format(ret, prettierOpt);
    // 创建文件并写入代码
    fs.writeFileSync(path.join(__dirname,'../code/result.js'), prettierRes);
  }
});
