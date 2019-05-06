/**
 * @link [love.graphics.getStats](https://love2d.org/wiki/love.graphics.getStats)
 */
declare interface Stats {
    /**
     * The number of draw calls made so far during the current frame.
     */
    drawcalls: number;

    /**
     * The number of times the active Canvas has been switched so far during the current frame.
     */
    canvasswitches: number;

    /**
     * The estimated total size in bytes of video memory used by all loaded Images, Canvases, and Fonts.
     */
    texturememory: number;

    /**
     * The number of Image objects currently loaded.
     */
    images: number;

    /**
     * The number of Canvas objects currently loaded.
     */
    canvases: number;

    /**
     * The number of Font objects currently loaded.
     */
    fonts: number;

    /**
     * The number of times the active Shader has been changed so far during the current frame.
     */
    shaderswitches: number;

    /**
     * The number of draw calls that were saved by LÖVE's automatic batching, since the start of the frame.
     */
    drawcallsbatched: number;
}
