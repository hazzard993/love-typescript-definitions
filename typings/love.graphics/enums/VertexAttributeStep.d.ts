declare module "love.graphics" {
  /**
   * The frequency at which a vertex shader fetches the vertex attribute's
   * data from the Mesh when it's drawn.
   *
   * Per-instance attributes can be used to render a Mesh many times with
   * different positions, colors, or other attributes via a single
   * love.graphics.drawInstanced call, without using the love_InstanceID
   * vertex shader variable.
   * @link [VertexAttributeStep](https://love2d.org/wiki/VertexAttributeStep)
   */
  type VertexAttributeStep = "pervertex" | "perinstance";
}
