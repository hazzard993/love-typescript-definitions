/**
 * The primary responsibility for the love.graphics module is the drawing of
 * lines, shapes, text, Images and other Drawable objects onto the screen. Its
 * secondary responsibilities include loading external files (including Images and
 * Fonts) into memory, creating specialized objects (such as ParticleSystems or
 * Canvases) and managing screen geometry.
 *
 * LÖVE's coordinate system is rooted in the upper-left corner of the screen,
 * which is at location (0, 0). The x axis is horizontal: larger values are
 * further to the right. The y axis is vertical: larger values are further towards
 * the bottom.
 *
 * In many cases, you draw images or shapes in terms of their upper-left corner.
 *
 * Many of the functions are used to manipulate the graphics coordinate system,
 * which is essentially the way coordinates are mapped to the display. You can
 * change the position, scale, and even rotation in this way.
 *
 * @noResolution
 * @noSelf
 * @link [love.graphics](https://love2d.org/wiki/love.graphics)
 */
declare module "love.graphics" {
  import { RGBA, Transform } from "love.math";
  import { Channel } from "love.thread";
  import {
    CanvasFormat,
    ImageData,
    PixelFormat,
    CompressedImageData,
  } from "love.image";
  import { HintingMode, Rasterizer } from "love.font";
  import { File, FileData } from "love.filesystem";
  import { VideoStream } from "love.video";
  import { Data } from "love.data";

  /**
   * Draws a filled or unfilled arc at position (x, y). The arc is drawn from angle1
   * to angle2 in radians. The segments parameter determines how many segments are
   * used to draw the arc. The more segments, the smoother the edge.
   *
   * @param drawmode How to draw the arc.
   * @param x The position of the center along x-axis.
   * @param y The position of the center along y-axis.
   * @param radius Radius of the arc.
   * @param angle1 The angle at which the arc begins.
   * @param angle2 The angle at which the arc terminates.
   * @param segments The number of segments used for drawing the arc.
   * @link [love.graphics.arc](https://love2d.org/wiki/love.graphics.arc)
   */
  function arc(
    drawmode: DrawMode,
    x: number,
    y: number,
    radius: number,
    angle1: number,
    angle2: number,
    segments?: number,
  ): void;

  /**
   * Draws a filled or unfilled arc at position (x, y). The arc is drawn from angle1
   * to angle2 in radians. The segments parameter determines how many segments are
   * used to draw the arc. The more segments, the smoother the edge.
   *
   * @param drawmode How to draw the arc.
   * @param arctype The type of arc to draw.
   * @param x The position of the center along x-axis.
   * @param y The position of the center along y-axis.
   * @param radius Radius of the arc.
   * @param angle1 The angle at which the arc begins.
   * @param angle2 The angle at which the arc terminates.
   * @param segments The number of segments used for drawing the arc.
   * @link [love.graphics.arc](https://love2d.org/wiki/love.graphics.arc)
   */
  function arc(
    drawmode: DrawMode,
    arctype: ArcType,
    x: number,
    y: number,
    radius: number,
    angle1: number,
    angle2: number,
    segments?: number,
  ): void;

  /**
   * Applies the given Transform object to the current coordinate transformation.
   *
   * This effectively multiplies the existing coordinate transformation's matrix
   * with the Transform object's internal matrix to produce the new coordinate
   * transformation.
   *
   * @param transform The Transform object to apply to the current graphics coordinate transform.
   * @link [love.graphics.applyTransform](https://love2d.org/wiki/love.graphics.applyTransform)
   */
  function applyTransform(transform: Transform): void;

  /**
   * Creates a screenshot once the current frame is done (after love.draw has
   * finished).
   *
   * Since this function enqueues a screenshot capture rather than executing it
   * immediately, it can be called from an input callback or love.update and it will
   * still capture all of what's drawn to the screen in that frame.
   *
   * @param filename The filename to save the screenshot to. The encoded image type is determined based on the extension of the filename, and must be one of the ImageFormats.
   * @link [love.graphics.captureScreenshot](https://love2d.org/wiki/love.graphics.captureScreenshot)
   */
  function captureScreenshot(filename: string): void;

  /**
   * Creates a screenshot once the current frame is done (after love.draw has
   * finished).
   *
   * Since this function enqueues a screenshot capture rather than executing it
   * immediately, it can be called from an input callback or love.update and it will
   * still capture all of what's drawn to the screen in that frame.
   *
   * @param callback Function which gets called once the screenshot has been captured. An ImageData is passed into the function as its only argument.
   * @link [love.graphics.captureScreenshot](https://love2d.org/wiki/love.graphics.captureScreenshot)
   */
  function captureScreenshot(
    callback: (this: void, screenshot: ImageData) => void,
  ): void;

  /**
   * Creates a screenshot once the current frame is done (after love.draw has
   * finished).
   *
   * Since this function enqueues a screenshot capture rather than executing it
   * immediately, it can be called from an input callback or love.update and it will
   * still capture all of what's drawn to the screen in that frame.
   *
   * @param channel The Channel to push the generated ImageData to.
   * @link [love.graphics.captureScreenshot](https://love2d.org/wiki/love.graphics.captureScreenshot)
   */
  function captureScreenshot(channel: Channel): void;

  /**
   * Creates a new array Image.
   * @param slices A table containing filepaths to images (or File, FileData, ImageData, or CompressedImageData objects), in an array.
   *
   * Each sub-image must have the same dimensions.
   *
   * A table of tables can also be given, where each sub-table contains all mipmap levels for the slice index of that sub-table.
   * @param settings Optional table of settings to configure the array image.
   * @return image, An Array Image object.
   * @link [love.graphics.newArrayImage](https://love2d.org/wiki/love.graphics.newArrayImage)
   */
  function newArrayImage(
    slices: Array<ImageInformation>,
    settings?: {
      /**
       * True to make the image use mipmaps, false to disable them. Mipmaps will be automatically generated if the image isn't a compressed texture format.
       * @default false
       */
      mipmaps?: boolean;

      /**
       * True to treat the image's pixels as linear instead of sRGB, when gamma correct rendering is enabled. Most images are authored as sRGB.
       * @default false
       */
      linear?: boolean;

      /**
       * The DPI scale to use when drawing the array image and calling getWidth/getHeight.
       * @default 1
       */
      dpiscale?: number;
    },
  ): Image;

  /**
   * Draws a circle.
   *
   * @param mode How to draw the circle.
   * @param x The position of the center along x-axis.
   * @param y The position of the center along y-axis.
   * @param radius The radius of the circle.
   * @link [love.graphics.circle](https://love2d.org/wiki/love.graphics.circle)
   */
  function circle(mode: DrawMode, x: number, y: number, radius: number): void;

  /**
   * Draws a circle.
   *
   * @param mode How to draw the circle.
   * @param x The position of the center along x-axis.
   * @param y The position of the center along y-axis.
   * @param radius The radius of the circle.
   * @param segments The number of segments used for drawing the circle. Note: The default variable for the segments parameter varies between different versions of LÖVE.
   * @link [love.graphics.circle](https://love2d.org/wiki/love.graphics.circle)
   */
  function circle(
    mode: DrawMode,
    x: number,
    y: number,
    radius: number,
    segments: number,
  ): void;

  /**
   * Clears the screen to transparent black (0, 0, 0, 0) in LÖVE 0.10.0 and newer.
   * @link [love.graphics.clear](https://love2d.org/wiki/love.graphics.clear)
   */
  function clear(): void;

  /**
   * Clears the screen or active Canvas to the specified color.
   * @param r The red channel of the color to clear the screen to.
   * @param g The green channel of the color to clear the screen to.
   * @param b The blue channel of the color to clear the screen to.
   * @param a The alpha channel of the color to clear the screen to.
   * @param clearstencil Whether to clear the active stencil buffer, if present. It can also be an integer between 0 and 255 to clear the stencil buffer to a specific value. (Default `true`)
   * @param cleardepth Whether to clear the active depth buffer, if present. It can also be a number between 0 and 1 to clear the depth buffer to a specific value. (Default `true`)
   * @link [love.graphics.clear](https://love2d.org/wiki/love.graphics.clear)
   */
  function clear(
    r: number,
    g: number,
    b: number,
    a?: number,
    clearstencil?: boolean,
    cleardepth?: boolean,
  ): void;

  /**
   * Clears multiple screens to an associated background color.
   * @param color `[r,g,b,a]` colours to clear the first active Canvas to.
   * @param remainingArgs Continued arrays of colours ending with two values which represent the remaining two parameters described in this comment.
   * @param clearstencil First following boolean value. Whether to clear the active stencil buffer, if present. It can also be an integer between 0 and 255 to clear the stencil buffer to a specific value. (Default: true)
   * @param cleardepth Second following boolean value. Whether to clear the active depth buffer, if present. It can also be a number between 0 and 1 to clear the depth buffer to a specific value. (Default: true)
   * @link [love.graphics.clear](https://love2d.org/wiki/love.graphics.clear)
   */
  function clear(
    color: [number, number, number, number],
    ...remainingArgs: Array<[number, number, number, number] | boolean | number>
  ): void;

  /**
   * Clears the stencil or depth buffers without having to clear the color canvas as well.
   * @param clearcolor Whether to clear the active color canvas to transparent black (0, 0, 0, 0). Typically this should be set to false with this variant of the function.
   * @param clearstencil Whether to clear the active stencil buffer, if present. It can also be an integer between 0 and 255 to clear the stencil buffer to a specific value.
   * @param cleardepth Whether to clear the active depth buffer, if present. It can also be a number between 0 and 1 to clear the depth buffer to a specific value.
   * @link [love.graphics.clear](https://love2d.org/wiki/love.graphics.clear)
   */
  function clear(
    clearcolor: boolean,
    clearstencil: boolean | number,
    cleardepth: boolean | number,
  ): void;

  /**
   * Discards (trashes) the contents of the screen or active Canvas. This is a
   * performance optimization function with niche use cases.
   *
   * If the active Canvas has just been changed and the "replace" BlendMode is about
   * to be used to draw something which covers the entire screen, calling
   * love.graphics.discard rather than calling love.graphics.clear or doing nothing
   * may improve performance on mobile devices.
   *
   * On some desktop systems this function may do nothing.
   *
   * @param discardcolor Whether to discard the texture(s) of the active Canvas(es) (the contents of the screen if no Canvas is active).
   * @param discardstencil Whether to discard the contents of the stencil buffer of the screen / active Canvas.
   * @link [love.graphics.discard](https://love2d.org/wiki/love.graphics.discard)
   */
  function discard(discardcolor?: boolean, discardstencil?: boolean): void;

  /**
   * Discards (trashes) the contents of the screen or active Canvas. This is a
   * performance optimization function with niche use cases.
   *
   * If the active Canvas has just been changed and the "replace" BlendMode is about
   * to be used to draw something which covers the entire screen, calling
   * love.graphics.discard rather than calling love.graphics.clear or doing nothing
   * may improve performance on mobile devices.
   *
   * On some desktop systems this function may do nothing.
   *
   * @param discardcolors An array containing boolean values indicating whether to discard the texture of each active Canvas, when multiple simultaneous Canvases are active.
   * @param discardstencil Whether to discard the contents of the stencil buffer of the screen / active Canvas.
   * @link [love.graphics.discard](https://love2d.org/wiki/love.graphics.discard)
   */
  function discard(
    discardcolors: Array<boolean>,
    discardstencil?: boolean,
  ): void;

