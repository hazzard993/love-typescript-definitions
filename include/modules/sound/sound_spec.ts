/**
 * Documented at
 * https://love2d.org/wiki/Decoder
 */
let decoder: Decoder;
decoder.decode;
decoder.getBitDepth;
decoder.getChannelCount;
decoder.getChannels;
decoder.getDuration;
decoder.getSampleRate;
decoder.release;
decoder.type;
decoder.typeOf;

/**
 * Documented at
 * https://love2d.org/wiki/SoundData
 */
let soundData: SoundData;
soundData.clone;
soundData.getPointer;
soundData.getSize;
soundData.getString;
soundData.release;
soundData.type;
soundData.typeOf;
soundData.getBitDepth;
soundData.getChannelCount;
soundData.getChannels;
soundData.getDuration;
soundData.getSample;
soundData.getSampleCount;
soundData.getSampleRate;
soundData.setSample;

love;
love.sound;

love.sound.newDecoder;
love.sound.newSoundData;
