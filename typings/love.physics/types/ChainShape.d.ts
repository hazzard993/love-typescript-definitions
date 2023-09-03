declare module "love.physics" {
  /**
   * A ChainShape consists of multiple line segments.
   *
   * It can be used to create the boundaries of your terrain.
   *
   * The shape does not have volume and can only collide with PolygonShape and CircleShape.
   * @link [ChainShape](https://love2d.org/wiki/ChainShape)
   */
  interface ChainShape extends Shape<"ChainShape"> {
    /**
     * Returns a child of the shape as an EdgeShape.
     *
     * @param index The index of the child.
     * @return EdgeShape, The child as an EdgeShape.
     * @link [ChainShape:getChildEdge](https://love2d.org/wiki/ChainShape:getChildEdge)
     */
    getChildEdge(index: number): number;

    /**
     * Gets the vertex that establishes a connection to the next shape.
     *
     * Setting next and previous ChainShape vertices can help prevent unwanted
     * collisions when a flat shape slides along the edge and moves over to the new
     * shape.
     *
     * @param x The x-component of the vertex, or _nil/undefined/undefined_ if ChainShape:setNextVertex hasn't been called.
     * @param y The y-component of the vertex, or _nil/undefined/undefined_ if ChainShape:setNextVertex hasn't been called.
     * @link [ChainShape:getNextVertex](https://love2d.org/wiki/ChainShape:getNextVertex)
     */
    getNextVertex(x?: number, y?: number): void;

    /**
     * Returns a point of the shape.
     *
     * @param index The index of the point to return.
     * @return x, The x-coordinate of the point.
     * @return y, The y-coordinate of the point.
     * @link [ChainShape:getPoint](https://love2d.org/wiki/ChainShape:getPoint)
     */
    getPoint(index: number): LuaMultiReturn<[x: number, y: number]>;

    /**
     * Returns all points of the shape.
     *
     * @return x1, The x-coordinate of the first point.
     * @return y1, The y-coordinate of the first point.
     * @return x2, The x-coordinate of the second point.
     * @return y2, The y-coordinate of the second point.
     * @return ..., Additional x and y values.
     * @link [ChainShape:getPoints](https://love2d.org/wiki/ChainShape:getPoints)
     */
    getPoints(): LuaMultiReturn<number[]>;

    /**
     * Gets the vertex that establishes a connection to the previous shape.
     *
     * Setting next and previous ChainShape vertices can help prevent unwanted
     * collisions when a flat shape slides along the edge and moves over to the new
     * shape.
     *
     * @return x, The x-component of the vertex, or _nil/undefined_ if ChainShape:setNextVertex hasn't been called.
     * @return y, The y-component of the vertex, or _nil/undefined_ if ChainShape:setNextVertex hasn't been called.
     * @link [ChainShape:getPreviousVertex](https://love2d.org/wiki/ChainShape:getPreviousVertex)
     */
    getPreviousVertex(): LuaMultiReturn<[x: number, y: number] | []>;

    /**
     * Returns the number of vertices the shape has.
     *
     * @return count, The number of vertices.
     * @link [ChainShape:getVertexCount](https://love2d.org/wiki/ChainShape:getVertexCount)
     */
    getVertexCount(): number;

    /**
     * Sets a vertex that establishes a connection to the next shape.
     *
     * This can help prevent unwanted collisions when a flat shape slides along the
     * edge and moves over to the new shape.
     *
     * @param x The x component of the vertex.
     * @param y The y component of the vertex.
     * @link [ChainShape:setNextVertex](https://love2d.org/wiki/ChainShape:setNextVertex)
     */
    setNextVertex(x: number, y: number): void;

    /**
     * Sets a vertex that establishes a connection to the previous shape.
     *
     * This can help prevent unwanted collisions when a flat shape slides along the
     * edge and moves over to the new shape.
     *
     * @param x The x component of the vertex.
     * @param y The y component of the vertex.
     * @link [ChainShape:setPreviousVertex](https://love2d.org/wiki/ChainShape:setPreviousVertex)
     */
    setPreviousVertex(x: number, y: number): void;
  }
}
