declare namespace love {

    /**
     * The primary responsibility for the love.graphics module is the drawing of
     * lines, shapes, text, Images and other Drawable objects onto the screen. Its
     * secondary responsibilities include loading external files (including Images and
     * Fonts) into memory, creating specialized objects (such as ParticleSystems or
     * Canvases) and managing screen geometry.
     *
     *
     * LÖVE's coordinate system is rooted in the upper-left corner of the screen,
     * which is at location (0, 0). The x axis is horizontal: larger values are
     * further to the right. The y axis is vertical: larger values are further towards
     * the bottom.
     *
     *
     * In many cases, you draw images or shapes in terms of their upper-left corner.
     *
     *
     * Many of the functions are used to manipulate the graphics coordinate system,
     * which is essentially the way coordinates are mapped to the display. You can
     * change the position, scale, and even rotation in this way.
     * @link [love.graphics](https://love2d.org/wiki/love.graphics)
     */
    export namespace graphics {
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
         */
        export function arc(drawmode: DrawMode, x: number, y: number, radius: number, angle1: number, angle2: number, segments?: number): void;

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
         */
        export function arc(drawmode: DrawMode, arctype: ArcType, x: number, y: number, radius: number, angle1: number, angle2: number, segments?: number): void;

        /**
         * Applies the given Transform object to the current coordinate transformation.
         *
         *
         * This effectively multiplies the existing coordinate transformation's matrix
         * with the Transform object's internal matrix to produce the new coordinate
         * transformation.
         *
         * @param transform The Transform object to apply to the current graphics coordinate transform.
         */
        export function applyTransform(transform: Transform): void;

        /**
         * Creates a screenshot once the current frame is done (after love.draw has
         * finished).
         *
         *
         * Since this function enqueues a screenshot capture rather than executing it
         * immediately, it can be called from an input callback or love.update and it will
         * still capture all of what's drawn to the screen in that frame.
         *
         * @param filename The filename to save the screenshot to. The encoded image type is determined based on the extension of the filename, and must be one of the ImageFormats.
         */
        export function captureScreenshot(filename: string): void;

        /**
         * Creates a screenshot once the current frame is done (after love.draw has
         * finished).
         *
         *
         * Since this function enqueues a screenshot capture rather than executing it
         * immediately, it can be called from an input callback or love.update and it will
         * still capture all of what's drawn to the screen in that frame.
         *
         * @param callback Function which gets called once the screenshot has been captured. An ImageData is passed into the function as its only argument.
         */
        export function captureScreenshot(callback: Function): void;

        /**
         * Creates a new array Image.
         * @param slices A table containing filepaths to images (or File, FileData, ImageData, or CompressedImageData objects), in an array.
         *
         * Each sub-image must have the same dimensions.
         *
         * A table of tables can also be given, where each sub-table contains all mipmap levels for the slice index of that sub-table.
         * @param settings Optional table of settings to configure the array image.
         * @return {Image} image, An Array Image object.
         * @link [love.graphics.newArrayImage](https://love2d.org/wiki/love.graphics.newArrayImage)
         */
        export function newArrayImage(slices: Array<ImageInformation>, settings?: ArrayImageSettings): Image;

        /**
         * Creates a screenshot once the current frame is done (after love.draw has
         * finished).
         *
         *
         * Since this function enqueues a screenshot capture rather than executing it
         * immediately, it can be called from an input callback or love.update and it will
         * still capture all of what's drawn to the screen in that frame.
         *
         * @param channel The Channel to push the generated ImageData to.
         */
        export function captureScreenshot(channel: Channel): void;

        /**
         * Draws a circle.
         *
         * @param mode How to draw the circle.
         * @param x The position of the center along x-axis.
         * @param y The position of the center along y-axis.
         * @param radius The radius of the circle.
         */
        export function circle(mode: DrawMode, x: number, y: number, radius: number): void;

        /**
         * Draws a circle.
         *
         * @param mode How to draw the circle.
         * @param x The position of the center along x-axis.
         * @param y The position of the center along y-axis.
         * @param radius The radius of the circle.
         * @param segments The number of segments used for drawing the circle. Note: The default variable for the segments parameter varies between different versions of LÖVE.
         */
        export function circle(mode: DrawMode, x: number, y: number, radius: number, segments: number): void;

        /**
         * Clears the screen to the background color in LÖVE 0.9.2 and earlier, or to the
         * specified color in 0.10.0 and newer.
         *
         *
         * This function is called automatically before love.draw in the default love.run
         * function. See the example in love.run for a typical use of this function.
         *
         *
         * Note that the scissor area bounds the cleared region.
         *
         */
        export function clear(): void;

        /**
         * Clears the screen to the background color in LÖVE 0.9.2 and earlier, or to the
         * specified color in 0.10.0 and newer.
         *
         *
         * This function is called automatically before love.draw in the default love.run
         * function. See the example in love.run for a typical use of this function.
         *
         *
         * Note that the scissor area bounds the cleared region.
         *
         * @param r The red channel of the color to clear the screen to.
         * @param g The green channel of the color to clear the screen to.
         * @param b The blue channel of the color to clear the screen to.
         * @param a The alpha channel of the color to clear the screen to.
         */
        export function clear(r: number, g: number, b: number, a?: number): void;

        /**
         * Clears the screen to the background color in LÖVE 0.9.2 and earlier, or to the
         * specified color in 0.10.0 and newer.
         *
         *
         * This function is called automatically before love.draw in the default love.run
         * function. See the example in love.run for a typical use of this function.
         *
         *
         * Note that the scissor area bounds the cleared region.
         *
         * @param color A table in the form of {r, g, b, a} containing the color to clear the first active Canvas to.
         * @param ... Additional tables for each active Canvas.
         */
        export function clear(color: table, ...vararg: Array<table>): void;

        /**
         * Discards (trashes) the contents of the screen or active Canvas. This is a
         * performance optimization function with niche use cases.
         *
         *
         * If the active Canvas has just been changed and the "replace" BlendMode is about
         * to be used to draw something which covers the entire screen, calling
         * love.graphics.discard rather than calling love.graphics.clear or doing nothing
         * may improve performance on mobile devices.
         *
         *
         * On some desktop systems this function may do nothing.
         *
         * @param discardcolor Whether to discard the texture(s) of the active Canvas(es) (the contents of the screen if no Canvas is active).
         * @param discardstencil Whether to discard the contents of the stencil buffer of the screen / active Canvas.
         */
        export function discard(discardcolor?: boolean, discardstencil?: boolean): void;

        /**
         * Discards (trashes) the contents of the screen or active Canvas. This is a
         * performance optimization function with niche use cases.
         *
         *
         * If the active Canvas has just been changed and the "replace" BlendMode is about
         * to be used to draw something which covers the entire screen, calling
         * love.graphics.discard rather than calling love.graphics.clear or doing nothing
         * may improve performance on mobile devices.
         *
         *
         * On some desktop systems this function may do nothing.
         *
         * @param discardcolors An array containing boolean values indicating whether to discard the texture of each active Canvas, when multiple simultaneous Canvases are active.
         * @param discardstencil Whether to discard the contents of the stencil buffer of the screen / active Canvas.
         */
        export function discard(discardcolors: table, discardstencil?: boolean): void;

        /**
         * Draws a Drawable object (an Image, Canvas, SpriteBatch, ParticleSystem, Mesh,
         * Text object, or Video) on the screen with optional rotation, scaling and
         * shearing.
         *
         *
         * Objects are drawn relative to their local coordinate system. The origin is by
         * default located at the top left corner of Image and Canvas. All scaling,
         * shearing, and rotation arguments transform the object relative to that point.
         * Also, the position of the origin can be specified on the screen coordinate
         * system.
         *
         *
         * It's possible to rotate an object about its center by offsetting the origin to
         * the center. Angles must be given in radians for rotation. One can also use a
         * negative scaling factor to flip about its centerline.
         *
         *
         * Note that the offsets are applied before rotation, scaling, or shearing;
         * scaling and shearing are applied before rotation.
         *
         *
         * The right and bottom edges of the object are shifted at an angle defined by the
         * shearing factors.
         *
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
         */
        export function draw(drawable: Drawable, x?: number, y?: number, r?: number, sx?: number, sy?: number, ox?: number, oy?: number, kx?: number, ky?: number): void;

