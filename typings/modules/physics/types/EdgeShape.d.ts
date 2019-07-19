/**
 * A EdgeShape is a line segment.
 *
 * They can be used to create the boundaries of your terrain.
 *
 * The shape does not have volume and can only collide with PolygonShape and CircleShape.
 * @link [EdgeShape](https://love2d.org/wiki/EdgeShape)
 */
declare interface EdgeShape extends Shape<"EdgeShape"> {
    /**
     * Returns the local coordinates of the edge points.
     *
     * @return x1, The x component of the first vertex.
     * @return y1, The y component of the first vertex.
     * @return x2, The x component of the second vertex.
     * @return y2, The y component of the second vertex.
     * @tupleReturn
     * @link [EdgeShape:getPoints](https://love2d.org/wiki/EdgeShape:getPoints)
     */
    getPoints(): [number, number, number, number];

    /**
     * Gets the vertex that establishes a connection to the next shape.
     *
     *
     * Setting next and previous EdgeShape vertices can help prevent unwanted
     * collisions when a flat shape slides along the edge and moves over to the new
     * shape.
     *
     * @return x, The x-component of the vertex, or _nil/undefined_ if EdgeShape:setNextVertex hasn't been called.
     * @return y, The y-component of the vertex, or _nil/undefined_ if EdgeShape:setNextVertex hasn't been called.
     * @tupleReturn
     * @link [EdgeShape:getNextVertex](https://love2d.org/wiki/EdgeShape:getNextVertex)
     */
    getNextVertex(): [number, number] | [undefined, undefined];

    /**
     * Gets the vertex that establishes a connection to the previous shape.
     *
     *
     * Setting next and previous EdgeShape vertices can help prevent unwanted
     * collisions when a flat shape slides along the edge and moves over to the new
     * shape.
     *
     * @return x, The x-component of the vertex, or _nil/undefined_ if EdgeShape:setPreviousVertex hasn't been called.
     * @return y, The y-component of the vertex, or _nil/undefined_ if EdgeShape:setPreviousVertex hasn't been called.
     * @tupleReturn
     * @link [EdgeShape:getPreviousVertex](https://love2d.org/wiki/EdgeShape:getPreviousVertex)
     */
    getPreviousVertex(): [number, number] | [undefined, undefined];

    /**
     * Sets a vertex that establishes a connection to the next shape.
     *
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
