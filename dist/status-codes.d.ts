export declare const availableStatusCodes: {
    400: string;
    401: string;
    403: string;
    404: string;
    422: string;
    500: string;
    502: string;
    504: string;
};
export declare class HTTPError extends Error {
    constructor(message?: string);
}
export declare const http400: (message?: string) => HTTPError;
export declare const http401: (message?: string) => HTTPError;
export declare const http403: (message?: string) => HTTPError;
export declare const http404: (message?: string) => HTTPError;
export declare const http422: (message?: string) => HTTPError;
export declare const http500: (message?: string) => HTTPError;
export declare const http502: (message?: string) => HTTPError;
export declare const http504: (message?: string) => HTTPError;