        /**
         * Draws a Drawable object (an Image, Canvas, SpriteBatch, ParticleSystem, Mesh,
         * Text object, or Video) on the screen with optional rotation, scaling and
         * shearing.
         *
         *
         * Objects are drawn relative to their local coordinate system. The origin is by
         * default located at the top left corner of Image and Canvas. All scaling,
         * shearing, and rotation arguments transform the object relative to that point.
         * Also, the position of the origin can be specified on the screen coordinate
         * system.
         *
         *
         * It's possible to rotate an object about its center by offsetting the origin to
         * the center. Angles must be given in radians for rotation. One can also use a
         * negative scaling factor to flip about its centerline.
         *
         *
         * Note that the offsets are applied before rotation, scaling, or shearing;
         * scaling and shearing are applied before rotation.
         *
         *
         * The right and bottom edges of the object are shifted at an angle defined by the
         * shearing factors.
         *
         * @param texture A Texture (Image or Canvas) to texture the Quad with.
         * @param quad The Quad to draw on screen.
         * @param x The position to draw the object (x-axis).
         * @param y The position to draw the object (y-axis).
         * @param r Orientation (radians).
         * @param sx Scale factor (x-axis). Can be negative.
         * @param sy Scale factor (y-axis). Can be negative.
         * @param ox Origin offset (x-axis).
         * @param oy Origin offset (y-axis)
         * @param kx Shearing factor (x-axis).
         * @param ky Shearing factor (y-axis).
         */
        export function draw(texture: Texture, quad: Quad, x?: number, y?: number, r?: number, sx?: number, sy?: number, ox?: number, oy?: number, kx?: number, ky?: number): void;

        /**
         * Draws many instances of a Mesh with a single draw call, using hardware geometry
         * instancing.
         *
         *
         * Each instance can have unique properties (positions, colors, etc.) but will not
         * by default unless a custom Shader along with either per-instance attributes or
         * the love_InstanceID GLSL 3 vertex shader variable is used, otherwise they will
         * all render at the same position on top of each other.
         *
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
         */
        export function drawInstanced(mesh: Mesh, instancecount: number, x?: number, y?: number, r?: number, sx?: number, sy?: number, ox?: number, oy?: number, kx?: number, ky?: number): void;

        /**
         * Draws many instances of a Mesh with a single draw call, using hardware geometry
         * instancing.
         *
         *
         * Each instance can have unique properties (positions, colors, etc.) but will not
         * by default unless a custom Shader along with either per-instance attributes or
         * the love_InstanceID GLSL 3 vertex shader variable is used, otherwise they will
         * all render at the same position on top of each other.
         *
         *
         * Instancing is not supported by some older GPUs that are only capable of using
         * OpenGL ES 2 or OpenGL 2. Use love.graphics.getSupported to check.
         *
         * @param mesh The mesh to render.
         * @param instancecount The number of instances to render.
         * @param transform A transform object.
         */
        export function drawInstanced(mesh: Mesh, instancecount: number, transform: Transform): void;

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
         */
        export function drawLayer(texture: Texture, layerindex: number, x?: number, y?: number, r?: number, sx?: number, sy?: number, ox?: number, oy?: number, kx?: number, ky?: number): void;

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
         */
        export function drawLayer(texture: Texture, layerindex: number, quad: Quad, x?: number, y?: number, r?: number, sx?: number, sy?: number, ox?: number, oy?: number, kx?: number, ky?: number): void;

        /**
         * Draws a layer of an Array Texture.
         *
         * @param texture The Array Texture to draw.
         * @param layerindex The index of the layer to use when drawing.
         * @param transform A transform object.
         */
        export function drawLayer(texture: Texture, layerindex: number, transform: Transform): void;

        /**
         * Draws a layer of an Array Texture.
         *
         * @param texture The Array Texture to draw.
         * @param layerindex The index of the layer to use when drawing.
         * @param quad The subsection of the texture's layer to use when drawing.
         * @param transform A transform object.
         */
        export function drawLayer(texture: Texture, layerindex: number, quad: Quad, transform: Transform): void;

        /**
         * Draws an ellipse.
         *
         * @param mode How to draw the ellipse.
         * @param x The position of the center along x-axis.
         * @param y The position of the center along y-axis.
         * @param radiusx The radius of the ellipse along the x-axis (half the ellipse's width).
         * @param radiusy The radius of the ellipse along the y-axis (half the ellipse's height).
         */
        export function ellipse(mode: DrawMode, x: number, y: number, radiusx: number, radiusy: number): void;

        /**
         * Draws an ellipse.
         *
         * @param mode How to draw the ellipse.
         * @param x The position of the center along x-axis.
         * @param y The position of the center along y-axis.
         * @param radiusx The radius of the ellipse along the x-axis (half the ellipse's width).
         * @param radiusy The radius of the ellipse along the y-axis (half the ellipse's height).
         * @param segments The number of segments used for drawing the ellipse.
         */
        export function ellipse(mode: DrawMode, x: number, y: number, radiusx: number, radiusy: number, segments: number): void;

        /**
         * Immediately renders any pending automatically batched draws.
         *
         *
         * LÖVE will call this function internally as needed when most state is changed,
         * so it is not necessary to manually call it.
         *
         *
         * The current batch will be automatically flushed by love.graphics state changes
         * (except for the transform stack and the current color), as well as Shader:send
         * and methods on Textures which change their state. Using a different Image in
         * consecutive love.graphics.draw calls will also flush the current batch.
         *
         *
         * SpriteBatches, ParticleSystems, Meshes, and Text objects do their own batching
         * and do not affect automatic batching of other draws.
         *
         */
        export function flushBatch(): void;

        /**
         * Gets the current background color.
         *
         * @return {number} r, The red component (0-255).
         * @return {number} g, The green component (0-255).
         * @return {number} b, The blue component (0-255).
         * @return {number} a, The alpha component (0-255).
         */
        /** @tupleReturn */
        export function getBackgroundColor(): [number, number, number, number];

        /**
         * Gets the blending mode.
         *
         * @return {BlendMode} mode, The current blend mode.
         * @return {BlendAlphaMode} alphamode, The current blend alpha mode – it determines how the alpha of drawn objects affects blending.
         */
        /** @tupleReturn */
        export function getBlendMode(): [BlendMode, BlendAlphaMode];

        /**
         * Gets the current target Canvas.
         *
         * @return {Canvas} canvas, The Canvas set by setCanvas. Returns nil if drawing to the real screen.
         */
        export function getCanvas(): Canvas;

        /**
         * Gets the available Canvas formats, and whether each is supported.
         *
         * @return {table} formats, A table containing CanvasFormats as keys, and a boolean indicating whether the format is supported as values. Not all systems support all formats.
         */
        export function getCanvasFormats(): table;

        /**
         * Gets the raw and compressed pixel formats usable for Images, and whether each is supported.
         * @return formats, A table containing PixelFormats as keys, and a boolean indicating whether the format is supported as values. Not all systems support all formats.
         * @link [love.graphics.getImageFormats](https://love2d.org/wiki/love.graphics.getImageFormats)
         */
        export function getImageFormats(): { [key in PixelFormat]: boolean };

        /**
         * Gets the current color.
         *
         * @return {number} r, The red component (0-255).
         * @return {number} g, The red component (0-255).
         * @return {number} b, The blue component (0-255).
         * @return {number} a, The alpha component (0-255).
         */
        /** @tupleReturn */
        export function getColor(): [number, number, number, number];

        /**
         * Gets the active color components used when drawing. Normally all 4 components
         * are active unless love.graphics.setColorMask has been used.
         *
         *
         * The color mask determines whether individual components of the colors of drawn
         * objects will affect the color of the screen. They affect love.graphics.clear
         * and Canvas:clear as well.
         *
         * @return {boolean} r, Whether the red color component is active when rendering.
         * @return {boolean} g, Whether the green color component is active when rendering.
         * @return {boolean} b, Whether the blue color component is active when rendering.
         * @return {boolean} a, Whether the alpha color component is active when rendering.
         */
        /** @tupleReturn */
        export function getColorMask(): [boolean, boolean, boolean, boolean];

