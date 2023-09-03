declare module "love.physics" {
  /**
   * Circle extends Shape and adds a radius and a local position.
   * @link [CircleShape](https://love2d.org/wiki/CircleShape)
   */
  interface CircleShape extends Shape<"CircleShape"> {
    /**
     * Gets the center point of the circle shape.
     *
     * @return x, The x-component of the center point of the circle.
     * @return y, The y-component of the center point of the circle.
     * @link [CircleShape:getPoint](https://love2d.org/wiki/CircleShape:getPoint)
     */
    getPoint(): LuaMultiReturn<[x: number, y: number]>;

    /**
     * Gets the radius of the circle shape.
     *
     * @return radius, The radius of the circle.
     * @link [CircleShape:getRadius](https://love2d.org/wiki/CircleShape:getRadius)
     */
    getRadius(): number;

    /**
     * Sets the location of the center of the circle shape.
     *
     * @param x The x-component of the new center point of the circle.
     * @param y The y-component of the new center point of the circle.
     * @link [CircleShape:setPoint](https://love2d.org/wiki/CircleShape:setPoint)
     */
    setPoint(x: number, y: number): void;

    /**
     * Sets the radius of the circle.
     *
     * @param radius The radius of the circle.
     * @link [CircleShape:setRadius](https://love2d.org/wiki/CircleShape:setRadius)
     */
    setRadius(radius: number): void;
  }
}
