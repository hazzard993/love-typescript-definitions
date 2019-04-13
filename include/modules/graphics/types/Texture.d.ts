/**
 * Superclass for drawable objects which represent a texture.
 *
 * All Textures can be drawn with Quads.
 *
 * This is an abstract type that can't be created directly.
 * @link [Texture](https://love2d.org/wiki/Texture)
 */
declare interface Texture extends Drawable {

    /**
     * Gets the DPI scale factor of the Texture.
     * @return {number} dpiscale, The DPI scale factor of the Texture.
     * @link [Texture:getDPIScale](https://love2d.org/wiki/Texture:getDPIScale)
     */
    getDPIScale(): number;

    /**
     * Gets the depth of a Volume Texture. Returns 1 for 2D, Cubemap, and Array
     * textures.
     *
     * @return {number} depth, The depth of the volume Texture.
     */
    getDepth(): number;

    /**
     * Gets the comparison mode used when sampling from a depth texture in a shader.
     * @return {CompareMode} compare, The comparison mode used when sampling from this texture in a shader, or _nil/null_ if setDepthSampleMode has not been called on this Texture.
     * @link [Texture:getDepthSampleMode](https://love2d.org/wiki/Texture:getDepthSampleMode)
     */
    getDepthSampleMode(): CompareMode | null;

    /**
     * Gets the width and height of the Texture.
     * @return width, The width of the Texture, in pixels.
     * @return height, The height of the Texture, in pixels.
     * @tupleReturn
     * @link [Texture:getDimensions](https://love2d.org/wiki/Texture:getDimensions)
     */
    getDimensions(): [number, number];

    /**
     * Gets the filter mode of the Texture.
     * @return min, Filter mode to use when minifying the texture (rendering it at a smaller size on-screen than its size in pixels).
     * @return mag, Filter mode to use when magnifying the texture (rendering it at a smaller size on-screen than its size in pixels).
     * @link [Texture:getFilter](https://love2d.org/wiki/Texture:getFilter)
     */
    getFilter(): [FilterMode, FilterMode];

    /**
     * Gets the PixelFormat of the Texture.
     *
     * @return {PixelFormat} format, The pixel format the Texture was created with.
     */
    getFormat(): PixelFormat;

    /**
     * Gets the height of the Texture.
     * @return {number} height, The height of the Texture, in pixels.
     * @link [Texture:getHeight](https://love2d.org/wiki/Texture:getHeight)
     */
    getHeight(): number;

    /**
     * Gets the number of layers / slices in an Array Texture. Returns 1 for 2D,
     * Cubemap, and Volume textures.
     *
     * @return {number} layers, The number of layers in the Array Texture.
     */
    getLayerCount(): number;

    /**
     * Gets the number of mipmaps contained in the Texture. If the texture was not
     * created with mipmaps, it will return 1.
     *
     * @return {number} mipmaps, The number of mipmaps in the Texture.
     */
    getMipmapCount(): number;

    /**
     * Gets the mipmap filter mode for a Texture. Prior to 11.0 this method only worked on Images.
     * @return {FilterMode} desc, description
     * @return {number} sharpness, Value used to determine whether the image should use more or less detailed mipmap levels than normal when drawing.
     * @tupleReturn
     * @link [Texture:getMipmapFilter](https://love2d.org/wiki/Texture:getMipmapFilter)
     */
    getMipmapFilter(): [FilterMode, number];

    /**
     * Gets the width and height in pixels of the Texture.
     * @return pixelwidth, The width of the Texture, in pixels.
     * @return pixelheight, The height of the Texture, in pixels.
     * @tupleReturn
     * @link [Texture:getPixelDimensions](https://love2d.org/wiki/Texture:getPixelDimensions)
     */
    getPixelDimensions(): [number, number];

    /**
     * Gets the height in pixels of the Texture.
     * @return {number} pixelheight, The height of the Texture, in pixels.
     * @link [Texture:getPixelHeight](https://love2d.org/wiki/Texture:getPixelHeight)
     */
    getPixelHeight(): number;

    /**
     * Gets the width in pixels of the Texture.
     * @return {number} pixelwidth, The width of the Texture, in pixels.
     * @link [Texture:getPixelWidth](https://love2d.org/wiki/Texture:getPixelWidth)
     */
    getPixelWidth(): number;

    /**
     * Gets the type of the Texture.
     *
     * @return {TextureType} texturetype, The type of the Texture.
     */
    getTextureType(): TextureType;

    /**
     * Gets the width of the Texture.
     * @param TODO
     * @return {number} width, The width of the Texture, in pixels.
     * @link [Texture:getWidth](https://love2d.org/wiki/Texture:getWidth)
     */
    getWidth(): number;

    /**
     * Gets the wrapping properties of a Texture.
     * @return horiz, Horizontal wrapping mode of the texture.
     * @return vert, Vertical wrapping mode of the texture.
     * @tupleReturn
     * @link [Texture:getWrap](https://love2d.org/wiki/Texture:getWrap)
     */
    getWrap(): [WrapMode, WrapMode];

    /**
     * Gets whether the Texture can be drawn and sent to a Shader.
     *
     *
     * Canvases created with stencil and/or depth PixelFormats are not readable by
     * default, unless readable=true is specified in the settings table passed into
     * love.graphics.newCanvas.
     *
     *
     * Non-readable Canvases can still be rendered to.
     *
     * @return {boolean} readable, Whether the Texture is readable.
     */
    isReadable(): boolean;

    /**
     * Sets the comparison mode used when sampling from a depth texture in a shader.
     * @param compare The comparison mode used when sampling from this texture in a shader.
     * @link [Texture:setDepthSampleMode](https://love2d.org/wiki/Texture:setDepthSampleMode)
     */
    setDepthSampleMode(compare: CompareMode): void;

    /**
     * Sets the filter mode of the Texture.
     * @param min Filter mode to use when minifying the texture (rendering it at a smaller size on-screen than its size in pixels).
     * @param mag Filter mode to use when magnifying the texture (rendering it at a larger size on-screen than its size in pixels).
     * @link [Texture:setFilter](https://love2d.org/wiki/Texture:setFilter)
     */
    setFilter(min: FilterMode, mag: FilterMode): void;

    /**
     * Sets the mipmap filter mode for a Texture
     * @param filtermode The filter mode to use in between mipmap levels. "nearest" will often give better performance.
     * @param sharpness A positive sharpness value makes the texture use a more detailed mipmap level when drawing, at the expense of performance. A negative value does the reverse. (Default 0)
     * @return {return_type} desc, description
     * @link [Texture:setMipmapFilter](https://love2d.org/wiki/Texture:setMipmapFilter)
     */
    setMipmapFilter(filtermode: FilterMode, sharpness?: number): void;

    /**
     * Sets the wrapping properties of a Texture.
     * @param horiz Horizontal wrapping mode of the texture.
     * @param vert Vertical wrapping mode of the texture.
     * @link [Texture:setWrap](https://love2d.org/wiki/Texture:setWrap)
     */
    setWrap(horiz: WrapMode, vert: WrapMode): void;

}
