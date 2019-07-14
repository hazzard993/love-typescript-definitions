/**
 * @link [CompressedImageData](https://love2d.org/wiki/CompressedImageData)
 */
declare interface CompressedImageData extends Data<"CompressedImageData"> {
    /**
     * Gets the width and height of the CompressedImageData.
     *
     * @return width, The width of the CompressedImageData.
     * @return height, The height of the CompressedImageData.
     * @tupleReturn
     * @link [CompressedImageData:getDimensions](https://love2d.org/wiki/CompressedImageData:getDimensions)
     */
    getDimensions(): [number, number];

    /**
     * Gets the width and height of the CompressedImageData.
     *
     * @param level A mipmap level. Must be in the range of [1, CompressedImageData:getMipmapCount()].
     * @return width, The width of the CompressedImageData.
     * @return height, The height of the CompressedImageData.
     * @tupleReturn
     * @link [CompressedImageData:getDimensions](https://love2d.org/wiki/CompressedImageData:getDimensions)
     */
    getDimensions(level: number): [number, number];

    /**
     * Gets the format of the CompressedImageData.
     *
     * @return format, The format of the CompressedImageData.
     * @link [CompressedImageData:getFormat](https://love2d.org/wiki/CompressedImageData:getFormat)
     */
    getFormat(): CompressedImageFormat;

    /**
     * Gets the height of the CompressedImageData.
     *
     * @return height, The height of the CompressedImageData.
     * @link [CompressedImageData:getHeight](https://love2d.org/wiki/CompressedImageData:getHeight)
     */
    getHeight(): number;

    /**
     * Gets the height of the CompressedImageData.
     *
     * @param level A mipmap level. Must be in the range of [1,  CompressedImageData:getMipmapCount()].
     * @return height, The height of the CompressedImageData.
     * @link [CompressedImageData:getHeight](https://love2d.org/wiki/CompressedImageData:getHeight)
     */
    getHeight(level: number): number;

    /**
     * Gets the number of mipmap levels in the CompressedImageData. The base mipmap
     * level (original image) is included in the count.
     *
     * @return mipmaps, The number of mipmap levels stored in the CompressedImageData.
     * @link [CompressedImageData:getMipmapCount](https://love2d.org/wiki/CompressedImageData:getMipmapCount)
     */
    getMipmapCount(): number;

    /**
     * Gets the width of the CompressedImageData.
     *
     * @return width, The width of the CompressedImageData.
     * @link [CompressedImageData:getWidth](https://love2d.org/wiki/CompressedImageData:getWidth)
     */
    getWidth(): number;

    /**
     * Gets the width of the CompressedImageData.
     *
     * @param level A mipmap level. Must be in the range of [1, CompressedImageData:getMipmapCount()].
     * @return width, The width of the CompressedImageData.
     * @link [CompressedImageData:getWidth](https://love2d.org/wiki/CompressedImageData:getWidth)
     */
    getWidth(level: number): number;

}
