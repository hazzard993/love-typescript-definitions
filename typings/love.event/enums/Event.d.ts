declare module "love.event" {
    /**
     * Arguments to love.event.push() and the like.
     * @link [Event](https://love2d.org/wiki/Event)
     * @since 0.6.0
     */
    export type Event = keyof import("../../love/handlers").Handlers;
}
