import { IDslConfig } from './interface';
export declare const prettierJsOpt: {
    parser: string;
    printWidth: number;
    singleQuote: boolean;
};
export declare const prettierCssOpt: {
    parser: string;
};
export declare const prettierJsonOpt: {
    parser: string;
};
export declare const prettierScssOpt: {
    parser: string;
    tabWidth: number;
    printWidth: number;
    singleQuote: boolean;
};
export declare const prettierLessOpt: {
    parser: string;
    tabWidth: number;
    printWidth: number;
    singleQuote: boolean;
};
export declare const prettierHtmlOpt: {
    parser: string;
    printWidth: number;
    singleQuote: boolean;
};
export declare const CSS_TYPE: {
    MODULE_CLASS: string;
    MODULE_STYLE: string;
    IMPORT_CLASS: string;
    INLINE_CSS: string;
};
export declare const COMPONENT_TYPE: {
    HOOKS: string;
    COMPONENT: string;
};
export declare const OUTPUT_TYPE: {
    PROJECT: string;
    COMPONENT: string;
};
export declare let DSL_CONFIG: IDslConfig;
export declare const initConfig: (cfg: any) => any;
