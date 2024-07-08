/**
 * Provides functionality for creating and transforming data.
 *
 * @noResolution
 * @noSelf
 * @link [love.data](https://love2d.org/wiki/love.data)
 * @since 11.0
 */
declare module "love.data" {
  /**
   * Compresses a string using a specific compression algorithm.
   *
   * @param container What type to return the compressed data as.
   * @param format The format to use when compressing the string.
   * @param rawstring The raw (un-compressed) string to compress.
   * @param level The level of compression to use, between `0` and `9`. `-1` indicates the default level. The meaning of this argument depends on the compression format being used. (Default `-1`)
   * @return compressedData, CompressedData/string which contains the compressed version of rawstring.
   * @link [love.data.compress](https://love2d.org/wiki/love.data.compress)
   * @since 11.0
   */
  function compress<T extends ContainerType>(
    container: T,
    format: CompressedDataFormat,
    rawstring: string,
    level?: number,
  ): T extends "string" ? string : ByteData;

  /**
   * Compresses data using a specific compression algorithm.
   *
   * @param container What type to return the compressed data as.
   * @param format The format to use when compressing the string.
   * @param data A Data object containing the raw (un-compressed) data to compress.
   * @param level The level of compression to use, between `0` and `9`. `-1` indicates the default level. The meaning of this argument depends on the compression format being used. (Default `-1`)
   * @return compressedData, CompressedData/string which contains the compressed version of rawstring.
   * @link [love.data.compress](https://love2d.org/wiki/love.data.compress)
   * @since 11.0
   */
  function compress<T extends ContainerType>(
    container: T,
    format: CompressedDataFormat,
    data: Data,
    level?: number,
  ): T extends "string" ? string : ByteData;

  /**
   * Decode Data or a string from any of the EncodeFormats to Data or string.
   *
   * @param container What type to return the decoded data as.
   * @param format The format of the input data.
   * @param source The raw (encoded) data to decode.
   * @return decoded, ByteData/string which contains the decoded version of source.
   * @link [love.data.decode](https://love2d.org/wiki/love.data.decode)
   * @since 11.0
   */
  function decode<T extends ContainerType>(
    container: T,
    format: EncodeFormat,
    source: string,
  ): T extends "string" ? string : ByteData;
  function decode<T extends ContainerType>(
    container: T,
    format: EncodeFormat,
    source: Data,
  ): T extends "string" ? string : ByteData;

  /**
   * Decompresses a CompressedData or previously compressed string or Data object
   *
   * @param container What type to return the decompressed data as.
   * @return decompressedData, Data/string containing the raw decompressed data.
   * @link [love.data.decompress](https://love2d.org/wiki/love.data.decompress)
   * @since 11.0
   */
  function decompress<T extends ContainerType>(
    container: T,
    compressedData: CompressedData,
  ): T extends "string" ? string : Data;
  function decompress<T extends ContainerType>(
    container: T,
    format: CompressedDataFormat,
    compressedData: CompressedData,
  ): T extends "string" ? string : Data;
  function decompress<T extends ContainerType>(
    container: T,
    format: CompressedDataFormat,
    data: Data,
  ): T extends "string" ? string : Data;

  /**
   * Encode Data or a string to a Data or string in one of the EncodeFormats.
   *
   * @param container What type to return the encoded data as.
   * @param format The format of the output data.
   * @param sourceString The raw data to encode.
   * @param linelength The maximum line length of the output. Only supported for base64, ignored if 0. (Default 0)
   * @return encoded, ByteData/string which contains the encoded version of source.
   * @link [love.data.encode](https://love2d.org/wiki/love.data.encode)
   * @since 11.0
   */
  function encode<T extends ContainerType>(
    container: T,
    format: EncodeFormat,
    sourceString: string,
    linelength?: number,
  ): T extends "string" ? string : ByteData;

  /**
   * Gets the size in bytes that a given format used with love.data.pack will use.
   *
   * @param format A string determining how the values are packed. Follows the rules of [Lua 5.3's string.pack format strings](https://www.lua.org/manual/5.3/manual.html#6.4.2).
   * @return size, The size in bytes that the packed data will use.
   * @link [love.data.getPackedSize](https://love2d.org/wiki/love.data.getPackedSize)
   * @since 11.0
   */
  function getPackedSize(format: string): number;

  /**
   * Compute the message digest of a string using a specified hash algorithm.
   *
   * @param hashFunction Hash algorithm to use.
   * @param string String/Data to hash.
   * @return rawdigest, Raw message digest string.
   * @link [love.data.hash](https://love2d.org/wiki/love.data.hash)
   * @since 11.0
   */
  function hash(hashFunction: HashFunction, string: string): string;

