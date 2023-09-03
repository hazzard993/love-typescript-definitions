/**
 * Provides an interface to the user's joystick.
 *
 * @noResolution
 * @noSelf
 * @link [love.joystick](https://love2d.org/wiki/love.joystick)
 */
declare module "love.joystick" {
  /**
   * Gets the number of connected joysticks.
   *
   * @return joystickcount, The number of connected joysticks.
   * @link [love.joystick.getJoystickCount](https://love2d.org/wiki/love.joystick.getJoystickCount)
   */
  function getJoystickCount(): number;

  /**
   * Gets a list of connected Joysticks.
   *
   * @return joysticks, The list of currently connected Joysticks.
   * @link [love.joystick.getJoysticks](https://love2d.org/wiki/love.joystick.getJoysticks)
   */
  function getJoysticks(): Array<Joystick>;

  /**
   * Gets the full gamepad mapping string of the Joysticks which have the given GUID, or nil if the GUID isn't recognized as a gamepad.
   *
   * The mapping string contains binding information used to map the Joystick's buttons an axes to the standard gamepad layout, and can be used later with love.joystick.loadGamepadMappings.
   * @returns A string containing the Joystick's gamepad mappings, or nil if the Joystick is not recognized as a gamepad.
   * @link [love.joystick.getGamepadMappingString](https://love2d.org/wiki/love.joystick.getGamepadMappingString)
   * @since 11.3
   */
  function getGamepadMappingString(): string | undefined;

  /**
   * Loads a gamepad mappings string from a file.
   *
   * @param filename The filename to load the mappings string from.
   * @link [love.joystick.loadGamepadMappings](https://love2d.org/wiki/love.joystick.loadGamepadMappings)
   */
  function loadGamepadMappings(filename: string): void;

  /**
   * Loads a gamepad mappings string directly.
   *
   * @param mappings The mappings string to load.
   * @link [love.joystick.loadGamepadMappings](https://love2d.org/wiki/love.joystick.loadGamepadMappings)
   */
  function loadGamepadMappings(mappings: string): void;

  /**
   * Saves the gamepad mappings of all relevant joysticks to a file.
   *
   * @param filename The filename to save the mappings string to.
   * @return mappings, The mappings string that was written to the file.
   * @link [love.joystick.saveGamepadMappings](https://love2d.org/wiki/love.joystick.saveGamepadMappings)
   */
  function saveGamepadMappings(filename: string): string;

  /**
   * Returns the mappings string without writing to a file.
   *
   * @return mappings, The mappings string.
   * @link [love.joystick.saveGamepadMappings](https://love2d.org/wiki/love.joystick.saveGamepadMappings)
   */
  function saveGamepadMappings(): string;

  /**
   * Binds a virtual gamepad input to a button, axis or hat for all Joysticks of a certain type.
   *
   * @param guid The OS-dependent GUID for the type of Joystick the binding will affect.
   * @param button The virtual gamepad button to bind.
   * @param inputtype The type of input to bind the virtual gamepad button to.
   * @param inputindex The index of the axis, button, or hat to bind the virtual gamepad button to.
   * @param hatdirection The direction of the hat, if the virtual gamepad button will be bound to a hat. Unspecified otherwise.
   * @return success, Whether the virtual gamepad button was successfully bound.
   * @link [love.joystick.setGamepadMapping](https://love2d.org/wiki/love.joystick.setGamepadMapping)
   */
  function setGamepadMapping(
    guid: string,
    button: GamepadButton,
    inputtype: JoystickInputType,
    inputindex: number,
    hatdirection?: JoystickHat,
  ): boolean;

  /**
   * Binds a virtual gamepad input to a button, axis or hat for all Joysticks of a certain type.
   *
   * @param guid The OS-dependent GUID for the type of Joystick the binding will affect.
   * @param axis The virtual gamepad axis to bind.
   * @param inputtype The type of input to bind the virtual gamepad axis to.
   * @param inputindex The index of the axis, button, or hat to bind the virtual gamepad axis to.
   * @param hatdirection The direction of the hat, if the virtual gamepad axis will be bound to a hat. Unspecified otherwise.
   * @return success, Whether the virtual gamepad button was successfully bound.
   * @link [love.joystick.setGamepadMapping](https://love2d.org/wiki/love.joystick.setGamepadMapping)
   */
  function setGamepadMapping(
    guid: string,
    axis: GamepadAxis,
    inputtype: JoystickInputType,
    inputindex: number,
    hatdirection?: JoystickHat,
  ): boolean;
}
