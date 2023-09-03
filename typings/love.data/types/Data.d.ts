declare module "love.data" {
  import { Type, Types, LightUserData } from "love";

  type DataTypes =
    | "Data"
    | "ByteData"
    | "FileData"
    | "GlyphData"
    | "CompressedImageData"
    | "ImageData"
    | "CompressedData"
    | "SoundData";

  /**
   * The superclass of all data.
   * @link [Data](https://love2d.org/wiki/Data)
   */
  interface Data<T extends DataTypes = "Data"> extends Type<T> {
    /**
     * Creates a new copy of the Data object.
     * @return clone, The new copy.
     * @link [Data:clone](https://love2d.org/wiki/Data:clone)
     * @since 11.0
     */
    clone(): Types[T];

    /**
     * Gets an FFI pointer to the Data.
     *
     * This function should be preferred instead of Data:getPointer because the latter uses light userdata which can't store more all possible memory addresses on some new ARM64 architectures, when LuaJIT is used.
     * @link [Data:getFFIPointer](https://love2d.org/wiki/Data:getFFIPointer)
     * @returns A raw void* pointer to the Data, or nil if FFI is unavailable.
     * @since 11.3
     */
    getFFIPointer(): LightUserData<"Pointer">;

    /**
     * Gets a pointer to the Data.
     * @return pointer, A raw pointer to the Data.
     * @link [Data:getPointer](https://love2d.org/wiki/Data:getPointer)
     */
    getPointer(): LightUserData<"Pointer">;

    /**
     * Gets the size of the Data.
     * @return size, The size of the Data in bytes.
     * @link [Data:getSize](https://love2d.org/wiki/Data:getSize)
     */
    getSize(): number;

    /**
     * Gets the full Data as a string.
     * @return data, The raw data.
     * @link [Data:getString](https://love2d.org/wiki/Data:getString)
     * @since 0.9.0
     */
    getString(): string;
  }
}
