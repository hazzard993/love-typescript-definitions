declare module "love.data" {
  /**
   * Return type of various data-returning functions.
   *
   * @link [CompressedDataFormat](https://love2d.org/wiki/CompressedDataFormat)
   * @since 0.10.0
   */
  type CompressedDataFormat = "lz4" | "zlib" | "gzip" | "deflate";
}
