// schema
module.exports = {
  "componentName": "Page",
  "id": "1b3473f0-8989-11ec-91d7-41dbf8602e86",
  "props": {
    "style": {
      "display": "flex",
      "flexDirection": "column",
      "alignItems": "flex-start",
      "width": 230,
      "height": 405
    },
    "className": "mod"
  },
  "taskId": "BD12A350-F774-4E56-AAB7-57B05E1C7C6B",
  "artboardImg": "https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/145c2230898911ec9f77a7c86e4ad23f.png",
  "rect": {
    "x": 0,
    "y": 0,
    "width": 230,
    "height": 405
  },
  "pluginVersion": "4.0.24",
  "name": "demo",
  "reference": "sketch",
  "restore_id": "f1240385-fe4e-4b5d-9107-cc2f31a95dd2",
  "children": [{
    "componentName": "Carousel",
    "props": {},
    "children": [{
      "componentName": "Div",
      "id": "1b3473f1-8989-11ec-91d7-41dbf8602e86",
      "props": {
        "style": {
          "position": "relative",
          "backgroundColor": "#FF0000",
          "width": "230px",
          "height": "67px"
        },
        "className": "header"
      },
      "rect": {
        "x": 0,
        "y": 0,
        "width": 230,
        "height": 67
      },
      "selfId": "5B40E9CC-CB1E-492F-BE00-8153E2B673AC",
      "nodeLayerName": "header",
      "fileName": "header",
      "children": [{
        "componentName": "Text",
        "id": "1b3473f1-8989-11ec-91d7-41dbf8602e86",
        "props": {
          "style": {
            "position": "static"
          },
          "className": "header",
          "text": "{{this.item.name}}"
        },
        "rect": {
          "x": 0,
          "y": 0,
          "width": 230,
          "height": 67
        },
        "selfId": "5B40E9CC-CB1E-492F-BE00-8153E2B673AC",
        "nodeLayerName": "header",
        "fileName": "header",
        "loop": [1, 2]
      }]
    }]
  }, {
    "componentName": "Block",
    "id": "1b3473f1-8989-11ec-91d7-41dbf8602e86",
    "props": {
      "style": {
        "position": "relative",
        "backgroundColor": "#FF0000",
        "width": "230px",
        "height": "67px"
      },
      "className": "fuck",
      "onClick": function onClick(e) {
        alert("hello wordl3")
      },
      "hmComponent": "van-button"
    },
    "rect": {
      "x": 0,
      "y": 0,
      "width": 230,
      "height": 67
    },
    "selfId": "5B40E9CC-CB1E-492F-BE00-8153E2B673AC",
    "nodeLayerName": "header",
    "fileName": "header",
    "children": [{
      "componentName": "Text",
      "id": "1b3473f1-8989-11ec-91d7-41dbf8602e86",
      "props": {
        "style": {
          "position": "static"
        },
        "className": "header",
        "text": "{{this.item.name}}"
      },
      "rect": {
        "x": 0,
        "y": 0,
        "width": 230,
        "height": 67
      },
      "selfId": "5B40E9CC-CB1E-492F-BE00-8153E2B673AC",
      "nodeLayerName": "header",
      "fileName": "header",
      "loop": [{
        "name": "Canan"
      }, {
        "age": "18"
      }]
    }]
  }, {
    "componentName": "Block",
    "id": "1b349b00-8989-11ec-91d7-41dbf8602e86",
    "props": {
      "style": {
        "position": "relative",
        "backgroundColor": "#00D3FF",
        "width": "230px",
        "height": "271px"
      },
      "className": "body"
    },
    "rect": {
      "x": 0,
      "y": 67,
      "width": 230,
      "height": 271
    },
    "selfId": "A9C27E23-8C1D-4E7B-91CB-5D8B06DA77C1",
    "nodeLayerName": "body",
    "fileName": "body",
    "state": [{
      "age": "18",
      "name": "Canan"
    }, {
      "age": "28",
      "name": "Dany"
    }],
    "children": [{
      "componentName": "Div",
      "id": "1b3473f1-8989-11ec-91d7-41dbf8602e86",
      "props": {
        "style": {
          "position": "relative",
          "backgroundColor": "#FF0000",
          "width": "230px",
          "height": "67px"
        },
        "className": "header"
      },
      "rect": {
        "x": 0,
        "y": 0,
        "width": 230,
        "height": 67
      },
      "selfId": "5B40E9CC-CB1E-492F-BE00-8153E2B673AC",
      "nodeLayerName": "header",
      "fileName": "header",
      "children": [{
        "componentName": "Text",
        "id": "1b3473f1-8989-11ec-91d7-41dbf8602e86",
        "props": {
          "style": {
            "position": "static"
          },
          "className": "header",
          "text": "{{this.item.age}}"
        },
        "rect": {
          "x": 0,
          "y": 0,
          "width": 230,
          "height": 67
        },
        "selfId": "5B40E9CC-CB1E-492F-BE00-8153E2B673AC",
        "nodeLayerName": "header",
        "fileName": "header"
      }],
      "loop": "{{state}}"
    }],
    "methods": {
      "handleClick": function handleClick() {
        alert("hello world")
      }
    }
  }, {
    "componentName": "Block",
    "id": "1b349b01-8989-11ec-91d7-41dbf8602e86",
    "props": {
      "style": {
        "width": "230px",
        "height": "200px",
        "position": "relative",
        "backgroundColor": "#FFFC00"
      },
      "className": "footer"
    },
    "rect": {
      "x": 0,
      "y": 338,
      "width": 230,
      "height": 67
    },
    "selfId": "DF2E6061-0FB5-498E-AA60-933902F72F7B",
    "nodeLayerName": "footer",
    "fileName": "footer",
    "children": [{
      "componentName": "Div",
      "id": "1b3473f1-8989-11ec-91d7-41dbf8602e86",
      "props": {
        "style": {
          "position": "relative",
          "backgroundColor": "#FF0000",
          "width": "230px",
          "height": "67px"
        },
        "className": "header",
        "onClick": function onClick(e) {
          console.log(222)
          this.xxx()
        },
        "onAnimationStart": function onAnimationStart(e) {
          console.log(e)
        }
      },
      "rect": {
        "x": 0,
        "y": 0,
        "width": 230,
        "height": 67
      },
      "selfId": "5B40E9CC-CB1E-492F-BE00-8153E2B673AC",
      "nodeLayerName": "header",
      "fileName": "header",
      "children": []
    }],
    "state": {
      "name": "xjn"
    },
    "methods": {
      "xxx": function xxx() {
        console.log(123231)
      }
    }
  }],
  "imgcook": {
    "restore_id": "f1240385-fe4e-4b5d-9107-cc2f31a95dd2",
    "dslConfig": {
      "cssUnit": "rem",
      "dsl": "react-ifeng-standard",
      "componentStyle": "hooks",
      "cssStyle": "camelCase",
      "cssType": "css",
      "inlineStyle": "module",
      "globalCss": false,
      "jsx": "javascript",
      "outputStyle": "component",
      "dslName": "React-Ifeng",
      "renderType": "html",
      "defaultCss": true,
      "htmlFontSize": "16",
      "accessible": true,
      "responseWidth": 750
    }
  },
  "dataSource": {
    "list": [{
      "id": "getInfo",
      "isInit": false,
      "type": "fetch",
      "options": {
        "method": "GET",
        "params": {},
        "uri": "https://api.ifengcloud.ifeng.com/mock/1735/Active_Shareofficer_User/getIndexData"
      },
      "dataHandler": function dataHandler(data, error) {
        console.log('请求数据为', data)
        return data;
      }
    }]
  },
  "state": {
    "height": "160px",
    "color": "#fff",
    "lineHeight": "160px",
    "textAlign": "center",
    "background": "#364d79"
  }
  }