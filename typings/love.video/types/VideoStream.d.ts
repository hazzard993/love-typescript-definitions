declare module "love.video" {
    import { LoveObject } from "love";

    /**
     * An object which decodes, streams, and controls Videos.
     * @link [VideoStream](https://love2d.org/wiki/VideoStream)
     */
    export interface VideoStream extends LoveObject<"VideoStream"> {}
}
