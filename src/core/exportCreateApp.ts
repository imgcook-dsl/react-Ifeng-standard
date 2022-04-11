import { IPanelDisplay } from './interface';

import { CSS_TYPE, OUTPUT_TYPE, prettierJsOpt, prettierCssOpt, prettierJsonOpt, prettierHtmlOpt } from './consts';

// 创建全部项目的配置文件
export default function exportCreateApp(schema, option): IPanelDisplay[] {
  const folderName = schema.folderName;

  
  const {
    dependencies,
    dslConfig,
    _,
    prettier
  } = option;

  let panelValue = '';
  const panelDisplay: IPanelDisplay[] = [];

  // index.html
  panelValue = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <meta name="theme-color" content="#000000">
      <title>Demo</title>
    </head>
    <body>
      <!-- <div id="container" style="padding: 24px" /> -->
      <!-- <script>var mountNode = document.getElementById('container');</script> -->
      <div id="container"></div>
    </body>
  </html>`
  panelDisplay.push({
    panelName: `index.html`,
    panelType: 'html',
    panelValue,
    folder: option.folder || '',
  });



  // App.js
  const isGlobal = schema.css && dslConfig.globalCss && dslConfig.inlineStyle !== CSS_TYPE.INLINE_CSS;
  panelValue = `'use strict';
  import React from 'react';
  import ReactDOM from 'react-dom';
  
  ${isGlobal ? " import './global.css';" : ''}
  import './App.css';
  import App from './layout/index.jsx';
  
  ReactDOM.render(<App />, document.getElementById('container'));
  `
  panelDisplay.push({
    panelName: `App.js`,
    panelType:  'js',
    panelValue:  prettier.format(panelValue, prettierJsOpt),
    folder: option.folder || '',
  });

  // index.css
  panelValue = ``
  panelDisplay.push({
    panelName: `index.css`,
    panelType: 'css',
    panelValue:  prettier.format(panelValue, prettierCssOpt),
    folder: option.folder || '',
  });
  
  // App.css
  panelValue = ``
  panelDisplay.push({
    panelName: `App.css`,
    panelType: 'css',
    panelValue:  prettier.format(panelValue, prettierCssOpt),
    folder: option.folder || '',
  });

  // READMD.md
  panelValue = ``
  panelDisplay.push({
    panelName: `README.md`,
    panelType: 'md',
    panelValue:  panelValue,
    folder: option.folder || '',
  });

  // READMD.md
  panelValue = ``
  panelDisplay.push({
    panelName: `README.md`,
    panelType: 'md',
    panelValue:  panelValue,
    folder: option.folder || '',
  });

  //.gitignore
  panelValue = ``
  panelDisplay.push({
    panelName: `.gitignore`,
    panelType: '',
    panelValue:  panelValue,
    folder: option.folder || '',
  });

  //.babelrc
   panelValue = `
   {
    "presets": [
      "@babel/preset-env",
      "@babel/preset-react"
    ]
  }
   `
   panelDisplay.push({
     panelName: `.babelrc`,
     panelType: '',
     panelValue:  panelValue,
     folder: option.folder || '',
   });

  // dependencies
  let packDependencies = dependencies;

  // if (schema.imgcook && schema.imgcook.dependencies) {
  //   schema.imgcook.dependencies.forEach(({packageRax1, versionRax1}) => {
  //     packDependencies[packageRax1] = versionRax1
  //   })
  // }


  // package.json
  const packageJson = {
    "title": "imgcook demo",
    "name": "demo",
    "version": "1.0.0",
    "description": "",
    "scripts": {
      "react_test": "react-scripts test --env=jsdom",
      "react_start": "react-scripts start",
      "react_eject": "react-scripts eject",
      "react_build": "react-scripts build",
      "test": "echo \"Error: no test specified\" && exit 1",
      "dev": "webpack-dev-server --open --mode=development --hot",
      "start": "webpack-dev-server --mode=development --port 3000 --hot",
      "build": "webpack --mode=production",
    },
    "main": "index.js",
    "author": "",
    "license": "ISC",
    "devDependencies": {
      "typescript": "^4.0.5"
    },
    "dependencies": {
      "@babel/core": "^7.17.9",
      "@babel/preset-env": "^7.16.11",
      "@babel/preset-react": "^7.16.7",
      "babel-loader": "^8.2.4",
      "babel-plugin-transform-runtime": "^6.23.0",
      "babel-preset-stage-0": "^6.24.1",
      "css-loader": "^6.7.1",
      "html-webpack-plugin": "^5.5.0",
      "less": "^4.1.2",
      "less-loader": "^10.2.0",
      "postcss-adaptive-extra": "^1.0.5",
      "postcss-loader": "^6.2.1",
      "react": "^18.0.0",
      "react-dom": "^18.0.0",
      "style-loader": "^3.3.1",
      "webpack": "^5.71.0",
      "webpack-cli": "^4.9.2",
      "webpack-dev-server": "^4.8.1",
      ...packDependencies
    },
    "browserslist": [
      ">0.2%",
      "not dead",
      "not ie <= 11",
      "not op_mini all"
    ]
  }
  panelValue = JSON.stringify(packageJson, null, 4)
  panelDisplay.push({
    panelName: `package.json`,
    panelType: 'json',
    panelValue:  prettier.format(panelValue, prettierJsonOpt),
    folder: option.folder || '',
  });

  //webpack.config.js
  panelValue = `
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
      "./src/mobile/index/App.js",
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
                      remUnit: 37.5,
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
        {
          test: /.js|jsx$/, // 匹配js文件
          exclude: /node_modules/, // 排除node_modules文件
          use: [{ loader: "babel-loader" }], // babel编译:es6语法
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
  `
  panelDisplay.push({
    panelName: `webpack.config.js`,
    panelType: 'js',
    panelValue:  panelValue,
    folder: option.folder || '',
  });

  if (dslConfig.useTypescript) {
    panelValue = `{
      "compilerOptions": {
        "target": "es5",
        "lib": [
          "dom",
          "dom.iterable",
          "esnext"
        ],
        "allowJs": true,
        "skipLibCheck": true,
        "esModuleInterop": true,
        "allowSyntheticDefaultImports": true,
        "strict": true,
        "forceConsistentCasingInFileNames": true,
        "noFallthroughCasesInSwitch": true,
        "module": "esnext",
        "moduleResolution": "node",
        "resolveJsonModule": true,
        "isolatedModules": true,
        "noEmit": true,
        "jsx": "react-jsx"
      },
      "include": [
        "src"
      ]
    }
     `
    panelDisplay.push({
      panelName: `tsconfig.json`,
      panelType: 'json',
      panelValue:  prettier.format(panelValue, prettierJsonOpt),
      folder: option.folder || '',
    });
  }


  return panelDisplay;
}