        /**
         * Gets the available compressed image formats, and whether each is supported.
         *
         * @return {table} formats, A table containing CompressedFormats as keys, and a boolean indicating whether the format is supported as values. Not all systems support all formats.
         */
        export function getCompressedImageFormats(): table;

        /**
         * Returns the default scaling filters used with Images, Canvases, and Fonts.
         *
         * @return {FilterMode} min, Filter mode used when scaling the image down.
         * @return {FilterMode} mag, Filter mode used when scaling the image up.
         * @return {number} anisotropy, Maximum amount of Anisotropic Filtering used.
         */
        /** @tupleReturn */
        export function getDefaultFilter(): [FilterMode, FilterMode, number];

        /**
         * Gets the current depth test mode and whether writing to the depth buffer is
         * enabled.
         *
         *
         * This is low-level functionality designed for use with custom vertex shaders and
         * Meshes with custom vertex attributes. No higher level APIs are provided to set
         * the depth of 2D graphics such as shapes, lines, and Images.
         *
         * @return {CompareMode} comparemode, Depth comparison mode used for depth testing.
         * @return {boolean} write, Whether to write update / write values to the depth buffer when rendering.
         */
        /** @tupleReturn */
        export function getDepthMode(): [CompareMode, boolean];

        /**
         * Gets the width and height of the window.
         *
         * @return {number} width, The width of the window.
         * @return {number} height, The height of the window.
         */
        /** @tupleReturn */
        export function getDimensions(): [number, number];

        /**
         * Gets the current Font object.
         *
         * @return {Font} font, The current Font, or nil if none is set.
         */
        export function getFont(): Font;

        /**
         * Gets whether triangles with clockwise- or counterclockwise-ordered vertices are
         * considered front-facing.
         *
         *
         * This is designed for use in combination with Mesh face culling. Other
         * love.graphics shapes, lines, and sprites are not guaranteed to have a specific
         * winding order to their internal vertices.
         *
         * @return {VertexWinding} winding, The winding mode to use. The default winding is counterclockwise ("ccw").
         */
        export function getFrontFaceWinding(): VertexWinding;

        /**
         * Gets the height of the window.
         *
         * @return {number} height, The height of the window.
         */
        export function getHeight(): number;

        /**
         * Gets the width and height in pixels of the window.
         * @return pixelwidth, The width of the window in pixels.
         * @return pixelheight, The width of the window in pixels.
         * @link [love.graphics.getPixelDimensions](https://love2d.org/wiki/love.graphics.getPixelDimensions)
         */
        export function getPixelDimensions(): [number, number];

        /**
         * Gets the height in pixels of the window.
         * @return {number} pixelheight, The height of the window in pixels.
         * @link [love.graphics.getPixelHeight](https://love2d.org/wiki/love.graphics.getPixelHeight)
         */
        export function getPixelHeight(): number;

        /**
         * Gets the width in pixels of the window.
         * @return {number} pixelwidth, The width of the window in pixels.
         * @link [love.graphics.getPixelWidth](https://love2d.org/wiki/love.graphics.getPixelWidth)
         */
        export function getPixelWidth(): number;

        /**
         * Gets the line join style.
         *
         * @return {LineJoin} join, The LineJoin style.
         */
        export function getLineJoin(): LineJoin;

        /**
         * Gets the line style.
         *
         * @return {LineStyle} style, The current line style.
         */
        export function getLineStyle(): LineStyle;

        /**
         * Gets the current line width.
         *
         * @return {number} width, The current line width.
         */
        export function getLineWidth(): number;

        /**
         * Gets whether back-facing triangles in a Mesh are culled.
         *
         *
         * Mesh face culling is designed for use with low level custom
         * hardware-accelerated 3D rendering via custom vertex attributes on Meshes,
         * custom vertex shaders, and depth testing with a depth buffer.
         *
         * @return {CullMode} mode, The Mesh face culling mode in use (whether to render everything, cull back-facing triangles, or cull front-facing triangles).
         */
        export function getMeshCullMode(): CullMode;

        /**
         * Returns the current Shader. Returns nil if none is set.
         *
         * @return {Shader} shader, The current Shader.
         */
        export function getShader(): Shader;

        /**
         * Gets the current depth of the transform / state stack (the number of pushes
         * without corresponding pops).
         *
         * @return {number} depth, The current depth of the transform and state love.graphics stack.
         */
        export function getStackDepth(): number;

        /**
         * Gets performance-related rendering statistics.
         *
         * @return {table} stats, A table with the following fields:
         */
        export function getStats(): table;

        /**
         * Gets whether stencil testing is enabled.
         *
         *
         * When stencil testing is enabled, the geometry of everything that is drawn will
         * be clipped / stencilled out based on whether it intersects with what has been
         * previously drawn to the stencil buffer.
         *
         *
         * Each Canvas has its own stencil buffer.
         *
         * @return {boolean} enabled, Whether stencil testing is enabled.
         * @return {boolean} inverted, Whether the stencil test is inverted or not.
         */
        /** @tupleReturn */
        export function getStencilTest(): [boolean, boolean];

        /**
         * Gets the optional graphics features and whether they're supported on the
         * system.
         *
         *
         * Some older or low-end systems don't always support all graphics features.
         *
         * @return {table} features, A table containing GraphicsFeature keys, and boolean values indicating whether each feature is supported.
         */
        export function getSupported(): table;

        /**
         * Gets the system-dependent maximum values for love.graphics features.
         *
         * @return {table} limits, A table containing GraphicsLimit keys, and number values.
         */
        export function getSystemLimits(): table;

        /**
         * Gets the point size.
         *
         * @return {number} size, The current point size.
         */
        export function getPointSize(): number;

        /**
         * Gets information about the system's video card and drivers.
         *
         * @return {string} name, The name of the renderer, e.g. "OpenGL" or "OpenGL ES".
         * @return {string} version, The version of the renderer with some extra driver-dependent version info, e.g. "2.1 INTEL-8.10.44".
         * @return {string} vendor, The name of the graphics card vendor, e.g. "Intel Inc".
         * @return {string} device, The name of the graphics card, e.g. "Intel HD Graphics 3000 OpenGL Engine".
         */
        /** @tupleReturn */
        export function getRendererInfo(): [string, string, string, string];

        /**
         * Gets the current scissor box.
         *
         * @return {number} x, The x component of the top-left point of the box.
         * @return {number} y, The y component of the top-left point of the box.
         * @return {number} width, The width of the box.
         * @return {number} height, The height of the box.
         */
        /** @tupleReturn */
        export function getScissor(): [number, number, number, number];

        /**
         * Gets the available texture types, and whether each is supported.
         *
         * @return {table} texturetypes, A table containing TextureTypes as keys, and a boolean indicating whether the type is supported as values. Not all systems support all types.
         */
        export function getTextureTypes(): table;

        /**
         * Gets the width of the window.
         *
         * @return {number} width, The width of the window.
         */
        export function getWidth(): number;

        /**
         * Sets the scissor to the rectangle created by the intersection of the specified
         * rectangle with the existing scissor. If no scissor is active yet, it behaves
         * like love.graphics.setScissor.
         *
         *
         * The scissor limits the drawing area to a specified rectangle. This affects all
         * graphics calls, including love.graphics.clear.
         *
         *
         * The dimensions of the scissor is unaffected by graphical transformations
         * (translate, scale, ...).
         *
         * @param x The x-coordinate of the upper left corner of the rectangle to intersect with the existing scissor rectangle.
         * @param y The y-coordinate of the upper left corner of the rectangle to intersect with the existing scissor rectangle.
         * @param width The width of the rectangle to intersect with the existing scissor rectangle.
         * @param height The height of the rectangle to intersect with the existing scissor rectangle.
         */
        export function intersectScissor(x: number, y: number, width: number, height: number): void;

