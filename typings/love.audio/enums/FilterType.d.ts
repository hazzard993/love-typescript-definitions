declare module "love.audio" {
  /**
   * Types of filters for Sources.
   *
   * | Constant | Description |
   * | :- | :- |
   * | `"lowpass"` | Low-pass filter. High frequency sounds are attenuated. |
   * | `"highpass"` | High-pass filter. Low frequency sounds are attenuated. |
   * | `"bandpass"` | Band-pass filter. Both high and low frequency sounds are attenuated based on the given parameters. |
   *
   * @link [FilterType](https://love2d.org/wiki/FilterType)
   * @since 11.0
   */
  type FilterType = "lowpass" | "highpass" | "bandpass";
}
