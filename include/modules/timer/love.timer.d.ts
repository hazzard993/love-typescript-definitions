declare namespace love {

	/**
	 * Provides an interface to the user's clock.
	 * @link [love.timer](https://love2d.org/wiki/love.timer)
	 */
    export namespace timer {
		/**
		 * Returns the average delta time (seconds per frame) over the last second.
		 *
		 * @return {number} delta, The average delta time over the last second.
		 */
        export function getAverageDelta(): number;

		/**
		 * Returns the time between the last two frames.
		 *
		 * @return {number} dt, The time passed (in seconds).
		 */
        export function getDelta(): number;

		/**
		 * Returns the current frames per second.
		 *
		 * @return {number} fps, The current FPS.
		 */
        export function getFPS(): number;

		/**
		 * Returns the value of a timer with an unspecified starting time. This function
		 * should only be used to calculate differences between points in time, as the
		 * starting time of the timer is unknown.
		 *
		 * @return {number} time, The time in seconds.
		 */
        export function getTime(): number;

		/**
		 * Sleeps the program for the specified amount of time.
		 *
		 * @param s Seconds to sleep for.
		 */
        export function sleep(s: number): void;

		/**
		 * Measures the time between two frames. Calling this changes the return value of
		 * love.timer.getDelta.
		 *
		 */
        export function step(): void;

		/**
		 * Measures the time between two frames. Calling this changes the return value of
		 * love.timer.getDelta.
		 *
		 * @return {number} dt, The time passed (in seconds).
		 */
        export function step(): number;

    }

}
