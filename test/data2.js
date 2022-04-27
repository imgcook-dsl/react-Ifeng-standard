// schema
module.exports = {
  "componentName": "Page",
  "id": "fe7bcc50-baf6-11ec-9f47-3b49428c8bee",
  "props": {
    "style": {
      "display": "flex",
      "flexDirection": "column",
      "alignItems": "flex-start",
      "width": 750,
      "position": "relative"
    },
    "className": "page"
  },
  "taskId": "EEC7E966-8CD2-4E81-882E-FFEC5DC3E0FB",
  "artboardImg": "https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/a7f05770baf611ec8a95e9877b16dcfa.png",
  "rect": {
    "x": 0,
    "y": 0,
    "width": 751,
    "height": 2310
  },
  "pluginVersion": "4.2.0",
  "smart": {
    "layerProtocol": {
      "custom-layout": {
        "type": "skip"
      }
    }
  },
  "layerProtocols": ["group", "merge"],
  "name": "detail",
  "reference": "sketch",
  "restore_id": "e43e13ed-1b74-4130-9e1f-d5ba27b7ace8",
  "children": [{
    "componentName": "Block",
    "id": "ef7d647f-4df8-4370-9200-7032669cf36b",
    "props": {
      "style": {
        "display": "flex",
        "position": "relative",
        "alignItems": "flex-start",
        "flexDirection": "column"
      },
      "className": "group"
    },
    "rect": {
      "x": 0,
      "y": 0,
      "width": 750,
      "height": 510
    },
    "selfId": "D7794A64-66CB-4AE8-B7D9-47AE063E9657",
    "fileName": "mod_0",
    "smart": {
      "layerProtocol": {
        "group": {
          "type": "group"
        },
        "module": {
          "type": "smartModule"
        }
      }
    },
    "nodeLayerName": "header#group#",
    "children": [{
      "componentName": "Div",
      "id": "84e1aa0c-f103-4863-974e-d10d0ce59380",
      "props": {
        "style": {
          "display": "flex",
          "position": "relative",
          "alignItems": "flex-start",
          "flexDirection": "row",
          "justifyContent": "center"
        },
        "className": "header"
      },
      "rect": {
        "x": 0,
        "y": 0,
        "width": 750,
        "height": 88
      },
      "smart": {
        "layerProtocol": {
          "group": {
            "type": "group"
          }
        }
      },
      "selfId": "F9EA57F3-02AA-492D-ACA4-7A73A13F75FB",
      "nodeLayerName": "statusBar#group#",
      "children": [{
        "componentName": "Image",
        "id": "fe7bf360-baf6-11ec-9f47-3b49428c8bee",
        "props": {
          "style": {
            "width": "750px",
            "height": "88px"
          },
          "src": "https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/a5c89570baf611ec9724af04dac194c3.png",
          "className": "floor-bg"
        },
        "rect": {
          "x": 0,
          "y": 0,
          "width": 750,
          "height": 88
        },
        "smart": {
          "layerProtocol": {
            "merge": {
              "type": "merge"
            },
            "field": {
              "type": "logo"
            }
          },
          "nodeIdentification": {
            "fieldBind": ["logo"]
          },
          "nodeCustom": {
            "fieldBind": {
              "confidential": 0.9960941672325134,
              "isConfident": true,
              "label": "logo",
              "type": "fieldBind"
            }
          }
        },
        "selfId": "9535DDE0-67F1-4836-A45C-1786B933DDBC",
        "nodeLayerName": "statusBar#merge#"
      }]
    }, {
      "componentName": "Div",
      "id": "1164bb44-83e4-4a60-a8f8-191e2dba8044",
      "props": {
        "style": {
          "display": "flex",
          "position": "relative",
          "alignItems": "flex-start",
          "flexDirection": "row",
          "justifyContent": "center"
        },
        "className": "body"
      },
      "rect": {
        "x": 0,
        "y": 88,
        "width": 750,
        "height": 422
      },
      "smart": {
        "layerProtocol": {
          "group": {
            "type": "group"
          }
        }
      },
      "selfId": "9DD18C46-1D32-47DC-B16D-E598B3A7AC82",
      "nodeLayerName": "video#group#",
      "children": [{
        "componentName": "Image",
        "id": "fe7bf362-baf6-11ec-9f47-3b49428c8bee",
        "props": {
          "style": {
            "width": "750px",
            "height": "422px"
          },
          "src": "https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/a70470d0baf611ec9c3151293f42903f.png",
          "className": "banner"
        },
        "rect": {
          "x": 0,
          "y": 88,
          "width": 750,
          "height": 422
        },
        "smart": {
          "layerProtocol": {
            "merge": {
              "type": "merge"
            },
            "field": {
              "type": "banner"
            }
          },
          "nodeIdentification": {
            "fieldBind": ["banner"]
          },
          "nodeCustom": {
            "fieldBind": {
              "confidential": 0.9888113737106323,
              "isConfident": true,
              "label": "banner",
              "type": "fieldBind"
            }
          }
        },
        "selfId": "4AEF1E1E-09DD-4D79-9221-C810EE94EDB8",
        "nodeLayerName": "video#merge#"
      }]
    }]
  }, {
    "componentName": "Block",
    "id": "3c41cfb3-4b40-4296-b486-feb919f98534",
    "props": {
      "style": {
        "display": "flex",
        "position": "relative",
        "alignItems": "flex-start",
        "flexDirection": "column"
      },
      "className": "list-1v2"
    },
    "rect": {
      "x": 0,
      "y": 510,
      "width": 751,
      "height": 554
    },
    "selfId": "0F0ABBE9-4B0A-4C8E-A375-D4FEA1EB6453",
    "fileName": "mod_1",
    "smart": {
      "layerProtocol": {
        "group": {
          "type": "group"
        },
        "module": {
          "type": "smartModule",
          "name": "list-1v2"
        }
      }
    },
    "nodeLayerName": "intro#group#",
    "children": [{
      "componentName": "Component",
      "id": "b8a08b5b-50e7-4c10-a86a-cf176199ae2b",
      "props": {
        "style": {
          "display": "flex",
          "position": "relative",
          "alignItems": "flex-start",
          "flexDirection": "row",
          "width": "751px"
        },
        "className": "header-1"
      },
      "rect": {
        "x": 0,
        "y": 510,
        "width": 751,
        "height": 80
      },
      "smart": {
        "layerProtocol": {
          "group": {
            "type": "group"
          }
        }
      },
      "selfId": "4D50C0E5-C258-4AD3-AFB6-E1E1A37B29AA",
      "nodeLayerName": "introHeader#group#",
      "children": [{
        "componentName": "Div",
        "id": "fe7c1a76-baf6-11ec-9f47-3b49428c8bee",
        "props": {
          "style": {
            "boxSizing": "border-box",
            "display": "flex",
            "position": "relative",
            "alignItems": "center",
            "flexDirection": "row",
            "justifyContent": "space-between",
            "backgroundColor": "#FFFFFF",
            "paddingRight": "30px",
            "paddingLeft": "30px",
            "width": "750px",
            "height": "80px"
          },
          "className": "container"
        },
        "rect": {
          "x": 0,
          "y": 510,
          "width": 750,
          "height": 80
        },
        "selfId": "5B8A06F4-E86F-4FF0-9817-8A3F2FE6B8F7",
        "nodeLayerName": "Rectangle 6",
        "children": [{
          "componentName": "Div",
          "id": "fe7bf365-baf6-11ec-9f47-3b49428c8bee",
          "props": {
            "style": {
              "position": "absolute",
              "bottom": "0px",
              "left": "0px",
              "borderWidth": "1px",
              "borderStyle": "solid",
              "borderColor": "#F1F2F3",
              "width": "751px",
              "height": "1px"
            },
            "className": "empty"
          },
          "rect": {
            "x": 0,
            "y": 589,
            "width": 751,
            "height": 1
          },
          "selfId": "075059E3-0B64-4895-880A-EC3829ABD1B7",
          "nodeLayerName": "bottomLine"
        }, {
          "componentName": "Div",
          "id": "9661d4a7-1639-4487-91a1-22f00bb98fa5",
          "props": {
            "style": {
              "display": "flex",
              "position": "relative",
              "alignItems": "flex-start",
              "flexDirection": "row",
              "marginTop": "1px",
              "fontWeight": 500,
              "lineHeight": "45px",
              "whiteSpace": "nowrap"
            },
            "className": "title-wrapper"
          },
          "rect": {
            "x": 30,
            "y": 528,
            "width": 64,
            "height": 45
          },
          "smart": {
            "layerProtocol": {
              "group": {
                "type": "group"
              }
            }
          },
          "selfId": "161DDC8C-5986-4ED5-9FFB-562D2FAF660B",
          "nodeLayerName": "introTitle#group#",
          "children": [{
            "componentName": "Text",
            "id": "fe7bf367-baf6-11ec-9f47-3b49428c8bee",
            "props": {
              "style": {
                "color": "#212223",
                "fontFamily": "PingFang SC",
                "fontSize": "32px"
              },
              "text": "简介",
              "lines": 1,
              "className": "title"
            },
            "rect": {
              "x": 30,
              "y": 528,
              "width": 64,
              "height": 45
            },
            "selfId": "EE58631E-F1C7-4FE7-9536-1C110FA931790",
            "nodeLayerName": "简介"
          }]
        }, {
          "componentName": "Div",
          "id": "f9b1e55e-424e-40a2-9140-01405e8a7d4d",
          "props": {
            "style": {
              "display": "flex",
              "flexDirection": "row",
              "justifyContent": "center",
              "alignItems": "center",
              "position": "relative"
            },
            "className": "wrapper"
          },
          "rect": {
            "x": 344,
            "y": 522,
            "width": 376,
            "height": 56
          },
          "smart": {
            "layerProtocol": {
              "group": {
                "type": "group"
              }
            }
          },
          "selfId": "D992F8C7-5F8A-4886-99B4-AA8E2A10415D",
          "nodeLayerName": "searchWrap#group#",
          "children": [{
            "componentName": "Div",
            "id": "fe52324d-5810-44d9-8e24-767277f1961a",
            "props": {
              "style": {
                "display": "block",
                "lineHeight": "28px",
                "backgroundColor": "#F5F5F5",
                "borderTopLeftRadius": "28px",
                "borderBottomLeftRadius": "28px",
                "whiteSpace": "nowrap",
                "borderWidth": "1px",
                "borderStyle": "solid",
                "borderColor": "#E8E8E8",
                "overflow": "hidden"
              },
              "className": "group-1"
            },
            "rect": {
              "x": 344,
              "y": 522,
              "width": 220,
              "height": 56
            },
            "smart": {
              "layerProtocol": {
                "group": {
                  "type": "group"
                },
                "layout": {
                  "type": "layout",
                  "position": "left"
                }
              }
            },
            "selfId": "F68F42CF-B429-43B9-8630-323795D559A1",
            "nodeLayerName": "postCommend#group#",
            "children": [{
              "componentName": "Text",
              "id": "fe7c1a70-baf6-11ec-9f47-3b49428c8bee",
              "props": {
                "style": {
                  "display": "block",
                  "marginTop": 8,
                  "marginRight": 40,
                  "marginBottom": 8,
                  "marginLeft": 40,
                  "fontWeight": 400,
                  "fontSize": 28,
                  "color": "#757575",
                  "lineHeight": "40px",
                  "fontFamily": "PingFang SC",
                  "overflow": "hidden",
                  "maxWidth": "208px",
                  "textOverflow": "ellipsis"
                },
                "text": "点我发评论",
                "lines": 1,
                "className": "comment"
              },
              "rect": {
                "x": 384,
                "y": 530,
                "width": 140,
                "height": 40
              },
              "selfId": "C481DD3F-B85B-47D4-8C31-25D337F1B9400",
              "nodeLayerName": "title"
            }]
          }, {
            "componentName": "Div",
            "id": "192b9444-b838-4fb6-b078-c99e8a321df4",
            "props": {
              "style": {
                "display": "flex",
                "alignItems": "center",
                "flexDirection": "row",
                "justifyContent": "center",
                "borderWidth": "1px",
                "borderStyle": "solid",
                "borderTopRightRadius": "28px",
                "borderBottomRightRadius": "28px",
                "borderColor": "#E8E8E8",
                "backgroundColor": "#FFFFFF",
                "width": "158px",
                "height": "56px",
                "overflow": "hidden"
              },
              "className": "group-2"
            },
            "rect": {
              "x": 562,
              "y": 522,
              "width": 158,
              "height": 56
            },
            "smart": {
              "layerProtocol": {
                "group": {
                  "type": "group"
                },
                "layout": {
                  "type": "layout",
                  "position": "right"
                }
              }
            },
            "selfId": "72323FCD-784D-48DD-8216-9B8194A4D6BA",
            "nodeLayerName": "getCommend#group#",
            "children": [{
              "componentName": "Image",
              "id": "fe7c1a74-baf6-11ec-9f47-3b49428c8bee",
              "props": {
                "style": {
                  "marginRight": "4px",
                  "width": "48px",
                  "height": "48px"
                },
                "src": "https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/a39eb090baf611ecbcc6e3b0265aa63b.png",
                "className": "icon-chat"
              },
              "rect": {
                "x": 588,
                "y": 526,
                "width": 48,
                "height": 48
              },
              "smart": {
                "layerProtocol": {
                  "merge": {
                    "type": "merge"
                  },
                  "field": {
                    "type": "chat"
                  },
                  "layout": {
                    "type": "layout",
                    "position": "left"
                  }
                },
                "nodeIdentification": {
                  "fieldBind": ["chat"]
                },
                "nodeCustom": {
                  "fieldBind": {
                    "confidential": 0.8804349303245544,
                    "isConfident": true,
                    "label": "chat",
                    "type": "fieldBind"
                  }
                }
              },
              "selfId": "A9975348-A042-40BB-9368-2163FA2E0E75",
              "nodeLayerName": "commendIcon#merge#"
            }, {
              "componentName": "Text",
              "id": "fe7c1a73-baf6-11ec-9f47-3b49428c8bee",
              "props": {
                "style": {
                  "marginTop": "0px",
                  "lineHeight": "24px",
                  "whiteSpace": "nowrap",
                  "color": "#4d4d4d",
                  "fontFamily": "PingFang SC",
                  "fontSize": "24px",
                  "fontWeight": 400
                },
                "text": "1345",
                "lines": 1,
                "className": "num"
              },
              "rect": {
                "x": 640,
                "y": 534,
                "width": 53,
                "height": 33
              },
              "selfId": "B9554538-A202-4548-AA26-67D15C74E9650",
              "nodeLayerName": "1345",
              "smart": {
                "layerProtocol": {
                  "layout": {
                    "type": "layout",
                    "position": "right"
                  }
                }
              }
            }]
          }]
        }]
      }]
    }, {
      "componentName": "Component",
      "id": "fe7c418a-baf6-11ec-9f47-3b49428c8bee",
      "props": {
        "style": {
          "display": "flex",
          "position": "relative",
          "alignItems": "flex-start",
          "flexDirection": "column",
          "marginTop": "-1px",
          "backgroundColor": "#FFFFFF",
          "width": "750px",
          "whiteSpace": "nowrap"
        },
        "className": "body-1"
      },
      "rect": {
        "x": 0,
        "y": 589,
        "width": 750,
        "height": 327
      },
      "selfId": "0C042C9A-9608-4BD1-BB01-0C060B1F67D6",
      "nodeLayerName": "bg",
      "children": [{
        "componentName": "Div",
        "id": "b74877a5-ef18-41b8-84e9-ecb1efe5d3bc",
        "props": {
          "style": {
            "display": "flex",
            "position": "relative",
            "alignItems": "flex-start",
            "flexDirection": "row",
            "marginTop": "25px",
            "marginLeft": "30px",
            "fontWeight": 500,
            "lineHeight": "53px"
          },
          "className": "caption-wrapper"
        },
        "rect": {
          "x": 30,
          "y": 614,
          "width": 304,
          "height": 53
        },
        "smart": {
          "layerProtocol": {
            "group": {
              "type": "group"
            },
            "layout": {
              "type": "layout",
              "position": "top"
            }
          }
        },
        "selfId": "317B33A3-7C92-4AEA-B810-24593687D3A4",
        "nodeLayerName": "introTitle#group#",
        "children": [{
          "componentName": "Text",
          "id": "fe7c1a78-baf6-11ec-9f47-3b49428c8bee",
          "props": {
            "style": {
              "color": "#212223",
              "fontFamily": "PingFang SC",
              "fontSize": "38px"
            },
            "text": "中情局的秘密档案",
            "lines": 1,
            "className": "caption"
          },
          "rect": {
            "x": 30,
            "y": 614,
            "width": 304,
            "height": 53
          },
          "selfId": "A2993E73-9F66-4F94-9640-7ACA37A41E770",
          "nodeLayerName": "title"
        }]
      }, {
        "componentName": "Div",
        "id": "978d86d6-3e0e-4209-ac15-d1d6977d2505",
        "props": {
          "style": {
            "display": "flex",
            "position": "relative",
            "alignItems": "center",
            "flexDirection": "row",
            "marginTop": "7px",
            "marginLeft": "30px",
            "lineHeight": "20px"
          },
          "className": "container-1"
        },
        "rect": {
          "x": 30,
          "y": 674,
          "width": 126,
          "height": 28
        },
        "smart": {
          "layerProtocol": {
            "group": {
              "type": "group"
            },
            "layout": {
              "type": "list",
              "position": "middle",
              "row": 2,
              "col": 1
            }
          }
        },
        "selfId": "C9CC75ED-5687-47E4-8634-1918CF8EE9AA",
        "nodeLayerName": "introType#group#",
        "children": [{
          "componentName": "Div",
          "id": "fe7c1a7b-baf6-11ec-9f47-3b49428c8bee",
          "props": {
            "style": {
              "boxSizing": "border-box",
              "display": "flex",
              "alignItems": "center",
              "flexDirection": "row",
              "marginRight": "16px",
              "borderWidth": "1px",
              "borderStyle": "solid",
              "borderRadius": "4px",
              "borderColor": "#E8E8E8",
              "paddingRight": "6px",
              "paddingLeft": "8px",
              "height": "28px",
              "overflow": "hidden"
            },
            "className": "tag-wrapper-item0"
          },
          "rect": {
            "x": 30,
            "y": 674,
            "width": 56,
            "height": 28
          },
          "selfId": "6ACF2208-2119-436E-A2D0-F55B010C7E37",
          "nodeLayerName": "bg",
          "children": [{
            "componentName": "Text",
            "id": "fe7c1a7a-baf6-11ec-9f47-3b49428c8bee",
            "props": {
              "style": {
                "marginTop": "-3px",
                "color": "#757575",
                "fontFamily": "PingFang SC",
                "fontSize": "20px",
                "fontWeight": 400
              },
              "text": "专题",
              "lines": 1,
              "className": "tag"
            },
            "rect": {
              "x": 39,
              "y": 675,
              "width": 40,
              "height": 24
            },
            "selfId": "0AC85470-F2DC-426E-9F0B-E14ACA988ED00",
            "nodeLayerName": "title"
          }],
          "smart": {
            "layerProtocol": {
              "repeat": {
                "type": "repeat",
                "repeatId": "1649833062570662",
                "repeatIndex": "0"
              },
              "multiStatus": {
                "type": "multiStatus",
                "protocol": {
                  "autoDetected": true,
                  "statusId": "16498330625816144",
                  "statusIndex": 0,
                  "statusCount": 2
                }
              },
              "layout": {
                "type": "layout",
                "position": "left"
              }
            }
          }
        }, {
          "componentName": "Div",
          "id": "fe7c4180-baf6-11ec-9f47-3b49428c8bee",
          "props": {
            "style": {
              "boxSizing": "border-box",
              "display": "flex",
              "alignItems": "center",
              "flexDirection": "row",
              "borderWidth": "1px",
              "borderStyle": "solid",
              "borderRadius": "4px",
              "borderColor": "#E8E8E8",
              "paddingRight": "5px",
              "paddingLeft": "7px",
              "height": "28px",
              "overflow": "hidden"
            },
            "className": "tag-wrapper-item1"
          },
          "rect": {
            "x": 102,
            "y": 674,
            "width": 54,
            "height": 28
          },
          "selfId": "24AA661C-8C9C-4D0C-BD45-2F3ED9F5EE03",
          "nodeLayerName": "bg",
          "children": [{
            "componentName": "Text",
            "id": "fe7c1a7c-baf6-11ec-9f47-3b49428c8bee",
            "props": {
              "style": {
                "marginTop": "-3px",
                "color": "#757575",
                "fontFamily": "PingFang SC",
                "fontSize": "20px",
                "fontWeight": 400
              },
              "text": "军事",
              "lines": 1,
              "className": "tag-1"
            },
            "rect": {
              "x": 110,
              "y": 675,
              "width": 40,
              "height": 24
            },
            "selfId": "020C5C68-D278-4862-BC7A-5AC668A0E8820",
            "nodeLayerName": "title"
          }],
          "smart": {
            "layerProtocol": {
              "repeat": {
                "type": "repeat",
                "repeatId": "1649833062570662",
                "repeatIndex": "1"
              },
              "multiStatus": {
                "type": "multiStatus",
                "protocol": {
                  "autoDetected": true,
                  "statusId": "16498330625816144",
                  "statusIndex": 1,
                  "statusCount": 2
                }
              },
              "layout": {
                "type": "layout",
                "position": "right"
              }
            }
          }
        }]
      }, {
        "componentName": "Div",
        "id": "e8c03f97-7f6a-49d7-af0a-7afab52910f2",
        "props": {
          "style": {
            "display": "flex",
            "position": "relative",
            "alignItems": "flex-start",
            "alignSelf": "center",
            "flexDirection": "column",
            "marginTop": "23px",
            "whiteSpace": "normal"
          },
          "className": "container-2"
        },
        "rect": {
          "x": 29,
          "y": 725,
          "width": 691,
          "height": 191
        },
        "smart": {
          "layerProtocol": {
            "group": {
              "type": "group"
            },
            "layout": {
              "type": "layout",
              "position": "bottom"
            }
          }
        },
        "selfId": "88F53523-252E-4C27-90F7-9A8F6812A2E1",
        "nodeLayerName": "introContent#group#",
        "children": [{
          "componentName": "Div",
          "id": "26e8c8be-c3b4-4fc6-aae6-3bf79323f536",
          "props": {
            "style": {
              "display": "flex",
              "position": "relative",
              "alignItems": "center",
              "flexDirection": "row",
              "width": "691px"
            },
            "className": "wrapper-1"
          },
          "rect": {
            "x": 29,
            "y": 725,
            "width": 691,
            "height": 62
          },
          "smart": {
            "layerProtocol": {
              "group": {
                "type": "group"
              },
              "layout": {
                "type": "layout",
                "position": "top"
              }
            }
          },
          "selfId": "0F851E5E-C0B5-49A7-8A43-E817F0389276",
          "nodeLayerName": "user#group#",
          "children": [{
            "componentName": "Div",
            "id": "37d3c9ea-2a58-4ef4-8e59-750fcff2120e",
            "props": {
              "style": {
                "display": "flex",
                "position": "relative",
                "alignItems": "flex-start",
                "flexDirection": "row",
                "marginRight": "17px"
              },
              "className": "group-3"
            },
            "rect": {
              "x": 29,
              "y": 725,
              "width": 62,
              "height": 62
            },
            "children": [{
              "componentName": "Image",
              "id": "fe7c4185-baf6-11ec-9f47-3b49428c8bee",
              "props": {
                "style": {
                  "position": "absolute",
                  "top": "0px",
                  "left": "0px",
                  "width": "62px",
                  "height": "62px",
                  "overflow": "hidden"
                },
                "src": "https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/a3a3e0b0baf611ec9ed04d6cdd4ef585.png",
                "className": "large-icon"
              },
              "rect": {
                "x": 29,
                "y": 725,
                "width": 62,
                "height": 62
              },
              "selfId": "79134BE2-C3A5-4F5A-9F76-03960B26F6F3",
              "nodeLayerName": "mask",
              "smart": {
                "layerProtocol": {
                  "field": {
                    "type": "avatar"
                  }
                },
                "nodeIdentification": {
                  "fieldBind": ["avatar"]
                },
                "nodeCustom": {
                  "fieldBind": {
                    "confidential": 0.9999943971633911,
                    "isConfident": true,
                    "label": "avatar",
                    "type": "fieldBind"
                  }
                }
              }
            }, {
              "componentName": "Div",
              "id": "fe7c4184-baf6-11ec-9f47-3b49428c8bee",
              "props": {
                "style": {
                  "display": "flex",
                  "position": "relative",
                  "alignItems": "center",
                  "flexDirection": "row",
                  "justifyContent": "center",
                  "marginTop": "34px",
                  "marginLeft": "34px",
                  "borderWidth": "2px",
                  "borderStyle": "solid",
                  "borderRadius": "100%",
                  "borderColor": "#FFFFFF",
                  "backgroundImage": "linear-gradient(144deg, rgba(253,209,53,1.00) 18%, rgba(254,139,19,1.00) 83%)",
                  "width": "28px",
                  "height": "28px",
                  "overflow": "hidden"
                },
                "className": "icon-down-wrapper"
              },
              "rect": {
                "x": 63,
                "y": 759,
                "width": 28,
                "height": 28
              },
              "selfId": "45BE4718-B325-4715-91E8-EA9D083A316F",
              "nodeLayerName": "椭圆形",
              "children": [{
                "componentName": "Image",
                "id": "fe7c4183-baf6-11ec-9f47-3b49428c8bee",
                "props": {
                  "style": {
                    "marginTop": "1px",
                    "width": "18px",
                    "height": "15px"
                  },
                  "src": "https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/a34d5c40baf611ecbfa74fcb637c6970.png",
                  "className": "icon-down"
                },
                "rect": {
                  "x": 69,
                  "y": 767,
                  "width": 18,
                  "height": 15
                },
                "selfId": "733C95FE-81A0-42FC-8AD2-857EE2E8F1C3",
                "nodeLayerName": "形状结合",
                "smart": {
                  "layerProtocol": {
                    "field": {
                      "type": "down"
                    }
                  },
                  "nodeIdentification": {
                    "fieldBind": ["down"]
                  },
                  "nodeCustom": {
                    "fieldBind": {
                      "confidential": 0.8910854458808899,
                      "isConfident": true,
                      "label": "down",
                      "type": "fieldBind"
                    }
                  }
                }
              }]
            }],
            "smart": {
              "layerProtocol": {
                "layout": {
                  "type": "layout",
                  "position": "left"
                }
              }
            }
          }, {
            "componentName": "Div",
            "id": "e34ca2ed-4b4b-4c07-952c-b4c32dfa0e91",
            "props": {
              "style": {
                "display": "flex",
                "alignItems": "flex-start",
                "flexDirection": "row",
                "lineHeight": "40px",
                "whiteSpace": "nowrap"
              },
              "className": "video-wrapper"
            },
            "rect": {
              "x": 108,
              "y": 736,
              "width": 140,
              "height": 40
            },
            "smart": {
              "layerProtocol": {
                "group": {
                  "type": "group"
                },
                "layout": {
                  "type": "layout",
                  "position": "right"
                }
              }
            },
            "selfId": "A78178BE-1E58-4797-BB28-ED8C101C551A",
            "nodeLayerName": "userName#group#",
            "children": [{
              "componentName": "Text",
              "id": "fe7c4187-baf6-11ec-9f47-3b49428c8bee",
              "props": {
                "style": {
                  "color": "#4d4d4d",
                  "fontFamily": "PingFang SC",
                  "fontSize": "28px",
                  "fontWeight": 400
                },
                "text": "记录大时代",
                "lines": 1,
                "className": "video"
              },
              "rect": {
                "x": 108,
                "y": 736,
                "width": 140,
                "height": 40
              },
              "selfId": "EC8C080D-C869-4732-8054-786067F1270D0",
              "nodeLayerName": "来自凤凰卫视新闻纪录片《大新闻大历史》"
            }]
          }]
        }, {
          "componentName": "Div",
          "id": "7b5747d3-80b4-47bc-b932-fdd9d9f77bee",
          "props": {
            "style": {
              "display": "flex",
              "position": "relative",
              "alignItems": "flex-start",
              "flexDirection": "row",
              "marginTop": "9px",
              "marginLeft": "1px",
              "lineHeight": "40px"
            },
            "className": "article-wrapper"
          },
          "rect": {
            "x": 30,
            "y": 796,
            "width": 672,
            "height": 120
          },
          "smart": {
            "layerProtocol": {
              "group": {
                "type": "group"
              },
              "layout": {
                "type": "layout",
                "position": "bottom"
              }
            }
          },
          "selfId": "4D032494-5A1B-46E1-9881-69DB773561BA",
          "nodeLayerName": "introText#group#",
          "children": [{
            "componentName": "Text",
            "id": "fe7c4189-baf6-11ec-9f47-3b49428c8bee",
            "props": {
              "style": {
                "WebkitBoxOrient": "vertical",
                "display": "-webkit-inline-box",
                "WebkitLineClamp": 3,
                "width": "672px",
                "height": "120px",
                "overflow": "hidden",
                "textOverflow": "ellipsis",
                "color": "#4d4d4d",
                "fontFamily": "PingFang SC",
                "fontSize": "28px",
                "fontWeight": 400
              },
              "text": "美国中央情报局再次因为丑闻成为全球焦点，从暴力对待战俘开始，新兵被强制要求此文字打点显示规美国中央情报局再次因为丑闻成为全球焦点。",
              "lines": 3,
              "className": "article"
            },
            "rect": {
              "x": 30,
              "y": 796,
              "width": 672,
              "height": 120
            },
            "selfId": "D5B78F69-39FD-4494-BC1F-2DF7DC11F94E0",
            "nodeLayerName": "detail"
          }]
        }]
      }]
    }, {
      "componentName": "Component",
      "id": "7a86c50f-238f-4c7f-a2e4-765b13fc86ba",
      "props": {
        "style": {
          "display": "flex",
          "position": "relative",
          "alignItems": "center",
          "flexDirection": "row",
          "justifyContent": "center",
          "width": "750px",
          "height": "148px"
        },
        "className": "footer"
      },
      "rect": {
        "x": 0,
        "y": 916,
        "width": 750,
        "height": 148
      },
      "smart": {
        "layerProtocol": {
          "group": {
            "type": "group"
          }
        }
      },
      "selfId": "76B30261-B015-4CCB-A695-FA1DDCD51711",
      "nodeLayerName": "introFun#group#",
      "children": [{
        "componentName": "Div",
        "id": "f7abf4ab-885c-4452-9efe-a25ff98227f0",
        "props": {
          "style": {
            "display": "flex",
            "alignItems": "center",
            "flexDirection": "column",
            "marginRight": "120px"
          },
          "className": "container-3"
        },
        "rect": {
          "x": 100,
          "y": 952,
          "width": 48,
          "height": 76
        },
        "smart": {
          "layerProtocol": {
            "group": {
              "type": "group"
            }
          }
        },
        "selfId": "93A2BD08-096F-4ACE-A551-DD90CC2BCFB0",
        "nodeLayerName": "like#group#",
        "children": [{
          "componentName": "Div",
          "id": "7d2daea8-6bc8-4934-8c76-7231e40b1e0c",
          "props": {
            "style": {
              "display": "flex",
              "position": "relative",
              "alignItems": "flex-start",
              "flexDirection": "row",
              "justifyContent": "center"
            },
            "className": "icon-like-wrapper"
          },
          "rect": {
            "x": 100,
            "y": 952,
            "width": 48,
            "height": 48
          },
          "smart": {
            "layerProtocol": {
              "group": {
                "type": "group"
              },
              "layout": {
                "type": "layout",
                "position": "top"
              }
            }
          },
          "selfId": "AE64E3EE-A895-4D1B-AFFB-FE62D9524C8B",
          "nodeLayerName": "likeIcon#group#",
          "children": [{
            "componentName": "Image",
            "id": "fe7c6891-baf6-11ec-9f47-3b49428c8bee",
            "props": {
              "style": {
                "width": "48px",
                "height": "48px"
              },
              "src": "https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/a37dbb10baf611ec81146d1807e5ef1e.png",
              "className": "icon-like",
              "onClick": function onClick(e) {
                console.log('click')
              }
            },
            "rect": {
              "x": 100,
              "y": 952,
              "width": 48,
              "height": 48
            },
            "smart": {
              "layerProtocol": {
                "merge": {
                  "type": "merge"
                },
                "field": {
                  "type": "like"
                }
              },
              "nodeIdentification": {
                "fieldBind": ["like"]
              },
              "nodeCustom": {
                "fieldBind": {
                  "confidential": 0.9968409538269043,
                  "isConfident": true,
                  "label": "like",
                  "type": "fieldBind"
                }
              }
            },
            "selfId": "87B714E1-4A75-430D-816A-91F23A64D3E7",
            "nodeLayerName": "likeIcon#merge#"
          }]
        }, {
          "componentName": "Div",
          "id": "ce9f704f-1734-4135-b26a-2d14bb923004",
          "props": {
            "style": {
              "display": "flex",
              "position": "relative",
              "alignItems": "flex-start",
              "flexDirection": "row",
              "lineHeight": "28px",
              "whiteSpace": "nowrap"
            },
            "className": "wrapper-2"
          },
          "rect": {
            "x": 118,
            "y": 1000,
            "width": 12,
            "height": 28
          },
          "smart": {
            "layerProtocol": {
              "group": {
                "type": "group"
              },
              "layout": {
                "type": "layout",
                "position": "bottom"
              }
            }
          },
          "selfId": "35AB895E-46FC-467B-AEDF-3CF4B07CB2F7",
          "nodeLayerName": "likeTitle#group#",
          "children": [{
            "componentName": "Text",
            "id": "fe7c6893-baf6-11ec-9f47-3b49428c8bee",
            "props": {
              "style": {
                "letterSpacing": "0px",
                "color": "#9e9e9e",
                "fontFamily": "PingFang SC",
                "fontSize": "20px",
                "fontWeight": 400
              },
              "text": "9",
              "lines": 1,
              "className": "num-1"
            },
            "rect": {
              "x": 118,
              "y": 1000,
              "width": 12,
              "height": 28
            },
            "selfId": "37CA2938-4024-4529-BBB7-C338D98CA7750",
            "nodeLayerName": "9"
          }]
        }]
      }, {
        "componentName": "Div",
        "id": "286122a2-5956-436e-8e3f-39893d52dbe3",
        "props": {
          "style": {
            "display": "flex",
            "alignItems": "center",
            "flexDirection": "column",
            "marginRight": "120px"
          },
          "className": "container-item0"
        },
        "rect": {
          "x": 268,
          "y": 952,
          "width": 48,
          "height": 76
        },
        "smart": {
          "layerProtocol": {
            "group": {
              "type": "group"
            },
            "repeat": {
              "type": "repeat",
              "repeatId": "1649833062570308",
              "repeatIndex": "0"
            }
          }
        },
        "selfId": "2CBCB718-F799-43CB-B0C7-CBE191B1B63A",
        "nodeLayerName": "collect#group#",
        "children": [{
          "componentName": "Div",
          "id": "a41dbbb4-e556-4c17-8772-47f7a3f182dc",
          "props": {
            "style": {
              "display": "flex",
              "position": "relative",
              "alignItems": "flex-start",
              "flexDirection": "row",
              "justifyContent": "center"
            },
            "className": "icon-star-wrapper"
          },
          "rect": {
            "x": 268,
            "y": 952,
            "width": 48,
            "height": 48
          },
          "smart": {
            "layerProtocol": {
              "group": {
                "type": "group"
              },
              "layout": {
                "type": "layout",
                "position": "top"
              }
            }
          },
          "selfId": "F5F0D838-6846-41E8-8C28-4E003304D548",
          "nodeLayerName": "collectIcon#group#",
          "children": [{
            "componentName": "Image",
            "id": "fe7c6896-baf6-11ec-9f47-3b49428c8bee",
            "props": {
              "style": {
                "width": "48px",
                "height": "48px"
              },
              "src": "https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/a37afbf0baf611ec8382e77a5e91dcad.png",
              "className": "icon-star"
            },
            "rect": {
              "x": 268,
              "y": 952,
              "width": 48,
              "height": 48
            },
            "smart": {
              "layerProtocol": {
                "merge": {
                  "type": "merge"
                },
                "field": {
                  "type": "star"
                }
              },
              "nodeIdentification": {
                "fieldBind": ["star"]
              },
              "nodeCustom": {
                "fieldBind": {
                  "confidential": 0.9992554783821106,
                  "isConfident": true,
                  "label": "star",
                  "type": "fieldBind"
                }
              }
            },
            "selfId": "F4C4EEC2-C00A-4C0F-BA96-EA16BC98CB68",
            "nodeLayerName": "collectIcon#merge#"
          }]
        }, {
          "componentName": "Div",
          "id": "2739b991-ab79-4010-8455-113478ff67a5",
          "props": {
            "style": {
              "display": "flex",
              "position": "relative",
              "alignItems": "flex-start",
              "flexDirection": "row",
              "lineHeight": "28px",
              "whiteSpace": "nowrap"
            },
            "className": "wrapper-3"
          },
          "rect": {
            "x": 272,
            "y": 1000,
            "width": 40,
            "height": 28
          },
          "smart": {
            "layerProtocol": {
              "group": {
                "type": "group"
              },
              "multiStatus": {
                "type": "multiStatus",
                "protocol": {
                  "autoDetected": true,
                  "statusId": "16498330625828460",
                  "statusIndex": 0,
                  "statusCount": 1
                }
              },
              "layout": {
                "type": "layout",
                "position": "bottom"
              }
            }
          },
          "selfId": "4704096A-0D54-4DFE-8418-23DA0F33C1AE",
          "nodeLayerName": "collectTitle#group#",
          "children": [{
            "componentName": "Text",
            "id": "fe7c6898-baf6-11ec-9f47-3b49428c8bee",
            "props": {
              "style": {
                "letterSpacing": "0px",
                "color": "#9e9e9e",
                "fontFamily": "PingFang SC",
                "fontSize": "20px",
                "fontWeight": 400
              },
              "text": "收藏",
              "lines": 1,
              "className": "favor"
            },
            "rect": {
              "x": 272,
              "y": 1000,
              "width": 40,
              "height": 28
            },
            "selfId": "208AC247-D499-464C-A5C7-53A7FC3DF3280",
            "nodeLayerName": "收藏"
          }]
        }]
      }, {
        "componentName": "Div",
        "id": "40718642-6d4e-4947-9107-b4cbcb6ef46e",
        "props": {
          "style": {
            "display": "flex",
            "alignItems": "center",
            "flexDirection": "column",
            "marginRight": "114px"
          },
          "className": "container-item1"
        },
        "rect": {
          "x": 436,
          "y": 952,
          "width": 48,
          "height": 76
        },
        "smart": {
          "layerProtocol": {
            "group": {
              "type": "group"
            },
            "repeat": {
              "type": "repeat",
              "repeatId": "1649833062570308",
              "repeatIndex": "1"
            }
          }
        },
        "selfId": "7DEEE281-B77C-4822-BD95-8F78EF724DCC",
        "nodeLayerName": "wechat#group#",
        "children": [{
          "componentName": "Div",
          "id": "1d626c6c-3437-49e4-9026-c7a6462bd4cd",
          "props": {
            "style": {
              "display": "flex",
              "position": "relative",
              "alignItems": "flex-start",
              "flexDirection": "row",
              "justifyContent": "center"
            },
            "className": "icon-wechat-wrapper"
          },
          "rect": {
            "x": 436,
            "y": 952,
            "width": 48,
            "height": 48
          },
          "smart": {
            "layerProtocol": {
              "group": {
                "type": "group"
              },
              "layout": {
                "type": "layout",
                "position": "top"
              }
            }
          },
          "selfId": "FC8868D0-625E-4FA7-B67B-77218BC578CB",
          "nodeLayerName": "collectIcon#group#",
          "children": [{
            "componentName": "Image",
            "id": "fe7c8fa2-baf6-11ec-9f47-3b49428c8bee",
            "props": {
              "style": {
                "width": "48px",
                "height": "48px"
              },
              "src": "https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/a377c7a0baf611eca3b3af3bdc694aac.png",
              "className": "icon-wechat"
            },
            "rect": {
              "x": 436,
              "y": 952,
              "width": 48,
              "height": 48
            },
            "smart": {
              "layerProtocol": {
                "merge": {
                  "type": "merge"
                },
                "field": {
                  "type": "wechat"
                }
              },
              "nodeIdentification": {
                "fieldBind": ["wechat"]
              },
              "nodeCustom": {
                "fieldBind": {
                  "confidential": 0.6260421276092529,
                  "isConfident": true,
                  "label": "wechat",
                  "type": "fieldBind"
                }
              }
            },
            "selfId": "4439EB69-B9B3-478A-8AD0-64EDE0C5180B",
            "nodeLayerName": "collectIcon#merge#"
          }]
        }, {
          "componentName": "Div",
          "id": "52643490-7e4d-4095-a6c8-5698438a012f",
          "props": {
            "style": {
              "display": "flex",
              "position": "relative",
              "alignItems": "flex-start",
              "flexDirection": "row",
              "lineHeight": "28px",
              "whiteSpace": "nowrap"
            },
            "className": "tag-wrapper"
          },
          "rect": {
            "x": 440,
            "y": 1000,
            "width": 40,
            "height": 28
          },
          "smart": {
            "layerProtocol": {
              "group": {
                "type": "group"
              },
              "layout": {
                "type": "layout",
                "position": "bottom"
              }
            }
          },
          "selfId": "3FF3FD2E-5FD4-434F-80C2-94969BECE135",
          "nodeLayerName": "collectTitle#group#",
          "children": [{
            "componentName": "Text",
            "id": "fe7c8fa4-baf6-11ec-9f47-3b49428c8bee",
            "props": {
              "style": {
                "letterSpacing": "0px",
                "color": "#9e9e9e",
                "fontFamily": "PingFang SC",
                "fontSize": "20px",
                "fontWeight": 400
              },
              "text": "微信",
              "lines": 1,
              "className": "tag-2"
            },
            "rect": {
              "x": 440,
              "y": 1000,
              "width": 40,
              "height": 28
            },
            "selfId": "56E8181B-1BC4-4528-B8FE-ADE83C44F5480",
            "nodeLayerName": "微信"
          }]
        }]
      }, {
        "componentName": "Div",
        "id": "c2f48f1c-8975-440b-8ee6-75ce20e3af0b",
        "props": {
          "style": {
            "display": "flex",
            "alignItems": "center",
            "flexDirection": "column"
          },
          "className": "container-item2"
        },
        "rect": {
          "x": 598,
          "y": 952,
          "width": 60,
          "height": 76
        },
        "smart": {
          "layerProtocol": {
            "group": {
              "type": "group"
            },
            "repeat": {
              "type": "repeat",
              "repeatId": "1649833062570308",
              "repeatIndex": "2"
            }
          }
        },
        "selfId": "64D22CAA-7C43-4D38-BC3F-6F5B871C1D39",
        "nodeLayerName": "friends#group#",
        "children": [{
          "componentName": "Div",
          "id": "debb9692-0b93-4044-b754-f9ba5defffc1",
          "props": {
            "style": {
              "display": "flex",
              "position": "relative",
              "alignItems": "flex-start",
              "flexDirection": "row",
              "justifyContent": "center"
            },
            "className": "wrapper-4"
          },
          "rect": {
            "x": 604,
            "y": 952,
            "width": 48,
            "height": 48
          },
          "smart": {
            "layerProtocol": {
              "group": {
                "type": "group"
              },
              "layout": {
                "type": "layout",
                "position": "top"
              }
            }
          },
          "selfId": "7EE5D577-B0D0-4853-947B-B074A081FA3C",
          "nodeLayerName": "friendsIcon#group#",
          "children": [{
            "componentName": "Image",
            "id": "fe7c8fa7-baf6-11ec-9f47-3b49428c8bee",
            "props": {
              "style": {
                "width": "48px",
                "height": "48px"
              },
              "src": "https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/a3757db0baf611ec8a95e9877b16dcfa.png",
              "className": "icon"
            },
            "rect": {
              "x": 604,
              "y": 952,
              "width": 48,
              "height": 48
            },
            "smart": {
              "layerProtocol": {
                "merge": {
                  "type": "merge"
                }
              }
            },
            "selfId": "62D2DC60-9E1A-4ECB-972A-EBEC4FF7CEF5",
            "nodeLayerName": "friendsIcon#merge#"
          }]
        }, {
          "componentName": "Div",
          "id": "22dfb2f9-0530-473d-8ab2-abb14e061e5d",
          "props": {
            "style": {
              "display": "flex",
              "position": "relative",
              "alignItems": "flex-start",
              "flexDirection": "row",
              "lineHeight": "28px",
              "whiteSpace": "nowrap"
            },
            "className": "label-wrapper"
          },
          "rect": {
            "x": 598,
            "y": 1000,
            "width": 60,
            "height": 28
          },
          "smart": {
            "layerProtocol": {
              "group": {
                "type": "group"
              },
              "layout": {
                "type": "layout",
                "position": "bottom"
              }
            }
          },
          "selfId": "D83B7295-F137-4A62-A610-CA9271B15276",
          "nodeLayerName": "friendsTitle#group#",
          "children": [{
            "componentName": "Text",
            "id": "fe7cddc0-baf6-11ec-9f47-3b49428c8bee",
            "props": {
              "style": {
                "letterSpacing": "0px",
                "color": "#9e9e9e",
                "fontFamily": "PingFang SC",
                "fontSize": "20px",
                "fontWeight": 400
              },
              "text": "朋友圈",
              "lines": 1,
              "className": "label"
            },
            "rect": {
              "x": 598,
              "y": 1000,
              "width": 60,
              "height": 28
            },
            "selfId": "A29F995E-5DF9-4338-98AC-EB6BCB1442B40",
            "nodeLayerName": "朋友圈"
          }]
        }]
      }]
    }]
  }],
  "imgcook": {
    "restore_id": "e43e13ed-1b74-4130-9e1f-d5ba27b7ace8",
    "dslConfig": {
      "cssUnit": "px",
      "dsl": "react-ifeng-standard",
      "componentStyle": "hooks",
      "cssStyle": "camelCase",
      "cssType": "css",
      "inlineStyle": "module",
      "globalCss": true,
      "jsx": "javascript",
      "outputStyle": "component",
      "dslName": "React-Ifeng",
      "htmlFontSize": "16",
      "responseWidth": 750
    }
  }
}