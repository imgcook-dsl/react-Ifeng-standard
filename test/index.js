const co = require("co"); //co 函数 => 异步执行 Generator 函数
const xtpl = require("xtpl"); // xtpl模板
const fs = require("fs"); // 文件模块
const thunkify = require("thunkify"); // 目标方法wrap
const path = require("path"); // 路径模块
const { NodeVM } = require("vm2"); //沙箱模块
const _ = require("lodash"); // javascript方法库
// 模拟shema设计稿
// const data = require('./data');
const data = require("./data2");
// 组件？
const componentsMap = require("./componentsMap");
// DSL方法
const helper = require("@imgcook/dsl-helper");
// 美化代码
const prettier = require("prettier/standalone");
const parserHtml = require("prettier/parser-html");
const parserBabel = require("prettier/parser-babel");
const parserCss = require("prettier/parser-postcss");
const parserMarkDown = require("prettier/parser-markdown");

// 入口文件（ts转js）
const entry = require("../src/index");
// 美化代码
const browerParser = {
  babel: parserBabel,
  json: parserBabel,
  vue: parserHtml,
  css: parserCss,
  scss: parserCss,
  less: parserCss,
  html: parserHtml,
  md: parserMarkDown,
};

// 沙箱（用户）环境
const vm = new NodeVM({
  console: "inherit",
  sandbox: {},
});

// 生成代码对象
const runCode = (data, dslConfig) => {
  // 深拷贝
  data = _.cloneDeep(data);
  // _.get根据 object对象的path路径获取值
  const config = _.get(data, "imgcook.dslConfig", {});
  // _.set设置 object对象中对应 path 属性路径上的值：添加dslConfig配置数据到config
  _.set(data, "imgcook.dslConfig", Object.assign(config, dslConfig));

  // 读取编译后DSL的js文件
  // const code = fs.readFileSync(
  //   path.resolve(__dirname, '../src/index.js'),
  //   'utf8'
  // );

  // 配置参数
  const options = {
    prettier: {
      format: (str, opt) => {
        if (opt && browerParser[opt.parser]) {
          opt.plugins = [browerParser[opt.parser]];
        } else {
          return str;
        }
        try {
          return prettier.format(str, opt);
        } catch (e) {
          console.error("format error", e);
          return str;
        }
      },
    },
    _: _,
    responsive: {
      width: 750,
      viewportWidth: 375,
    },
    helper,
    componentsMap,
  };

  // 生成files
  // 方式一
  // const files = vm.run(code)(data,options);
  // 方式二
  const files = entry(data, options);

  return files.panelDisplay; // 生成代码对象
};

// co异步执行函数: 生成代码对象
co(function* () {
  // 自定义配置项（生产用例）
  const panelDisplay = runCode(
    data // secha数据
  );

  // 生成代码路径

  const baseDir1 = "../demo";
  const baseDir2 = "../demo/src/mobile/index";
  const baseDir3 = "../demo/src/mobile/index/layout";

  // existsSync “同步"检测给定的路径是否存在
  if (fs.existsSync(path.join(__dirname, baseDir2))) {
    fs.rmdirSync(path.join(__dirname, baseDir2), { recursive: true });
    // console.log('删除文件夹')
  }
  mkDirsSync(path.join(__dirname, baseDir2));
  // console.log('创建文件夹', path.join(__dirname, baseDir))

  // 生成到目标目录运行
  // 根据设计稿自动生成组件目录
  panelDisplay.forEach((file) => {
    if (file.folder) {
      let fileFolder = path.join(__dirname, `${baseDir3}/${file.folder}`);
      if (!fs.existsSync(fileFolder)) {
        mkDirsSync(fileFolder);
      }
      fs.writeFileSync(
        path.join(__dirname, `${baseDir3}/${file.folder}/${file.panelName}`),
        file.panelValue
      );
    } else {
      console.log("file.panelName", file.panelName);

      var webpackConfig = /webpack.config.js/;
      var babelrc = /.babelrc/;
      var gitignore = /.gitignore/;
      var readme = /README.md/;
      var package = /package.json/;
      var indexJsx = /index.jsx/;
      var indexCss = /index.css/;
      var indexMoudelCss = /index.module.css/;

      if (package.test(file.panelName)) {
        fs.writeFileSync(
          path.join(__dirname, `${baseDir1}/${file.panelName}`),
          file.panelValue
        );
        return;
      } else if (readme.test(file.panelName)) {
        fs.writeFileSync(
          path.join(__dirname, `${baseDir1}/${file.panelName}`),
          file.panelValue
        );
        return;
      } else if (babelrc.test(file.panelName)) {
        fs.writeFileSync(
          path.join(__dirname, `${baseDir1}/${file.panelName}`),
          file.panelValue
        );
        return;
      } else if (gitignore.test(file.panelName)) {
        fs.writeFileSync(
          path.join(__dirname, `${baseDir1}/${file.panelName}`),
          file.panelValue
        );
        return;
      } else if (webpackConfig.test(file.panelName)) {
        fs.writeFileSync(
          path.join(__dirname, `${baseDir1}/${file.panelName}`),
          file.panelValue
        );
        return;
      } else if (indexJsx.test(file.panelName)) {
        fs.writeFileSync(
          path.join(__dirname, `${baseDir3}/${file.panelName}`),
          file.panelValue
        );
        return;
      } else if (indexCss.test(file.panelName)) {
        fs.writeFileSync(
          path.join(__dirname, `${baseDir3}/${file.panelName}`),
          file.panelValue
        );
        return;
      } else if (indexMoudelCss.test(file.panelName)) {
        fs.writeFileSync(
          path.join(__dirname, `${baseDir3}/${file.panelName}`),
          file.panelValue
        );
        return;
      } else {
        fs.writeFileSync(
          path.join(__dirname, `${baseDir2}/${file.panelName}`),
          file.panelValue
        );
        return;
      }
    }
  });
});

// 创建文件夹
function mkDirsSync(dirname) {
  if (fs.existsSync(dirname)) {
    return true;
  } else {
    if (mkDirsSync(path.dirname(dirname))) {
      fs.mkdirSync(dirname);
      return true;
    }
  }
}

module.exports = {
  runCode, //生成shema
};
