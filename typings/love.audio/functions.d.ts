/**
 * Provides an interface to create noise with the user's speakers.
 *
 * | Type | Description |
 * | :- | :- |
 * | {@link Source} | Represents audio you can play back. |
 * | {@link RecordingDevice} | Represents an audio input device capable of recording sounds. |
 *
 * @noResolution
 * @noSelf
 * @link [love.audio](https://love2d.org/wiki/love.audio)
 */
declare module "love.audio" {
  import { File, FileData } from "love.filesystem";
  import { Decoder, SoundData } from "love.sound";

  /**
   * Gets a list of the names of the currently enabled effects.
   *
   * @returns The list of the names of the currently enabled effects.
   * @link [love.audio.getActiveEffects](https://love2d.org/wiki/love.audio.getActiveEffects)
   * @since 11.0
   */
  function getActiveEffects(): string[];

  /**
   * Gets the current number of simultaneously playing sources.
   *
   * @returns The current number of simultaneously playing sources.
   * @link [love.audio.getActiveSourceCount](https://love2d.org/wiki/love.audio.getActiveSourceCount)
   * @since 11.0
   */
  function getActiveSourceCount(): number;

  /**
   * Returns the distance attenuation model.
   *
   * @returns The current distance model. Default is `inverseclamped`.
   * @link [love.audio.getDistanceModel](https://love2d.org/wiki/love.audio.getDistanceModel)
   * @since 0.8.0
   */
  function getDistanceModel(): DistanceModel;

  /**
   * Gets the current global scale factor for velocity-based doppler effects.
   * @returns The current doppler scale factor. Default is `1`.
   * @link [love.audio.getDopplerScale](https://love2d.org/wiki/love.audio.getDopplerScale)
   * @since 0.9.2
   */
  function getDopplerScale(): number;

  /**
   * Gets the settings associated with an effect.
   *
   * @param name The name of the effect.
   * @returns The settings associated with the effect.
   * @link [love.audio.getEffect](https://love2d.org/wiki/love.audio.getEffect)
   * @since 11.0
   */
  function getEffect(name: string): EffectSettings | undefined;

  /**
   * Gets the maximum number of active effects supported by the system.
   *
   * @returns The maximum number of active effects.
   * @link [love.audio.getMaxSceneEffects](https://love2d.org/wiki/love.audio.getMaxSceneEffects)
   * @since 11.0
   */
  function getMaxSceneEffects(): number;

  /**
   * Gets the maximum number of active Effects in a single Source object, that the system can support.
   *
   * @returns The maximum number of active Effects per Source.
   * @link [love.audio.getMaxSourceEffects](https://love2d.org/wiki/love.audio.getMaxSourceEffects)
   * @since 11.0
   */
  function getMaxSourceEffects(): number;

  /**
   * Returns the orientation of the listener.
   *
   * ```ts
   * const [fx, fy, fz, ux, uy, uz] = love.audio.getOrientation();
   * ```
   *
   * @returns The X, Y and Z components of the Forward vector of the listener orientation and the Up vector of the listener orientation.
   * @link [love.audio.getOrientation](https://love2d.org/wiki/love.audio.getOrientation)
   */
  function getOrientation(): LuaMultiReturn<
    [fx: number, fy: number, fz: number, ux: number, uy: number, uz: number]
  >;

  /**
   * Returns the position of the listener. Only works for mono sources.
   *
   * @returns The X, Y and Z position of the listener.
   * @link [love.audio.getPosition](https://love2d.org/wiki/love.audio.getPosition)
   */
  function getPosition(): LuaMultiReturn<[x: number, y: number, z: number]>;

  /**
   * Gets a list of {@link RecordingDevice RecordingDevices} on the system.
   *
   * @return The list of connected recording devices.
   * @link [love.audio.getRecordingDevices](https://love2d.org/wiki/love.audio.getRecordingDevices)
   * @since 11.0
   */
  function getRecordingDevices(): RecordingDevice[];

  /**
   * Returns the velocity of the listener.
   *
   * @returns The X, Y and Z velocity of the listener.
   * @link [love.audio.getVelocity](https://love2d.org/wiki/love.audio.getVelocity)
   */
  function getVelocity(): LuaMultiReturn<[x: number, y: number, z: number]>;

  /**
   * Returns the master volume.
   *
   * @returns The current master volume.
   * @link [love.audio.getVolume](https://love2d.org/wiki/love.audio.getVolume)
   */
  function getVolume(): number;

  /**
   * Gets whether audio effects are supported in the system.
   *
   * @returns `true` if effects are supported.
   * @link [love.audio.isEffectsSupported](https://love2d.org/wiki/love.audio.isEffectsSupported)
   * @since 11.0
   */
  function isEffectsSupported(): boolean;

  /**
   * Creates a new Source usable for real-time generated sound playback with {@link Source.queue}.
   *
   * @param samplerate Number of samples per second when playing.
   * @param bitdepth Bits per sample (`8` or `16`).
   * @param channels `1` for mono or `2` for stereo.
   * @param buffercount The number of buffers that can be queued up at any given time with Source:queue. Cannot be greater than `64`. A sensible default (`~8`) is chosen if no value is specified. (Default `0`)
   * @returns The new Source usable with {@link Source.queue}.
   * @link [love.audio.newQueueableSource](https://love2d.org/wiki/love.audio.newQueueableSource)
   * @since 11.0
   */
  function newQueueableSource(
    samplerate: number,
    bitdepth: 8 | 16,
    channels: 1 | 2,
    buffercount?: number,
  ): Source;

