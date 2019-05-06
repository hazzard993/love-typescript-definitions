let compareMode: CompareMode;
let filterMode: FilterMode;

/**
 * Documented at
 * https://love2d.org/wiki/File
 * 2019/03/02
 */
declare const canvas: Canvas;
canvas.getMSAA;
canvas.newImageData;
canvas.renderTo;
canvas.release;
canvas.type;
canvas.typeOf;
canvas.getDPIScale;
canvas.getDepth;
canvas.getDepthSampleMode;
canvas.getDimensions;
canvas.getFilter;
canvas.getFormat;
canvas.getHeight;
canvas.getLayerCount;
canvas.getMipmapCount;
canvas.getMipmapFilter;
canvas.getPixelDimensions;
canvas.getPixelHeight;
canvas.getPixelWidth;
canvas.getTextureType;
canvas.getWidth;
canvas.getWrap;
canvas.isReadable;
canvas.setDepthSampleMode;
canvas.setFilter;
canvas.setMipmapFilter;
canvas.setWrap;

/**
 * Documented at
 * https://love2d.org/wiki/Drawable
 * 2019/03/03
 */
declare const drawable: Drawable;
drawable.release;
drawable.type;
drawable.typeOf;

/**
 * Documented at
 * https://love2d.org/wiki/Image
 * 2019/03/03
 */
declare const image: Image;
image.getFlags;
image.isCompressed;
image.replacePixels;
image.release;
image.type;
image.typeOf;
image.getDPIScale;
image.getDepth;
image.getDepthSampleMode;
image.getDimensions;
image.getFilter;
image.getFormat;
image.getHeight;
image.getLayerCount;
image.getMipmapCount;
image.getMipmapFilter;
image.getPixelDimensions;
image.getPixelHeight;
image.getPixelWidth;
image.getTextureType;
image.getWidth;
image.getWrap;
image.isReadable;
image.setDepthSampleMode;
image.setFilter;
image.setMipmapFilter;
image.setWrap;

/**
 * Documented at
 * https://love2d.org/wiki/Mesh
 * 2019/03/03
 */
declare const mesh: Mesh;
mesh.attachAttribute;
mesh.detachAttribute;
mesh.flush;
mesh.getDrawMode;
mesh.getDrawRange;
mesh.getTexture;
mesh.getVertex;
mesh.getVertexAttribute;
mesh.getVertexCount;
mesh.getVertexFormat;
mesh.getVertexFormat();
mesh.getVertexMap;
mesh.isAttributeEnabled;
mesh.setAttributeEnabled;
mesh.setDrawMode;
mesh.setDrawRange;
mesh.setTexture;
mesh.setVertex;
mesh.setVertexAttribute;
mesh.setVertexMap;
mesh.setVertices;
mesh.release;
mesh.type;
mesh.typeOf;

/**
 * Documented at
 * https://love2d.org/wiki/ParticleSystem
 * 2019/03/03
 */
declare const particleSystem: ParticleSystem;
particleSystem.release;
particleSystem.type;
particleSystem.typeOf;
particleSystem.clone;
particleSystem.emit;
particleSystem.getAreaSpread;
particleSystem.getBufferSize;
particleSystem.getColors;
particleSystem.getCount;
particleSystem.getDirection;
particleSystem.getEmissionArea;
particleSystem.getEmissionRate;
particleSystem.getEmitterLifetime;
particleSystem.getInsertMode;
particleSystem.getLinearAcceleration;
particleSystem.getLinearDamping;
particleSystem.getOffset;
particleSystem.getParticleLifetime;
particleSystem.getPosition;
particleSystem.getQuads;
particleSystem.getRadialAcceleration;
particleSystem.getRotation;
particleSystem.getSizeVariation;
particleSystem.getSizes;
particleSystem.getSpeed;
particleSystem.getSpin;
particleSystem.getSpinVariation;
particleSystem.getSpread;
particleSystem.getTangentialAcceleration;
particleSystem.getTexture;
particleSystem.hasRelativeRotation;
particleSystem.isActive;
particleSystem.isPaused;
particleSystem.isStopped;
particleSystem.moveTo;
particleSystem.pause;
particleSystem.reset;
particleSystem.setAreaSpread;
particleSystem.setBufferSize;
particleSystem.setColors;
particleSystem.setDirection;
particleSystem.setEmissionArea;
particleSystem.setEmissionRate;
particleSystem.setEmitterLifetime;
particleSystem.setInsertMode;
particleSystem.setLinearAcceleration;
particleSystem.setLinearDamping;
particleSystem.setOffset;
particleSystem.setParticleLifetime;
particleSystem.setPosition;
particleSystem.setQuads;
particleSystem.setRadialAcceleration;
particleSystem.setRelativeRotation;
particleSystem.setRotation;
particleSystem.setSizeVariation;
particleSystem.setSizes;
particleSystem.setSpeed;
particleSystem.setSpin;
particleSystem.setSpinVariation;
particleSystem.setSpread;
particleSystem.setTangentialAcceleration;
particleSystem.setTexture;
particleSystem.start;
particleSystem.stop;
particleSystem.update;

