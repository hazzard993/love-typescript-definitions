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
declare const byteData: ByteData;
byteData.clone;
byteData.getPointer;
byteData.getSize;
byteData.getString;
byteData.release;
byteData.type;
byteData.typeOf;

/**
 * Documented at
 * https://love2d.org/wiki/Data
 * Obtained 2019/03/02
 */
declare const data: Data;
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

{
    const byteData: ByteData = love.data.encode("data", "base64", "");
    const stringData: string = love.data.encode("string", "base64", "");

    const unpack = (
        packedData: import("love.data").PackedData<{
            format: "n1";
            values: [1, 2, 3, 4];
        }>
    ) => {
        love.data.unpack("n1", packedData);
    };

    let a: number, e: string;
    const data = love.data.pack("data", "n1", 1, 2, 3, 4);
    // [a] = love.data.unpack("n2", data); // ❌ Wrong unpacking format
    // [e] = love.data.unpack("n1", data); // ❌ Unpacked data is not assignable to a string
    [a] = love.data.unpack("n1", data); // ✔
    unpack(data);
}

{
    const unpack = (
        packedData: import("love.data").PackedData<{
            format: "n1";
            values: [1, 2, 3, 4];
        }>
    ) => {
        love.data.unpack("n1", packedData);
    };

    unpack(love.data.pack("data", "n1", 1, 2, 3, 4));
}