  /**
   * Draws a Drawable object (an Image, Canvas, SpriteBatch, ParticleSystem, Mesh, Text object, or Video) on the screen with optional rotation, scaling and shearing.
   * @param drawable A drawable object.
   * @param x The position to draw the object (x-axis).
   * @param y The position to draw the object (y-axis).
   * @param r Orientation (radians).
   * @param sx Scale factor (x-axis). Can be negative.
   * @param sy Scale factor (y-axis). Can be negative.
   * @param ox Origin offset (x-axis). (A value of 20 would effectively move your drawable object 20 pixels to the left.)
   * @param oy Origin offset (y-axis). (A value of 20 would effectively move your drawable object 20 pixels up.)
   * @param kx Shearing factor (x-axis).
   * @param ky Shearing factor (y-axis).
   * @link [love.graphics.draw](https://love2d.org/wiki/love.graphics.draw)
   */
  function draw(
    drawable: Drawable,
    x?: number,
    y?: number,
    r?: number,
    sx?: number,
    sy?: number,
    ox?: number,
    oy?: number,
    kx?: number,
    ky?: number,
  ): void;

  /**
   * Draws the specified Quadrant of the specified Texture.
   * @param texture A Texture (Image or Canvas) to texture the Quad with.
   * @param quad The Quad to draw on screen.
   * @param x The position to draw the object (x-axis).
   * @param y The position to draw the object (y-axis).
   * @param r Orientation (radians).
   * @param sx Scale factor (x-axis). Can be negative.
   * @param sy Scale factor (y-axis). Can be negative.
   * @param ox Origin offset (x-axis). (A value of 20 would effectively move your drawable object 20 pixels to the left.)
   * @param oy Origin offset (y-axis). (A value of 20 would effectively move your drawable object 20 pixels up.)
   * @param kx Shearing factor (x-axis).
   * @param ky Shearing factor (y-axis).
   * @link [love.graphics.draw](https://love2d.org/wiki/love.graphics.draw)
   */
  function draw(
    texture: Texture,
    quad: Quad,
    x?: number,
    y?: number,
    r?: number,
    sx?: number,
    sy?: number,
    ox?: number,
    oy?: number,
    kx?: number,
    ky?: number,
  ): void;

  /**
   * Draws the specified Texture with the specified Transformation to be applied to it.
   * @param texture A Texture (Image or Canvas) to texture the Quad with.
   * @param transform Transformation object.
   * @link [love.graphics.draw](https://love2d.org/wiki/love.graphics.draw)
   */
  function draw(texture: Texture, transform: Transform): void;

  /**
   * Draws a Quadrant of a Texture with the specified Transformation to be applied to it.
   * @param texture A Texture (Image or Canvas) to texture the Quad with.
   * @param quad The Quad to draw on screen.
   * @param transform Transformation object.
   * @link [love.graphics.draw](https://love2d.org/wiki/love.graphics.draw)
   */
  function draw(texture: Texture, quad: Quad, transform: Transform): void;

  /**
   * Draws many instances of a Mesh with a single draw call, using hardware geometry
   * instancing.
   *
   * Each instance can have unique properties (positions, colors, etc.) but will not
   * by default unless a custom Shader along with either per-instance attributes or
   * the love_InstanceID GLSL 3 vertex shader variable is used, otherwise they will
   * all render at the same position on top of each other.
   *
   * Instancing is not supported by some older GPUs that are only capable of using
   * OpenGL ES 2 or OpenGL 2. Use love.graphics.getSupported to check.
   *
   * @param mesh The mesh to render.
   * @param instancecount The number of instances to render.
   * @param x The position to draw the instances (x-axis).
   * @param y The position to draw the instances (y-axis).
   * @param r Orientation (radians).
   * @param sx Scale factor (x-axis).
   * @param sy Scale factor (y-axis).
   * @param ox Origin offset (x-axis).
   * @param oy Origin offset (y-axis).
   * @param kx Shearing factor (x-axis).
   * @param ky Shearing factor (y-axis).
   * @link [love.graphics.drawInstanced](https://love2d.org/wiki/love.graphics.drawInstanced)
   */
  function drawInstanced(
    mesh: Mesh,
    instancecount: number,
    x?: number,
    y?: number,
    r?: number,
    sx?: number,
    sy?: number,
    ox?: number,
    oy?: number,
    kx?: number,
    ky?: number,
  ): void;

  /**
   * Draws many instances of a Mesh with a single draw call, using hardware geometry
   * instancing.
   *
   * Each instance can have unique properties (positions, colors, etc.) but will not
   * by default unless a custom Shader along with either per-instance attributes or
   * the love_InstanceID GLSL 3 vertex shader variable is used, otherwise they will
   * all render at the same position on top of each other.
   *
   * Instancing is not supported by some older GPUs that are only capable of using
   * OpenGL ES 2 or OpenGL 2. Use love.graphics.getSupported to check.
   *
   * @param mesh The mesh to render.
   * @param instancecount The number of instances to render.
   * @param transform A transform object.
   * @link [love.graphics.drawInstanced](https://love2d.org/wiki/love.graphics.drawInstanced)
   */
  function drawInstanced(
    mesh: Mesh,
    instancecount: number,
    transform: Transform,
  ): void;

  /**
   * Draws a layer of an Array Texture.
   *
   * @param texture The Array Texture to draw.
   * @param layerindex The index of the layer to use when drawing.
   * @param x The position to draw the texture (x-axis).
   * @param y The position to draw the texture (y-axis).
   * @param r Orientation (radians).
   * @param sx Scale factor (x-axis).
   * @param sy Scale factor (y-axis).
   * @param ox Origin offset (x-axis).
   * @param oy Origin offset (y-axis).
   * @param kx Shearing factor (x-axis).
   * @param ky Shearing factor (y-axis).
   * @link [love.graphics.drawLayer](https://love2d.org/wiki/love.graphics.drawLayer)
   */
  function drawLayer(
    texture: Texture,
    layerindex: number,
    x?: number,
    y?: number,
    r?: number,
    sx?: number,
    sy?: number,
    ox?: number,
    oy?: number,
    kx?: number,
    ky?: number,
  ): void;

  /**
   * Draws a layer of an Array Texture.
   *
   * @param texture The Array Texture to draw.
   * @param layerindex The index of the layer to use when drawing.
   * @param quad The subsection of the texture's layer to use when drawing.
   * @param x The position to draw the texture (x-axis).
   * @param y The position to draw the texture (y-axis).
   * @param r Orientation (radians).
   * @param sx Scale factor (x-axis).
   * @param sy Scale factor (y-axis).
   * @param ox Origin offset (x-axis).
   * @param oy Origin offset (y-axis).
   * @param kx Shearing factor (x-axis).
   * @param ky Shearing factor (y-axis).
   * @link [love.graphics.drawLayer](https://love2d.org/wiki/love.graphics.drawLayer)
   */
  function drawLayer(
    texture: Texture,
    layerindex: number,
    quad: Quad,
    x?: number,
    y?: number,
    r?: number,
    sx?: number,
    sy?: number,
    ox?: number,
    oy?: number,
    kx?: number,
    ky?: number,
  ): void;

  /**
   * Draws a layer of an Array Texture.
   *
   * @param texture The Array Texture to draw.
   * @param layerindex The index of the layer to use when drawing.
   * @param transform A transform object.
   * @link [love.graphics.drawLayer](https://love2d.org/wiki/love.graphics.drawLayer)
   */
  function drawLayer(
    texture: Texture,
    layerindex: number,
    transform: Transform,
  ): void;

  /**
   * Draws a layer of an Array Texture.
   *
   * @param texture The Array Texture to draw.
   * @param layerindex The index of the layer to use when drawing.
   * @param quad The subsection of the texture's layer to use when drawing.
   * @param transform A transform object.
   * @link [love.graphics.drawLayer](https://love2d.org/wiki/love.graphics.drawLayer)
   */
  function drawLayer(
    texture: Texture,
    layerindex: number,
    quad: Quad,
    transform: Transform,
  ): void;

  /**
   * Draws an ellipse.
   *
   * @param mode How to draw the ellipse.
   * @param x The position of the center along x-axis.
   * @param y The position of the center along y-axis.
   * @param radiusx The radius of the ellipse along the x-axis (half the ellipse's width).
   * @param radiusy The radius of the ellipse along the y-axis (half the ellipse's height).
   * @link [love.graphics.ellipse](https://love2d.org/wiki/love.graphics.ellipse)
   */
  function ellipse(
    mode: DrawMode,
    x: number,
    y: number,
    radiusx: number,
    radiusy: number,
  ): void;

  /**
   * Draws an ellipse.
   *
   * @param mode How to draw the ellipse.
   * @param x The position of the center along x-axis.
   * @param y The position of the center along y-axis.
   * @param radiusx The radius of the ellipse along the x-axis (half the ellipse's width).
   * @param radiusy The radius of the ellipse along the y-axis (half the ellipse's height).
   * @param segments The number of segments used for drawing the ellipse.
   * @link [love.graphics.ellipse](https://love2d.org/wiki/love.graphics.ellipse)
   */
  function ellipse(
    mode: DrawMode,
    x: number,
    y: number,
    radiusx: number,
    radiusy: number,
    segments: number,
  ): void;

  /**
   * Immediately renders any pending automatically batched draws.
   *
   * LÖVE will call this function internally as needed when most state is changed,
   * so it is not necessary to manually call it.
   *
   * The current batch will be automatically flushed by love.graphics state changes
   * (except for the transform stack and the current color), as well as Shader:send
   * and methods on Textures which change their state. Using a different Image in
   * consecutive love.graphics.draw calls will also flush the current batch.
   *
   * SpriteBatches, ParticleSystems, Meshes, and Text objects do their own batching
   * and do not affect automatic batching of other draws.
   * @link [love.graphics.flushBatch](https://love2d.org/wiki/love.graphics.flushBatch)
   */
  function flushBatch(): void;

  /**
   * Gets the current background color.
   *
   * @return r, The red component.
   * @return g, The green component.
   * @return b, The blue component.
   * @return a, The alpha component.
   * @link [love.graphics.getBackgroundColor](https://love2d.org/wiki/love.graphics.getBackgroundColor)
   */
  function getBackgroundColor(): LuaMultiReturn<
    [r: number, g: number, b: number, a: number]
  >;

  /**
   * Gets the blending mode.
   *
   * @return mode, The current blend mode.
   * @return alphamode, The current blend alpha mode – it determines how the alpha of drawn objects affects blending.
   * @link [love.graphics.getBlendMode](https://love2d.org/wiki/love.graphics.getBlendMode)
   */
  function getBlendMode(): LuaMultiReturn<
    [mode: BlendMode, alphamode: BlendAlphaMode]
  >;

  /**
   * Gets the current target Canvas.
   *
   * @returns All active canvases.
   * @link [love.graphics.getCanvas](https://love2d.org/wiki/love.graphics.getCanvas)
   * @since 0.8.0
   */
  function getCanvas(): LuaMultiReturn<Canvas[]>;

  /**
   * Gets the available Canvas formats, and whether each is supported.
   *
   * @return formats, A table containing CanvasFormats as keys, and a boolean indicating whether the format is supported as values. Not all systems support all formats.
   * @link [love.graphics.getCanvasFormats](https://love2d.org/wiki/love.graphics.getCanvasFormats)
   */
  function getCanvasFormats(): { [key in CanvasFormat]: boolean };