        /**
         * Gets whether the graphics module is able to be used.
         * @return {return_type} active, Whether the graphics module is active and able to be used.
         * @link [love.graphics.isActive](https://love2d.org/wiki/love.graphics.isActive)
         */
        export function isActive(): boolean;

        /**
         * Sets the scissor to the rectangle created by the intersection of the specified
         * rectangle with the existing scissor. If no scissor is active yet, it behaves
         * like love.graphics.setScissor.
         *
         *
         * The scissor limits the drawing area to a specified rectangle. This affects all
         * graphics calls, including love.graphics.clear.
         *
         *
         * The dimensions of the scissor is unaffected by graphical transformations
         * (translate, scale, ...).
         *
         */
        export function intersectScissor(): void;

        /**
         * Converts the given 2D position from screen-space into global coordinates.
         *
         *
         * This effectively applies the reverse of the current graphics transformations to
         * the given position. A similar Transform:inverseTransformPoint method exists for
         * Transform objects.
         *
         * @param screenX The x component of the screen-space position.
         * @param screenY The y component of the screen-space position.
         * @return {number} globalX, The x component of the position in global coordinates.
         * @return {number} globalY, The y component of the position in global coordinates.
         */
        /** @tupleReturn */
        export function inverseTransformPoint(screenX: number, screenY: number): [number, number];

        /**
         * Gets whether gamma-correct rendering is supported and enabled. It can be
         * enabled by setting t.gammacorrect = true in love.conf.
         *
         *
         * Not all devices support gamma-correct rendering, in which case it will be
         * automatically disabled and this function will return false. It is supported on
         * desktop systems which have graphics cards that are capable of using OpenGL 3 /
         * DirectX 10, and iOS devices that can use OpenGL ES 3.
         *
         * @return {boolean} gammacorrect, True if gamma-correct rendering is supported and was enabled in love.conf, false otherwise.
         */
        export function isGammaCorrect(): boolean;

        /**
         * Gets whether wireframe mode is used when drawing.
         *
         * @return {boolean} wireframe, True if wireframe lines are used when drawing, false if it's not.
         */
        export function isWireframe(): boolean;

        /**
         * Draws lines between points.
         *
         * @param x1 The position of first point on the x-axis.
         * @param y1 The position of first point on the y-axis.
         * @param x2 The position of second point on the x-axis.
         * @param y2 The position of second point on the y-axis.
         * @param ... You can continue passing point positions to draw a polyline.
         */
        export function line(x1: number, y1: number, x2: number, y2: number, ...vararg: Array<number>): void;

        /**
         * Draws lines between points.
         *
         * @param points A table of point positions.
         */
        export function line(points: table): void;

        /**
         * Interface for passing settings table to love.graphics.newCanvas
         */
        export interface CanvasSettings {
            type?: TextureType;
            format?: PixelFormat;
            readable?: boolean;
            msaa?: number;
            dpiscale?: number;
            mipmaps?: CanvasMipmapMode;
        }

        /**
         * Creates a new Canvas object for offscreen rendering.
         *
         *
         * Antialiased Canvases have slightly higher system requirements than normal
         * Canvases. Additionally, the supported maximum number of MSAA samples varies
         * depending on the system. Use love.graphics.getSystemLimit to check.
         *
         *
         * If the number of MSAA samples specified is greater than the maximum supported
         * by the system, the Canvas will still be created but only using the maximum
         * supported amount (this includes 0.)
         *
         * @param width The width of the Canvas.
         * @param height The height of the Canvas.
         * @param settings A table of optional settings.
         * @return {Canvas} canvas, A new Canvas object.
         */
        export function newCanvas(width?: number, height?: number, settings?: CanvasSettings): Canvas;

        /**
         * Creates a new cubemap Image.
         * @param filename The filepath to a cubemap image file (or a File, FileData, or ImageData).
         * @param settings Optional table of settings to configure the cubemap image.
         * @return {Image} image, An cubemap Image object.
         * @link [love.graphics.newCubeImage](https://love2d.org/wiki/love.graphics.newCubeImage)
         */
        export function newCubeImage(filename: ImageInformation, settings?: ImageSettings): Image;

        /**
         * Creates a cubemap Image given a different image file for each cube face.
         * @param faces A table containing 6 filepaths to images (or File, FileData, ImageData, or CompressedImageData objects), in an array. Each face image must have the same dimensions. A table of tables can also be given, where each sub-table contains all mipmap levels for the cube face index of that sub-table.
         * @param settings Optional table of settings to configure the cubemap image.
         * @return {Image} image, An cubemap Image object.
         * @link [love.graphics.newCubeImage](https://love2d.org/wiki/love.graphics.newCubeImage)
         */
        export function newCubeImage(faces: [ImageInformation, ImageInformation, ImageInformation, ImageInformation, ImageInformation, ImageInformation], settings?: ImageSettings): Image;

        /**
         * Creates a new Font from a TrueType Font or BMFont file. Created fonts are not
         * cached, in that calling this function with the same arguments will always
         * create a new Font object.
         *
         *
         * All variants which accept a filename can also accept a Data object instead.
         *
         * @param filename The filepath to the BMFont or TrueType font file.
         * @return {Font} font, A Font object which can be used to draw text on screen.
         */
        export function newFont(filename: string): Font;

        /**
         * Creates a new Font from a TrueType Font or BMFont file. Created fonts are not
         * cached, in that calling this function with the same arguments will always
         * create a new Font object.
         *
         *
         * All variants which accept a filename can also accept a Data object instead.
         *
         * @param filename The filepath to the TrueType font file.
         * @param size The size of the font in pixels.
         * @return {Font} font, A Font object which can be used to draw text on screen.
         */
        export function newFont(filename: string, size: number): Font;

        /**
         * Creates a new Font from a TrueType Font or BMFont file. Created fonts are not
         * cached, in that calling this function with the same arguments will always
         * create a new Font object.
         *
         *
         * All variants which accept a filename can also accept a Data object instead.
         *
         * @param filename The filepath to the BMFont file.
         * @param imagefilename The filepath to the BMFont's image file. If this argument is omitted, the path specified inside the BMFont file will be used.
         * @return {Font} font, A Font object which can be used to draw text on screen.
         */
        export function newFont(filename: string, imagefilename: string): Font;

        /**
         * Creates a new Font from a TrueType Font or BMFont file. Created fonts are not
         * cached, in that calling this function with the same arguments will always
         * create a new Font object.
         *
         *
         * All variants which accept a filename can also accept a Data object instead.
         *
         * @param size The size of the font in pixels.
         * @return {Font} font, A Font object which can be used to draw text on screen.
         */
        export function newFont(size: number): Font;

        /**
         * Creates a new Mesh.
         *
         *
         * Use Mesh:setTexture if the Mesh should be textured with an Image or Canvas when
         * it's drawn.
         *
         * @param vertices The table filled with vertex information tables for each vertex as follows:
         * @param mode How the vertices are used when drawing. The default mode "fan" is sufficient for simple convex polygons.
         * @param usage The expected usage of the Mesh. The specified usage mode affects the Mesh's memory usage and performance.
         * @return {Mesh} mesh, The new Mesh.
         */
        export function newMesh(vertices: table, mode?: MeshDrawMode, usage?: SpriteBatchUsage): Mesh;

        /**
         * Creates a new Mesh.
         *
         *
         * Use Mesh:setTexture if the Mesh should be textured with an Image or Canvas when
         * it's drawn.
         *
         * @param vertexcount The total number of vertices the Mesh will use. Each vertex is initialized to {0,0, 0,0, 255,255,255,255}.
         * @param mode How the vertices are used when drawing. The default mode "fan" is sufficient for simple convex polygons.
         * @param usage The expected usage of the Mesh. The specified usage mode affects the Mesh's memory usage and performance.
         * @return {Mesh} mesh, The new Mesh.
         */
        export function newMesh(vertexcount: number, mode?: MeshDrawMode, usage?: SpriteBatchUsage): Mesh;

