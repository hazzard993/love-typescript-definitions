declare module "love.graphics" {
  /**
   * Graphics features that can be checked for with love.graphics.getSupported.
   * @link [GraphicsFeature](https://love2d.org/wiki/GraphicsFeature)
   */
  type GraphicsFeature =
    | "clampzero"
    | "lighten"
    | "multicanvasformats"
    | "glsl3"
    | "instancing"
    | "fullnpot"
    | "pixelshaderhighp";
}
