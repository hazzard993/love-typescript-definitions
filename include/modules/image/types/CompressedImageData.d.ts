/**
 * @link [CompressedImageData](https://love2d.org/wiki/CompressedImageData)
 */
declare interface CompressedImageData extends Data {
	/**
	 * Gets the width and height of the CompressedImageData.
	 *
	 * @return {number} width, The width of the CompressedImageData.
	 * @return {number} height, The height of the CompressedImageData.
	 */
    /** @tupleReturn */
    getDimensions(): [number, number];

	/**
	 * Gets the width and height of the CompressedImageData.
	 *
	 * @param level A mipmap level. Must be in the range of [1, CompressedImageData:getMipmapCount()].
	 * @return {number} width, The width of the CompressedImageData.
	 * @return {number} height, The height of the CompressedImageData.
	 */
    /** @tupleReturn */
    getDimensions(level: number): [number, number];

	/**
	 * Gets the format of the CompressedImageData.
	 *
	 * @return {CompressedImageFormat} format, The format of the CompressedImageData.
	 */
    getFormat(): CompressedImageFormat;

	/**
	 * Gets the height of the CompressedImageData.
	 *
	 * @return {number} height, The height of the CompressedImageData.
	 */
    getHeight(): number;

	/**
	 * Gets the height of the CompressedImageData.
	 *
	 * @param level A mipmap level. Must be in the range of [1,  CompressedImageData:getMipmapCount()].
	 * @return {number} height, The height of the CompressedImageData.
	 */
    getHeight(level: number): number;

	/**
	 * Gets the number of mipmap levels in the CompressedImageData. The base mipmap
	 * level (original image) is included in the count.
	 *
	 * @return {number} mipmaps, The number of mipmap levels stored in the CompressedImageData.
	 */
    getMipmapCount(): number;

	/**
	 * Gets the width of the CompressedImageData.
	 *
	 * @return {number} width, The width of the CompressedImageData.
	 */
    getWidth(): number;

	/**
	 * Gets the width of the CompressedImageData.
	 *
	 * @param level A mipmap level. Must be in the range of [1, CompressedImageData:getMipmapCount()].
	 * @return {number} width, The width of the CompressedImageData.
	 */
    getWidth(level: number): number;

}