  /**
   * Gets the raw and compressed pixel formats usable for Images, and whether each is supported.
   * @return formats, A table containing PixelFormats as keys, and a boolean indicating whether the format is supported as values. Not all systems support all formats.
   * @link [love.graphics.getImageFormats](https://love2d.org/wiki/love.graphics.getImageFormats)
   */
  function getImageFormats(): { [key in PixelFormat]: boolean };

  /**
   * Gets the current color.
   *
   * @return r, The red component.
   * @return g, The red component.
   * @return b, The blue component.
   * @return a, The alpha component.
   * @link [love.graphics.getColor](https://love2d.org/wiki/love.graphics.getColor)
   */
  function getColor(): LuaMultiReturn<
    [r: number, g: number, b: number, a: number]
  >;

  /**
   * Gets the active color components used when drawing. Normally all 4 components
   * are active unless love.graphics.setColorMask has been used.
   *
   * The color mask determines whether individual components of the colors of drawn
   * objects will affect the color of the screen. They affect love.graphics.clear
   * and Canvas:clear as well.
   *
   * @return r, Whether the red color component is active when rendering.
   * @return g, Whether the green color component is active when rendering.
   * @return b, Whether the blue color component is active when rendering.
   * @return a, Whether the alpha color component is active when rendering.
   * @link [love.graphics.getColorMask](https://love2d.org/wiki/love.graphics.getColorMask)
   * @since 0.9.0
   */
  function getColorMask(): LuaMultiReturn<
    [r: boolean, g: boolean, b: boolean, a: boolean]
  >;

  /**
   * Returns the default scaling filters used with Images, Canvases, and Fonts.
   *
   * @return min, Filter mode used when scaling the image down.
   * @return mag, Filter mode used when scaling the image up.
   * @return anisotropy, Maximum amount of Anisotropic Filtering used.
   * @link [love.graphics.getDefaultFilter](https://love2d.org/wiki/love.graphics.getDefaultFilter)
   * @since 0.9.0
   */
  function getDefaultFilter(): LuaMultiReturn<
    [min: FilterMode, mag: FilterMode, anisotropy: number]
  >;

  /**
   * Gets the current depth test mode and whether writing to the depth buffer is
   * enabled.
   *
   * This is low-level functionality designed for use with custom vertex shaders and
   * Meshes with custom vertex attributes. No higher level APIs are provided to set
   * the depth of 2D graphics such as shapes, lines, and Images.
   *
   * @return comparemode, Depth comparison mode used for depth testing.
   * @return write, Whether to write update / write values to the depth buffer when rendering.
   * @link [love.graphics.getDepthMode](https://love2d.org/wiki/love.graphics.getDepthMode)
   * @since 11.0
   */
  function getDepthMode(): LuaMultiReturn<
    [comparemode: CompareMode, write: boolean]
  >;

  /**
   * Gets the width and height of the window.
   *
   * @return width, The width of the window.
   * @return height, The height of the window.
   * @link [love.graphics.getDimensions](https://love2d.org/wiki/love.graphics.getDimensions)
   * @since 11.0
   */
  function getDimensions(): LuaMultiReturn<[width: number, height: number]>;

  /**
   * Gets the current Font object.
   *
   * @return font, The current Font, or _nil/undefined_ if none is set.
   * @link [love.graphics.getFont](https://love2d.org/wiki/love.graphics.getFont)
   * @since 0.9.0
   */
  function getFont(): Font | undefined;

  /**
   * Gets whether triangles with clockwise- or counterclockwise-ordered vertices are
   * considered front-facing.
   *
   * This is designed for use in combination with Mesh face culling. Other
   * love.graphics shapes, lines, and sprites are not guaranteed to have a specific
   * winding order to their internal vertices.
   *
   * @return winding, The winding mode to use. The default winding is counterclockwise ("ccw").
   * @link [love.graphics.getFrontFaceWinding](https://love2d.org/wiki/love.graphics.getFrontFaceWinding)
   * @since 11.0
   */
  function getFrontFaceWinding(): VertexWinding;

  /**
   * Gets the height of the window.
   *
   * @return height, The height of the window.
   * @link [love.graphics.getHeight](https://love2d.org/wiki/love.graphics.getHeight)
   * @since 0.2.1
   */
  function getHeight(): number;

  /**
   * Gets the width and height in pixels of the window.
   *
   * @return pixelwidth, The width of the window in pixels.
   * @return pixelheight, The width of the window in pixels.
   * @link [love.graphics.getPixelDimensions](https://love2d.org/wiki/love.graphics.getPixelDimensions)
   * @since 11.0
   */
  function getPixelDimensions(): LuaMultiReturn<
    [pixelwidth: number, pixelheight: number]
  >;

  /**
   * Gets the height in pixels of the window.
   *
   * @return pixelheight, The height of the window in pixels.
   * @link [love.graphics.getPixelHeight](https://love2d.org/wiki/love.graphics.getPixelHeight)
   * @since 11.0
   */
  function getPixelHeight(): number;

  /**
   * Gets the width in pixels of the window.
   *
   * @return pixelwidth, The width of the window in pixels.
   * @link [love.graphics.getPixelWidth](https://love2d.org/wiki/love.graphics.getPixelWidth)
   * @since 11.0
   */
  function getPixelWidth(): number;

  /**
   * Gets the line join style.
   *
   * @return join, The LineJoin style.
   * @link [love.graphics.getLineJoin](https://love2d.org/wiki/love.graphics.getLineJoin)
   */
  function getLineJoin(): LineJoin;

  /**
   * Gets the line style.
   *
   * @return style, The current line style.
   * @link [love.graphics.getLineStyle](https://love2d.org/wiki/love.graphics.getLineStyle)
   * @since 0.3.2
   */
  function getLineStyle(): LineStyle;

  /**
   * Gets the current line width.
   *
   * @return width, The current line width.
   * @link [love.graphics.getLineWidth](https://love2d.org/wiki/love.graphics.getLineWidth)
   * @since 0.3.2
   */
  function getLineWidth(): number;

  /**
   * Gets whether back-facing triangles in a Mesh are culled.
   *
   * Mesh face culling is designed for use with low level custom
   * hardware-accelerated 3D rendering via custom vertex attributes on Meshes,
   * custom vertex shaders, and depth testing with a depth buffer.
   *
   * @return mode, The Mesh face culling mode in use (whether to render everything, cull back-facing triangles, or cull front-facing triangles).
   * @link [love.graphics.getMeshCullMode](https://love2d.org/wiki/love.graphics.getMeshCullMode)
   * @since 11.0
   */
  function getMeshCullMode(): CullMode;

  /**
   * Returns the current Shader. Returns _nil/undefined_ if none is set.
   *
   * @return shader, The current Shader.
   * @link [love.graphics.getShader](https://love2d.org/wiki/love.graphics.getShader)
   * @since 0.9.0
   */
  function getShader(): Shader | undefined;

  /**
   * Gets the current depth of the transform / state stack (the number of pushes
   * without corresponding pops).
   *
   * @return depth, The current depth of the transform and state love.graphics stack.
   * @link [love.graphics.getStackDepth](https://love2d.org/wiki/love.graphics.getStackDepth)
   */
  function getStackDepth(): number;

  /**
   * Gets performance-related rendering statistics.
   *
   * @return stats, A table with the following fields:
   * @link [love.graphics.getStats](https://love2d.org/wiki/love.graphics.getStats)
   */
  function getStats(): {
    /**
     * The number of draw calls made so far during the current frame.
     */
    drawcalls: number;
    /**
     * The number of times the active Canvas has been switched so far during the current frame.
     */
    canvasswitches: number;
    /**
     * The estimated total size in bytes of video memory used by all loaded Images, Canvases, and Fonts.
     */
    texturememory: number;
    /**
     * The number of Image objects currently loaded.
     */
    images: number;
    /**
     * The number of Canvas objects currently loaded.
     */
    canvases: number;
    /**
     * The number of Font objects currently loaded.
     */
    fonts: number;
    /**
     * The number of times the active Shader has been changed so far during the current frame.
     */
    shaderswitches: number;
    /**
     * The number of draw calls that were saved by LÖVE's automatic batching, since the start of the frame.
     */
    drawcallsbatched: number;
  };

  /**
   * Gets whether stencil testing is enabled.
   *
   * When stencil testing is enabled, the geometry of everything that is drawn will
   * be clipped / stencilled out based on whether it intersects with what has been
   * previously drawn to the stencil buffer.
   *
   * Each Canvas has its own stencil buffer.
   *
   * @return comparemode, The type of comparison that is made for each pixel. Will be "always" if stencil testing is disabled.
   * @return comparevalue, The value used when comparing with the stencil value of each pixel.
   * @link [love.graphics.getStencilTest](https://love2d.org/wiki/love.graphics.getStencilTest)
   * @since 0.10.0
   */
  function getStencilTest(): LuaMultiReturn<
    [comparemode: boolean, comparevalue: boolean]
  >;

  /**
   * Gets the optional graphics features and whether they're supported on the
   * system.
   *
   * Some older or low-end systems don't always support all graphics features.
   *
   * @return features, A table containing GraphicsFeature keys, and boolean values indicating whether each feature is supported.
   * @link [love.graphics.getSupported](https://love2d.org/wiki/love.graphics.getSupported)
   * @since 0.10.0
   */
  function getSupported(): { [key in GraphicsFeature]: boolean };

  /**
   * Gets the system-dependent maximum values for love.graphics features.
   *
   * @return limits, A table containing GraphicsLimit keys, and number values.
   * @link [love.graphics.getSystemLimits](https://love2d.org/wiki/love.graphics.getSystemLimits)
   * @since 0.10.0
   */
  function getSystemLimits(): { [key in GraphicsLimit]: number };

  /**
   * Gets the point size.
   *
   * @return size, The current point size.
   * @link [love.graphics.getPointSize](https://love2d.org/wiki/love.graphics.getPointSize)
   */
  function getPointSize(): number;

  /**
   * Gets information about the system's video card and drivers.
   *
   * @return name, The name of the renderer, e.g. "OpenGL" or "OpenGL ES".
   * @return version, The version of the renderer with some extra driver-dependent version info, e.g. "2.1 INTEL-8.10.44".
   * @return vendor, The name of the graphics card vendor, e.g. "Intel Inc".
   * @return device, The name of the graphics card, e.g. "Intel HD Graphics 3000 OpenGL Engine".
   * @link [love.graphics.getRendererInfo](https://love2d.org/wiki/love.graphics.getRendererInfo)
   * @since 0.9.0
   */
  function getRendererInfo(): LuaMultiReturn<
    [name: string, version: string, vendor: string, device: string]
  >;

  /**
   * Gets the current scissor box.
   *
   * @return x, The x component of the top-left point of the box.
   * @return y, The y component of the top-left point of the box.
   * @return width, The width of the box.
   * @return height, The height of the box.
   * @link [love.graphics.getScissor](https://love2d.org/wiki/love.graphics.getScissor)
   * @since 0.4.0
   */
  function getScissor(): LuaMultiReturn<
    [x: number, y: number, width: number, height: number]
  >;

