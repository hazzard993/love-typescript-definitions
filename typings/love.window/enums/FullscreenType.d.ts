declare module "love.window" {
  /**
   * Types of fullscreen modes.
   *
   * In normal fullscreen mode, if a window size is used which does not match one of
   * the monitor's supported display modes, the window will be resized to the next
   * largest display mode.
   *
   * Normal fullscreen mode is sometimes avoided by users because it can cause
   * issues in some window managers and with multi-monitor setups. In OS X it
   * prevents switching to a different program until fullscreen mode is exited. The
   * "desktop" fullscreen mode generally avoids these issues.
   * @link [FullscreenType](https://love2d.org/wiki/FullscreenType)
   */
  type FullscreenType = "desktop" | "exclusive";
}
