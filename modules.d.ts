import "./typings";

declare global {
    const love: import("./typings/love/handlers").Handlers & {
        handlers: import("./typings/love/handlers").Handlers;
    };
}