  /**
   * Gets the available texture types, and whether each is supported.
   *
   * @return texturetypes, A table containing TextureTypes as keys, and a boolean indicating whether the type is supported as values. Not all systems support all types.
   * @link [love.graphics.getTextureTypes](https://love2d.org/wiki/love.graphics.getTextureTypes)
   * @since 11.0
   */
  function getTextureTypes(): { [key in TextureType]: boolean };

  /**
   * Gets the width of the window.
   *
   * @return width, The width of the window.
   * @link [love.graphics.getWidth](https://love2d.org/wiki/love.graphics.getWidth)
   * @since 0.2.1
   */
  function getWidth(): number;

  /**
   * Sets the scissor to the rectangle created by the intersection of the specified
   * rectangle with the existing scissor. If no scissor is active yet, it behaves
   * like love.graphics.setScissor.
   *
   * The scissor limits the drawing area to a specified rectangle. This affects all
   * graphics calls, including love.graphics.clear.
   *
   * The dimensions of the scissor is unaffected by graphical transformations
   * (translate, scale, ...).
   *
   * @param x The x-coordinate of the upper left corner of the rectangle to intersect with the existing scissor rectangle.
   * @param y The y-coordinate of the upper left corner of the rectangle to intersect with the existing scissor rectangle.
   * @param width The width of the rectangle to intersect with the existing scissor rectangle.
   * @param height The height of the rectangle to intersect with the existing scissor rectangle.
   * @link [love.graphics.intersectScissor](https://love2d.org/wiki/love.graphics.intersectScissor)
   * @since 0.10.0
   */
  function intersectScissor(
    x: number,
    y: number,
    width: number,
    height: number,
  ): void;

  /**
   * Sets the scissor to the rectangle created by the intersection of the specified
   * rectangle with the existing scissor. If no scissor is active yet, it behaves
   * like love.graphics.setScissor.
   *
   * The scissor limits the drawing area to a specified rectangle. This affects all
   * graphics calls, including love.graphics.clear.
   *
   * The dimensions of the scissor is unaffected by graphical transformations
   * (translate, scale, ...).
   *
   * @link [love.graphics.intersectScissor](https://love2d.org/wiki/love.graphics.intersectScissor)
   * @since 0.10.0
   */
  function intersectScissor(): void;

  /**
   * Gets whether the graphics module is able to be used.
   *
   * @return active, Whether the graphics module is active and able to be used.
   * @link [love.graphics.isActive](https://love2d.org/wiki/love.graphics.isActive)
   * @since 0.10.0
   */
  function isActive(): boolean;

  /**
   * Converts the given 2D position from screen-space into global coordinates.
   *
   * This effectively applies the reverse of the current graphics transformations to
   * the given position. A similar Transform:inverseTransformPoint method exists for
   * Transform objects.
   *
   * @param screenX The x component of the screen-space position.
   * @param screenY The y component of the screen-space position.
   * @return globalX, The x component of the position in global coordinates.
   * @return globalY, The y component of the position in global coordinates.
   * @link [love.graphics.inverseTransformPoint](https://love2d.org/wiki/love.graphics.inverseTransformPoint)
   * @since 11.0
   */
  function inverseTransformPoint(
    screenX: number,
    screenY: number,
  ): LuaMultiReturn<[globalX: number, globalY: number]>;

  /**
   * Gets whether gamma-correct rendering is supported and enabled. It can be
   * enabled by setting t.gammacorrect = true in love.conf.
   *
   * Not all devices support gamma-correct rendering, in which case it will be
   * automatically disabled and this function will return false. It is supported on
   * desktop systems which have graphics cards that are capable of using OpenGL 3 /
   * DirectX 10, and iOS devices that can use OpenGL ES 3.
   *
   * @return gammacorrect, True if gamma-correct rendering is supported and was enabled in love.conf, false otherwise.
   * @link [love.graphics.isGammaCorrect](https://love2d.org/wiki/love.graphics.isGammaCorrect)
   * @since 0.10.0
   */
  function isGammaCorrect(): boolean;

  /**
   * Gets whether wireframe mode is used when drawing.
   *
   * @return wireframe, True if wireframe lines are used when drawing, false if it's not.
   * @link [love.graphics.isWireframe](https://love2d.org/wiki/love.graphics.isWireframe)
   * @since 0.9.1
   */
  function isWireframe(): boolean;

  /**
   * Draws lines between points.
   * ```ts
   * love.graphics.line(4, 4, 8, 8, 12, 8);      // x1y1x2y2...
   * love.graphics.line([4, 4, 8, 8, 12, 8]);    // [x1y1x2y2...]
   * ```
   * @param points x position followed by y position continued.
   * @link [love.graphics.line](https://love2d.org/wiki/love.graphics.line)
   */
  function line(...points: number[]): void;
  function line(points: number[]): void;

  /**
   * Interface for passing settings table to love.graphics.newCanvas
   */
  interface CanvasSettings {
    type?: TextureType;
    format?: PixelFormat;
    readable?: boolean;
    msaa?: number;
    dpiscale?: number;
    mipmaps?: MipmapMode;
  }

  /**
   * Creates a new Canvas object for offscreen rendering.
   *
   * @returns canvas, A new Canvas with dimensions equal to the window's size in pixels.
   * @link [love.graphics.newCanvas](https://love2d.org/wiki/love.graphics.newCanvas)
   * @since 0.8.0
   */
  function newCanvas(): Canvas;

  /**
   * Creates a new Canvas object with specified width and height.
   *
   * @param width The width of the Canvas.
   * @param height The height of the Canvas.
   * @param settings A table of optional settings.
   * @return canvas, A new Canvas with specified width and height.
   * @link [love.graphics.newCanvas](https://love2d.org/wiki/love.graphics.newCanvas)
   * @since 0.8.0
   */
  function newCanvas(width: number, height: number): Canvas;

  /**
   * Creates a 2D or cubemap Canvas using the given settings.
   *
   * @param width The width of the Canvas.
   * @param height The height of the Canvas.
   * @param settings A table of optional settings.
   * @return canvas, A new Canvas object.
   * @link [love.graphics.newCanvas](https://love2d.org/wiki/love.graphics.newCanvas)
   * @since 11.0
   */
  function newCanvas(
    width: number,
    height: number,
    settings: CanvasSettings,
  ): Canvas;

  /**
   * Creates a volume or array texture-type Canvas.
   *
   * @param width The width of the Canvas.
   * @param height The height of the Canvas.
   * @param layers The number of array layers (if the Canvas is an Array Texture), or the volume depth (if the Canvas is a Volume Texture).
   * @param settings A table of optional settings.
   * @return canvas, A new Canvas with specified width and height.
   * @link [love.graphics.newCanvas](https://love2d.org/wiki/love.graphics.newCanvas)
   * @since 11.0
   */
  function newCanvas(
    width: number,
    height: number,
    layers: number,
    settings?: CanvasSettings,
  ): Canvas;

  /**
   * Creates a new cubemap Image.
   *
   * @param filename The filepath to a cubemap image file (or a File, FileData, or ImageData).
   * @param settings Optional table of settings to configure the cubemap image.
   * @return image, An cubemap Image object.
   * @link [love.graphics.newCubeImage](https://love2d.org/wiki/love.graphics.newCubeImage)
   * @since 11.0
   */
  function newCubeImage(
    filename: ImageInformation,
    settings?: ImageSettings,
  ): Image;

  /**
   * Creates a cubemap Image given a different image file for each cube face.
   * @param faces A table containing 6 filepaths to images (or File, FileData, ImageData, or CompressedImageData objects), in an array. Each face image must have the same dimensions. A table of tables can also be given, where each sub-table contains all mipmap levels for the cube face index of that sub-table.
   * @param settings Optional table of settings to configure the cubemap image.
   * @return image, An cubemap Image object.
   * @link [love.graphics.newCubeImage](https://love2d.org/wiki/love.graphics.newCubeImage)
   * @since 11.0
   */
  function newCubeImage(
    faces: [
      faceA: ImageInformation,
      faceB: ImageInformation,
      faceC: ImageInformation,
      faceD: ImageInformation,
      faceE: ImageInformation,
      faceF: ImageInformation,
    ],
    settings?: ImageSettings,
  ): Image;

  /**
   * Create a new BMFont or TrueType font.
   *
   * @param filename The filepath to the BMFont or TrueType font file.
   * @returns font, A Font object which can be used to draw text on screen.
   * @link [love.graphics.newFont](https://love2d.org/wiki/love.graphics.newFont)
   */
  function newFont(filename: string): Font;

  /**
   * Create a new TrueType font.
   *
   * @param filename The filepath to the TrueType font file.
   * @param size The size of the font in pixels.
   * @param hinting True Type hinting mode. (Default: "normal")
   * @param dpiscale The DPI scale factor of the font. (Default: love.graphics.getDPIScale())
   * @returns font, A Font object which can be used to draw text on screen.
   * @link [love.graphics.newFont](https://love2d.org/wiki/love.graphics.newFont)
   * @since 11.0
   */
  function newFont(
    filename: string,
    size: number,
    hinting?: HintingMode,
    dpiscale?: number,
  ): Font;

  /**
   * Create a new BMFont.
   *
   * @param filename The filepath to the BMFont file.
   * @param imagefilename The filepath to the BMFont's image file. If this argument is omitted, the path specified inside the BMFont file will be used.
   * @return font, A Font object which can be used to draw text on screen.
   * @link [love.graphics.newFont](https://love2d.org/wiki/love.graphics.newFont)
   */
  function newFont(filename: string, imagefilename: string): Font;

  /**
   * Create a new instance of the default font (Vera Sans) with a custom size.
   *
   * @param size The size of the font in pixels. (Default: 12)
   * @param hinting True Type hinting mode.
   * @param dpiscale The DPI scale factor of the font.
   * @returns font, A Font object which can be used to draw text on screen.
   * @link [love.graphics.newFont](https://love2d.org/wiki/love.graphics.newFont)
   * @since 11.0
   */
  function newFont(
    size?: number,
    hinting?: HintingMode,
    dpiscale?: number,
  ): Font;

  /**
   * Creates a new Font from a TrueType Font or BMFont file. Created fonts are not
   * cached, in that calling this function with the same arguments will always
   * create a new Font object.
   *
   * All variants which accept a filename can also accept a Data object instead.
   *
   * @param size The size of the font in pixels.
   * @return font, A Font object which can be used to draw text on screen.
   * @link [love.graphics.newFont](https://love2d.org/wiki/love.graphics.newFont)
   * @since 11.0
   */
  function newFont(size: number): Font;

  /**
   * Creates a standard Mesh with the specified vertices.
   *
   * @param vertices The table filled with vertex information tables.
   * @param mode How the vertices are used when drawing. The default mode "fan" is sufficient for simple convex polygons.
   * @param usage The expected usage of the Mesh. The specified usage mode affects the Mesh's memory usage and performance.
   * @return mesh, The new Mesh.
   * @link [love.graphics.newMesh](https://love2d.org/wiki/love.graphics.newMesh)
   * @since 0.10.0
   */
  function newMesh(
    vertices: [
      faceA: ImageInformation,
      faceB: ImageInformation,
      faceC: ImageInformation,
      faceD: ImageInformation,
      faceE: ImageInformation,
      faceF: ImageInformation,
    ],
    mode?: MeshDrawMode,
    usage?: SpriteBatchUsage,
  ): Mesh;

