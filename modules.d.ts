import "./typings";

declare global {
    export const love: import("./typings/love/handlers").Handlers & {
        handlers: import("./typings/love/handlers").Handlers;
    };
}
