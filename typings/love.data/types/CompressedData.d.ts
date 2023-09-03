declare module "love.data" {
  /**
   * Data object containing arbitrary bytes in an contiguous memory.
   *
   * @link [CompressedData](https://love2d.org/wiki/CompressedData)
   */
  interface CompressedData extends Data<"CompressedData"> {
    /**
     * Gets the compression format of the CompressedData.
     *
     * @return format, The format of the CompressedData.
     * @link [CompressedData:getFormat](https://love2d.org/wiki/CompressedData:getFormat)
     */
    getFormat(): CompressedDataFormat;
  }
}
