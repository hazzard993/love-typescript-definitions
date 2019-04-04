/**
 * https://love2d.org/wiki/love.graphics.newArrayImage
 */
declare type ArrayImageSettings = {

    /**
     * True to make the image use mipmaps, false to disable them. Mipmaps will be automatically generated if the image isn't a compressed texture format.
     * @default false
     */
    mipmaps?: boolean;

    /**
     * True to treat the image's pixels as linear instead of sRGB, when gamma correct rendering is enabled. Most images are authored as sRGB.
     * @default false
     */
    linear?: boolean;

    /**
     * The DPI scale to use when drawing the array image and calling getWidth/getHeight.
     * @default 1
     */
    dpiscale: number;

};