  /**
   * Compute the message digest of a string using a specified hash algorithm.
   *
   * @param hashFunction Hash algorithm to use.
   * @param string String/Data to hash.
   * @return rawdigest, Raw message digest string.
   * @link [love.data.hash](https://love2d.org/wiki/love.data.hash)
   * @since 11.0
   */
  function hash(hashFunction: HashFunction, data: Data): string;

  /**
   * Creates a new ByteData by copying the contents of the specified string.
   *
   * @param datastring The byte string to copy.
   * @return bytedata, The new Data object.
   * @link [love.data.newByteData](https://love2d.org/wiki/love.data.newByteData)
   * @since 11.0
   */
  function newByteData(datastring: string): ByteData;

  /**
   * Creates a new ByteData by copying from an existing Data object.
   *
   * @param data The existing Data object to copy.
   * @param offset The offset of the subsection to copy, in bytes. (Default `0`)
   * @param size The size in bytes of the new Data object. (Default `data.getSize()`)
   * @return bytedata, The new Data object.
   * @link [love.data.newByteData](https://love2d.org/wiki/love.data.newByteData)
   * @since 11.0
   */
  function newByteData(data: Data, offset?: number, size?: number): ByteData;

  /**
   * Creates a new empty ByteData with the specific size.
   *
   * @param size The size in bytes of the new Data object.
   * @return bytedata, The new Data object.
   * @link [love.data.newByteData](https://love2d.org/wiki/love.data.newByteData)
   * @since 11.0
   */
  function newByteData(size: number): ByteData;

  /**
   * Creates a new Data referencing a subsection of an existing Data object.
   *
   * @param data The Data object to reference.
   * @param offset The offset of the subsection to reference, in bytes.
   * @param size The size in bytes of the subsection to reference.
   * @return view, The new Data view.
   * @return view, The new Data view.
   * @link [love.data.newDataView](https://love2d.org/wiki/love.data.newDataView)
   * @since 11.0
   */
  function newDataView(data: Data, offset: number, size: number): Data;

  type Packable = string | number | boolean;

  type PackedMetatable<
    F extends string = string,
    D extends Array<Packable> = Array<Packable>,
  > = {
    format: F;
    values: D;
  };

  interface PackedDataString<M extends PackedMetatable> extends String {
    __metatable?: M;
  }

  interface PackedDataObject<M extends PackedMetatable> extends Data {
    __metatable?: M;
  }

  type PackedData<M extends PackedMetatable = PackedMetatable> =
    | PackedDataString<M>
    | PackedDataObject<M>;

  type PackedDataMetatable<Type> = Type extends PackedData<infer M> ? M : never;

  /**
   * Packs (serializes) simple Lua values.
   *
   * The format that describes how the values are packed is [documented here](https://www.lua.org/manual/5.3/manual.html#6.4.2).
   *
   * @param container What type to return the encoded data as.
   * @param format A string determining how the values are packed. Follows the rules of Lua 5.3's [string.pack](https://www.lua.org/manual/5.3/manual.html#pdf-string.unpack) format strings.
   * @param values Values to serialize.
   * @return data, Data/string which contains the serialized data.
   * @link [love.data.pack](https://love2d.org/wiki/love.data.pack)
   * @since 11.0
   */
  function pack<
    T extends ContainerType,
    F extends string,
    D extends Packable[],
  >(
    container: T,
    format: F,
    ...values: D
  ): T extends "string"
    ? PackedDataString<{ format: F; values: D }>
    : PackedDataObject<{ format: F; values: D }>;

  /**
   * Unpacks (deserializes) a byte-string or Data into simple Lua values.
   *
   * @param format A string determining how the values were packed. Follows the rules of Lua 5.3's [string.pack](https://www.lua.org/manual/5.3/manual.html#pdf-string.pack) format strings.
   * @param datastring A string containing the packed (serialized) data.
   * @param pos Where to start reading in the string. Negative values can be used to read relative from the end of the string.
   * @return All unpacked values
   * @return index, The index of the first unread byte in the data string.
   * @link [love.data.unpack](https://love2d.org/wiki/love.data.unpack)
   * @since 11.0
   */
  function unpack<P extends PackedData>(
    format: PackedDataMetatable<P>["format"],
    data: P,
    pos?: number,
  ): LuaMultiReturn<PackedDataMetatable<P>["values"]>;
}
