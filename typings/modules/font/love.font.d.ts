declare namespace love {
    /**
     * Allows you to work with fonts.
     * @noSelf
     * @link [love.font](https://love2d.org/wiki/love.font)
     */
    export namespace font {
        /**
         * Creates a new BMFont Rasterizer.
         * @param imageData The image data containing the drawable pictures of font glyphs.
         * @param glyphs The sequence of glyphs in the ImageData.
         * @return rasterizer, The rasterizer.
         * @link [love.font.newBMFontRasterizer](https://love2d.org/wiki/love.font.newBMFontRasterizer)
         */
        export function newBMFontRasterizer(imageData: ImageData, glyphs: string): BMFontRasterizer;

        /**
         * Creates a new GlyphData.
         *
         * @param rasterizer The Rasterizer containing the font.
         * @param glyph The character code of the glyph.
         * @return glyph, The GlyphData.
         * @link [love.font.newGlyphData](https://love2d.org/wiki/love.font.newGlyphData)
         */
        export function newGlyphData(rasterizer: Rasterizer, glyph: number): GlyphData;

        /**
         * Creates a new Rasterizer.
         * @param filename The font file.
         * @return rasterizer, The rasterizer.
         * @link [love.font.newRasterizer](https://love2d.org/wiki/love.font.newRasterizer)
         */
        export function newRasterizer(filename: string): Rasterizer;

        /**
         * Creates a new Rasterizer.
         * @param data The FileData of the font file.
         * @return rasterizer, The rasterizer.
         * @link [love.font.newRasterizer](https://love2d.org/wiki/love.font.newRasterizer)
         */
        export function newRasterizer(data: FileData): Rasterizer;

        /**
         * Creates a new TrueType Rasterizer.
         * @param size The font size.
         * @param hinting_mode True Type hinting mode.
         * @return rasterizer, The rasterizer.
         * @link [love.font.newTrueTypeRasterizer](https://love2d.org/wiki/love.font.newTrueTypeRasterizer)
         */
        export function newTrueTypeRasterizer(size: number, hinting_mode: HintingMode): Rasterizer;
    }
}
