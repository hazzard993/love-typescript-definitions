/**
 * Represents a physical joystick.
 * @link [Joystick](https://love2d.org/wiki/Joystick)
 */
declare interface Joystick extends LoveObject<"Joystick"> {
    /**
     * Gets the direction of each axis.
     *
     * @return axisDir1, Direction of axis1.
     * @return axisDir2, Direction of axis2.
     * @return axisDirN, Direction of axisN.
     * @tupleReturn
     * @link [Joystick:getAxes](https://love2d.org/wiki/Joystick:getAxes)
     */
    getAxes(): [number, number, number];

    /**
     * Gets the direction of an axis.
     *
     * @param axis The index of the axis to be checked.
     * @return direction, Current value of the axis.
     * @link [Joystick:getAxes](https://love2d.org/wiki/Joystick:getAxes)
     */
    getAxis(axis: number): number;

    /**
     * Gets the number of axes on the joystick.
     *
     * @return axes, The number of axes available.
     * @link [Joystick:getAxisCount](https://love2d.org/wiki/Joystick:getAxisCount)
     */
    getAxisCount(): number;

    /**
     * Gets the number of buttons on the joystick.
     *
     * @return buttons, The number of buttons available.
     * @link [Joystick:getButtonCount](https://love2d.org/wiki/Joystick:getButtonCount)
     */
    getButtonCount(): number;

    /**
     * Gets a stable GUID unique to the type of the physical joystick which does not
     * change over time. For example, all Sony Dualshock 3 controllers in OS X have
     * the same GUID. The value is platform-dependent.
     *
     * @return guid, The Joystick type's OS-dependent unique identifier.
     * @link [Joystick:getGUID](https://love2d.org/wiki/Joystick:getGUID)
     */
    getGUID(): string;

    /**
     * Gets the direction of a virtual gamepad axis. If the Joystick isn't recognized
     * as a gamepad or isn't connected, this function will always return 0.
     *
     * @param axis The virtual axis to be checked.
     * @return direction, Current value of the axis.
     * @link [Joystick:getGamepadAxis](https://love2d.org/wiki/Joystick:getGamepadAxis)
     */
    getGamepadAxis(axis: GamepadAxis): number;

    /**
     * Gets the button, axis or hat that a virtual gamepad input is bound to.
     *
     * @param axisOrButton The virtual gamepad axis or button to get the binding for.
     * @return inputtype, The type of input the virtual gamepad axis is bound to.
     * @return inputindex, The index of the Joystick's button, axis or hat that the virtual gamepad axis is bound to.
     * @return hatdirection, The direction of the hat, if the virtual gamepad axis is bound to a hat. _nil/undefined_ otherwise.
     * @tupleReturn
     * @link [Joystick:getGamepadMapping](https://love2d.org/wiki/Joystick:getGamepadMapping)
     */
    getGamepadMapping(axisOrButton: GamepadAxis | GamepadButton): [JoystickInputType, number, JoystickHat | undefined];

    /**
     * Gets the direction of the Joystick's hat.
     *
     * @param hat The index of the hat to be checked.
     * @return direction, The direction the hat is pushed.
     * @link [Joystick:getHat](https://love2d.org/wiki/Joystick:getHat)
     */
    getHat(hat: number): JoystickHat;

    /**
     * Gets the number of hats on the joystick.
     *
     * @return hats, How many hats the joystick has.
     * @link [Joystick:getHatCount](https://love2d.org/wiki/Joystick:getHatCount)
     */
    getHatCount(): number;

    /**
     * Gets the joystick's unique identifier. The identifier will remain the same for
     * the life of the game, even when the Joystick is disconnected and reconnected,
     * but it will change when the game is re-launched.
     *
     * @return id, The Joystick's unique identifier. Remains the same as long as the game is running.
     * @return instanceid, Unique instance identifier. Changes every time the Joystick is reconnected. _nil/undefined_ if the Joystick is not connected.
     * @tupleReturn
     * @link [Joystick:getID](https://love2d.org/wiki/Joystick:getID)
     */
    getID(): [number, number | undefined];

