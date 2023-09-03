declare module "love.joystick" {
  /**
   * Virtual gamepad buttons.
   * @link [GamepadButton](https://love2d.org/wiki/GamepadButton)
   */
  type GamepadButton =
    | "a"
    | "b"
    | "x"
    | "y"
    | "back"
    | "guide"
    | "start"
    | "leftstick"
    | "rightstick"
    | "leftshoulder"
    | "rightshoulder"
    | "dpup"
    | "dpdown"
    | "dpleft"
    | "dpright";
}
