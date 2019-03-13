declare namespace love {

    /**
     * Provides an interface to the user's keyboard.
     * @link [love.keyboard](https://love2d.org/wiki/love.keyboard)
     */
    export namespace keyboard {
        /**
         * Gets the key corresponding to the given hardware scancode.
         *
         *
         * Unlike key constants, Scancodes are keyboard layout-independent. For example
         * the scancode "w" will be generated if the key in the same place as the "w" key
         * on an American keyboard is pressed, no matter what the key is labelled or what
         * the user's operating system settings are.
         *
         *
         * Scancodes are useful for creating default controls that have the same physical
         * locations on on all systems.
         *
         * @param scancode The scancode to get the key from.
         * @return {KeyConstant} key, The key corresponding to the given scancode, or "unknown" if the scancode doesn't map to a KeyConstant on the current system.
         */
        export function getKeyFromScancode(scancode: Scancode): KeyConstant;

        /**
         * Gets the hardware scancode corresponding to the given key.
         *
         *
         * Unlike key constants, Scancodes are keyboard layout-independent. For example
         * the scancode "w" will be generated if the key in the same place as the "w" key
         * on an American keyboard is pressed, no matter what the key is labelled or what
         * the user's operating system settings are.
         *
         *
         * Scancodes are useful for creating default controls that have the same physical
         * locations on on all systems.
         *
         * @param key The key to get the scancode from.
         * @return {Scancode} scancode, The scancode corresponding to the given key, or "unknown" if the given key has no known physical representation on the current system.
         */
        export function getScancodeFromKey(key: KeyConstant): Scancode;

        /**
         * Gets whether key repeat is enabled.
         *
         * @return {boolean} enabled, Whether key repeat is enabled.
         */
        export function hasKeyRepeat(): boolean;

        /**
         * Gets whether text input events are enabled.
         *
         * @return {boolean} enabled, Whether text input events are enabled.
         */
        export function hasTextInput(): boolean;

        /**
         * Checks whether a certain key is down. Not to be confused with love.keypressed
         * or love.keyreleased.
         *
         * @param key The key to check.
         * @return {boolean} down, True if the key is down, false if not.
         */
        export function isDown(key: KeyConstant): boolean;

        /**
         * Checks whether a certain key is down. Not to be confused with love.keypressed
         * or love.keyreleased.
         *
         * @param key A key to check.
         * @param ... Additional keys to check.
         * @return {boolean} anyDown, True if any supplied key is down, false if not.
         */
        export function isDown(key: KeyConstant, ...vararg: Array<KeyConstant>): boolean;

        /**
         * Checks whether the specified Scancodes are pressed. Not to be confused with
         * love.keypressed or love.keyreleased.
         *
         *
         * Unlike regular KeyConstants, Scancodes are keyboard layout-independent. The
         * scancode "w" is used if the key in the same place as the "w" key on an American
         * keyboard is pressed, no matter what the key is labelled or what the user's
         * operating system settings are.
         *
         * @param scancode A Scancode to check.
         * @param ... Additional Scancodes to check.
         * @return {boolean} down, True if any supplied Scancode is down, false if not.
         */
        export function isScancodeDown(scancode: Scancode, ...vararg: Array<Scancode>): boolean;

        /**
         * Enables or disables key repeat. It is disabled by default.
         *
         *
         * The interval between repeats depends on the user's system settings.
         *
         * @param enable Whether repeat keypress events should be enabled when a key is held down.
         */
        export function setKeyRepeat(enable: boolean): void;

        /**
         * Enables or disables text input events. It is enabled by default on Windows,
         * Mac, and Linux, and disabled by default on iOS and Android.
         *
         * @param enable Whether text input events should be enabled.
         */
        export function setTextInput(enable: boolean): void;

        /**
         * Enables or disables text input events. It is enabled by default on Windows,
         * Mac, and Linux, and disabled by default on iOS and Android.
         *
         * @param enable Whether text input events should be enabled.
         * @param x On-screen keyboard x position.
         * @param y On-screen keyboard y position.
         * @param w On-screen keyboard width.
         * @param h On-screen keyboard height.
         */
        export function setTextInput(enable: boolean, x: number, y: number, w: number, h: number): void;

    }

}
