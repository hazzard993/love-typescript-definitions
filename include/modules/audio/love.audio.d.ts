declare namespace love {

	/**
	 * Provides an interface to create noise with the user's speakers.
	 * @link [audio](https://love2d.org/wiki/audio)
	 */
	export namespace audio {

		/**
		 * Gets a list of the names of the currently enabled effects.
		 * @return {string[]} effects, The list of the names of the currently enabled effects.
		 * @link [love.audio.getActiveEffects](https://love2d.org/wiki/love.audio.getActiveEffects)
		 */
		export function getActiveEffects(): string[];

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
		 * Gets the settings associated with an effect.
		 * @param name The name of the effect.
		 * @link [love.audio.getEffect](https://love2d.org/wiki/love.audio.getEffect)
		 */
		export function getEffect(name: EffectType): any;
		export function getEffect(name: "chorus"): {
			waveform: EffectWaveform;
			phase: number;
			rate: number;
			depth: number;
			feedback: number;
			delay: number;
		};
		export function getEffect(name: "compressor"): {
			enable: boolean;
		};
		export function getEffect(name: "distortion"): {
			gain: number;
			edge: number;
			lowcut: number;
			center: number;
			bandwidth: number;
		};
		export function getEffect(name: "echo"): {
			delay: number;
			tapdelay: number;
			damping: number;
			feedback: number;
			spread: number;
		};
		export function getEffect(name: "equalizer"): {
			lowgain: number;
			lowcut: number;
			lowmidgain: number;
			lowmidfrequency: number;
			lowmidbandwidth: number;
			highmidgain: number;
			highmidfrequency: number;
			highmidbandwidth: number;
			highgain: number;
			highcut: number;
		};
		export function getEffect(name: "flanger"): {
			phase: number;
			rate: number;
			depth: number;
			feedback: number;
			delay: number;
		};
		export function getEffect(name: "reverb"): {
			gain: number;
			highgain: number;
			density: number;
			diffusion: number;
			decaytime: number;
			decayhighratio: number;
			earlygain: number;
			earlydelay: number;
			lategain: number;
			latedelay: number;
			roomrolloff: number;
			airabsorption: number;
			highlimiit: boolean;
		};
		export function getEffect(name: "ringmodulator"): {
			waveform: EffectWaveform;
			frequency: number;
			highcut: number;
		};

		/**
		 * Gets the maximum number of active effects supported by the system.
		 * @returns {number} maximum, The maximum number of active effects.
		 * @link [love.audio.getMaxSceneEffects](https://love2d.org/wiki/love.audio.getMaxSceneEffects)
		 */
		export function getMaxSceneEffects(): number;

		/**
		 * Gets the maximum number of active Effects in a single Source object, that the system can support.
		 * @return {number} maximum, The maximum number of active Effects per Source.
		 * @link [love.audio.getMaxSourceEffects](https://love2d.org/wiki/love.audio.getMaxSourceEffects)
		 */
		export function getMaxSourceEffects(): number;

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
		 * Gets a list of RecordingDevices on the system.
		 * @return {RecordingDevice[]} devices, The list of connected recording devices.
		 * @link [love.audio.getRecordingDevices](https://love2d.org/wiki/love.audio.getRecordingDevices)
		 */
		export function getRecordingDevices(): RecordingDevice[];

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
		 * Gets whether audio effects are supported in the system.
		 * @return {boolean} supported, True if effects are supported, false otherwise.
		 * @link [love.audio.isEffectsSupported](https://love2d.org/wiki/love.audio.isEffectsSupported)
		 */
		export function isEffectsSupported(): boolean;

		/**
		 * Creates a new Source usable for real-time generated sound playback with Source:queue.
		 * @param samplerate Number of samples per second when playing.
		 * @param bitdepth Bits per sample (8 or 16).
		 * @param channels 1 for mono or 2 for stereo.
		 * @param buffercount The number of buffers that can be queued up at any given time with Source:queue. Cannot be greater than 64. A sensible default (~8) is chosen if no value is specified. (Default 0)
		 * @return {Source} source, The new Source usable with Source:queue.
		 * @link [love.audio.newQueueableSource](https://love2d.org/wiki/love.audio.newQueueableSource)
		 */
		export function newQueueableSource(samplerate: number, bitdepth: number, channels: number, buffercount?: number): Source;

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
		 * Defines an effect that can be applied to a Source.
		 * @return {boolean} success, Whether the effect was successfully created.
		 * @link [love.audio.setEffect](https://love2d.org/wiki/love.audio.setEffect)
		 */
		export function setEffect(name: string, settings: object): boolean;
		export function setEffect(name: "chorus", settings: {
			waveform: EffectWaveform;
			phase: number;
			rate: number;
			depth: number;
			feedback: number;
			delay: number;
		}): boolean;
		export function setEffect(name: "compressor", settings: {
			enable: boolean;
		}): boolean;
		export function setEffect(name: "distortion", settings: {
			gain: number;
			edge: number;
			lowcut: number;
			center: number;
			bandwidth: number;
		}): boolean;
		export function setEffect(name: "echo", settings: {
			delay: number;
			tapdelay: number;
			damping: number;
			feedback: number;
			spread: number;
		}): boolean;
		export function setEffect(name: "equalizer", settings: {
			lowgain: number;
			lowcut: number;
			lowmidgain: number;
			lowmidfrequency: number;
			lowmidbandwidth: number;
			highmidgain: number;
			highmidfrequency: number;
			highmidbandwidth: number;
			highgain: number;
			highcut: number;
		}): boolean;
		export function setEffect(name: "flanger", settings: {
			phase: number;
			rate: number;
			depth: number;
			feedback: number;
			delay: number;
		}): boolean;
		export function setEffect(name: "reverb", settings: {
			gain: number;
			highgain: number;
			density: number;
			diffusion: number;
			decaytime: number;
			decayhighratio: number;
			earlygain: number;
			earlydelay: number;
			lategain: number;
			latedelay: number;
			roomrolloff: number;
			airabsorption: number;
			highlimiit: boolean;
		}): boolean;
		export function setEffect(name: "ringmodulator", settings: {
			waveform: EffectWaveform;
			frequency: number;
			highcut: number;
		}): boolean;

		/**
		 * Sets whether the system should mix the audio with the system's audio.
		 * @param mix True to enable mixing, false to disable it.
		 * @return {boolean} success, True if the change succeeded, false otherwise.
		 * @link [love.audio.setMixWithSystem](https://love2d.org/wiki/love.audio.setMixWithSystem)
		 */
		export function setMixWithSystem(mix: boolean): boolean;

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
