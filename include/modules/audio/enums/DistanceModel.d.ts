/**
 * The different distance models.
 *
 * Extended information can be found in the chapter "3.4. Attenuation By Distance" of the [OpenAL 1.1 specification](https://www.openal.org/documentation/openal-1.1-specification.pdf).
 * @link [DistanceModel](https://love2d.org/wiki/DistanceModel)
 * @since 0.8.0
 */
declare type DistanceModel = "none" | "inverse" | "inverseclamped" | "linear" | "linearclamped" | "exponent" | "exponentclamped";
