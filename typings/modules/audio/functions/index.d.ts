declare module "love.audio" {
    import { Decoder, SoundData } from "love.sound";
    import { File, FileData } from "love.filesystem";
    /**
     * Gets a list of the names of the currently enabled effects.
     * @return effects, The list of the names of the currently enabled effects.
     * @link [love.audio.getActiveEffects](https://love2d.org/wiki/love.audio.getActiveEffects)
     * @since 11.0
     */
    export function getActiveEffects(): Array<string>;

    /**
     * Gets the current number of simultaneously playing sources.
     * @return count, The current number of simultaneously playing sources.
     * @link [love.audio.getActiveSourceCount](https://love2d.org/wiki/love.audio.getActiveSourceCount)
     * @since 11.0
     */
    export function getActiveSourceCount(): number;

    /**
     * Returns the distance attenuation model.
     * @return model, The current distance model. The default is `"inverseclamped"`.
     * @link [love.audio.getDistanceModel](https://love2d.org/wiki/love.audio.getDistanceModel)
     * @since 0.8.0
     */
    export function getDistanceModel(): DistanceModel;

    /**
     * Gets the current global scale factor for velocity-based doppler effects.
     * @return scale, The current doppler scale factor. Default is `1`.
     * @link [love.audio.getDopplerScale](https://love2d.org/wiki/love.audio.getDopplerScale)
     * @since 0.9.2
     */
    export function getDopplerScale(): number;

    /**
     * Gets the settings associated with an effect.
     * @param name The name of the effect.
     * @return settings, The settings associated with the effect or _nil_.
     * @link [love.audio.getEffect](https://love2d.org/wiki/love.audio.getEffect)
     * @since 11.0
     */
    export function getEffect(name: string): EffectSettings | undefined;

    /**
     * Gets the maximum number of active effects supported by the system.
     * @returns `maximum` The maximum number of active effects.
     * @link [love.audio.getMaxSceneEffects](https://love2d.org/wiki/love.audio.getMaxSceneEffects)
     * @since 11.0
     */
    export function getMaxSceneEffects(): number;

    /**
     * Gets the maximum number of active Effects in a single Source object, that the system can support.
     * @return maximum, The maximum number of active Effects per Source.
     * @link [love.audio.getMaxSourceEffects](https://love2d.org/wiki/love.audio.getMaxSourceEffects)
     * @since 11.0
     */
    export function getMaxSourceEffects(): number;

    /**
     * Returns the orientation of the listener.
     * @return fx, The X component of the forward vector of the listener orientation.
     * @return fy, The Y component of the forward vector of the listener orientation.
     * @return fz, The Z component of the forward vector of the listener orientation.
     * @return ux, The X component of the up vector of the listener orientation.
     * @return uy, The Y component of the up vector of the listener orientation.
     * @return uz, The Z component of the up vector of the listener orientation.
     * @tupleReturn
     * @link [love.audio.getOrientation](https://love2d.org/wiki/love.audio.getOrientation)
     */
    export function getOrientation(): [number, number, number, number, number, number];

    /**
     * Returns the position of the listener.
     * @return x, The X position of the listener.
     * @return y, The Y position of the listener.
     * @return z, The Z position of the listener.
     * @tupleReturn
     * @link [love.audio.getPosition](https://love2d.org/wiki/love.audio.getPosition)
     */
    export function getPosition(): [number, number, number];

    /**
     * Gets a list of RecordingDevices on the system.
     * @return devices, The list of connected recording devices.
     * @link [love.audio.getRecordingDevices](https://love2d.org/wiki/love.audio.getRecordingDevices)
     * @since 11.0
     */
    export function getRecordingDevices(): Array<RecordingDevice>;

    /**
     * Returns the velocity of the listener.
     * @return x, The X velocity of the listener.
     * @return y, The Y velocity of the listener.
     * @return z, The Z velocity of the listener.
     * @tupleReturn
     * @link [love.audio.getVelocity](https://love2d.org/wiki/love.audio.getVelocity)
     */
    export function getVelocity(): [number, number, number];

    /**
     * Returns the master volume.
     * @return volume, The current master volume.
     * @link [love.audio.getVolume](https://love2d.org/wiki/love.audio.getVolume)
     */
    export function getVolume(): number;

    /**
     * Gets whether audio effects are supported in the system.
     * @return supported, `true` if effects are supported, `false` otherwise.
     * @link [love.audio.isEffectsSupported](https://love2d.org/wiki/love.audio.isEffectsSupported)
     * @since 11.0
     */
    export function isEffectsSupported(): boolean;

    /**
     * Creates a new Source usable for real-time generated sound playback with [Source:queue](https://love2d.org/wiki/Source:queue).
     * @param samplerate Number of samples per second when playing.
     * @param bitdepth Bits per sample (`8` or `16`).
     * @param channels `1` for mono or `2` for stereo.
     * @param buffercount The number of buffers that can be queued up at any given time with Source:queue. Cannot be greater than `64`. A sensible default (`~8`) is chosen if no value is specified. (Default `0`)
     * @return source, The new Source usable with [Source:queue](https://love2d.org/wiki/Source:queue).
     * @link [love.audio.newQueueableSource](https://love2d.org/wiki/love.audio.newQueueableSource)
     * @since 11.0
     */
    export function newQueueableSource(
        samplerate: number,
        bitdepth: 8 | 16,
        channels: 1 | 2,
        buffercount?: number
    ): Source;

    /**
     * Creates a new Source.
     * @param source filepath to audio file, File to audio file, Decoder or FileData from an audio file.
     * @param type Streaming or static source.
     * @return source, A new Source that can play the specified audio.
     * @link [love.audio.newSource](https://love2d.org/wiki/love.audio.newSource)
     */
    export function newSource(source: string | File | Decoder | FileData, type: SourceType): Source;
    export function newSource(data: SoundData): Source;

    /**
     * Pauses all currently active Sources and returns them.
     * @return sources, A table containing a list of Sources that were paused by this call.
     * @link [love.audio.pause](https://love2d.org/wiki/love.audio.pause)
     */
    export function pause(): Array<Source>;

    /**
     * Pauses the given Sources.
     * @param sources The sources on which to pause the playback.
     * @link [love.audio.pause](https://love2d.org/wiki/love.audio.pause)
     */
    export function pause(...sources: Array<Source>): void;
    export function pause(sources: Array<Source>): void;

    /**
     * Plays the specified Sources.
     * @param sources The list of sources to play.
     * @link [love.audio.play](https://love2d.org/wiki/love.audio.play)
     */
    export function play(...sources: Array<Source>): void;
    export function play(sources: Array<Source>): void;

    /**
     * Sets the distance attenuation model.
     * @param model The new distance model.
     * @link [love.audio.setDistanceModel](https://love2d.org/wiki/love.audio.setDistanceModel)
     * @since 0.8.0
     */
    export function setDistanceModel(model: DistanceModel): void;

    /**
     * Sets a global scale factor for velocity-based doppler effects.
     *
     * The default scale value is `1`.
     * @param scale The new doppler scale factor. The scale must be greater than `0`.
     * @link [love.audio.setDopplerScale](https://love2d.org/wiki/love.audio.setDopplerScale)
     * @since 0.9.2
     */
    export function setDopplerScale(scale: number): void;

    /**
     * Defines an effect that can be applied to a Source.
     * @param name The name of the effect.
     * @param settings The settings to use for this effect.
     * @return success, Whether the effect was successfully created.
     * @link [love.audio.setEffect](https://love2d.org/wiki/love.audio.setEffect)
     * @since 11.0
     */
    export function setEffect(name: string, settings: EffectSettings): boolean;

    /**
     * Defines an effect that can be applied to a Source.
     * @param name The name of the effect.
     * @param enabled If `false` and the given effect name was previously set, disables the effect. (Default `true`)
     * @return success, Whether the effect was successfully disabled.
     * @link [love.audio.setEffect](https://love2d.org/wiki/love.audio.setEffect)
     * @since 11.0
     */
    export function setEffect(name: string, enabled?: boolean): boolean;

    /**
     * Sets whether the system should mix the audio with the system's audio.
     * @param mix `true` to enable mixing, `false` to disable it.
     * @return success, `true` if the change succeeded, `false` otherwise.
     * @link [love.audio.setMixWithSystem](https://love2d.org/wiki/love.audio.setMixWithSystem)
     * @since 11.0
     */
    export function setMixWithSystem(mix: boolean): boolean;

    /**
     * Sets the orientation of the listener.
     * @param fx The X component of the forward vector of the listener orientation.
     * @param fy The Y component of the forward vector of the listener orientation.
     * @param fz The Z component of the forward vector of the listener orientation.
     * @param ux The X component of the up vector of the listener orientation.
     * @param uy The Y component of the up vector of the listener orientation.
     * @param uz The Z component of the up vector of the listener orientation.
     * @link [love.audio.setOrientation](https://love2d.org/wiki/love.audio.setOrientation)
     */
    export function setOrientation(fx: number, fy: number, fz: number, ux: number, uy: number, uz: number): void;

    /**
     * Sets the position of the listener, which determines how sounds play.
     * @param x The X position of the listener.
     * @param y The Y position of the listener.
     * @param z The Z position of the listener.
     * @link [love.audio.setPosition](https://love2d.org/wiki/love.audio.setPosition)
     */
    export function setPosition(x: number, y: number, z: number): void;

    /**
     * Sets the velocity of the listener.
     * @param x The X velocity of the listener.
     * @param y The Y velocity of the listener.
     * @param z The Z velocity of the listener.
     * @link [love.audio.setVelocity](https://love2d.org/wiki/love.audio.setVelocity)
     */
    export function setVelocity(x: number, y: number, z: number): void;

    /**
     * Sets the master volume.
     * @param volume `1.0` is max and `0.0` is off.
     * @link [love.audio.setVolume](https://love2d.org/wiki/love.audio.setVolume)
     */
    export function setVolume(volume: number): void;

    /**
     * Stops currently played sources.
     * @link [love.audio.stop](https://love2d.org/wiki/love.audio.stop)
     */
    export function stop(): void;

    /**
     * Simultaneously stops all given Sources.
     * @param sources The list of sources to stop
     * @link [love.audio.stop](https://love2d.org/wiki/love.audio.stop)
     */
    export function stop(...sources: Array<Source>): void;
    export function stop(sources: Array<Source>): void;
}
