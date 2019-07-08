/**
 * @link [SoundData](https://love2d.org/wiki/SoundData)
 */
declare interface SoundData extends Data {
    /**
     * Returns the number of bits per sample.
     *
     * @return bits, Either 8 or 16.
     */
    getBitDepth(): number;

    /**
     * Returns the number of channels in the stream.
     *
     * @return channels, 1 for mono, 2 for stereo.
     */
    getChannelCount(): number;

    /**
     * Returns the number of channels in the stream.
     * @returns channels, 1 for mono, 2 for stereo.
     * @link [SoundData:getChannels](https://love2d.org/wiki/SoundData:getChannels)
     * @deprecated since 11.0. This function has been renamed to SoundData:getChannelCount.
     */
    getChannels(): number;

    /**
     * Gets the duration of the sound data.
     *
     * @return duration, The duration of the sound data in seconds.
     */
    getDuration(): number;

    /**
     * Gets the sample at the specified position.
     *
     * @param i An integer value specifying the position of the sample (0 points to the first sample).
     * @return sample, The normalized sample (range -1.0 to 1.0).
     */
    getSample(i: number): number;

    /**
     * Returns the number of samples per channel of the SoundData.
     *
     * @return count, Total number of samples.
     */
    getSampleCount(): number;

    /**
     * Returns the sample rate of the SoundData.
     *
     * @return rate, Number of samples per second.
     */
    getSampleRate(): number;

    /**
     * Sets the sample at the specified position.
     *
     * @param i The position of the sample (0 means first sample).
     * @param sample A normalized sample (range -1.0 to 1.0).
     */
    setSample(i: number, sample: number): void;

}