  /**
   * Creates a standard Mesh with the specified number of vertices.
   *
   * @param vertexcount The total number of vertices the Mesh will use. Each vertex is initialized to [0,0, 0,0, 255,255,255,255].
   * @param mode How the vertices are used when drawing. The default mode "fan" is sufficient for simple convex polygons.
   * @param usage The expected usage of the Mesh. The specified usage mode affects the Mesh's memory usage and performance.
   * @return mesh, The new Mesh.
   * @link [love.graphics.newMesh](https://love2d.org/wiki/love.graphics.newMesh)
   * @since 0.10.0
   */
  function newMesh(
    vertexcount: number,
    mode?: MeshDrawMode,
    usage?: SpriteBatchUsage,
  ): Mesh;

  /**
   * Creates a Mesh with custom vertex attributes and the specified vertex data.
   *
   * @param vertexformat A table in the form of [attribute, ...]. Each attribute is a table which specifies a custom vertex attribute used for each vertex.
   * @param vertices The table filled with vertex information tables for each vertex, in the form of where each vertex is a table in the form of [attributecomponent, ...].
   * @param mode How the vertices are used when drawing. The default mode "fan" is sufficient for simple convex polygons.
   * @param usage The expected usage of the Mesh. The specified usage mode affects the Mesh's memory usage and performance.
   * @return mesh, The new Mesh.
   * @link [love.graphics.newMesh](https://love2d.org/wiki/love.graphics.newMesh)
   * @since 0.10.0
   */
  function newMesh<T extends MeshVertexDataType>(
    vertexformat: Array<VertexAttribute<T>>,
    vertices: Array<Array<any>>,
    mode?: MeshDrawMode,
    usage?: SpriteBatchUsage,
  ): Mesh;

  /**
   * Creates a Mesh with custom vertex attributes and the specified number of vertices.
   *
   * @param vertexformat A table in the form of [attribute, ...]. Each attribute is a table which specifies a custom vertex attribute used for each vertex.
   * @param vertexcount The total number of vertices the Mesh will use.
   * @param mode How the vertices are used when drawing. The default mode "fan" is sufficient for simple convex polygons.
   * @param usage The expected usage of the Mesh. The specified usage mode affects the Mesh's memory usage and performance.
   * @return mesh, The new Mesh.
   * @link [love.graphics.newMesh](https://love2d.org/wiki/love.graphics.newMesh)
   * @since 0.10.0
   */
  function newMesh<T extends MeshVertexDataType>(
    vertexformat: Array<VertexAttribute<T>>,
    vertexcount: number,
    mode?: MeshDrawMode,
    usage?: SpriteBatchUsage,
  ): Mesh;

  /**
   * Creates a new Image from the image at the specified filename.
   *
   * @param filename The filepath to the image file.
   * @return image, An Image object which can be drawn on screen.
   * @link [love.graphics.newImage](https://love2d.org/wiki/love.graphics.newImage)
   */
  function newImage(filename: string): Image;

  /**
   * Creates a new Image from the provided ImageData.
   * @param imageData An ImageData object. The Image will use this ImageData to reload itself when love.window.setMode is called.
   * @return image, An Image object which can be drawn on screen.
   * @link [love.graphics.newImage](https://love2d.org/wiki/love.graphics.newImage)
   */
  function newImage(imageData: ImageData): Image;

  /**
   * Creates a new Image from the provided CompressImageData.
   *
   * @param compressedImageData A CompressedImageData object. The Image will use this CompressedImageData to reload itself when love.window.setMode is called.
   * @return image, An Image object which can be drawn on screen.
   * @link [love.graphics.newImage](https://love2d.org/wiki/love.graphics.newImage)
   * @since 0.9.0
   */
  function newImage(compressedImageData: CompressedImageData): Image;

  /**
   * Creates a new Image from a filepath, FileData, an ImageData, or a CompressedImageData, and optionally generates or specifies mipmaps for the image.
   * @param filename The filepath to the image file (or a FileData or ImageData or CompressedImageData object).
   * @param flags A table.
   * @return image, A new Image object which can be drawn on screen.
   * @link [love.graphics.newImage](https://love2d.org/wiki/love.graphics.newImage)
   * @since 0.9.0
   */
  function newImage(
    filename: string | FileData | ImageData | CompressedImageData,
    flags: {
      /**
       * True if the image's pixels should be interpreted as being linear RGB rather than sRGB-encoded, if gamma-correct rendering is enabled. Has no effect otherwise. (Default: false)
       */
      linear?: boolean;
      /**
       * If true, mipmaps for the image will be automatically generated (or taken from the images's file if possible, if the image originated from a CompressedImageData). If this value is a table, it should contain a list of other filenames of images of the same format that have progressively half-sized dimensions, all the way down to 1x1. Those images will be used as this Image's mipmap levels. (Default: false)
       */
      mipmaps?: boolean | Array<string>;
    },
  ): Image;

  /**
   * Creates a new Font by loading a specifically formatted image file.
   *
   * @param filename The filepath to the image file.
   * @param glyphs A string of the characters in the image in order from left to right.
   * @return font, A Font object which can be used to draw text on screen.
   * @link [love.graphics.newImageFont](https://love2d.org/wiki/love.graphics.newImageFont)
   */
  function newImageFont(filename: string, glyphs: string): Font;

  /**
   * Creates a new Font from the specifically formatted ImageData.
   *
   * @param imageData The ImageData object to create the font from.
   * @param glyphs A string of the characters in the image in order from left to right.
   * @return font, A Font object which can be used to draw text on screen.
   * @link [love.graphics.newImageFont](https://love2d.org/wiki/love.graphics.newImageFont)
   */
  function newImageFont(imageData: ImageData, glyphs: string): Font;

  /**
   * Creates a new Font with additional spacing to apply to each glyph in the Font.
   *
   * @param filename The filepath to the image file.
   * @param glyphs A string of the characters in the image in order from left to right.
   * @param extraspacing Additional spacing (positive or negative) to apply to each glyph in the Font.
   * @return font, A Font object which can be used to draw text on screen.
   * @link [love.graphics.newImageFont](https://love2d.org/wiki/love.graphics.newImageFont)
   * @since 0.10.0
   */
  function newImageFont(
    filename: string | ImageData,
    glyphs: string,
    extraspacing: number,
  ): Font;

  /**
   * Creates a new ParticleSystem using the specified image.
   *
   * @param image The image to use.
   * @param buffer The max number of particles at the same time. (Default: 1000)
   * @return system, A new ParticleSystem.
   * @link [love.graphics.newParticleSystem](https://love2d.org/wiki/love.graphics.newParticleSystem)
   */
  function newParticleSystem(image: Image, buffer?: number): ParticleSystem;

  /**
   * Creates a new ParticleSystem using the specified Texture.
   *
   * @param texture The Image or Canvas to use.
   * @param buffer The max number of particles at the same time. (Default: 1000)
   * @return system, A new ParticleSystem.
   * @link [love.graphics.newParticleSystem](https://love2d.org/wiki/love.graphics.newParticleSystem)
   * @since 0.9.1
   */
  function newParticleSystem(texture: Texture, buffer?: number): ParticleSystem;

  /**
   * Creates a new Shader object for hardware-accelerated vertex and pixel effects.
   * A Shader contains either vertex shader code, pixel shader code, or both.
   *
   * Vertex shader code must contain at least one function, named position, which is
   * the function that will produce transformed vertex positions of drawn objects in
   * screen-space.
   *
   * Pixel shader code must contain at least one function, named effect, which is
   * the function that will produce the color which is blended onto the screen for
   * each pixel a drawn object touches.
   *
   * @param code The pixel shader or vertex shader code, or a filename pointing to a file with the code.
   * @return shader, A Shader object for use in drawing operations.
   * @link [love.graphics.newShader](https://love2d.org/wiki/love.graphics.newShader)
   * @since 0.9.0
   */
  function newShader<T extends { [key: string]: any } = { [key: string]: any }>(
    code: string,
  ): Shader<T>;

  /**
   * Creates a new Shader object for hardware-accelerated vertex and pixel effects.
   * A Shader contains either vertex shader code, pixel shader code, or both.
   *
   * Vertex shader code must contain at least one function, named position, which is
   * the function that will produce transformed vertex positions of drawn objects in
   * screen-space.
   *
   * Pixel shader code must contain at least one function, named effect, which is
   * the function that will produce the color which is blended onto the screen for
   * each pixel a drawn object touches.
   *
   * @param pixelcode The pixel shader code, or a filename pointing to a file with the code.
   * @param vertexcode The vertex shader code, or a filename pointing to a file with the code.
   * @return shader, A Shader object for use in drawing operations.
   * @link [love.graphics.newShader](https://love2d.org/wiki/love.graphics.newShader)
   * @since 0.9.0
   */
  function newShader<T extends { [key: string]: any } = { [key: string]: any }>(
    pixelcode: string,
    vertexcode: string,
  ): Shader<T>;

  /**
   * Creates a new drawable Text object.
   *
   * @param font The font to use for the text.
   * @param textstring The initial string of text that the new Text object will contain. May be _nil/undefined_.
   * @return text, The new drawable Text object.
   * @link [love.graphics.newText](https://love2d.org/wiki/love.graphics.newText)
   * @since 0.10.0
   */
  function newText(font: Font, textstring?: string): Text;

  /**
   * Creates a new Quad.
   *
   * The purpose of a Quad is to describe the result of the following transformation
   * on any drawable object. The object is first scaled to dimensions sw * sh. The
   * Quad then describes the rectangular area of dimensions width * height whose
   * upper left corner is at position (x, y) inside the scaled object.
   *
   * @param x The top-left position along the x-axis.
   * @param y The top-left position along the y-axis.
   * @param width The width of the Quad.
   * @param height The height of the Quad.
   * @param sw The reference width, the width of the Image.
   * @param sh The reference height, the height of the Image.
   * @return quad, The new Quad.
   * @link [love.graphics.newQuad](https://love2d.org/wiki/love.graphics.newQuad)
   */
  function newQuad(
    x: number,
    y: number,
    width: number,
    height: number,
    sw: number,
    sh: number,
  ): Quad;

  /**
   * Creates a new Quad.
   *
   * The purpose of a Quad is to describe the result of the following transformation
   * on any drawable object. The object is first scaled to dimensions of Texture. The
   * Quad then describes the rectangular area of dimensions width * height whose
   * upper left corner is at position (x, y) inside the scaled object.
   *
   * @param x The top-left position along the x-axis.
   * @param y The top-left position along the y-axis.
   * @param width The width of the Quad.
   * @param height The height of the Quad.
   * @param texture The texture to scale to.
   * @return quad, The new Quad.
   * @link [love.graphics.newQuad](https://love2d.org/wiki/love.graphics.newQuad)
   */
  function newQuad(
    x: number,
    y: number,
    width: number,
    height: number,
    texture: Texture,
  ): Quad;

  /**
   * Creates a new SpriteBatch object.
   *
   * @param texture The Image or Canvas to use for the sprites.
   * @param maxsprites The max number of sprites.
   * @param usage The expected usage of the SpriteBatch. The specified usage mode affects the SpriteBatch's memory usage and performance.
   * @return spriteBatch, The new SpriteBatch.
   * @link [love.graphics.newSpriteBatch](https://love2d.org/wiki/love.graphics.newSpriteBatch)
   */
  function newSpriteBatch(
    texture: Texture,
    maxsprites?: number,
    usage?: SpriteBatchUsage,
  ): SpriteBatch;

