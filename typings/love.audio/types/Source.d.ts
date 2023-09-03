declare module "love.audio" {
  import { Type } from "love";
  import { SoundData } from "love.sound";

  /**
   * Represents audio you can play back.
   *
   * Can be traversed in {@link TimeUnit TimeUnits}.
   *
   * @see {@link newSource}
   * @link [Source](https://love2d.org/wiki/Source)
   */
  interface Source extends Type<"Source"> {
    /**
     * Clones the source. The new source is stopped.
     *
     * @returns The new identical copy of this source.
     * @link [Source](https://love2d.org/wiki/Source)
     * @since 0.9.1
     */
    clone(): Source;

    /**
     * @returns The amount of air absorption applied to the Source.
     * @see {@link setAirAbsorption}
     * @link [Source:getAirAbsorption](https://love2d.org/wiki/Source:getAirAbsorption)
     * @since 11.2
     */
    getAirAbsorption(): number;

    /**
     * Gets the reference and maximum attenuation distances of the Source.
     *
     * @returns The reference distance and maximum distance.
     * @see {@link setAttenuationDistances}
     * @link [Source:getAttenuationDistances](https://love2d.org/wiki/Source:getAttenuationDistances)
     * @since 11.2
     */
    getAttenuationDistances(): LuaMultiReturn<[ref: number, max: number]>;

    /**
     * Gets the number of channels in the {@link Source}.
     *
     * Only 1-channel (mono) Sources can use directional and positional effects.
     *
     * @returns The number of channels in the source.
     * @link [Source:getChannelCount](https://love2d.org/wiki/Source:getChannelCount)
     * @since 11.0
     */
    getChannelCount(): number;

    /**
     * Returns the number of channels in the stream.
     *
     * Only 1-channel (mono) Sources can use directional and positional effects.
     *
     * @returns `channels` `1` for mono, `2` for stereo.
     * @link [Source:getChannels](https://love2d.org/wiki/Source:getChannels)
     * @since 0.9.0
     * @deprecated since 11.0. This export function has been renamed to [Source:getChannelCount](https://love2d.org/wiki/Source:getChannelCount).
     */
    getChannels(): number;

    /**
     * Gets the {@link Source Source's} directional volume cones.
     *
     * Together with {@link setDirection}, the cone angles allow for the Source's volume to vary depending on its direction.
     *
     * @returns The inner and outer angle, and volume.
     * @see {@link setCone}
     * @link [Source:getCone](https://love2d.org/wiki/Source:getCone)
     * @since 0.9.0
     */
    getCone(): LuaMultiReturn<
      [innerAngle: number, outerAngle: number, outerVolume: number]
    >;

    /**
     * Gets the direction of the {@link Source}.
     *
     * @returns The X, Y and Z parts of the direction vector.
     * @link [Source:getDirection](https://love2d.org/wiki/Source:getDirection)
     * @since 0.7.0
     */
    getDirection(): LuaMultiReturn<[x: number, y: number, z: number]>;

    /**
     * Gets the duration of the Source.
     *
     * For streaming Sources it may not always be sample-accurate, and may return `-1` if the duration cannot be determined at all.
     *
     * @param unit The time unit for the return value. (Default `seconds`)
     * @returns The duration of the Source, or `-1`.
     * @link [Source:getDuration](https://love2d.org/wiki/Source:getDuration)
     * @since 0.10.0
     */
    getDuration(unit?: TimeUnit): number;

    /**
     * Gets the filter settings associated to a specific effect.
     *
     * @param name The name of the effect.
     * @param filtersettings An optional empty table that will be filled with the filter settings.
     * @returns The settings for the filter associated to this effect.
     * @link [Source:getEffect](https://love2d.org/wiki/Source:getEffect)
     * @since 11.0
     */
    getEffect(
      name: string,
      filtersettings?: object,
    ): { volume: number; highgain: number; lowgain: number } | undefined;

    /**
     * Gets the filter settings currently applied to the {@link Source}.
     *
     * @returns The filter settings to use for this Source.
     * @link [Source:getFilter](https://love2d.org/wiki/Source:getFilter)
     * @since 11.0
     */
    getFilter(): FilterSettings | undefined;

    /**
     * Gets the number of free buffer slots in a queueable Source.
     *
     * @returns How many more {@link SoundData} objects can be queued up.
     * @link [Source:getFreeBufferCount](https://love2d.org/wiki/Source:getFreeBufferCount)
     * @since 11.0
     */
    getFreeBufferCount(): number;

    /**
     * @returns The pitch, where `1.0` is normal.
     * @link [Source:getPitch](https://love2d.org/wiki/Source:getPitch)
     */
    getPitch(): number;

    /**
     * @returns The X, Y and Z position of the Source.
     * @link [Source:getPosition](https://love2d.org/wiki/Source:getPosition)
     * @since 0.7.0
     */
    getPosition(): LuaMultiReturn<[x: number, y: number, z: number]>;

    /**
     * @returns The rolloff factor.
     * @link [Source:getRolloff](https://love2d.org/wiki/Source:getRolloff)
     * @since 0.8.0
     */
    getRolloff(): number;

    /**
     * @return The type of the source.
     * @link [Source:getType](https://love2d.org/wiki/Source:getType)
     * @since 0.10.0
     */
    getType(): SourceType;

    /**
     * @returns The X, Y and Z of the velocity vector.
     * @link [Source:getVelocity](https://love2d.org/wiki/Source:getVelocity)
     * @since 0.7.0
     */
    getVelocity(): LuaMultiReturn<[x: number, y: number, z: number]>;

    /**
     * @returns The volume of the Source, where 1.0 is normal volume.
     * @link [Source:getVolume](https://love2d.org/wiki/Source:getVolume)
     */
    getVolume(): number;

    /**
     * @returns The minimum followed by the maximum volume.
     * @link [Source:getVolumeLimits](https://love2d.org/wiki/Source:getVolumeLimits)
     * @since 0.8.0
     */
    getVolumeLimits(): LuaMultiReturn<[min: number, max: number]>;

    /**
     * Returns whether the Source will loop.
     *
     * @returns `true` if the Source will loop.
     * @link [Source:isLooping](https://love2d.org/wiki/Source:isLooping)
     */
    isLooping(): boolean;

    /**
     * Returns whether the Source is playing.
     *
     * @returns `true` if the Source is playing.
     * @link [Source:isPlaying](https://love2d.org/wiki/Source:isPlaying)
     * @since 0.9.0
     */
    isPlaying(): boolean;

    /**
     * Gets whether the Source's position, velocity, direction, and cone angles are relative to the listener.
     *
     * @returns `true` if the position, velocity, direction and cone angles are relative to the listener, `false` if they're absolute.
     * @link [Source:isRelative](https://love2d.org/wiki/Source:isRelative)
     * @since 0.9.0
     */
    isRelative(): boolean;

    /**
     * Pauses the Source.
     *
     * @link [Source:pause](https://love2d.org/wiki/Source:pause)
     * @since 0.7.0
     */
    pause(): void;

    /**
     * Starts playing the Source.
     *
     * @returns `true` if the Source started playing successfully.
     * @link [Source:play](https://love2d.org/wiki/Source:play)
     * @since 0.7.0
     */
    play(): boolean;

    /**
     * Queues SoundData for playback in a queueable Source.
     *
     * This method requires the Source to be created via {@link newQueueableSource}.
     *
     * @param soundData The data to queue. The SoundData's sample rate, bit depth, and channel count must match the Source's.
     * @return `true` if the data was successfully queued for playback, `false` if there were no available buffers to use for queueing.
     * @link [Source:queue](https://love2d.org/wiki/Source:queue)
     * @since 11.0
     */
    queue(soundData: SoundData): boolean;

    /**
     * Sets the playing position of the Source.
     *
     * @param position The position to seek to.
     * @param unit The unit of the position value. (Default `"seconds"`)
     * @link [Source:seek](https://love2d.org/wiki/Source:seek)
     * @since 0.8.0
     */
    seek(position: number, unit?: TimeUnit): void;

    /**
     * Sets the amount of air absorption applied to the Source.
     *
     * @param amount The amount of air absorption applied to the Source. Must be between `0` and `10`.
     * @link [Source:setAirAbsorption](https://love2d.org/wiki/Source:setAirAbsorption)
     * @since 11.2
     */
    setAirAbsorption(amount: number): void;

    /**
     * Sets the direction vector of the Source.
     *
     * A zero vector makes the source non-directional.
     *
     * @param x The X part of the direction vector.
     * @param y The Y part of the direction vector.
     * @param z The Z part of the direction vector.
     * @link [Source:setDirection](https://love2d.org/wiki/Source:setDirection)
     * @link 0.7.0
     */
    setDirection(x: number, y: number, z: number): void;

    /**
     * Applies an audio effect to the Source.
     *
     * @param name The name of the effect previously set up with {@link "love.audio".setEffect love.audio.setEffect}.
     * @param enable If `false` and the effect was enabled on this Source this disables the effect. (Default `true`)
     * @returns `true` if the effect was successfully applied to this Source.
     * @link [Source:setEffect](https://love2d.org/wiki/Source:setEffect)
     * @since 11.0
     */
    setEffect(name: string, enable?: boolean): boolean;

    /**
     * Applies an audio effect to the Source.
     *
     * @param name The name of the effect previously set up with {@link "love.audio".setEffect love.audio.setEffect}.
     * @param filterSettings The filter settings to apply prior to the effect.
     * @returns `true` if the effect and filter were successfully applied to this Source.
     * @link [Source:setEffect](https://love2d.org/wiki/Source:setEffect)
     * @since 11.0
     */
    setEffect(name: string, filterSettings: FilterSettings): boolean;

    /**
     * Sets a low-pass, high-pass, or band-pass filter to apply when playing the Source.
     *
     * @param settings The filter settings to use for this Source.
     * @returns `true` if the filter was successfully applied to the Source.
     * @link [Source:setFilter](https://love2d.org/wiki/Source:setFilter)
     * @since 11.0
     */
    setFilter(settings: FilterSettings): boolean;

    /**
     * Disables filtering on this Source.
     *
     * @link [Source:setFilter](https://love2d.org/wiki/Source:setFilter)
     * @since 11.0
     */
    setFilter(): void;

    /**
     * Sets the reference and maximum distance of the source.
     *
     * @param ref The new reference distance.
     * @param max The new maximum distance.
     * @link [Source:setAttenuationDistances](https://love2d.org/wiki/Source:setAttenuationDistances)
     * @since 0.9.0
     */
    setAttenuationDistances(ref: number, max: number): void;

    /**
     * Sets the Source's directional volume cones.
     *
     * Together with {@link setDirection}, the cone angles allow for the Source's volume to vary depending on its direction.
     *
     * @param innerAngle The inner angle from the Source's direction, in radians. The Source will play at normal volume if the listener is inside the cone defined by this angle.
     * @param outerAngle The outer angle from the Source's direction, in radians. The Source will play at a volume between the normal and outer volumes, if the listener is in between the cones defined by the inner and outer angles.
     * @param outerVolume The Source's volume when the listener is outside both the inner and outer cone angles. (Default `0`)
     * @link [Source:setCone](https://love2d.org/wiki/Source:setCone)
     * @since 0.9.0
     */
    setCone(innerAngle: number, outerAngle: number, outerVolume?: number): void;

    /**
     * Sets whether the Source should loop.
     *
     * @param loop `true` if the source should loop, `false` otherwise.
     * @link [Source:setLooping](https://love2d.org/wiki/Source:setLooping)
     */
    setLooping(loop: boolean): void;

    /**
     * Sets the pitch of the Source.
     * @param pitch Calculated with regard to `1` being the base pitch.
     *
     * Each reduction by 50 percent equals a pitch shift of `-12` semitones (one octave reduction).
     *
     * Each doubling equals a pitch shift of `12` semitones (one octave increase).
     *
     * `0` is not a legal value.
     * @link [Source:setPitch](https://love2d.org/wiki/Source:setPitch)
     */
    setPitch(pitch: number): void;

    /**
     * Sets the position of the Source.
     *
     * @param x The X position of the Source.
     * @param y The Y position of the Source.
     * @param z The Z position of the Source.
     * @link [Source:setPosition](https://love2d.org/wiki/Source:setPosition)
     * @since 0.7.0
     */
    setPosition(x: number, y: number, z: number): void;

    /**
     * Sets whether the Source's position, velocity, direction, and cone angles are relative to the listener, or absolute.
     *
     * @param enable `true` to make the position, velocity, direction and cone angles relative to the listener, `false` to make them absolute. (Default `false`)
     * @link [Source:setRelative](https://love2d.org/wiki/Source:setRelative)
     * @since 0.9.0
     */
    setRelative(enable?: boolean): void;

    /**
     * Sets the rolloff factor which affects the strength of the used distance attenuation.
     *
     * Extended information and detailed formulas can be found in the chapter "3.4. Attenuation By Distance" of [OpenAL 1.1 specification](https://www.openal.org/documentation/openal-1.1-specification.pdf).
     *
     * @param rolloff The new rolloff factor.
     * @link [Source:setRolloff](https://love2d.org/wiki/Source:setRolloff)
     * @since 0.8.0
     */
    setRolloff(rolloff: number): void;

    /**
     * Sets the velocity of the Source.
     *
     * This does not change the position of the Source, but is used to calculate the doppler effect.
     *
     * @param x The X part of the velocity vector.
     * @param y The Y part of the velocity vector.
     * @param z The Z part of the velocity vector.
     * @link [Source:setVelocity](https://love2d.org/wiki/Source:setVelocity)
     */
    setVelocity(x: number, y: number, z: number): void;

    /**
     * Sets the volume of the Source.
     *
     * @param volume The volume of the Source, where `1.0` is normal volume. Volume cannot be raised above `1.0`.
     * @link [Source:setVolume](https://love2d.org/wiki/Source:setVolume)
     */
    setVolume(volume: number): void;

    /**
     * Sets the volume limits of the source.
     *
     * The limits have to be numbers from `0` to `1`.
     *
     * @param min The minimum volume.
     * @param max The maximum volume.
     * @link [Source:setVolumeLimits](https://love2d.org/wiki/Source:setVolumeLimits)
     */
    setVolumeLimits(min: number, max: number): void;

    /**
     * Stops a Source.
     *
     * @link [Source:stop](https://love2d.org/wiki/Source:stop)
     * @since 0.7.0
     */
    stop(): void;

    /**
     * Gets the currently playing position of the Source.
     *
     * @param unit The type of unit for the return value. (Default `seconds`)
     * @returns The currently playing position of the Source.
     * @link [Source:tell](https://love2d.org/wiki/Source:tell)
     * @since 0.8.0
     */
    tell(unit?: TimeUnit): number;
  }
}
