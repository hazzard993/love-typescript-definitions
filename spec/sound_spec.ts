/**
 * Documented at
 * https://love2d.org/wiki/Decoder
 */
declare const decoder: Decoder;
decoder.decode;
decoder.getBitDepth;
decoder.getChannelCount;
decoder.getDuration;
decoder.getSampleRate;
decoder.release;
decoder.type;
decoder.typeOf;

/**
 * Documented at
 * https://love2d.org/wiki/SoundData
 */
declare const soundData: SoundData;
soundData.clone;
soundData.getPointer;
soundData.getSize;
soundData.getString;
soundData.release;
soundData.type;
soundData.typeOf;
soundData.getBitDepth;
soundData.getChannelCount;
soundData.getDuration;
soundData.getSample;
soundData.getSampleCount;
soundData.getSampleRate;
soundData.setSample;

love;
love.sound;

love.sound.newDecoder;
love.sound.newSoundData;
