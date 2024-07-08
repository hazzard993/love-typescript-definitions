/**
 * Allows you to work with fonts.
 *
 * @noResolution
 * @noSelf
 * @link [love.font](https://love2d.org/wiki/love.font)
 */
declare module "love.font" {
  import { FileData } from "love.filesystem";
  import { ImageData } from "love.image";

  /**
   * Creates a new BMFont Rasterizer.
   *
   * @param imageData The image data containing the drawable pictures of font glyphs.
   * @param glyphs The sequence of glyphs in the ImageData.
   * @param dpiscale DPI scale.
   * @return rasterizer, The rasterizer.
   * @link [love.font.newBMFontRasterizer](https://love2d.org/wiki/love.font.newBMFontRasterizer)
   * @since 0.10.0
   */
  function newBMFontRasterizer(
    imageData: ImageData,
    glyphs: string,
    dpiscale?: number,
  ): Rasterizer;

  /**
   * Creates a new BMFont Rasterizer.
   *
   * @param fileName The path to file containing the drawable pictures of font glyphs.
   * @param glyphs The sequence of glyphs in the ImageData.
   * @param dpiscale DPI scale.
   * @return rasterizer, The rasterizer.
   * @link [love.font.newBMFontRasterizer](https://love2d.org/wiki/love.font.newBMFontRasterizer)
   * @since 0.10.0
   */
  function newBMFontRasterizer(
    fileName: string,
    glyphs: string,
    dpiscale?: number,
  ): Rasterizer;

  /**
   * Creates a new GlyphData.
   *
   * @param rasterizer The Rasterizer containing the font.
   * @param glyph The character code of the glyph.
   * @return glyph, The GlyphData.
   * @link [love.font.newGlyphData](https://love2d.org/wiki/love.font.newGlyphData)
   * @since 0.7.0
   */
  function newGlyphData(rasterizer: Rasterizer, glyph: number): GlyphData;

  /**
   * Creates a new Image Rasterizer.
   *
   * @param imageData Font image data.
   * @param glyphs String containing font glyphs.
   * @param extraSpacing Font extra spacing.
   * @param dpiscale Font DPI scale.
   * @link [love.font.newImageRasterizer](https://love2d.org/wiki/love.font.newImageRasterizer)
   * @since 0.7.0
   */
  function newImageRasterizer(
    imageData: ImageData,
    glyphs: string,
    extraSpacing?: number,
    dpiscale?: number,
  ): Rasterizer;

  /**
   * Creates a new Rasterizer.
   *
   * @param filename The font file.
   * @return rasterizer, The rasterizer.
   * @link [love.font.newRasterizer](https://love2d.org/wiki/love.font.newRasterizer)
   * @since 0.7.0
   */
  function newRasterizer(filename: string): Rasterizer;

  /**
   * Creates a new Rasterizer.
   *
   * @param data The FileData of the font file.
   * @return rasterizer, The rasterizer.
   * @link [love.font.newRasterizer](https://love2d.org/wiki/love.font.newRasterizer)
   * @since 0.7.0
   */
  function newRasterizer(data: FileData): Rasterizer;

  /**
   * Create a TrueTypeRasterizer with the default font.
   *
   * @param size The font size. (Default: 12)
   * @param hinting True Type hinting mode. (Default: "normal")
   * @param dpiscale The font DPI scale.
   * @link [love.font.newRasterizer](https://love2d.org/wiki/love.font.newRasterizer)
   * @since 0.7.0
   */
  function newRasterizer(
    size?: number,
    hinting?: HintingMode,
    dpiscale?: number,
  ): Rasterizer;

  /**
   * Create a TrueTypeRasterizer with custom font.
   *
   * @param fileName Path to font file.
   * @param size The font size. (Default: 12)
   * @param hinting True Type hinting mode. (Default: "normal")
   * @param dpiscale The font DPI scale. (Default: love.window.getDPIScale())
   * @link [love.font.newRasterizer](https://love2d.org/wiki/love.font.newRasterizer)
   * @since 0.7.0
   */
  function newRasterizer(
    fileName: string,
    size?: number,
    hinting?: HintingMode,
    dpiscale?: number,
  ): Rasterizer;

  /**
   * Create a TrueTypeRasterizer with custom font.
   *
   * @param fileData File data containing font.
   * @param size The font size. (Default: 12)
   * @param hinting True Type hinting mode. (Default: "normal")
   * @param dpiscale The font DPI scale. (Default: love.window.getDPIScale())
   * @link [love.font.newRasterizer](https://love2d.org/wiki/love.font.newRasterizer)
   * @since 0.7.0
   */
  function newRasterizer(
    fileData: FileData,
    size?: number,
    hinting?: HintingMode,
    dpiscale?: number,
  ): Rasterizer;

  /**
   * Creates a new BMFont Rasterizer.
   *
   * @param imageData The image data containing the drawable pictures of font glyphs.
   * @param glyphs The sequence of glyphs in the ImageData.
   * @param dpiscale DPI scale. (Default: 1)
   * @link [love.font.newRasterizer](https://love2d.org/wiki/love.font.newRasterizer)
   * @since 0.7.0
   */
  function newRasterizer(
    imageData: ImageData,
    glyphs: string,
    dpiscale?: number,
  ): Rasterizer;

  /**
   * Creates a new BMFont Rasterizer.
   *
   * @param fileName The path to file containing the drawable pictures of font glyphs.
   * @param glyphs The sequence of glyphs in the ImageData.
   * @param dpiscale DPI scale.
   * @link [love.font.newRasterizer](https://love2d.org/wiki/love.font.newRasterizer)
   * @since 0.7.0
   */
  function newRasterizer(
    fileName: string,
    glyphs: string,
    dpiscale?: number,
  ): Rasterizer;

  /**
   * Create a TrueTypeRasterizer with the default font.
   *
   * @param size The font size. (Default: 12)
   * @param hinting True Type hinting mode. (Default: "normal")
   * @param dpiscale The font DPI scale. (Default: love.window.getDPIScale())
   * @link [love.font.newTrueTypeRasterizer](https://love2d.org/wiki/love.font.newTrueTypeRasterizer)
   * @since 0.7.0
   */
  function newTrueTypeRasterizer(
    size?: number,
    hinting?: HintingMode,
    dpiscale?: number,
  ): Rasterizer;

  /**
   * Create a TrueTypeRasterizer with custom font.
   *
   * @param fileName Path to font file.
   * @param size The font size. (Default: 12)
   * @param hinting True Type hinting mode. (Default: "normal")
   * @param dpiscale The font DPI scale. (Default: love.window.getDPIScale())
   * @link [love.font.newTrueTypeRasterizer](https://love2d.org/wiki/love.font.newTrueTypeRasterizer)
   * @since 0.7.0
   */
  function newTrueTypeRasterizer(
    fileName: string,
    size?: number,
    hinting?: HintingMode,
    dpiscale?: number,
  ): Rasterizer;

  /**
   * Create a TrueTypeRasterizer with custom font.
   *
   * @param fileName File data containing font.
   * @param size The font size. (Default: 12)
   * @param hinting True Type hinting mode. (Default: "normal")
   * @param dpiscale The font DPI scale. (Default: love.window.getDPIScale())
   * @link [love.font.newTrueTypeRasterizer](https://love2d.org/wiki/love.font.newTrueTypeRasterizer)
   * @since 0.7.0
   */
  function newTrueTypeRasterizer(
    fileData: FileData,
    size?: number,
    hinting?: HintingMode,
    dpiscale?: number,
  ): Rasterizer;
}
