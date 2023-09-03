declare module "love.graphics" {
  import { Type } from "love";

  /**
   * A quadrilateral (a polygon with four sides and four corners) with texture coordinate information.
   * @link [Quad](https://love2d.org/wiki/Quad)
   */
  interface Quad extends Type<"Quad"> {
    /**
     * Gets reference texture dimensions initially specified in love.graphics.newQuad.
     *
     * @return sw, The Texture width used by the Quad.
     * @return sh, The Texture height used by the Quad.
     * @link [Quad:getTextureDimensions](https://love2d.org/wiki/Quad:getTextureDimensions)
     */
    getTextureDimensions(): LuaMultiReturn<[sw: number, sh: number]>;

    /**
     * Gets the current viewport of this Quad.
     *
     * @return x, The top-left corner along the x-axis.
     * @return y, The top-left corner along the y-axis.
     * @return w, The width of the viewport.
     * @return h, The height of the viewport.
     * @link [Quad:getViewport](https://love2d.org/wiki/Quad:getViewport)
     */
    getViewport(): LuaMultiReturn<[x: number, y: number, w: number, h: number]>;

    /**
     * Sets the texture coordinates according to a viewport.
     *
     * @param x The top-left corner along the x-axis.
     * @param y The top-right corner along the y-axis.
     * @param w The width of the viewport.
     * @param h The height of the viewport.
     * @link [Quad:setViewport](https://love2d.org/wiki/Quad:setViewport)
     */
    setViewport(x: number, y: number, w: number, h: number): void;
  }
}
