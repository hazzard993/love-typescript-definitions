declare namespace love {

    /**
     * Provides an interface to decode encoded image data.
     * @link [love.image](https://love2d.org/wiki/love.image)
     */
    export namespace image {
        /**
         * Determines whether a file can be loaded as CompressedImageData.
         *
         * @param filename The filename of the potentially compressed image file.
         * @return {boolean} compressed, Whether the file can be loaded as CompressedImageData or not.
         */
        export function isCompressed(filename: string): boolean;

        /**
         * Determines whether a file can be loaded as CompressedImageData.
         *
         * @param fileData A FileData potentially containing a compressed image.
         * @return {boolean} compressed, Whether the FileData can be loaded as CompressedImageData or not.
         */
        export function isCompressed(fileData: FileData): boolean;

        /**
         * Create a new CompressedImageData object from a compressed image file. LÖVE
         * supports several compressed texture formats, enumerated in the
         * CompressedImageFormat page.
         *
         * @param filename The filename of the compressed image file.
         * @return {CompressedImageData} compressedImageData, The new CompressedImageData object.
         */
        export function newCompressedData(filename: string): CompressedImageData;

        /**
         * Create a new CompressedImageData object from a compressed image file. LÖVE
         * supports several compressed texture formats, enumerated in the
         * CompressedImageFormat page.
         *
         * @param fileData A FileData containing a compressed image.
         * @return {CompressedImageData} compressedImageData, The new CompressedImageData object.
         */
        export function newCompressedData(fileData: FileData): CompressedImageData;

        /**
         * Create a new ImageData object.
         *
         * @param width The width of the ImageData.
         * @param height The height of the ImageData.
         * @return {ImageData} imageData, The new blank ImageData object. Each pixel's color values, (including the alpha values!) will be set to zero.
         */
        export function newImageData(width: number, height: number): ImageData;

        /**
         * Create a new ImageData object.
         *
         * @param width The width of the ImageData.
         * @param height The height of the ImageData.
         * @param data The data to load into the ImageData (RGBA bytes, left to right and top to bottom).
         * @return {ImageData} imageData, The new ImageData object.
         */
        export function newImageData(width: number, height: number, data: string): ImageData;

        /**
         * Create a new ImageData object.
         *
         * @param filename The filename of the image file.
         * @return {ImageData} imageData, The new ImageData object.
         */
        export function newImageData(filename: string): ImageData;

        /**
         * Create a new ImageData object.
         *
         * @param filedata The encoded file data to decode into image data.
         * @return {ImageData} imageData, The new ImageData object.
         */
        export function newImageData(filedata: FileData): ImageData;

    }

}
