/**
 * Provides system-independent mathematical functions.
 *
 * @noResolution
 * @noSelf
 * @link [love.math](https://love2d.org/wiki/love.math)
 */
declare module "love.math" {
  /**
   * Contains the red, green, blue and alpha values respectively.
   *
   * The alpha value is optional.
   */
  type RGBA = [r: number, g: number, b: number, a?: number];

  /**
   * Converts a color from 0..255 to 0..1 range.
   *
   * @param rgba The red, green, blue and alpha (optional) values within a 0..255 range.
   * @returns The provided values within a 0..1 range.
   * @link [love.math.colorFromBytes](https://www.love2d.org/wiki/love.math.colorFromBytes)
   * @since 11.3
   */
  function colorFromBytes(...rgba: RGBA): LuaMultiReturn<RGBA>;
  function colorFromBytes(rgba: RGBA): LuaMultiReturn<RGBA>;

  /**
   * Converts a color from 0..1 to 0..255 range.
   *
   * @param rgba The red, green, blue and alpha (optional) values within a 0..1 range.
   * @returns The provided values within a 0..255 range.
   * @link [love.math.colorToBytes](https://love2d.org/wiki/love.math.colorToBytes)
   * @since 11.3
   */
  function colorToBytes(...rgba: RGBA): LuaMultiReturn<RGBA>;
  function colorToBytes(rgba: RGBA): LuaMultiReturn<RGBA>;

  /**
   * Contains the red, green and blue values respectively.
   */
  type RGB = [r: number, g: number, b: number];

  /**
   * Converts sRGB to RGB (gamma-space to linear-space).
   *
   * @link [love.math.gammaToLinear](https://love2d.org/wiki/love.math.gammaToLinear)
   * @since 0.9.1
   */
  function gammaToLinear(...rgb: RGB): LuaMultiReturn<RGB>;
  function gammaToLinear(rgb: RGB): LuaMultiReturn<RGB>;
  function gammaToLinear(c: number): number;

  /**
   * Gets the seed of the random number generator.
   *
   * The state is split into two numbers due to Lua's use of doubles for all
   * number values - doubles can't accurately represent integer values above
   * 2^53.
   *
   * @returns Two Integers representing the lower and higher 32 bits of the
   * random number generator's 64 bit state value respectively.
   * @link [love.math.getRandomSeed](https://love2d.org/wiki/love.math.getRandomSeed)
   */
  function getRandomSeed(): LuaMultiReturn<[low: number, high: number]>;

  /**
   * Gets the current state of the random number generator. This returns an opaque
   * implementation-dependent string which is only useful for later use with
   * RandomGenerator:setState.
   *
   * This is different from RandomGenerator:getSeed in that getState gets the
   * RandomGenerator's current state, whereas getSeed gets the previously set seed
   * number.
   *
   * The value of the state string does not depend on the current operating system.
   *
   * @return state, The current state of the RandomGenerator object, represented as a string.
   * @link [love.math.getRandomState](https://love2d.org/wiki/love.math.getRandomState)
   */
  function getRandomState(): string;

  /**
   * An array of numbers describing vertices.
   *
   * @example
   * [0, 0, 16, 16, 16, 0] // x1, y1, x2, y2, x3, y3, ...
   */
  type Vertices = number[];

  /**
   * Checks whether a polygon is convex.
   *
   * PolygonShapes in love.physics, some forms of Mesh, and polygons drawn
   * {@link "love.graphics".polygon love.graphics.polygon} must be simple
   * convex polygons.
   *
   * @param vertices The vertices of the polygon.
   * @returns true if the given polygon is convex.
   * @link [love.math.isConvex](https://love2d.org/wiki/love.math.isConvex)
   */
  function isConvex(...vertices: Vertices): boolean;
  function isConvex(vertices: Vertices): boolean;

  /**
   * Converts RGB to sRGB (linear-space to gamma-space).
   *
   * @link [love.math.linearToGamma](https://love2d.org/wiki/love.math.linearToGamma)
   */
  function linearToGamma(...rgb: RGB): LuaMultiReturn<RGB>;
  function linearToGamma(rgb: RGB): LuaMultiReturn<RGB>;
  function linearToGamma(c: number): number;

