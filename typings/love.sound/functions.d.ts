/**
 * This module is responsible for decoding sound files. It can't play the sounds,
 * see love.audio for that.
 *
 * @noResolution
 * @noSelf
 * @link [love.sound](https://love2d.org/wiki/love.sound)
 */
declare module "love.sound" {
  import { File } from "love.filesystem";

  /**
   * Attempts to find a decoder for the encoded sound data in the specified file.
   *
   * @param buffer The size of each decoded chunk, in bytes. (Default 2048)
   * @return decoder, A new Decoder object.
   * @link [love.sound.newDecoder](https://love2d.org/wiki/love.sound.newDecoder)
   */
  function newDecoder(file: File, buffer?: number): Decoder;
  function newDecoder(filename: string, buffer?: number): Decoder;

  /**
   * Creates new SoundData from a filepath, File, or Decoder.
   *
   * The sound data will be decoded to the memory in a raw format. It is recommended to create only short sounds like effects, as a 3 minute song uses 30 MB of memory this way.
   *
   * @return soundData, A new SoundData object.
   * @link [love.sound.newSoundData](https://love2d.org/wiki/love.sound.newSoundData)
   */
  function newSoundData(filename: string): SoundData;
  function newSoundData(file: File): SoundData;
  function newSoundData(decoder: Decoder): SoundData;

  /**
   * Creates SoundData with a custom sample rate, channel and bit depth.
   *
   * @param samples Total number of samples.
   * @param rate Number of samples per second. (Default 44100)
   * @param bits Bits per sample (8 or 16). (Default 16)
   * @param channels Either 1 for mono or 2 for stereo. (Default 2)
   * @return soundData, A new SoundData object.
   * @link [love.sound.newSoundData](https://love2d.org/wiki/love.sound.newSoundData)
   */
  function newSoundData(
    samples: number,
    rate?: number,
    bits?: number,
    channels?: number,
  ): SoundData;
}
