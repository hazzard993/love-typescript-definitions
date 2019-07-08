/**
 * A Thread is a chunk of code that can run in parallel with other threads. Data can be sent between different threads with Channel objects.
 * @link [Thread](https://love2d.org/wiki/Thread)
 */
declare interface Thread extends LoveObject {
    /**
     * Retrieves the error string from the thread if it produced an error.
     *
     * @return message, The error message.
     */
    getError(): string;

    /**
     * Starts the thread.
     *
     *
     * Threads can be restarted after they have completed their execution.
     *
     */
    start(): void;

    /**
     * Starts the thread.
     *
     *
     * Threads can be restarted after they have completed their execution.
     *
     * @param args Arguments to pass to the thread
     */
    start(...args: Array<any>): void;

    /**
     * Wait for a thread to finish. This call will block until the thread finishes.
     *
     */
    wait(): void;

    /**
     * Returns whether the thread is currently running.
     *
     *
     * Threads which are not running can be (re)started with Thread:start.
     *
     * @return running, True if the thread is running, false otherwise.
     */
    isRunning(): boolean;

}
