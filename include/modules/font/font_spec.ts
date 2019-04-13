/**
 * @todo Missing documentation
 */
let bmFontRasterizer: BMFontRasterizer;

/**
 * Documented at
 * https://love2d.org/wiki/Font
 * Obtained 2019/03/02
 */
declare const font: Font;
font.getAscent;
font.getBaseline;
font.getDPIScale;
font.getDescent;
font.getFilter;
font.getHeight;
font.getLineHeight;
font.getWidth;
font.getWrap;
font.hasGlyphs;
font.setFallbacks;
font.setFilter;
font.setLineHeight;
font.release;
font.type;
font.typeOf;

/**
 * Documented at
 * https://love2d.org/wiki/GlyphData
 * Obtained 2019/03/02
 */
declare const glyphData: GlyphData;
glyphData.clone;
glyphData.getPointer;
glyphData.getSize;
glyphData.getString;
glyphData.release;
glyphData.type;
glyphData.typeOf;

/**
 * Documented at
 * https://love2d.org/wiki/Rasterizer
 * Obtained 2019/03/02
 */
declare const rasterizer: Rasterizer;
rasterizer.release;
rasterizer.type;
rasterizer.typeOf;
rasterizer.getAdvance;
rasterizer.getAscent;
rasterizer.getDescent;
rasterizer.getGlyphCount;
rasterizer.getGlyphData;
rasterizer.getHeight;
rasterizer.getLineHeight;
rasterizer.hasGlyphs;

love;
love.font;

love.font.newBMFontRasterizer;
love.font.newGlyphData;
love.font.newRasterizer;
love.font.newTrueTypeRasterizer;
