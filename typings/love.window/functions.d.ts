/**
 * Provides an interface for modifying and retrieving information about the
 * program's window.
 *
 * @noResolution
 * @noSelf
 * @link [love.window](https://love2d.org/wiki/love.window)
 */
declare module "love.window" {
  import { ImageData } from "love.image";
  import { DisplayFlags } from "love.graphics";

  /**
   * Closes the window. It can be reopened with love.window.setMode.
   * @link [love.window.close](https://love2d.org/wiki/love.window.close)
   */
  function close(): void;

  /**
   * Converts a number from pixels to density-independent units.
   *
   * The pixel density inside the window might be greater (or smaller) than the
   * "size" of the window. For example on a retina screen in Mac OS X with the
   * highdpi window flag enabled, the window may take up the same physical size as
   * an 800x600 window, but the area inside the window uses 1600x1200 pixels.
   * love.window.fromPixels(1600) would return 800 in that case.
   *
   * This function converts coordinates from pixels to the size users are expecting
   * them to display at onscreen. love.window.toPixels does the opposite. The
   * highdpi window flag must be enabled to use the full pixel density of a Retina
   * screen on Mac OS X and iOS. The flag currently does nothing on Windows and
   * Linux, and on Android it is effectively always enabled.
   *
   * Most LÖVE functions return values and expect arguments in terms of pixels
   * rather than density-independent units.
   *
   * @param pixelvalue A number in pixels to convert to density-independent units.
   * @return value, The converted number, in density-independent units.
   * @link [love.window.fromPixels](https://love2d.org/wiki/love.window.fromPixels)
   */
  function fromPixels(pixelvalue: number): number;

  /**
   * Converts a number from pixels to density-independent units.
   *
   * The pixel density inside the window might be greater (or smaller) than the
   * "size" of the window. For example on a retina screen in Mac OS X with the
   * highdpi window flag enabled, the window may take up the same physical size as
   * an 800x600 window, but the area inside the window uses 1600x1200 pixels.
   * love.window.fromPixels(1600) would return 800 in that case.
   *
   * This function converts coordinates from pixels to the size users are expecting
   * them to display at onscreen. love.window.toPixels does the opposite. The
   * highdpi window flag must be enabled to use the full pixel density of a Retina
   * screen on Mac OS X and iOS. The flag currently does nothing on Windows and
   * Linux, and on Android it is effectively always enabled.
   *
   * Most LÖVE functions return values and expect arguments in terms of pixels
   * rather than density-independent units.
   *
   * @param px The x-axis value of a coordinate in pixels.
   * @param py The y-axis value of a coordinate in pixels.
   * @return x, The converted x-axis value of the coordinate, in density-independent units.
   * @return y, The converted y-axis value of the coordinate, in density-independent units.
   * @link [love.window.fromPixels](https://love2d.org/wiki/love.window.fromPixels)
   */
  function fromPixels(
    px: number,
    py: number,
  ): LuaMultiReturn<[x: number, y: number]>;

  /**
   * Gets the name of a display.
   *
   * @param displayindex The index of the display to get the name of.
   * @return name, The name of the specified display.
   * @link [love.window.getDisplayName](https://love2d.org/wiki/love.window.getDisplayName)
   */
  function getDisplayName(displayindex: number): string;

  /**
   * Gets current device display orientation.
   * @param index Display index to get its display orientation, or nil for default display index.
   * @returns Current device display orientation.
   * @link [love.window.getDisplayOrientation](https://love2d.org/wiki/love.window.getDisplayOrientation)
   * @since 11.3
   */
  function getDisplayOrientation(index?: number): DisplayOrientation;

