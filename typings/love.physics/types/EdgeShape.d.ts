declare module "love.physics" {
  /**
   * A EdgeShape is a line segment.
   *
   * They can be used to create the boundaries of your terrain.
   *
   * The shape does not have volume and can only collide with PolygonShape and CircleShape.
   * @link [EdgeShape](https://love2d.org/wiki/EdgeShape)
   */
  interface EdgeShape extends Shape<"EdgeShape"> {
    /**
     * Returns the local coordinates of the edge points.
     *
     * @return x1, The x component of the first vertex.
     * @return y1, The y component of the first vertex.
     * @return x2, The x component of the second vertex.
     * @return y2, The y component of the second vertex.
     * @link [EdgeShape:getPoints](https://love2d.org/wiki/EdgeShape:getPoints)
     */
    getPoints(): LuaMultiReturn<
      [x1: number, y1: number, x2: number, y2: number]
    >;

    /**
     * Gets the vertex that establishes a connection to the next shape.
     *
     * Setting next and previous EdgeShape vertices can help prevent unwanted
     * collisions when a flat shape slides along the edge and moves over to the new
     * shape.
     *
     * @return x, The x-component of the vertex, or _nil/undefined_ if EdgeShape:setNextVertex hasn't been called.
     * @return y, The y-component of the vertex, or _nil/undefined_ if EdgeShape:setNextVertex hasn't been called.
     * @link [EdgeShape:getNextVertex](https://love2d.org/wiki/EdgeShape:getNextVertex)
     */
    getNextVertex(): LuaMultiReturn<[x: number, y: number] | []>;

    /**
     * Gets the vertex that establishes a connection to the previous shape.
     *
     * Setting next and previous EdgeShape vertices can help prevent unwanted
     * collisions when a flat shape slides along the edge and moves over to the new
     * shape.
     *
     * @return x, The x-component of the vertex, or _nil/undefined_ if EdgeShape:setPreviousVertex hasn't been called.
     * @return y, The y-component of the vertex, or _nil/undefined_ if EdgeShape:setPreviousVertex hasn't been called.
     * @link [EdgeShape:getPreviousVertex](https://love2d.org/wiki/EdgeShape:getPreviousVertex)
     */
    getPreviousVertex(): LuaMultiReturn<[x: number, y: number] | []>;

    /**
     * Sets a vertex that establishes a connection to the next shape.
     *
     * This can help prevent unwanted collisions when a flat shape slides along the
     * edge and moves over to the new shape.
     *
     * @param x The x-component of the vertex.
     * @param y The y-component of the vertex.
     * @link [EdgeShape:setNextVertex](https://love2d.org/wiki/EdgeShape:setNextVertex)
     */
    setNextVertex(x: number, y: number): void;

    /**
     * Sets a vertex that establishes a connection to the previous shape.
     *
     * This can help prevent unwanted collisions when a flat shape slides along the
     * edge and moves over to the new shape.
     *
     * @param x The x-component of the vertex.
     * @param y The y-component of the vertex.
     * @link [EdgeShape:setPreviousVertex](https://love2d.org/wiki/EdgeShape:setPreviousVertex)
     */
    setPreviousVertex(x: number, y: number): void;
  }
}