        /**
         * Creates a new Mesh.
         *
         *
         * Use Mesh:setTexture if the Mesh should be textured with an Image or Canvas when
         * it's drawn.
         *
         * @param vertexformat A table in the form of {attribute, ...}. Each attribute is a table which specifies a custom vertex attribute used for each vertex.
         * @param vertices The table filled with vertex information tables for each vertex, in the form of {vertex, ...} where each vertex is a table in the form of {attributecomponent, ...}.
         * @param mode How the vertices are used when drawing. The default mode "fan" is sufficient for simple convex polygons.
         * @param usage The expected usage of the Mesh. The specified usage mode affects the Mesh's memory usage and performance.
         * @return {Mesh} mesh, The new Mesh.
         */
        export function newMesh(vertexformat: table, vertices: table, mode?: MeshDrawMode, usage?: SpriteBatchUsage): Mesh;

        /**
         * Creates a new Mesh.
         *
         *
         * Use Mesh:setTexture if the Mesh should be textured with an Image or Canvas when
         * it's drawn.
         *
         * @param vertexformat A table in the form of {attribute, ...}. Each attribute is a table which specifies a custom vertex attribute used for each vertex.
         * @param vertexcount The total number of vertices the Mesh will use.
         * @param mode How the vertices are used when drawing. The default mode "fan" is sufficient for simple convex polygons.
         * @param usage The expected usage of the Mesh. The specified usage mode affects the Mesh's memory usage and performance.
         * @return {Mesh} mesh, The new Mesh.
         */
        export function newMesh(vertexformat: table, vertexcount: number, mode?: MeshDrawMode, usage?: SpriteBatchUsage): Mesh;

        /**
         * Creates a new Image from a filepath, FileData, an ImageData, or a
         * CompressedImageData, and optionally generates or specifies mipmaps for the
         * image.
         *
         * @param filename The filepath to the image file.
         * @return {Image} image, An Image object which can be drawn on screen.
         */
        export function newImage(filename: string): Image;

        /**
         * Creates a new Image from a filepath, FileData, an ImageData, or a
         * CompressedImageData, and optionally generates or specifies mipmaps for the
         * image.
         *
         * @param imageData An ImageData object. The Image will use this ImageData to reload itself when love.window.setMode is called.
         * @return {Image} image, An Image object which can be drawn on screen.
         */
        export function newImage(imageData: ImageData): Image;

        /**
         * Creates a new Image from a filepath, FileData, an ImageData, or a
         * CompressedImageData, and optionally generates or specifies mipmaps for the
         * image.
         *
         * @param compressedImageData A CompressedImageData object. The Image will use this CompressedImageData to reload itself when love.window.setMode is called.
         * @return {Image} image, An Image object which can be drawn on screen.
         */
        export function newImage(compressedImageData: CompressedImageData): Image;

        /**
         * Creates a new Image from a filepath, FileData, an ImageData, or a
         * CompressedImageData, and optionally generates or specifies mipmaps for the
         * image.
         *
         * @param filename The filepath to the image file (or a FileData or ImageData or CompressedImageData object).
         * @param flags A table containing the following fields:
         * @return {Image} image, An Image object which can be drawn on screen.
         */
        export function newImage(filename: string, flags: table): Image;

        /**
         * Creates a new Font by loading a specifically formatted image.
         *
         *
         * In versions prior to 0.9.0, LÖVE expects ISO 8859-1 encoding for the glyphs
         * string.
         *
         * @param filename The filepath to the image file.
         * @param glyphs A string of the characters in the image in order from left to right.
         * @return {Font} font, A Font object which can be used to draw text on screen.
         */
        export function newImageFont(filename: string, glyphs: string): Font;

        /**
         * Creates a new Font by loading a specifically formatted image.
         *
         *
         * In versions prior to 0.9.0, LÖVE expects ISO 8859-1 encoding for the glyphs
         * string.
         *
         * @param imageData The ImageData object to create the font from.
         * @param glyphs A string of the characters in the image in order from left to right.
         * @return {Font} font, A Font object which can be used to draw text on screen.
         */
        export function newImageFont(imageData: ImageData, glyphs: string): Font;

        /**
         * Creates a new Font by loading a specifically formatted image.
         *
         *
         * In versions prior to 0.9.0, LÖVE expects ISO 8859-1 encoding for the glyphs
         * string.
         *
         * @param filename The filepath to the image file.
         * @param glyphs A string of the characters in the image in order from left to right.
         * @param extraspacing Additional spacing (positive or negative) to apply to each glyph in the Font.
         * @return {Font} font, A Font object which can be used to draw text on screen.
         */
        export function newImageFont(filename: string, glyphs: string, extraspacing?: number): Font;

        /**
         * Creates a new ParticleSystem.
         *
         * @param texture The Image or Canvas to use.
         * @param buffer The max number of particles at the same time.
         * @return {ParticleSystem} system, A new ParticleSystem.
         */
        export function newParticleSystem(texture: Texture, buffer?: number): ParticleSystem;

        /**
         * Creates a new Shader object for hardware-accelerated vertex and pixel effects.
         * A Shader contains either vertex shader code, pixel shader code, or both.
         *
         *
         * Vertex shader code must contain at least one function, named position, which is
         * the function that will produce transformed vertex positions of drawn objects in
         * screen-space.
         *
         *
         * Pixel shader code must contain at least one function, named effect, which is
         * the function that will produce the color which is blended onto the screen for
         * each pixel a drawn object touches.
         *
         * @param code The pixel shader or vertex shader code, or a filename pointing to a file with the code.
         * @return {Shader} shader, A Shader object for use in drawing operations.
         */
        export function newShader(code: string): Shader;

        /**
         * Creates a new Shader object for hardware-accelerated vertex and pixel effects.
         * A Shader contains either vertex shader code, pixel shader code, or both.
         *
         *
         * Vertex shader code must contain at least one function, named position, which is
         * the function that will produce transformed vertex positions of drawn objects in
         * screen-space.
         *
         *
         * Pixel shader code must contain at least one function, named effect, which is
         * the function that will produce the color which is blended onto the screen for
         * each pixel a drawn object touches.
         *
         * @param pixelcode The pixel shader code, or a filename pointing to a file with the code.
         * @param vertexcode The vertex shader code, or a filename pointing to a file with the code.
         * @return {Shader} shader, A Shader object for use in drawing operations.
         */
        export function newShader(pixelcode: string, vertexcode: string): Shader;

        /**
         * Creates a new drawable Text object.
         *
         * @param font The font to use for the text.
         * @param textstring The initial string of text that the new Text object will contain. May be nil.
         * @return {Text} text, The new drawable Text object.
         */
        export function newText(font: Font, textstring?: string): Text;

        /**
         * Creates a new Quad.
         *
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
         * @return {Quad} quad, The new Quad.
         */
        export function newQuad(x: number, y: number, width: number, height: number, sw: number, sh: number): Quad;

        /**
         * Creates a new SpriteBatch object.
         *
         * @param texture The Image or Canvas to use for the sprites.
         * @param maxsprites The max number of sprites.
         * @param usage The expected usage of the SpriteBatch. The specified usage mode affects the SpriteBatch's memory usage and performance.
         * @return {SpriteBatch} spriteBatch, The new SpriteBatch.
         */
        export function newSpriteBatch(texture: Texture, maxsprites?: number, usage?: SpriteBatchUsage): SpriteBatch;

        /**
         * Creates a new drawable Video. Currently only Ogg Theora video files are
         * supported.
         *
         * @param filename The file path to the Ogg Theora video file.
         * @param loadaudio Whether to try to load the video's audio into an audio Source. If not explicitly set to true or false, it will try without causing an error if the video has no audio.
         * @return {Video} video, A new Video.
         */
        export function newVideo(filename: string, loadaudio?: boolean): Video;

        /**
         * Creates a new drawable Video. Currently only Ogg Theora video files are
         * supported.
         *
         * @param videostream A video stream object.
         * @param loadaudio Whether to try to load the video's audio into an audio Source. If not explicitly set to true or false, it will try without causing an error if the video has no audio.
         * @return {Video} video, A new Video.
         */
        export function newVideo(videostream: VideoStream, loadaudio?: boolean): Video;