  /**
   * Creates a new drawable Video from the specified video file. Currently only Ogg Theora video files are supported.
   *
   * @param filename The file path to the Ogg Theora video file.
   * @return video, A new Video.
   * @link [love.graphics.newVideo](https://love2d.org/wiki/love.graphics.newVideo)
   * @since 0.10.0
   */
  function newVideo(filename: string): Video;

  /**
   * Creates a new drawable Video from the specified VideoStream. Currently only Ogg Theora video files are supported.
   *
   * @param videostream A video stream object.
   * @return video, A new Video.
   * @link [love.graphics.newVideo](https://love2d.org/wiki/love.graphics.newVideo)
   * @since 0.10.0
   */
  function newVideo(videostream: VideoStream): Video;

  /**
   * Creates a new drawable Video with the specified settings.
   *
   * @param filename The file path to the Ogg Theora video file (or VideoStream).
   * @param settings Settings for the new video.
   * @return video, A new Video.
   * @link [love.graphics.newVideo](https://love2d.org/wiki/love.graphics.newVideo)
   * @since 0.10.0
   */
  function newVideo(
    filename: string | VideoStream,
    settings?: {
      /**
       * Whether to try to load the video's audio into an audio Source. If not explicitly set to true or false, it will try without causing an error if the video has no audio. (Default: false)
       */
      audio?: boolean;
      /**
       * The DPI scale factor of the video. (Default: `love.graphics.getDPIScale()`)
       */
      dpiscale?: number;
    },
  ): Video;

  /**
   * Creates a new volume (3D) Image.
   *
   * @param layers A table containing filepaths to images (or File, FileData, ImageData, or CompressedImageData objects), in an array. A table of tables can also be given, where each sub-table represents a single mipmap level and contains all layers for that mipmap.
   * @param settings Optional table of settings to configure the volume image.
   * @return image, A volume Image object.
   * @link [love.graphics.newVolumeImage](https://love2d.org/wiki/love.graphics.newVolumeImage)
   * @since 11.0
   */
  function newVolumeImage(
    layers: ImageInformation[],
    settings?: ImageSettings,
  ): Image;

  /**
   * Resets the current coordinate transformation.
   *
   * This function is always used to reverse any previous calls to
   * love.graphics.rotate, love.graphics.scale, love.graphics.shear or
   * love.graphics.translate. It returns the current transformation state to its
   * defaults.
   * @link [love.graphics.origin](https://love2d.org/wiki/love.graphics.origin)
   * @since 0.9.0
   */
  function origin(): void;

  /**
   * Draws one or more points.
   * ```ts
   * love.graphics.points(4, 4, 8, 8, 12, 12);           // xyxyxy...
   * love.graphics.points([4, 4, 8, 8, 12, 12]);         // [xyxyxy...]
   * love.graphics.points([[4, 4], [8, 8, 0, 1, 1, 1]]); // [[xy],[xyrgba],...]
   * ```
   *
   * @param points The x and y positions of the points to draw. RGBA values are optional.
   * @link [love.graphics.points](https://love2d.org/wiki/love.graphics.points)
   * @since 0.10.0
   */
  function points(...points: number[]): void;
  function points(points: number[]): void;
  function points(
    points: Array<
      | [x: number, y: number]
      | [x: number, y: number, r: number, g: number, b: number, a: number]
    >,
  ): void;

  /**
   * Draw a polygon.
   *
   * Following the mode argument, this function can accept multiple numeric
   * arguments or a single table of numeric arguments. In either case the
   * arguments are interpreted as alternating x and y coordinates of the
   * polygon's vertices.
   *
   * When in fill mode, the polygon must be convex and simple or rendering
   * artifacts may occur.
   * ```ts
   * love.graphics.polygon("fill", 0, 0, 16, 16, 0, 16);     // "fill", xyxyxy...
   * love.graphics.polygon("line", [0, 0, 16, 16, 0, 16]);   // "line", [xyxyxy...]
   * ```
   *
   * @param mode How to draw the polygon.
   * @param xys x and y positions for the vertices of the polygon.
   * @link [love.graphics.polygon](https://love2d.org/wiki/love.graphics.polygon)
   * @since 0.4.0
   */
  function polygon(mode: DrawMode, ...xys: Array<number>): void;
  function polygon(mode: DrawMode, xys: Array<number>): void;

  /**
   * Pops the current coordinate transformation from the transformation stack.
   *
   * This function is always used to reverse a previous push operation. It
   * returns the current transformation state to what it was before the last
   * preceding push. For an example, see the description of love.graphics.push.
   *
   * @link [love.graphics.pop](https://love2d.org/wiki/love.graphics.pop)
   */
  function pop(): void;

  /**
   * Displays the results of drawing operations on the screen.
   *
   * This function is used when writing your own love.run function. It presents
   * all the results of your drawing operations on the screen. See the example
   * in love.run for a typical use of this function.
   *
   * @link [love.graphics.present](https://love2d.org/wiki/love.graphics.present)
   */
  function present(): void;

  /**
   * A table containing colors and strings to add to the object, in the form of
   * `{color1, string1, color2, string2, ...}`.
   */
  type ColouredText = Array<string | RGBA>;

  /**
   * Draws text on the screen.
   * ```ts
   * love.graphics.print("Hello");
   * love.graphics.print([[1, 0, 0, 1], "Hello in red"]);
   * ```
   * @param text The text to draw. Or an array [color(rgba), string, ...].
   * @param x The position to draw the object (x-axis).
   * @param y The position to draw the object (y-axis).
   * @param r Orientation (radians).
   * @param sx Scale factor (x-axis).
   * @param sy Scale factor (y-axis).
   * @param ox Origin offset (x-axis).
   * @param oy Origin offset (y-axis).
   * @param kx Shear factor (x-axis).
   * @param ky Shear factor (y-axis).
   * @link [love.graphics.print](https://love2d.org/wiki/love.graphics.print)
   */
  function print(
    text: string | ColouredText,
    x?: number,
    y?: number,
    r?: number,
    sx?: number,
    sy?: number,
    ox?: number,
    oy?: number,
    kx?: number,
    ky?: number,
  ): void;
  function print(text: string | ColouredText, transform: Transform): void;

  /**
   * Draws formatted text, with word wrap and alignment.
   * ```ts
   * love.graphics.printf("Hello", 8, 8, 400);
   * love.graphics.printf([[1, 0, 0, 1], "Red"], 8, 8, 400);
   * ```
   *
   * @link [love.graphics.printf](https://love2d.org/wiki/love.graphics.printf)
   */
  function printf(
    text: string | ColouredText,
    x: number,
    y: number,
    limit: number,
    align?: AlignMode,
    r?: number,
    sx?: number,
    sy?: number,
    ox?: number,
    oy?: number,
    kx?: number,
    ky?: number,
  ): void;
  function printf(
    text: string | ColouredText,
    font: Font,
    x: number,
    y: number,
    limit: number,
    align?: AlignMode,
    r?: number,
    sx?: number,
    sy?: number,
    ox?: number,
    oy?: number,
    kx?: number,
    ky?: number,
  ): void;
  function printf(
    text: string | ColouredText,
    transform: Transform,
    x: number,
    y: number,
    limit: number,
    align?: AlignMode,
    r?: number,
    sx?: number,
    sy?: number,
    ox?: number,
    oy?: number,
    kx?: number,
    ky?: number,
  ): void;
  function printf(
    text: string | ColouredText,
    font: Font,
    transform: Transform,
    x: number,
    y: number,
    limit: number,
    align?: AlignMode,
    r?: number,
    sx?: number,
    sy?: number,
    ox?: number,
    oy?: number,
    kx?: number,
    ky?: number,
  ): void;

  /**
   * Copies and pushes the current coordinate transformation to the
   * transformation stack.
   *
   * This function is always used to prepare for a corresponding pop operation
   * later. It stores the current coordinate transformation state into the
   * transformation stack and keeps it active. Later changes to the
   * transformation can be undone by using the pop operation, which returns the
   * coordinate transform to the state it was in before calling push.
   *
   * @param stack The type of stack to push (e.g. just transformation state, or
   * all love.graphics state).
   * @link [love.graphics.push](https://love2d.org/wiki/love.graphics.push)
   */
  function push(stack?: StackType): void;

  /**
   * Draws a rectangle.
   *
   * @param mode How to draw the rectangle.
   * @param x The position of top-left corner along the x-axis.
   * @param y The position of top-left corner along the y-axis.
   * @param width Width of the rectangle.
   * @param height Height of the rectangle.
   * @link [love.graphics.rectangle](https://love2d.org/wiki/love.graphics.rectangle)
   * @since 0.3.2
   */
  function rectangle(
    mode: DrawMode,
    x: number,
    y: number,
    width: number,
    height: number,
  ): void;

  /**
   * Draws a rectangle.
   *
   * @param mode How to draw the rectangle.
   * @param x The position of top-left corner along the x-axis.
   * @param y The position of top-left corner along the y-axis.
   * @param width Width of the rectangle.
   * @param height Height of the rectangle.
   * @param rx The x-axis radius of each round corner. Cannot be greater than
   * half the rectangle's width.
   * @param ry The y-axis radius of each round corner. Cannot be greater than
   * half the rectangle's height.
   * @param segments The number of segments used for drawing the round corners.
   * A default amount will be chosen if no number is given.
   * @link [love.graphics.rectangle](https://love2d.org/wiki/love.graphics.rectangle)
   * @since 0.3.2
   */
  function rectangle(
    mode: DrawMode,
    x: number,
    y: number,
    width: number,
    height: number,
    rx: number,
    ry?: number,
    segments?: number,
  ): void;

  /**
   * Replaces the current coordinate transformation with the given Transform
   * object.
   *
   * @param transform The Transform object to replace the current graphics
   * coordinate transform with.
   * @link [love.graphics.replaceTransform](https://love2d.org/wiki/love.graphics.replaceTransform)
   * @since 11.0
   */
  function replaceTransform(transform: Transform): void;

  /**
   * Resets the current graphics settings.
   *
   * Calling reset makes the current drawing color white, the current background
   * color black, resets any active Canvas or Shader, and removes any scissor
   * settings. It sets the BlendMode to alpha. It also sets both the point and
   * line drawing modes to smooth and their sizes to 1.0.
   *
   * @link [love.graphics.reset](https://love2d.org/wiki/love.graphics.reset)
   */
  function reset(): void;

  /**
   * Rotates the coordinate system in two dimensions.
   *
   * Calling this function affects all future drawing operations by rotating the
   * coordinate system around the origin by the given amount of radians. This
   * change lasts until love.draw exits.
   *
   * @param angle The amount to rotate the coordinate system in radians.
   * @link [love.graphics.rotate](https://love2d.org/wiki/love.graphics.rotate)
   */
  function rotate(angle: number): void;

  /**
   * Scales the coordinate system in two dimensions.
   *
   * By default the coordinate system in LÖVE corresponds to the display pixels
   * in horizontal and vertical directions one-to-one, and the x-axis increases
   * towards the right while the y-axis increases downwards. Scaling the
   * coordinate system changes this relation.
   *
   * After scaling by sx and sy, all coordinates are treated as if they were
   * multiplied by sx and sy. Every result of a drawing operation is also
   * correspondingly scaled, so scaling by (2, 2) for example would mean making
   * everything twice as large in both x- and y-directions. Scaling by a
   * negative value flips the coordinate system in the corresponding direction,
   * which also means everything will be drawn flipped or upside down, or both.
   * Scaling by zero is not a useful operation.
   *
   * Scale and translate are not commutative operations, therefore, calling them
   * in different orders will change the outcome.
   *
   * Scaling lasts until love.draw exits.
   *
   * @param sx The scaling in the direction of the x-axis.
   * @param sy The scaling in the direction of the y-axis. If omitted, it defaults to same as parameter sx.
   * @link [love.graphics.scale](https://love2d.org/wiki/love.graphics.scale)
   */
  function scale(sx: number, sy?: number): void;