  /**
   * Creates a new BezierCurve object.
   *
   * The number of vertices in the control polygon determines the degree of the
   * curve, e.g. three vertices define a quadratic (degree 2) Bézier curve, four
   * vertices define a cubic (degree 3) Bézier curve, etc.
   *
   * @param vertices The vertices of the control polygon.
   * @returns A Bézier curve object.
   * @link [love.math.newBezierCurve](https://love2d.org/wiki/love.math.newBezierCurve)
   */
  function newBezierCurve(vertices: Vertices): BezierCurve;
  function newBezierCurve(...vertices: Vertices): BezierCurve;

  /**
   * Creates a new RandomGenerator object which is completely independent of other
   * RandomGenerator objects and random functions.
   *
   * @returns The new Random Number Generator object.
   * @link [love.math.newRandomGenerator](https://love2d.org/wiki/love.math.newRandomGenerator)
   */
  function newRandomGenerator(): RandomGenerator;

  /**
   * Creates a new RandomGenerator object which is completely independent of other
   * RandomGenerator objects and random functions.
   *
   * @param seed The initial seed number to use for this object.
   * @returns The new Random Number Generator object.
   * @link [love.math.newRandomGenerator](https://love2d.org/wiki/love.math.newRandomGenerator)
   */
  function newRandomGenerator(seed: number): RandomGenerator;

  /**
   * Creates a new RandomGenerator object which is completely independent of other
   * RandomGenerator objects and random functions.
   *
   * @param low The lower 32 bits of the state number to use for this instance of the object.
   * @param high The higher 32 bits of the state number to use for this instance of the object.
   * @returns The new Random Number Generator object.
   * @link [love.math.newRandomGenerator](https://love2d.org/wiki/love.math.newRandomGenerator)
   */
  function newRandomGenerator(low: number, high: number): RandomGenerator;

  /**
   * Creates a new Transform object.
   *
   * @returns The new Transform object.
   * @link [love.math.newTransform](https://love2d.org/wiki/love.math.newTransform)
   */
  function newTransform(): Transform;

  /**
   * Creates a new Transform object.
   *
   * @param x The position of the new Transform on the x-axis.
   * @param y The position of the new Transform on the y-axis.
   * @param angle The orientation of the new Transform in radians.
   * @param sx Scale factor on the x-axis.
   * @param sy Scale factor on the y-axis.
   * @param ox Origin offset on the x-axis.
   * @param oy Origin offset on the y-axis.
   * @param kx Shearing / skew factor on the x-axis.
   * @param ky Shearing / skew factor on the y-axis.
   * @return transform, The new Transform object.
   * @link [love.math.newTransform](https://love2d.org/wiki/love.math.newTransform)
   */
  function newTransform(
    x: number,
    y: number,
    angle?: number,
    sx?: number,
    sy?: number,
    ox?: number,
    oy?: number,
    kx?: number,
    ky?: number,
  ): Transform;

  /**
   * Generates a Simplex or Perlin noise value in 1-4 dimensions. The return value
   * will always be the same, given the same arguments.
   *
   * Simplex noise is closely related to Perlin noise. It is widely used for
   * procedural content generation.
   *
   * There are many webpages which discuss Perlin and Simplex noise in detail.
   *
   * @param x The number used to generate the noise value.
   * @returns The noise value in the range of [0, 1].
   * @link [love.math.noise](https://love2d.org/wiki/love.math.noise)
   */
  function noise(x: number): number;

  /**
   * Generates a Simplex or Perlin noise value in 1-4 dimensions. The return value
   * will always be the same, given the same arguments.
   *
   * Simplex noise is closely related to Perlin noise. It is widely used for
   * procedural content generation.
   *
   * There are many webpages which discuss Perlin and Simplex noise in detail.
   *
   * @param x The first value of the 2-dimensional vector used to generate the noise value.
   * @param y The second value of the 2-dimensional vector used to generate the noise value.
   * @returns The noise value in the range of [0, 1].
   * @link [love.math.noise](https://love2d.org/wiki/love.math.noise)
   */
  function noise(x: number, y: number): number;

