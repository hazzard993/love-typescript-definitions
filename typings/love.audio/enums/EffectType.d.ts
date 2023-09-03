declare module "love.audio" {
  /**
   * The different types of effects supported by [love.audio.setEffect](https://love2d.org/wiki/love.audio.setEffect).
   *
   * @link [EffectType](https://love2d.org/wiki/EffectType)
   * @since 11.0
   */
  type EffectType =
    | "chorus"
    | "compressor"
    | "distortion"
    | "echo"
    | "equalizer"
    | "flanger"
    | "reverb"
    | "ringmodulator";
}
