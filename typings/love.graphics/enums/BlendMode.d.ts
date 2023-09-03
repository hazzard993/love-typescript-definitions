declare module "love.graphics" {
  /**
   * Different ways to do color blending. See BlendAlphaMode and the BlendMode
   * Formulas for additional notes.
   * @link [BlendMode](https://love2d.org/wiki/BlendMode)
   */
  type BlendMode =
    | "alpha"
    | "replace"
    | "screen"
    | "add"
    | "subtract"
    | "multiply"
    | "lighten"
    | "darken";
}