  /**
   * Gets the DPI scale factor associated with the window.
   *
   * The pixel density inside the window might be greater (or smaller) than the
   * "size" of the window. For example on a retina screen in Mac OS X with the
   * highdpi window flag enabled, the window may take up the same physical size as
   * an 800x600 window, but the area inside the window uses 1600x1200 pixels.
   * love.window.getDPIScale() would return 2.0 in that case.
   *
   * The love.window.fromPixels and love.window.toPixels functions can also be used
   * to convert between units.
   *
   * The highdpi window flag must be enabled to use the full pixel density of a
   * Retina screen on Mac OS X and iOS. The flag currently does nothing on Windows
   * and Linux, and on Android it is effectively always enabled.
   *
   * @return scale, The pixel scale factor associated with the window.
   * @link [love.window.getDPIScale](https://love2d.org/wiki/love.window.getDPIScale)
   */
  function getDPIScale(): number;

  /**
   * Gets the width and height of the desktop.
   * @param display The index of the display, if multiple monitors are available. (Default 1)
   * @return width, The width of the desktop.
   * @return height, The height of the desktop.
   * @link [love.window.getDesktopDimensions](https://love2d.org/wiki/love.window.getDesktopDimensions)
   */
  function getDesktopDimensions(
    display?: number,
  ): LuaMultiReturn<[width: number, height: number]>;

  /**
   * Gets the number of connected monitors.
   * @return count, The number of currently connected displays.
   * @link [love.window.getDisplayCount](https://love2d.org/wiki/love.window.getDisplayCount)
   */
  function getDisplayCount(): number;

  /**
   * Gets whether the window is fullscreen.
   *
   * @return fullscreen, True if the window is fullscreen, false otherwise.
   * @return fstype, The type of fullscreen mode used.
   * @link [love.window.getFullscreen](https://love2d.org/wiki/love.window.getFullscreen)
   */
  function getFullscreen(): LuaMultiReturn<
    [fullscreen: boolean, fstype: FullscreenType]
  >;

  /**
   * Gets a list of supported fullscreen modes.
   *
   * @param display The index of the display, if multiple monitors are available.
   * @return modes, A table of width/height pairs. (Note that this may not be in order.)
   * @link [love.window.getFullscreenModes](https://love2d.org/wiki/love.window.getFullscreenModes)
   */
  function getFullscreenModes(
    display?: number,
  ): Array<{ width: number; height: number }>;

  /**
   * Gets the window icon.
   *
   * @return imagedata, The window icon imagedata, or _nil/undefined_ of no icon has been set with love.window.setIcon.
   * @link [love.window.getIcon](https://love2d.org/wiki/love.window.getIcon)
   */
  function getIcon(): ImageData | undefined;

  /**
   * Returns the current display mode.
   *
   * @return width, Window width.
   * @return height, Window height.
   * @return flags, Table containing the window properties.
   * @link [love.window.getMode](https://love2d.org/wiki/love.window.getMode)
   */
  function getMode(): LuaMultiReturn<
    [width: number, height: number, flags: DisplayFlags]
  >;

  /**
   * Gets the position of the window on the screen.
   *
   * The window position is in the coordinate space of the display it is currently
   * in.
   *
   * @return x, The x-coordinate of the window's position.
   * @return y, The y-coordinate of the window's position.
   * @return display, The index of the display that the window is in.
   * @link [love.window.getPosition](https://love2d.org/wiki/love.window.getPosition)
   */
  function getPosition(): LuaMultiReturn<
    [x: number, y: number, display: number]
  >;

  /**
   * Gets area inside the window which is known to be unobstructed by a system title bar, the iPhone X notch, etc. Useful for making sure UI elements can be seen by the user.
   * @returns The x, y, width and height of the safe area.
   * @link [love.window.getSafeArea](https://love2d.org/wiki/love.window.getSafeArea)
   * @since 11.3
   */
  function getSafeArea(): LuaMultiReturn<
    [x: number, y: number, width: number, height: number]
  >;

  /**
   * Gets the window title.
   *
   * @return title, The current window title.
   * @link [love.window.getTitle](https://love2d.org/wiki/love.window.getTitle)
   */
  function getTitle(): string;

  /**
   * Gets current vertical synchronization (vsync).
   * @returns Current vsync status. 1 if enabled, 0 if disabled, and -1 for adaptive vsync.
   * @link [love.window.getVSync](https://love2d.org/wiki/love.window.getVSync)
   * @since 11.3
   */
  function getVSync(): 1 | 0 | -1;

