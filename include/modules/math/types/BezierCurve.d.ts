/**
 * A Bézier curve object that can evaluate and render Bézier curves of arbitrary degree
 * @link [BezierCurve](https://love2d.org/wiki/BezierCurve)
 */
declare interface BezierCurve extends Object {
	/**
	 * Evaluate Bézier curve at parameter t. The parameter must be between 0 and 1
	 * (inclusive).
	 *
	 *
	 * This function can be used to move objects along paths or tween parameters.
	 * However it should not be used to render the curve, see BezierCurve:render for
	 * that purpose.
	 *
	 * @param t Where to evaluate the curve.
	 * @return {number} x, x coordinate of the curve at parameter t.
	 * @return {number} y, y coordinate of the curve at parameter t.
	 */
    /** @tupleReturn */
    evaluate(t: number): [number, number];

	/**
	 * Get coordinates of the i-th control point. Indices start with 1.
	 *
	 * @param i Index of the control point.
	 * @return {number} x, Position of the control point along the x axis.
	 * @return {number} y, Position of the control point along the y axis.
	 */
    /** @tupleReturn */
    getControlPoint(i: number): [number, number];

	/**
	 * Get the number of control points in the Bézier curve.
	 *
	 * @return {number} count, The number of control points.
	 */
    getControlPointCount(): number;

	/**
	 * Get degree of the Bézier curve. The degree is equal to
	 * number-of-control-points - 1.
	 *
	 * @return {number} degree, Degree of the Bézier curve.
	 */
    getDegree(): number;

	/**
	 * Get the derivative of the Bézier curve.
	 *
	 *
	 * This function can be used to rotate sprites moving along a curve in the
	 * direction of the movement and compute the direction perpendicular to the curve
	 * at some parameter t.
	 *
	 * @return {BezierCurve} derivative, The derivative curve.
	 */
    getDerivative(): BezierCurve;

	/**
	 * Gets a BezierCurve that corresponds to the specified segment of this
	 * BezierCurve.
	 *
	 * @param startpoint The starting point along the curve. Must be between 0 and 1.
	 * @param endpoint The end of the segment. Must be between 0 and 1.
	 * @return {BezierCurve} curve, A BezierCurve that corresponds to the specified segment.
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
	 */
    insertControlPoint(x: number, y: number, i?: number): void;

	/**
	 * Removes the specified control point.
	 *
	 * @param index The index of the control point to remove.
	 */
    removeControlPoint(index: number): void;

	/**
	 * Get a list of coordinates to be used with love.graphics.line.
	 *
	 *
	 * This function samples the Bézier curve using recursive subdivision. You can
	 * control the recursion depth using the depth parameter.
	 *
	 *
	 * If you are just interested to know the position on the curve given a parameter,
	 * use BezierCurve:evaluate.
	 *
	 * @param depth Number of recursive subdivision steps.
	 * @return {table} coordinates, List of x,y-coordinate pairs of points on the curve.
	 */
    render(depth?: number): table;

	/**
	 * Get a list of coordinates on a specific part of the curve, to be used with
	 * love.graphics.line.
	 *
	 *
	 * This function samples the Bézier curve using recursive subdivision. You can
	 * control the recursion depth using the depth parameter.
	 *
	 *
	 * If you are just need to know the position on the curve given a parameter, use
	 * BezierCurve:evaluate.
	 *
	 * @param startpoint The starting point along the curve. Must be between 0 and 1.
	 * @param endpoint The end of the segment to render. Must be between 0 and 1.
	 * @param depth Number of recursive subdivision steps.
	 * @return {table} coordinates, List of x,y-coordinate pairs of points on the curve.
	 */
    renderSegment(startpoint: number, endpoint: number, depth?: number): table;

	/**
	 * Rotate the Bézier curve by an angle.
	 *
	 * @param angle Rotation angle in radians.
	 * @param ox X coordinate of the rotation center.
	 * @param oy Y coordinate of the rotation center.
	 */
    rotate(angle: number, ox?: number, oy?: number): void;

	/**
	 * Scale the Bézier curve by a factor.
	 *
	 * @param s Scale factor.
	 * @param ox X coordinate of the scaling center.
	 * @param oy Y coordinate of the scaling center.
	 */
    scale(s: number, ox?: number, oy?: number): void;

	/**
	 * Set coordinates of the i-th control point. Indices start with 1.
	 *
	 * @param i Index of the control point.
	 * @param ox Position of the control point along the x axis.
	 * @param oy Position of the control point along the y axis.
	 */
    setControlPoint(i: number, ox: number, oy: number): void;

	/**
	 * Move the Bézier curve by an offset.
	 *
	 * @param dx Offset along the x axis.
	 * @param dy Offset along the y axis.
	 */
    translate(dx: number, dy: number): void;

}
