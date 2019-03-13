declare namespace love {

    /**
     * Provides an interface to the user's mouse.
     * @link [love.mouse](https://love2d.org/wiki/love.mouse)
     */
    export namespace mouse {
        /**
         * Gets the current Cursor.
         *
         * @return {Cursor} cursor, The current cursor, or nil if no cursor is set.
         */
        export function getCursor(): Cursor;

        /**
         * Returns the current position of the mouse.
         *
         * @return {number} x, The position of the mouse along the x-axis.
         * @return {number} y, The position of the mouse along the y-axis.
         */
        /** @tupleReturn */
        export function getPosition(): [number, number];

        /**
         * Gets whether relative mode is enabled for the mouse.
         *
         *
         * If relative mode is enabled, the cursor is hidden and doesn't move when the
         * mouse does, but relative mouse motion events are still generated via
         * love.mousemoved. This lets the mouse move in any direction indefinitely without
         * the cursor getting stuck at the edges of the screen.
         *
         *
         * The reported position of the mouse is not updated while relative mode is
         * enabled, even when relative mouse motion events are generated.
         *
         * @return {boolean} enabled, True if relative mode is enabled, false if it's disabled.
         */
        export function getRelativeMode(): boolean;

        /**
         * Gets a Cursor object representing a system-native hardware cursor.
         *
         *
         * Hardware cursors are framerate-independent and work the same way as normal
         * operating system cursors. Unlike drawing an image at the mouse's current
         * coordinates, hardware cursors never have visible lag between when the mouse is
         * moved and when the cursor position updates, even at low framerates.
         *
         * @param ctype The type of system cursor to get.
         * @return {Cursor} cursor, The Cursor object representing the system cursor type.
         */
        export function getSystemCursor(ctype: CursorType): Cursor;

        /**
         * Returns the current x position of the mouse.
         *
         * @return {number} x, The position of the mouse along the x-axis.
         */
        export function getX(): number;

        /**
         * Returns the current y position of the mouse.
         *
         * @return {number} y, The position of the mouse along the y-axis.
         */
        export function getY(): number;

        /**
         * Gets whether cursor functionality is supported.
         *
         *
         * If it isn't supported, calling love.mouse.newCursor and
         * love.mouse.getSystemCursor will cause an error. Mobile devices do not support
         * cursors.
         *
         * @return {boolean} hascursor, Whether the system has cursor functionality.
         */
        export function hasCursor(): boolean;

        /**
         * Gets whether cursor functionality is supported.
         *
         *
         * If it isn't supported, calling love.mouse.newCursor and
         * love.mouse.getSystemCursor will cause an error. Mobile devices do not support
         * cursors.
         *
         * @return {boolean} supported, Whether the system has cursor functionality.
         */
        export function isCursorSupported(): boolean;

        /**
         * Checks whether a certain mouse button is down. This function does not detect
         * mousewheel scrolling; you must use the love.wheelmoved (or love.mousepressed in
         * version 0.9.2 and older) callback for that.
         *
         * @param button The index of a button to check. 1 is the primary mouse button, 2 is the secondary mouse button, etc.
         * @param ... Additional button numbers to check.
         * @return {boolean} down, True if the specified button is down.
         */
        export function isDown(button: number, ...vararg: Array<number>): boolean;

        /**
         * Checks if the mouse is grabbed.
         *
         * @return {boolean} grabbed, True if the cursor is grabbed, false if it is not.
         */
        export function isGrabbed(): boolean;

        /**
         * Checks if the cursor is visible.
         *
         * @return {boolean} visible, True if the cursor to visible, false if the cursor is hidden.
         */
        export function isVisible(): boolean;

        /**
         * Creates a new hardware Cursor object from an image file or ImageData.
         *
         *
         * Hardware cursors are framerate-independent and work the same way as normal
         * operating system cursors. Unlike drawing an image at the mouse's current
         * coordinates, hardware cursors never have visible lag between when the mouse is
         * moved and when the cursor position updates, even at low framerates.
         *
         *
         * The hot spot is the point the operating system uses to determine what was
         * clicked and at what position the mouse cursor is. For example, the normal arrow
         * pointer normally has its hot spot at the top left of the image, but a crosshair
         * cursor might have it in the middle.
         *
         * @param imageData The ImageData to use for the the new Cursor.
         * @param hotx The x-coordinate in the ImageData of the cursor's hot spot.
         * @param hoty The y-coordinate in the ImageData of the cursor's hot spot.
         * @return {Cursor} cursor, The new Cursor object.
         */
        export function newCursor(imageData: ImageData, hotx?: number, hoty?: number): Cursor;

        /**
         * Creates a new hardware Cursor object from an image file or ImageData.
         *
         *
         * Hardware cursors are framerate-independent and work the same way as normal
         * operating system cursors. Unlike drawing an image at the mouse's current
         * coordinates, hardware cursors never have visible lag between when the mouse is
         * moved and when the cursor position updates, even at low framerates.
         *
         *
         * The hot spot is the point the operating system uses to determine what was
         * clicked and at what position the mouse cursor is. For example, the normal arrow
         * pointer normally has its hot spot at the top left of the image, but a crosshair
         * cursor might have it in the middle.
         *
         * @param filepath Path to the image to use for the new Cursor.
         * @param hotx The x-coordinate in the ImageData of the cursor's hot spot.
         * @param hoty The y-coordinate in the ImageData of the cursor's hot spot.
         * @return {Cursor} cursor, The new Cursor object.
         */
        export function newCursor(filepath: string, hotx?: number, hoty?: number): Cursor;

        /**
         * Creates a new hardware Cursor object from an image file or ImageData.
         *
         *
         * Hardware cursors are framerate-independent and work the same way as normal
         * operating system cursors. Unlike drawing an image at the mouse's current
         * coordinates, hardware cursors never have visible lag between when the mouse is
         * moved and when the cursor position updates, even at low framerates.
         *
         *
         * The hot spot is the point the operating system uses to determine what was
         * clicked and at what position the mouse cursor is. For example, the normal arrow
         * pointer normally has its hot spot at the top left of the image, but a crosshair
         * cursor might have it in the middle.
         *
         * @param fileData Data representing the image to use for the new Cursor.
         * @param hotx The x-coordinate in the ImageData of the cursor's hot spot.
         * @param hoty The y-coordinate in the ImageData of the cursor's hot spot.
         * @return {Cursor} cursor, The new Cursor object.
         */
        export function newCursor(fileData: FileData, hotx?: number, hoty?: number): Cursor;

        /**
         * Sets the current mouse cursor.
         *
         *
         * Resets the current mouse cursor to the default when called without arguments.
         *
         */
        export function setCursor(): void;

        /**
         * Sets the current mouse cursor.
         *
         *
         * Resets the current mouse cursor to the default when called without arguments.
         *
         * @param cursor The Cursor object to use as the current mouse cursor.
         */
        export function setCursor(cursor: Cursor): void;

        /**
         * Grabs the mouse and confines it to the window.
         *
         * @param grab True to confine the mouse, false to let it leave the window.
         */
        export function setGrabbed(grab: boolean): void;

        /**
         * Sets the current position of the mouse. Non-integer values are floored.
         *
         * @param x The new position of the mouse along the x-axis.
         * @param y The new position of the mouse along the y-axis.
         */
        export function setPosition(x: number, y: number): void;

        /**
         * Sets whether relative mode is enabled for the mouse.
         *
         *
         * When relative mode is enabled, the cursor is hidden and doesn't move when the
         * mouse does, but relative mouse motion events are still generated via
         * love.mousemoved. This lets the mouse move in any direction indefinitely without
         * the cursor getting stuck at the edges of the screen.
         *
         *
         * The reported position of the mouse is not updated while relative mode is
         * enabled, even when relative mouse motion events are generated.
         *
         * @param enable True to enable relative mode, false to disable it.
         */
        export function setRelativeMode(enable: boolean): void;

        /**
         * Sets the visibility of the cursor.
         *
         * @param visible True to set the cursor to visible, false to hide the cursor.
         */
        export function setVisible(visible: boolean): void;

        /**
         * Sets the current X position of the mouse. Non-integer values are floored.
         *
         * @param x The new position of the mouse along the x-axis.
         */
        export function setX(x: number): void;

        /**
         * Sets the current Y position of the mouse. Non-integer values are floored.
         *
         * @param y The new position of the mouse along the y-axis.
         */
        export function setY(y: number): void;

    }

}
