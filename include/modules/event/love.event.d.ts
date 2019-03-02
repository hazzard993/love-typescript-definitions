declare namespace love {

	/**
	 * Manages events, like keypresses.
	 * @link [love.event](https://love2d.org/wiki/love.event)
	 */
    export namespace event {

		/**
		 * Clears the event queue.
		 * @link [love.event.clear](https://love2d.org/wiki/love.event.clear)
		 */
        export function clear(): void;

		/**
		 * Returns an iterator for messages in the event queue.
		 *
		 * @return {Function} i, Iterator function usable in a for loop.
         * @luaIterator
         * @link [love.event.poll](https://love2d.org/wiki/love.event.poll)
		 */
        export function poll<T>(): Iterator<T>;

		/**
		 * Pump events into the event queue. This is a low-level function, and is usually
		 * not called by the user, but by love.run. Note that this does need to be called
		 * for any OS to think you're still running, and if you want to handle
		 * OS-generated events at all (think callbacks). love.event.pump can only be
		 * called from the main thread, but afterwards, the rest of love.event can be used
		 * from any other thread.
		 * @link [love.event.pump](https://love2d.org/wiki/love.event.pump)
		 */
        export function pump(): void;

		/**
		 * Adds an event to the event queue.
		 * @param args Arguments to follow.
         * @link [love.event.push](https://love2d.org/wiki/love.event.push)
		 */
        export function push(e: Event, ...args: any[]): void;

		/**
		 * Adds the quit event to the queue.
		 *
		 *
		 * The quit event is a signal for the event handler to close LÖVE. It's possible
		 * to abort the exit process with the love.quit callback.
		 * @link [love.event.quit](https://love2d.org/wiki/love.event.quit)
		 */
        export function quit(): void;

		/**
		 * Adds the quit event to the queue.
		 *
		 *
		 * The quit event is a signal for the event handler to close LÖVE. It's possible
		 * to abort the exit process with the love.quit callback.
		 *
		 * @param exitstatus The program exit status to use when closing the application.
         * @link [love.event.quit](https://love2d.org/wiki/love.event.quit)
		 */
        export function quit(exitstatus?: number): void;

		/**
		 * Adds the quit event to the queue.
		 *
		 *
		 * The quit event is a signal for the event handler to close LÖVE. It's possible
		 * to abort the exit process with the love.quit callback.
		 *
		 * @param "restart" Restarts the game without relaunching the executable. This cleanly shuts down the main Lua state instance and creates a brand new one.
         * @link [love.event.quit](https://love2d.org/wiki/love.event.quit)
		 */
        export function quit(restartstr: "restart"): void;

		/**
		 * Like love.event.poll but blocks until there is an event in the queue.
		 *
		 * @return {Event} e, The type of event.
		 * @return {Variant} a, First event argument.
		 * @return {Variant} b, Second event argument.
		 * @return {Variant} c, Third event argument.
		 * @return {Variant} d, Fourth event argument.
         * @tupleReturn
		 */
        export function wait(): [string, ...any[]];

    }

}