/**
 * Documented at
 * https://love2d.org/wiki/Quad
 * 2019/03/03
 */
declare const quad: Quad;
quad.release;
quad.type;
quad.typeOf;
quad.getTextureDimensions;
quad.getViewport;
quad.setViewport;

/**
 * Documented at
 * https://love2d.org/wiki/Shader
 * 2019/03/03
 */
declare const shader: Shader;
shader.release;
shader.type;
shader.typeOf;
shader.getWarnings;
shader.hasUniform;
shader.send;
shader.sendColor;

/**
 * Documented at
 * https://love2d.org/wiki/SpriteBatch
 * 2019/03/03
 */
declare const spriteBatch: SpriteBatch;
spriteBatch.release;
spriteBatch.type;
spriteBatch.typeOf;
spriteBatch.add;
spriteBatch.addLayer;
spriteBatch.attachAttribute;
spriteBatch.clear;
spriteBatch.flush;
spriteBatch.getBufferSize;
spriteBatch.getColor;
spriteBatch.getCount;
spriteBatch.getTexture;
spriteBatch.set;
spriteBatch.setColor;
spriteBatch.setDrawRange;
spriteBatch.setLayer;
spriteBatch.setTexture;

/**
 * Documented at
 * https://love2d.org/wiki/Text
 * 2019/03/03
 */
declare const text: Text;
text.release;
text.type;
text.typeOf;
text.add;
text.addf;
text.clear;
text.getDimensions;
text.getFont;
text.getHeight;
text.getWidth;
text.set;
text.setFont;
text.setf;

/**
 * Documented at
 * https://love2d.org/wiki/Texture
 * 2019/03/02
 */
declare const texture: Texture;
texture.getDPIScale;
texture.getDepth;
texture.getDepthSampleMode;
texture.getDimensions;
texture.getFilter;
texture.getFormat;
texture.getHeight;
texture.getLayerCount;
texture.getMipmapCount;
texture.getMipmapFilter;
texture.getPixelDimensions;
texture.getPixelHeight;
texture.getPixelWidth;
texture.getTextureType;
texture.getWidth;
texture.getWrap;
texture.isReadable;
texture.setDepthSampleMode;
texture.setFilter;
texture.setMipmapFilter;
texture.setWrap;

/**
 * Documented at
 * https://love2d.org/wiki/Video
 * 2019/03/03
 */
declare const video: Video;
video.release;
video.type;
video.typeOf;
video.getDimensions;
video.getFilter;
video.getHeight;
video.getSource;
video.getStream;
video.getWidth;
video.isPlaying;
video.pause;
video.play;
video.rewind;
video.seek;
video.setFilter;
video.setSource;
video.tell;

love;
love.graphics;

