/**
 * Drawable image type.
 * @link [Image](https://love2d.org/wiki/Image)
 */
declare interface Image extends Texture {
    /**
     * Gets the original ImageData or CompressedImageData used to create the Image.
     *
     *
     * All Images keep a reference to the Data that was used to create the Image. The
     * Data is used to refresh the Image when love.window.setMode or Image:refresh is
     * called.
     *
     * @return data, The original ImageData used to create the Image, if the image is not compressed.
     */
    getData(): ImageData;

    /**
     * Gets the original ImageData or CompressedImageData used to create the Image.
     *
     *
     * All Images keep a reference to the Data that was used to create the Image. The
     * Data is used to refresh the Image when love.window.setMode or Image:refresh is
     * called.
     *
     * @return data, The original CompressedImageData used to create the Image, if the image is compressed.
     */
    getData(): CompressedImageData;

    /**
     * Gets the width and height of the Image.
     *
     * @return width, The width of the Image, in pixels.
     * @return height, The height of the Image, in pixels.
     * @tupleReturn
     */
    getDimensions(): [number, number];

    /**
     * Gets the filter mode for an image.
     *
     * @return min, Filter mode used when minifying the image.
     * @return mag, Filter mode used when magnifying the image.
     * @tupleReturn
     */
    getFilter(): [FilterMode, FilterMode];

    /**
     * Gets whether the Image was created from CompressedData.
     * @return compressed, Whether the Image is stored as a compressed texture on the GPU.
     * @link [Image:isCompressed](https://love2d.org/wiki/(Image):isCompressed)
     */
    isCompressed(): boolean;

    /**
     * Gets the height of the Image.
     *
     * @return height, The height of the Image, in pixels.
     */
    getHeight(): number;

    /**
     * Gets the mipmap filter mode for an Image.
     *
     * @return mode, The filter mode used in between mipmap levels. _nil/null_ if mipmap filtering is not enabled.
     * @return sharpness, Value used to determine whether the image should use more or less detailed mipmap levels than normal when drawing.
     * @tupleReturn
     */
    getMipmapFilter(): [FilterMode, number];

    /**
     * Gets the width of the Image.
     *
     * @return width, The width of the Image, in pixels.
     */
    getWidth(): number;

    /**
     * Gets the wrapping properties of an Image.
     *
     *
     * This function returns the currently set horizontal and vertical wrapping modes
     * for the image.
     *
     * @return horizontal, Horizontal wrapping mode of the image.
     * @return vertical, Vertical wrapping mode of the image.
     * @tupleReturn
     */
    getWrap(): [WrapMode, WrapMode];

    /**
     * Reloads the Image's contents from the ImageData or CompressedImageData used to
     * create the image.
     *
     */
    refresh(): void;

    /**
     * Reloads the Image's contents from the ImageData or CompressedImageData used to
     * create the image.
     *
     * @param x The x-axis of the top-left corner of the area within the Image to reload.
     * @param y The y-axis of the top-left corner of the area within the Image to reload.
     * @param width The width of the area within the Image to reload.
     * @param height The height of the area within the Image to reload.
     */
    refresh(x: number, y: number, width: number, height: number): void;

    /**
     * Replaces the contents of an Image.
     *
     * @param data The new ImageData to replace the contents with.
     * @param slice Which slice to replace, if applicable.
     * @param mipmap The mimap level of the new ImageData. If 0 Image:replacePixels will generate new mimaps.
     */
    replacePixels(data: ImageData, slice: number, mipmap?: number): void;

    /**
     * Sets the filter mode for an image.
     *
     * @param min How to scale an image down.
     * @param mag How to scale an image up.
     */
    setFilter(min: FilterMode, mag?: FilterMode): void;

    /**
     * Sets the mipmap filter mode for an Image.
     *
     *
     * Mipmapping is useful when drawing an image at a reduced scale. It can improve
     * performance and reduce aliasing issues.
     *
     *
     * In 0.10.0 and newer, the Image must be created with the mipmaps flag enabled
     * for the mipmap filter to have any effect.
     *
     * @param filtermode The filter mode to use in between mipmap levels. "nearest" will often give better performance.
     * @param sharpness A positive sharpness value makes the image use a more detailed mipmap level when drawing, at the expense of performance. A negative value does the reverse.
     */
    setMipmapFilter(filtermode: FilterMode, sharpness?: number): void;

    /**
     * Sets the mipmap filter mode for an Image.
     *
     *
     * Mipmapping is useful when drawing an image at a reduced scale. It can improve
     * performance and reduce aliasing issues.
     *
     *
     * In 0.10.0 and newer, the Image must be created with the mipmaps flag enabled
     * for the mipmap filter to have any effect.
     *
     */
    setMipmapFilter(): void;

    /**
     * Sets the wrapping properties of an Image.
     *
     *
     * This function sets the way an Image is repeated when it is drawn with a Quad
     * that is larger than the image's extent. An image may be clamped or set to
     * repeat in both horizontal and vertical directions. Clamped images appear only
     * once, but repeated ones repeat as many times as there is room in the Quad.
     *
     *
     * If you use a Quad that is larger than the image extent and do not use repeated
     * tiling, there may be an unwanted visual effect of the image stretching all the
     * way to fill the Quad. If this is the case, setting Image:getWrap("repeat",
     * "repeat") for all the images to be repeated, and using Quad of appropriate size
     * will result in the best visual appearance.
     *
     * @param horizontal Horizontal wrapping mode of the image.
     * @param vertical Vertical wrapping mode of the image.
     */
    setWrap(horizontal: WrapMode, vertical?: WrapMode): void;

}
