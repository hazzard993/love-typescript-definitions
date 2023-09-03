declare module "love.sound" {
  import { Type } from "love";

  /**
   * An object which can gradually decode a sound file.
   *
   * @link [Decoder](https://love2d.org/wiki/Decoder)
   */
  interface Decoder extends Type<"Decoder"> {
    /**
     * Creates a new copy of current decoder.
     *
     * The new decoder will start decoding from the beginning of the audio stream.
     * @returns New copy of the decoder.
     * @link [Decoder:clone](https://love2d.org/wiki/Decoder:clone)
     */
    clone(): Decoder;

    /**
     * Decodes the audio and returns a SoundData object containing the decoded audio data.
     * @returns soundData, Decoded audio data.
     * @link [Decoder:decode](https://love2d.org/wiki/Decoder:decode)
     * @since 11.0
     */
    decode(): SoundData;

    /**
     * Returns the number of bits per sample.
     *
     * @return bitDepth, Either 8 or 16.
     * @link [Decoder:getBitDepth](https://love2d.org/wiki/Decoder:getBitDepth)
     */
    getBitDepth(): number;

    /**
     * Returns the number of channels in the stream.
     *
     * @return channels, 1 for mono, 2 for stereo.
     * @link [Decoder:getChannelCount](https://love2d.org/wiki/Decoder:getChannelCount)
     */
    getChannelCount(): number;

    /**
     * Gets the duration of the sound file. It may not always be sample-accurate, and
     * it may return -1 if the duration cannot be determined at all.
     *
     * @return duration, The duration of the sound file in seconds, or -1 if it cannot be determined.
     * @link [Decoder:getDuration](https://love2d.org/wiki/Decoder:getDuration)
     */
    getDuration(): number;

    /**
     * Returns the sample rate of the Decoder.
     *
     * @return rate, Number of samples per second.
     * @link [Decoder:getSampleRate](https://love2d.org/wiki/Decoder:getSampleRate)
     */
    getSampleRate(): number;
  }
}
