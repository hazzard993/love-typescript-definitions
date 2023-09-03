declare module "love.image" {
  /**
   * Canvas formats.
   * @link [CanvasFormat](https://love2d.org/wiki/CanvasFormat)
   */
  type CanvasFormat =
    | "hdr"
    | "normal"
    | "r16"
    | "r16f"
    | "r32f"
    | "r8"
    | "rg11b10f"
    | "rg16"
    | "rg16f"
    | "rg32f"
    | "rg8"
    | "rgb10a2"
    | "rgb565"
    | "rgb5a1"
    | "rgba16f"
    | "rgba32f"
    | "rgba4"
    | "rgba8"
    | "srgb";
}
