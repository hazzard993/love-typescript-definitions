/**
 * Provides an interface to the user's clock.
 *
 * @noResolution
 * @noSelf
 * @link [love.timer](https://love2d.org/wiki/love.timer)
 */
declare module "love.timer" {
  /**
   * Returns the average delta time (seconds per frame) over the last second.
   *
   * @return delta, The average delta time over the last second.
   * @link [love.timer.getAverageDelta](https://love2d.org/wiki/love.timer.getAverageDelta)
   */
  function getAverageDelta(): number;

  /**
   * Returns the time between the last two frames.
   *
   * @return dt, The time passed (in seconds).
   * @link [love.timer.getDelta](https://love2d.org/wiki/love.timer.getDelta)
   */
  function getDelta(): number;

  /**
   * Returns the current frames per second.
   *
   * @return fps, The current FPS.
   * @link [love.timer.getFPS](https://love2d.org/wiki/love.timer.getFPS)
   */
  function getFPS(): number;

  /**
   * Returns the value of a timer with an unspecified starting time. This function
   * should only be used to calculate differences between points in time, as the
   * starting time of the timer is unknown.
   *
   * @return time, The time in seconds.
   * @link [love.timer.getTime](https://love2d.org/wiki/love.timer.getTime)
   */
  function getTime(): number;

  /**
   * Sleeps the program for the specified amount of time.
   *
   * @param s Seconds to sleep for.
   * @link [love.timer.sleep](https://love2d.org/wiki/love.timer.sleep)
   */
  function sleep(s: number): void;

  /**
   * Measures the time between two frames. Calling this changes the return value of
   * love.timer.getDelta.
   *
   * @return dt, The time passed (in seconds).
   * @link [love.timer.step](https://love2d.org/wiki/love.timer.step)
   */
  function step(): number;
}
