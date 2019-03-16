declare namespace love {

    /**
     * Provides an interface to the user's joystick.
     * @noSelf
     * @link [love.joystick](https://love2d.org/wiki/love.joystick)
     */
    export namespace joystick {
        /**
         * Gets the number of connected joysticks.
         *
         * @return {number} joystickcount, The number of connected joysticks.
         */
        export function getJoystickCount(): number;

        /**
         * Gets a list of connected Joysticks.
         *
         * @return {table} joysticks, The list of currently connected Joysticks.
         */
        export function getJoysticks(): Array<Joystick>;

        /**
         * Loads a gamepad mappings string or file created with
         * love.joystick.saveGamepadMappings.
         *
         * @param filename The filename to load the mappings string from.
         */
        export function loadGamepadMappings(filename: string): void;

        /**
         * Loads a gamepad mappings string or file created with
         * love.joystick.saveGamepadMappings.
         *
         * @param mappings The mappings string to load.
         */
        export function loadGamepadMappings(mappings: string): void;

        /**
         * Saves the virtual gamepad mappings of all Joysticks that are recognized as
         * gamepads and have either been recently used or their gamepad bindings have been
         * modified.
         *
         * @param filename The filename to save the mappings string to.
         * @return {string} mappings, The mappings string that was written to the file.
         */
        export function saveGamepadMappings(filename: string): string;

        /**
         * Saves the virtual gamepad mappings of all Joysticks that are recognized as
         * gamepads and have either been recently used or their gamepad bindings have been
         * modified.
         *
         * @return {string} mappings, The mappings string.
         */
        export function saveGamepadMappings(): string;

        /**
         * Binds a virtual gamepad input to a button, axis or hat for all Joysticks of a
         * certain type. For example, if this function is used with a GUID returned by a
         * Dualshock 3 controller in OS X, the binding will affect Joystick:getGamepadAxis
         * and Joystick:isGamepadDown for all Dualshock 3 controllers used with the game
         * when run in OS X.
         *
         *
         * LÖVE includes built-in gamepad bindings for many common controllers. This
         * function lets you change the bindings or add new ones for types of Joysticks
         * which aren't recognized as gamepads by default.
         *
         *
         * The virtual gamepad buttons and axes are designed around the Xbox 360
         * controller layout.
         *
         * @param guid The OS-dependent GUID for the type of Joystick the binding will affect.
         * @param button The virtual gamepad button to bind.
         * @param inputtype The type of input to bind the virtual gamepad button to.
         * @param inputindex The index of the axis, button, or hat to bind the virtual gamepad button to.
         * @param hatdirection The direction of the hat, if the virtual gamepad button will be bound to a hat. nil otherwise.
         * @return {boolean} success, Whether the virtual gamepad button was successfully bound.
         */
        export function setGamepadMapping(guid: string, button: GamepadButton, inputtype: JoystickInputType, inputindex: number, hatdirection: JoystickHat): boolean;

        /**
         * Binds a virtual gamepad input to a button, axis or hat for all Joysticks of a
         * certain type. For example, if this function is used with a GUID returned by a
         * Dualshock 3 controller in OS X, the binding will affect Joystick:getGamepadAxis
         * and Joystick:isGamepadDown for all Dualshock 3 controllers used with the game
         * when run in OS X.
         *
         *
         * LÖVE includes built-in gamepad bindings for many common controllers. This
         * function lets you change the bindings or add new ones for types of Joysticks
         * which aren't recognized as gamepads by default.
         *
         *
         * The virtual gamepad buttons and axes are designed around the Xbox 360
         * controller layout.
         *
         * @param guid The OS-dependent GUID for the type of Joystick the binding will affect.
         * @param axis The virtual gamepad axis to bind.
         * @param inputtype The type of input to bind the virtual gamepad axis to.
         * @param inputindex The index of the axis, button, or hat to bind the virtual gamepad axis to.
         * @param hatdirection The direction of the hat, if the virtual gamepad axis will be bound to a hat. nil otherwise.
         * @return {boolean} success, Whether the virtual gamepad button was successfully bound.
         */
        export function setGamepadMapping(guid: string, axis: GamepadAxis, inputtype: JoystickInputType, inputindex: number, hatdirection: JoystickHat): boolean;

    }

}
