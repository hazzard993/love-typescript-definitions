/**
 * Provides an interface to touch-screen presses.
 *
 * @noResolution
 * @noSelf
 * @link [love.touch](https://love2d.org/wiki/love.touch)
 */
declare module "love.touch" {
  import { LightUserData } from "love";

  /**
   * Gets the current position of the specified touch-press, in pixels.
   *
   * @param id The identifier of the touch-press. Use love.touch.getTouches, love.touchpressed, or love.touchmoved to obtain touch id values.
   * @return x, The position along the x-axis of the touch-press inside the window, in pixels.
   * @return y, The position along the y-axis of the touch-press inside the window, in pixels.
   * @link [love.touch.getPosition](https://love2d.org/wiki/love.touch.getPosition)
   */
  function getPosition(
    id: LightUserData<"Touch">,
  ): LuaMultiReturn<[x: number, y: number]>;

  /**
   * Gets the current pressure of the specified touch-press.
   *
   * @param id The identifier of the touch-press. Use love.touch.getTouches, love.touchpressed, or love.touchmoved to obtain touch id values.
   * @return pressure, The pressure of the touch-press. Most touch screens aren't pressure sensitive, in which case the pressure will be 1.
   * @link [love.touch.getPressure](https://love2d.org/wiki/love.touch.getPressure)
   */
  function getPressure(id: LightUserData<"Touch">): number;

  /**
   * Gets a list of all active touch-presses.
   *
   * @return touches, A list of active touch-press id values, which can be used with love.touch.getPosition.
   * @link [love.touch.getTouches](https://love2d.org/wiki/love.touch.getTouches)
   */
  function getTouches(): Array<LightUserData<"Touch">>;
}
