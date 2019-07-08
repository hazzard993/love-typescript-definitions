/**
 * Circle extends Shape and adds a radius and a local position.
 * @link [CircleShape](https://love2d.org/wiki/CircleShape)
 */
declare interface CircleShape extends Shape {
    /**
     * Gets the center point of the circle shape.
     *
     * @return x, The x-component of the center point of the circle.
     * @return y, The y-component of the center point of the circle.
     * @tupleReturn
     */
    getPoint(): [number, number];

    /**
     * Gets the radius of the circle shape.
     *
     * @return radius, The radius of the circle.
     */
    getRadius(): number;

    /**
     * Sets the location of the center of the circle shape.
     *
     * @param x The x-component of the new center point of the circle.
     * @param y The y-component of the new center point of the circle.
     */
    setPoint(x: number, y: number): void;

    /**
     * Sets the radius of the circle.
     *
     * @param radius The radius of the circle.
     */
    setRadius(radius: number): void;

}
