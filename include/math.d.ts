// https://www.lua.org/manual/5.1/manual.html#5.6

/**
 * This library provides basic mathematical functions. It provides all its
 * functions and constants inside the table math. Functions with the annotation
 * "integer/float" give integer results for integer arguments and float results
 * for float (or mixed) arguments. Rounding functions (math.ceil, math.floor, and
 * math.modf) return an integer when the result fits in the range of an integer,
 * or a float otherwise.
 */
declare namespace math {
  /**
   * Returns the arc tangent of y/x (in radians), but uses the signs of both
   * parameters to find the quadrant of the result. (It also handles correctly the
   * case of x being zero.)
   */
  function atan2(y: number, x: number): number;

  /**
   * Returns the hyperbolic cosine of x.
   */
  function cosh(x: number): number;

  /**
   * Returns m and e such that x = m2e, e is an integer and the absolute value of m
   * is in the range [0.5, 1) (or zero when x is zero).
   */
  function frexp(x: number): number;

  /**
   * Returns m2e (e should be an integer).
   */
  function ldexp(m: number, e: number): number;

  /**
   * Returns the base-10 logarithm of x.
   */
  function log10(x: number): number;

  /**
   * Returns xy. (You can also use the expression x^y to compute this value.)
   */
  function pow(x: number, y: number): number;

  /**
   * When called without arguments, returns a pseudo-random float with uniform
   * distribution in the range [0,1). When called with two integers m and n,
   * math.random returns a pseudo-random integer with uniform distribution in the
   * range [m, n]. (The value n-m cannot be negative and must fit in a Lua
   * integer.) The call math.random(n) is equivalent to math.random(1,n).
   *
   * This function is an interface to the underling pseudo-random generator
   * function provided by C.
   */
  function random(m?: number, n?: number): number;

  /**
   * Sets x as the "seed" for the pseudo-random generator: equal seeds produce
   * equal sequences of numbers.
   */
  function randomseed(x: number): number;

  /**
   * Returns the hyperbolic sine of x.
   */
  function sinh(x: number): number;

  /**
   * Returns the hyperbolic tangent of x.
   */
  function tanh(x: number): number;
}
