declare module "love.graphics" {
  import { ImageData } from "love.image";

  /**
   * A Canvas is used for off-screen rendering.
   *
   * @link [Canvas](https://love2d.org/wiki/Canvas)
   * @since 0.8.0
   */
  interface Canvas extends Texture<"Canvas"> {
    /**
     * Generates mipmaps for the Canvas, based on the contents of the highest-resolution mipmap level.
     *
     * @link [Canvas:generateMipmaps](https://love2d.org/wiki/Canvas:generateMipmaps)
     * @since 11.0
     */
    generateMipmaps(): void;

    /**
     * Gets the number of multisample antialiasing (MSAA) samples used when drawing to the Canvas.
     *
     * @return samples, The number of multisample antialiasing samples used by the canvas when drawing to it.
     * @link [Canvas:getMSAA](https://love2d.org/wiki/Canvas:getMSAA)
     * @since 0.9.2
     */
    getMSAA(): number;

    /**
     * Gets the MipmapMode this Canvas was created with.
     *
     * @return mode, The mipmap mode this Canvas was created with.
     * @link [Canvas:getMipmapMode](https://love2d.org/wiki/Canvas:getMipmapMode)
     * @since 11.0
     */
    getMipmapMode(): MipmapMode;

    /**
     * Generates ImageData from the contents of the Canvas.
     *
     * @return data, The image data stored in the Canvas.
     * @link [Canvas:newImageData](https://love2d.org/wiki/Canvas:newImageData)
     * @since 0.10.0
     */
    newImageData(): ImageData;

    /**
     * Generates ImageData from the contents of the Canvas.
     *
     * @param slice The cubemap face index, array index, or depth layer for cubemap, array, or volume type Canvases, respectively. This argument is ignored for regular 2D canvases.
     * @param mipmap The mipmap index to use, for Canvases with mipmaps. (Default 1)
     * @param x The x-axis of the top-left corner (in pixels) of the area within the Canvas to capture.
     * @param y The y-axis of the top-left corner (in pixels) of the area within the Canvas to capture.
     * @param width The width in pixels of the area within the Canvas to capture.
     * @param height The height in pixels of the area within the Canvas to capture.
     * @return data, The new ImageData made from the Canvas' contents.
     * @since 11.0
     */
    newImageData(
      slice: number,
      mipmap: number | undefined,
      x: number,
      y: number,
      width: number,
      height: number,
    ): ImageData;

    /**
     * Render to the Canvas using a function.
     *
     * @param func A function performing drawing operations.
     * @link [Canvas:renderTo](https://love2d.org/wiki/Canvas:renderTo)
     * @since 0.8.0
     */
    renderTo(func: (this: void) => void): void;
  }
}
