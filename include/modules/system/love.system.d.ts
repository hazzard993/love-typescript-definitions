declare namespace love {

	/**
	 * Provides access to information about the user's system.
	 * @link [love.system](https://love2d.org/wiki/love.system)
	 */
    export namespace system {
		/**
		 * Gets text from the clipboard.
		 *
		 * @return {string} text, The text currently held in the system's clipboard.
		 */
        export function getClipboardText(): string;

		/**
		 * Gets the current operating system. In general, LÖVE abstracts away the need to
		 * know the current operating system, but there are a few cases where it can be
		 * useful (especially in combination with os.execute.)
		 *
		 * @return {string} osString, The current operating system. "OS X", "Windows", "Linux", "Android" or "iOS".
		 */
        export function getOS(): string;

		/**
		 * Gets information about the system's power supply.
		 *
		 * @return {PowerState} state, The basic state of the power supply.
		 * @return {number} percent, Percentage of battery life left, between 0 and 100. nil if the value can't be determined or there's no battery.
		 * @return {number} seconds, Seconds of battery life left. nil if the value can't be determined or there's no battery.
		 */
        /** @tupleReturn */
        export function getPowerInfo(): [PowerState, number, number];

		/**
		 * Gets the amount of logical processor in the system.
		 *
		 * @return {number} processorCount, Amount of logical processors.
		 */
        export function getProcessorCount(): number;

        /**
         * Gets whether another application on the system is playing music in the background.
         * @return {boolean} backgroundmusic, True if the user is playing music in the background via another app, false otherwise.
         * @link [love.system.hasBackgroundMusic](https://love2d.org/wiki/love.system.hasBackgroundMusic)
         */
        export function hasBackgroundMusic(): boolean;

		/**
		 * Opens a URL with the user's web or file browser.
		 *
		 * @param url The URL to open. Must be formatted as a proper URL.

To open a file or folder, "file://" must be prepended to the path.
		 * @return {boolean} success, Whether the URL was opened successfully.
		 */
        export function openURL(url: string): boolean;

		/**
		 * Puts text in the clipboard.
		 *
		 * @param text The new text to hold in the system's clipboard.
		 */
        export function setClipboardText(text: string): void;

		/**
		 * Causes the device to vibrate, if possible. Currently this will only work on
		 * Android and iOS devices that have a built-in vibration motor.
		 *
		 * @param seconds The duration to vibrate for. If called on an iOS device, it will always vibrate for 0.5 seconds due to limitations in the iOS system APIs.
		 */
        export function vibrate(seconds?: number): void;

    }

}
