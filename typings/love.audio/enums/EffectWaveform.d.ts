declare module "love.audio" {
  /**
   * The different types of waveforms that can be used with the ringmodulator [EffectType](https://love2d.org/wiki/EffectType).
   *
   * | Constant | Description |
   * | :- | :- |
   * | `"sawtooth"` | A sawtooth wave, also known as a ramp wave. Named for its linear rise, and (near-)instantaneous fall along time. |
   * | `"sine"` | A sine wave. Follows a trigonometric sine function. |
   * | `"square"` | A square wave. Switches between high and low states (near-)instantaneously. |
   * | `"triangle"` | A triangle wave. Follows a linear rise and fall that repeats periodically. |
   *
   * @link [EffectWaveform](https://love2d.org/wiki/EffectWaveform)
   * @since 11.0
   */
  type EffectWaveform = "sawtooth" | "sine" | "square" | "triangle";
}
