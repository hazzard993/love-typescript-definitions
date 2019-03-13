/**
 * @link [Source](https://love2d.org/wiki/Source)
 */
declare interface Source extends Object {
    /**
     * Creates an identical copy of the Source in the stopped state.
     *
     *
     * Static Sources will use significantly less memory and take much less time to be
     * created if Source:clone is used to create them instead of love.audio.newSource,
     * so this method should be preferred when making multiple Sources which play the
     * same sound.
     *
     *
     * Cloned Sources inherit all the set-able state of the original Source, but they
     * are initialized stopped.
     *
     * @return {Source} source, The new identical copy of this Source.
     */
    clone(): Source;

    /**
     * Gets the amount of air absorption applied to the Source.
     * @return {number} amount, The amount of air absorption applied to the Source.
     * @link [Source:getAirAbsorption](https://love2d.org/wiki/Source:getAirAbsorption)
     */
    getAirAbsorption(): number;

    /**
     * Returns the reference and maximum distance of the source.
     *
     * @return {number} ref, The reference distance.
     * @return {number} max, The maximum distance.
     */
    /** @tupleReturn */
    getAttenuationDistances(): [number, number];

    /**
     * Gets the number of channels in the Source. Only 1-channel (mono) Sources can
     * use directional and positional effects.
     *
     * @return {number} channels, 1 for mono, 2 for stereo.
     */
    getChannelCount(): number;

    /**
     * Returns the number of channels in the stream.
     * @returns {number} channels, 1 for mono, 2 for stereo.
     * @link [Source:getChannels](https://love2d.org/wiki/Source:getChannels)
     * @deprecated since 11.0. This function has been renamed to Source:getChannelCount.
     */
    getChannels(): number;

    /**
     * Gets the Source's directional volume cones. Together with Source:setDirection,
     * the cone angles allow for the Source's volume to vary depending on its
     * direction.
     *
     * @return {number} innerAngle, The inner angle from the Source's direction, in radians. The Source will play at normal volume if the listener is inside the cone defined by this angle.
     * @return {number} outerAngle, The outer angle from the Source's direction, in radians. The Source will play at a volume between the normal and outer volumes, if the listener is in between the cones defined by the inner and outer angles.
     * @return {number} outerVolume, The Source's volume when the listener is outside both the inner and outer cone angles.
     */
    /** @tupleReturn */
    getCone(): [number, number, number];

    /**
     * Gets the direction of the Source.
     *
     * @return {number} x, The X part of the direction vector.
     * @return {number} y, The Y part of the direction vector.
     * @return {number} z, The Z part of the direction vector.
     */
    /** @tupleReturn */
    getDirection(): [number, number, number];

    /**
     * Gets the duration of the Source. For streaming Sources it may not always be
     * sample-accurate, and may return -1 if the duration cannot be determined at all.
     *
     * @param unit The time unit for the return value.
     * @return {number} duration, The duration of the Source, or -1 if it cannot be determined.
     */
    getDuration(unit?: TimeUnit): number;

    /**
     * Gets the filter settings associated to a specific effect.
     *
     * This function returns undefined if the effect was applied with no filter settings associated to it.
     * @param name The name of the effect.
     * @param filtersettings An optional empty table that will be filled with the filter settings.
     * @return filtersettings, The settings for the filter associated to this effect, or nil if the effect is not present in this Source or has no filter associated.
     * @link [Source:getEffect](https://love2d.org/wiki/Source:getEffect)
     */
    getEffect(name: string, filtersettings?: object): { volume: number, highgain: number, lowgain: number };

    /**
     * Gets the filter settings currently applied to the Source.
     * @return settings, The filter settings to use for this Source, or nil if the Source has no active filter.
     * @link [Source:getFilter](https://love2d.org/wiki/Source:getFilter)
     */
    getFilter(): FilterSettings;

    /**
     * Gets the number of free buffer slots in a queueable Source.
     * @return {number} buffers, How many more SoundData objects can be queued up.
     * @link [Source:getFreeBufferCount](https://love2d.org/wiki/Source:getFreeBufferCount)
     */
    getFreeBufferCount(): number;

    /**
     * Gets the current pitch of the Source.
     *
     * @return {number} pitch, The pitch, where 1.0 is normal.
     */
    getPitch(): number;