  /**
   * Checks if the game window has keyboard focus.
   *
   * @return focus, True if the window has the focus or false if not.
   * @link [love.window.hasFocus](https://love2d.org/wiki/love.window.hasFocus)
   */
  function hasFocus(): boolean;

  /**
   * Checks if the game window has mouse focus.
   *
   * @return focus, True if the window has mouse focus or false if not.
   * @link [love.window.hasMouseFocus](https://love2d.org/wiki/love.window.hasMouseFocus)
   */
  function hasMouseFocus(): boolean;

  /**
   * Gets whether the display is allowed to sleep while the program is running.
   *
   * Display sleep is disabled by default. Some types of input (e.g. joystick button
   * presses) might not prevent the display from sleeping, if display sleep is
   * allowed.
   *
   * @return enabled, True if system display sleep is enabled / allowed, false otherwise.
   * @link [love.window.isDisplaySleepEnabled](https://love2d.org/wiki/love.window.isDisplaySleepEnabled)
   */
  function isDisplaySleepEnabled(): boolean;

  /**
   * Gets whether the Window is currently maximized.
   *
   * The window can be maximized if it is not fullscreen and is resizable, and
   * either the user has pressed the window's Maximize button or
   * love.window.maximize has been called.
   *
   * @return maximized, True if the window is currently maximized in windowed mode, false otherwise.
   * @link [love.window.isMaximized](https://love2d.org/wiki/love.window.isMaximized)
   */
  function isMaximized(): boolean;

  /**
   * Gets whether the Window is currently minimized.
   *
   * @return maximized, True if the window is currently minimized, false otherwise.
   * @link [love.window.isMinimized](https://love2d.org/wiki/love.window.isMinimized)
   */
  function isMinimized(): boolean;

  /**
   * Checks if the window is open.
   *
   * @return open, True if the window is open, false otherwise.
   * @link [love.window.isOpen](https://love2d.org/wiki/love.window.isOpen)
   */
  function isOpen(): boolean;

  /**
   * Checks if the game window is visible.
   *
   * The window is considered visible if it's not minimized and the program isn't
   * hidden.
   *
   * @return visible, True if the window is visible or false if not.
   * @link [love.window.isVisible](https://love2d.org/wiki/love.window.isVisible)
   */
  function isVisible(): boolean;

  /**
   * Makes the window as large as possible.
   *
   * This function has no effect if the window isn't resizable, since it essentially
   * programmatically presses the window's "maximize" button.
   *
   * @link [love.window.maximize](https://love2d.org/wiki/love.window.maximize)
   */
  function maximize(): void;

  /**
   * Minimizes the window to the system's task bar / dock.
   *
   * @link [love.window.minimize](https://love2d.org/wiki/love.window.minimize)
   */
  function minimize(): void;

  /**
   * Restores the size and position of the window if it was minimized or maximized.
   *
   * @link [love.window.restore](https://love2d.org/wiki/love.window.restore)
   */
  function restore(): void;

  /**
   * Causes the window to request the attention of the user if it is not in the
   * foreground.
   *
   * In Windows the taskbar icon will flash, and in OS X the dock icon will bounce.
   *
   * @param continuous Whether to continuously request attention until the window becomes active, or to do it only once.
   * @link [love.window.requestAttention](https://love2d.org/wiki/love.window.requestAttention)
   */
  function requestAttention(continuous?: boolean): void;

  /**
   * Sets whether the display is allowed to sleep while the program is running.
   *
   * Display sleep is disabled by default. Some types of input (e.g. joystick button
   * presses) might not prevent the display from sleeping, if display sleep is
   * allowed.
   *
   * @param enable True to enable system display sleep, false to disable it.
   * @link [love.window.setDisplaySleepEnabled](https://love2d.org/wiki/love.window.setDisplaySleepEnabled)
   */
  function setDisplaySleepEnabled(enable: boolean): void;