        /**
         * Creates a new volume (3D) Image.
         * @param layers A table containing filepaths to images (or File, FileData, ImageData, or CompressedImageData objects), in an array. A table of tables can also be given, where each sub-table represents a single mipmap level and contains all layers for that mipmap.
         * @param settings Optional table of settings to configure the volume image.
         * @return {Image} image, A volume Image object.
         * @link [love.graphics.newVolumeImage](https://love2d.org/wiki/love.graphics.newVolumeImage)
         */
        export function newVolumeImage(layers: Array<ImageInformation>, settings?: ImageSettings): Image;

        /**
         * Resets the current coordinate transformation.
         *
         *
         * This function is always used to reverse any previous calls to
         * love.graphics.rotate, love.graphics.scale, love.graphics.shear or
         * love.graphics.translate. It returns the current transformation state to its
         * defaults.
         *
         */
        export function origin(): void;

        /**
         * Draws one or more points.
         *
         * @param x The position of the first point on the x-axis.
         * @param y The position of the first point on the y-axis.
         * @param ... The x and y coordinates of additional points.
         */
        export function points(x: number, y: number, ...vararg: Array<number>): void;

        /**
         * Draws one or more points.
         *
         * @param points A table containing multiple point positions, in the form of {x, y, ...}.
         */
        export function points(points: table): void;

        /**
         * Draws one or more points.
         *
         * @param points A table containing multiple individually colored points, in the form of {point, ...}. Each table contains the position and color of a point in the form of {x, y, r, g, b, a}. The color components are optional.
         */
        export function points(points: table): void;

        /**
         * Draw a polygon.
         *
         * Following the mode argument, this function can accept multiple numeric arguments or a single table of numeric arguments. In either case the arguments are interpreted as alternating x and y coordinates of the polygon's vertices.
         *
         * When in fill mode, the polygon must be convex and simple or rendering artifacts may occur.
         *
         * @param mode How to draw the polygon.
         * @param vertexes The vertices of the polygon. [x1, y1, x2, y2, ...]
         * @example
         * let vertexes = [0, 0, 16, 16, 0, 16];
         * love.graphics.polygon("fill", 0, 0, 16, 16, 0, 16);
         * love.graphics.polygon("line", vertexes);
         * love.graphics.polygon("fill", ...vertexes);
         */
        export function polygon(mode: DrawMode, ...xys: Array<number>): void;
        export function polygon(mode: DrawMode, vertices: table): void;

        /**
         * Pops the current coordinate transformation from the transformation stack.
         *
         *
         * This function is always used to reverse a previous push operation. It returns
         * the current transformation state to what it was before the last preceding push.
         * For an example, see the description of love.graphics.push.
         *
         */
        export function pop(): void;

        /**
         * Displays the results of drawing operations on the screen.
         *
         *
         * This function is used when writing your own love.run function. It presents all
         * the results of your drawing operations on the screen. See the example in
         * love.run for a typical use of this function.
         *
         */
        export function present(): void;

        /**
         * Draws text on screen. If no Font is set, one will be created and set (once) if
         * needed.
         *
         *
         * As of LOVE 0.7.1, when using translation and scaling functions while drawing
         * text, this function assumes the scale occurs first. If you don't script with
         * this in mind, the text won't be in the right position, or possibly even on
         * screen.
         *
         *
         * love.graphics.print and love.graphics.printf both support UTF-8 encoding.
         * You'll also need a proper Font for special characters.
         *
         * @param text The text to draw.
         * @param x The position to draw the object (x-axis).
         * @param y The position to draw the object (y-axis).
         * @param r Orientation (radians).
         * @param sx Scale factor (x-axis).
         * @param sy Scale factor (y-axis).
         * @param ox Origin offset (x-axis).
         * @param oy Origin offset (y-axis).
         * @param kx Shear factor (x-axis).
         * @param ky Shear factor (y-axis).
         */
        export function print(text: string, x: number, y: number, r?: number, sx?: number, sy?: number, ox?: number, oy?: number, kx?: number, ky?: number): void;

        /**
         * Draws text on screen. If no Font is set, one will be created and set (once) if
         * needed.
         *
         *
         * As of LOVE 0.7.1, when using translation and scaling functions while drawing
         * text, this function assumes the scale occurs first. If you don't script with
         * this in mind, the text won't be in the right position, or possibly even on
         * screen.
         *
         *
         * love.graphics.print and love.graphics.printf both support UTF-8 encoding.
         * You'll also need a proper Font for special characters.
         *
         * @param coloredtext A table containing colors and strings to add to the object, in the form of {color1, string1, color2, string2, ...}.
         * @param x The position of the new text on the x-axis.
         * @param y The position of the new text on the y-axis.
         * @param angle The orientation of the object in radians.
         * @param sx Scale factor on the x-axis.
         * @param sy Scale factor on the y-axis.
         * @param ox Origin offset on the x-axis.
         * @param oy Origin offset on the y-axis.
         * @param kx Shearing / skew factor on the x-axis.
         * @param ky Shearing / skew factor on the y-axis.
         */
        export function print(coloredtext: table, x: number, y: number, angle?: number, sx?: number, sy?: number, ox?: number, oy?: number, kx?: number, ky?: number): void;

        /**
         * Draws formatted text, with word wrap and alignment.
         *
         *
         * See additional notes in love.graphics.print.
         *
         *
         * In version 0.9.2 and earlier, wrapping was implemented by breaking up words by
         * spaces and putting them back together to make sure things fit nicely within the
         * limit provided. However, due to the way this is done, extra spaces between
         * words would end up missing when printed on the screen, and some lines could
         * overflow past the provided wrap limit. In version 0.10.0 and newer this is no
         * longer the case.
         *
         * @param text A text string.
         * @param x The position on the x-axis.
         * @param y The position on the y-axis.
         * @param limit Wrap the line after this many horizontal pixels.
         * @param align The alignment.
         * @param r Orientation (radians).
         * @param sx Scale factor (x-axis).
         * @param sy Scale factor (y-axis).
         * @param ox Origin offset (x-axis).
         * @param oy Origin offset (y-axis).
         * @param kx Shear factor (x-axis).
         * @param ky Shear factor (y-axis).
         */
        export function printf(text: string, x: number, y: number, limit: number, align?: AlignMode, r?: number, sx?: number, sy?: number, ox?: number, oy?: number, kx?: number, ky?: number): void;

        /**
         * Draws formatted text, with word wrap and alignment.
         *
         *
         * See additional notes in love.graphics.print.
         *
         *
         * In version 0.9.2 and earlier, wrapping was implemented by breaking up words by
         * spaces and putting them back together to make sure things fit nicely within the
         * limit provided. However, due to the way this is done, extra spaces between
         * words would end up missing when printed on the screen, and some lines could
         * overflow past the provided wrap limit. In version 0.10.0 and newer this is no
         * longer the case.
         *
         * @param coloredtext A table containing colors and strings to add to the object, in the form of {color1, string1, color2, string2, ...}.
         * @param x The position of the new text on the x-axis.
         * @param y The position of the new text on the y-axis.
         * @param wraplimit The maximum width in pixels of the text before it gets automatically wrapped to a new line.
         * @param align The alignment of the text.
         * @param angle The orientation of the object in radians.
         * @param sx Scale factor on the x-axis.
         * @param sy Scale factor on the y-axis.
         * @param ox Origin offset on the x-axis.
         * @param oy Origin offset on the y-axis.
         * @param kx Shearing / skew factor on the x-axis.
         * @param ky Shearing / skew factor on the y-axis.
         */
        export function printf(coloredtext: table, x: number, y: number, wraplimit: number, align: AlignMode, angle?: number, sx?: number, sy?: number, ox?: number, oy?: number, kx?: number, ky?: number): void;

        /**
         * Copies and pushes the current coordinate transformation to the transformation
         * stack.
         *
         *
         * This function is always used to prepare for a corresponding pop operation
         * later. It stores the current coordinate transformation state into the
         * transformation stack and keeps it active. Later changes to the transformation
         * can be undone by using the pop operation, which returns the coordinate
         * transform to the state it was in before calling push.
         *
         * @param stack The type of stack to push (e.g. just transformation state, or all love.graphics state).
         */
        export function push(stack?: StackType): void;

