/**
 * A quadrilateral (a polygon with four sides and four corners) with texture coordinate information.
 * @link [Quad](https://love2d.org/wiki/Quad)
 */
declare interface Quad extends Object {
    /**
     * Gets reference texture dimensions initially specified in love.graphics.newQuad.
     *
     * @return {number} sw, The Texture width used by the Quad.
     * @return {number} sh, The Texture height used by the Quad.
     */
    /** @tupleReturn */
    getTextureDimensions(): [number, number];

    /**
     * Gets the current viewport of this Quad.
     *
     * @return {number} x, The top-left corner along the x-axis.
     * @return {number} y, The top-left corner along the y-axis.
     * @return {number} w, The width of the viewport.
     * @return {number} h, The height of the viewport.
     */
    /** @tupleReturn */
    getViewport(): [number, number, number, number];

    /**
     * Sets the texture coordinates according to a viewport.
     *
     * @param x The top-left corner along the x-axis.
     * @param y The top-right corner along the y-axis.
     * @param w The width of the viewport.
     * @param h The height of the viewport.
     */
    setViewport(x: number, y: number, w: number, h: number): void;

}
