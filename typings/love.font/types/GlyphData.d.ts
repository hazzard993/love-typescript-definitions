declare module "love.font" {
    import { Data } from "love.data";
    import { PixelFormat } from "love.image";

    /**
     * A GlyphData represents a drawable symbol of a font Rasterizer.
     *
     * @link [GlyphData](https://love2d.org/wiki/GlyphData)
     */
    export interface GlyphData extends Data<"GlyphData"> {
        /**
         * Gets glyph advance.
         *
         * @link [GlyphData:getAdvance](https://love2d.org/wiki/GlyphData:getAdvance)
         * @since 0.7.0
         */
        getAdvance(): number;

        /**
         * Gets glyph bearing.
         *
         * @returns The glyph bearing X and Y respectively.
         * @tupleReturn
         * @link [GlyphData:getBearing](https://love2d.org/wiki/GlyphData:getBearing)
         * @since 0.7.0
         */
        getBearing(): [number, number];

        /**
         * Gets glyph bounding box.
         *
         * @returns The X, Y, width and height of the glyph bounding box respectively.
         * @tupleReturn
         * @link [GlyphData:getBoundingBox](https://love2d.org/wiki/GlyphData:getBoundingBox)
         * @since 0.7.0
         */
        getBoundingBox(): [number, number, number, number];

        /**
         * Gets glyph dimensions.
         *
         * @returns The width and height of the glyph respectively.
         * @tupleReturn
         * @link [GlyphData:getDimensions](https://love2d.org/wiki/GlyphData:getDimensions)
         * @since 0.7.0
         */
        getDimensions(): [number, number];

        /**
         * Gets glyph pixel format.
         *
         * @link [GlyphData:getFormat](https://love2d.org/wiki/GlyphData:getFormat)
         * @since 11.0
         */
        getFormat(): PixelFormat;

        /**
         * Gets glyph number.
         *
         * @link [GlyphData:getGlyph](https://love2d.org/wiki/GlyphData:getGlyph)
         * @since 0.7.0
         */
        getGlyph(): number;

        /**
         * Gets glyph string.
         *
         * @link [GlyphData:getGlyphString](https://love2d.org/wiki/GlyphData:getGlyphString)
         * @since 0.7.0
         */
        getGlyphString(): string;

        /**
         * Gets glyph height.
         *
         * @link [GlyphData:getHeight](https://love2d.org/wiki/GlyphData:getHeight)
         * @since 0.7.0
         */
        getHeight(): number;

        /**
         * Gets glyph width.
         *
         * @link [GlyphData:getHeight](https://love2d.org/wiki/GlyphData:getHeight)
         * @since 0.7.0
         */
        getWidth(): number;
    }
}