        /**
         * Draws a rectangle.
         *
         * @param mode How to draw the rectangle.
         * @param x The position of top-left corner along the x-axis.
         * @param y The position of top-left corner along the y-axis.
         * @param width Width of the rectangle.
         * @param height Height of the rectangle.
         */
        export function rectangle(mode: DrawMode, x: number, y: number, width: number, height: number): void;

        /**
         * Draws a rectangle.
         *
         * @param mode How to draw the rectangle.
         * @param x The position of top-left corner along the x-axis.
         * @param y The position of top-left corner along the y-axis.
         * @param width Width of the rectangle.
         * @param height Height of the rectangle.
         * @param rx The x-axis radius of each round corner. Cannot be greater than half the rectangle's width.
         * @param ry The y-axis radius of each round corner. Cannot be greater than half the rectangle's height.
         * @param segments The number of segments used for drawing the round corners. A default amount will be chosen if no number is given.
         */
        export function rectangle(mode: DrawMode, x: number, y: number, width: number, height: number, rx: number, ry?: number, segments?: number): void;

        /**
         * Replaces the current coordinate transformation with the given Transform object.
         *
         * @param transform The Transform object to replace the current graphics coordinate transform with.
         */
        export function replaceTransform(transform: Transform): void;

        /**
         * Resets the current graphics settings.
         *
         *
         * Calling reset makes the current drawing color white, the current background
         * color black, resets any active Canvas or Shader, and removes any scissor
         * settings. It sets the BlendMode to alpha. It also sets both the point and line
         * drawing modes to smooth and their sizes to 1.0.
         *
         */
        export function reset(): void;

        /**
         * Rotates the coordinate system in two dimensions.
         *
         *
         * Calling this function affects all future drawing operations by rotating the
         * coordinate system around the origin by the given amount of radians. This change
         * lasts until love.draw exits.
         *
         * @param angle The amount to rotate the coordinate system in radians.
         */
        export function rotate(angle: number): void;

        /**
         * Scales the coordinate system in two dimensions.
         *
         *
         * By default the coordinate system in LÖVE corresponds to the display pixels in
         * horizontal and vertical directions one-to-one, and the x-axis increases towards
         * the right while the y-axis increases downwards. Scaling the coordinate system
         * changes this relation.
         *
         *
         * After scaling by sx and sy, all coordinates are treated as if they were
         * multiplied by sx and sy. Every result of a drawing operation is also
         * correspondingly scaled, so scaling by (2, 2) for example would mean making
         * everything twice as large in both x- and y-directions. Scaling by a negative
         * value flips the coordinate system in the corresponding direction, which also
         * means everything will be drawn flipped or upside down, or both. Scaling by zero
         * is not a useful operation.
         *
         *
         * Scale and translate are not commutative operations, therefore, calling them in
         * different orders will change the outcome.
         *
         *
         * Scaling lasts until love.draw exits.
         *
         * @param sx The scaling in the direction of the x-axis.
         * @param sy The scaling in the direction of the y-axis. If omitted, it defaults to same as parameter sx.
         */
        export function scale(sx: number, sy?: number): void;

        /**
         * Sets the background color.
         *
         * @param r The red component (0-255).
         * @param g The green component (0-255).
         * @param b The blue component (0-255).
         * @param a The alpha component (0-255).
         */
        export function setBackgroundColor(r: number, g: number, b: number, a?: number): void;

        /**
         * Sets the background color.
         *
         * @param rgba A numerical indexed table with the red, green and blue values as numbers. Alpha is 255 if it is not in the table
         */
        export function setBackgroundColor(rgba: table): void;

        /**
         * Sets the blending mode.
         *
         * @param mode The blend mode to use.
         */
        export function setBlendMode(mode: BlendMode): void;

        /**
         * Sets the blending mode.
         *
         * @param mode The blend mode to use.
         * @param alphamode What to do with the alpha of drawn objects when blending.
         */
        export function setBlendMode(mode: BlendMode, alphamode?: BlendAlphaMode): void;

        /**
         * Captures drawing operations to a Canvas.
         *
         * @param canvas A render target.
         */
        export function setCanvas(canvas: Canvas): void;

        /**
         * Captures drawing operations to a Canvas.
         *
         */
        export function setCanvas(): void;

        /**
         * Captures drawing operations to a Canvas.
         *
         * @param canvas1 The first render target.
         * @param canvas2 The second render target.
         * @param ... More canvases.
         */
        export function setCanvas(canvas1: Canvas, canvas2: Canvas, ...vararg: Array<Canvas>): void;

        /**
         * Sets the color used for drawing.
         *
         * @param red The amount of red.
         * @param green The amount of green.
         * @param blue The amount of blue.
         * @param alpha The amount of alpha. The alpha value will be applied to all subsequent draw operations, even the drawing of an image.
         */
        export function setColor(red: number, green: number, blue: number, alpha: number): void;

        /**
         * Sets the color used for drawing.
         *
         * @param rgba A numerical indexed table with the red, green, blue and alpha values as numbers. The alpha is optional and defaults to 255 if it is left out.
         */
        export function setColor(rgba: table): void;

        /**
         * Sets the color mask. Enables or disables specific color components when
         * rendering and clearing the screen. For example, if red is set to false, no
         * further changes will be made to the red component of any pixels.
         *
         *
         * Enables all color components when called without arguments.
         *
         * @param red Render red component.
         * @param green Render green component.
         * @param blue Render blue component.
         * @param alpha Render alpha component.
         */
        export function setColorMask(red: boolean, green: boolean, blue: boolean, alpha: boolean): void;

        /**
         * Sets the color mask. Enables or disables specific color components when
         * rendering and clearing the screen. For example, if red is set to false, no
         * further changes will be made to the red component of any pixels.
         *
         *
         * Enables all color components when called without arguments.
         *
         */
        export function setColorMask(): void;

        /**
         * Sets the default scaling filters used with Images, Canvases, and Fonts.
         *
         *
         * This function does not apply retroactively to loaded images.
         *
         * @param min Filter mode used when scaling the image down.
         * @param mag Filter mode used when scaling the image up.
         * @param anisotropy Maximum amount of Anisotropic Filtering used.
         */
        export function setDefaultFilter(min: FilterMode, mag?: FilterMode, anisotropy?: number): void;

        /**
         * Configures depth testing and writing to the depth buffer.
         *
         *
         * This is low-level functionality designed for use with custom vertex shaders and
         * Meshes with custom vertex attributes. No higher level APIs are provided to set
         * the depth of 2D graphics such as shapes, lines, and Images.
         *
         * @param comparemode Depth comparison mode used for depth testing.
         * @param write Whether to write update / write values to the depth buffer when rendering.
         */
        export function setDepthMode(comparemode: CompareMode, write: boolean): void;

        /**
         * Set an already-loaded Font as the current font or create and load a new one
         * from the file and size.
         *
         *
         * It's recommended that Font objects are created with love.graphics.newFont in
         * the loading stage and then passed to this function in the drawing stage.
         *
         * @param font The Font object to use.
         */
        export function setFont(font: Font): void;

        /**
         * Sets whether triangles with clockwise- or counterclockwise-ordered vertices are
         * considered front-facing.
         *
         *
         * This is designed for use in combination with Mesh face culling. Other
         * love.graphics shapes, lines, and sprites are not guaranteed to have a specific
         * winding order to their internal vertices.
         *
         * @param winding The winding mode to use. The default winding is counterclockwise ("ccw").
         */
        export function setFrontFaceWinding(winding: VertexWinding): void;

        /**
         * Sets the line join style.
         *
         * @param join The LineJoin to use.
         */
        export function setLineJoin(join: LineJoin): void;

        /**
         * Sets the line style.
         *
         * @param style The LineStyle to use.
         */
        export function setLineStyle(style: LineStyle): void;

        /**
         * Sets the line width.
         *
         * @param width The width of the line.
         */
        export function setLineWidth(width: number): void;

