/**
 * A drawable video.
 * @link [Video](https://love2d.org/wiki/Video)
 */
declare interface Video extends Drawable {
	/**
	 * Gets the width and height of the Video in pixels.
	 *
	 * @return {number} width, The width of the Video.
	 * @return {number} height, The height of the video.
	 */
    /** @tupleReturn */
    getDimensions(): [number, number];

	/**
	 * Gets the scaling filters used when drawing the Video.
	 *
	 * @return {FilterMode} min, The filter mode used when scaling the Video down.
	 * @return {FilterMode} mag, The filter mode used when scaling the Video up.
	 * @return {number} anisotropy, Maximum amount of anisotropic filtering used.
	 */
    /** @tupleReturn */
    getFilter(): [FilterMode, FilterMode, number];

	/**
	 * Gets the height of the Video in pixels.
	 *
	 * @return {number} height, The height of the Video.
	 */
    getHeight(): number;

	/**
	 * Gets the audio Source used for playing back the video's audio. May return nil
	 * if the video has no audio, or if Video:setSource is called with a nil argument.
	 *
	 * @return {Source} source, The audio Source used for audio playback, or nil if the video has no audio.
	 */
    getSource(): Source;

	/**
	 * Gets the VideoStream object used for decoding and controlling the video.
	 *
	 * @return {VideoStream} stream, The VideoStream used for decoding and controlling the video.
	 */
    getStream(): VideoStream;

	/**
	 * Gets the width of the Video in pixels.
	 *
	 * @return {number} width, The width of the Video.
	 */
    getWidth(): number;

	/**
	 * Gets whether the Video is currently playing.
	 *
	 * @return {boolean} playing, Whether the video is playing.
	 */
    isPlaying(): boolean;

	/**
	 * Pauses the Video.
	 *
	 */
    pause(): void;

	/**
	 * Starts playing the Video. In order for the video to appear onscreen it must be
	 * drawn with love.graphics.draw.
	 *
	 */
    play(): void;

	/**
	 * Rewinds the Video to the beginning.
	 *
	 */
    rewind(): void;

	/**
	 * Sets the current playback position of the Video.
	 *
	 * @param offset The time in seconds since the beginning of the Video.
	 */
    seek(offset: number): void;

	/**
	 * Sets the scaling filters used when drawing the Video.
	 *
	 * @param min The filter mode used when scaling the Video down.
	 * @param mag The filter mode used when scaling the Video up.
	 * @param anisotropy Maximum amount of anisotropic filtering used.
	 */
    setFilter(min: FilterMode, mag: FilterMode, anisotropy?: number): void;

	/**
	 * Sets the audio Source used for playing back the video's audio. The audio Source
	 * also controls playback speed and synchronization.
	 *
	 * @param source The audio Source used for audio playback, or nil to disable audio synchronization.
	 */
    setSource(source?: Source): void;

	/**
	 * Gets the current playback position of the Video.
	 *
	 * @param seconds The time in seconds since the beginning of the Video.
	 */
    tell(seconds: number): void;

}
