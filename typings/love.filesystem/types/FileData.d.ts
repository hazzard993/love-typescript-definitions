declare module "love.filesystem" {
    import { Data } from "love.data";

    /**
     * @link [FileData](https://love2d.org/wiki/FileData)
     */
    export interface FileData extends Data<"FileData"> {
        /**
         * Gets the extension of the FileData.
         *
         * @return ext, The extension of the file the FileData represents.
         * @link [FileData:getExtension](https://love2d.org/wiki/FileData:getExtension)
         */
        getExtension(): string;

        /**
         * Gets the filename of the FileData.
         *
         * @return name, The name of the file the FileData represents.
         * @link [FileData:getFilename](https://love2d.org/wiki/FileData:getFilename)
         */
        getFilename(): string;
    }
}
