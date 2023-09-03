declare module "love.audio" {
  /**
   * Structure used with [love.audio.setEffect](https://love2d.org/wiki/love.audio.setEffect) and [love.audio.getEffect](https://love2d.org/wiki/love.audio.getEffect).
   *
   * Documented [here](https://love2d.org/wiki/EffectType).
   * @link [love.audio.setEffect](https://love2d.org/wiki/love.audio.setEffect)
   * @link [love.audio.getEffect](https://love2d.org/wiki/love.audio.getEffect)
   */
  type EffectSettings =
    | ChorusEffectSettings
    | CompressorEffectSettings
    | DistortionEffectSettings
    | EchoEffectSettings
    | EqualizerEffectSettings
    | FlangerEffectSettings
    | ReverbEffectSettings
    | RingModulatorEffectSettings;

  /**
   * Plays multiple copies of the sound with slight pitch and time variation.
   *
   * Used to make sounds sound "fuller" or "thicker".
   */
  type ChorusEffectSettings = {
    type: "chorus";
    waveform?: EffectWaveform;
    phase?: number;
    rate?: number;
    depth?: number;
    feedback?: number;
    delay?: number;
  };

  /**
   * Decreases the dynamic range of the sound, making the loud and quiet parts closer in volume, producing a more uniform amplitude throughout time.
   */
  type CompressorEffectSettings = {
    type: "compressor";
    enable?: boolean;
  };

  /**
   * Alters the sound by amplifying it until it clips, shearing off parts of the signal, leading to a compressed and distorted sound.
   */
  type DistortionEffectSettings = {
    type: "distortion";
    gain?: number;
    edge?: number;
    lowcut?: number;
    center?: number;
    bandwidth?: number;
  };

  /**
   * Decaying feedback based effect, on the order of seconds.
   *
   * Also known as delay; causes the sound to repeat at regular intervals at a decreasing volume.
   */
  type EchoEffectSettings = {
    type: "echo";
    delay?: number;
    tapdelay?: number;
    damping?: number;
    feedback?: number;
    spread?: number;
  };

  /**
   * Adjust the frequency components of the sound using a 4-band (low-shelf, two band-pass and a high-shelf) equalizer.
   */
  type EqualizerEffectSettings = {
    type: "equalizer";
    lowgain?: number;
    lowcut?: number;
    lowmidgain?: number;
    lowmidfrequency?: number;
    lowmidbandwidth?: number;
    highmidgain?: number;
    highmidfrequency?: number;
    highmidbandwidth?: number;
    highgain?: number;
    highcut?: number;
  };

  /**
   * Plays two copies of the sound; while varying the phase, or equivalently delaying one of them, by amounts on the order of milliseconds, resulting in phasing sounds.
   */
  type FlangerEffectSettings = {
    type: "flanger";
    phase?: number;
    rate?: number;
    depth?: number;
    feedback?: number;
    delay?: number;
  };

  /**
   * Decaying feedback based effect, on the order of milliseconds.
   *
   * Used to simulate the reflection off of the surroundings.
   */
  type ReverbEffectSettings = {
    type: "reverb";
    gain?: number;
    highgain?: number;
    density?: number;
    diffusion?: number;
    decaytime?: number;
    decayhighratio?: number;
    earlygain?: number;
    earlydelay?: number;
    lategain?: number;
    latedelay?: number;
    roomrolloff?: number;
    airabsorption?: number;
    highlimiit?: boolean;
  };

  /**
   * An implementation of amplitude modulation; multiplies the source signal with a simple waveform, to produce either volume changes, or inharmonic overtones.
   */
  type RingModulatorEffectSettings = {
    type: "ringmodulator";
    waveform?: EffectWaveform;
    frequency?: number;
    highcut?: number;
  };
}