  /**
   * Generates a Simplex or Perlin noise value in 1-4 dimensions. The return value
   * will always be the same, given the same arguments.
   *
   * Simplex noise is closely related to Perlin noise. It is widely used for
   * procedural content generation.
   *
   * There are many webpages which discuss Perlin and Simplex noise in detail.
   *
   * @param x The first value of the 3-dimensional vector used to generate the noise value.
   * @param y The second value of the 3-dimensional vector used to generate the noise value.
   * @param z The third value of the 3-dimensional vector used to generate the noise value.
   * @returns The noise value in the range of [0, 1].
   * @link [love.math.noise](https://love2d.org/wiki/love.math.noise)
   */
  function noise(x: number, y: number, z: number): number;

  /**
   * Generates a Simplex or Perlin noise value in 1-4 dimensions. The return value
   * will always be the same, given the same arguments.
   *
   * Simplex noise is closely related to Perlin noise. It is widely used for
   * procedural content generation.
   *
   * There are many webpages which discuss Perlin and Simplex noise in detail.
   *
   * @param x The first value of the 4-dimensional vector used to generate the noise value.
   * @param y The second value of the 4-dimensional vector used to generate the noise value.
   * @param z The third value of the 4-dimensional vector used to generate the noise value.
   * @param w The fourth value of the 4-dimensional vector used to generate the noise value.
   * @returns The noise value in the range of [0, 1].
   * @link [love.math.noise](https://love2d.org/wiki/love.math.noise)
   */
  function noise(x: number, y: number, z: number, w: number): number;

  /**
   * Generates a pseudo-random number in a platform independent manner.
   *
   * @returns The pseudo-random number.
   * @link [love.math.random](https://love2d.org/wiki/love.math.random)
   */
  function random(): number;

  /**
   * Generates a pseudo-random number in a platform independent manner.
   *
   * @param max The maximum possible value it should return.
   * @returns The pseudo-random integer number.
   * @link [love.math.random](https://love2d.org/wiki/love.math.random)
   */
  function random(max: number): number;

  /**
   * Generates a pseudo-random number in a platform independent manner.
   *
   * @param min The minimum possible value it should return.
   * @param max The maximum possible value it should return.
   * @returns The pseudo-random integer number.
   * @link [love.math.random](https://love2d.org/wiki/love.math.random)
   */
  function random(min: number, max: number): number;

  /**
   * Get a normally distributed pseudo random number.
   *
   * @param stddev Standard deviation of the distribution.
   * @param mean The mean of the distribution.
   * @returns Normally distributed random number with variance (stddev)² and the specified mean.
   * @link [love.math.randomNormal](https://love2d.org/wiki/love.math.randomNormal)
   */
  function randomNormal(stddev?: number, mean?: number): number;

  /**
   * Sets the seed of the random number generator using the specified integer
   * number.
   *
   * @param seed The integer number with which you want to seed the randomization. Must be within the range of [1, 2^53].
   * @link [love.math.setRandomSeed](https://love2d.org/wiki/love.math.setRandomSeed)
   */
  function setRandomSeed(seed: number): void;

  /**
   * Sets the seed of the random number generator using the specified integer
   * number.
   *
   * @param low The lower 32 bits of the state value. Must be within the range of [0, 2^32 - 1].
   * @param high The higher 32 bits of the state value. Must be within the range of [0, 2^32 - 1].
   * @link [love.math.setRandomSeed](https://love2d.org/wiki/love.math.setRandomSeed)
   */
  function setRandomSeed(low: number, high: number): void;

  /**
   * Gets the current state of the random number generator. This returns an opaque
   * implementation-dependent string which is only useful for later use with
   * RandomGenerator:setState.
   *
   * This is different from RandomGenerator:getSeed in that getState gets the
   * RandomGenerator's current state, whereas getSeed gets the previously set seed
   * number.
   *
   * The value of the state string does not depend on the current operating system.
   *
   * @param state The current state of the RandomGenerator object, represented as a string.
   * @link [love.math.setRandomState](https://love2d.org/wiki/love.math.setRandomState)
   */
  function setRandomState(state: string): void;

  /**
   * Triangulate a simple polygon.
   *
   * @param polygon Polygon to triangulate. Must not intersect itself.
   * @return triangles, List of triangles the polygon is composed of.
   * @link [love.math.triangulate](https://love2d.org/wiki/love.math.triangulate)
   */
  function triangulate(polygon: Vertices): Vertices[];
  function triangulate(...polygon: Vertices): Vertices[];
}
