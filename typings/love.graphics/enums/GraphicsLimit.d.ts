declare module "love.graphics" {
  /**
   * Types of system-dependent graphics limits checked for using love.graphics.getSystemLimits.
   * @link [GraphicsLimit](https://love2d.org/wiki/GraphicsLimit)
   */
  type GraphicsLimit =
    | "pointsize"
    | "texturesize"
    | "multicanvas"
    | "canvasmsaa"
    | "texturelayers"
    | "volumetexturesize"
    | "cubetexturesize"
    | "anisotropy";
}