    /**
     * Gets the name of the joystick.
     *
     * @return name, The name of the joystick.
     * @link [Joystick:getName](https://love2d.org/wiki/Joystick:getName)
     */
    getName(): string;

    /**
     * Gets the current vibration motor strengths on a Joystick with rumble support.
     *
     * @return left, Current strength of the left vibration motor on the Joystick.
     * @return right, Current strength of the right vibration motor on the Joystick.
     * @tupleReturn
     * @link [Joystick:getVibration](https://love2d.org/wiki/Joystick:getVibration)
     */
    getVibration(): [number, number];

    /**
     * Gets whether the Joystick is connected.
     *
     * @return connected, True if the Joystick is currently connected, false otherwise.
     * @link [Joystick:isConnected](https://love2d.org/wiki/Joystick:isConnected)
     */
    isConnected(): boolean;

    /**
     * Checks if a button on the Joystick is pressed.
     *
     * LÖVE 0.9.0 had a bug which required the button indices passed to
     * Joystick:isDown to be 0-based instead of 1-based, for example button 1 would be
     * 0 for this function. It was fixed in 0.9.1.
     *
     * @param ... The index of a button to check.
     * @return anyDown, True if any supplied button is down, false if not.
     * @link [Joystick:isDown](https://love2d.org/wiki/Joystick:isDown)
     */
    isDown(...vararg: Array<number>): boolean;

    /**
     * Gets whether the Joystick is recognized as a gamepad. If this is the case, the
     * Joystick's buttons and axes can be used in a standardized manner across
     * different operating systems and joystick models via Joystick:getGamepadAxis and
     * related functions.
     *
     * LÖVE automatically recognizes most popular controllers with a similar layout
     * to the Xbox 360 controller as gamepads, but you can add more with
     * love.joystick.setGamepadMapping.
     *
     * @return isgamepad, True if the Joystick is recognized as a gamepad, false otherwise.
     * @link [Joystick:isGamepad](https://love2d.org/wiki/Joystick:isGamepad)
     */
    isGamepad(): boolean;

    /**
     * Checks if a virtual gamepad button on the Joystick is pressed. If the Joystick
     * is not recognized as a Gamepad or isn't connected, then this function will
     * always return false.
     *
     * @param ... The gamepad button to check.
     * @return anyDown, True if any supplied button is down, false if not.
     * @link [Joystick:isGamepadDown](https://love2d.org/wiki/Joystick:isGamepadDown)
     */
    isGamepadDown(...vararg: Array<GamepadButton>): boolean;

    /**
     * Gets whether the Joystick supports vibration.
     *
     * @return supported, True if rumble / force feedback vibration is supported on this Joystick, false if not.
     * @link [Joystick:isVibrationSupported](https://love2d.org/wiki/Joystick:isVibrationSupported)
     */
    isVibrationSupported(): boolean;

    /**
     * Sets the vibration motor speeds on a Joystick with rumble support.
     *
     * @param left Strength of the left vibration motor on the Joystick. Must be in the range of [0, 1].
     * @param right Strength of the right vibration motor on the Joystick. Must be in the range of [0, 1].
     * @return success, True if the vibration was successfully applied, false if not.
     * @link [Joystick:setVibration](https://love2d.org/wiki/Joystick:setVibration)
     */
    setVibration(left: number, right: number): boolean;

    /**
     * Sets the vibration motor speeds on a Joystick with rumble support.
     *
     * @return success, True if the vibration was successfully disabled, false if not.
     * @link [Joystick:setVibration](https://love2d.org/wiki/Joystick:setVibration)
     */
    setVibration(): boolean;

    /**
     * Sets the vibration motor speeds on a Joystick with rumble support.
     *
     * @param left Strength of the left vibration motor on the Joystick. Must be in the range of [0, 1].
     * @param right Strength of the right vibration motor on the Joystick. Must be in the range of [0, 1].
     * @param duration The duration of the vibration in seconds. A negative value means infinite duration.
     * @return success, True if the vibration was successfully applied, false if not.
     * @link [Joystick:setVibration](https://love2d.org/wiki/Joystick:setVibration)
     */
    setVibration(left: number, right: number, duration: number): boolean;
}