  /**
   * Sets the background color.
   *
   * @param r The red component.
   * @param g The green component.
   * @param b The blue component.
   * @param a The alpha component.
   * @link [love.graphics.setBackgroundColor](https://love2d.org/wiki/love.graphics.setBackgroundColor)
   */
  function setBackgroundColor(
    r: number,
    g: number,
    b: number,
    a?: number,
  ): void;

  /**
   * Sets the background color.
   *
   * @param rgba A numerical indexed table with the red, green and blue values
   * as numbers. Alpha is 255 if it is not in the table
   * @link [love.graphics.setBackgroundColor](https://love2d.org/wiki/love.graphics.setBackgroundColor)
   */
  function setBackgroundColor(rgba: RGBA): void;

  /**
   * Sets the blending mode.
   *
   * @param mode The blend mode to use.
   * @link [love.graphics.setBlendMode](https://love2d.org/wiki/love.graphics.setBlendMode)
   * @since 0.2.0
   */
  function setBlendMode(mode: BlendMode): void;

  /**
   * Sets the blending mode.
   *
   * @param mode The blend mode to use.
   * @param alphamode What to do with the alpha of drawn objects when blending.
   * @link [love.graphics.setBlendMode](https://love2d.org/wiki/love.graphics.setBlendMode)
   * @since 0.2.0
   */
  function setBlendMode(mode: BlendMode, alphamode?: BlendAlphaMode): void;

  /**
   * Sets the render target to a specified {@link Canvas}.
   *
   * @param canvas The new target.
   * @param mipmap The mipmap level to render to, for {@link Canvas Canvases}
   * with mipmaps. (Default 1)
   * @link [love.graphics.setCanvas](https://love2d.org/wiki/love.graphics.setCanvas)
   * @since 0.8.0
   */
  function setCanvas(canvas: Canvas, mipmap?: number): void;

  /**
   * Resets the render target to the screen, i.e. re-enables drawing to the screen.
   */
  function setCanvas(): void;

  /**
   * Sets the render target to multiple simultaneous {@link Canvas 2D Canvases}.
   *
   * All drawing operations until the next _love.graphics.setCanvas_ call will
   * be redirected to the specified canvases and not shown on the screen.
   *
   * @param canvases The render targets from first to last.
   * @link [love.graphics.setCanvas](https://love2d.org/wiki/love.graphics.setCanvas)
   * @since 0.9.0
   */
  function setCanvas(...canvases: Array<Canvas>): void;

  /**
   * Sets the render target to the specified {@link TextureType layer/slice} and
   * mipmap level of the given non-2D {@link Canvas}. All drawing operations
   * until the next _love.graphics.setCanvas_ call will be redirected to the
   * {@link Canvas} and not shown on the screen.
   *
   * @param canvas The new render target.
   * @param slice For cubemaps this is the cube face index to render to (between
   * 1 and 6). For Array textures this is the array layer. For volume textures
   * this is the depth slice. 2D canvases should use a value of 1.
   * @param mipmap The mipmap level to render to, for Canvases with mipmaps.
   * @link [love.graphics.setCanvas](https://love2d.org/wiki/love.graphics.setCanvas)
   * @since 11.0
   */
  function setCanvas(canvas: Canvas, slice?: number, mipmap?: number): void;

  /**
   * A combination of an array and an object with properties.
   *
   * IMPORTANT NOTE: Must be indexed at 1.
   *
   * ```ts
   * const target: RenderTargetSetupObject = {
   *    mipmap: 1,  // optional
   *    layer: 1,   // optional
   *    face: 1,    // optional
   * };
   *
   * target[1] = targetCanvas;
   * ```
   */
  type RenderTargetSetupObject = {
    [key: number]: Canvas;

    /**
     * The mipmap level to render to, for Canvases with mipmaps.
     */
    mipmap?: number;

    /**
     * Only used for Volume and Array-type Canvases. For Array textures this is
     * the array layer to render to. For volume textures this is the depth
     * slice.
     */
    layer?: number;

    /**
     * Only used for Cubemap-type Canvases. The cube face index to render to
     * (between 1 and 6)
     */
    face?: number;
  };

  type RenderTargetSetup = RenderTargetSetupObject | Canvas;

  /**
   * A combination of an array and an object with properties.
   *
   * IMPORTANT NOTE: Must be indexed at 1.
   *
   * ```ts
   * const allowStencil: CanvasSetup = { stencil: true };
   * allowStencil[1] = canvas;
   *
   * love.graphics.setCanvas(allowStencil);
   * ```
   */
  type CanvasSetup = {
    [key: number]: RenderTargetSetup;

    /**
     * Whether an internally managed stencil buffer should be used, if the
     * `depthstencil` field isn't set.
     */
    stencil?: boolean;

    /**
     * Whether an internally managed depth buffer should be used, if the
     * `depthstencil` field isn't set.
     */
    depth?: boolean;

    /**
     * An optional custom depth/stencil formatted Canvas to use for the depth
     * and/or stencil buffer.
     */
    depthstencil?: RenderTargetSetup;
  };

  /**
   * Sets the active render target(s) and active stencil and depth buffers based
   * on the specified setup information. All drawing operations until the next
   * love.graphics.setCanvas call will be redirected to the specified Canvases
   * and not shown on the screen.
   *
   * IMPORTANT NOTE: These setup objects must be indexed at 1.
   *
   * ```ts
   * // Allow love.graphics.stencil calls when drawing to the given Canvas.
   * const allowStencil: CanvasSetup = { stencil: true };
   * allowStencil[1] = canvas;
   *
   * love.graphics.setCanvas(allowStencil);
   *
   * // Use multiple simultaneous render targets when drawing to several
   * // canvases of the Array Texture type, and use a custom depth
   * // buffer as well.
   * const canvas1Target: RenderTargetSetupObject = { layer: 3 };
   * canvas1Target[1] = canvas1;
   *
   * const canvas2Target: RenderTargetSetupObject = { layer: 1 };
   * canvas2Target[1] = canvas2;
   *
   * const multipleArrayTextureTargets: CanvasSetup = { depthstencil: depthcanvas };
   * multipleArrayTextureTargets[1] = canvas1Target;
   * multipleArrayTextureTargets[2] = canvas2Target;
   *
   * love.graphics.setCanvas(multipleArrayTextureTargets);
   * ```
   *
   * @param setup A table specifying the active Canvas(es), their mipmap levels
   * and active layers if applicable, and whether to use a stencil and/or depth
   * buffer.
   * @link
   * [love.graphics.setCanvas](https://love2d.org/wiki/love.graphics.setCanvas)
   * @since 11.0
   */
  function setCanvas(setup: CanvasSetup): void;

  /**
   * Sets the color used for drawing.
   *
   * @param red The amount of red.
   * @param green The amount of green.
   * @param blue The amount of blue.
   * @param alpha The amount of alpha. The alpha value will be applied to all
   * subsequent draw operations, even the drawing of an image.
   * @link [love.graphics.setColor](https://love2d.org/wiki/love.graphics.setColor)
   */
  function setColor(
    red: number,
    green: number,
    blue: number,
    alpha?: number,
  ): void;

  /**
   * Sets the color used for drawing.
   *
   * @param rgba A numerical indexed table with the red, green, blue and alpha
   * values as numbers. The alpha is optional and defaults to 255 if it is left
   * out.
   * @link [love.graphics.setColor](https://love2d.org/wiki/love.graphics.setColor)
   */
  function setColor(rgba: RGBA): void;

  /**
   * Sets the color mask. Enables or disables specific color components when
   * rendering and clearing the screen. For example, if red is set to false, no
   * further changes will be made to the red component of any pixels.
   *
   * Enables all color components when called without arguments.
   *
   * @param red Render red component.
   * @param green Render green component.
   * @param blue Render blue component.
   * @param alpha Render alpha component.
   * @link [love.graphics.setColorMask](https://love2d.org/wiki/love.graphics.setColorMask)
   * @since 0.9.0
   */
  function setColorMask(
    red: boolean,
    green: boolean,
    blue: boolean,
    alpha: boolean,
  ): void;

  /**
   * Sets the color mask. Enables or disables specific color components when
   * rendering and clearing the screen. For example, if red is set to false, no
   * further changes will be made to the red component of any pixels.
   *
   * Enables all color components when called without arguments.
   * @link [love.graphics.setColorMask](https://love2d.org/wiki/love.graphics.setColorMask)
   * @since 0.9.0
   */
  function setColorMask(): void;

  /**
   * Sets the default scaling filters used with Images, Canvases, and Fonts.
   *
   * This function does not apply retroactively to loaded images.
   *
   * @param min Filter mode used when scaling the image down.
   * @param mag Filter mode used when scaling the image up.
   * @param anisotropy Maximum amount of Anisotropic Filtering used.
   * @link [love.graphics.setDefaultFilter](https://love2d.org/wiki/love.graphics.setDefaultFilter)
   * @since 0.9.0
   */
  function setDefaultFilter(
    min: FilterMode,
    mag?: FilterMode,
    anisotropy?: number,
  ): void;

  /**
   * Configures depth testing and writing to the depth buffer.
   *
   * This is low-level functionality designed for use with custom vertex shaders and
   * Meshes with custom vertex attributes. No higher level APIs are provided to set
   * the depth of 2D graphics such as shapes, lines, and Images.
   *
   * @param comparemode Depth comparison mode used for depth testing.
   * @param write Whether to write update / write values to the depth buffer when rendering.
   * @link [love.graphics.setDepthMode](https://love2d.org/wiki/love.graphics.setDepthMode)
   * @since 11.0
   */
  function setDepthMode(comparemode: CompareMode, write: boolean): void;

  /**
   * Set an already-loaded Font as the current font or create and load a new one
   * from the file and size.
   *
   * It's recommended that Font objects are created with love.graphics.newFont in
   * the loading stage and then passed to this function in the drawing stage.
   *
   * @param font The Font object to use.
   * @link [love.graphics.setFont](https://love2d.org/wiki/love.graphics.setFont)
   */
  function setFont(font: Font): void;

  /**
   * Sets whether triangles with clockwise- or counterclockwise-ordered vertices are
   * considered front-facing.
   *
   * This is designed for use in combination with Mesh face culling. Other
   * love.graphics shapes, lines, and sprites are not guaranteed to have a specific
   * winding order to their internal vertices.
   *
   * @param winding The winding mode to use. The default winding is counterclockwise ("ccw").
   * @link [love.graphics.setFrontFaceWinding](https://love2d.org/wiki/love.graphics.setFrontFaceWinding)
   * @since 11.0
   */
  function setFrontFaceWinding(winding: VertexWinding): void;

  /**
   * Sets the line join style.
   *
   * @param join The LineJoin to use.
   * @link [love.graphics.setLineJoin](https://love2d.org/wiki/love.graphics.setLineJoin)
   */
  function setLineJoin(join: LineJoin): void;

