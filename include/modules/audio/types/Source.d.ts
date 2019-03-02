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
	 * Sets the direction vector of the Source. A zero vector makes the source
	 * non-directional.
	 *
	 * @param x The X part of the direction vector.
	 * @param y The Y part of the direction vector.
	 * @param z The Z part of the direction vector.
	 */
    setDirection(x: number, y: number, z: number): void;

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
