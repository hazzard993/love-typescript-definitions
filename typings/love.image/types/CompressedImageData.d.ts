declare module "love.image" {
  import { Data } from "love.data";

  /**
   * @link [CompressedImageData](https://love2d.org/wiki/CompressedImageData)
   */
  interface CompressedImageData extends Data<"CompressedImageData"> {
    /**
     * Gets the width and height of the CompressedImageData.
     *
     * @return width, The width of the CompressedImageData.
     * @return height, The height of the CompressedImageData.
     * @link [CompressedImageData:getDimensions](https://love2d.org/wiki/CompressedImageData:getDimensions)
     * @since 0.9.0
     */
    getDimensions(): LuaMultiReturn<[width: number, height: number]>;

    /**
     * Gets the width and height of the CompressedImageData.
     *
     * @param level A mipmap level. Must be in the range of [1, CompressedImageData:getMipmapCount()].
     * @return width, The width of the CompressedImageData.
     * @return height, The height of the CompressedImageData.
     * @link [CompressedImageData:getDimensions](https://love2d.org/wiki/CompressedImageData:getDimensions)
     * @since 0.9.0
     */
    getDimensions(
      level: number,
    ): LuaMultiReturn<[width: number, height: number]>;

    /**
     * Gets the format of the CompressedImageData.
     *
     * @return format, The format of the CompressedImageData.
     * @link [CompressedImageData:getFormat](https://love2d.org/wiki/CompressedImageData:getFormat)
     * @since 0.9.0
     */
    getFormat(): CompressedImageFormat;

    /**
     * Gets the height of the CompressedImageData.
     *
     * @return height, The height of the CompressedImageData.
     * @link [CompressedImageData:getHeight](https://love2d.org/wiki/CompressedImageData:getHeight)
     * @since 0.9.0
     */
    getHeight(): number;

    /**
     * Gets the height of the CompressedImageData.
     *
     * @param level A mipmap level. Must be in the range of [1,  CompressedImageData:getMipmapCount()].
     * @return height, The height of the CompressedImageData.
     * @link [CompressedImageData:getHeight](https://love2d.org/wiki/CompressedImageData:getHeight)
     * @since 0.9.0
     */
    getHeight(level: number): number;

    /**
     * Gets the number of mipmap levels in the CompressedImageData. The base mipmap
     * level (original image) is included in the count.
     *
     * @return mipmaps, The number of mipmap levels stored in the CompressedImageData.
     * @link [CompressedImageData:getMipmapCount](https://love2d.org/wiki/CompressedImageData:getMipmapCount)
     * @since 0.9.0
     */
    getMipmapCount(): number;

    /**
     * Gets the width of the CompressedImageData.
     *
     * @return width, The width of the CompressedImageData.
     * @link [CompressedImageData:getWidth](https://love2d.org/wiki/CompressedImageData:getWidth)
     * @since 0.9.0
     */
    getWidth(): number;

    /**
     * Gets the width of the CompressedImageData.
     *
     * @param level A mipmap level. Must be in the range of [1, CompressedImageData:getMipmapCount()].
     * @return width, The width of the CompressedImageData.
     * @link [CompressedImageData:getWidth](https://love2d.org/wiki/CompressedImageData:getWidth)
     * @since 0.9.0
     */
    getWidth(level: number): number;
  }
}
