declare module "love.image" {
  /**
   * Compressed image data formats. Here and here are a couple overviews of many of
   * the formats.
   *
   * Unlike traditional PNG or jpeg, these formats stay compressed in RAM and in the
   * graphics card's VRAM. This is good for saving memory space as well as improving
   * performance, since the graphics card will be able to keep more of the image's
   * pixels in its fast-access cache when drawing it.
   * @link [CompressedImageFormat](https://love2d.org/wiki/CompressedImageFormat)
   */
  type CompressedImageFormat =
    | "DXT1"
    | "DXT3"
    | "DXT5"
    | "BC4"
    | "BC4s"
    | "BC5"
    | "BC5s"
    | "BC6h"
    | "BC6hs"
    | "BC7"
    | "ETC1"
    | "ETC2rgb"
    | "ETC2rgba"
    | "ETC2rgba1"
    | "EACr"
    | "EACrs"
    | "EACrg"
    | "EACrgs"
    | "PVR1rgb2"
    | "PVR1rgb4"
    | "PVR1rgba2"
    | "PVR1rgba4"
    | "ASTC4x4"
    | "ASTC5x4"
    | "ASTC5x5"
    | "ASTC6x5"
    | "ASTC6x6"
    | "ASTC8x5"
    | "ASTC8x6"
    | "ASTC8x8"
    | "ASTC10x5"
    | "ASTC10x6"
    | "ASTC10x8"
    | "ASTC10x10"
    | "ASTC12x10"
    | "ASTC12x12";
}
