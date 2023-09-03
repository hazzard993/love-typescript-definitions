declare module "love.graphics" {
  import { Source } from "love.audio";
  import { VideoStream } from "love.video";

  /**
   * A drawable video.
   * @link [Video](https://love2d.org/wiki/Video)
   */
  interface Video extends Drawable<"Video"> {
    /**
     * Gets the width and height of the Video in pixels.
     *
     * @return width, The width of the Video.
     * @return height, The height of the video.
     * @link [Video:getDimensions](https://love2d.org/wiki/Video:getDimensions)
     * @since 0.10.0
     */
    getDimensions(): LuaMultiReturn<[width: number, height: number]>;

    /**
     * Gets the scaling filters used when drawing the Video.
     *
     * @return min, The filter mode used when scaling the Video down.
     * @return mag, The filter mode used when scaling the Video up.
     * @return anisotropy, Maximum amount of anisotropic filtering used.
     * @link [Video:getFilter](https://love2d.org/wiki/Video:getFilter)
     * @since 0.10.0
     */
    getFilter(): LuaMultiReturn<
      [min: FilterMode, mag: FilterMode, anisotropy: number]
    >;

    /**
     * Gets the height of the Video in pixels.
     *
     * @return height, The height of the Video.
     * @link [Video:getHeight](https://love2d.org/wiki/Video:getHeight)
     * @since 0.10.0
     */
    getHeight(): number;

    /**
     * Gets the audio Source used for playing back the video's audio. May return _nil/undefined_
     * if the video has no audio, or if Video:setSource is called with a _nil/undefined_ argument.
     *
     * @return source, The audio Source used for audio playback, or _nil/undefined_ if the video has no audio.
     * @link [Video:getSource](https://love2d.org/wiki/Video:getSource)
     * @since 0.10.0
     */
    getSource(): Source | undefined;

    /**
     * Gets the VideoStream object used for decoding and controlling the video.
     *
     * @return stream, The VideoStream used for decoding and controlling the video.
     * @link [Video:getStream](https://love2d.org/wiki/Video:getStream)
     * @since 0.10.0
     */
    getStream(): VideoStream;

    /**
     * Gets the width of the Video in pixels.
     *
     * @return width, The width of the Video.
     * @link [Video:getWidth](https://love2d.org/wiki/Video:getWidth)
     * @since 0.10.0
     */
    getWidth(): number;

    /**
     * Gets whether the Video is currently playing.
     *
     * @return playing, Whether the video is playing.
     * @link [Video:isPlaying](https://love2d.org/wiki/Video:isPlaying)
     * @since 0.10.0
     */
    isPlaying(): boolean;

    /**
     * Pauses the Video.
     *
     * @link [Video:pause](https://love2d.org/wiki/Video:pause)
     * @since 0.10.0
     */
    pause(): void;

    /**
     * Starts playing the Video. In order for the video to appear onscreen it must be
     * drawn with love.graphics.draw.
     *
     * @link [Video:play](https://love2d.org/wiki/Video:play)
     * @since 0.10.0
     */
    play(): void;

    /**
     * Rewinds the Video to the beginning.
     *
     * @link [Video:rewind](https://love2d.org/wiki/Video:rewind)
     * @since 0.10.0
     */
    rewind(): void;

    /**
     * Sets the current playback position of the Video.
     *
     * @param offset The time in seconds since the beginning of the Video.
     * @link [Video:seek](https://love2d.org/wiki/Video:seek)
     * @since 0.10.0
     */
    seek(offset: number): void;

    /**
     * Sets the scaling filters used when drawing the Video.
     *
     * @param min The filter mode used when scaling the Video down.
     * @param mag The filter mode used when scaling the Video up.
     * @param anisotropy Maximum amount of anisotropic filtering used.
     * @link [Video:setFilter](https://love2d.org/wiki/Video:setFilter)
     * @since 0.10.0
     */
    setFilter(min: FilterMode, mag: FilterMode, anisotropy?: number): void;

    /**
     * Sets the audio Source used for playing back the video's audio. The audio Source
     * also controls playback speed and synchronization.
     *
     * @param source The audio Source used for audio playback. Leave blank to disable audio synchronization.
     * @link [Video:setSource](https://love2d.org/wiki/Video:setSource)
     * @since 0.10.0
     */
    setSource(source?: Source): void;

    /**
     * Gets the current playback position of the Video.
     *
     * @param seconds The time in seconds since the beginning of the Video.
     * @link [Video:tell](https://love2d.org/wiki/Video:tell)
     * @since 0.10.0
     */
    tell(seconds: number): void;
  }
}
