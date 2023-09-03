declare module "love.graphics" {
  /**
   * A table containing the attribute's name, it's data type, and the number of components in the attribute.
   * ```
   * [name, datatype, components]
   * ```
   * @link [love.graphics.newMesh](https://love2d.org/wiki/love.graphics.newMesh)
   */
  type VertexAttribute<T extends MeshVertexDataType> = [
    string,
    T,
    1 | 2 | 3 | 4,
  ];
}
