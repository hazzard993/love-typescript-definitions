declare module "love.math" {
  import { Type } from "love";

  /**
   * A random number generation object which has its own random state.
   * @link [RandomGenerator](https://love2d.org/wiki/RandomGenerator)
   */
  interface RandomGenerator extends Type<"RandomGenerator"> {
    /**
     * Gets the state of the random number generator.
     *
     * The state is split into two numbers due to Lua's use of doubles for all number
     * values - doubles can't accurately represent integer values above 2^53.
     *
     * @return low, Integer number representing the lower 32 bits of the random number generator's 64 bit state value.
     * @return high, Integer number representing the higher 32 bits of the random number generator's 64 bit state value.
     * @link [RandomGenerator:getSeed](https://love2d.org/wiki/RandomGenerator:getSeed)
     */
    getSeed(): LuaMultiReturn<[low: number, high: number]>;

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
     * @link [RandomGenerator:getState](https://love2d.org/wiki/RandomGenerator:getState)
     */
    getState(): string;

    /**
     * Generates a pseudo-random number in a platform independent manner.
     *
     * @return number, The pseudo random number.
     * @link [RandomGenerator:random](https://love2d.org/wiki/RandomGenerator:random)
     */
    random(): number;

    /**
     * Generates a pseudo-random number in a platform independent manner.
     *
     * @param max The maximum possible value it should return.
     * @return number, The pseudo-random integer number.
     * @link [RandomGenerator:random](https://love2d.org/wiki/RandomGenerator:random)
     */
    random(max: number): number;

    /**
     * Generates a pseudo-random number in a platform independent manner.
     *
     * @param min The minimum possible value it should return.
     * @param max The maximum possible value it should return.
     * @return number, The pseudo-random integer number.
     * @link [RandomGenerator:random](https://love2d.org/wiki/RandomGenerator:random)
     */
    random(min: number, max: number): number;

    /**
     * Get a normally distributed pseudo random number.
     *
     * @param stddev Standard deviation of the distribution.
     * @param mean The mean of the distribution.
     * @return number, Normally distributed random number with variance (stddev)Â² and the specified mean.
     * @link [RandomGenerator:randomNormal](https://love2d.org/wiki/RandomGenerator:randomNormal)
     */
    randomNormal(stddev?: number, mean?: number): number;

    /**
     * Sets the seed of the random number generator using the specified integer
     * number.
     *
     * @param seed The integer number with which you want to seed the randomization. Must be within the range of [1, 2^53].
     * @link [RandomGenerator:setSeed](https://love2d.org/wiki/RandomGenerator:setSeed)
     */
    setSeed(seed: number): void;

    /**
     * Sets the seed of the random number generator using the specified integer
     * number.
     *
     * @param low The lower 32 bits of the state value. Must be within the range of [0, 2^32 - 1].
     * @param high The higher 32 bits of the state value. Must be within the range of [0, 2^32 - 1].
     * @link [RandomGenerator:setSeed](https://love2d.org/wiki/RandomGenerator:setSeed)
     */
    setSeed(low: number, high?: number): void;

    /**
     * Sets the current state of the random number generator. The value used as an
     * argument for this function is an opaque implementation-dependent string and
     * should only originate from a previous call to RandomGenerator:getState.
     *
     * This is different from RandomGenerator:setSeed in that setState directly sets
     * the RandomGenerator's current implementation-dependent state, whereas setSeed
     * gives it a new seed value.
     *
     * The effect of the state string does not depend on the current operating system.
     *
     * @param state The new state of the RandomGenerator object, represented as a string. This should originate from a previous call to RandomGenerator:getState.
     * @link [RandomGenerator:setState](https://love2d.org/wiki/RandomGenerator:setState)
     */
    setState(state: string): void;
  }
}
