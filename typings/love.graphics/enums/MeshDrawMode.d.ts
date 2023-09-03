declare module "love.graphics" {
  /**
   * How a Mesh's vertices are used when drawing.
   * @link [MeshDrawMode](https://love2d.org/wiki/MeshDrawMode)
   */
  type MeshDrawMode = "fan" | "strip" | "triangles" | "points";
}