  /**
   * Enters or exits fullscreen. The display to use when entering fullscreen is
   * chosen based on which display the window is currently in, if multiple monitors
   * are connected.
   *
   * If fullscreen mode is entered and the window size doesn't match one of the
   * monitor's display modes (in normal fullscreen mode) or the window size doesn't
   * match the desktop size (in 'desktop' fullscreen mode), the window will be
   * resized appropriately. The window will revert back to its original size again
   * when fullscreen mode is exited using this function.
   *
   * @param fullscreen Whether to enter or exit fullscreen mode.
   * @return success, True if successful, false otherwise.
   * @link [love.window.setFullscreen](https://love2d.org/wiki/love.window.setFullscreen)
   */
  function setFullscreen(fullscreen: boolean): boolean;

  /**
   * Enters or exits fullscreen. The display to use when entering fullscreen is
   * chosen based on which display the window is currently in, if multiple monitors
   * are connected.
   *
   * If fullscreen mode is entered and the window size doesn't match one of the
   * monitor's display modes (in normal fullscreen mode) or the window size doesn't
   * match the desktop size (in 'desktop' fullscreen mode), the window will be
   * resized appropriately. The window will revert back to its original size again
   * when fullscreen mode is exited using this function.
   *
   * @param fullscreen Whether to enter or exit fullscreen mode.
   * @param fstype The type of fullscreen mode to use.
   * @return success, True if successful, false otherwise.
   * @link [love.window.setFullscreen](https://love2d.org/wiki/love.window.setFullscreen)
   */
  function setFullscreen(fullscreen: boolean, fstype: FullscreenType): boolean;

  /**
   * Sets the window icon until the game is quit. Not all operating systems support
   * very large icon images.
   *
   * @param imagedata The window icon image.
   * @return success, Whether the icon has been set successfully.
   * @link [love.window.setIcon](https://love2d.org/wiki/love.window.setIcon)
   */
  function setIcon(imagedata: ImageData): boolean;

  /**
   * Sets the display mode and properties of the window.
   *
   * If width or height is 0, setMode will use the width and height of the desktop.
   *
   * Changing the display mode may have side effects: for example, canvases will be
   * cleared and values sent to shaders with Shader:send will be erased. Make sure
   * to save the contents of canvases beforehand or re-draw to them afterward if you
   * need to.
   *
   * @param width Display width.
   * @param height Display height.
   * @param flags The flags table with the options:
   * @return success, True if successful, false otherwise.
   * @link [love.window.setMode](https://love2d.org/wiki/love.window.setMode)
   */
  function setMode(
    width: number,
    height: number,
    flags?: DisplayFlags,
  ): boolean;

  /**
   * Sets the position of the window on the screen.
   *
   * The window position is in the coordinate space of the specified display.
   *
   * @param x The x-coordinate of the window's position.
   * @param y The y-coordinate of the window's position.
   * @param display The index of the display that the new window position is relative to.
   * @link [love.window.setPosition](https://love2d.org/wiki/love.window.setPosition)
   */
  function setPosition(x: number, y: number, display: number): void;

  /**
   * Sets the window title.
   *
   * @param title The new window title.
   * @link [love.window.setTitle](https://love2d.org/wiki/love.window.setTitle)
   */
  function setTitle(title: string): void;

  /**
   * Sets vertical synchronization mode.
   * @param vsync VSync number: 1 to enable, 0 to disable, and -1 for adaptive vsync.
   * @link [love.window.setVSync](https://love2d.org/wiki/love.window.setVSync)
   * @since 11.3
   */
  function setVSync(vsync: 1 | 0 | -1): void;

  /**
   * Displays a message box dialog above the love window. The message box contains a
   * title, optional text, and buttons.
   *
   * @param title The title of the message box.
   * @param message The text inside the message box.
   * @param type The type of the message box.
   * @param attachtowindow Whether the message box should be attached to the love window or free-floating.
   * @return success, Whether the message box was successfully displayed.
   * @link [love.window.showMessageBox](https://love2d.org/wiki/love.window.showMessageBox)
   */
  function showMessageBox(
    title: string,
    message: string,
    type?: MessageBoxType,
    attachtowindow?: boolean,
  ): boolean;

