declare module "love.graphics" {
  /**
   * A vertex information table with the following order of values:
   * - [0] - The position of the vertex on the x-axis.
   * - [1] - The position of the vertex on the y-axis.
   * - [2] (default: 0) - The u texture coordinate of the vertex. Texture coordinates are normally in the range of [0, 1], but can be greater or less (see WrapMode.)
   * - [3] (default: 0) - The v texture coordinate of the vertex. Texture coordinates are normally in the range of [0, 1], but can be greater or less (see WrapMode.)
   * - [4] (default: 1) - The red component of the vertex color.
   * - [5] (default: 1) - The green component of the vertex color.
   * - [6] (default: 1) - The blue component of the vertex color.
   * - [7] (default: 1) - The alpha component of the vertex color.
   * @link [love.graphics.newMesh](https://love2d.org/wiki/love.graphics.newMesh)
   */
  type VertexInformation = [
    x: number,
    y: number,
    u?: number,
    v?: number,
    r?: number,
    g?: number,
    b?: number,
    a?: number,
  ];
}
