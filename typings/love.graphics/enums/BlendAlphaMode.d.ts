declare module "love.graphics" {
  /**
   * Different ways alpha affects color blending. See BlendMode and the BlendMode
   * Formulas for additional notes.
   * @link [BlendAlphaMode](https://love2d.org/wiki/BlendAlphaMode)
   */
  type BlendAlphaMode = "alphamultiply" | "premultiplied";
}
