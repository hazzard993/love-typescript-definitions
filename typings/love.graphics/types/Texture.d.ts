declare module "love.graphics" {
  import { PixelFormat } from "love.image";

  type TextureTypes = "Canvas" | "Image";

  /**
   * Superclass for drawable objects which represent a texture.
   *
   * All Textures can be drawn with Quads.
   *
   * This is an abstract type that can't be created directly.
   * @link [Texture](https://love2d.org/wiki/Texture)
   */
  interface Texture<T extends TextureTypes = TextureTypes> extends Drawable<T> {
    /**
     * Gets the DPI scale factor of the Texture.
     *
     * @return dpiscale, The DPI scale factor of the Texture.
     * @link [Texture:getDPIScale](https://love2d.org/wiki/Texture:getDPIScale)
     * @since 11.0
     */
    getDPIScale(): number;

    /**
     * Gets the depth of a Volume Texture. Returns 1 for 2D, Cubemap, and Array
     * textures.
     *
     * @return depth, The depth of the volume Texture.
     * @link [Texture:getDepth](https://love2d.org/wiki/Texture:getDepth)
     * @since 11.0
     */
    getDepth(): number;

    /**
     * Gets the comparison mode used when sampling from a depth texture in a shader.
     *
     * @return compare, The comparison mode used when sampling from this texture in a shader, or _nil/undefined_ if setDepthSampleMode has not been called on this Texture.
     * @link [Texture:getDepthSampleMode](https://love2d.org/wiki/Texture:getDepthSampleMode)
     * @since 11.0
     */
    getDepthSampleMode(): CompareMode | undefined;

    /**
     * Gets the width and height of the Texture.
     *
     * @return width, The width of the Texture, in pixels.
     * @return height, The height of the Texture, in pixels.
     * @link [Texture:getDimensions](https://love2d.org/wiki/Texture:getDimensions)
     * @since 0.9.0
     */
    getDimensions(): LuaMultiReturn<[width: number, height: number]>;

    /**
     * Gets the filter mode of the Texture.
     *
     * @return min, Filter mode to use when minifying the texture (rendering it at a smaller size on-screen than its size in pixels).
     * @return mag, Filter mode to use when magnifying the texture (rendering it at a smaller size on-screen than its size in pixels).
     * @return anisotropy, Maximum amount of anisotropic filtering used.
     * @link [Texture:getFilter](https://love2d.org/wiki/Texture:getFilter)
     */
    getFilter(): LuaMultiReturn<
      [min: FilterMode, mag: FilterMode, anisotropy: number]
    >;

    /**
     * Gets the PixelFormat of the Texture.
     *
     * @return format, The pixel format the Texture was created with.
     * @link [Texture:getFormat](https://love2d.org/wiki/Texture:getFormat)
     * @since 11.0
     */
    getFormat(): PixelFormat;

    /**
     * Gets the height of the Texture.
     * @return height, The height of the Texture, in pixels.
     * @link [Texture:getHeight](https://love2d.org/wiki/Texture:getHeight)
     */
    getHeight(): number;

    /**
     * Gets the number of layers / slices in an Array Texture. Returns 1 for 2D,
     * Cubemap, and Volume textures.
     *
     * @return layers, The number of layers in the Array Texture.
     * @link [Texture:getLayerCount](https://love2d.org/wiki/Texture:getLayerCount)
     * @since 11.0
     */
    getLayerCount(): number;

    /**
     * Gets the number of mipmaps contained in the Texture. If the texture was not
     * created with mipmaps, it will return 1.
     *
     * @return mipmaps, The number of mipmaps in the Texture.
     * @link [Texture:getMipmapCount](https://love2d.org/wiki/Texture:getMipmapCount)
     * @since 11.0
     */
    getMipmapCount(): number;

    /**
     * Gets the mipmap filter mode for a Texture. Prior to 11.0 this method only worked on Images.
     *
     * @return desc, description
     * @return sharpness, Value used to determine whether the image should use more or less detailed mipmap levels than normal when drawing.
     * @link [Texture:getMipmapFilter](https://love2d.org/wiki/Texture:getMipmapFilter)
     * @since 0.9.0
     */
    getMipmapFilter(): LuaMultiReturn<[mode: FilterMode, sharpness: number]>;

    /**
     * Gets the width and height in pixels of the Texture.
     *
     * @return pixelwidth, The width of the Texture, in pixels.
     * @return pixelheight, The height of the Texture, in pixels.
     * @link [Texture:getPixelDimensions](https://love2d.org/wiki/Texture:getPixelDimensions)
     * @since 11.0
     */
    getPixelDimensions(): LuaMultiReturn<
      [pixelwidth: number, pixelheight: number]
    >;

    /**
     * Gets the height in pixels of the Texture.
     *
     * @return pixelheight, The height of the Texture, in pixels.
     * @link [Texture:getPixelHeight](https://love2d.org/wiki/Texture:getPixelHeight)
     * @since 11.0
     */
    getPixelHeight(): number;

    /**
     * Gets the width in pixels of the Texture.
     *
     * @return pixelwidth, The width of the Texture, in pixels.
     * @link [Texture:getPixelWidth](https://love2d.org/wiki/Texture:getPixelWidth)
     * @since 11.0
     */
    getPixelWidth(): number;

    /**
     * Gets the type of the Texture.
     *
     * @return texturetype, The type of the Texture.
     * @link [Texture:getTextureType](https://love2d.org/wiki/Texture:getTextureType)
     * @since 11.0
     */
    getTextureType(): TextureType;

    /**
     * Gets the width of the Texture.
     *
     * @return width, The width of the Texture, in pixels.
     * @link [Texture:getWidth](https://love2d.org/wiki/Texture:getWidth)
     */
    getWidth(): number;

    /**
     * Gets the wrapping properties of a Texture.
     *
     * @returns horiz, Horizontal wrapping mode of the texture.
     * @returns vert, Vertical wrapping mode of the texture.
     * @returns depth, Wrapping mode for the z-axis of a Volume texture.
     * @link [Texture:getWrap](https://love2d.org/wiki/Texture:getWrap)
     */
    getWrap(): LuaMultiReturn<
      [horiz: WrapMode, vert: WrapMode, depth: WrapMode]
    >;

    /**
     * Gets whether the Texture can be drawn and sent to a Shader.
     *
     * Canvases created with stencil and/or depth PixelFormats are not readable by
     * default, unless readable=true is specified in the settings table passed into
     * love.graphics.newCanvas.
     *
     * Non-readable Canvases can still be rendered to.
     *
     * @return readable, Whether the Texture is readable.
     * @link [Texture:isReadable](https://love2d.org/wiki/Texture:isReadable)
     * @since 11.0
     */
    isReadable(): boolean;

    /**
     * Sets the comparison mode used when sampling from a depth texture in a shader.
     *
     * @param compare The comparison mode used when sampling from this texture in a shader.
     * @link [Texture:setDepthSampleMode](https://love2d.org/wiki/Texture:setDepthSampleMode)
     * @since 11.0
     */
    setDepthSampleMode(compare: CompareMode): void;

    /**
     * Sets the filter mode of the Texture.
     * @param min Filter mode to use when minifying the texture (rendering it at a smaller size on-screen than its size in pixels).
     * @param mag Filter mode to use when magnifying the texture (rendering it at a larger size on-screen than its size in pixels).
     * @param anisotropy Maximum amount of anisotropic filtering to use.
     * @link [Texture:setFilter](https://love2d.org/wiki/Texture:setFilter)
     */
    setFilter(min: FilterMode, mag: FilterMode, anisotropy?: number): void;

    /**
     * Sets the mipmap filter mode for a Texture.
     *
     * @param filtermode The filter mode to use in between mipmap levels. "nearest" will often give better performance.
     * @param sharpness A positive sharpness value makes the texture use a more detailed mipmap level when drawing, at the expense of performance. A negative value does the reverse. (Default 0)
     * @link [Texture:setMipmapFilter](https://love2d.org/wiki/Texture:setMipmapFilter)
     * @since 0.9.0
     */
    setMipmapFilter(filtermode: FilterMode, sharpness?: number): void;

    /**
     * Disables mipmap filtering.
     *
     * @link [Texture:setMipmapFilter](https://love2d.org/wiki/Texture:setMipmapFilter)
     * @since 0.9.0
     */
    setMipmapFilter(): void;

    /**
     * Sets the wrapping properties of a Texture.
     *
     * @param horiz Horizontal wrapping mode of the texture.
     * @param vert Vertical wrapping mode of the texture.
     * @param depth Wrapping mode for the z-axis of a Volume texture.
     * @link [Texture:setWrap](https://love2d.org/wiki/Texture:setWrap)
     */
    setWrap(horiz: WrapMode, vert: WrapMode, depth?: WrapMode): void;
  }
}
