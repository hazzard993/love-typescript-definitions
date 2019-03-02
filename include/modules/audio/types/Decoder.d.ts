/**
 * @link [Decoder](https://love2d.org/wiki/Decoder)
 */
declare interface Decoder extends Object {

	/**
	 * Decodes the audio and returns a SoundData object containing the decoded audio data.
	 * @returns {SoundData} soundData, Decoded audio data.
	 * @link [Decoder:decode](https://love2d.org/wiki/Decoder:decode)
	 * @since 11.0
	 */
	decode(): SoundData;

	/**
	 * Returns the number of bits per sample.
	 *
	 * @return {number} bitDepth, Either 8 or 16.
	 */
    getBitDepth(): number;

	/**
	 * Returns the number of channels in the stream.
	 *
	 * @return {number} channels, 1 for mono, 2 for stereo.
	 */
    getChannelCount(): number;

	/**
	 * Gets the duration of the sound file. It may not always be sample-accurate, and
	 * it may return -1 if the duration cannot be determined at all.
	 *
	 * @return {number} duration, The duration of the sound file in seconds, or -1 if it cannot be determined.
	 */
    getDuration(): number;

	/**
	 * Returns the sample rate of the Decoder.
	 *
	 * @return {number} rate, Number of samples per second.
	 */
    getSampleRate(): number;

}