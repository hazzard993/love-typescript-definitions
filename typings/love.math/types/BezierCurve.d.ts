declare module "love.math" {
  import { Type } from "love";

  /**
   * A Bezier curve object that can evaluate and render Bezier curves of arbitrary degree
   * @link [BezierCurve](https://love2d.org/wiki/BezierCurve)
   */
  interface BezierCurve extends Type<"BezierCurve"> {
    /**
     * Evaluate Bezier curve at parameter t. The parameter must be between 0 and 1
     * (inclusive).
     *
     * This function can be used to move objects along paths or tween parameters.
     * However it should not be used to render the curve, see BezierCurve:render for
     * that purpose.
     *
     * @param t Where to evaluate the curve.
     * @return x, x coordinate of the curve at parameter t.
     * @return y, y coordinate of the curve at parameter t.
     * @link [BezierCurve:evaluate](https://love2d.org/wiki/BezierCurve:evaluate)
     */
    evaluate(t: number): LuaMultiReturn<[x: number, y: number]>;

    /**
     * Get coordinates of the i-th control point. Indices start with 1.
     *
     * @param i Index of the control point.
     * @return x, Position of the control point along the x axis.
     * @return y, Position of the control point along the y axis.
     * @link [BezierCurve:getControlPoint](https://love2d.org/wiki/BezierCurve:getControlPoint)
     */
    getControlPoint(i: number): LuaMultiReturn<[x: number, y: number]>;

    /**
     * Get the number of control points in the Bezier curve.
     *
     * @return count, The number of control points.
     * @link [BezierCurve:getControlPointCount](https://love2d.org/wiki/BezierCurve:getControlPointCount)
     */
    getControlPointCount(): number;

    /**
     * Get degree of the Bezier curve. The degree is equal to
     * number-of-control-points - 1.
     *
     * @return degree, Degree of the Bezier curve.
     * @link [BezierCurve:getDegree](https://love2d.org/wiki/BezierCurve:getDegree)
     */
    getDegree(): number;

    /**
     * Get the derivative of the Bezier curve.
     *
     * This function can be used to rotate sprites moving along a curve in the
     * direction of the movement and compute the direction perpendicular to the curve
     * at some parameter t.
     *
     * @return derivative, The derivative curve.
     * @link [BezierCurve:getDerivative](https://love2d.org/wiki/BezierCurve:getDerivative)
     */
    getDerivative(): BezierCurve;

    /**
     * Gets a BezierCurve that corresponds to the specified segment of this
     * BezierCurve.
     *
     * @param startpoint The starting point along the curve. Must be between 0 and 1.
     * @param endpoint The end of the segment. Must be between 0 and 1.
     * @return curve, A BezierCurve that corresponds to the specified segment.
     * @link [BezierCurve:getSegment](https://love2d.org/wiki/BezierCurve:getSegment)
     */
    getSegment(startpoint: number, endpoint: number): BezierCurve;

    /**
     * Insert control point as the new i-th control point. Existing control points
     * from i onwards are pushed back by 1. Indices start with 1. Negative indices
     * wrap around: -1 is the last control point, -2 the one before the last, etc.
     *
     * @param x Position of the control point along the x axis.
     * @param y Position of the control point along the y axis.
     * @param i Index of the control point.
     * @link [BezierCurve:insertControlPoint](https://love2d.org/wiki/BezierCurve:insertControlPoint)
     */
    insertControlPoint(x: number, y: number, i?: number): void;

    /**
     * Removes the specified control point.
     *
     * @param index The index of the control point to remove.
     * @link [BezierCurve:removeControlPoint](https://love2d.org/wiki/BezierCurve:removeControlPoint)
     */
    removeControlPoint(index: number): void;

    /**
     * Get a list of coordinates to be used with love.graphics.line.
     *
     * This function samples the Bezier curve using recursive subdivision. You can
     * control the recursion depth using the depth parameter.
     *
     * If you are just interested to know the position on the curve given a parameter,
     * use BezierCurve:evaluate.
     *
     * @param depth Number of recursive subdivision steps.
     * @return coordinates, List of x,y-coordinate pairs of points on the curve.
     * @link [BezierCurve:render](https://love2d.org/wiki/BezierCurve:render)
     */
    render(depth?: number): Array<number>;

    /**
     * Get a list of coordinates on a specific part of the curve, to be used with
     * love.graphics.line.
     *
     * This function samples the Bezier curve using recursive subdivision. You can
     * control the recursion depth using the depth parameter.
     *
     * If you are just need to know the position on the curve given a parameter, use
     * BezierCurve:evaluate.
     *
     * @param startpoint The starting point along the curve. Must be between 0 and 1.
     * @param endpoint The end of the segment to render. Must be between 0 and 1.
     * @param depth Number of recursive subdivision steps.
     * @return coordinates, List of x,y-coordinate pairs of points on the curve.
     * @link [BezierCurve:renderSegment](https://love2d.org/wiki/BezierCurve:renderSegment)
     */
    renderSegment(
      startpoint: number,
      endpoint: number,
      depth?: number,
    ): Array<number>;

    /**
     * Rotate the Bezier curve by an angle.
     *
     * @param angle Rotation angle in radians.
     * @param ox X coordinate of the rotation center.
     * @param oy Y coordinate of the rotation center.
     * @link [BezierCurve:rotate](https://love2d.org/wiki/BezierCurve:rotate)
     */
    rotate(angle: number, ox?: number, oy?: number): void;

    /**
     * Scale the Bezier curve by a factor.
     *
     * @param s Scale factor.
     * @param ox X coordinate of the scaling center.
     * @param oy Y coordinate of the scaling center.
     * @link [BezierCurve:scale](https://love2d.org/wiki/BezierCurve:scale)
     */
    scale(s: number, ox?: number, oy?: number): void;

    /**
     * Set coordinates of the i-th control point. Indices start with 1.
     *
     * @param i Index of the control point.
     * @param ox Position of the control point along the x axis.
     * @param oy Position of the control point along the y axis.
     * @link [BezierCurve:setControlPoint](https://love2d.org/wiki/BezierCurve:setControlPoint)
     */
    setControlPoint(i: number, ox: number, oy: number): void;

    /**
     * Move the Bezier curve by an offset.
     *
     * @param dx Offset along the x axis.
     * @param dy Offset along the y axis.
     * @link [BezierCurve:translate](https://love2d.org/wiki/BezierCurve:translate)
     */
    translate(dx: number, dy: number): void;
  }
}
