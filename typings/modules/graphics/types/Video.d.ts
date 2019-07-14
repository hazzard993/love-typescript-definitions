/**
 * A drawable video.
 * @link [Video](https://love2d.org/wiki/Video)
 */
declare interface Video extends Drawable {
    /**
     * Gets the width and height of the Video in pixels.
     *
     * @return width, The width of the Video.
     * @return height, The height of the video.
     * @tupleReturn
     * @link [Video:getDimensions](https://love2d.org/wiki/Video:getDimensions)
     */
    getDimensions(): [number, number];

    /**
     * Gets the scaling filters used when drawing the Video.
     *
     * @return min, The filter mode used when scaling the Video down.
     * @return mag, The filter mode used when scaling the Video up.
     * @return anisotropy, Maximum amount of anisotropic filtering used.
     * @tupleReturn
     * @link [Video:getFilter](https://love2d.org/wiki/Video:getFilter)
     */
    getFilter(): [FilterMode, FilterMode, number];

    /**
     * Gets the height of the Video in pixels.
     *
     * @return height, The height of the Video.
     * @link [Video:getHeight](https://love2d.org/wiki/Video:getHeight)
     */
    getHeight(): number;

    /**
     * Gets the audio Source used for playing back the video's audio. May return _nil/null_
     * if the video has no audio, or if Video:setSource is called with a _nil/null_ argument.
     *
     * @return source, The audio Source used for audio playback, or _nil/null_ if the video has no audio.
     * @link [Video:getSource](https://love2d.org/wiki/Video:getSource)
     */
    getSource(): Source | null;

    /**
     * Gets the VideoStream object used for decoding and controlling the video.
     *
     * @return stream, The VideoStream used for decoding and controlling the video.
     * @link [Video:getStream](https://love2d.org/wiki/Video:getStream)
     */
    getStream(): VideoStream;

    /**
     * Gets the width of the Video in pixels.
     *
     * @return width, The width of the Video.
     * @link [Video:getWidth](https://love2d.org/wiki/Video:getWidth)
     */
    getWidth(): number;

    /**
     * Gets whether the Video is currently playing.
     *
     * @return playing, Whether the video is playing.
     * @link [Video:isPlaying](https://love2d.org/wiki/Video:isPlaying)
     */
    isPlaying(): boolean;

    /**
     * Pauses the Video.
     *
     * @link [Video:pause](https://love2d.org/wiki/Video:pause)
     */
    pause(): void;

    /**
     * Starts playing the Video. In order for the video to appear onscreen it must be
     * drawn with love.graphics.draw.
     *
     * @link [Video:play](https://love2d.org/wiki/Video:play)
     */
    play(): void;

    /**
     * Rewinds the Video to the beginning.
     *
     * @link [Video:rewind](https://love2d.org/wiki/Video:rewind)
     */
    rewind(): void;

    /**
     * Sets the current playback position of the Video.
     *
     * @param offset The time in seconds since the beginning of the Video.
     * @link [Video:seek](https://love2d.org/wiki/Video:seek)
     */
    seek(offset: number): void;

    /**
     * Sets the scaling filters used when drawing the Video.
     *
     * @param min The filter mode used when scaling the Video down.
     * @param mag The filter mode used when scaling the Video up.
     * @param anisotropy Maximum amount of anisotropic filtering used.
     * @link [Video:setFilter](https://love2d.org/wiki/Video:setFilter)
     */
    setFilter(min: FilterMode, mag: FilterMode, anisotropy?: number): void;

    /**
     * Sets the audio Source used for playing back the video's audio. The audio Source
     * also controls playback speed and synchronization.
     *
     * @param source The audio Source used for audio playback. Leave blank to disable audio synchronization.
     * @link [Video:setSource](https://love2d.org/wiki/Video:setSource)
     */
    setSource(source?: Source): void;

    /**
     * Gets the current playback position of the Video.
     *
     * @param seconds The time in seconds since the beginning of the Video.
     * @link [Video:tell](https://love2d.org/wiki/Video:tell)
     */
    tell(seconds: number): void;

}
