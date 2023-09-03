declare module "love.image" {
  import { Data } from "love.data";
  import { FileData } from "love.filesystem";

  /**
   * Raw (decoded) image data.
   * @link [ImageData](https://love2d.org/wiki/ImageData)
   */
  interface ImageData extends Data<"ImageData"> {
    /**
     * Encodes the ImageData and optionally writes it to the save directory.
     *
     * @param format The format to encode the image as.
     * @param filename The filename to write the file to. If unspecified, no file will be written but the FileData will still be returned.
     * @return filedata, The encoded image as a new FileData object.
     * @link [ImageData:encode](https://love2d.org/wiki/ImageData:encode)
     */
    encode(format: ImageFormat, filename?: string): FileData;

    /**
     * Gets the width and height of the ImageData in pixels.
     *
     * @return width, The width of the ImageData in pixels.
     * @return height, The height of the ImageData in pixels.
     * @link [ImageData:getDimensions](https://love2d.org/wiki/ImageData:getDimensions)
     * @since 0.9.0
     */
    getDimensions(): LuaMultiReturn<[width: number, height: number]>;

    /**
     * Gets the pixel format of the ImageData.
     * @return format, The pixel format the ImageData was created with.
     * @link [ImageData:getFormat](https://love2d.org/wiki/ImageData:getFormat)
     * @since 11.0
     */
    getFormat(): PixelFormat;

    /**
     * Gets the height of the ImageData in pixels.
     *
     * @return height, The height of the ImageData in pixels.
     * @link [ImageData:getHeight](https://love2d.org/wiki/ImageData:getHeight)
     */
    getHeight(): number;

    /**
     * Gets the color of a pixel at a specific position in the image.
     *
     * Valid x and y values start at 0 and go up to image width and height minus 1.
     * Non-integer values are floored.
     *
     * @param x The position of the pixel on the x-axis.
     * @param y The position of the pixel on the y-axis.
     * @return r, The red component.
     * @return g, The green component.
     * @return b, The blue component.
     * @return a, The alpha component.
     * @link [ImageData:getPixel](https://love2d.org/wiki/ImageData:getPixel)
     */
    getPixel(
      x: number,
      y: number,
    ): LuaMultiReturn<[r: number, g: number, b: number, a: number]>;

    /**
     * Gets the width of the ImageData in pixels.
     *
     * @return width, The width of the ImageData in pixels.
     * @link [ImageData:getWidth](https://love2d.org/wiki/ImageData:getWidth)
     */
    getWidth(): number;

    /**
     * Transform an image by applying a function to every pixel.
     *
     * This function is a higher order function. It takes another function as a
     * parameter, and calls it once for each pixel in the ImageData.
     *
     * The function parameter is called with six parameters for each pixel in turn.
     * The parameters are numbers that represent the x and y coordinates of the pixel
     * and its red, green, blue and alpha values. The function parameter can return up
     * to four number values, which become the new r, g, b and a values of the pixel.
     * If the function returns fewer values, the remaining components are set to 0.
     *
     * @param pixelFunction Function parameter to apply to every pixel.
     * @link [ImageData:mapPixel](https://love2d.org/wiki/ImageData:mapPixel)
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
     * @link [ImageData:paste](https://love2d.org/wiki/ImageData:paste)
     */
    paste(
      source: ImageData,
      dx: number,
      dy: number,
      sx: number,
      sy: number,
      sw: number,
      sh: number,
    ): void;

    /**
     * Sets the color of a pixel at a specific position in the image.
     *
     * Valid x and y values start at 0 and go up to image width and height minus 1.
     *
     * @param x The position of the pixel on the x-axis.
     * @param y The position of the pixel on the y-axis.
     * @param r The red component (0-255).
     * @param g The green component (0-255).
     * @param b The blue component (0-255).
     * @param a The alpha component (0-255).
     * @link [ImageData:setPixel](https://love2d.org/wiki/ImageData:setPixel)
     */
    setPixel(
      x: number,
      y: number,
      r: number,
      g: number,
      b: number,
      a: number,
    ): void;
  }
}
