/**
 * A Canvas is used for off-screen rendering.
 * @link [Canvas](https://love2d.org/wiki/Canvas)
 */
declare interface Canvas extends Texture {
    /**
     * Gets the width and height of the Canvas.
     *
     * @return {number} width, The width of the Canvas, in pixels.
     * @return {number} height, The height of the Canvas, in pixels.
     * @link [Canvas:getDimensions](https://love2d.org/wiki/Canvas:getDimensions)
     */
    /** @tupleReturn */
    getDimensions(): [number, number];

    /**
     * Gets the filter mode of the Canvas.
     *
     * @return {FilterMode} min, Filter mode used when minifying the canvas.
     * @return {FilterMode} mag, Filter mode used when magnifying the canvas.
     * @tupleReturn
     * @link [Canvas:getFilter](https://love2d.org/wiki/Canvas:getFilter)
     */
    getFilter(): [FilterMode, FilterMode];

    /**
     * Gets the texture format of the Canvas.
     *
     * @return {CanvasFormat} format, The format of the Canvas.
     * @link [Canvas:getFormat](https://love2d.org/wiki/Canvas:getFormat)
     */
    getFormat(): CanvasFormat;

    /**
     * Gets the height of the Canvas.
     *
     * @return {number} height, The height of the Canvas, in pixels.
     * @link [Canvas:getHeight](https://love2d.org/wiki/Canvas:getHeight)
     */
    getHeight(): number;

    /**
     * Gets the number of multisample antialiasing (MSAA) samples used when drawing to
     * the Canvas.
     *
     *
     * This may be different than the number used as an argument to
     * love.graphics.newCanvas if the system running LÖVE doesn't support that
     * number.
     *
     * @return {number} samples, The number of multisample antialiasing samples used by the canvas when drawing to it.
     * @link [Canvas:getMSAA](https://love2d.org/wiki/Canvas:getMSAA)
     */
    getMSAA(): number;

    /**
     * Gets the width of the Canvas.
     *
     * @return {number} width, The width of the Canvas, in pixels.
     * @link [Canvas:getWidth](https://love2d.org/wiki/Canvas:getWidth)
     */
    getWidth(): number;

    /**
     * Gets the wrapping properties of a Canvas.
     *
     *
     * This function returns the currently set horizontal and vertical wrapping modes
     * for the Canvas.
     *
     * @return {WrapMode} horizontal, Horizontal wrapping mode of the Canvas.
     * @return {WrapMode} vertical, Vertical wrapping mode of the Canvas.
     * @link [Canvas:getWrap](https://love2d.org/wiki/Canvas:getWrap)
     */
    /** @tupleReturn */
    getWrap(): [WrapMode, WrapMode];

    /**
     * Generates ImageData from the contents of the Canvas.
     *
     * @return {ImageData} data, The image data stored in the Canvas.
     * @link [Canvas:newImageData](https://love2d.org/wiki/Canvas:newImageData)
     */
    newImageData(): ImageData;

    /**
     * Generates ImageData from the contents of the Canvas.
     *
     * @param x The x-axis of the top-left corner of the area within the Canvas to capture.
     * @param y The y-axis of the top-left corner of the area within the Canvas to capture.
     * @param width The width of the area within the Canvas to capture.
     * @param height The height of the area within the Canvas to capture.
     * @return {ImageData} data, The new ImageData made from the Canvas' contents.
     * @link [Canvas:newImageData](https://love2d.org/wiki/Canvas:newImageData)
     */
    newImageData(x: number, y: number, width: number, height: number): ImageData;

    /**
     * Render to the Canvas using a function.
     *
     * @param func A function performing drawing operations.
     * @link [Canvas:renderTo](https://love2d.org/wiki/Canvas:renderTo)
     */
    renderTo(func: Function): void;

    /**
     * Sets the filter of the Canvas.
     *
     * @param min How to scale a canvas down.
     * @param mag How to scale a canvas up.
     * @param anisotropy Maximum amount of anisotropic filtering used.
     * @link [Canvas:setFilter](https://love2d.org/wiki/Canvas:setFilter)
     */
    setFilter(min: FilterMode, mag?: FilterMode, anisotropy?: number): void;

    /**
     * Sets the wrapping properties of a Canvas.
     *
     *
     * This function sets the way the edges of a Canvas are treated if it is scaled or
     * rotated. If the WrapMode is set to "clamp", the edge will not be interpolated.
     * If set to "repeat", the edge will be interpolated with the pixels on the
     * opposing side of the framebuffer.
     *
     * @param horizontal Horizontal wrapping mode of the Canvas.
     * @param vertical Vertical wrapping mode of the Canvas.
     * @link [Canvas:setWrap](https://love2d.org/wiki/Canvas:setWrap)
     */
    setWrap(horizontal: WrapMode, vertical?: WrapMode): void;

}
