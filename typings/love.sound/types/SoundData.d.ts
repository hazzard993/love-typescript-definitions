declare module "love.sound" {
  import { Data } from "love.data";

  /**
   * Contains raw audio samples. You can not play SoundData back directly. You must wrap a Source object around it.
   *
   * @link [SoundData](https://love2d.org/wiki/SoundData)
   */
  interface SoundData extends Data<"SoundData"> {
    /**
     * Returns the number of bits per sample.
     *
     * @return bits, Either 8 or 16.
     * @link [SoundData:getBitDepth](https://love2d.org/wiki/SoundData:getBitDepth)
     */
    getBitDepth(): number;

    /**
     * Returns the number of channels in the stream.
     *
     * @return channels, 1 for mono, 2 for stereo.
     * @link [SoundData:getChannelCount](https://love2d.org/wiki/SoundData:getChannelCount)
     */
    getChannelCount(): number;

    /**
     * Gets the duration of the sound data.
     *
     * @return duration, The duration of the sound data in seconds.
     * @link [SoundData:getDuration](https://love2d.org/wiki/SoundData:getDuration)
     */
    getDuration(): number;

    /**
     * Gets the sample at the specified position.
     *
     * @param i An integer value specifying the position of the sample (0 points to the first sample).
     * @return sample, The normalized sample (range -1.0 to 1.0).
     * @link [SoundData:getSample](https://love2d.org/wiki/SoundData:getSample)
     */
    getSample(i: number): number;

    /**
     * Returns the number of samples per channel of the SoundData.
     *
     * @return count, Total number of samples.
     * @link [SoundData:getSampleCount](https://love2d.org/wiki/SoundData:getSampleCount)
     */
    getSampleCount(): number;

    /**
     * Returns the sample rate of the SoundData.
     *
     * @return rate, Number of samples per second.
     * @link [SoundData:getSampleRate](https://love2d.org/wiki/SoundData:getSampleRate)
     */
    getSampleRate(): number;

    /**
     * Sets the sample at the specified position.
     *
     * @param i The position of the sample (0 means first sample).
     * @param sample A normalized sample (range -1.0 to 1.0).
     * @link [SoundData:setSample](https://love2d.org/wiki/SoundData:setSample)
     */
    setSample(i: number, sample: number): void;
  }
}
