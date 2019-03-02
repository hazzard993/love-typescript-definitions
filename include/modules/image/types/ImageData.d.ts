/**
 * Raw (decoded) image data.
 * @link [ImageData](https://love2d.org/wiki/ImageData)
 */
declare interface ImageData extends Data {
	/**
	 * Encodes the ImageData and optionally writes it to the save directory.
	 *
	 * @param format The format to encode the image as.
	 * @param filename The filename to write the file to. If nil, no file will be written but the FileData will still be returned.
	 * @return {FileData} filedata, The encoded image as a new FileData object.
	 */
    encode(format: ImageFormat, filename?: string): FileData;

	/**
	 * Gets the width and height of the ImageData in pixels.
	 *
	 * @return {number} width, The width of the ImageData in pixels.
	 * @return {number} height, The height of the ImageData in pixels.
	 */
    /** @tupleReturn */
    getDimensions(): [number, number];

    /**
     * TODO description
     * @param TODO
     * @return {return_type} desc, description
     * @link [ImageData:getFormat](https://love2d.org/wiki/ImageData:getFormat)
     */
    getFormat(): PixelFormat;

	/**
	 * Gets the height of the ImageData in pixels.
	 *
	 * @return {number} height, The height of the ImageData in pixels.
	 */
    getHeight(): number;

	/**
	 * Gets the color of a pixel at a specific position in the image.
	 *
	 *
	 * Valid x and y values start at 0 and go up to image width and height minus 1.
	 * Non-integer values are floored.
	 *
	 * @param x The position of the pixel on the x-axis.
	 * @param y The position of the pixel on the y-axis.
	 * @return {number} r, The red component (0-255).
	 * @return {number} g, The green component (0-255).
	 * @return {number} b, The blue component (0-255).
	 * @return {number} a, The alpha component (0-255).
	 */
    /** @tupleReturn */
    getPixel(x: number, y: number): [number, number, number, number];

	/**
	 * Gets the width of the ImageData in pixels.
	 *
	 * @return {number} width, The width of the ImageData in pixels.
	 */
    getWidth(): number;

	/**
	 * Transform an image by applying a function to every pixel.
	 *
	 *
	 * This function is a higher order function. It takes another function as a
	 * parameter, and calls it once for each pixel in the ImageData.
	 *
	 *
	 * The function parameter is called with six parameters for each pixel in turn.
	 * The parameters are numbers that represent the x and y coordinates of the pixel
	 * and its red, green, blue and alpha values. The function parameter can return up
	 * to four number values, which become the new r, g, b and a values of the pixel.
	 * If the function returns fewer values, the remaining components are set to 0.
	 *
	 * @param pixelFunction Function parameter to apply to every pixel.
	 */
    mapPixel(pixelFunction: Function): void;

	/**
	 * Paste into ImageData from another source ImageData.
	 *
	 * @param source Source ImageData from which to copy.
	 * @param dx Destination top-left position on x-axis.
	 * @param dy Destination top-left position on y-axis.
	 * @param sx Source top-left position on x-axis.
	 * @param sy Source top-left position on y-axis.
	 * @param sw Source width.
	 * @param sh Source height.
	 */
    paste(source: ImageData, dx: number, dy: number, sx: number, sy: number, sw: number, sh: number): void;

	/**
	 * Sets the color of a pixel at a specific position in the image.
	 *
	 *
	 * Valid x and y values start at 0 and go up to image width and height minus 1.
	 *
	 * @param x The position of the pixel on the x-axis.
	 * @param y The position of the pixel on the y-axis.
	 * @param r The red component (0-255).
	 * @param g The green component (0-255).
	 * @param b The blue component (0-255).
	 * @param a The alpha component (0-255).
	 */
    setPixel(x: number, y: number, r: number, g: number, b: number, a: number): void;

}
