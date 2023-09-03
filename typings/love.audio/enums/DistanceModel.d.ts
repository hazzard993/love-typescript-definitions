declare module "love.audio" {
  /**
   * The different distance models.
   *
   * | Constant | Description |
   * | :- | :- |
   * | `"none"` | Sources do not get attenuated. |
   * | `"inverse"` | Inverse distance attenuation. |
   * | `"inverseclamped"` | Inverse distance attenuation. Gain is clamped. |
   * | `"linear"` | Linear attenuation. |
   * | `"linearclamped"` | Linear attenuation. Gain is clamped |
   * | `"exponent"` | Exponential attenuation. |
   * | `"exponentclamped"` | Exponential attenuation. Gain is clamped. |
   *
   * Extended information can be found in the chapter "3.4. Attenuation By Distance" of the [OpenAL 1.1 specification](https://www.openal.org/documentation/openal-1.1-specification.pdf).
   * @link [DistanceModel](https://love2d.org/wiki/DistanceModel)
   * @since 0.8.0
   */
  type DistanceModel =
    | "none"
    | "inverse"
    | "inverseclamped"
    | "linear"
    | "linearclamped"
    | "exponent"
    | "exponentclamped";
}
