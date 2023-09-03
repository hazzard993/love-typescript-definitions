declare module "love.graphics" {
  import { File, FileData } from "love.filesystem";
  import { CompressedImageData } from "love.image";
  /**
   * Is not documented.
   */
  type ImageInformation = string | File | FileData | CompressedImageData;
}
