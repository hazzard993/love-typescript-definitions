declare module "love.graphics" {
  /**
   * How Mesh geometry vertices are ordered.
   *
   * | Value | Description |
   * |:-|:-|
   * | `"cw"` | Clockwise |
   * | `"ccw"` | Counter-clockwise |
   *
   * @link [VertexWinding](https://love2d.org/wiki/VertexWinding)
   */
  type VertexWinding = "cw" | "ccw";
}
