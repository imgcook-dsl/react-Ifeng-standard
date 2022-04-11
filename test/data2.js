// schema
module.exports = {
  componentName: "Page",
  id: "9d6df470-b59b-11ec-bb16-07e524ed247b",
  props: {
    style: {
      display: "flex",
      position: "relative",
      alignItems: "flex-start",
      flexDirection: "column",
    },
    className: "page",
  },
  taskId: "1710D5B2-7173-4611-8D01-AB4E989EE014",
  artboardImg:
    "https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/6a9e2470b59b11ec888be34f50965030.png",
  rect: {
    x: 0,
    y: 0,
    width: 751,
    height: 2310,
  },
  pluginVersion: "4.2.0",
  smart: {
    layerProtocol: {
      "custom-layout": {
        type: "skip",
      },
    },
  },
  layerProtocols: ["group", "merge"],
  name: "detail",
  reference: "sketch",
  restore_id: "bde26ec9-76cf-416b-a697-cd03fcc9a462",
  children: [
    {
      componentName: "Block",
      id: "0042acd0-fa1d-4bf5-ac12-e780a1f259cd",
      props: {
        style: {
          display: "flex",
          position: "relative",
          alignItems: "flex-start",
          flexDirection: "column",
        },
        className: "group",
      },
      rect: {
        x: 0,
        y: 0,
        width: 750,
        height: 510,
      },
      selfId: "056A55F7-FBCA-493F-90F7-7222B0706057",
      fileName: "mod_0",
      smart: {
        layerProtocol: {
          group: {
            type: "group",
          },
          module: {
            type: "smartModule",
          },
        },
      },
      nodeLayerName: "header#group#",
      children: [
        {
          componentName: "Div",
          id: "053fb7c6-beec-4240-aa76-56844daf83cc",
          props: {
            style: {
              display: "flex",
              position: "relative",
              alignItems: "flex-start",
              flexDirection: "row",
              justifyContent: "center",
            },
            className: "header",
          },
          rect: {
            x: 0,
            y: 0,
            width: 750,
            height: 88,
          },
          smart: {
            layerProtocol: {
              group: {
                type: "group",
              },
            },
          },
          selfId: "C19E0C00-C644-4D8E-833A-593C10D3FBE5",
          nodeLayerName: "statusBar#group#",
          children: [
            {
              componentName: "Image",
              id: "9d6e4290-b59b-11ec-bb16-07e524ed247b",
              props: {
                style: {
                  width: "750px",
                  height: "88px",
                },
                src: "https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/5caef150b59b11ec8ea205d5b701cc38.png",
                className: "floor-bg",
              },
              rect: {
                x: 0,
                y: 0,
                width: 750,
                height: 88,
              },
              smart: {
                layerProtocol: {
                  merge: {
                    type: "merge",
                  },
                  field: {
                    type: "logo",
                  },
                },
                nodeIdentification: {
                  fieldBind: ["logo"],
                },
                nodeCustom: {
                  fieldBind: {
                    confidential: 0.9960941672325134,
                    isConfident: true,
                    label: "logo",
                    type: "fieldBind",
                  },
                },
              },
              selfId: "B81C846A-47D8-4AEC-B8E2-6B688E4CCC85",
              nodeLayerName: "statusBar#merge#",
            },
          ],
        },
        {
          componentName: "Div",
          id: "6be10f04-2169-4b1c-90af-c5e6e37f1b37",
          props: {
            style: {
              display: "flex",
              position: "relative",
              alignItems: "flex-start",
              flexDirection: "row",
              justifyContent: "center",
            },
            className: "body",
          },
          rect: {
            x: 0,
            y: 88,
            width: 750,
            height: 422,
          },
          smart: {
            layerProtocol: {
              group: {
                type: "group",
              },
            },
          },
          selfId: "2C8C8D11-E93C-4D03-A17E-D0D099E8198B",
          nodeLayerName: "video#group#",
          children: [
            {
              componentName: "Image",
              id: "9d6e4292-b59b-11ec-bb16-07e524ed247b",
              props: {
                style: {
                  width: "750px",
                  height: "422px",
                },
                src: "https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/6454f350b59b11ec958a09e4edf763b7.png",
                className: "banner",
              },
              rect: {
                x: 0,
                y: 88,
                width: 750,
                height: 422,
              },
              smart: {
                layerProtocol: {
                  merge: {
                    type: "merge",
                  },
                  field: {
                    type: "banner",
                  },
                },
                nodeIdentification: {
                  fieldBind: ["banner"],
                },
                nodeCustom: {
                  fieldBind: {
                    confidential: 0.9903151392936707,
                    isConfident: true,
                    label: "banner",
                    type: "fieldBind",
                  },
                },
              },
              selfId: "934FFC68-8A75-4898-B084-2AEAC3F16FBB",
              nodeLayerName: "video#merge#",
            },
          ],
        },
      ],
    },
    {
      componentName: "Block",
      id: "761a9e8c-5fe9-4552-88d6-ad32af2ce123",
      props: {
        style: {
          display: "flex",
          position: "relative",
          alignItems: "flex-start",
          flexDirection: "column",
        },
        className: "list-1v2",
      },
      rect: {
        x: 0,
        y: 510,
        width: 751,
        height: 554,
      },
      selfId: "F93422BE-9507-4D39-96FE-766B359F1C3F",
      fileName: "mod_1",
      smart: {
        layerProtocol: {
          group: {
            type: "group",
          },
          module: {
            type: "smartModule",
            name: "list-1v2",
          },
        },
      },
      nodeLayerName: "intro#group#",
      children: [
        {
          componentName: "Div",
          id: "c87f5b78-feb2-4ea2-a348-7d8ae98b02d8",
          props: {
            style: {
              boxSizing: "border-box",
              display: "flex",
              position: "relative",
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingRight: "31px",
              paddingLeft: "30px",
              width: "751px",
              height: "80px",
            },
            className: "header-1",
          },
          rect: {
            x: 0,
            y: 510,
            width: 751,
            height: 80,
          },
          children: [
            {
              componentName: "Div",
              id: "14dc3a15-e4cf-4e54-91ce-810df64fdb2b",
              props: {
                style: {
                  display: "flex",
                  position: "absolute",
                  top: "0px",
                  left: "0px",
                  alignItems: "flex-start",
                  flexDirection: "row",
                  justifyContent: "center",
                  width: "751px",
                },
                className: "container",
              },
              rect: {
                x: 0,
                y: 510,
                width: 751,
                height: 80,
              },
              smart: {
                layerProtocol: {
                  group: {
                    type: "group",
                  },
                },
              },
              selfId: "CF8EE50C-5A34-478A-B34D-A4355614515C",
              nodeLayerName: "bg#group#",
              children: [
                {
                  componentName: "Div",
                  id: "9d6eb7c1-b59b-11ec-bb16-07e524ed247b",
                  props: {
                    style: {
                      display: "flex",
                      position: "relative",
                      alignItems: "center",
                      flexDirection: "row",
                      backgroundColor: "#FFFFFF",
                      width: "750px",
                      height: "80px",
                    },
                    className: "wrapper",
                  },
                  rect: {
                    x: 0,
                    y: 510,
                    width: 750,
                    height: 80,
                  },
                  selfId: "19DADDA8-A9AF-4730-B9F2-B55D747A9DE2",
                  nodeLayerName: "Rectangle 6",
                  children: [
                    {
                      componentName: "Div",
                      id: "9d6eb7c0-b59b-11ec-bb16-07e524ed247b",
                      props: {
                        style: {
                          position: "absolute",
                          bottom: "0px",
                          left: "0px",
                          borderWidth: "1px",
                          borderStyle: "solid",
                          borderColor: "#F1F2F3",
                          width: "751px",
                          height: "1px",
                        },
                        className: "empty",
                      },
                      rect: {
                        x: 0,
                        y: 589,
                        width: 751,
                        height: 1,
                      },
                      selfId: "FE943E76-F307-47D4-9B54-AAB22AF15152",
                      nodeLayerName: "bottomLine",
                    },
                  ],
                },
              ],
            },
            {
              componentName: "Div",
              id: "49f09ee5-1fe7-4109-9389-c83d89790349",
              props: {
                style: {
                  display: "flex",
                  position: "relative",
                  alignItems: "flex-start",
                  flexDirection: "row",
                  marginTop: "1px",
                  fontWeight: 500,
                  lineHeight: "45px",
                  whiteSpace: "nowrap",
                },
                className: "title-wrapper",
              },
              rect: {
                x: 30,
                y: 528,
                width: 64,
                height: 45,
              },
              smart: {
                layerProtocol: {
                  group: {
                    type: "group",
                  },
                },
              },
              selfId: "290EE38F-836C-4570-B0DA-CD2532BF222E",
              nodeLayerName: "introTitle#group#",
              children: [
                {
                  componentName: "Text",
                  id: "9d6e69a0-b59b-11ec-bb16-07e524ed247b",
                  props: {
                    style: {
                      color: "#212223",
                      fontFamily: "PingFang SC",
                      fontSize: "32px",
                    },
                    text: "简介",
                    lines: 1,
                    className: "title",
                  },
                  rect: {
                    x: 30,
                    y: 528,
                    width: 64,
                    height: 45,
                  },
                  selfId: "CA9E1CE0-9F37-4F55-A70B-08A94786F1DE0",
                  nodeLayerName: "简介",
                },
              ],
            },
            {
              componentName: "Div",
              id: "fe7709c2-a75e-4ce3-8773-f68a521214c3",
              props: {
                style: {
                  display: "flex",
                  position: "relative",
                  alignItems: "center",
                  flexDirection: "row",
                },
                className: "container-1",
              },
              rect: {
                x: 344,
                y: 522,
                width: 376,
                height: 56,
              },
              children: [
                {
                  componentName: "Div",
                  id: "9d6e69a2-b59b-11ec-bb16-07e524ed247b",
                  props: {
                    style: {
                      boxSizing: "border-box",
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "row",
                      marginRight: "-2px",
                      borderWidth: "1px",
                      borderStyle: "solid",
                      borderTopLeftRadius: "28px",
                      borderBottomLeftRadius: "28px",
                      borderColor: "#E8E8E8",
                      backgroundColor: "#F5F5F5",
                      paddingRight: "39px",
                      paddingLeft: "39px",
                      height: "56px",
                      overflow: "hidden",
                      lineHeight: "28px",
                      whiteSpace: "nowrap",
                    },
                    className: "wrapper-1",
                  },
                  rect: {
                    x: 344,
                    y: 522,
                    width: 220,
                    height: 56,
                  },
                  selfId: "94A6F554-5835-49B5-9118-E09E6C5321AF",
                  nodeLayerName: "Rectangle 2",
                  children: [
                    {
                      componentName: "Text",
                      id: "9d6e69a1-b59b-11ec-bb16-07e524ed247b",
                      props: {
                        style: {
                          color: "#757575",
                          fontFamily: "PingFang SC",
                          fontSize: "28px",
                          fontWeight: 400,
                        },
                        text: "点我发评论",
                        lines: 1,
                        className: "comment",
                      },
                      rect: {
                        x: 384,
                        y: 530,
                        width: 140,
                        height: 40,
                      },
                      selfId: "E28BA6E5-3D28-4042-B6B1-4738195E63020",
                      nodeLayerName: "点我发评论",
                    },
                  ],
                  smart: {
                    layerProtocol: {
                      layout: {
                        type: "layout",
                        position: "left",
                      },
                    },
                  },
                },
                {
                  componentName: "Div",
                  id: "02dbd140-d097-4448-a64c-ec5442b2c4a6",
                  props: {
                    style: {
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "row",
                      justifyContent: "center",
                      borderWidth: "1px",
                      borderStyle: "solid",
                      borderTopRightRadius: "28px",
                      borderBottomRightRadius: "28px",
                      borderColor: "#E8E8E8",
                      backgroundColor: "#FFFFFF",
                      width: "158px",
                      height: "56px",
                      overflow: "hidden",
                    },
                    className: "wrapper-2",
                  },
                  rect: {
                    x: 562,
                    y: 522,
                    width: 158,
                    height: 56,
                  },
                  smart: {
                    layerProtocol: {
                      group: {
                        type: "group",
                      },
                      layout: {
                        type: "layout",
                        position: "right",
                      },
                    },
                  },
                  selfId: "1317CA10-4560-449F-B9B6-E3ABDD7E9B60",
                  nodeLayerName: "getCommend#group#",
                  children: [
                    {
                      componentName: "Image",
                      id: "9d6e90b2-b59b-11ec-bb16-07e524ed247b",
                      props: {
                        style: {
                          marginRight: "4px",
                          width: "48px",
                          height: "48px",
                        },
                        src: "https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/50c9e610b59b11ec95b04da6c9445af8.png",
                        className: "icon-chat",
                      },
                      rect: {
                        x: 588,
                        y: 526,
                        width: 48,
                        height: 48,
                      },
                      smart: {
                        layerProtocol: {
                          merge: {
                            type: "merge",
                          },
                          field: {
                            type: "chat",
                          },
                          layout: {
                            type: "layout",
                            position: "left",
                          },
                        },
                        nodeIdentification: {
                          fieldBind: ["chat"],
                        },
                        nodeCustom: {
                          fieldBind: {
                            confidential: 0.8804349303245544,
                            isConfident: true,
                            label: "chat",
                            type: "fieldBind",
                          },
                        },
                      },
                      selfId: "E1FF60F6-A955-466E-B838-38AB6B2D98BE",
                      nodeLayerName: "commendIcon#merge#",
                    },
                    {
                      componentName: "Text",
                      id: "9d6e90b1-b59b-11ec-bb16-07e524ed247b",
                      props: {
                        style: {
                          marginTop: "0px",
                          lineHeight: "24px",
                          whiteSpace: "nowrap",
                          color: "#4d4d4d",
                          fontFamily: "PingFang SC",
                          fontSize: "24px",
                          fontWeight: 400,
                        },
                        text: "1345",
                        lines: 1,
                        className: "num",
                      },
                      rect: {
                        x: 640,
                        y: 534,
                        width: 53,
                        height: 33,
                      },
                      selfId: "D4E4B01E-E959-422A-8FF1-EEFAE8C828070",
                      nodeLayerName: "1345",
                      smart: {
                        layerProtocol: {
                          layout: {
                            type: "layout",
                            position: "right",
                          },
                        },
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          componentName: "Div",
          id: "9d6f2cf1-b59b-11ec-bb16-07e524ed247b",
          props: {
            style: {
              display: "flex",
              position: "relative",
              alignItems: "flex-start",
              flexDirection: "column",
              marginTop: "-1px",
              backgroundColor: "#FFFFFF",
              width: "750px",
              whiteSpace: "nowrap",
            },
            className: "body-1",
          },
          rect: {
            x: 0,
            y: 589,
            width: 750,
            height: 327,
          },
          selfId: "25A71656-2349-41FF-A933-B14AC8D4ED7A",
          nodeLayerName: "bg",
          children: [
            {
              componentName: "Div",
              id: "abe24b51-70df-4300-9d37-5dfbdb4a4323",
              props: {
                style: {
                  display: "flex",
                  position: "relative",
                  alignItems: "flex-start",
                  flexDirection: "row",
                  marginTop: "25px",
                  marginLeft: "30px",
                  fontWeight: 500,
                  lineHeight: "53px",
                },
                className: "caption-wrapper",
              },
              rect: {
                x: 30,
                y: 614,
                width: 304,
                height: 53,
              },
              smart: {
                layerProtocol: {
                  group: {
                    type: "group",
                  },
                  layout: {
                    type: "layout",
                    position: "top",
                  },
                },
              },
              selfId: "F455B166-0F7D-413D-A9D7-646B55524E92",
              nodeLayerName: "introTitle#group#",
              children: [
                {
                  componentName: "Text",
                  id: "9d6eb7c3-b59b-11ec-bb16-07e524ed247b",
                  props: {
                    style: {
                      color: "#212223",
                      fontFamily: "PingFang SC",
                      fontSize: "38px",
                    },
                    text: "中情局的秘密档案",
                    lines: 1,
                    className: "caption",
                  },
                  rect: {
                    x: 30,
                    y: 614,
                    width: 304,
                    height: 53,
                  },
                  selfId: "BEF14B73-7422-4C8F-BBF3-97DA365F86190",
                  nodeLayerName: "title",
                },
              ],
            },
            {
              componentName: "Div",
              id: "2630625a-b0e8-48d5-a4e7-bb3b742cf3d7",
              props: {
                style: {
                  display: "flex",
                  position: "relative",
                  alignItems: "center",
                  flexDirection: "row",
                  marginTop: "7px",
                  marginLeft: "30px",
                  lineHeight: "20px",
                },
                className: "container-2",
              },
              rect: {
                x: 30,
                y: 674,
                width: 126,
                height: 28,
              },
              smart: {
                layerProtocol: {
                  group: {
                    type: "group",
                  },
                  layout: {
                    type: "list",
                    position: "middle",
                    row: 2,
                    col: 1,
                  },
                },
              },
              selfId: "53FB25F4-FB75-4FE0-8191-FA63DC2AB694",
              nodeLayerName: "introType#group#",
              children: [
                {
                  componentName: "Div",
                  id: "9d6eded0-b59b-11ec-bb16-07e524ed247b",
                  props: {
                    style: {
                      boxSizing: "border-box",
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "row",
                      marginRight: "16px",
                      borderWidth: "1px",
                      borderStyle: "solid",
                      borderRadius: "4px",
                      borderColor: "#E8E8E8",
                      paddingRight: "6px",
                      paddingLeft: "8px",
                      height: "28px",
                      overflow: "hidden",
                    },
                    className: "tag-wrapper-item0",
                  },
                  rect: {
                    x: 30,
                    y: 674,
                    width: 56,
                    height: 28,
                  },
                  selfId: "471D5144-1558-4888-B75D-AEF50A253879",
                  nodeLayerName: "bg",
                  children: [
                    {
                      componentName: "Text",
                      id: "9d6eb7c5-b59b-11ec-bb16-07e524ed247b",
                      props: {
                        style: {
                          marginTop: "-3px",
                          color: "#757575",
                          fontFamily: "PingFang SC",
                          fontSize: "20px",
                          fontWeight: 400,
                        },
                        text: "专题",
                        lines: 1,
                        className: "tag",
                      },
                      rect: {
                        x: 39,
                        y: 675,
                        width: 40,
                        height: 24,
                      },
                      selfId: "1D82E133-06F4-4AA3-8168-A010294BE5900",
                      nodeLayerName: "title",
                    },
                  ],
                  smart: {
                    layerProtocol: {
                      repeat: {
                        type: "repeat",
                        repeatId: "1649244059841924",
                        repeatIndex: "0",
                      },
                      multiStatus: {
                        type: "multiStatus",
                        protocol: {
                          autoDetected: true,
                          statusId: "16492440598596958",
                          statusIndex: 0,
                          statusCount: 2,
                        },
                      },
                      layout: {
                        type: "layout",
                        position: "left",
                      },
                    },
                  },
                },
                {
                  componentName: "Div",
                  id: "9d6eded2-b59b-11ec-bb16-07e524ed247b",
                  props: {
                    style: {
                      boxSizing: "border-box",
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "row",
                      borderWidth: "1px",
                      borderStyle: "solid",
                      borderRadius: "4px",
                      borderColor: "#E8E8E8",
                      paddingRight: "5px",
                      paddingLeft: "7px",
                      height: "28px",
                      overflow: "hidden",
                    },
                    className: "tag-wrapper-item1",
                  },
                  rect: {
                    x: 102,
                    y: 674,
                    width: 54,
                    height: 28,
                  },
                  selfId: "DB6F4042-27DF-4CBD-81D6-6BF24639BC28",
                  nodeLayerName: "bg",
                  children: [
                    {
                      componentName: "Text",
                      id: "9d6eded1-b59b-11ec-bb16-07e524ed247b",
                      props: {
                        style: {
                          marginTop: "-3px",
                          color: "#757575",
                          fontFamily: "PingFang SC",
                          fontSize: "20px",
                          fontWeight: 400,
                        },
                        text: "军事",
                        lines: 1,
                        className: "tag-1",
                      },
                      rect: {
                        x: 110,
                        y: 675,
                        width: 40,
                        height: 24,
                      },
                      selfId: "1C5EA665-5F4A-4704-8D60-3039F277D8200",
                      nodeLayerName: "title",
                    },
                  ],
                  smart: {
                    layerProtocol: {
                      repeat: {
                        type: "repeat",
                        repeatId: "1649244059841924",
                        repeatIndex: "1",
                      },
                      multiStatus: {
                        type: "multiStatus",
                        protocol: {
                          autoDetected: true,
                          statusId: "16492440598596958",
                          statusIndex: 1,
                          statusCount: 2,
                        },
                      },
                      layout: {
                        type: "layout",
                        position: "right",
                      },
                    },
                  },
                },
              ],
            },
            {
              componentName: "Div",
              id: "23179895-db91-4f64-80f7-2375a3784934",
              props: {
                style: {
                  display: "flex",
                  position: "relative",
                  alignItems: "flex-start",
                  alignSelf: "center",
                  flexDirection: "column",
                  marginTop: "23px",
                  whiteSpace: "normal",
                },
                className: "container-3",
              },
              rect: {
                x: 29,
                y: 725,
                width: 691,
                height: 191,
              },
              smart: {
                layerProtocol: {
                  group: {
                    type: "group",
                  },
                  layout: {
                    type: "layout",
                    position: "bottom",
                  },
                },
              },
              selfId: "7EC29138-8ACE-423F-A4D3-606352A6DD1C",
              nodeLayerName: "introContent#group#",
              children: [
                {
                  componentName: "Div",
                  id: "c14429bc-46be-4356-bd7b-4882cfd39005",
                  props: {
                    style: {
                      display: "flex",
                      position: "relative",
                      alignItems: "center",
                      flexDirection: "row",
                      width: "691px",
                    },
                    className: "wrapper-3",
                  },
                  rect: {
                    x: 29,
                    y: 725,
                    width: 691,
                    height: 62,
                  },
                  smart: {
                    layerProtocol: {
                      group: {
                        type: "group",
                      },
                      layout: {
                        type: "layout",
                        position: "top",
                      },
                    },
                  },
                  selfId: "FEB7D0A4-20F5-4653-9313-FFD662995D05",
                  nodeLayerName: "user#group#",
                  children: [
                    {
                      componentName: "Div",
                      id: "bdbaacf5-ae5b-4e05-b4e7-cc8b6152b459",
                      props: {
                        style: {
                          display: "flex",
                          position: "relative",
                          alignItems: "flex-start",
                          flexDirection: "row",
                          marginRight: "17px",
                        },
                        className: "group-1",
                      },
                      rect: {
                        x: 29,
                        y: 725,
                        width: 62,
                        height: 62,
                      },
                      children: [
                        {
                          componentName: "Image",
                          id: "9d6f05e1-b59b-11ec-bb16-07e524ed247b",
                          props: {
                            style: {
                              position: "absolute",
                              top: "0px",
                              left: "0px",
                              width: "62px",
                              height: "62px",
                              overflow: "hidden",
                            },
                            src: "https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/50e05440b59b11ec958a09e4edf763b7.png",
                            className: "large-icon",
                          },
                          rect: {
                            x: 29,
                            y: 725,
                            width: 62,
                            height: 62,
                          },
                          selfId: "053E66B9-B3DB-4619-9A35-289276D39B24",
                          nodeLayerName: "mask",
                          smart: {
                            layerProtocol: {
                              field: {
                                type: "avatar",
                              },
                            },
                            nodeIdentification: {
                              fieldBind: ["avatar"],
                            },
                            nodeCustom: {
                              fieldBind: {
                                confidential: 0.9999948740005493,
                                isConfident: true,
                                label: "avatar",
                                type: "fieldBind",
                              },
                            },
                          },
                        },
                        {
                          componentName: "Image",
                          id: "9d6f05e0-b59b-11ec-bb16-07e524ed247b",
                          props: {
                            style: {
                              position: "relative",
                              marginTop: "34px",
                              marginLeft: "34px",
                              width: "28px",
                              height: "28px",
                            },
                            src: "https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/4fe2e170b59b11ec9bf31162114c6041.png",
                            className: "icon-complete",
                          },
                          rect: {
                            x: 63,
                            y: 759,
                            width: 28,
                            height: 28,
                          },
                          smart: {
                            layerProtocol: {
                              merge: {
                                type: "merge",
                              },
                              field: {
                                type: "complete",
                              },
                            },
                            nodeIdentification: {
                              fieldBind: ["complete"],
                            },
                            nodeCustom: {
                              fieldBind: {
                                confidential: 0.83171147108078,
                                isConfident: true,
                                label: "complete",
                                type: "fieldBind",
                              },
                            },
                          },
                          selfId: "C4A8BE62-A9FD-4422-B748-01BB1F55A756",
                          nodeLayerName: "auto-#merge#",
                        },
                      ],
                      smart: {
                        layerProtocol: {
                          layout: {
                            type: "layout",
                            position: "left",
                          },
                        },
                      },
                    },
                    {
                      componentName: "Div",
                      id: "1ed8d9ac-564d-4dad-86a2-0b484cabbdbe",
                      props: {
                        style: {
                          display: "flex",
                          alignItems: "flex-start",
                          flexDirection: "row",
                          lineHeight: "40px",
                          whiteSpace: "nowrap",
                        },
                        className: "video-wrapper",
                      },
                      rect: {
                        x: 108,
                        y: 736,
                        width: 140,
                        height: 40,
                      },
                      smart: {
                        layerProtocol: {
                          group: {
                            type: "group",
                          },
                          layout: {
                            type: "layout",
                            position: "right",
                          },
                        },
                      },
                      selfId: "4193D6C4-2221-4B4E-8515-E9836717C24D",
                      nodeLayerName: "userName#group#",
                      children: [
                        {
                          componentName: "Text",
                          id: "9d6f05e3-b59b-11ec-bb16-07e524ed247b",
                          props: {
                            style: {
                              color: "#4d4d4d",
                              fontFamily: "PingFang SC",
                              fontSize: "28px",
                              fontWeight: 400,
                            },
                            text: "记录大时代",
                            lines: 1,
                            className: "video",
                          },
                          rect: {
                            x: 108,
                            y: 736,
                            width: 140,
                            height: 40,
                          },
                          selfId: "0C638899-7BCB-4C3E-8442-8E9711A3D6500",
                          nodeLayerName:
                            "来自凤凰卫视新闻纪录片《大新闻大历史》",
                        },
                      ],
                    },
                  ],
                },
                {
                  componentName: "Div",
                  id: "01f02f2c-d5f7-4ac5-bf40-c62a889dfa39",
                  props: {
                    style: {
                      display: "flex",
                      position: "relative",
                      alignItems: "flex-start",
                      flexDirection: "row",
                      marginTop: "9px",
                      marginLeft: "1px",
                      lineHeight: "40px",
                    },
                    className: "article-wrapper",
                  },
                  rect: {
                    x: 30,
                    y: 796,
                    width: 672,
                    height: 120,
                  },
                  smart: {
                    layerProtocol: {
                      group: {
                        type: "group",
                      },
                      layout: {
                        type: "layout",
                        position: "bottom",
                      },
                    },
                  },
                  selfId: "753D5FEC-76A8-479F-A9B2-FA8D5A626DD0",
                  nodeLayerName: "introText#group#",
                  children: [
                    {
                      componentName: "Text",
                      id: "9d6f2cf0-b59b-11ec-bb16-07e524ed247b",
                      props: {
                        style: {
                          WebkitBoxOrient: "vertical",
                          display: "-webkit-inline-box",
                          WebkitLineClamp: 3,
                          width: "672px",
                          height: "120px",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          color: "#4d4d4d",
                          fontFamily: "PingFang SC",
                          fontSize: "28px",
                          fontWeight: 400,
                        },
                        text: "美国中央情报局再次因为丑闻成为全球焦点，从暴力对待战俘开始，新兵被强制要求此文字打点显示规美国中央情报局再次因为丑闻成为全球焦点。",
                        lines: 3,
                        className: "article",
                      },
                      rect: {
                        x: 30,
                        y: 796,
                        width: 672,
                        height: 120,
                      },
                      selfId: "1FAB48F5-431E-4086-A914-39256C4B586F0",
                      nodeLayerName: "detail",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          componentName: "Div",
          id: "c6f84333-f0e7-4b23-94cd-cf60668d2b79",
          props: {
            style: {
              display: "flex",
              position: "relative",
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "center",
              width: "750px",
              height: "148px",
            },
            className: "footer",
          },
          rect: {
            x: 0,
            y: 916,
            width: 750,
            height: 148,
          },
          smart: {
            layerProtocol: {
              group: {
                type: "group",
              },
            },
          },
          selfId: "3A09A56B-2476-4AEC-80DA-5873F1A3608E",
          nodeLayerName: "introFun#group#",
          children: [
            {
              componentName: "Div",
              id: "f731b976-0154-4e44-96e6-b7e865f74a37",
              props: {
                style: {
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  marginRight: "120px",
                },
                className: "container-4",
              },
              rect: {
                x: 100,
                y: 952,
                width: 48,
                height: 76,
              },
              smart: {
                layerProtocol: {
                  group: {
                    type: "group",
                  },
                },
              },
              selfId: "A44C6755-59D5-4E09-94EC-03DA3DAC17EE",
              nodeLayerName: "like#group#",
              children: [
                {
                  componentName: "Div",
                  id: "b941405a-e8a6-4839-97a9-b157b5010a0b",
                  props: {
                    style: {
                      display: "flex",
                      position: "relative",
                      alignItems: "flex-start",
                      flexDirection: "row",
                      justifyContent: "center",
                    },
                    className: "icon-like-wrapper",
                  },
                  rect: {
                    x: 100,
                    y: 952,
                    width: 48,
                    height: 48,
                  },
                  smart: {
                    layerProtocol: {
                      group: {
                        type: "group",
                      },
                      layout: {
                        type: "layout",
                        position: "top",
                      },
                    },
                  },
                  selfId: "436FAAB9-76EC-432A-9A3C-D2F81DD40C9C",
                  nodeLayerName: "likeIcon#group#",
                  children: [
                    {
                      componentName: "Image",
                      id: "9d6f2cf5-b59b-11ec-bb16-07e524ed247b",
                      props: {
                        style: {
                          width: "48px",
                          height: "48px",
                        },
                        src: "https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/506ad620b59b11ec90f12199faeba7d5.png",
                        className: "icon-like",
                      },
                      rect: {
                        x: 100,
                        y: 952,
                        width: 48,
                        height: 48,
                      },
                      smart: {
                        layerProtocol: {
                          merge: {
                            type: "merge",
                          },
                          field: {
                            type: "like",
                          },
                        },
                        nodeIdentification: {
                          fieldBind: ["like"],
                        },
                        nodeCustom: {
                          fieldBind: {
                            confidential: 0.9968409538269043,
                            isConfident: true,
                            label: "like",
                            type: "fieldBind",
                          },
                        },
                      },
                      selfId: "58E1443C-B60E-4BB6-9CB9-307EAEF4657B",
                      nodeLayerName: "likeIcon#merge#",
                    },
                  ],
                },
                {
                  componentName: "Div",
                  id: "d9b482af-d604-4df3-a2f7-a826331ea44c",
                  props: {
                    style: {
                      display: "flex",
                      position: "relative",
                      alignItems: "flex-start",
                      flexDirection: "row",
                      lineHeight: "28px",
                      whiteSpace: "nowrap",
                    },
                    className: "wrapper-4",
                  },
                  rect: {
                    x: 118,
                    y: 1000,
                    width: 12,
                    height: 28,
                  },
                  smart: {
                    layerProtocol: {
                      group: {
                        type: "group",
                      },
                      layout: {
                        type: "layout",
                        position: "bottom",
                      },
                    },
                  },
                  selfId: "0EE1C28B-D5A3-407A-88EE-D4C307A29260",
                  nodeLayerName: "likeTitle#group#",
                  children: [
                    {
                      componentName: "Text",
                      id: "9d6f5401-b59b-11ec-bb16-07e524ed247b",
                      props: {
                        style: {
                          letterSpacing: "0px",
                          color: "#9e9e9e",
                          fontFamily: "PingFang SC",
                          fontSize: "20px",
                          fontWeight: 400,
                        },
                        text: "9",
                        lines: 1,
                        className: "num-1",
                      },
                      rect: {
                        x: 118,
                        y: 1000,
                        width: 12,
                        height: 28,
                      },
                      selfId: "A990DAA8-8443-461E-ADE5-E231A63B7D050",
                      nodeLayerName: "9",
                    },
                  ],
                },
              ],
            },
            {
              componentName: "Div",
              id: "83e9ff71-72ae-4612-92e6-0ffc203d952d",
              props: {
                style: {
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  marginRight: "120px",
                },
                className: "container-item0",
              },
              rect: {
                x: 268,
                y: 952,
                width: 48,
                height: 76,
              },
              smart: {
                layerProtocol: {
                  group: {
                    type: "group",
                  },
                  repeat: {
                    type: "repeat",
                    repeatId: "1649244059841331",
                    repeatIndex: "0",
                  },
                },
              },
              selfId: "DC815BE2-F44E-4A1E-A20F-E64D8DACFB29",
              nodeLayerName: "collect#group#",
              children: [
                {
                  componentName: "Div",
                  id: "7936392b-e27b-45b0-b624-cb6af43e3367",
                  props: {
                    style: {
                      display: "flex",
                      position: "relative",
                      alignItems: "flex-start",
                      flexDirection: "row",
                      justifyContent: "center",
                    },
                    className: "icon-star-wrapper",
                  },
                  rect: {
                    x: 268,
                    y: 952,
                    width: 48,
                    height: 48,
                  },
                  smart: {
                    layerProtocol: {
                      group: {
                        type: "group",
                      },
                      layout: {
                        type: "layout",
                        position: "top",
                      },
                    },
                  },
                  selfId: "AFE18CF1-1B63-488B-9876-B2F03408280D",
                  nodeLayerName: "collectIcon#group#",
                  children: [
                    {
                      componentName: "Image",
                      id: "9d6f5404-b59b-11ec-bb16-07e524ed247b",
                      props: {
                        style: {
                          width: "48px",
                          height: "48px",
                        },
                        src: "https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/506be790b59b11ecb68f21bd8980e873.png",
                        className: "icon-star",
                      },
                      rect: {
                        x: 268,
                        y: 952,
                        width: 48,
                        height: 48,
                      },
                      smart: {
                        layerProtocol: {
                          merge: {
                            type: "merge",
                          },
                          field: {
                            type: "star",
                          },
                        },
                        nodeIdentification: {
                          fieldBind: ["star"],
                        },
                        nodeCustom: {
                          fieldBind: {
                            confidential: 0.9992554783821106,
                            isConfident: true,
                            label: "star",
                            type: "fieldBind",
                          },
                        },
                      },
                      selfId: "17F60CF8-F41B-45F0-9219-774E111122B3",
                      nodeLayerName: "collectIcon#merge#",
                    },
                  ],
                },
                {
                  componentName: "Div",
                  id: "257dee37-0f24-4459-b9d1-a83bc383788e",
                  props: {
                    style: {
                      display: "flex",
                      position: "relative",
                      alignItems: "flex-start",
                      flexDirection: "row",
                      lineHeight: "28px",
                      whiteSpace: "nowrap",
                    },
                    className: "wrapper-5",
                  },
                  rect: {
                    x: 272,
                    y: 1000,
                    width: 40,
                    height: 28,
                  },
                  smart: {
                    layerProtocol: {
                      group: {
                        type: "group",
                      },
                      multiStatus: {
                        type: "multiStatus",
                        protocol: {
                          autoDetected: true,
                          statusId: "16492440598612451",
                          statusIndex: 0,
                          statusCount: 1,
                        },
                      },
                      layout: {
                        type: "layout",
                        position: "bottom",
                      },
                    },
                  },
                  selfId: "2B8F87EA-F859-4FB1-B331-27722CE1D975",
                  nodeLayerName: "collectTitle#group#",
                  children: [
                    {
                      componentName: "Text",
                      id: "9d6f7b11-b59b-11ec-bb16-07e524ed247b",
                      props: {
                        style: {
                          letterSpacing: "0px",
                          color: "#9e9e9e",
                          fontFamily: "PingFang SC",
                          fontSize: "20px",
                          fontWeight: 400,
                        },
                        text: "收藏",
                        lines: 1,
                        className: "favor",
                      },
                      rect: {
                        x: 272,
                        y: 1000,
                        width: 40,
                        height: 28,
                      },
                      selfId: "CFA43FCE-0CA2-4FB0-BFA6-1595BF75D0B70",
                      nodeLayerName: "收藏",
                    },
                  ],
                },
              ],
            },
            {
              componentName: "Div",
              id: "071ef323-730e-42ac-89f1-92a6e7af704a",
              props: {
                style: {
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  marginRight: "114px",
                },
                className: "container-item1",
              },
              rect: {
                x: 436,
                y: 952,
                width: 48,
                height: 76,
              },
              smart: {
                layerProtocol: {
                  group: {
                    type: "group",
                  },
                  repeat: {
                    type: "repeat",
                    repeatId: "1649244059841331",
                    repeatIndex: "1",
                  },
                },
              },
              selfId: "FF817940-0522-4725-810B-C2A0B4A1A9D2",
              nodeLayerName: "wechat#group#",
              children: [
                {
                  componentName: "Div",
                  id: "7d416602-1895-4945-a749-dc614a7601e3",
                  props: {
                    style: {
                      display: "flex",
                      position: "relative",
                      alignItems: "flex-start",
                      flexDirection: "row",
                      justifyContent: "center",
                    },
                    className: "icon-wechat-wrapper",
                  },
                  rect: {
                    x: 436,
                    y: 952,
                    width: 48,
                    height: 48,
                  },
                  smart: {
                    layerProtocol: {
                      group: {
                        type: "group",
                      },
                      layout: {
                        type: "layout",
                        position: "top",
                      },
                    },
                  },
                  selfId: "81EFDA2D-EB27-401A-9D33-00377926212C",
                  nodeLayerName: "collectIcon#group#",
                  children: [
                    {
                      componentName: "Image",
                      id: "9d6fa220-b59b-11ec-bb16-07e524ed247b",
                      props: {
                        style: {
                          width: "48px",
                          height: "48px",
                        },
                        src: "https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/5058fbd0b59b11ecbc6b6f565c95302d.png",
                        className: "icon-wechat",
                      },
                      rect: {
                        x: 436,
                        y: 952,
                        width: 48,
                        height: 48,
                      },
                      smart: {
                        layerProtocol: {
                          merge: {
                            type: "merge",
                          },
                          field: {
                            type: "wechat",
                          },
                        },
                        nodeIdentification: {
                          fieldBind: ["wechat"],
                        },
                        nodeCustom: {
                          fieldBind: {
                            confidential: 0.6260421276092529,
                            isConfident: true,
                            label: "wechat",
                            type: "fieldBind",
                          },
                        },
                      },
                      selfId: "3433E287-3F34-4742-8D8E-65D6B9F26A0D",
                      nodeLayerName: "collectIcon#merge#",
                    },
                  ],
                },
                {
                  componentName: "Div",
                  id: "0348229c-4303-4d87-b2c4-d0f9f761b4f1",
                  props: {
                    style: {
                      display: "flex",
                      position: "relative",
                      alignItems: "flex-start",
                      flexDirection: "row",
                      lineHeight: "28px",
                      whiteSpace: "nowrap",
                    },
                    className: "tag-wrapper",
                  },
                  rect: {
                    x: 440,
                    y: 1000,
                    width: 40,
                    height: 28,
                  },
                  smart: {
                    layerProtocol: {
                      group: {
                        type: "group",
                      },
                      layout: {
                        type: "layout",
                        position: "bottom",
                      },
                    },
                  },
                  selfId: "4BF9F0B4-28C5-4361-B182-504CAA85561A",
                  nodeLayerName: "collectTitle#group#",
                  children: [
                    {
                      componentName: "Text",
                      id: "9d6fc931-b59b-11ec-bb16-07e524ed247b",
                      props: {
                        style: {
                          letterSpacing: "0px",
                          color: "#9e9e9e",
                          fontFamily: "PingFang SC",
                          fontSize: "20px",
                          fontWeight: 400,
                        },
                        text: "微信",
                        lines: 1,
                        className: "tag-2",
                      },
                      rect: {
                        x: 440,
                        y: 1000,
                        width: 40,
                        height: 28,
                      },
                      selfId: "F02C10AD-80C9-4189-AE0C-29BBB1246A480",
                      nodeLayerName: "微信",
                    },
                  ],
                },
              ],
            },
            {
              componentName: "Div",
              id: "b37b674f-1585-4174-a36e-bc66c362b4ae",
              props: {
                style: {
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                },
                className: "container-item2",
              },
              rect: {
                x: 598,
                y: 952,
                width: 60,
                height: 76,
              },
              smart: {
                layerProtocol: {
                  group: {
                    type: "group",
                  },
                  repeat: {
                    type: "repeat",
                    repeatId: "1649244059841331",
                    repeatIndex: "2",
                  },
                },
              },
              selfId: "5C4214C0-F60C-4B7E-9E2F-33AE6D8E4142",
              nodeLayerName: "friends#group#",
              children: [
                {
                  componentName: "Div",
                  id: "1daad9b4-58f7-4f9e-a64d-28cd9ec51059",
                  props: {
                    style: {
                      display: "flex",
                      position: "relative",
                      alignItems: "flex-start",
                      flexDirection: "row",
                      justifyContent: "center",
                    },
                    className: "wrapper-6",
                  },
                  rect: {
                    x: 604,
                    y: 952,
                    width: 48,
                    height: 48,
                  },
                  smart: {
                    layerProtocol: {
                      group: {
                        type: "group",
                      },
                      layout: {
                        type: "layout",
                        position: "top",
                      },
                    },
                  },
                  selfId: "6C4C5B94-06D8-4153-A9EA-FB051E52A0D2",
                  nodeLayerName: "friendsIcon#group#",
                  children: [
                    {
                      componentName: "Image",
                      id: "9d6ff040-b59b-11ec-bb16-07e524ed247b",
                      props: {
                        style: {
                          width: "48px",
                          height: "48px",
                        },
                        src: "https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/50572710b59b11ec853d8df02c51a0df.png",
                        className: "icon",
                      },
                      rect: {
                        x: 604,
                        y: 952,
                        width: 48,
                        height: 48,
                      },
                      smart: {
                        layerProtocol: {
                          merge: {
                            type: "merge",
                          },
                        },
                      },
                      selfId: "8B37E9EB-E8F8-4A46-9FE5-1D147C20FE10",
                      nodeLayerName: "friendsIcon#merge#",
                    },
                  ],
                },
                {
                  componentName: "Div",
                  id: "99a940b8-d4cf-47d3-ac19-0405deaa4f26",
                  props: {
                    style: {
                      display: "flex",
                      position: "relative",
                      alignItems: "flex-start",
                      flexDirection: "row",
                      lineHeight: "28px",
                      whiteSpace: "nowrap",
                    },
                    className: "label-wrapper",
                  },
                  rect: {
                    x: 598,
                    y: 1000,
                    width: 60,
                    height: 28,
                  },
                  smart: {
                    layerProtocol: {
                      group: {
                        type: "group",
                      },
                      layout: {
                        type: "layout",
                        position: "bottom",
                      },
                    },
                  },
                  selfId: "8326910C-B132-4A4F-BE70-B0A435FA8589",
                  nodeLayerName: "friendsTitle#group#",
                  children: [
                    {
                      componentName: "Text",
                      id: "9d6ff042-b59b-11ec-bb16-07e524ed247b",
                      props: {
                        style: {
                          letterSpacing: "0px",
                          color: "#9e9e9e",
                          fontFamily: "PingFang SC",
                          fontSize: "20px",
                          fontWeight: 400,
                        },
                        text: "朋友圈",
                        lines: 1,
                        className: "label",
                      },
                      rect: {
                        x: 598,
                        y: 1000,
                        width: 60,
                        height: 28,
                      },
                      selfId: "18114203-2AF9-4634-968B-364DE6D847C40",
                      nodeLayerName: "朋友圈",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      componentName: "Block",
      id: "bd62ff1b-0343-49c6-8042-788c876d53d2",
      props: {
        style: {
          display: "flex",
          position: "absolute",
          top: "1064px",
          left: "0px",
          alignItems: "flex-start",
          flexDirection: "column",
          height: "202px",
        },
        className: "list-1v2-1",
      },
      rect: {
        x: 0,
        y: 1064,
        width: 970,
        height: 202,
      },
      selfId: "796AC3C7-2015-43B6-B224-DB4001AF62B7",
      fileName: "mod_2",
      smart: {
        layerProtocol: {
          group: {
            type: "group",
          },
          module: {
            type: "smartModule",
            name: "list-1v2",
          },
        },
      },
      nodeLayerName: "drama#group#",
      children: [
        {
          componentName: "Div",
          id: "9d7176e2-b59b-11ec-bb16-07e524ed247b",
          props: {
            style: {
              position: "absolute",
              bottom: "0px",
              left: "0px",
              width: "750px",
              height: "122px",
              overflow: "hidden",
            },
            className: "empty-1",
          },
          rect: {
            x: 0,
            y: 1144,
            width: 750,
            height: 122,
          },
          selfId: "3B2EE336-0E49-4E88-87FB-1664EE4950FF",
          nodeLayerName: "mask1",
        },
        {
          componentName: "Div",
          id: "78382531-ee39-428d-b89e-e8535f4a1b4d",
          props: {
            style: {
              boxSizing: "border-box",
              display: "flex",
              position: "relative",
              alignItems: "flex-start",
              flexDirection: "row",
              justifyContent: "space-between",
              backgroundColor: "#FFFFFF",
              paddingRight: "31px",
              paddingLeft: "30px",
              width: "750px",
              height: "80px",
            },
            className: "header-2",
          },
          rect: {
            x: 0,
            y: 1064,
            width: 750,
            height: 80,
          },
          smart: {
            layerProtocol: {
              group: {
                type: "group",
              },
            },
          },
          selfId: "22961B82-6F92-4214-BD6A-301203DFB928",
          nodeLayerName: "dramaHeader#group#",
          children: [
            {
              componentName: "Div",
              id: "40b619c1-f039-4ef1-940d-db5b18772cc0",
              props: {
                style: {
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "row",
                  marginTop: "18px",
                },
                className: "container-5",
              },
              rect: {
                x: 30,
                y: 1082,
                width: 232,
                height: 52,
              },
              smart: {
                layerProtocol: {
                  group: {
                    type: "group",
                  },
                  layout: {
                    type: "layout",
                    position: "left",
                  },
                },
              },
              selfId: "5EC41085-2021-4B62-8116-5C55DAFFAA83",
              nodeLayerName: "tabs#group#",
              children: [
                {
                  componentName: "Div",
                  id: "e93857bd-f64a-4333-87b9-b2d55097aaac",
                  props: {
                    style: {
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "column",
                      marginRight: "40px",
                    },
                    className: "wrapper-7",
                  },
                  rect: {
                    x: 30,
                    y: 1082,
                    width: 64,
                    height: 52,
                  },
                  smart: {
                    layerProtocol: {
                      group: {
                        type: "group",
                      },
                      layout: {
                        type: "layout",
                        position: "left",
                      },
                    },
                  },
                  selfId: "2CEF3182-7A57-44C8-A953-E69C72002209",
                  nodeLayerName: "positiveWrap#group#",
                  children: [
                    {
                      componentName: "Text",
                      id: "9d708c81-b59b-11ec-bb16-07e524ed247b",
                      props: {
                        style: {
                          position: "relative",
                          lineHeight: "45px",
                          whiteSpace: "nowrap",
                          color: "#212223",
                          fontFamily: "PingFang SC",
                          fontSize: "32px",
                          fontWeight: 500,
                        },
                        text: "选集",
                        lines: 1,
                        className: "title-1",
                      },
                      rect: {
                        x: 30,
                        y: 1082,
                        width: 64,
                        height: 45,
                      },
                      selfId: "10B8560B-1678-43B4-B01D-D06AE800E78F0",
                      nodeLayerName: "positive",
                      smart: {
                        layerProtocol: {
                          layout: {
                            type: "layout",
                            position: "top",
                          },
                        },
                      },
                    },
                    {
                      componentName: "Div",
                      id: "9d70b390-b59b-11ec-bb16-07e524ed247b",
                      props: {
                        style: {
                          position: "relative",
                          marginTop: "1px",
                          borderRadius: "3px",
                          backgroundColor: "#BD974C",
                          width: "28px",
                          height: "6px",
                          overflow: "hidden",
                        },
                        className: "horizontal-line",
                      },
                      rect: {
                        x: 48,
                        y: 1128,
                        width: 28,
                        height: 6,
                      },
                      selfId: "DBBF6822-8D14-425A-800F-D7E0218B15A6",
                      nodeLayerName: "chooseLine",
                      smart: {
                        layerProtocol: {
                          layout: {
                            type: "layout",
                            position: "bottom",
                          },
                        },
                      },
                    },
                  ],
                },
                {
                  componentName: "Div",
                  id: "66271260-2252-4bad-908e-1080f908a35e",
                  props: {
                    style: {
                      display: "flex",
                      alignItems: "flex-start",
                      flexDirection: "row",
                      marginTop: "-7px",
                      fontWeight: 500,
                      lineHeight: "45px",
                      whiteSpace: "nowrap",
                    },
                    className: "caption-wrapper-1",
                  },
                  rect: {
                    x: 134,
                    y: 1082,
                    width: 128,
                    height: 45,
                  },
                  smart: {
                    layerProtocol: {
                      group: {
                        type: "group",
                      },
                      layout: {
                        type: "layout",
                        position: "right",
                      },
                    },
                  },
                  selfId: "B532F863-402E-4937-A332-DD9F48868D2E",
                  nodeLayerName: "relaRecommendWrap#group#",
                  children: [
                    {
                      componentName: "Text",
                      id: "9d70b392-b59b-11ec-bb16-07e524ed247b",
                      props: {
                        style: {
                          color: "#7f7f7f",
                          fontFamily: "PingFang SC",
                          fontSize: "32px",
                        },
                        text: "相关推荐",
                        lines: 1,
                        className: "caption-1",
                      },
                      rect: {
                        x: 134,
                        y: 1082,
                        width: 128,
                        height: 45,
                      },
                      selfId: "3C788594-0012-4FBA-8AAA-2AA1AD05A7A20",
                      nodeLayerName: "relaRecommend",
                    },
                  ],
                },
              ],
            },
            {
              componentName: "Div",
              id: "c057dcf3-80a2-4755-8477-99252997d8b9",
              props: {
                style: {
                  display: "flex",
                  alignItems: "flex-start",
                  flexDirection: "row",
                  marginTop: "20px",
                  lineHeight: "40px",
                  whiteSpace: "nowrap",
                },
                className: "title-wrapper-1",
              },
              rect: {
                x: 634,
                y: 1084,
                width: 85,
                height: 40,
              },
              smart: {
                layerProtocol: {
                  group: {
                    type: "group",
                  },
                  layout: {
                    type: "layout",
                    position: "right",
                  },
                },
              },
              selfId: "EB7BFA54-7849-47E2-A2BC-02A7371EAFE2",
              nodeLayerName: "total#group#",
              children: [
                {
                  componentName: "Text",
                  id: "9d703e62-b59b-11ec-bb16-07e524ed247b",
                  props: {
                    style: {
                      color: "#4d4d4d",
                      fontFamily: "PingFang SC",
                      fontSize: "28px",
                      fontWeight: 400,
                    },
                    text: "共10集",
                    lines: 1,
                    className: "title-2",
                  },
                  rect: {
                    x: 634,
                    y: 1084,
                    width: 85,
                    height: 40,
                  },
                  selfId: "53BA3914-D571-4493-9510-A8760C2CC08A0",
                  nodeLayerName: "title",
                },
              ],
            },
          ],
        },
        {
          componentName: "Div",
          id: "3bf98af4-939f-42ca-b0cc-dedbd89bd3a9",
          props: {
            style: {
              display: "flex",
              position: "relative",
              alignItems: "center",
              flexDirection: "row",
              marginLeft: "26px",
            },
            className: "body-2",
          },
          rect: {
            x: 26,
            y: 1144,
            width: 944,
            height: 106,
          },
          smart: {
            layerProtocol: {
              group: {
                type: "group",
              },
            },
          },
          selfId: "7D4415C4-9382-4116-A211-19241A936056",
          nodeLayerName: "items#group#",
          children: [
            {
              componentName: "Div",
              id: "0d6a6e12-07b5-468a-9037-cca351ec4c1d",
              props: {
                style: {
                  display: "flex",
                  position: "relative",
                  alignItems: "center",
                  flexDirection: "row",
                  marginRight: "30px",
                },
                className: "grid",
              },
              rect: {
                x: 26,
                y: 1144,
                width: 650,
                height: 106,
              },
              children: [
                {
                  componentName: "Div",
                  id: "915e41c4-9b71-460b-bc66-7962cc2fdc31",
                  props: {
                    style: {
                      display: "flex",
                      position: "relative",
                      alignItems: "center",
                      flexDirection: "row",
                      justifyContent: "center",
                      marginRight: "10px",
                      width: "320px",
                      height: "106px",
                    },
                    className: "col-item0",
                  },
                  rect: {
                    x: 26,
                    y: 1144,
                    width: 320,
                    height: 106,
                  },
                  children: [
                    {
                      componentName: "Div",
                      id: "fc3e5111-4a4e-4be0-ade2-7d25f660aa45",
                      props: {
                        style: {
                          position: "absolute",
                          top: "0px",
                          left: "0px",
                          borderWidth: "1px",
                          borderStyle: "solid",
                          borderRadius: "8px",
                          borderColor: "#BD974C",
                          width: "320px",
                          height: "106px",
                          overflow: "hidden",
                        },
                        className: "empty-2",
                      },
                      rect: {
                        x: 26,
                        y: 1144,
                        width: 320,
                        height: 106,
                      },
                      smart: {
                        layerProtocol: {
                          group: {
                            type: "group",
                          },
                        },
                      },
                      selfId: "3466270F-DFC4-49E8-94DE-C745F1697DAD",
                      nodeLayerName: "矩形#group#",
                    },
                    {
                      componentName: "Div",
                      id: "6b682498-dbac-40d2-ad07-a8ee8ead4533",
                      props: {
                        style: {
                          display: "flex",
                          position: "relative",
                          alignItems: "flex-start",
                          flexDirection: "column",
                          marginTop: "-1px",
                        },
                        className: "group-2",
                      },
                      rect: {
                        x: 46,
                        y: 1160,
                        width: 280,
                        height: 73,
                      },
                      smart: {
                        layerProtocol: {
                          group: {
                            type: "group",
                          },
                        },
                      },
                      selfId: "5BE35AC1-601C-457B-8294-D1B006A424E3",
                      nodeLayerName: "content#group#",
                      children: [
                        {
                          componentName: "Div",
                          id: "7bcf8cbe-3d85-4b5d-bd40-f4b54d63c7af",
                          props: {
                            style: {
                              display: "flex",
                              position: "relative",
                              alignItems: "flex-start",
                              flexDirection: "row",
                              fontWeight: 500,
                              lineHeight: "37px",
                              whiteSpace: "pre",
                            },
                            className: "caption-wrapper-2",
                          },
                          rect: {
                            x: 46,
                            y: 1160,
                            width: 80,
                            height: 37,
                          },
                          smart: {
                            layerProtocol: {
                              group: {
                                type: "group",
                              },
                              layout: {
                                type: "layout",
                                position: "top",
                              },
                            },
                          },
                          selfId: "DCC4092D-02D0-494B-ABFB-97E3D996187A",
                          nodeLayerName: "title#group#",
                          children: [
                            {
                              componentName: "Text",
                              id: "9d70daa3-b59b-11ec-bb16-07e524ed247b",
                              props: {
                                style: {
                                  color: "#bd974c",
                                  fontFamily: "PingFang SC",
                                  fontSize: "26px",
                                },
                                text: "第 1 集",
                                lines: 1,
                                className: "caption-2",
                              },
                              rect: {
                                x: 46,
                                y: 1160,
                                width: 80,
                                height: 37,
                              },
                              selfId: "6DAC6A22-360E-433F-B165-C4FAE992C0820",
                              nodeLayerName: "title",
                            },
                          ],
                        },
                        {
                          componentName: "Div",
                          id: "1f66b20a-8ea4-4478-b6a2-2b0dfc638417",
                          props: {
                            style: {
                              display: "flex",
                              position: "relative",
                              alignItems: "flex-start",
                              flexDirection: "row",
                              marginTop: "3px",
                              lineHeight: "33px",
                              whiteSpace: "nowrap",
                            },
                            className: "info-wrapper",
                          },
                          rect: {
                            x: 46,
                            y: 1200,
                            width: 264,
                            height: 33,
                          },
                          smart: {
                            layerProtocol: {
                              group: {
                                type: "group",
                              },
                              layout: {
                                type: "layout",
                                position: "bottom",
                              },
                            },
                          },
                          selfId: "DA16C157-29EE-4A05-8568-E471DF8891BD",
                          nodeLayerName: "content#group#",
                          children: [
                            {
                              componentName: "Text",
                              id: "9d7101b0-b59b-11ec-bb16-07e524ed247b",
                              props: {
                                style: {
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                  color: "#bd974c",
                                  fontFamily: "PingFang SC",
                                  fontSize: "24px",
                                  fontWeight: 400,
                                },
                                text: "这届奥特曼长得有奥特…",
                                lines: 1,
                                className: "info",
                              },
                              rect: {
                                x: 46,
                                y: 1200,
                                width: 264,
                                height: 33,
                              },
                              selfId: "782CF4AD-DA8D-48D3-89D7-9231DDE45C080",
                              nodeLayerName: "content",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                  smart: {
                    layerProtocol: {
                      repeat: {
                        type: "repeat",
                        repeatId: "1649244059841220",
                        repeatIndex: "0",
                      },
                      layout: {
                        type: "layout",
                        position: "left",
                      },
                    },
                  },
                },
                {
                  componentName: "Div",
                  id: "3c63ed64-aaad-4f14-8717-d354b934e739",
                  props: {
                    style: {
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      marginRight: 10,
                      width: "320px",
                      height: "106px",
                      position: "relative",
                    },
                    className: "col-item1",
                  },
                  rect: {
                    x: 356,
                    y: 1144,
                    width: 320,
                    height: 106,
                  },
                  children: [
                    {
                      componentName: "Div",
                      id: "9083040c-37a1-4be4-9e8e-e16cb0e53198",
                      props: {
                        style: {
                          position: "absolute",
                          top: "0px",
                          left: "0px",
                          borderWidth: "1px",
                          borderStyle: "solid",
                          borderRadius: "8px",
                          borderColor: "rgba(158,158,158,0.60)",
                          width: "320px",
                          height: "106px",
                          overflow: "hidden",
                        },
                        className: "empty-3",
                      },
                      rect: {
                        x: 356,
                        y: 1144,
                        width: 320,
                        height: 106,
                      },
                      smart: {
                        layerProtocol: {
                          group: {
                            type: "group",
                          },
                        },
                      },
                      selfId: "3AB02281-A175-4AD8-985B-BE72DC7CD011",
                      nodeLayerName: "矩形#group#",
                    },
                    {
                      componentName: "Div",
                      id: "e77a441a-3d3a-4849-8915-d1807d8ddec3",
                      props: {
                        style: {
                          display: "flex",
                          position: "relative",
                          alignItems: "flex-start",
                          flexDirection: "column",
                          marginTop: "-1px",
                        },
                        className: "group-3",
                      },
                      rect: {
                        x: 376,
                        y: 1160,
                        width: 280,
                        height: 73,
                      },
                      smart: {
                        layerProtocol: {
                          group: {
                            type: "group",
                          },
                        },
                      },
                      selfId: "3E488745-96F9-46EA-A437-21C3927AF05A",
                      nodeLayerName: "content#group#",
                      children: [
                        {
                          componentName: "Div",
                          id: "103d6dc4-3e0c-4644-b368-581f5a2bca90",
                          props: {
                            style: {
                              display: "flex",
                              position: "relative",
                              alignItems: "flex-start",
                              flexDirection: "row",
                              fontWeight: 500,
                              lineHeight: "37px",
                              whiteSpace: "pre",
                            },
                            className: "title-wrapper-2",
                          },
                          rect: {
                            x: 376,
                            y: 1160,
                            width: 85,
                            height: 37,
                          },
                          smart: {
                            layerProtocol: {
                              group: {
                                type: "group",
                              },
                              layout: {
                                type: "layout",
                                position: "top",
                              },
                            },
                          },
                          selfId: "B6AF4C78-8BAB-4E74-979C-4CD723C046A8",
                          nodeLayerName: "title#group#",
                          children: [
                            {
                              componentName: "Text",
                              id: "9d7128c0-b59b-11ec-bb16-07e524ed247b",
                              props: {
                                style: {
                                  color: "#000000",
                                  fontFamily: "PingFang SC",
                                  fontSize: "26px",
                                },
                                text: "第 2 集",
                                lines: 1,
                                className: "title-3",
                              },
                              rect: {
                                x: 376,
                                y: 1160,
                                width: 85,
                                height: 37,
                              },
                              selfId: "AD1EBDEF-3A9F-4660-B6DA-FA66036ABD0E0",
                              nodeLayerName: "title",
                            },
                          ],
                        },
                        {
                          componentName: "Div",
                          id: "39ecd12a-8d4a-4897-8df3-42f241721afb",
                          props: {
                            style: {
                              display: "flex",
                              position: "relative",
                              alignItems: "flex-start",
                              flexDirection: "row",
                              marginTop: "3px",
                              lineHeight: "33px",
                              whiteSpace: "nowrap",
                            },
                            className: "meta-wrapper",
                          },
                          rect: {
                            x: 376,
                            y: 1200,
                            width: 264,
                            height: 33,
                          },
                          smart: {
                            layerProtocol: {
                              group: {
                                type: "group",
                              },
                              layout: {
                                type: "layout",
                                position: "bottom",
                              },
                            },
                          },
                          selfId: "E5E34CD3-224B-4737-913F-A04D4E436854",
                          nodeLayerName: "content#group#",
                          children: [
                            {
                              componentName: "Text",
                              id: "9d7128c2-b59b-11ec-bb16-07e524ed247b",
                              props: {
                                style: {
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                  color: "#212223",
                                  fontFamily: "PingFang SC",
                                  fontSize: "24px",
                                  fontWeight: 400,
                                },
                                text: "这届奥特曼长得有奥特…",
                                lines: 1,
                                className: "meta",
                              },
                              rect: {
                                x: 376,
                                y: 1200,
                                width: 264,
                                height: 33,
                              },
                              selfId: "5CB53883-5967-4361-B503-417A38FF1DD50",
                              nodeLayerName: "content",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                  smart: {
                    layerProtocol: {
                      repeat: {
                        type: "repeat",
                        repeatId: "1649244059841220",
                        repeatIndex: "1",
                      },
                      layout: {
                        type: "layout",
                        position: "right",
                      },
                    },
                  },
                },
                {
                  componentName: "Div",
                  id: "bb1e64ce-79ba-4b88-9176-bfa327bd1a78",
                  props: {
                    style: {
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "320px",
                      height: "106px",
                      position: "relative",
                      top: "0px",
                      borderRadius: "8px",
                      borderWidth: "1px",
                      borderStyle: "solid",
                      borderColor: "rgba(158,158,158,0.60)",
                    },
                    className: "container-6",
                  },
                  rect: {
                    x: 686,
                    y: 1144,
                    width: 64,
                    height: 106,
                  },
                  smart: {
                    layerProtocol: {
                      group: {
                        type: "group",
                      },
                    },
                  },
                  selfId: "0E454BEA-C47A-4877-933B-9BAE8B3B86D6",
                  nodeLayerName: "矩形#group#",
                  children: [
                    {
                      componentName: "Div",
                      id: "80bdc8d1-ce83-4b04-8542-d515e5362dcc",
                      props: {
                        style: {
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          position: "relative",
                        },
                        className: "container-7",
                      },
                      rect: {
                        x: 706,
                        y: 1160,
                        width: 264,
                        height: 73,
                      },
                      smart: {
                        layerProtocol: {
                          group: {
                            type: "group",
                          },
                        },
                      },
                      selfId: "BE9DC308-8C51-491C-AA44-78904553E847",
                      nodeLayerName: "content#group#",
                      children: [
                        {
                          componentName: "Div",
                          id: "f1e27706-c677-45e0-a1d5-b23a5bb28850",
                          props: {
                            style: {
                              display: "flex",
                              position: "relative",
                              alignItems: "flex-start",
                              flexDirection: "row",
                              fontWeight: 500,
                              lineHeight: "37px",
                              whiteSpace: "pre",
                            },
                            className: "caption-wrapper-3",
                          },
                          rect: {
                            x: 706,
                            y: 1160,
                            width: 85,
                            height: 37,
                          },
                          smart: {
                            layerProtocol: {
                              group: {
                                type: "group",
                              },
                              layout: {
                                type: "layout",
                                position: "top",
                              },
                            },
                          },
                          selfId: "77478669-8100-4B7B-AA63-7B2900946B30",
                          nodeLayerName: "title#group#",
                          children: [
                            {
                              componentName: "Text",
                              id: "9d714fd2-b59b-11ec-bb16-07e524ed247b",
                              props: {
                                style: {
                                  color: "#000000",
                                  fontFamily: "PingFang SC",
                                  fontSize: "26px",
                                },
                                text: "第 3 集",
                                lines: 1,
                                className: "caption-3",
                              },
                              rect: {
                                x: 706,
                                y: 1160,
                                width: 85,
                                height: 37,
                              },
                              selfId: "B8EB5723-EA9D-462C-92BD-A69043B3B0CF0",
                              nodeLayerName: "title",
                            },
                          ],
                        },
                        {
                          componentName: "Div",
                          id: "47fbcde8-ca1e-4b19-a950-99d2486461e6",
                          props: {
                            style: {
                              display: "flex",
                              position: "relative",
                              alignItems: "flex-start",
                              flexDirection: "row",
                              marginTop: "3px",
                              lineHeight: "33px",
                              whiteSpace: "nowrap",
                            },
                            className: "subtitle-wrapper",
                          },
                          rect: {
                            x: 706,
                            y: 1200,
                            width: 264,
                            height: 33,
                          },
                          smart: {
                            layerProtocol: {
                              group: {
                                type: "group",
                              },
                              layout: {
                                type: "layout",
                                position: "bottom",
                              },
                            },
                          },
                          selfId: "F5DA8A7A-2E7E-4B1D-A01E-99D72C31D815",
                          nodeLayerName: "content#group#",
                          children: [
                            {
                              componentName: "Text",
                              id: "9d714fd4-b59b-11ec-bb16-07e524ed247b",
                              props: {
                                style: {
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                  color: "#212223",
                                  fontFamily: "PingFang SC",
                                  fontSize: "24px",
                                  fontWeight: 400,
                                },
                                text: "这届奥特曼长得有奥特…",
                                lines: 1,
                                className: "subtitle",
                              },
                              rect: {
                                x: 706,
                                y: 1200,
                                width: 264,
                                height: 33,
                              },
                              selfId: "2E4A1562-0196-45CA-A527-936A1DF0C1810",
                              nodeLayerName: "content",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
              smart: {
                layerProtocol: {
                  layout: {
                    type: "list",
                    row: 2,
                    col: 1,
                  },
                },
              },
            },
          ],
        },
      ],
    },
    {
      componentName: "Block",
      id: "8e1da096-02c5-47e0-9b1c-5dced3d29eeb",
      props: {
        style: {
          display: "flex",
          position: "absolute",
          top: "1266px",
          left: "0px",
          alignItems: "flex-start",
          flexDirection: "column",
          height: "374px",
        },
        className: "list-1v3",
      },
      rect: {
        x: 0,
        y: 1266,
        width: 830,
        height: 374,
      },
      selfId: "8D8A9C46-0086-4138-A838-EC0189CF656A",
      fileName: "mod_3",
      smart: {
        layerProtocol: {
          group: {
            type: "group",
          },
          module: {
            type: "smartModule",
            name: "list-1v3",
          },
        },
      },
      nodeLayerName: "gags#group#",
      children: [
        {
          componentName: "Div",
          id: "9d721324-b59b-11ec-bb16-07e524ed247b",
          props: {
            style: {
              position: "absolute",
              bottom: "0px",
              left: "0px",
              backgroundColor: "#FFFFFF",
              width: "750px",
              height: "294px",
              overflow: "hidden",
            },
            className: "layer",
          },
          rect: {
            x: 0,
            y: 1346,
            width: 750,
            height: 294,
          },
          selfId: "2E6C118F-9C23-4F54-85C8-98358F5A9318",
          nodeLayerName: "mask",
        },
        {
          componentName: "Div",
          id: "9d719df1-b59b-11ec-bb16-07e524ed247b",
          props: {
            style: {
              boxSizing: "border-box",
              display: "flex",
              position: "relative",
              alignItems: "center",
              flexDirection: "row",
              backgroundColor: "#FFFFFF",
              paddingRight: "592px",
              paddingLeft: "30px",
              height: "80px",
              fontWeight: 500,
              lineHeight: "45px",
              whiteSpace: "nowrap",
            },
            className: "header-3",
          },
          rect: {
            x: 0,
            y: 1266,
            width: 750,
            height: 80,
          },
          selfId: "15FFE2C8-341E-48C7-8A8D-0727B9E9F373",
          nodeLayerName: "gagsBg",
          children: [
            {
              componentName: "Div",
              id: "0bbe397c-f7e4-4bab-948e-6af1b5be7bfc",
              props: {
                style: {
                  display: "flex",
                  alignItems: "flex-start",
                  flexDirection: "row",
                  marginTop: "1px",
                },
                className: "title-wrapper-3",
              },
              rect: {
                x: 30,
                y: 1284,
                width: 128,
                height: 45,
              },
              smart: {
                layerProtocol: {
                  group: {
                    type: "group",
                  },
                },
              },
              selfId: "276FEBEA-848E-4F6E-BE45-0182FBD9EECB",
              nodeLayerName: "gagsTitle#group#",
              children: [
                {
                  componentName: "Text",
                  id: "9d719df0-b59b-11ec-bb16-07e524ed247b",
                  props: {
                    style: {
                      color: "#212223",
                      fontFamily: "PingFang SC",
                      fontSize: "32px",
                    },
                    text: "片段花絮",
                    lines: 1,
                    className: "title-4",
                  },
                  rect: {
                    x: 30,
                    y: 1284,
                    width: 128,
                    height: 45,
                  },
                  selfId: "2503676D-8BAB-4450-AA21-519A76EC76040",
                  nodeLayerName: "gagsTitle",
                },
              ],
            },
          ],
        },
        {
          componentName: "Div",
          id: "562bc2d4-9c50-48f3-90f7-7b3925c02946",
          props: {
            style: {
              display: "flex",
              position: "relative",
              alignItems: "center",
              flexDirection: "row",
              marginLeft: "26px",
            },
            className: "body-3",
          },
          rect: {
            x: 26,
            y: 1346,
            width: 804,
            height: 264,
          },
          smart: {
            layerProtocol: {
              group: {
                type: "group",
              },
              layout: {
                type: "list",
                row: 3,
                col: 1,
              },
            },
          },
          selfId: "0E3747DA-5B1F-4388-9956-2259A9485267",
          nodeLayerName: "gagsSilder#group#",
          children: [
            {
              componentName: "Div",
              id: "9a7e3be3-08f5-4baa-9f5b-c1ac1f7296f1",
              props: {
                style: {
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  marginRight: "10px",
                },
                className: "container-item0-1",
              },
              rect: {
                x: 26,
                y: 1346,
                width: 264,
                height: 264,
              },
              children: [
                {
                  componentName: "Div",
                  id: "ec8a16ed-552a-41f4-ae7d-6ba2b581f11a",
                  props: {
                    style: {
                      display: "flex",
                      position: "relative",
                      alignItems: "flex-start",
                      flexDirection: "row",
                    },
                    className: "wrapper-8",
                  },
                  rect: {
                    x: 26,
                    y: 1346,
                    width: 264,
                    height: 176,
                  },
                  smart: {
                    layerProtocol: {
                      group: {
                        type: "group",
                      },
                      layout: {
                        type: "layout",
                        position: "top",
                      },
                    },
                  },
                  selfId: "1D902626-19E9-4E8D-8E86-B8F81A455CB4",
                  nodeLayerName: "imageWrap#group#",
                  children: [
                    {
                      componentName: "Image",
                      id: "9d71c501-b59b-11ec-bb16-07e524ed247b",
                      props: {
                        style: {
                          position: "relative",
                          width: "264px",
                          height: "176px",
                        },
                        src: "https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/5c9a7ef0b59b11ec888be34f50965030.png",
                        className: "entry-pic",
                      },
                      rect: {
                        x: 26,
                        y: 1346,
                        width: 264,
                        height: 176,
                      },
                      smart: {
                        layerProtocol: {
                          merge: {
                            type: "merge",
                          },
                        },
                      },
                      selfId: "5DD2C0C1-3A9A-4726-8419-70A1FA33A4C2",
                      nodeLayerName: "image#merge#",
                    },
                    {
                      componentName: "Div",
                      id: "e47644ae-6b26-47de-ae52-31f0953b76d4",
                      props: {
                        style: {
                          display: "flex",
                          position: "absolute",
                          right: "9px",
                          bottom: "10px",
                          alignItems: "flex-start",
                          flexDirection: "row",
                          lineHeight: "28px",
                          whiteSpace: "nowrap",
                        },
                        className: "word-wrapper",
                      },
                      rect: {
                        x: 222,
                        y: 1484,
                        width: 59,
                        height: 28,
                      },
                      smart: {
                        layerProtocol: {
                          group: {
                            type: "group",
                          },
                          multiStatus: {
                            type: "multiStatus",
                            protocol: {
                              autoDetected: true,
                              statusId: "16492440598655330",
                              statusIndex: 0,
                              statusCount: 1,
                            },
                          },
                        },
                      },
                      selfId: "741FE9C4-4EA7-416B-8564-7A1ADAD8C467",
                      nodeLayerName: "imageTitle#group#",
                      children: [
                        {
                          componentName: "Text",
                          id: "9d71c500-b59b-11ec-bb16-07e524ed247b",
                          props: {
                            style: {
                              fontSize: "24px",
                              fontWeight: 400,
                              textShadow:
                                "0px 2px 2px rgba(0, 0, 0, 0.30196078431372547)",
                              color: "#ffffff",
                            },
                            text: "31:27",
                            lines: 1,
                            className: "word",
                          },
                          rect: {
                            x: 222,
                            y: 1484,
                            width: 59,
                            height: 28,
                          },
                          selfId: "9C16FAD4-485E-4F52-9CDE-D7D01E54DF080",
                          nodeLayerName: "imageTitle",
                        },
                      ],
                    },
                  ],
                },
                {
                  componentName: "Div",
                  id: "4c40250a-54bd-495a-9f3e-0883665be991",
                  props: {
                    style: {
                      display: "flex",
                      position: "relative",
                      alignItems: "flex-start",
                      flexDirection: "row",
                      marginTop: "8px",
                      lineHeight: "40px",
                    },
                    className: "caption-wrapper-4",
                  },
                  rect: {
                    x: 30,
                    y: 1530,
                    width: 252,
                    height: 80,
                  },
                  smart: {
                    layerProtocol: {
                      group: {
                        type: "group",
                      },
                      multiStatus: {
                        type: "multiStatus",
                        protocol: {
                          autoDetected: true,
                          statusId: "16492440598659079",
                          statusIndex: 0,
                          statusCount: 1,
                        },
                      },
                      layout: {
                        type: "layout",
                        position: "bottom",
                      },
                    },
                  },
                  selfId: "A294A995-EED4-49FD-A1F1-2D19DBF9A9B8",
                  nodeLayerName: "imageContent#group#",
                  children: [
                    {
                      componentName: "Text",
                      id: "9d71c503-b59b-11ec-bb16-07e524ed247b",
                      props: {
                        style: {
                          WebkitBoxOrient: "vertical",
                          display: "-webkit-inline-box",
                          WebkitLineClamp: 2,
                          width: "252px",
                          height: "80px",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          color: "#212223",
                          fontFamily: "PingFang SC",
                          fontSize: "28px",
                          fontWeight: 400,
                        },
                        text: "中情局的一系列神秘操作集锦视频的是…",
                        lines: 2,
                        className: "caption-4",
                      },
                      rect: {
                        x: 30,
                        y: 1530,
                        width: 252,
                        height: 80,
                      },
                      selfId: "772F052C-F3A4-4054-982D-8814EC9C8A620",
                      nodeLayerName: "content",
                    },
                  ],
                },
              ],
              smart: {
                layerProtocol: {
                  repeat: {
                    type: "repeat",
                    repeatId: "1649244059842813",
                    repeatIndex: "0",
                  },
                  layout: {
                    type: "layout",
                    position: "left",
                  },
                },
              },
            },
            {
              componentName: "Div",
              id: "ebb13490-84bf-4060-bfed-184bc1e7b9c5",
              props: {
                style: {
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  marginRight: "10px",
                },
                className: "container-item1-1",
              },
              rect: {
                x: 300,
                y: 1346,
                width: 264,
                height: 264,
              },
              children: [
                {
                  componentName: "Div",
                  id: "7aef818c-3657-4457-975e-ba4033018721",
                  props: {
                    style: {
                      display: "flex",
                      position: "relative",
                      alignItems: "flex-start",
                      flexDirection: "row",
                    },
                    className: "wrapper-9",
                  },
                  rect: {
                    x: 300,
                    y: 1346,
                    width: 264,
                    height: 176,
                  },
                  smart: {
                    layerProtocol: {
                      group: {
                        type: "group",
                      },
                      layout: {
                        type: "layout",
                        position: "top",
                      },
                    },
                  },
                  selfId: "D87C7275-87A7-4C45-8A1E-DD7C841D5BA7",
                  nodeLayerName: "imageWrap#group#",
                  children: [
                    {
                      componentName: "Image",
                      id: "9d71ec12-b59b-11ec-bb16-07e524ed247b",
                      props: {
                        style: {
                          position: "relative",
                          width: "264px",
                          height: "176px",
                        },
                        src: "https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/5a2168a0b59b11ecb68f21bd8980e873.png",
                        className: "entry-pic-1",
                      },
                      rect: {
                        x: 300,
                        y: 1346,
                        width: 264,
                        height: 176,
                      },
                      smart: {
                        layerProtocol: {
                          merge: {
                            type: "merge",
                          },
                        },
                      },
                      selfId: "A2EEA634-43E4-4215-8A5D-048B0B26987D",
                      nodeLayerName: "image#merge#",
                    },
                    {
                      componentName: "Div",
                      id: "9d6e0c06-fe70-40f1-9d20-3a812f167669",
                      props: {
                        style: {
                          display: "flex",
                          position: "absolute",
                          right: "9px",
                          bottom: "10px",
                          alignItems: "flex-start",
                          flexDirection: "row",
                          lineHeight: "28px",
                          whiteSpace: "nowrap",
                        },
                        className: "tag-wrapper-1",
                      },
                      rect: {
                        x: 496,
                        y: 1484,
                        width: 59,
                        height: 28,
                      },
                      smart: {
                        layerProtocol: {
                          group: {
                            type: "group",
                          },
                        },
                      },
                      selfId: "67437DF3-6B1D-4E22-857A-DEB66AE4BC75",
                      nodeLayerName: "imageTitle#group#",
                      children: [
                        {
                          componentName: "Text",
                          id: "9d71ec11-b59b-11ec-bb16-07e524ed247b",
                          props: {
                            style: {
                              fontSize: "24px",
                              fontWeight: 400,
                              textShadow:
                                "0px 2px 2px rgba(0, 0, 0, 0.30196078431372547)",
                              color: "#ffffff",
                            },
                            text: "31:27",
                            lines: 1,
                            className: "tag-3",
                          },
                          rect: {
                            x: 496,
                            y: 1484,
                            width: 59,
                            height: 28,
                          },
                          selfId: "D6680167-EFF8-41BE-B32A-B6D6A229FB790",
                          nodeLayerName: "imageTitle",
                        },
                      ],
                    },
                  ],
                },
                {
                  componentName: "Div",
                  id: "f07c3ccf-6289-47a2-8d3b-04ee09f703ff",
                  props: {
                    style: {
                      display: "flex",
                      position: "relative",
                      alignItems: "flex-start",
                      flexDirection: "row",
                      marginTop: "8px",
                      lineHeight: "40px",
                    },
                    className: "title-wrapper-4",
                  },
                  rect: {
                    x: 304,
                    y: 1530,
                    width: 252,
                    height: 80,
                  },
                  smart: {
                    layerProtocol: {
                      group: {
                        type: "group",
                      },
                      layout: {
                        type: "layout",
                        position: "bottom",
                      },
                    },
                  },
                  selfId: "F7B7CEF6-A211-4E50-97EA-6C4BC304F884",
                  nodeLayerName: "imageContent#group#",
                  children: [
                    {
                      componentName: "Text",
                      id: "9d71ec14-b59b-11ec-bb16-07e524ed247b",
                      props: {
                        style: {
                          WebkitBoxOrient: "vertical",
                          display: "-webkit-inline-box",
                          WebkitLineClamp: 2,
                          width: "252px",
                          height: "80px",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          color: "#212223",
                          fontFamily: "PingFang SC",
                          fontSize: "28px",
                          fontWeight: 400,
                        },
                        text: "中情局的一系列神秘操作集锦视频的是…",
                        lines: 2,
                        className: "title-5",
                      },
                      rect: {
                        x: 304,
                        y: 1530,
                        width: 252,
                        height: 80,
                      },
                      selfId: "71C16AD6-9283-42A2-9A26-3E820AAB82CE0",
                      nodeLayerName: "content",
                    },
                  ],
                },
              ],
              smart: {
                layerProtocol: {
                  repeat: {
                    type: "repeat",
                    repeatId: "1649244059842813",
                    repeatIndex: "1",
                  },
                  layout: {
                    type: "layout",
                    position: "middle",
                  },
                },
              },
            },
            {
              componentName: "Div",
              id: "3197ff5a-15f9-43c4-8612-71a48053b2f1",
              props: {
                style: {
                  display: "flex",
                  alignItems: "flex-start",
                  flexDirection: "column",
                  width: "256px",
                },
                className: "container-item2-1",
              },
              rect: {
                x: 574,
                y: 1346,
                width: 256,
                height: 264,
              },
              children: [
                {
                  componentName: "Div",
                  id: "29602f9e-91c0-49b7-b7f5-bc3b7274bf39",
                  props: {
                    style: {
                      display: "flex",
                      position: "relative",
                      alignItems: "flex-start",
                      flexDirection: "row",
                      justifyContent: "center",
                    },
                    className: "item-wrapper",
                  },
                  rect: {
                    x: 574,
                    y: 1346,
                    width: 176,
                    height: 176,
                  },
                  smart: {
                    layerProtocol: {
                      group: {
                        type: "group",
                      },
                      layout: {
                        type: "layout",
                        position: "top",
                      },
                    },
                  },
                  selfId: "73B5F9C2-2092-44FF-84BA-6BBE2FCB7B3B",
                  nodeLayerName: "imageWrap#group#",
                  children: [
                    {
                      componentName: "Image",
                      id: "9d721321-b59b-11ec-bb16-07e524ed247b",
                      props: {
                        style: {
                          width: "176px",
                          height: "176px",
                        },
                        src: "https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/5242f180b59b11eca2c581813b413e4a.png",
                        className: "item",
                      },
                      rect: {
                        x: 574,
                        y: 1346,
                        width: 176,
                        height: 176,
                      },
                      smart: {
                        layerProtocol: {
                          merge: {
                            type: "merge",
                          },
                          field: {
                            type: "picture",
                          },
                        },
                        nodeIdentification: {
                          fieldBind: ["picture"],
                        },
                        nodeCustom: {
                          fieldBind: {
                            confidential: 0.8968181014060974,
                            isConfident: true,
                            label: "picture",
                            type: "fieldBind",
                          },
                        },
                      },
                      selfId: "F9D117B3-5CB7-425B-BD6B-52E622F3194F",
                      nodeLayerName: "image#merge#",
                    },
                  ],
                },
                {
                  componentName: "Div",
                  id: "13898bf8-d9df-4952-b75f-f13dfd6f08b4",
                  props: {
                    style: {
                      display: "flex",
                      position: "relative",
                      alignItems: "flex-start",
                      alignSelf: "center",
                      flexDirection: "row",
                      marginTop: "8px",
                      lineHeight: "40px",
                    },
                    className: "caption-wrapper-5",
                  },
                  rect: {
                    x: 578,
                    y: 1530,
                    width: 252,
                    height: 80,
                  },
                  smart: {
                    layerProtocol: {
                      group: {
                        type: "group",
                      },
                      layout: {
                        type: "layout",
                        position: "bottom",
                      },
                    },
                  },
                  selfId: "B00DDF12-61B4-40E2-849B-BF35E2C224BB",
                  nodeLayerName: "imageContent#group#",
                  children: [
                    {
                      componentName: "Text",
                      id: "9d721323-b59b-11ec-bb16-07e524ed247b",
                      props: {
                        style: {
                          WebkitBoxOrient: "vertical",
                          display: "-webkit-inline-box",
                          WebkitLineClamp: 2,
                          width: "252px",
                          height: "80px",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          color: "#212223",
                          fontFamily: "PingFang SC",
                          fontSize: "28px",
                          fontWeight: 400,
                        },
                        text: "中情局的一系列神秘操作集锦视频的是…",
                        lines: 2,
                        className: "caption-5",
                      },
                      rect: {
                        x: 578,
                        y: 1530,
                        width: 252,
                        height: 80,
                      },
                      selfId: "877138DD-DCD5-4684-9276-1DCDAC929DD80",
                      nodeLayerName: "content",
                    },
                  ],
                },
              ],
              smart: {
                layerProtocol: {
                  repeat: {
                    type: "repeat",
                    repeatId: "1649244059842813",
                    repeatIndex: "2",
                  },
                  layout: {
                    type: "layout",
                    position: "right",
                  },
                },
              },
            },
          ],
        },
      ],
    },
    {
      componentName: "Block",
      id: "94d60cc7-6ec4-4e19-80cd-344640bc6e1b",
      props: {
        style: {
          display: "flex",
          position: "relative",
          alignItems: "flex-start",
          flexDirection: "column",
          marginTop: "578px",
        },
        className: "list-3v1",
      },
      rect: {
        x: 0,
        y: 1642,
        width: 750,
        height: 668,
      },
      selfId: "421444F5-0BD2-452C-A23A-6C4E85FD74C2",
      fileName: "mod_4",
      smart: {
        layerProtocol: {
          group: {
            type: "group",
          },
          module: {
            type: "smartModule",
            name: "list-3v1",
          },
        },
      },
      nodeLayerName: "recommend#group#",
      children: [
        {
          componentName: "Div",
          id: "9d723a33-b59b-11ec-bb16-07e524ed247b",
          props: {
            style: {
              display: "flex",
              position: "relative",
              alignItems: "center",
              flexDirection: "row",
              backgroundColor: "#FFFFFF",
              width: "750px",
              height: "80px",
              fontWeight: 500,
              lineHeight: "45px",
              whiteSpace: "nowrap",
            },
            className: "header-4",
          },
          rect: {
            x: 0,
            y: 1642,
            width: 750,
            height: 80,
          },
          selfId: "9A2F0ADD-AA1A-4833-AF4C-3E5582312747",
          nodeLayerName: "矩形",
          children: [
            {
              componentName: "Div",
              id: "f0e8e1b9-a768-4f75-ba08-8a79338b560a",
              props: {
                style: {
                  display: "flex",
                  alignItems: "flex-start",
                  flexDirection: "row",
                  marginTop: "1px",
                  marginLeft: "30px",
                },
                className: "container-8",
              },
              rect: {
                x: 30,
                y: 1660,
                width: 128,
                height: 45,
              },
              smart: {
                layerProtocol: {
                  group: {
                    type: "group",
                  },
                },
              },
              selfId: "229300A2-5653-41D9-9FCF-2D607630D7ED",
              nodeLayerName: "title#group#",
              children: [
                {
                  componentName: "Text",
                  id: "9d723a32-b59b-11ec-bb16-07e524ed247b",
                  props: {
                    style: {
                      color: "#212223",
                      fontFamily: "PingFang SC",
                      fontSize: "32px",
                    },
                    text: "更多推荐",
                    lines: 1,
                    className: "more",
                  },
                  rect: {
                    x: 30,
                    y: 1660,
                    width: 128,
                    height: 45,
                  },
                  selfId: "69FD4137-1D8D-4880-8ACE-BAC5C5E75B380",
                  nodeLayerName: "正在热播",
                },
              ],
            },
          ],
        },
        {
          componentName: "Div",
          id: "be5b3c36-5892-42ff-b70f-d13c7ecbd241",
          props: {
            style: {
              display: "flex",
              position: "relative",
              alignItems: "flex-start",
              flexDirection: "column",
            },
            className: "body-4",
          },
          rect: {
            x: 0,
            y: 1722,
            width: 750,
            height: 588,
          },
          smart: {
            layerProtocol: {
              group: {
                type: "group",
              },
              layout: {
                type: "list",
                row: 1,
                col: 3,
              },
            },
          },
          selfId: "1DABAC3B-CA06-4EC1-8EAE-1714777AA273",
          nodeLayerName: "recommendContent#group#",
          children: [
            {
              componentName: "Div",
              id: "20374928-554b-4fba-bbd2-1da1693a4324",
              props: {
                style: {
                  display: "flex",
                  position: "relative",
                  alignItems: "center",
                  flexDirection: "row",
                  justifyContent: "center",
                  width: "750px",
                  height: "196px",
                },
                className: "row-item0",
              },
              rect: {
                x: 0,
                y: 1722,
                width: 750,
                height: 196,
              },
              children: [
                {
                  componentName: "Div",
                  id: "d9af328e-a2de-4fb1-9da9-4eb948a7c23a",
                  props: {
                    style: {
                      display: "flex",
                      position: "absolute",
                      top: "0px",
                      left: "0px",
                      alignItems: "center",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      backgroundColor: "#FFFFFF",
                      width: "750px",
                    },
                    className: "wrapper-10",
                  },
                  rect: {
                    x: 0,
                    y: 1722,
                    width: 750,
                    height: 196,
                  },
                  smart: {
                    layerProtocol: {
                      group: {
                        type: "group",
                      },
                    },
                  },
                  selfId: "90C70AB7-6915-4CC8-96C8-6B79BE3D78EA",
                  nodeLayerName: "编组#group#",
                  children: [
                    {
                      componentName: "Div",
                      id: "55f56a89-0795-4771-af3c-ed38c94cd3ff",
                      props: {
                        style: {
                          width: "30px",
                          height: "196px",
                        },
                        className: "empty-4",
                      },
                      rect: {
                        x: 0,
                        y: 1722,
                        width: 30,
                        height: 196,
                      },
                      smart: {
                        layerProtocol: {
                          layout: {
                            type: "layout",
                            position: "left",
                          },
                        },
                      },
                    },
                    {
                      componentName: "Div",
                      id: "432fc113-e1ff-4846-bfb5-2ee5530dfb5a",
                      props: {
                        style: {
                          display: "flex",
                          alignItems: "flex-start",
                          flexDirection: "row",
                          width: "30px",
                        },
                        className: "group-4",
                      },
                      rect: {
                        x: 720,
                        y: 1722,
                        width: 30,
                        height: 196,
                      },
                      children: [
                        {
                          componentName: "Div",
                          id: "9d732491-b59b-11ec-bb16-07e524ed247b",
                          props: {
                            style: {
                              marginTop: "195px",
                              marginLeft: "-690px",
                              borderWidth: "1px",
                              borderStyle: "solid",
                              borderColor: "#EEEEEE",
                              width: "690px",
                              height: "1px",
                            },
                            className: "empty-5",
                          },
                          rect: {
                            x: 30,
                            y: 1917,
                            width: 690,
                            height: 1,
                          },
                          selfId: "2682B615-2429-4A9D-96B4-16D498C38BE1",
                          nodeLayerName: "bottomLine",
                        },
                      ],
                      smart: {
                        layerProtocol: {
                          layout: {
                            type: "layout",
                            position: "right",
                          },
                        },
                      },
                    },
                  ],
                },
                {
                  componentName: "Div",
                  id: "828bffc2-d23a-4cac-b46b-724cf0793852",
                  props: {
                    style: {
                      display: "flex",
                      position: "relative",
                      alignItems: "flex-end",
                      flexDirection: "row",
                      marginRight: "18px",
                    },
                    className: "wrapper-11",
                  },
                  rect: {
                    x: 30,
                    y: 1746,
                    width: 264,
                    height: 148,
                  },
                  smart: {
                    layerProtocol: {
                      group: {
                        type: "group",
                      },
                    },
                  },
                  selfId: "DD1892FA-5B39-4D99-82DA-DED5F0F963F6",
                  nodeLayerName: "imgageWrap#group#",
                  children: [
                    {
                      componentName: "Image",
                      id: "9d726141-b59b-11ec-bb16-07e524ed247b",
                      props: {
                        style: {
                          position: "relative",
                          width: "264px",
                          height: "148px",
                        },
                        src: "https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/581963a0b59b11eca2c581813b413e4a.png",
                        className: "entry-pic-2",
                      },
                      rect: {
                        x: 30,
                        y: 1746,
                        width: 264,
                        height: 148,
                      },
                      smart: {
                        layerProtocol: {
                          merge: {
                            type: "merge",
                          },
                          field: {
                            type: "picture",
                          },
                        },
                        nodeIdentification: {
                          fieldBind: ["picture"],
                        },
                        nodeCustom: {
                          fieldBind: {
                            confidential: 0.6614620685577393,
                            isConfident: true,
                            label: "picture",
                            type: "fieldBind",
                          },
                        },
                      },
                      selfId: "7424AC47-8517-484B-9D48-CAE683BD7A0E",
                      nodeLayerName: "image#merge#",
                    },
                    {
                      componentName: "Text",
                      id: "9d726140-b59b-11ec-bb16-07e524ed247b",
                      props: {
                        style: {
                          position: "absolute",
                          right: "16px",
                          bottom: "11px",
                          lineHeight: "33px",
                          whiteSpace: "nowrap",
                          textShadow:
                            "0px 2px 2px rgba(0, 0, 0, 0.30196078431372547)",
                          color: "#ffffff",
                          fontFamily: "PingFang SC",
                          fontSize: "24px",
                          fontWeight: 400,
                        },
                        text: "全1集",
                        lines: 1,
                        className: "label-1",
                      },
                      rect: {
                        x: 220,
                        y: 1850,
                        width: 58,
                        height: 33,
                      },
                      selfId: "976C7454-E784-4C5F-B450-ECBBB2A9DE7A0",
                      nodeLayerName: "全1集",
                    },
                  ],
                },
                {
                  componentName: "Div",
                  id: "216b399f-b5ca-442a-a77b-726fe7698dda",
                  props: {
                    style: {
                      display: "flex",
                      position: "relative",
                      alignItems: "flex-start",
                      flexDirection: "column",
                      marginTop: "2px",
                    },
                    className: "wrapper-12",
                  },
                  rect: {
                    x: 312,
                    y: 1754,
                    width: 408,
                    height: 134,
                  },
                  smart: {
                    layerProtocol: {
                      group: {
                        type: "group",
                      },
                    },
                  },
                  selfId: "22B55F4D-2C50-4C17-A6C9-B45CB004C838",
                  nodeLayerName: "content#group#",
                  children: [
                    {
                      componentName: "Div",
                      id: "fa93912d-ab72-4705-ab0c-7a39f5723c99",
                      props: {
                        style: {
                          display: "flex",
                          position: "relative",
                          alignItems: "flex-start",
                          flexDirection: "column",
                          marginLeft: "6px",
                          whiteSpace: "nowrap",
                        },
                        className: "group-5",
                      },
                      rect: {
                        x: 318,
                        y: 1754,
                        width: 402,
                        height: 90,
                      },
                      smart: {
                        layerProtocol: {
                          group: {
                            type: "group",
                          },
                          layout: {
                            type: "layout",
                            position: "top",
                          },
                        },
                      },
                      selfId: "44DC979C-A771-42C7-9B59-2A3FDE4BDC2F",
                      nodeLayerName: "item#group#",
                      children: [
                        {
                          componentName: "Div",
                          id: "20dca141-4aa5-4cce-b7e8-5f51ee36cdb2",
                          props: {
                            style: {
                              display: "flex",
                              position: "relative",
                              alignItems: "flex-start",
                              flexDirection: "row",
                              fontWeight: 500,
                              lineHeight: "42px",
                            },
                            className: "title-wrapper-5",
                          },
                          rect: {
                            x: 318,
                            y: 1754,
                            width: 390,
                            height: 42,
                          },
                          smart: {
                            layerProtocol: {
                              group: {
                                type: "group",
                              },
                              layout: {
                                type: "layout",
                                position: "top",
                              },
                            },
                          },
                          selfId: "DC59ED6D-4995-4CA0-B712-F6947E4AAA96",
                          nodeLayerName: "title#group#",
                          children: [
                            {
                              componentName: "Text",
                              id: "9d72fd81-b59b-11ec-bb16-07e524ed247b",
                              props: {
                                style: {
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                  color: "#212223",
                                  fontFamily: "PingFang SC",
                                  fontSize: "30px",
                                },
                                text: "抹不去的英国脱欧抹不去的…",
                                lines: 1,
                                className: "title-6",
                              },
                              rect: {
                                x: 318,
                                y: 1754,
                                width: 390,
                                height: 42,
                              },
                              selfId: "BF501A07-C97A-4F04-9145-75D376A00DDC0",
                              nodeLayerName: "抹不去的英国脱欧抹不去的…",
                            },
                          ],
                        },
                        {
                          componentName: "Div",
                          id: "092e209c-780f-4cdf-948c-1013535f0fba",
                          props: {
                            style: {
                              display: "flex",
                              position: "relative",
                              alignItems: "flex-start",
                              flexDirection: "row",
                              marginTop: "8px",
                              lineHeight: "40px",
                            },
                            className: "caption-wrapper-6",
                          },
                          rect: {
                            x: 318,
                            y: 1804,
                            width: 392,
                            height: 40,
                          },
                          smart: {
                            layerProtocol: {
                              group: {
                                type: "group",
                              },
                              layout: {
                                type: "layout",
                                position: "bottom",
                              },
                            },
                          },
                          selfId: "2AF6F388-304A-4A3F-8239-E5E551C6D439",
                          nodeLayerName: "title2#group#",
                          children: [
                            {
                              componentName: "Text",
                              id: "9d72fd83-b59b-11ec-bb16-07e524ed247b",
                              props: {
                                style: {
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                  color: "#4d4d4d",
                                  fontFamily: "PingFang SC",
                                  fontSize: "28px",
                                  fontWeight: 400,
                                },
                                text: "于脱欧协议戏用新法案凌于脱…",
                                lines: 1,
                                className: "caption-6",
                              },
                              rect: {
                                x: 318,
                                y: 1804,
                                width: 392,
                                height: 40,
                              },
                              selfId: "2711522E-6E20-4A09-8B2F-ABAAA6E408950",
                              nodeLayerName: "title2",
                            },
                          ],
                        },
                      ],
                    },
                    {
                      componentName: "Div",
                      id: "cf3ca2c9-ca89-4d32-9d99-4232106689bd",
                      props: {
                        style: {
                          display: "flex",
                          position: "relative",
                          alignItems: "center",
                          flexDirection: "row",
                          marginTop: "12px",
                        },
                        className: "group-6",
                      },
                      rect: {
                        x: 312,
                        y: 1856,
                        width: 107,
                        height: 32,
                      },
                      smart: {
                        layerProtocol: {
                          group: {
                            type: "group",
                          },
                          layout: {
                            type: "layout",
                            position: "bottom",
                          },
                        },
                      },
                      selfId: "B217B239-5D36-434F-A75A-B95A67036140",
                      nodeLayerName: "watch#group#",
                      children: [
                        {
                          componentName: "Div",
                          id: "d0f56b96-9fd1-4dcf-9d76-bbe80c72ee6d",
                          props: {
                            style: {
                              display: "flex",
                              alignItems: "flex-start",
                              flexDirection: "row",
                              justifyContent: "center",
                              marginRight: "8px",
                            },
                            className: "icon-play-wrapper",
                          },
                          rect: {
                            x: 312,
                            y: 1856,
                            width: 32,
                            height: 32,
                          },
                          smart: {
                            layerProtocol: {
                              group: {
                                type: "group",
                              },
                              layout: {
                                type: "layout",
                                position: "left",
                              },
                            },
                          },
                          selfId: "CA5F249E-E9EF-47FD-A04E-63867C793E44",
                          nodeLayerName: "player#group#",
                          children: [
                            {
                              componentName: "Image",
                              id: "9d728850-b59b-11ec-bb16-07e524ed247b",
                              props: {
                                style: {
                                  width: "32px",
                                  height: "32px",
                                },
                                src: "https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/4ff6dea0b59b11ec9b6c27374f6fb473.png",
                                className: "icon-play",
                              },
                              rect: {
                                x: 312,
                                y: 1856,
                                width: 32,
                                height: 32,
                              },
                              smart: {
                                layerProtocol: {
                                  merge: {
                                    type: "merge",
                                  },
                                  field: {
                                    type: "play",
                                  },
                                },
                                nodeIdentification: {
                                  fieldBind: ["play"],
                                },
                                nodeCustom: {
                                  fieldBind: {
                                    confidential: 0.999910831451416,
                                    isConfident: true,
                                    label: "play",
                                    type: "fieldBind",
                                  },
                                },
                              },
                              selfId: "80EB232B-5067-4D75-8E41-701CEAC0F64E",
                              nodeLayerName: "player#merge#",
                            },
                          ],
                        },
                        {
                          componentName: "Div",
                          id: "6e12a4b3-07b4-4cb4-abc4-7b9c35ef10b1",
                          props: {
                            style: {
                              display: "flex",
                              alignItems: "flex-start",
                              flexDirection: "row",
                              marginTop: "-2px",
                              lineHeight: "30px",
                              whiteSpace: "nowrap",
                            },
                            className: "word-wrapper-1",
                          },
                          rect: {
                            x: 352,
                            y: 1856,
                            width: 67,
                            height: 30,
                          },
                          smart: {
                            layerProtocol: {
                              group: {
                                type: "group",
                              },
                              layout: {
                                type: "layout",
                                position: "right",
                              },
                            },
                          },
                          selfId: "C97539BA-ACD7-4187-895F-B72543727FD2",
                          nodeLayerName: "2470评#group#",
                          children: [
                            {
                              componentName: "Text",
                              id: "9d728852-b59b-11ec-bb16-07e524ed247b",
                              props: {
                                style: {
                                  color: "#9e9e9e",
                                  fontFamily: "PingFang SC",
                                  fontSize: "22px",
                                  fontWeight: 400,
                                },
                                text: "24.7万",
                                lines: 1,
                                className: "word-1",
                              },
                              rect: {
                                x: 352,
                                y: 1856,
                                width: 67,
                                height: 30,
                              },
                              selfId: "F9CF9FBB-C1C6-4A8E-B5F7-01C38FDF1E140",
                              nodeLayerName: "2470评",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
              smart: {
                layerProtocol: {
                  repeat: {
                    type: "repeat",
                    repeatId: "1649244059842702",
                    repeatIndex: "0",
                  },
                  layout: {
                    type: "layout",
                    position: "top",
                  },
                },
              },
            },
            {
              componentName: "Div",
              id: "9c0578f8-ff68-4a3a-9e63-f147e8ff0387",
              props: {
                style: {
                  display: "flex",
                  position: "relative",
                  alignItems: "center",
                  flexDirection: "row",
                  justifyContent: "center",
                  width: "750px",
                  height: "196px",
                },
                className: "row-item1",
              },
              rect: {
                x: 0,
                y: 1918,
                width: 750,
                height: 196,
              },
              children: [
                {
                  componentName: "Div",
                  id: "c8fe6e7b-b090-4697-bbaf-a2acd73a1e8b",
                  props: {
                    style: {
                      display: "flex",
                      position: "absolute",
                      top: "0px",
                      left: "0px",
                      alignItems: "center",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      backgroundColor: "#FFFFFF",
                      width: "750px",
                    },
                    className: "wrapper-13",
                  },
                  rect: {
                    x: 0,
                    y: 1918,
                    width: 750,
                    height: 196,
                  },
                  smart: {
                    layerProtocol: {
                      group: {
                        type: "group",
                      },
                    },
                  },
                  selfId: "3EC428DC-5963-4EAD-8F4B-8C64978C3C6F",
                  nodeLayerName: "编组#group#",
                  children: [
                    {
                      componentName: "Div",
                      id: "bf602934-42e6-472b-93d7-d62ee9feaa00",
                      props: {
                        style: {
                          width: "30px",
                          height: "196px",
                        },
                        className: "empty-6",
                      },
                      rect: {
                        x: 0,
                        y: 1918,
                        width: 30,
                        height: 196,
                      },
                      smart: {
                        layerProtocol: {
                          layout: {
                            type: "layout",
                            position: "left",
                          },
                        },
                      },
                    },
                    {
                      componentName: "Div",
                      id: "33c407e0-dfbf-44d5-b415-66f4bb69a32c",
                      props: {
                        style: {
                          display: "flex",
                          alignItems: "flex-start",
                          flexDirection: "row",
                          width: "30px",
                        },
                        className: "group-7",
                      },
                      rect: {
                        x: 720,
                        y: 1918,
                        width: 30,
                        height: 196,
                      },
                      children: [
                        {
                          componentName: "Div",
                          id: "9d740ef0-b59b-11ec-bb16-07e524ed247b",
                          props: {
                            style: {
                              marginTop: "195px",
                              marginLeft: "-690px",
                              borderWidth: "1px",
                              borderStyle: "solid",
                              borderColor: "#EEEEEE",
                              width: "690px",
                              height: "1px",
                            },
                            className: "empty-7",
                          },
                          rect: {
                            x: 30,
                            y: 2113,
                            width: 690,
                            height: 1,
                          },
                          selfId: "57A90CDF-6655-46E8-9A02-6A09F8A35640",
                          nodeLayerName: "bottomLine",
                        },
                      ],
                      smart: {
                        layerProtocol: {
                          layout: {
                            type: "layout",
                            position: "right",
                          },
                        },
                      },
                    },
                  ],
                },
                {
                  componentName: "Div",
                  id: "b56b3cd0-df11-4c1f-8d6e-fb164ee9ff5e",
                  props: {
                    style: {
                      display: "flex",
                      position: "relative",
                      alignItems: "flex-end",
                      flexDirection: "row",
                      marginRight: "18px",
                    },
                    className: "wrapper-14",
                  },
                  rect: {
                    x: 30,
                    y: 1942,
                    width: 264,
                    height: 148,
                  },
                  smart: {
                    layerProtocol: {
                      group: {
                        type: "group",
                      },
                    },
                  },
                  selfId: "D9452357-0B8B-47A1-9B73-D34568A8CBAF",
                  nodeLayerName: "imgageWrap#group#",
                  children: [
                    {
                      componentName: "Image",
                      id: "9d734ba0-b59b-11ec-bb16-07e524ed247b",
                      props: {
                        style: {
                          position: "relative",
                          width: "264px",
                          height: "148px",
                        },
                        src: "https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/564ce100b59b11ec9b593350ab5d45e4.png",
                        className: "entry-pic-3",
                      },
                      rect: {
                        x: 30,
                        y: 1942,
                        width: 264,
                        height: 148,
                      },
                      smart: {
                        layerProtocol: {
                          merge: {
                            type: "merge",
                          },
                          field: {
                            type: "picture",
                          },
                        },
                        nodeIdentification: {
                          fieldBind: ["picture"],
                        },
                        nodeCustom: {
                          fieldBind: {
                            confidential: 0.6614620685577393,
                            isConfident: true,
                            label: "picture",
                            type: "fieldBind",
                          },
                        },
                      },
                      selfId: "3E78C252-8B69-4ABD-85A1-9DFDF713A07C",
                      nodeLayerName: "image#merge#",
                    },
                    {
                      componentName: "Text",
                      id: "9d732494-b59b-11ec-bb16-07e524ed247b",
                      props: {
                        style: {
                          position: "absolute",
                          right: "16px",
                          bottom: "11px",
                          lineHeight: "33px",
                          whiteSpace: "nowrap",
                          textShadow:
                            "0px 2px 2px rgba(0, 0, 0, 0.30196078431372547)",
                          color: "#ffffff",
                          fontFamily: "PingFang SC",
                          fontSize: "24px",
                          fontWeight: 400,
                        },
                        text: "全1集",
                        lines: 1,
                        className: "tag-4",
                      },
                      rect: {
                        x: 220,
                        y: 2046,
                        width: 58,
                        height: 33,
                      },
                      selfId: "5F9697D3-EFD2-4798-AB01-6DD4C2045E150",
                      nodeLayerName: "全1集",
                    },
                  ],
                },
                {
                  componentName: "Div",
                  id: "e67479d4-6cc9-491d-9050-541d1a168242",
                  props: {
                    style: {
                      display: "flex",
                      position: "relative",
                      alignItems: "flex-start",
                      flexDirection: "column",
                      marginTop: "2px",
                    },
                    className: "wrapper-15",
                  },
                  rect: {
                    x: 312,
                    y: 1950,
                    width: 408,
                    height: 134,
                  },
                  smart: {
                    layerProtocol: {
                      group: {
                        type: "group",
                      },
                    },
                  },
                  selfId: "FE3B7456-0B24-4927-BFD8-2DC484BC9054",
                  nodeLayerName: "content#group#",
                  children: [
                    {
                      componentName: "Div",
                      id: "4be74d1d-f42a-41d5-a991-7918637678f2",
                      props: {
                        style: {
                          display: "flex",
                          position: "relative",
                          alignItems: "flex-start",
                          flexDirection: "column",
                          marginLeft: "6px",
                          whiteSpace: "nowrap",
                        },
                        className: "group-8",
                      },
                      rect: {
                        x: 318,
                        y: 1950,
                        width: 402,
                        height: 90,
                      },
                      smart: {
                        layerProtocol: {
                          group: {
                            type: "group",
                          },
                          layout: {
                            type: "layout",
                            position: "top",
                          },
                        },
                      },
                      selfId: "C84ACB93-013E-4434-BCA2-7DE8C28417D6",
                      nodeLayerName: "item#group#",
                      children: [
                        {
                          componentName: "Div",
                          id: "84866ab8-38af-48f1-b30f-9b268ebc42a7",
                          props: {
                            style: {
                              display: "flex",
                              position: "relative",
                              alignItems: "flex-start",
                              flexDirection: "row",
                              fontWeight: 500,
                              lineHeight: "42px",
                            },
                            className: "title-wrapper-6",
                          },
                          rect: {
                            x: 318,
                            y: 1950,
                            width: 390,
                            height: 42,
                          },
                          smart: {
                            layerProtocol: {
                              group: {
                                type: "group",
                              },
                              layout: {
                                type: "layout",
                                position: "top",
                              },
                            },
                          },
                          selfId: "C03C187E-6B2E-453E-9076-E6AAD2806477",
                          nodeLayerName: "title#group#",
                          children: [
                            {
                              componentName: "Text",
                              id: "9d73e7e0-b59b-11ec-bb16-07e524ed247b",
                              props: {
                                style: {
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                  color: "#212223",
                                  fontFamily: "PingFang SC",
                                  fontSize: "30px",
                                },
                                text: "抹不去的英国脱欧抹不去的…",
                                lines: 1,
                                className: "title-7",
                              },
                              rect: {
                                x: 318,
                                y: 1950,
                                width: 390,
                                height: 42,
                              },
                              selfId: "E6EEF322-A078-42CC-AD6C-6149EF7DD3060",
                              nodeLayerName: "抹不去的英国脱欧抹不去的…",
                            },
                          ],
                        },
                        {
                          componentName: "Div",
                          id: "909abeca-dd33-4719-abc0-5206f4f9fc07",
                          props: {
                            style: {
                              display: "flex",
                              position: "relative",
                              alignItems: "flex-start",
                              flexDirection: "row",
                              marginTop: "8px",
                              lineHeight: "40px",
                            },
                            className: "caption-wrapper-7",
                          },
                          rect: {
                            x: 318,
                            y: 2000,
                            width: 392,
                            height: 40,
                          },
                          smart: {
                            layerProtocol: {
                              group: {
                                type: "group",
                              },
                              layout: {
                                type: "layout",
                                position: "bottom",
                              },
                            },
                          },
                          selfId: "1FD97DBF-D763-4F22-A300-A7C12293834D",
                          nodeLayerName: "title2#group#",
                          children: [
                            {
                              componentName: "Text",
                              id: "9d73e7e2-b59b-11ec-bb16-07e524ed247b",
                              props: {
                                style: {
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                  color: "#4d4d4d",
                                  fontFamily: "PingFang SC",
                                  fontSize: "28px",
                                  fontWeight: 400,
                                },
                                text: "于脱欧协议戏用新法案凌于脱…",
                                lines: 1,
                                className: "caption-7",
                              },
                              rect: {
                                x: 318,
                                y: 2000,
                                width: 392,
                                height: 40,
                              },
                              selfId: "13CD0318-20A2-48BA-8DAD-A510721BB6430",
                              nodeLayerName: "title2",
                            },
                          ],
                        },
                      ],
                    },
                    {
                      componentName: "Div",
                      id: "db63ebb0-f6f7-46fc-a51f-aa580ce769e2",
                      props: {
                        style: {
                          display: "flex",
                          position: "relative",
                          alignItems: "center",
                          flexDirection: "row",
                          marginTop: "12px",
                        },
                        className: "group-9",
                      },
                      rect: {
                        x: 312,
                        y: 2052,
                        width: 107,
                        height: 32,
                      },
                      smart: {
                        layerProtocol: {
                          group: {
                            type: "group",
                          },
                          layout: {
                            type: "layout",
                            position: "bottom",
                          },
                        },
                      },
                      selfId: "A302516E-188D-41E1-BCD8-1F7ADBF906A2",
                      nodeLayerName: "watch#group#",
                      children: [
                        {
                          componentName: "Div",
                          id: "31b8fead-c0ec-4a87-a703-d90b9042b5e6",
                          props: {
                            style: {
                              display: "flex",
                              alignItems: "flex-start",
                              flexDirection: "row",
                              justifyContent: "center",
                              marginRight: "8px",
                            },
                            className: "icon-play-wrapper-1",
                          },
                          rect: {
                            x: 312,
                            y: 2052,
                            width: 32,
                            height: 32,
                          },
                          smart: {
                            layerProtocol: {
                              group: {
                                type: "group",
                              },
                              layout: {
                                type: "layout",
                                position: "left",
                              },
                            },
                          },
                          selfId: "0795018D-4D02-4FB7-A047-FB32C63B2E5F",
                          nodeLayerName: "player#group#",
                          children: [
                            {
                              componentName: "Image",
                              id: "9d7399c1-b59b-11ec-bb16-07e524ed247b",
                              props: {
                                style: {
                                  width: "32px",
                                  height: "32px",
                                },
                                src: "https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/4ff7f010b59b11ec8ea205d5b701cc38.png",
                                className: "icon-play-1",
                              },
                              rect: {
                                x: 312,
                                y: 2052,
                                width: 32,
                                height: 32,
                              },
                              smart: {
                                layerProtocol: {
                                  merge: {
                                    type: "merge",
                                  },
                                  field: {
                                    type: "play",
                                  },
                                },
                                nodeIdentification: {
                                  fieldBind: ["play"],
                                },
                                nodeCustom: {
                                  fieldBind: {
                                    confidential: 0.999910831451416,
                                    isConfident: true,
                                    label: "play",
                                    type: "fieldBind",
                                  },
                                },
                              },
                              selfId: "6B0BD59F-2A7C-4B99-BE8C-EB5B78ACBF55",
                              nodeLayerName: "player#merge#",
                            },
                          ],
                        },
                        {
                          componentName: "Div",
                          id: "70eaa26c-efd3-4050-ad99-296b71662768",
                          props: {
                            style: {
                              display: "flex",
                              alignItems: "flex-start",
                              flexDirection: "row",
                              marginTop: "-2px",
                              lineHeight: "30px",
                              whiteSpace: "nowrap",
                            },
                            className: "label-wrapper-1",
                          },
                          rect: {
                            x: 352,
                            y: 2052,
                            width: 67,
                            height: 30,
                          },
                          smart: {
                            layerProtocol: {
                              group: {
                                type: "group",
                              },
                              layout: {
                                type: "layout",
                                position: "right",
                              },
                            },
                          },
                          selfId: "A1F3AB37-E8E1-4B2D-A2F2-B901AE5B7BB0",
                          nodeLayerName: "2470评#group#",
                          children: [
                            {
                              componentName: "Text",
                              id: "9d73c0d1-b59b-11ec-bb16-07e524ed247b",
                              props: {
                                style: {
                                  color: "#9e9e9e",
                                  fontFamily: "PingFang SC",
                                  fontSize: "22px",
                                  fontWeight: 400,
                                },
                                text: "24.7万",
                                lines: 1,
                                className: "label-2",
                              },
                              rect: {
                                x: 352,
                                y: 2052,
                                width: 67,
                                height: 30,
                              },
                              selfId: "B3FDB788-A87E-4BA8-A0D7-64AD85F51C170",
                              nodeLayerName: "2470评",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
              smart: {
                layerProtocol: {
                  repeat: {
                    type: "repeat",
                    repeatId: "1649244059842702",
                    repeatIndex: "1",
                  },
                  layout: {
                    type: "layout",
                    position: "middle",
                  },
                },
              },
            },
            {
              componentName: "Div",
              id: "78117e39-ae13-4b4f-a217-d05f769c0a89",
              props: {
                style: {
                  display: "flex",
                  position: "relative",
                  alignItems: "center",
                  flexDirection: "row",
                  justifyContent: "center",
                  width: "750px",
                  height: "196px",
                },
                className: "row-item2",
              },
              rect: {
                x: 0,
                y: 2114,
                width: 750,
                height: 196,
              },
              children: [
                {
                  componentName: "Div",
                  id: "be373e30-bc73-41af-8740-36f0d89636f7",
                  props: {
                    style: {
                      display: "flex",
                      position: "absolute",
                      top: "0px",
                      left: "0px",
                      alignItems: "center",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      backgroundColor: "#FFFFFF",
                      width: "750px",
                    },
                    className: "wrapper-16",
                  },
                  rect: {
                    x: 0,
                    y: 2114,
                    width: 750,
                    height: 196,
                  },
                  smart: {
                    layerProtocol: {
                      group: {
                        type: "group",
                      },
                    },
                  },
                  selfId: "D2A07694-EDFC-420E-B180-64CF7916C734",
                  nodeLayerName: "编组#group#",
                  children: [
                    {
                      componentName: "Div",
                      id: "e2b667ca-c7b3-4a57-923e-bdb2ae6a2ecd",
                      props: {
                        style: {
                          width: "30px",
                          height: "196px",
                        },
                        className: "empty-8",
                      },
                      rect: {
                        x: 0,
                        y: 2114,
                        width: 30,
                        height: 196,
                      },
                      smart: {
                        layerProtocol: {
                          layout: {
                            type: "layout",
                            position: "left",
                          },
                        },
                      },
                    },
                    {
                      componentName: "Div",
                      id: "17363f1b-36d1-4949-b2e9-bb3aeccf0263",
                      props: {
                        style: {
                          display: "flex",
                          alignItems: "flex-start",
                          flexDirection: "row",
                          width: "30px",
                        },
                        className: "group-10",
                      },
                      rect: {
                        x: 720,
                        y: 2114,
                        width: 30,
                        height: 196,
                      },
                      children: [
                        {
                          componentName: "Div",
                          id: "9d74ab30-b59b-11ec-bb16-07e524ed247b",
                          props: {
                            style: {
                              marginTop: "195px",
                              marginLeft: "-690px",
                              borderWidth: "1px",
                              borderStyle: "solid",
                              borderColor: "#EEEEEE",
                              width: "690px",
                              height: "1px",
                            },
                            className: "empty-9",
                          },
                          rect: {
                            x: 30,
                            y: 2309,
                            width: 690,
                            height: 1,
                          },
                          selfId: "B7514593-AEF9-4918-A9F5-A4B46F648C59",
                          nodeLayerName: "bottomLine",
                        },
                      ],
                      smart: {
                        layerProtocol: {
                          layout: {
                            type: "layout",
                            position: "right",
                          },
                        },
                      },
                    },
                  ],
                },
                {
                  componentName: "Div",
                  id: "17e9cecf-01e6-4519-99b5-c5c75a07812d",
                  props: {
                    style: {
                      display: "flex",
                      position: "relative",
                      alignItems: "flex-end",
                      flexDirection: "row",
                      marginRight: "18px",
                    },
                    className: "wrapper-17",
                  },
                  rect: {
                    x: 30,
                    y: 2138,
                    width: 264,
                    height: 148,
                  },
                  smart: {
                    layerProtocol: {
                      group: {
                        type: "group",
                      },
                    },
                  },
                  selfId: "618F659C-54EC-433D-B289-01BFA093B339",
                  nodeLayerName: "imgageWrap#group#",
                  children: [
                    {
                      componentName: "Image",
                      id: "9d740ef4-b59b-11ec-bb16-07e524ed247b",
                      props: {
                        style: {
                          position: "relative",
                          width: "264px",
                          height: "148px",
                        },
                        src: "https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/5482a850b59b11ec9b6c27374f6fb473.png",
                        className: "entry-pic-4",
                      },
                      rect: {
                        x: 30,
                        y: 2138,
                        width: 264,
                        height: 148,
                      },
                      smart: {
                        layerProtocol: {
                          merge: {
                            type: "merge",
                          },
                          field: {
                            type: "picture",
                          },
                        },
                        nodeIdentification: {
                          fieldBind: ["picture"],
                        },
                        nodeCustom: {
                          fieldBind: {
                            confidential: 0.6614620685577393,
                            isConfident: true,
                            label: "picture",
                            type: "fieldBind",
                          },
                        },
                      },
                      selfId: "A0D61F61-7076-4E7F-A321-BFFE747AD7CD",
                      nodeLayerName: "image#merge#",
                    },
                    {
                      componentName: "Text",
                      id: "9d740ef3-b59b-11ec-bb16-07e524ed247b",
                      props: {
                        style: {
                          position: "absolute",
                          right: "16px",
                          bottom: "11px",
                          lineHeight: "33px",
                          whiteSpace: "nowrap",
                          textShadow:
                            "0px 2px 2px rgba(0, 0, 0, 0.30196078431372547)",
                          color: "#ffffff",
                          fontFamily: "PingFang SC",
                          fontSize: "24px",
                          fontWeight: 400,
                        },
                        text: "全1集",
                        lines: 1,
                        className: "word-2",
                      },
                      rect: {
                        x: 220,
                        y: 2242,
                        width: 58,
                        height: 33,
                      },
                      selfId: "11CC09EA-9A72-496B-91A2-A0082B903DCB0",
                      nodeLayerName: "全1集",
                    },
                  ],
                },
                {
                  componentName: "Div",
                  id: "2ca229f3-9c9a-46f5-9067-fd01cc7dd40c",
                  props: {
                    style: {
                      display: "flex",
                      position: "relative",
                      alignItems: "flex-start",
                      flexDirection: "column",
                      marginTop: "2px",
                    },
                    className: "wrapper-18",
                  },
                  rect: {
                    x: 312,
                    y: 2146,
                    width: 408,
                    height: 134,
                  },
                  smart: {
                    layerProtocol: {
                      group: {
                        type: "group",
                      },
                    },
                  },
                  selfId: "C37C0BB3-AB92-4A01-8DDD-72AE6CB8AD75",
                  nodeLayerName: "content#group#",
                  children: [
                    {
                      componentName: "Div",
                      id: "f1d47209-5238-447d-8c95-f0e3d282c4f0",
                      props: {
                        style: {
                          display: "flex",
                          position: "relative",
                          alignItems: "flex-start",
                          flexDirection: "column",
                          marginLeft: "6px",
                          whiteSpace: "nowrap",
                        },
                        className: "group-11",
                      },
                      rect: {
                        x: 318,
                        y: 2146,
                        width: 402,
                        height: 90,
                      },
                      smart: {
                        layerProtocol: {
                          group: {
                            type: "group",
                          },
                          layout: {
                            type: "layout",
                            position: "top",
                          },
                        },
                      },
                      selfId: "34C05765-1B79-4839-A9DF-9D7A4C1E0918",
                      nodeLayerName: "item#group#",
                      children: [
                        {
                          componentName: "Div",
                          id: "ee8ef6ed-125c-47dd-81f0-e08e020aeb47",
                          props: {
                            style: {
                              display: "flex",
                              position: "relative",
                              alignItems: "flex-start",
                              flexDirection: "row",
                              fontWeight: 500,
                              lineHeight: "42px",
                            },
                            className: "title-wrapper-7",
                          },
                          rect: {
                            x: 318,
                            y: 2146,
                            width: 390,
                            height: 42,
                          },
                          smart: {
                            layerProtocol: {
                              group: {
                                type: "group",
                              },
                              layout: {
                                type: "layout",
                                position: "top",
                              },
                            },
                          },
                          selfId: "106E6F70-006E-4924-BA5D-41EA13866E55",
                          nodeLayerName: "title#group#",
                          children: [
                            {
                              componentName: "Text",
                              id: "9d748420-b59b-11ec-bb16-07e524ed247b",
                              props: {
                                style: {
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                  color: "#212223",
                                  fontFamily: "PingFang SC",
                                  fontSize: "30px",
                                },
                                text: "抹不去的英国脱欧抹不去的…",
                                lines: 1,
                                className: "title-8",
                              },
                              rect: {
                                x: 318,
                                y: 2146,
                                width: 390,
                                height: 42,
                              },
                              selfId: "C7C2E448-666C-42F4-BBAC-7906E1BEBC300",
                              nodeLayerName: "抹不去的英国脱欧抹不去的…",
                            },
                          ],
                        },
                        {
                          componentName: "Div",
                          id: "f4288079-64fe-47a9-86ed-dc170e2f26a7",
                          props: {
                            style: {
                              display: "flex",
                              position: "relative",
                              alignItems: "flex-start",
                              flexDirection: "row",
                              marginTop: "8px",
                              lineHeight: "40px",
                            },
                            className: "caption-wrapper-8",
                          },
                          rect: {
                            x: 318,
                            y: 2196,
                            width: 392,
                            height: 40,
                          },
                          smart: {
                            layerProtocol: {
                              group: {
                                type: "group",
                              },
                              layout: {
                                type: "layout",
                                position: "bottom",
                              },
                            },
                          },
                          selfId: "60C87DD2-08E9-4694-ACF0-3B6B016EDB2B",
                          nodeLayerName: "title2#group#",
                          children: [
                            {
                              componentName: "Text",
                              id: "9d748422-b59b-11ec-bb16-07e524ed247b",
                              props: {
                                style: {
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                  color: "#4d4d4d",
                                  fontFamily: "PingFang SC",
                                  fontSize: "28px",
                                  fontWeight: 400,
                                },
                                text: "于脱欧协议戏用新法案凌于脱…",
                                lines: 1,
                                className: "caption-8",
                              },
                              rect: {
                                x: 318,
                                y: 2196,
                                width: 392,
                                height: 40,
                              },
                              selfId: "F168ADD5-CD2E-408F-8C0D-B91C14DA7B2A0",
                              nodeLayerName: "title2",
                            },
                          ],
                        },
                      ],
                    },
                    {
                      componentName: "Div",
                      id: "fd82a5cd-809f-44eb-84ac-554972dca093",
                      props: {
                        style: {
                          display: "flex",
                          position: "relative",
                          alignItems: "center",
                          flexDirection: "row",
                          marginTop: "12px",
                        },
                        className: "group-12",
                      },
                      rect: {
                        x: 312,
                        y: 2248,
                        width: 107,
                        height: 32,
                      },
                      smart: {
                        layerProtocol: {
                          group: {
                            type: "group",
                          },
                          layout: {
                            type: "layout",
                            position: "bottom",
                          },
                        },
                      },
                      selfId: "2D8DEEC1-A1AD-4898-8618-5D7DF0B41352",
                      nodeLayerName: "watch#group#",
                      children: [
                        {
                          componentName: "Div",
                          id: "1cc4a922-c576-4a8b-8605-5b3410b1e63a",
                          props: {
                            style: {
                              display: "flex",
                              alignItems: "flex-start",
                              flexDirection: "row",
                              justifyContent: "center",
                              marginRight: "8px",
                            },
                            className: "icon-play-wrapper-2",
                          },
                          rect: {
                            x: 312,
                            y: 2248,
                            width: 32,
                            height: 32,
                          },
                          smart: {
                            layerProtocol: {
                              group: {
                                type: "group",
                              },
                              layout: {
                                type: "layout",
                                position: "left",
                              },
                            },
                          },
                          selfId: "C5E76B3E-3335-492B-8BEA-BA676F5E1C9F",
                          nodeLayerName: "player#group#",
                          children: [
                            {
                              componentName: "Image",
                              id: "9d743603-b59b-11ec-bb16-07e524ed247b",
                              props: {
                                style: {
                                  width: "32px",
                                  height: "32px",
                                },
                                src: "https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/4ff66970b59b11ec888be34f50965030.png",
                                className: "icon-play-2",
                              },
                              rect: {
                                x: 312,
                                y: 2248,
                                width: 32,
                                height: 32,
                              },
                              smart: {
                                layerProtocol: {
                                  merge: {
                                    type: "merge",
                                  },
                                  field: {
                                    type: "play",
                                  },
                                },
                                nodeIdentification: {
                                  fieldBind: ["play"],
                                },
                                nodeCustom: {
                                  fieldBind: {
                                    confidential: 0.999910831451416,
                                    isConfident: true,
                                    label: "play",
                                    type: "fieldBind",
                                  },
                                },
                              },
                              selfId: "BDD0CF3C-D1D0-46B2-BDDB-21305A4E5448",
                              nodeLayerName: "player#merge#",
                            },
                          ],
                        },
                        {
                          componentName: "Div",
                          id: "86379208-025d-4feb-b3db-76998e6d7cd2",
                          props: {
                            style: {
                              display: "flex",
                              alignItems: "flex-start",
                              flexDirection: "row",
                              marginTop: "-2px",
                              lineHeight: "30px",
                              whiteSpace: "nowrap",
                            },
                            className: "tag-wrapper-2",
                          },
                          rect: {
                            x: 352,
                            y: 2248,
                            width: 67,
                            height: 30,
                          },
                          smart: {
                            layerProtocol: {
                              group: {
                                type: "group",
                              },
                              layout: {
                                type: "layout",
                                position: "right",
                              },
                            },
                          },
                          selfId: "9030D134-EAA1-43F0-8653-F717DC70125E",
                          nodeLayerName: "2470评#group#",
                          children: [
                            {
                              componentName: "Text",
                              id: "9d745d11-b59b-11ec-bb16-07e524ed247b",
                              props: {
                                style: {
                                  color: "#9e9e9e",
                                  fontFamily: "PingFang SC",
                                  fontSize: "22px",
                                  fontWeight: 400,
                                },
                                text: "24.7万",
                                lines: 1,
                                className: "tag-5",
                              },
                              rect: {
                                x: 352,
                                y: 2248,
                                width: 67,
                                height: 30,
                              },
                              selfId: "083B41FD-EE24-43E6-BB93-A702B604D9940",
                              nodeLayerName: "2470评",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
              smart: {
                layerProtocol: {
                  repeat: {
                    type: "repeat",
                    repeatId: "1649244059842702",
                    repeatIndex: "2",
                  },
                  layout: {
                    type: "layout",
                    position: "bottom",
                  },
                },
              },
            },
          ],
        },
      ],
    },
  ],
  imgcook: {
    restore_id: "bde26ec9-76cf-416b-a697-cd03fcc9a462",
    dslConfig: {
      cssUnit: "px",
      dsl: "react-ifeng-standard",
      componentStyle: "hooks",
      cssStyle: "camelCase",
      cssType: "css",
      inlineStyle: "module",
      globalCss: true,
      jsx: "javascript",
      outputStyle: "component",
      dslName: "React-Ifeng",
      htmlFontSize: "16",
      responseWidth: 750,
    },
  },
};
