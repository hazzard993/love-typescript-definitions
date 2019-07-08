/**
 * Data object containing arbitrary bytes in an contiguous memory.
 * @link [CompressedData](https://love2d.org/wiki/CompressedData)
 */
declare interface CompressedData extends Data {

    /**
     * Gets the compression format of the CompressedData.
     * @return format, The format of the CompressedData.
     * @link [CompressedData:getFormat](https://love2d.org/wiki/CompressedData:getFormat)
     */
    getFormat(): CompressedDataFormat;

}