love.graphics.arc;
love.graphics.circle;
love.graphics.clear;
love.graphics.clear();
love.graphics.clear(1, 0, 0);
love.graphics.clear(1, 0, 0, 1);
love.graphics.clear([1, 0, 0, 1], true, true);
love.graphics.discard;
love.graphics.draw;
love.graphics.drawInstanced;
love.graphics.drawLayer;
love.graphics.ellipse;
love.graphics.flushBatch;
love.graphics.line;
love.graphics.line(4, 4, 8, 8);
love.graphics.line(4, 4, 8, 8, 12, 8);
love.graphics.line([4, 4, 8, 8, 12, 8]);
love.graphics.points;
love.graphics.points(4, 4, 8, 8, 12, 12);
love.graphics.points([4, 4, 8, 8, 12, 12]);
love.graphics.points([[4, 4], [8, 8, 0, 1, 1, 1]]);
love.graphics.polygon;
love.graphics.present;
love.graphics.print;
love.graphics.print("Hello");
love.graphics.print([[1, 0, 0, 1], "Hello in red"]);
love.graphics.printf;
love.graphics.printf("Hello", 8, 8, 400);
love.graphics.printf([[1, 0, 0, 1], "Hello"], 8, 8, 400);
love.graphics.printf("This text is aligned right, and wraps when it gets too big.", 25, 25, 125, "right");
love.graphics.printf("This text is aligned center",100, 100, 200,"center");
love.graphics.printf("This text is aligned right",100, 100, 200,"right");
love.graphics.rectangle;
love.graphics.stencil;

love.graphics.captureScreenshot;
love.graphics.newArrayImage;
love.graphics.newCanvas;
love.graphics.newCubeImage;
love.graphics.newFont;
love.graphics.newImage;
love.graphics.newImageFont;
love.graphics.newMesh;
love.graphics.newParticleSystem;
love.graphics.newQuad;
love.graphics.newShader;
love.graphics.newSpriteBatch;
love.graphics.newText;
love.graphics.newVideo;
love.graphics.newVolumeImage;
love.graphics.setNewFont;
love.graphics.validateShader;

love.graphics.getBackgroundColor;
love.graphics.getBlendMode;
love.graphics.getCanvas;
love.graphics.getColor;
love.graphics.getColorMask;
love.graphics.getDefaultFilter;
love.graphics.getDepthMode;
love.graphics.getFont;
love.graphics.getFrontFaceWinding;
love.graphics.getLineJoin;
love.graphics.getLineStyle;
love.graphics.getLineWidth;
love.graphics.getMeshCullMode;
love.graphics.getPointSize;
love.graphics.getScissor;
love.graphics.getShader;
love.graphics.getStackDepth;
love.graphics.getStencilTest;
love.graphics.intersectScissor;
love.graphics.isActive;
love.graphics.isGammaCorrect;
love.graphics.isWireframe;
love.graphics.reset;
love.graphics.setBackgroundColor;
love.graphics.setBlendMode;
love.graphics.setCanvas;
love.graphics.setColor;
love.graphics.setColorMask;
love.graphics.setDefaultFilter;
love.graphics.setDepthMode;
love.graphics.setFont;
love.graphics.setFrontFaceWinding;
love.graphics.setLineJoin;
love.graphics.setLineStyle;
love.graphics.setLineWidth;
love.graphics.setMeshCullMode;
love.graphics.setPointSize;
love.graphics.setScissor;
love.graphics.setShader;
love.graphics.setStencilTest;
love.graphics.setWireframe;

love.graphics.applyTransform;
love.graphics.inverseTransformPoint;
love.graphics.origin;
love.graphics.pop;
love.graphics.push;
love.graphics.replaceTransform;
love.graphics.rotate;
love.graphics.scale;
love.graphics.shear;
love.graphics.transformPoint;
love.graphics.translate;

love.graphics.getDPIScale;
love.graphics.getDimensions;
love.graphics.getHeight;
love.graphics.getPixelDimensions;
love.graphics.getPixelHeight;
love.graphics.getPixelWidth;
love.graphics.getWidth;

love.graphics.getCanvasFormats;
love.graphics.getImageFormats;
love.graphics.getRendererInfo;
love.graphics.getStats;
love.graphics.getSupported;
love.graphics.getSystemLimits;
love.graphics.getTextureTypes;