  /**
   * Creates a new Source.
   *
   * @param source filepath to audio file, File to audio file, Decoder or FileData from an audio file.
   * @param type Streaming or static source.
   * @returns A new Source that can play the specified audio.
   * @link [love.audio.newSource](https://love2d.org/wiki/love.audio.newSource)
   */
  function newSource(
    source: string | File | Decoder | FileData,
    type: SourceType,
  ): Source;
  function newSource(data: SoundData): Source;

  /**
   * Pauses all currently active Sources and returns them.
   *
   * @returns A list of Sources that were paused by this call.
   * @link [love.audio.pause](https://love2d.org/wiki/love.audio.pause)
   */
  function pause(): Source[];

  /**
   * Pauses the given {@link Source Sources}.
   *
   * @param sources The sources on which to pause the playback.
   * @link [love.audio.pause](https://love2d.org/wiki/love.audio.pause)
   */
  function pause(...sources: Source[]): void;
  function pause(sources: Source[]): void;

  /**
   * Plays the specified {@link Source}.
   *
   * @param source The Source to play.
   * @link [love.audio.play](https://love2d.org/wiki/love.audio.play)
   */
  function play(source: Source): void;

  /**
   * Starts playing multiple {@link Source Sources} simultaneously.
   *
   * @param sources A list of sources to play.
   * @link [love.audio.play](https://love2d.org/wiki/love.audio.play)
   */
  function play(...sources: Source[]): void;
  function play(sources: Source[]): void;

  /**
   * Sets the distance attenuation model.
   *
   * @param model The new distance model.
   * @link [love.audio.setDistanceModel](https://love2d.org/wiki/love.audio.setDistanceModel)
   * @since 0.8.0
   */
  function setDistanceModel(model: DistanceModel): void;

  /**
   * Sets a global scale factor for velocity-based doppler effects.
   *
   * @param scale The new doppler scale factor. Greater than 0. (Default `1`)
   * @link [love.audio.setDopplerScale](https://love2d.org/wiki/love.audio.setDopplerScale)
   * @since 0.9.2
   */
  function setDopplerScale(scale: number): void;

  /**
   * Defines an effect that can be applied to a {@link Source}.
   *
   * @param name The name of the effect.
   * @param settings The settings to use for this effect.
   * @returns `true` if the effect was successfully created.
   * @link [love.audio.setEffect](https://love2d.org/wiki/love.audio.setEffect)
   * @since 11.0
   */
  function setEffect(name: string, settings: EffectSettings): boolean;

  /**
   * Defines an effect that can be applied to a {@link Source}.
   *
   * @param name The name of the effect.
   * @param enabled If `false` and the given effect name was previously set, disables the effect. (Default `true`)
   * @returns `true` if the effect was successfully disabled.
   * @link [love.audio.setEffect](https://love2d.org/wiki/love.audio.setEffect)
   * @since 11.0
   */
  function setEffect(name: string, enabled?: boolean): boolean;

  /**
   * Sets whether the system should mix the audio with the system's audio.
   *
   * @param mix `true` to enable mixing, `false` to disable it.
   * @returns `true` if the change succeeded.
   * @link [love.audio.setMixWithSystem](https://love2d.org/wiki/love.audio.setMixWithSystem)
   * @since 11.0
   */
  function setMixWithSystem(mix: boolean): boolean;

  /**
   * Sets the orientation of the listener.
   *
   * @param fx The X component of the forward vector of the listener orientation.
   * @param fy The Y component of the forward vector of the listener orientation.
   * @param fz The Z component of the forward vector of the listener orientation.
   * @param ux The X component of the up vector of the listener orientation.
   * @param uy The Y component of the up vector of the listener orientation.
   * @param uz The Z component of the up vector of the listener orientation.
   * @link [love.audio.setOrientation](https://love2d.org/wiki/love.audio.setOrientation)
   */
  function setOrientation(
    fx: number,
    fy: number,
    fz: number,
    ux: number,
    uy: number,
    uz: number,
  ): void;

  /**
   * Sets the position of the listener, which determines how sounds play.
   *
   * @param x The X position of the listener.
   * @param y The Y position of the listener.
   * @param z The Z position of the listener.
   * @link [love.audio.setPosition](https://love2d.org/wiki/love.audio.setPosition)
   */
  function setPosition(x: number, y: number, z: number): void;

  /**
   * Sets the velocity of the listener.
   *
   * @param x The X velocity of the listener.
   * @param y The Y velocity of the listener.
   * @param z The Z velocity of the listener.
   * @link [love.audio.setVelocity](https://love2d.org/wiki/love.audio.setVelocity)
   */
  function setVelocity(x: number, y: number, z: number): void;

  /**
   * Sets the master volume.
   *
   * @param volume `1.0` is max and `0.0` is off.
   * @link [love.audio.setVolume](https://love2d.org/wiki/love.audio.setVolume)
   */
  function setVolume(volume: number): void;

  /**
   * Stops currently played {@link Source Sources}.
   *
   * @link [love.audio.stop](https://love2d.org/wiki/love.audio.stop)
   */
  function stop(): void;

  /**
   * Simultaneously stops all given {@link Source Sources}.
   *
   * @param sources The list of sources to stop
   * @link [love.audio.stop](https://love2d.org/wiki/love.audio.stop)
   */
  function stop(...sources: Source[]): void;
  function stop(sources: Source[]): void;
}
