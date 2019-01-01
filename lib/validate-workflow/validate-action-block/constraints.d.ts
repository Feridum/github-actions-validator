declare const USES = "uses";
declare const NEEDS = "needs";
declare const RUNS = "runs";
declare const ARGS = "args";
declare const ENV = "env";
declare const SECRETS = "secrets";
export declare const AVAIABLE_ATTRIBUTES: string[];
export declare const ATTRIBUTES_VALUES: {
    [USES]: (value: any) => boolean;
    [NEEDS]: (value: any) => boolean;
    [RUNS]: (value: any) => boolean;
    [ARGS]: (value: any) => boolean;
    [ENV]: (value: any) => boolean;
    [SECRETS]: (value: any) => boolean;
};
export {};
