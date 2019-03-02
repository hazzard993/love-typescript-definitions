declare namespace love {

	/**
	 * Provides an interface to create noise with the user's speakers.
	 * @link [audio](https://love2d.org/wiki/audio)
	 */
	export namespace audio {
		/**
		 * Gets the current number of simultaneously playing sources.
		 *
		 * @return {number} count, The current number of simultaneously playing sources.
		 */
		export function getActiveSourceCount(): number;

		/**
		 * Returns the distance attenuation model.
		 *
		 * @return {DistanceModel} model, The current distance model. The default is 'inverseclamped'.
		 */
		export function getDistanceModel(): DistanceModel;

		/**
		 * Gets the current global scale factor for velocity-based doppler effects.
		 *
		 * @return {number} scale, The current doppler scale factor.
		 */
		export function getDopplerScale(): number;

		/**
		 * Returns the number of sources which are currently playing or paused.
		 *
		 * @return {number} numSources, The number of sources which are currently playing or paused.
		 */
		export function getSourceCount(): number;

		/**
		 * Returns the orientation of the listener.
		 *
		 * @return {number} fx, The X component of the forward vector of the listener orientation.
		 * @return {number} fy, The Y component of the forward vector of the listener orientation.
		 * @return {number} fz, The Z component of the forward vector of the listener orientation.
		 * @return {number} ux, The X component of the up vector of the listener orientation.
		 * @return {number} uy, The Y component of the up vector of the listener orientation.
		 * @return {number} uz, The Z component of the up vector of the listener orientation.
		 */
		/** @tupleReturn */
		export function getOrientation(): [number, number, number, number, number, number];

		/**
		 * Returns the position of the listener.
		 *
		 * @return {number} x, The X position of the listener.
		 * @return {number} y, The Y position of the listener.
		 * @return {number} z, The Z position of the listener.
		 */
		/** @tupleReturn */
		export function getPosition(): [number, number, number];

		/**
		 * Returns the velocity of the listener.
		 *
		 * @return {number} x, The X velocity of the listener.
		 * @return {number} y, The Y velocity of the listener.
		 * @return {number} z, The Z velocity of the listener.
		 */
		/** @tupleReturn */
		export function getVelocity(): [number, number, number];

		/**
		 * Returns the master volume.
		 *
		 * @return {number} volume, The current master volume.
		 */
		export function getVolume(): number;

		/**
		 * Creates a new Source from a file or SoundData. Sources created from SoundData
		 * are always static.
		 *
		 * @param filename The filepath to create a Source from.
		 * @param type Streaming or static source.
		 * @return {Source} source, A new Source that can play the specified audio.
		 */
		export function newSource(filename: string, type?: SourceType): Source;

		/**
		 * Creates a new Source from a file or SoundData. Sources created from SoundData
		 * are always static.
		 *
		 * @param file A File pointing to an audio file.
		 * @param type Streaming or static source.
		 * @return {Source} source, A new Source that can play the specified audio.
		 */
		export function newSource(file: File, type?: SourceType): Source;

		/**
		 * Creates a new Source from a file or SoundData. Sources created from SoundData
		 * are always static.
		 *
		 * @param decoder The Decoder to create a Source from.
		 * @param type Streaming or static source.
		 * @return {Source} source, A new Source that can play the specified audio.
		 */
		export function newSource(decoder: Decoder, type?: SourceType): Source;

		/**
		 * Creates a new Source from a file or SoundData. Sources created from SoundData
		 * are always static.
		 *
		 * @param soundData The SoundData to create a Source from.
		 * @return {Source} source, A new Source that can play the specified audio. The SourceType of the returned audio is "static".
		 */
		export function newSource(soundData: SoundData): Source;

		/**
		 * Creates a new Source from a file or SoundData. Sources created from SoundData
		 * are always static.
		 *
		 * @param fileData The FileData to create a Source from.
		 * @return {Source} source, A new Source that can play the specified audio.
		 */
		export function newSource(fileData: FileData): Source;

		/**
		 * Pauses currently played Sources.
		 *
		 */
		export function pause(): void;

		/**
		 * Pauses currently played Sources.
		 *
		 * @param source The source on which to pause the playback.
		 */
		export function pause(source: Source): void;

		/**
		 * Plays the specified Source.
		 *
		 * @param source The Source to play.
		 */
		export function play(source: Source): void;

		/**
		 * Resumes all audio
		 *
		 */
		export function resume(): void;

		/**
		 * Resumes all audio
		 *
		 * @param source The source on which to resume the playback.
		 */
		export function resume(source: Source): void;

		/**
		 * Rewinds all playing audio.
		 *
		 */
		export function rewind(): void;

		/**
		 * Rewinds all playing audio.
		 *
		 * @param source The source to rewind.
		 */
		export function rewind(source: Source): void;

		/**
		 * Sets the distance attenuation model.
		 *
		 * @param model The new distance model.
		 */
		export function setDistanceModel(model: DistanceModel): void;

		/**
		 * Sets a global scale factor for velocity-based doppler effects. The default
		 * scale value is 1.
		 *
		 * @param scale The new doppler scale factor. The scale must be greater than 0.
		 */
		export function setDopplerScale(scale: number): void;

		/**
		 * Sets the orientation of the listener.
		 *
		 * @param fx The X component of the forward vector of the listener orientation.
		 * @param fy The Y component of the forward vector of the listener orientation.
		 * @param fz The Z component of the forward vector of the listener orientation.
		 * @param ux The X component of the up vector of the listener orientation.
		 * @param uy The Y component of the up vector of the listener orientation.
		 * @param uz The Z component of the up vector of the listener orientation.
		 */
		export function setOrientation(fx: number, fy: number, fz: number, ux: number, uy: number, uz: number): void;

		/**
		 * Sets the position of the listener, which determines how sounds play.
		 *
		 * @param x The X position of the listener.
		 * @param y The Y position of the listener.
		 * @param z The Z position of the listener.
		 */
		export function setPosition(x: number, y: number, z: number): void;

		/**
		 * Sets the velocity of the listener.
		 *
		 * @param x The X velocity of the listener.
		 * @param y The Y velocity of the listener.
		 * @param z The Z velocity of the listener.
		 */
		export function setVelocity(x: number, y: number, z: number): void;

		/**
		 * Sets the master volume.
		 *
		 * @param volume 1.0f is max and 0.0f is off.
		 */
		export function setVolume(volume: number): void;

		/**
		 * Stops currently played sources.
		 *
		 */
		export function stop(): void;

		/**
		 * Stops currently played sources.
		 *
		 * @param source The source on which to stop the playback.
		 */
		export function stop(source: Source): void;

	}

}
