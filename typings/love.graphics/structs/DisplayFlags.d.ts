declare module "love.graphics" {
  import { FullscreenType } from "love.window";

  /**
   * @link [love.window.setMode](https://love2d.org/wiki/love.window.setMode)
   */
  type DisplayFlags = {
    /**
     * Fullscreen (true), or windowed (false). (Default: false)
     */
    fullscreen?: boolean;
    /**
     * The type of fullscreen to use. This defaults to "normal" in 0.9.0 through 0.9.2 and to "desktop" in 0.10.0 and older. (Default: "desktop")
     */
    fullscreentype?: FullscreenType;
    /**
     * Enable automatic DPI scaling. (Default: true)
     */
    usedpiscale?: boolean;
    /**
     * True if LÃ–VE should wait for vsync, false otherwise. (Default: true)
     */
    vsync?: boolean;
    /**
     * The number of antialiasing samples. (Default: 0)
     */
    msaa?: number;
    /**
     * Whether a stencil buffer should be allocated. If true, the stencil buffer will have 8 bits. (Default: true)
     */
    stencil?: boolean;
    /**
     * The number of bits in the depth buffer. (Default: 0)
     */
    depth?: number;
    /**
     * True if the window should be resizable in windowed mode, false otherwise. (Default: false)
     */
    resizable?: boolean;
    /**
     * True if the window should be borderless in windowed mode, false otherwise. (Default: false)
     */
    borderless?: boolean;
    /**
     * True if the window should be centered in windowed mode, false otherwise. (Default: false)
     */
    centered?: boolean;
    /**
     * The index of the display to show the window in, if multiple monitors are available. (Default: 1)
     */
    display?: number;
    /**
     * The minimum width of the window, if it's resizable. Cannot be less than 1. (Default: 1)
     */
    minwidth?: number;
    /**
     * The minimum height of the window, if it's resizable. Cannot be less than 1. (Default: 1)
     */
    minheight?: number;
    /**
     * True if high-dpi mode should be used on Retina displays in macOS and iOS. Does nothing on non-Retina displays. (Default: false)
     */
    highdpi?: boolean;
    /**
     * The x-coordinate of the window's position in the specified display. (Default: undefined)
     */
    x?: number;
    /**
     * The y-coordinate of the window's position in the specified display. (Default: undefined)
     */
    y?: number;
  };
}