  /**
   * Displays a message box dialog above the love window. The message box contains a
   * title, optional text, and buttons.
   *
   * @param title The title of the message box.
   * @param message The text inside the message box.
   * @param buttonlist A table containing a list of button names to show. The table can also contain the fields enterbutton and escapebutton, which should be the index of the default button to use when the user presses 'enter' or 'escape', respectively.
   * @param type The type of the message box.
   * @param attachtowindow Whether the message box should be attached to the love window or free-floating.
   * @return pressedbutton, The index of the button pressed by the user. May be 0 if the message box dialog was closed without pressing a button.
   * @link [love.window.showMessageBox](https://love2d.org/wiki/love.window.showMessageBox)
   */
  function showMessageBox(
    title: string,
    message: string,
    buttonlist: {
      [key: number]: string;
      enterbutton?: number;
      escapebutton?: number;
    },
    type?: MessageBoxType,
    attachtowindow?: boolean,
  ): number;

  /**
   * Converts a number from density-independent units to pixels.
   *
   * The pixel density inside the window might be greater (or smaller) than the
   * "size" of the window. For example on a retina screen in Mac OS X with the
   * highdpi window flag enabled, the window may take up the same physical size as
   * an 800x600 window, but the area inside the window uses 1600x1200 pixels.
   * love.window.toPixels(800) would return 1600 in that case.
   *
   * This is used to convert coordinates from the size users are expecting them to
   * display at onscreen to pixels. love.window.fromPixels does the opposite. The
   * highdpi window flag must be enabled to use the full pixel density of a Retina
   * screen on Mac OS X and iOS. The flag currently does nothing on Windows and
   * Linux, and on Android it is effectively always enabled.
   *
   * Most LÖVE functions return values and expect arguments in terms of pixels
   * rather than density-independent units.
   *
   * @param value A number in density-independent units to convert to pixels.
   * @return pixelvalue, The converted number, in pixels.
   * @link [love.window.toPixels](https://love2d.org/wiki/love.window.toPixels)
   */
  function toPixels(value: number): number;

  /**
   * Converts a number from density-independent units to pixels.
   *
   * The pixel density inside the window might be greater (or smaller) than the
   * "size" of the window. For example on a retina screen in Mac OS X with the
   * highdpi window flag enabled, the window may take up the same physical size as
   * an 800x600 window, but the area inside the window uses 1600x1200 pixels.
   * love.window.toPixels(800) would return 1600 in that case.
   *
   * This is used to convert coordinates from the size users are expecting them to
   * display at onscreen to pixels. love.window.fromPixels does the opposite. The
   * highdpi window flag must be enabled to use the full pixel density of a Retina
   * screen on Mac OS X and iOS. The flag currently does nothing on Windows and
   * Linux, and on Android it is effectively always enabled.
   *
   * Most LÖVE functions return values and expect arguments in terms of pixels
   * rather than density-independent units.
   *
   * @param x The x-axis value of a coordinate in density-independent units to convert to pixels.
   * @param y The y-axis value of a coordinate in density-independent units to convert to pixels.
   * @return px, The converted x-axis value of the coordinate, in pixels.
   * @return py, The converted y-axis value of the coordinate, in pixels.
   * @link [love.window.toPixels](https://love2d.org/wiki/love.window.toPixels)
   */
  function toPixels(
    x: number,
    y: number,
  ): LuaMultiReturn<[px: number, py: number]>;

  /**
   * Sets the display mode and properties of the window, without modifying
   * unspecified properties.
   *
   * If width or height is 0, updateMode will use the width and height of the
   * desktop.
   *
   * Changing the display mode may have side effects: for example, canvases will be
   * cleared. Make sure to save the contents of canvases beforehand or re-draw to
   * them afterward if you need to.
   *
   * @param width Window width.
   * @param height Window height.
   * @param settings The settings table with the following optional fields. Any field not filled in will use the current value that would be returned by love.window.getMode.
   * @return success, True if successful, false otherwise.
   * @link [love.window.close](https://love2d.org/wiki/love.window.close)
   */
  function updateMode(
    width: number,
    height: number,
    settings: DisplayFlags,
  ): boolean;
}
