/**
 * A EdgeShape is a line segment.
 *
 * They can be used to create the boundaries of your terrain.
 *
 * The shape does not have volume and can only collide with PolygonShape and CircleShape.
 * @link [EdgeShape](https://love2d.org/wiki/EdgeShape)
 */
declare interface EdgeShape extends Shape {
    /**
     * Returns the local coordinates of the edge points.
     *
     * @return {number} x1, The x component of the first vertex.
     * @return {number} y1, The y component of the first vertex.
     * @return {number} x2, The x component of the second vertex.
     * @return {number} y2, The y component of the second vertex.
     */
    /** @tupleReturn */
    getPoints(): [number, number, number, number];

    /**
     * Gets the vertex that establishes a connection to the next shape.
     *
     *
     * Setting next and previous EdgeShape vertices can help prevent unwanted
     * collisions when a flat shape slides along the edge and moves over to the new
     * shape.
     *
     * @return {number} x, The x-component of the vertex, or nil if EdgeShape:setNextVertex hasn't been called.
     * @return {number} y, The y-component of the vertex, or nil if EdgeShape:setNextVertex hasn't been called.
     */
    /** @tupleReturn */
    getNextVertex(): [number, number];

    /**
     * Gets the vertex that establishes a connection to the previous shape.
     *
     *
     * Setting next and previous EdgeShape vertices can help prevent unwanted
     * collisions when a flat shape slides along the edge and moves over to the new
     * shape.
     *
     * @return {number} x, The x-component of the vertex, or nil if EdgeShape:setPreviousVertex hasn't been called.
     * @return {number} y, The y-component of the vertex, or nil if EdgeShape:setPreviousVertex hasn't been called.
     */
    /** @tupleReturn */
    getPreviousVertex(): [number, number];

    /**
     * Sets a vertex that establishes a connection to the next shape.
     *
     *
     * This can help prevent unwanted collisions when a flat shape slides along the
     * edge and moves over to the new shape.
     *
     * @param x The x-component of the vertex.
     * @param y The y-component of the vertex.
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
     */
    setPreviousVertex(x: number, y: number): void;

}