    /**
     * Gets the position of the Source.
     *
     * @return {number} x, The X position of the Source.
     * @return {number} y, The Y position of the Source.
     * @return {number} z, The Z position of the Source.
     */
    /** @tupleReturn */
    getPosition(): [number, number, number];

    /**
     * Returns the rolloff factor of the source.
     *
     * @return {number} rolloff, The rolloff factor.
     */
    getRolloff(): number;

    /**
     * Gets the type (static or stream) of the Source.
     *
     * @return {SourceType} sourcetype, The type of the source.
     */
    getType(): SourceType;

    /**
     * Gets the velocity of the Source.
     *
     * @return {number} x, The X part of the velocity vector.
     * @return {number} y, The Y part of the velocity vector.
     * @return {number} z, The Z part of the velocity vector.
     */
    /** @tupleReturn */
    getVelocity(): [number, number, number];

    /**
     * Gets the current volume of the Source.
     *
     * @return {number} volume, The volume of the Source, where 1.0 is normal volume.
     */
    getVolume(): number;

    /**
     * Returns the volume limits of the source.
     *
     * @return {number} min, The minimum volume.
     * @return {number} max, The maximum volume.
     */
    /** @tupleReturn */
    getVolumeLimits(): [number, number];

    /**
     * Returns whether the Source will loop.
     *
     * @return {boolean} loop, True if the Source will loop, false otherwise.
     */
    isLooping(): boolean;

    /**
     * Returns whether the Source is paused.
     *
     * @return {boolean} paused, True if the Source is paused, false otherwise.
     */
    isPaused(): boolean;

    /**
     * Returns whether the Source is playing.
     *
     * @return {boolean} playing, True if the Source is playing, false otherwise.
     */
    isPlaying(): boolean;

    /**
     * Gets whether the Source's position, velocity, direction, and cone angles are relative to the listener.
     * @returns {boolean} relative, True if the position, velocity, direction and cone angles are relative to the listener, false if they're absolute.
     * @link [Source:isRelative](https://love2d.org/wiki/Source:isRelative)
     */
    isRelative(): boolean;

    /**
     * Returns whether the Source is stopped.
     *
     * @return {boolean} stopped, True if the Source is stopped, false otherwise.
     */
    isStopped(): boolean;

    /**
     * Pauses the Source.
     *
     */
    pause(): void;

    /**
     * Starts playing the Source.
     *
     * @return {boolean} success, True if the Source started playing successfully, false otherwise.
     */
    play(): boolean;

    /**
     * Queues SoundData for playback in a queueable Source.
     *
     * This method requires the Source to be created via love.audio.newQueueableSource.
     * @param sounddata The data to queue. The SoundData's sample rate, bit depth, and channel count must match the Source's.
     * @return {boolean} success, True if the data was successfully queued for playback, false if there were no available buffers to use for queueing.
     * @link [Source:queue](https://love2d.org/wiki/Source:queue)
     */
    queue(sounddata: SoundData): boolean;

    /**
     * Resumes a paused Source.
     *
     */
    resume(): void;

    /**
     * Rewinds a Source.
     *
     */
    rewind(): void;

    /**
     * Sets the playing position of the Source.
     *
     * @param position The position to seek to.
     * @param unit The unit of the position value.
     */
    seek(position: number, unit?: TimeUnit): void;

    /**
     * Sets the amount of air absorption applied to the Source.
     * @param amount The amount of air absorption applied to the Source. Must be between 0 and 10.
     * @link [Source:setAirAbsorption](https://love2d.org/wiki/Source:setAirAbsorption)
     */
    setAirAbsorption(amount: number): void;

    /**
     * Sets the direction vector of the Source. A zero vector makes the source
     * non-directional.
     *
     * @param x The X part of the direction vector.
     * @param y The Y part of the direction vector.
     * @param z The Z part of the direction vector.
     */
    setDirection(x: number, y: number, z: number): void;

    /**
     * Applies an audio effect to the Source.
     * @param name The name of the effect previously set up with love.audio.setEffect.
     * @param enable If false and the given effect name was previously enabled on this Source, disables the effect.
     * @return {boolean} success, If false and the given effect name was previously enabled on this Source, disables the effect.
     * @link [Source:setEffect](https://love2d.org/wiki/Source:setEffect)
     */
    setEffect(name: string, enable?: boolean): boolean;