        /**
         * Sets whether back-facing triangles in a Mesh are culled.
         *
         *
         * This is designed for use with low level custom hardware-accelerated 3D
         * rendering via custom vertex attributes on Meshes, custom vertex shaders, and
         * depth testing with a depth buffer.
         *
         * @param mode The Mesh face culling mode to use (whether to render everything, cull back-facing triangles, or cull front-facing triangles).
         */
        export function setMeshCullMode(mode: CullMode): void;

        /**
         * Creates and sets a new font.
         *
         * @param filename The path and name of the file with the font.
         * @param size The size of the font.
         * @return {Font} font, The new font.
         */
        export function setNewFont(filename: string, size?: number): Font;

        /**
         * Creates and sets a new font.
         *
         * @param file A File with the font.
         * @param size The size of the font.
         * @return {Font} font, The new font.
         */
        export function setNewFont(file: File, size?: number): Font;

        /**
         * Creates and sets a new font.
         *
         * @param data A Data with the font.
         * @param size The size of the font.
         * @return {Font} font, The new font.
         */
        export function setNewFont(data: Data, size?: number): Font;

        /**
         * Sets or resets a Shader as the current pixel effect or vertex shaders. All
         * drawing operations until the next love.graphics.setShader will be drawn using
         * the Shader object specified.
         *
         *
         * Disables the shaders when called without arguments.
         *
         */
        export function setShader(): void;

        /**
         * Sets or resets a Shader as the current pixel effect or vertex shaders. All
         * drawing operations until the next love.graphics.setShader will be drawn using
         * the Shader object specified.
         *
         *
         * Disables the shaders when called without arguments.
         *
         * @param shader The new shader.
         */
        export function setShader(shader: Shader): void;

        /**
         * Sets the point size.
         *
         * @param size The new point size.
         */
        export function setPointSize(size: number): void;

        /**
         * Sets or disables scissor.
         *
         *
         * The scissor limits the drawing area to a specified rectangle. This affects all
         * graphics calls, including love.graphics.clear.
         *
         * @param x The X coordinate of upper left corner.
         * @param y The Y coordinate of upper left corner.
         * @param width The width of clipping rectangle.
         * @param height The height of clipping rectangle.
         */
        export function setScissor(x: number, y: number, width: number, height: number): void;

        /**
         * Sets or disables scissor.
         *
         *
         * The scissor limits the drawing area to a specified rectangle. This affects all
         * graphics calls, including love.graphics.clear.
         *
         */
        export function setScissor(): void;

        /**
         * Configures or disables stencil testing.
         *
         *
         * When stencil testing is enabled, the geometry of everything that is drawn
         * afterward will be clipped / stencilled out based on a comparison between the
         * arguments of this function and the stencil value of each pixel that the
         * geometry touches. The stencil values of pixels are affected via
         * love.graphics.stencil.
         *
         *
         * Each Canvas has its own per-pixel stencil values.
         *
         * @param comparemode The type of comparison to make for each pixel.
         * @param comparevalue The value to use when comparing with the stencil value of each pixel. Must be between 0 and 255.
         */
        export function setStencilTest(comparemode: CompareMode, comparevalue: number): void;

        /**
         * Configures or disables stencil testing.
         *
         *
         * When stencil testing is enabled, the geometry of everything that is drawn
         * afterward will be clipped / stencilled out based on a comparison between the
         * arguments of this function and the stencil value of each pixel that the
         * geometry touches. The stencil values of pixels are affected via
         * love.graphics.stencil.
         *
         *
         * Each Canvas has its own per-pixel stencil values.
         *
         */
        export function setStencilTest(): void;

        /**
         * Sets whether wireframe lines will be used when drawing.
         *
         *
         * Wireframe mode should only be used for debugging. The lines drawn with it
         * enabled do not behave like regular love.graphics lines: their widths don't
         * scale with the coordinate transformations or with love.graphics.setLineWidth,
         * and they don't use the smooth LineStyle.
         *
         * @param enable True to enable wireframe mode when drawing, false to disable it.
         */
        export function setWireframe(enable: boolean): void;

        /**
         * Shears the coordinate system.
         *
         * @param kx The shear factor on the x-axis.
         * @param ky The shear factor on the y-axis.
         */
        export function shear(kx: number, ky: number): void;

        /**
         * Draws geometry as a stencil.
         *
         *
         * The geometry drawn by the supplied function sets invisible stencil values of
         * pixels, instead of setting pixel colors. The stencil values of pixels can act
         * like a mask / stencil - love.graphics.setStencilTest can be used afterward to
         * determine how further rendering is affected by the stencil values in each
         * pixel.
         *
         *
         * Each Canvas has its own per-pixel stencil values. Stencil values are within the
         * range of [0, 255].
         *
         * @param stencilfunction Function which draws geometry. The stencil values of pixels, rather than the color of each pixel, will be affected by the geometry.
         * @param action How to modify any stencil values of pixels that are touched by what's drawn in the stencil function.
         * @param value The new stencil value to use for pixels if the "replace" stencil action is used. Has no effect with other stencil actions. Must be between 0 and 255.
         * @param keepvalues True to preserve old stencil values of pixels, false to re-set every pixel's stencil value to 0 before executing the stencil function. love.graphics.clear will also re-set all stencil values.
         */
        export function stencil(stencilfunction: Function, action?: StencilAction, value?: number, keepvalues?: boolean): void;

        /**
         * Converts the given 2D position from global coordinates into screen-space.
         *
         *
         * This effectively applies the current graphics transformations to the given
         * position. A similar Transform:transformPoint method exists for Transform
         * objects.
         *
         * @param globalX The x component of the position in global coordinates.
         * @param globalY The y component of the position in global coordinates.
         * @return {number} screenX, The x component of the position with graphics transformations applied.
         * @return {number} sreenY, The y component of the position with graphics transformations applied.
         */
        /** @tupleReturn */
        export function transformPoint(globalX: number, globalY: number): [number, number];

        /**
         * Translates the coordinate system in two dimensions.
         *
         *
         * When this function is called with two numbers, dx, and dy, all the following
         * drawing operations take effect as if their x and y coordinates were x+dx and
         * y+dy.
         *
         *
         * Scale and translate are not commutative operations, therefore, calling them in
         * different orders will change the outcome.
         *
         *
         * This change lasts until love.graphics.clear is called (which is called
         * automatically before love.draw in the default love.run function), or a
         * love.graphics.pop reverts to a previous coordinate system state.
         *
         *
         * Translating using whole numbers will prevent tearing/blurring of images and
         * fonts draw after translating.
         *
         * @param dx The translation relative to the x-axis.
         * @param dy The translation relative to the y-axis.
         */
        export function translate(dx: number, dy: number): void;

        /**
         * Gets the DPI scale factor of the window.
         * @return {number} scale, The pixel scale factor associated with the window.
         * @link [love.graphics.getDPIScale](https://love2d.org/wiki/love.graphics.getDPIScale)
         */
        export function getDPIScale(): number;

        /**
         * Validates shader code. Check if specificed shader code does not contain any
         * errors.
         *
         * @param gles Validate code as GLSL ES shader.
         * @param code The pixel shader or vertex shader code, or a filename pointing to a file with the code.
         * @return {boolean} status, true if specified shader code doesn't contain any errors. false otherwise.
         * @return {string} message, Reason why shader code validation failed (or nil if validation succeded).
         */
        /** @tupleReturn */
        export function validateShader(gles: boolean, code: string): [boolean, string];

        /**
         * Validates shader code. Check if specificed shader code does not contain any
         * errors.
         *
         * @param gles Validate code as GLSL ES shader.
         * @param pixelcode The pixel shader code, or a filename pointing to a file with the code.
         * @param vertexcode The vertex shader code, or a filename pointing to a file with the code.
         * @return {boolean} status, true if specified shader code doesn't contain any errors. false otherwise.
         * @return {string} message, Reason why shader code validation failed (or nil if validation succeded).
         */
        /** @tupleReturn */
        export function validateShader(gles: boolean, pixelcode: string, vertexcode: string): [boolean, string];

    }

}
