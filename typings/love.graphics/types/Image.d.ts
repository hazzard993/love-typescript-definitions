declare module "love.graphics" {
  import { ImageData } from "love.image";

  /**
   * Drawable image type.
   * @link [Image](https://love2d.org/wiki/Image)
   */
  interface Image extends Texture<"Image"> {
    /**
     * Gets the flags used when the image was created.
     *
     * @link [Image:getFlags](https://love2d.org/wiki/(Image):getFlags)
     * @return flags, A table with ImageFlag keys.
     */
    getFlags(): {
      /**
       * True if the image's pixels should be interpreted as being linear RGB rather than sRGB-encoded, if gamma-correct rendering is enabled. Has no effect otherwise. (Default: false)
       */
      linear?: boolean;
      /**
       * If true, mipmaps for the image will be automatically generated (or taken from the images's file if possible, if the image originated from a CompressedImageData). If this value is a table, it should contain a list of other filenames of images of the same format that have progressively half-sized dimensions, all the way down to 1x1. Those images will be used as this Image's mipmap levels. (Default: false)
       */
      mipmaps?: boolean | string[];
    };

    /**
     * Gets whether the Image was created from CompressedData.
     * @return compressed, Whether the Image is stored as a compressed texture on the GPU.
     * @link [Image:isCompressed](https://love2d.org/wiki/(Image):isCompressed)
     */
    isCompressed(): boolean;

    /**
     * Replaces the contents of an Image.
     *
     * @param data The new ImageData to replace the contents with.
     * @param slice Which slice to replace, if applicable.
     * @param mipmap The mimap level of the new ImageData. If 0 Image:replacePixels will generate new mimaps.
     * @link [Image:replacePixels](https://love2d.org/wiki/(Image):replacePixels)
     */
    replacePixels(data: ImageData, slice: number, mipmap?: number): void;
  }
}
