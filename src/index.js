// 脚本：Node 虚拟机里运行的 function 代码 
    
//schema里面描述了 imgcook 还原后的节点树结构、节点 UI 以及节点逻辑 
//option：提供一些辅助的函数方法、响应式配置、团队公共函数和三方库
module.exports = function(schema, option) { 
  // 美化代码
  const {prettier} = option;

  // imports组件
  const imports = [];

  // js样式组件
  const style = {};

  // css样式组件
  const cssStyles = [];

  // 全局公共方法组件
  const utils = [];

  // Classes组件
  const classes = [];

  // Hooks组件
  const hooks = [];

  // vw尺寸:1vw = width / 100
  const _w = option.responsive.width / 100;

  // 表达式
  const isExpression = (value) => {
    return /^\{\{.*\}\}$/.test(value);
  }
  // 字符串方法
  const toString = (value) => {
    if ({}.toString.call(value) === '[object Function]') {
      return value.toString();
    }
    if (typeof value === 'string') {
      return value;
    }
    if (typeof value === 'object') {
      return JSON.stringify(value, (key, value) => {
        if (typeof value === 'function') {
          return value.toString();
        } else {
          return value;
        }
      })
    }

    return String(value);
  };

  // 转换 function, return params and content
  const parseFunction = (func) => {

    const funcString = func.toString();

    const params = funcString.match(/\([^\(\)]*\)/)[0].slice(1, -1);

    const content = funcString.slice(funcString.indexOf('{') + 1, funcString.lastIndexOf('}'));
    console.log('返回参数:',params,'返回内容:',content);
    return {
      params,
      content
    };
  }

  // 转换 layer props(static values or expression)
  const parseProps = (value, isReactNode) => {
    if (typeof value === 'string') {
      if (isExpression(value)) {
        if (isReactNode) {
          return value.slice(1, -1);
        } else {
          return value.slice(2, -2);
        }
      }

      if (isReactNode) {
        return value;
      } else {
        return `'${value}'`;
      }
    } else if (typeof value === 'function') {
      const {params, content} = parseFunction(value);
      return `(${params}) => {${content}}`;
    }
  }

  // 转换 async dataSource
  const parseDataSource = (data) => {
    const name = data.id;
    const {uri, method, params} = data.options;
    const action = data.type;
    let payload = {};

    switch (action) {
      case 'fetch':
        if (imports.indexOf(`import {fetch} from whatwg-fetch`) === -1) {
          imports.push(`import {fetch} from 'whatwg-fetch'`);
        }
        payload = {
          method: method
        };

        break;
      case 'jsonp':
        if (imports.indexOf(`import {fetchJsonp} from fetch-jsonp`) === -1) {
          imports.push(`import jsonp from 'fetch-jsonp'`);
        }
        break;
    }

    Object.keys(data.options).forEach((key) => {
      if (['uri', 'method', 'params'].indexOf(key) === -1) {
        payload[key] = toString(data.options[key]);
      }
    });

    // params parse should in string template
    if (params) {
      payload = `${toString(payload).slice(0, -1)} ,body: ${isExpression(params) ? parseProps(params) : toString(params)}}`;
    } else {
      payload = toString(payload);
    }

    let result = `{
      ${action}(${parseProps(uri)}, ${toString(payload)})
        .then((response) => response.json())
    `;

    if (data.dataHandler) {
      const { params, content } = parseFunction(data.dataHandler);
      result += `.then((${params}) => {${content}})
        .catch((e) => {
          console.log('error', e);
        })
      `
    }

    result += '}';

    return `${name}() ${result}`;
  }

  // 转换 condition: whether render the layer
  const parseCondition = (condition, render) => {
    if (typeof condition === 'boolean') {
      return `${condition} && ${render}`
    } else if (typeof condition === 'string') {
      return `${condition.slice(2, -2)} && ${render}`
    }
  }

  // 转换loop render
  const parseLoop = (loop, loopArg, render) => {
    let data;
    let loopArgItem = (loopArg && loopArg[0]) || 'item';
    let loopArgIndex = (loopArg && loopArg[1]) || 'index';

    if (Array.isArray(loop)) {
      data = toString(loop);
    } else if (isExpression(loop)) {
      data = loop.slice(2, -2);
    }

    // add loop key
    const tagEnd = render.match(/^<.+?\s/)[0].length;
    render = `${render.slice(0, tagEnd)} key={${loopArgIndex}}${render.slice(tagEnd)}`;

    // remove `this` 
    const re = new RegExp(`this.${loopArgItem}`, 'g')
    render = render.replace(re, loopArgItem);

    return `${data}.map((${loopArgItem}, ${loopArgIndex}) => {
      return (${render});
    })`;
  }

  // 转换样式style
  const parseStyle = (style) => {
    for (let key in style) {
      switch (key) {
        case 'fontSize':
        case 'marginTop':
        case 'marginBottom':
        case 'paddingTop':
        case 'paddingBottom':
        case 'height':
        case 'top':
        case 'bottom':
        case 'width':
        case 'maxWidth':
        case 'left':
        case 'right':
        case 'paddingRight':
        case 'paddingLeft':
        case 'marginLeft':
        case 'marginRight':
        case 'lineHeight':
        case 'borderBottomRightRadius':
        case 'borderBottomLeftRadius':
        case 'borderTopRightRadius':
        case 'borderTopLeftRadius':
        case 'borderRadius':
          style[key] = (parseInt(style[key]) / _w).toFixed(2) + 'vw';
          break;
      }
    }

    return style;
  }
  // 转换样式css
  const parseCss = (style, options) => {
    let cssStyle = ``
    const isCss = options && options.type === 'css'
    for (let key in style) {
      switch (key) {
        case 'fontSize':
        case 'marginTop':
        case 'marginBottom':
        case 'paddingTop':
        case 'paddingBottom':
        case 'height':
        case 'top':
        case 'bottom':
        case 'width':
        case 'maxWidth':
        case 'left':
        case 'right':
        case 'paddingRight':
        case 'paddingLeft':
        case 'marginLeft':
        case 'marginRight':
        case 'lineHeight':
        case 'borderBottomRightRadius':
        case 'borderBottomLeftRadius':
        case 'borderTopRightRadius':
        case 'borderTopLeftRadius':
        case 'borderRadius':
          style[key] = (parseInt(style[key]) / _w).toFixed(2) + 'vw';
          break;
      }
      if(isCss) {
        const formatKey = (key) => {
          const reg = /[A-Z]/
          const formatKey = key
            .split('')
            .map((char, index, arr) => {
              if(reg.test(char)) {
                return `-${char.toLowerCase()}`       
              }
              return char
            })
          return formatKey.join('')
        }
        const cssKey = formatKey(key)
        if(cssKey !== 'background-image') {
          cssStyle += `${cssKey}:${style[key]};`
        }
      }
    }
    return cssStyle
  }
  // class渲染xml
  const generateRenderClass = (schema) => {
    // 组件类型
    const type = schema.componentName.toLowerCase();
    // 类名
    const className = schema.props && schema.props.className;
    // 样式名
    const classString = className ? ` style={styles.${className}}` : '';

    // 生成样式
    if (className) {
      //parseStyle 样式
      style[className] = parseStyle(schema.props.style);
      //parseCss 样式
      cssStyles.push(`.${className}{${parseCss(schema.props.style, {type: 'css'})}}`);
    }

    let xml;
    let props = '';

    // 生成对应的值（待）
    Object.keys(schema.props).forEach((key) => {
      if (['className', 'style', 'text', 'src'].indexOf(key) === -1) {
        props += ` ${key}={${parseProps(schema.props[key])}}`;
      }

    })

    // 创建标签内容
    switch(type) {
      case 'text': // 文本
        const innerText = parseProps(schema.props.text, true);
        xml = `<span${classString}${props}>${innerText}</span>`;
        break;
      case 'image': // 图片
        const source = parseProps(schema.props.src);
        xml = `<img${classString}${props} src={${source}} />`;
        break;
      case 'div': 
      case 'page':
      case 'block':
        if (schema.children && schema.children.length) {
          xml = `<div${classString}${props}>${transformClass(schema.children)}</div>`;
        } else {
          xml = `<div${classString}${props} />`;
        }
        break;
    }
    // 循环
    if (schema.loop) {
      xml = parseLoop(schema.loop, schema.loopArgs, xml)
    }
    // 条件
    if (schema.condition) {
      xml = parseCondition(schema.condition, xml);
    }
    // 条件循环
    if (schema.loop || schema.condition) {
      xml = `{${xml}}`;
    }

    return xml;
  }
  // schema转换class代码
  const transformClass = (schema) => {
    let result = '';

    // 转换字符串
    if (Array.isArray(schema)) {
      schema.forEach((layer) => {
        result += transformClass(layer);
      });
    } else {
      const type = schema.componentName.toLowerCase();
      // page/block都不是
      if (['page', 'block'].indexOf(type) !== -1) {
        // 容器组件处理: state/method/dataSource/lifeCycle/render
        const states = [];
        const lifeCycles = [];
        const methods = [];
        const init = [];
        const render = [`render(){ return (`];
        // 创建class式脚手架
        let classData = [`class ${schema.componentName}_${classes.length} extends Component {`];

        // states组件:创建state对象
        if (schema.state) {
          states.push(`state = ${toString(schema.state)}`);
        }
        // methods组件:创建方法
        if (schema.methods) {
          Object.keys(schema.methods).forEach((name) => {
            const { params, content } = parseFunction(schema.methods[name]);
            methods.push(`${name}(${params}) {${content}}`);
          });
        }
        // init组件：创建数据源声明
        if (schema.dataSource && Array.isArray(schema.dataSource.list)) {
          schema.dataSource.list.forEach((item) => {
            if (typeof item.isInit === 'boolean' && item.isInit) {
              init.push(`this.${item.id}();`)
            } else if (typeof item.isInit === 'string') {
              init.push(`if (${parseProps(item.isInit)}) { this.${item.id}(); }`)
            }
            methods.push(parseDataSource(item));
          });
        // 创建数据源方法
          if (schema.dataSource.dataHandler) {
            const { params, content } = parseFunction(schema.dataSource.dataHandler);
            methods.push(`dataHandler(${params}) {${content}}`);
            init.push(`this.dataHandler()`);
          }
        }
        // lifeCycles组件:创建constructor
        if (schema.lifeCycles) {
          if (!schema.lifeCycles['_constructor']) {
            lifeCycles.push(`constructor(props, context) { super(); ${init.join('\n')}}`);
          }
          Object.keys(schema.lifeCycles).forEach((name) => {
            const { params, content } = parseFunction(schema.lifeCycles[name]);

            if (name === '_constructor') {
              lifeCycles.push(`constructor(${params}) { super(); ${content} ${init.join('\n')}}`);
            } else {
              lifeCycles.push(`${name}(${params}) {${content}}`);
            }
          });
        }

        render.push(generateRenderClass(schema))
        render.push(`);}`);

        // 组件合并
        classData = classData.concat(states).concat(lifeCycles).concat(methods).concat(render);
        classData.push('}');
        classes.push(classData.join('\n'));
      } else {
        // 递归
        result += generateRenderClass(schema);
      }
    }

    return result;
  };

  // Hook渲染xml
  const generateRenderHook = (schema) => {
    // 组件类型
    const type = schema.componentName.toLowerCase();
    // 类名
    const className = schema.props && schema.props.className;
    // 样式名
    const classString = className ? ` style={styles.${className}}` : '';

    // 生成样式
    if (className) {
      //parseStyle 样式
      style[className] = parseStyle(schema.props.style);
      //parseCss 样式
      cssStyles.push(`.${className}{${parseCss(schema.props.style, {type: 'css'})}}`);
    }

    let xml;
    let props = '';

    // 生成对应的值（待）
    Object.keys(schema.props).forEach((key) => {
      if (['className', 'style', 'text', 'src'].indexOf(key) === -1) {
        props += ` ${key}={${parseProps(schema.props[key])}}`;
      }

    })

    // 创建标签内容
    switch(type) {
      case 'text': // 文本
        const innerText = parseProps(schema.props.text, true);
        xml = `<span${classString}${props}>${innerText}</span>`;
        break;
      case 'image': // 图片
        const source = parseProps(schema.props.src);
        xml = `<img${classString}${props} src={${source}} />`;
        break;
      case 'div': 
      case 'page':
      case 'block':
        if (schema.children && schema.children.length) {
          xml = `<div${classString}${props}>${transformHook(schema.children)}</div>`;
        } else {
          xml = `<div${classString}${props} />`;
        }
        break;
    }
    // 循环
    if (schema.loop) {
      xml = parseLoop(schema.loop, schema.loopArgs, xml)
    }
    // 条件
    if (schema.condition) {
      xml = parseCondition(schema.condition, xml);
    }
    // 条件循环
    if (schema.loop || schema.condition) {
      xml = `{${xml}}`;
    }

    return xml;
  }
  // schema转换Hooks代码
  const transformHook = (schema) => {
    let result = '';

    // 转换字符串
    if (Array.isArray(schema)) {
      // 递归转字符串
      schema.forEach((layer) => {
        result += transformHook(layer);
      });
    } else {
      // 判断组件类型
      const type = schema.componentName.toLowerCase();
      // page/block都不是
      if (['page', 'block'].indexOf(type) !== -1) {
        // 容器组件处理: state/method/dataSource/lifeCycle/render
        const states = [];
        const lifeCycles = [];
        const methods = [];
        const init = [];
        
        // 创建hook式脚手架
        const render = [`return (`];
        let classData = [`const ${schema.componentName}_${hooks.length} = () => { \n const [state, setState] = useState([])`];

        render.push(generateRenderHook(schema))
        render.push(`)`);

        // 组件合并
        classData = classData.concat(states).concat(lifeCycles).concat(methods).concat(render);
        classData.push('}');
        hooks.push(classData.join('\n'));
      } else {
        // 递归
        result += generateRenderHook(schema);
      }
    }
    // 返回值为字符串
    return result;
  };

  // 创建导入外部的方法
  if (option.utils) {
    Object.keys(option.utils).forEach((name) => {
      utils.push(`const ${name} = ${option.utils[name]}`);
    });
  }

  // schema转换class代码
  transformClass(schema);

  // schema转换class代码
  transformHook(schema);

  // html代码格式
  const htmlPrettierOpt = {
    parser: 'html',
    printWidth: 120,
    singleQuote: true
  };

  // babel代码格式
  const prettierOpt = {
    parser: 'babel',
    printWidth: 120,
    singleQuote: true
  };

  // css代码格式
  const cssPrettierOpt = {
    parser: 'css',
    printWidth: 120,
  };

  // html代码格式
  const jsonPrettierOpt = {
    parser: 'json',
    printWidth: 120,
    singleQuote: true
  };
  // 返回值
  return {
    // 生成文件
    panelDisplay: [
      // index.html
      {
        panelName: `index.html`,
        panelValue: prettier.format(`
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
            <meta name="theme-color" content="#000000">
          </head>
          <body>
            <div id="container" style="padding: 24px" />
            <script>var mountNode = document.getElementById('container');</script>
          </body>
        </html>
        `, htmlPrettierOpt),
        panelType: 'html',
      },
      // app.jsx
      {
        panelName: `app.jsx`,
        panelValue: prettier.format(`
        'use strict';
        import React from 'react';
        import ReactDOM from 'react-dom';
        
        import './index.css';
        import App from './components/Block1';
        
        ReactDOM.render(<App />, document.getElementById('container'));
        `, prettierOpt),
        panelType: 'js',
      },
      // class逻辑(index.jsx)
      {
        panelName: `index.jsx`,
        panelValue: prettier.format(`
          'use strict';
          // class式;
          import React, { Component } from 'react';
          ${imports.join('\n')}
          import styles from './index.css';
          ${utils.join('\n')}
          ${classes.join('\n')}
          export default ${schema.componentName}_0;
        `, prettierOpt),
        panelType: 'js',
      },
      // Hooks逻辑(index.jsx)
      {
        panelName: `index2.jsx`,
        panelValue: prettier.format(`
          'use strict';
          // Hooks式;
          import React, { useState, useEffect } from 'react';
          ${imports.join('\n')}
          import styles from './index.css';
          ${utils.join('\n')}
          ${hooks.join('\n')}
          export default ${schema.componentName}_0;
        `, prettierOpt),
        panelType: 'js',
      },
      // css样式
      {
        panelName: `index.css`,
        panelValue: prettier.format(`${cssStyles.join('\n')}`, cssPrettierOpt),
        panelType: 'css'
      },
      // js样式
      {
        panelName: `style.js`,
        panelValue: prettier.format(`export default ${toString(style)}`, prettierOpt),
        panelType: 'js'
      },
      // json
      {
        panelName: `package.json`,
        panelValue: prettier.format(`
        {
          "title": "imgcook demo",
          "scripts": {
            "test": "react-scripts test --env=jsdom",
            "start": "react-scripts start",
            "eject": "react-scripts eject",
            "build": "react-scripts build"
          },
          "main": "index.js",
          "devDependencies": {
            "typescript": "^4.0.5"
          },
          "dependencies": {
            "react-scripts": "^4.0.0",
            "react-dom": "^16.14.0",
            "react": "^16.14.0"
          },
          "browserslist": [">0.2%", "not dead", "not ie <= 11", "not op_mini all"]
        }
        
        `, jsonPrettierOpt),
        panelType: 'json'
      }
    ],
    noTemplate: true
  };
}
