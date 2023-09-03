/**
 * Manages events, like keypresses.
 *
 * @noResolution
 * @noSelf
 * @link [love.event](https://love2d.org/wiki/love.event)
 * @since 0.6.0
 */
declare module "love.event" {
  /**
   * Clears the event queue.
   * @link [love.event.clear](https://love2d.org/wiki/love.event.clear)
   * @since 0.7.2
   */
  function clear(): void;

  /**
   * Returns an iterator for messages in the event queue.
   *
   * @return i, Iterator function usable in a for loop.
   * @link [love.event.poll](https://love2d.org/wiki/love.event.poll)
   * @since 0.6.0
   */
  function poll(): LuaIterable<LuaMultiReturn<any[]>>;

  /**
   * Pump events into the event queue.
   * @link [love.event.pump](https://love2d.org/wiki/love.event.pump)
   * @since 0.6.0
   */
  function pump(): void;

  /**
   * Adds an event to the event queue.
   * @param args Arguments to follow.
   * @link [love.event.push](https://love2d.org/wiki/love.event.push)
   * @since 0.6.0
   */
  function push<E extends Event>(
    e: E,
    ...args: Parameters<Required<import("../love/handlers").Handlers>[E]>
  ): void;

  /**
   * Adds the quit event to the queue.
   * @param exitstatus The program exit status to use when closing the application. (Default `0`)
   * @link [love.event.quit](https://love2d.org/wiki/love.event.quit)
   * @since 0.8.0
   */
  function quit(exitstatus?: number): void;

  /**
   * Adds the quit event to the queue.
   * @param restart Restarts the game without relaunching the executable.
   *
   * This cleanly shuts down the main Lua state instance and creates a brand new one.
   * @link [love.event.quit](https://love2d.org/wiki/love.event.quit)
   * @since 0.8.0
   */
  function quit(restartstr: "restart"): void;

  /**
   * Like [love.event.poll](https://love2d.org/wiki/love.event.poll) but blocks until there is an event in the queue.
   * @return e, The type of event.
   * @return args, The arguments given to the event.
   * @link [love.event.wait](https://love2d.org/wiki/love.event.wait)
   * @since 0.6.0
   */
  function wait(): LuaMultiReturn<[evt: string, ...args: Array<any>]>;
}
