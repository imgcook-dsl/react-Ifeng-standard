import { IImport } from './interface';
export declare const getCssRules: (text: string) => {
    selectors: string;
    style: any;
}[];
export declare const getGlobalClassNames: (cssObject: any, globalCssString: any) => {
    names: string[];
    style: any;
};
export declare const isExpression: (value: any) => boolean;
export declare const line2Hump: (str: any) => any;
export declare const isEmptyObj: (o: any) => boolean;
interface IComp {
    list?: {
        name: string;
        packageName: string;
        dependenceVersion: string;
        dependence: string;
    }[];
}
export declare const transComponentsMap: (compsMap?: IComp) => {};
export declare const toString: (value: any) => any;
export declare const toUpperCaseStart: (value: any) => any;
export declare const resetCounter: (key: any) => void;
export declare const simpleStyle: (schema: any) => void;
/**
 * 处理schema一些常见问题
 * @param schema
 * 1. 清理 class 空格
 * 2. 关键节点命名兜底
 */
export declare const initSchema: (schema: any) => void;
export declare const traverse: (json: any, callback: any) => void;
export declare const traverseBrother: (json: any, callback: any) => void;
export declare const genStyleClass: (string: any, type: any) => any;
export declare const genStyleCode: (styles: any, key?: string) => string;
export declare const parseNumberValue: (value: any) => any;
export declare const parseStyle: (style: any) => {};
export declare const parseFunction: (func: any) => {
    params: any;
    content: any;
};
export declare const parseProps: (value: any, isReactNode?: boolean) => any;
export declare const parseCondition: (condition: any, render: any) => string | undefined;
export declare const parseCamelToLine: (string: any) => any;
export declare const generateCSS: (style: any, prefix: any) => string;
export declare const generateCssString: (style: any) => string;
export declare const generateScss: (schema: any) => string;
export declare const parseLoop: (loop: any, loopArg: any, render: any, params?: {}) => {
    hookState: never[];
    value: string;
};
export declare const parseState: (states: any) => string;
export declare const replaceState: (render: any) => any;
export declare const parseLifeCycles: (schema: any, init: any) => string[];
export declare const existImport: (imports: any, singleImport: any) => boolean;
export declare const parseDataSource: (data: any, imports?: IImport[]) => {
    value: string;
    functionName: any;
    functionBody: string;
    imports: IImport[];
};
export declare const getText: (schema: any) => string;
export declare const transAnimation: (animation: any) => string;
export declare const addAnimation: (schema: any) => string;
export {};
