/**
 * Documented at
 * https://love2d.org/wiki/CompressedImageData
 * 2019/03/03
 */
declare const compressedImageData: CompressedImageData;
compressedImageData.getDimensions;
compressedImageData.getFormat;
compressedImageData.getHeight;
compressedImageData.getMipmapCount;
compressedImageData.getWidth;
compressedImageData.clone;
compressedImageData.getPointer;
compressedImageData.getSize;
compressedImageData.getString;
compressedImageData.release;
compressedImageData.type;
compressedImageData.typeOf;

/**
 * Documented at
 * https://love2d.org/wiki/ImageData
 * Obtained 2019/03/02
 */
declare const imageData: ImageData;
imageData.clone;
imageData.getPointer;
imageData.getSize;
imageData.getString;
imageData.encode;
imageData.getDimensions;
imageData.getFormat;
imageData.getHeight;
imageData.getPixel;
imageData.getWidth;
imageData.mapPixel;
imageData.paste;
imageData.setPixel;
imageData.release;
imageData.type;
imageData.typeOf;

declare const c: CompressedImageData;

love;
love.image;

love.image.isCompressed;
love.image.newCompressedData;
love.image.newImageData;
