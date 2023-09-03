declare module "love.font" {
  import { Type } from "love";

  /**
   * A Rasterizer handles font rendering, containing the font data (image or TrueType font) and drawable glyphs.
   *
   * @link [Rasterizer](https://love2d.org/wiki/Rasterizer)
   * @since 0.7.0
   */
  interface Rasterizer extends Type<"Rasterizer"> {
    /**
     * Gets font advance.
     *
     * @link [Rasterizer:getAdvance](https://love2d.org/wiki/Rasterizer:getAdvance)
     * @since 0.7.0
     */
    getAdvance(): number;

    /**
     * Gets ascent height.
     *
     * @link [Rasterizer:getAscent](https://love2d.org/wiki/Rasterizer:getAscent)
     * @since 0.7.0
     */
    getAscent(): number;

    /**
     * Gets descent height.
     *
     * @link [Rasterizer:getDescent](https://love2d.org/wiki/Rasterizer:getDescent)
     * @since 0.7.0
     */
    getDescent(): number;

    /**
     * Gets number of glyphs in font.
     *
     * @link [Rasterizer:getGlyphCount](https://love2d.org/wiki/Rasterizer:getGlyphCount)
     * @since 0.7.0
     */
    getGlyphCount(): number;

    /**
     * Gets glyph data of a specified glyph.
     *
     * @param glyph Glyph
     * @returns Glyph data
     * @link [Rasterizer:getGlyphData](https://love2d.org/wiki/Rasterizer:getGlyphData)
     * @since 0.7.0
     */
    getGlyphData(glyph: string): GlyphData;

    /**
     * Gets font height.
     *
     * @link [Rasterizer:getHeight](https://love2d.org/wiki/Rasterizer:getHeight)
     * @since 0.7.0
     */
    getHeight(): number;

    /**
     * Gets line height of a font.
     *
     * @link [Rasterizer:getHeight](https://love2d.org/wiki/Rasterizer:getHeight)
     * @since 0.7.0
     */
    getLineHeight(): number;

    /**
     * Checks if font contains specified glyphs.
     *
     * @param glyphs Glyphs to check for.
     * @returns true if the rasterizer contains all the specified Glyphs.
     * @since 0.7.0
     */
    hasGlyphs(...glyphs: Array<string | number>): boolean;
  }
}
