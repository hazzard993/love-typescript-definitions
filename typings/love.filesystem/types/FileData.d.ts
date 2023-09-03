declare module "love.filesystem" {
  import { Data } from "love.data";

  /**
   * Data representing the contents of a file.
   *
   * @link [FileData](https://love2d.org/wiki/FileData)
   * @since 0.7.0
   */
  interface FileData extends Data<"FileData"> {
    /**
     * Gets the extension of the FileData.
     *
     * @return ext, The extension of the file the FileData represents.
     * @link [FileData:getExtension](https://love2d.org/wiki/FileData:getExtension)
     * @since 0.7.0
     */
    getExtension(): string;

    /**
     * Gets the filename of the FileData.
     *
     * @return name, The name of the file the FileData represents.
     * @link [FileData:getFilename](https://love2d.org/wiki/FileData:getFilename)
     * @since 0.7.0
     */
    getFilename(): string;
  }
}