    /**
     * Applies an audio effect to the Source.
     * @param name The name of the effect previously set up with love.audio.setEffect.
     * @param filtersettings The filter settings to apply prior to the effect.
     * @return {boolean} success, Whether the effect and filter were successfully applied to this Source.
     * @link [Source:setEffect](https://love2d.org/wiki/Source:setEffect)
     */
    setEffect(name: string, filtersettings: FilterSettings): boolean;

    /**
     * Sets a low-pass, high-pass, or band-pass filter to apply when playing the Source.
     * @param settings The filter settings to use for this Source.
     * @return {boolean} success, Whether the filter was successfully applied to the Source.
     * @link [Source:setFilter](https://love2d.org/wiki/Source:setFilter)
     */
    setFilter(settings: FilterSettings): boolean;

    /**
     * Disables filtering on this Source.
     * @link [Source:setFilter](https://love2d.org/wiki/Source:setFilter)
     */
    setFilter(): void;

    /**
     * Sets the reference and maximum distance of the source.
     *
     * @param ref The new reference distance.
     * @param max The new maximum distance.
     */
    setAttenuationDistances(ref: number, max: number): void;

    /**
     * Sets the Source's directional volume cones. Together with Source:setDirection,
     * the cone angles allow for the Source's volume to vary depending on its
     * direction.
     *
     * @param innerAngle The inner angle from the Source's direction, in radians. The Source will play at normal volume if the listener is inside the cone defined by this angle.
     * @param outerAngle The outer angle from the Source's direction, in radians. The Source will play at a volume between the normal and outer volumes, if the listener is in between the cones defined by the inner and outer angles.
     * @param outerVolume The Source's volume when the listener is outside both the inner and outer cone angles.
     */
    setCone(innerAngle: number, outerAngle: number, outerVolume?: number): void;

    /**
     * Sets whether the Source should loop.
     *
     * @param loop True if the source should loop, false otherwise.
     */
    setLooping(loop: boolean): void;

    /**
     * Sets the pitch of the Source.
     *
     * @param pitch Calculated with regard to 1 being the base pitch. Each reduction by 50 percent equals a pitch shift of -12 semitones (one octave reduction). Each doubling equals a pitch shift of 12 semitones (one octave increase). Zero is not a legal value.
     */
    setPitch(pitch: number): void;

    /**
     * Sets the position of the Source.
     *
     * @param x The X position of the Source.
     * @param y The Y position of the Source.
     * @param z The Z position of the Source.
     */
    setPosition(x: number, y: number, z: number): void;

    /**
     * Sets whether the Source's position, velocity, direction, and cone angles are relative to the listener, or absolute.
     * @param enable True to make the position, velocity, direction and cone angles relative to the listener, false to make them absolute.
     * @link [Source:setRelative](https://love2d.org/wiki/Source:setRelative)
     */
    setRelative(enable?: boolean): void;

    /**
     * Sets the rolloff factor which affects the strength of the used distance
     * attenuation.
     *
     *
     * Extended information and detailed formulas can be found in the chapter "3.4.
     * Attenuation By Distance" of OpenAL 1.1 specification.
     *
     * @param rolloff The new rolloff factor.
     */
    setRolloff(rolloff: number): void;

    /**
     * Sets the velocity of the Source.
     *
     *
     * This does not change the position of the Source, but is used to calculate the
     * doppler effect.
     *
     * @param x The X part of the velocity vector.
     * @param y The Y part of the velocity vector.
     * @param z The Z part of the velocity vector.
     */
    setVelocity(x: number, y: number, z: number): void;

    /**
     * Sets the volume of the Source.
     *
     * @param volume The volume of the Source, where 1.0 is normal volume.
     */
    setVolume(volume: number): void;

    /**
     * Sets the volume limits of the source. The limits have to be numbers from 0 to
     * 1.
     *
     * @param min The minimum volume.
     * @param max The maximum volume.
     */
    setVolumeLimits(min: number, max: number): void;

    /**
     * Stops a Source.
     *
     */
    stop(): void;

    /**
     * Gets the currently playing position of the Source.
     *
     * @param unit The type of unit for the return value.
     * @return {number} position, The currently playing position of the Source.
     */
    tell(unit?: TimeUnit): number;

}
