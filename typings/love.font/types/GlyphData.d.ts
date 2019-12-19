declare module "love.font" {
    import { Data } from "love.data";

    /**
     * A GlyphData represents a drawable symbol of a font Rasterizer.
     * @link [GlyphData](https://love2d.org/wiki/GlyphData)
     */
    export interface GlyphData extends Data<"GlyphData"> {}
}
