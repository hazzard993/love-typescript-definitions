declare namespace love {

    /**
     * Provides functionality for creating and transforming data.
     * @noSelf
     * @link [love.data](https://love2d.org/wiki/love.data)
     * @since 11.0
     */
    export namespace data {

        /**
         * Compresses a string or data using a specific compression algorithm.
         * @param container What type to return the compressed data as.
         * @param format The format to use when compressing the string.
         * @param rawstring The raw (un-compressed) string to compress.
         * @param level The level of compression to use, between `0` and `9`. `-1` indicates the default level. The meaning of this argument depends on the compression format being used. (Default `-1`)
         * @return compressedData, CompressedData/string which contains the compressed version of rawstring.
         * @link [love.data.compress](https://love2d.org/wiki/love.data.compress)
         * @since 11.0
         */
        export function compress(container: ContainerType, format: CompressedDataFormat, rawstring: string, level?: number): string | ByteData;
        export function compress(container: "string", format: CompressedDataFormat, rawstring: string, level?: number): string;
        export function compress(container: "data", format: CompressedDataFormat, rawstring: string, level?: number): ByteData;

        /**
         * Compresses a string or data using a specific compression algorithm.
         * @param container What type to return the compressed data as.
         * @param format The format to use when compressing the string.
         * @param sourceString The raw (un-compressed) string to compress.
         * @param level The level of compression to use, between `0` and `9`. `-1` indicates the default level. The meaning of this argument depends on the compression format being used.
         * @return decoded, ByteData/string which contains the decoded version of source.
         * @link [love.data.decode](https://love2d.org/wiki/love.data.decode)
         * @since 11.0
         */
        export function decode(container: ContainerType, format: EncodeFormat, sourceString: string, level?: number): ByteData | string;
        export function decode(container: "string", format: EncodeFormat, sourceString: string, level?: number): string;
        export function decode(container: "data", format: EncodeFormat, sourceString: string, level?: number): ByteData;

        /**
         * Decompresses a CompressedData or previously compressed string or Data object.
         * @param container What type to return the decompressed data as.
         * @param compressedData The compressed data to decompress.
         * @return decompressedData, Data/string containing the raw decompressed data.
         * @link [love.data.decompress](https://love2d.org/wiki/love.data.decompress)
         * @since 11.0
         */
        export function decompress(container: ContainerType, compressedData: CompressedData): Data | string;
        export function decompress(container: "string", compressedData: CompressedData): string;
        export function decompress(container: "data", compressedData: CompressedData): Data;
        export function decompress(container: ContainerType, format: CompressedDataFormat, compressedData: CompressedData): Data | string;
        export function decompress(container: "string", format: CompressedDataFormat, compressedData: CompressedData): string;
        export function decompress(container: "data", format: CompressedDataFormat, compressedData: CompressedData): Data;
        export function decompress(container: ContainerType, format: CompressedDataFormat, data: Data): Data | string;
        export function decompress(container: "string", format: CompressedDataFormat, data: Data): string;
        export function decompress(container: "data", format: CompressedDataFormat, data: Data): Data;

        /**
         * Encode Data or a string to a Data or string in one of the EncodeFormats.
         * @param container What type to return the encoded data as.
         * @param format The format of the output data.
         * @param sourceString The raw data to encode.
         * @param linelength The maximum line length of the output. Only supported for base64, ignored if 0. (Default 0)
         * @return encoded, ByteData/string which contains the encoded version of source.
         * @link [love.data.encode](https://love2d.org/wiki/love.data.encode)
         * @since 11.0
         */
        export function encode(container: ContainerType, format: EncodeFormat, sourceString: string, linelength?: number): ByteData | string;
        export function encode(container: "string", format: EncodeFormat, sourceString: string, linelength?: number): string;
        export function encode(container: "data", format: EncodeFormat, sourceString: string, linelength?: number): ByteData;

        /**
         * Gets the size in bytes that a given format used with love.data.pack will use.
         * @param format A string determining how the values are packed. Follows the rules of [Lua 5.3's string.pack format strings](https://www.lua.org/manual/5.3/manual.html#6.4.2).
         * @return size, The size in bytes that the packed data will use.
         * @link [love.data.getPackedSize](https://love2d.org/wiki/love.data.getPackedSize)
         * @since 11.0
         */
        export function getPackedSize(format: string): number;

        /**
         * Compute the message digest of a string using a specified hash algorithm.
         * @param hashFunction Hash algorithm to use.
         * @param string String/Data to hash.
         * @return rawdigest, Raw message digest string.
         * @link [love.data.hash](https://love2d.org/wiki/love.data.hash)
         * @since 11.0
         */
        export function hash(hashFunction: HashFunction, string: string | Data): string;

        /**
         * Creates a new ByteData by copying the contents of the specified string.
         * @param datastring The byte string to copy.
         * @return bytedata, The new Data object.
         * @link [love.data.newByteData](https://love2d.org/wiki/love.data.newByteData)
         * @since 11.0
         */
        export function newByteData(datastring: string): ByteData;

        /**
         * Creates a new ByteData by copying from an existing Data object.
         * @param data The existing Data object to copy.
         * @param offset The offset of the subsection to copy, in bytes. (Default `0`)
         * @param size The size in bytes of the new Data object. (Default `data.getSize()`)
         * @return bytedata, The new Data object.
         * @link [love.data.newByteData](https://love2d.org/wiki/love.data.newByteData)
         * @since 11.0
         */
        export function newByteData(data: Data, offset?: number, size?: number): ByteData;

        /**
         * Creates a new Data referencing a subsection of an existing Data object.
         * @param data The Data object to reference.
         * @param offset The offset of the subsection to reference, in bytes.
         * @param size The size in bytes of the subsection to reference.
         * @return view, The new Data view.
         * @return view, The new Data view.
         * @link [love.data.newDataView](https://love2d.org/wiki/love.data.newDataView)
         * @since 11.0
         */
        export function newDataView(data: Data, offset: number, size: number): Data;

        /**
         * Packs (serializes) simple Lua values.
         * @param container What type to return the encoded data as.
         * @param format A string determining how the values are packed. Follows the rules of Lua 5.3's [string.pack](https://www.lua.org/manual/5.3/manual.html#pdf-string.unpack) format strings.
         * @param values Values to serialize.
         * @return data, Data/string which contains the serialized data.
         * @link [love.data.pack](https://love2d.org/wiki/love.data.pack)
         * @since 11.0
         */
        export function pack(container: ContainerType, format: string, ...values: Array<any>): Data | string;
        export function pack(container: "string", format: string, ...values: Array<any>): string;
        export function pack(container: "data", format: string, ...values: Array<any>): Data;

        /**
         * Unpacks (deserializes) a byte-string or Data into simple Lua values.
         * @param format A string determining how the values were packed. Follows the rules of Lua 5.3's [string.pack](https://www.lua.org/manual/5.3/manual.html#pdf-string.unpack) format strings.
         * @param datastring A string containing the packed (serialized) data.
         * @param pos Where to start reading in the string. Negative values can be used to read relative from the end of the string.
         * @return All unpacked values
         * @return index, The index of the first unread byte in the data string.
         * @link [love.data.unpack](https://love2d.org/wiki/love.data.unpack)
         * @tupleReturn
         * @since 11.0
         */
        export function unpack(format: string, data: string | Data, pos?: number): Array<any>;

    }

}
