declare module "love.thread" {
  import { Type } from "love";

  /**
   * A Thread is a chunk of code that can run in parallel with other threads. Data can be sent between different threads with Channel objects.
   * @link [Thread](https://love2d.org/wiki/Thread)
   */
  interface Thread extends Type<"Thread"> {
    /**
     * Retrieves the error string from the thread if it produced an error.
     *
     * @return message, The error message.
     * @link [Thread:getError](https://love2d.org/wiki/Thread:getError)
     */
    getError(): string | undefined;

    /**
     * Starts the thread.
     *
     * Threads can be restarted after they have completed their execution.
     *
     * @link [Thread:start](https://love2d.org/wiki/Thread:start)
     */
    start(): void;

    /**
     * Starts the thread.
     *
     * Threads can be restarted after they have completed their execution.
     *
     * @param args Arguments to pass to the thread
     * @link [Thread:start](https://love2d.org/wiki/Thread:start)
     */
    start(...args: Array<any>): void;

    /**
     * Wait for a thread to finish. This call will block until the thread finishes.
     *
     * @link [Thread:wait](https://love2d.org/wiki/Thread:wait)
     */
    wait(): void;

    /**
     * Returns whether the thread is currently running.
     *
     * Threads which are not running can be (re)started with Thread:start.
     *
     * @return running, True if the thread is running, false otherwise.
     * @link [Thread:isRunning](https://love2d.org/wiki/Thread:isRunning)
     */
    isRunning(): boolean;
  }
}
