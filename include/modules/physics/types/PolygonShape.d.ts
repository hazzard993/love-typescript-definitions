/**
 * A PolygonShape is a convex polygon with up to 8 vertices.
 * @link [PolygonShape](https://love2d.org/wiki/PolygonShape)
 */
declare interface PolygonShape extends Shape {
	/**
	 * Get the local coordinates of the polygon's vertices.
	 *
	 *
	 * This function has a variable number of return values. It can be used in a
	 * nested fashion with love.graphics.polygon.
	 *
	 *
	 * This function may have up to 16 return values, since it returns two values for
	 * each vertex in the polygon. In other words, it can return the coordinates of up
	 * to 8 points.
	 *
	 * @return {number} x1, The x component of the first vertex.
	 * @return {number} y1, The y component of the first vertex.
	 * @return {number} x2, The x component of the second vertex.
	 * @return {number} y2, The y component of the second vertex.
	 * @return {number} ..., Additional x and y values.
	 */
    /** @tupleReturn */
    getPoints(): [number, number, number, number, number];

    /**
     * Validates whether the PolygonShape is convex.
     *
     * Concave PolygonShapes cannot be used in love.physics.
     * @return {boolean} convex, Whether the PolygonShape is convex.
     * @link [PolygonShape:validate](https://love2d.org/wiki/PolygonShape:validate)
     */
    validate(): boolean;

}
