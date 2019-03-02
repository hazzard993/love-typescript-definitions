// Enums
let compressedDataFormat: CompressedDataFormat;
let containerType: ContainerType;
let encodeFormat: EncodeFormat;
let hashFunction: HashFunction;

/**
 * Documented at
 * https://love2d.org/wiki/ByteData
 * Obtained 2019/03/02
 */
let byteData: ByteData;
byteData.clone;
byteData.getPointer;
byteData.getSize;
byteData.getString;
byteData.release;
byteData.type;
byteData.typeOf;

/**
 * Documented at
 * https://love2d.org/wiki/CompressedData
 * Obtained 2019/03/02
 */
let compressedData: CompressedData;
compressedData.getFormat;
compressedData.clone;
compressedData.getPointer;
compressedData.getSize;
compressedData.getString;
compressedData.release;
compressedData.type;
compressedData.typeOf;

/**
 * Documented at
 * https://love2d.org/wiki/Data
 * Obtained 2019/03/02
 */
let data: Data;
data.clone;
data.getPointer;
data.getSize;
data.getString;
data.release;
data.type;
data.typeOf;

// Functions
love;
love.data;

/**
 * Obtained from
 * https://love2d.org/wiki/love.data
 * 2019/03/02
 */
love.data.compress;
love.data.decode;
love.data.decompress;
love.data.encode;
love.data.getPackedSize;
love.data.hash;
love.data.newByteData;
love.data.newDataView;
love.data.pack;
love.data.unpack;
