/**
 * Drawable image type.
 * @link [Image](https://love2d.org/wiki/Image)
 */
declare interface Image extends Texture {

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