  /**
   * Sets the line style.
   *
   * @param style The LineStyle to use.
   * @link [love.graphics.setLineJoin](https://love2d.org/wiki/love.graphics.setLineJoin)
   */
  function setLineStyle(style: LineStyle): void;

  /**
   * Sets the line width.
   *
   * @param width The width of the line.
   * @link [love.graphics.setLineWidth](https://love2d.org/wiki/love.graphics.setLineWidth)
   * @since 0.3.2
   */
  function setLineWidth(width: number): void;

  /**
   * Sets whether back-facing triangles in a Mesh are culled.
   *
   * This is designed for use with low level custom hardware-accelerated 3D
   * rendering via custom vertex attributes on Meshes, custom vertex shaders, and
   * depth testing with a depth buffer.
   *
   * @param mode The Mesh face culling mode to use (whether to render everything, cull back-facing triangles, or cull front-facing triangles).
   * @link [love.graphics.setMeshCullMode](https://love2d.org/wiki/love.graphics.setMeshCullMode)
   * @since 11.0
   */
  function setMeshCullMode(mode: CullMode): void;

  /**
   * Creates and sets a new font.
   * @param size The size of the font. (Default: 12)
   * @return font, The new font.
   * @link [love.graphics.setNewFont](https://love2d.org/wiki/love.graphics.setNewFont)
   * @since 0.8.0
   */
  function setNewFont(size?: number): Font;

  /**
   * Creates and sets a new font.
   * @param filename The path and name of the file with the font.
   * @param size The size of the font. (Default: 12)
   * @return font, The new font.
   * @link [love.graphics.setNewFont](https://love2d.org/wiki/love.graphics.setNewFont)
   * @since 0.8.0
   */
  function setNewFont(filename: string, size?: number): Font;

  /**
   * Creates and sets a new font.
   * @param file A File with the font.
   * @param size The size of the font. (Default: 12)
   * @return font, The new font.
   * @link [love.graphics.setNewFont](https://love2d.org/wiki/love.graphics.setNewFont)
   * @since 0.8.0
   */
  function setNewFont(file: File, size?: number): Font;

  /**
   * Creates and sets a new font.
   * @param data A Data with the font.
   * @param size The size of the font. (Default: 12)
   * @return font, The new font.
   * @link [love.graphics.setNewFont](https://love2d.org/wiki/love.graphics.setNewFont)
   * @since 0.8.0
   */
  function setNewFont(data: Data, size?: number): Font;

  /**
   * Creates and sets a new font.
   * @param data A Data with the font.
   * @return font, The new font.
   * @link [love.graphics.setNewFont](https://love2d.org/wiki/love.graphics.setNewFont)
   * @since 0.8.0
   */
  function setNewFont(rasterizer: Rasterizer): Font;

  /**
   * Sets or resets a Shader as the current pixel effect or vertex shaders. All
   * drawing operations until the next love.graphics.setShader will be drawn using
   * the Shader object specified.
   *
   * Disables the shaders when called without arguments.
   * @link [love.graphics.setShader](https://love2d.org/wiki/love.graphics.setShader)
   * @since 0.9.0
   */
  function setShader(): void;

  /**
   * Sets or resets a Shader as the current pixel effect or vertex shaders. All
   * drawing operations until the next love.graphics.setShader will be drawn using
   * the Shader object specified.
   *
   * Disables the shaders when called without arguments.
   *
   * @param shader The new shader.
   * @link [love.graphics.setShader](https://love2d.org/wiki/love.graphics.setShader)
   * @since 0.9.0
   */
  function setShader(shader: Shader): void;

  /**
   * Sets the point size.
   *
   * @param size The new point size.
   * @link [love.graphics.setPointSize](https://love2d.org/wiki/love.graphics.setPointSize)
   */
  function setPointSize(size: number): void;

  /**
   * Sets or disables scissor.
   *
   * The scissor limits the drawing area to a specified rectangle. This affects all
   * graphics calls, including love.graphics.clear.
   *
   * @param x The X coordinate of upper left corner.
   * @param y The Y coordinate of upper left corner.
   * @param width The width of clipping rectangle.
   * @param height The height of clipping rectangle.
   * @link [love.graphics.setScissor](https://love2d.org/wiki/love.graphics.setScissor)
   * @since 0.4.0
   */
  function setScissor(
    x: number,
    y: number,
    width: number,
    height: number,
  ): void;

  /**
   * Sets or disables scissor.
   *
   * The scissor limits the drawing area to a specified rectangle. This affects all
   * graphics calls, including love.graphics.clear.
   *
   * @link [love.graphics.setScissor](https://love2d.org/wiki/love.graphics.setScissor)
   * @since 0.4.0
   */
  function setScissor(): void;

  /**
   * Configures or disables stencil testing.
   *
   * When stencil testing is enabled, the geometry of everything that is drawn
   * afterward will be clipped / stencilled out based on a comparison between the
   * arguments of this function and the stencil value of each pixel that the
   * geometry touches. The stencil values of pixels are affected via
   * love.graphics.stencil.
   *
   * Each Canvas has its own per-pixel stencil values.
   *
   * @param comparemode The type of comparison to make for each pixel.
   * @param comparevalue The value to use when comparing with the stencil value of each pixel. Must be between 0 and 255.
   * @link [love.graphics.setStencilTest](https://love2d.org/wiki/love.graphics.setStencilTest)
   * @since 0.10.0
   */
  function setStencilTest(comparemode: CompareMode, comparevalue: number): void;

  /**
   * Configures or disables stencil testing.
   *
   * When stencil testing is enabled, the geometry of everything that is drawn
   * afterward will be clipped / stencilled out based on a comparison between the
   * arguments of this function and the stencil value of each pixel that the
   * geometry touches. The stencil values of pixels are affected via
   * love.graphics.stencil.
   *
   * Each Canvas has its own per-pixel stencil values.
   *
   * @link [love.graphics.setStencilTest](https://love2d.org/wiki/love.graphics.setStencilTest)
   * @since 0.10.0
   */
  function setStencilTest(): void;

  /**
   * Sets whether wireframe lines will be used when drawing.
   *
   * Wireframe mode should only be used for debugging. The lines drawn with it
   * enabled do not behave like regular love.graphics lines: their widths don't
   * scale with the coordinate transformations or with love.graphics.setLineWidth,
   * and they don't use the smooth LineStyle.
   *
   * @param enable True to enable wireframe mode when drawing, false to disable it.
   * @link [love.graphics.setWireframe](https://love2d.org/wiki/love.graphics.setWireframe)
   * @since 0.9.1
   */
  function setWireframe(enable: boolean): void;

  /**
   * Shears the coordinate system.
   *
   * @param kx The shear factor on the x-axis.
   * @param ky The shear factor on the y-axis.
   * @link [love.graphics.shear](https://love2d.org/wiki/love.graphics.shear)
   * @since 0.8.0
   */
  function shear(kx: number, ky: number): void;

  /**
   * Draws geometry as a stencil.
   *
   * The geometry drawn by the supplied function sets invisible stencil values of
   * pixels, instead of setting pixel colors. The stencil values of pixels can act
   * like a mask / stencil - love.graphics.setStencilTest can be used afterward to
   * determine how further rendering is affected by the stencil values in each
   * pixel.
   *
   * Each Canvas has its own per-pixel stencil values. Stencil values are within the
   * range of [0, 255].
   *
   * @param stencilfunction Function which draws geometry. The stencil values of pixels, rather than the color of each pixel, will be affected by the geometry.
   * @param action How to modify any stencil values of pixels that are touched by what's drawn in the stencil function.
   * @param value The new stencil value to use for pixels if the "replace" stencil action is used. Has no effect with other stencil actions. Must be between 0 and 255.
   * @param keepvalues True to preserve old stencil values of pixels, false to re-set every pixel's stencil value to 0 before executing the stencil function. love.graphics.clear will also re-set all stencil values.
   * @link [love.graphics.stencil](https://love2d.org/wiki/love.graphics.stencil)
   * @since 0.10.0
   */
  function stencil(
    stencilfunction: (this: void) => void,
    action?: StencilAction,
    value?: number,
    keepvalues?: boolean,
  ): void;

  /**
   * Converts the given 2D position from global coordinates into screen-space.
   *
   * This effectively applies the current graphics transformations to the given
   * position. A similar Transform:transformPoint method exists for Transform
   * objects.
   *
   * @param globalX The x component of the position in global coordinates.
   * @param globalY The y component of the position in global coordinates.
   * @return screenX, The x component of the position with graphics transformations applied.
   * @return screenY, The y component of the position with graphics transformations applied.
   * @link [love.graphics.transformPoint](https://love2d.org/wiki/love.graphics.transformPoint)
   */
  function transformPoint(
    globalX: number,
    globalY: number,
  ): LuaMultiReturn<[screenX: number, screenY: number]>;

  /**
   * Translates the coordinate system in two dimensions.
   *
   * When this function is called with two numbers, dx, and dy, all the following
   * drawing operations take effect as if their x and y coordinates were x+dx and
   * y+dy.
   *
   * Scale and translate are not commutative operations, therefore, calling them in
   * different orders will change the outcome.
   *
   * This change lasts until love.graphics.clear is called (which is called
   * automatically before love.draw in the default love.run function), or a
   * love.graphics.pop reverts to a previous coordinate system state.
   *
   * Translating using whole numbers will prevent tearing/blurring of images and
   * fonts draw after translating.
   *
   * @param dx The translation relative to the x-axis.
   * @param dy The translation relative to the y-axis.
   * @link [love.graphics.translate](https://love2d.org/wiki/love.graphics.translate)
   */
  function translate(dx: number, dy: number): void;

  /**
   * Gets the DPI scale factor of the window.
   * @return scale, The pixel scale factor associated with the window.
   * @link [love.graphics.getDPIScale](https://love2d.org/wiki/love.graphics.getDPIScale)
   * @since 11.0
   */
  function getDPIScale(): number;

  /**
   * Validates shader code. Check if specificed shader code does not contain any
   * errors.
   *
   * @param gles Validate code as GLSL ES shader.
   * @param code The pixel shader or vertex shader code, or a filename pointing to a file with the code.
   * @return status, true if specified shader code doesn't contain any errors. false otherwise.
   * @return errormsg, Reason why shader code validation failed (or _nil/undefined_ if validation succeded).
   * @link [love.graphics.validateShader](https://love2d.org/wiki/love.graphics.validateShader)
   * @since 11.0
   */
  function validateShader(
    gles: boolean,
    code: string,
  ): LuaMultiReturn<[status: true] | [status: false, errormsg: string]>;

  /**
   * Validates shader code. Check if specificed shader code does not contain any
   * errors.
   *
   * @param gles Validate code as GLSL ES shader.
   * @param pixelcode The pixel shader code, or a filename pointing to a file with the code.
   * @param vertexcode The vertex shader code, or a filename pointing to a file with the code.
   * @return status, true if specified shader code doesn't contain any errors. false otherwise.
   * @return errormsg, Reason why shader code validation failed (or _nil/undefined_ if validation succeded).
   * @link [love.graphics.validateShader](https://love2d.org/wiki/love.graphics.validateShader)
   * @since 11.0
   */
  function validateShader(
    gles: boolean,
    pixelcode: string,
    vertexcode: string,
  ): LuaMultiReturn<[status: true] | [status: false, errormsg: string]>;
}
