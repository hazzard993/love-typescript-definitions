declare namespace love {

    /**
     * Provides an interface to touch-screen presses.
     * @noSelf
     * @link [love.touch](https://love2d.org/wiki/love.touch)
     */
    export namespace touch {
        /**
         * Gets the current position of the specified touch-press, in pixels.
         *
         * @param id The identifier of the touch-press. Use love.touch.getTouches, love.touchpressed, or love.touchmoved to obtain touch id values.
         * @return x, The position along the x-axis of the touch-press inside the window, in pixels.
         * @return y, The position along the y-axis of the touch-press inside the window, in pixels.
         * @tupleReturn
         */
        export function getPosition(id: LightUserData): [number, number];

        /**
         * Gets the current pressure of the specified touch-press.
         *
         * @param id The identifier of the touch-press. Use love.touch.getTouches, love.touchpressed, or love.touchmoved to obtain touch id values.
         * @return pressure, The pressure of the touch-press. Most touch screens aren't pressure sensitive, in which case the pressure will be 1.
         */
        export function getPressure(id: LightUserData): number;

        /**
         * Gets a list of all active touch-presses.
         *
         * @return touches, A list of active touch-press id values, which can be used with love.touch.getPosition.
         */
        export function getTouches(): Array<LightUserData>;

    }

}
