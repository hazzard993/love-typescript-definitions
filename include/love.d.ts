/**
 * Contains all LÖVE 2D modules and functions.
 * @noSelf
 * @link [love](https://love2d.org/wiki/love)
 */
declare namespace love {

    /**
     * Gets the current running version of LÖVE.
```ts
let [major, minor, revision, codename] = love.getVersion();
```
     * @return {number} major, The major version of LÖVE, i.e. 0 for version 0.9.1.
     * @return {number} minor, The minor version of LÖVE, i.e. 9 for version 0.9.1.
     * @return {number} revision, The revision version of LÖVE, i.e. 1 for version 0.9.1.
     * @return {string} codename, The codename of the current version, i.e. "Baby Inspector" for version 0.9.1.
     * @link [love.getVersion](https://love2d.org/wiki/love.getVersion)
     * @link [Version Warnings](https://love2d.org/wiki/Config_Files#version)
     * @tupleReturn
     */
    export function getVersion(): [number, number, number, string];

    /**
     * Sets whether LÖVE displays warnings when using deprecated functionality. It is disabled by default in fused mode, and enabled by default otherwise.
     *
     * When deprecation output is enabled, the first use of a formally deprecated LÖVE API will show a message at the bottom of the screen for a short time, and print the message to the console.
     *
     * @param enable Whether to enable or disable deprecation output.
     * @link [love.setDeprecationOutput](https://love2d.org/wiki/love.setDeprecationOutput)
     */
    export function setDeprecationOutput(enable: boolean): void;

    /**
     * Gets whether LÖVE displays warnings when using deprecated functionality. It is disabled by default in fused mode, and enabled by default otherwise.
     *
     * When deprecation output is enabled, the first use of a formally deprecated LÖVE API will show a message at the bottom of the screen for a short time, and print the message to the console.
     *
     * @return {boolean} enabled, Whether deprecation output is enabled.
     * @link [love.hasDeprecationOutput](https://love2d.org/wiki/love.hasDeprecationOutput)
     */
    export function hasDeprecationOutput(): boolean;

    /**
     * Should be overwritten inside a `conf.lua` file.
```ts
love.conf = (t: Conf) => {
    t.window.width = 1024;
    t.window.height = 768;
}
```
     * @link [Config Files](https://love2d.org/wiki/Config_Files)
     */
    export let conf: (t: Conf) => void;

    /**
     * Callback function triggered when a directory is dragged and dropped onto the window.
```ts
love.directorydropped = (path: string) => {
    print(`${path} dropped!`);
}
```
     * @param path The full platform-dependent path to the directory. It can be used as an argument to love.filesystem.mount, in order to gain read access to the directory with love.filesystem.
     * @link [love.directorydropped](https://love2d.org/wiki/love.directorydropped)
     */
    export let directorydropped: (path: string) => void;

    /**
     * Callback function used to draw on the screen every frame.
```ts
love.draw = () => {
  love.graphics.print("Hello World!", 400, 300);
}
```
     * @link [love.draw](https://love2d.org/wiki/love.draw)
     * @link [love.graphics](https://love2d.org/wiki/love.graphics)
     */
    export let draw: () => void;

    /**
     * The error handler, used to display error messages.
     *
     * @param msg The error message.
     * @link [love.errorhandler](https://love2d.org/wiki/love.errorhandler)
     * @tutorial https://love2d.org/wiki/love.errorhandler
     */
    export let errorhandler: (msg: string) => void;

    /**
     * Callback function triggered when a file is dragged and dropped onto the window.
```ts
love.filedropped = (file: File) => {
    const [content, size] = file.read();
    print(`Content of ${file.getFilename()} is`);
    print(content);
    print("End of file");
}
```
     * @param file The unopened File object representing the file that was dropped.
     * @link [love.filedropped](https://love2d.org/wiki/love.filedropped)
     */
    export let filedropped: (file: File) => void;

    /**
     * Callback function triggered when window receives or loses focus.
```ts
love.focus = (focus: boolean) => {
    print(focus);
}
```
     * @param focus True if the window gains focus, false if it loses focus.
     * @link [love.focus](https://love2d.org/wiki/love.focus)
     */
    export let focus: (focus: boolean) => void;

    /**
     * Called when a Joystick's virtual gamepad axis is moved.
     *
     * @param joystick The joystick object.
     * @param axis The virtual gamepad axis.
     * @param value The new axis value.
     * @link [love.gamepadaxis](https://love2d.org/wiki/love.gamepadaxis)
     */
    export let gamepadaxis: (joystick: Joystick, axis: GamepadAxis, value: number) => void;

    /**
     * Called when a Joystick's virtual gamepad button is pressed.
     *
     * @param joystick The joystick object.
     * @param button The virtual gamepad button.
     * @link [love.gamepadpressed](https://love2d.org/wiki/love.gamepadpressed)
     */
    export let gamepadpressed: (joystick: Joystick, button: GamepadButton) => void;

    /**
     * Called when a Joystick's virtual gamepad button is released.
     *
     * @param joystick The joystick object.
     * @param button The virtual gamepad button.
     * @link [love.gamepadreleased](https://love2d.org/wiki/love.gamepadreleased)
     */
    export let gamepadreleased: (joystick: Joystick, button: GamepadButton) => void;

    /**
     * Called when a Joystick is connected.
     *
     *
     * This callback is also triggered after love.load for every Joystick which was
     * already connected when the game started up.
     *
     * @param joystick The newly connected Joystick object.
     * @link [love.joystickadded](https://love2d.org/wiki/love.joystickadded)
     */
    export let joystickadded: (joystick: Joystick) => void;

    /**
     * Called when a joystick axis moves.
     *
     * @param joystick The joystick object.
     * @param axis The axis number.
     * @param value The new axis value.
     * @link [love.joystickaxis](https://love2d.org/wiki/love.joystickaxis)
     */
    export let joystickaxis: (joystick: Joystick, axis: number, value: number) => void;

    /**
     * Called when a joystick hat direction changes.
     *
     * @param joystick The joystick object.
     * @param hat The hat number.
     * @param direction The new hat direction.
     * @link [love.joystickhat](https://love2d.org/wiki/love.joystickhat)
     */
    export let joystickhat: (joystick: Joystick, hat: number, direction: JoystickHat) => void;

    /**
     * Called when a joystick button is pressed.
     *
     * @param joystick The joystick number.
     * @param button The button number.
     * @link [love.joystickpressed](https://love2d.org/wiki/love.joystickpressed)
     */
    export let joystickpressed: (joystick: number, button: number) => void;

    /**
     * Called when a joystick button is released.
     *
     * @param joystick The joystick number.
     * @param button The button number.
     * @link [love.joystickreleased](https://love2d.org/wiki/love.joystickreleased)
     */
    export let joystickreleased: (joystick: number, button: number) => void;

    /**
     * Called when a Joystick is disconnected.
     *
     * @param joystick The now-disconnected Joystick object.
     * @link [love.joystickremoved](https://love2d.org/wiki/love.joystickremoved)
     */
    export let joystickremoved: (joystick: Joystick) => void;

    /**
     * Callback function triggered when a key is pressed.
     *
     * @param key Character of the pressed key.
     * @param scancode The scancode representing the pressed key.
     * @param isrepeat Whether this keypress event is a repeat. The delay between key repeats depends on the user's system settings.
     * @link [love.keypressed](https://love2d.org/wiki/love.keypressed)
     */
    export let keypressed: (key: KeyConstant, scancode: Scancode, isrepeat: boolean) => void;

    /**
     * Callback function triggered when a keyboard key is released.
     *
     * @param key Character of the released key.
     * @param scancode The scancode representing the released key.
     * @link [love.keyreleased](https://love2d.org/wiki/love.keyreleased)
     */
    export let keyreleased: (key: KeyConstant, scancode: Scancode) => void;

    /**
     * This function is called exactly once at the beginning of the game.
```ts
let image: Image;

love.load = () =>
    image = love.graphics.newImage("image.png");

love.draw = () =>
    love.graphics.draw(image, 50, 50);
```
     * @param arg Command line arguments given to the game.
     * @param unfilteredArg Unfiltered command-line arguments given to the executable (see [#Notes](https://love2d.org/wiki/love.load#Notes)).
     * @link [love.load](https://love2d.org/wiki/love.load)
     */
    export let load: (arg: Array<string>, unfilteredArg?: Array<string>) => void;

    /**
     * Callback function triggered when the system is running out of memory on mobile devices.
     *
     * Mobile operating systems may forcefully kill the game if it uses too much memory, so any non-critical resource should be removed if possible (by setting all variables referencing the resources to nil, and calling collectgarbage()), when this event is triggered. Sounds and images in particular tend to use the most memory.
     * @link [love.lowmemory](https://love2d.org/wiki/love.lowmemory)
     */
    export let lowmemory: () => void;

    /**
     * Callback function triggered when window receives or loses mouse focus.
     *
     * @param focus Whether the window has mouse focus or not.
     * @link [love.mousefocus](https://love2d.org/wiki/love.mousefocus)
     */
    export let mousefocus: (focus: boolean) => void;

    /**
     * Callback function triggered when the mouse is moved.
     *
     * @param x The mouse position on the x-axis.
     * @param y The mouse position on the y-axis.
     * @param dx The amount moved along the x-axis since the last time love.mousemoved was called.
     * @param dy The amount moved along the y-axis since the last time love.mousemoved was called.
     * @param istouch True if the mouse button press originated from a touchscreen touch-press.
     * @link [love.mousemoved](https://love2d.org/wiki/love.mousemoved)
     */
    export let mousemoved: (x: number, y: number, dx: number, dy: number, istouch: boolean) => void;

    /**
     * Callback function triggered when a mouse button is pressed.
     *
     * @param x Mouse x position, in pixels.
     * @param y Mouse y position, in pixels.
     * @param button The button index that was pressed. 1 is the primary mouse button, 2 is the secondary mouse button and 3 is the middle button. Further buttons are mouse dependent
     * @param isTouch True if the mouse button press originated from a touchscreen touch-press.
     * @link [love.mousepressed](https://love2d.org/wiki/love.mousepressed)
     */
    export let mousepressed: (x: number, y: number, button: number, isTouch: boolean) => void;

    /**
     * Callback function triggered when a mouse button is released.
     *
     * @param x Mouse x position, in pixels.
     * @param y Mouse y position, in pixels.
     * @param button The button index that was released. 1 is the primary mouse button, 2 is the secondary mouse button and 3 is the middle button. Further buttons are mouse dependent.
     * @param isTouch True if the mouse button press originated from a touchscreen touch-release.
     * @link [love.mousereleased](https://love2d.org/wiki/love.mousereleased)
     */
    export let mousereleased: (x: number, y: number, button: number, isTouch: boolean) => void;

    /**
     * Callback function triggered when the game is closed.
     *
     * @return {boolean} r, Abort quitting. If true, do not close the game.
     * @link [love.quit](https://love2d.org/wiki/love.quit)
     */
    export let quit: () => boolean;

    /**
     * Called when the window is resized, for example if the user resizes the window,
     * or if love.window.setMode is called with an unsupported width or height in
     * fullscreen and the window chooses the closest appropriate size.
     *
     *
     * Calls to love.window.setMode will only trigger this event if the width or
     * height of the window after the call doesn't match the requested width and
     * height. This can happen if a fullscreen mode is requested which doesn't match
     * any supported mode, or if the fullscreen type is 'desktop' and the requested
     * width or height don't match the desktop resolution.
     *
     * @param w The new width.
     * @param h The new height.
     * @link [love.resize](https://love2d.org/wiki/love.resize)
     */
    export let resize: (w: number, h: number) => void;

    /**
     * The main function, containing the main loop. A sensible default is used when
     * left out.
     * @link [love.run](https://love2d.org/wiki/love.run)
     */
    export let run: () => void;

    /**
     * Called when the candidate text for an IME (Input Method Editor) has changed.
     *
     *
     * The candidate text is not the final text that the user will eventually choose.
     * Use love.textinput for that.
     *
     * @param text The UTF-8 encoded unicode candidate text.
     * @param start The start cursor of the selected candidate text.
     * @param length The length of the selected candidate text. May be 0.
     * @link [love.textedited](https://love2d.org/wiki/love.textedited)
     */
    export let textedited: (text: string, start: number, length: number) => void;

    /**
     * Called when text has been entered by the user. For example if shift-2 is
     * pressed on an American keyboard layout, the text "@" will be generated.
     *
     * @param text The UTF-8 encoded unicode text.
     * @link [love.textinput](https://love2d.org/wiki/love.textinput)
     */
    export let textinput: (text: string) => void;

    /**
     * Callback function triggered when a Thread encounters an error.
     *
     * @param thread The thread which produced the error.
     * @param errorstr The error message.
     * @link [love.threaderror](https://love2d.org/wiki/love.threaderror)
     */
    export let threaderror: (thread: Thread, errorstr: string) => void;

    /**
     * Callback function triggered when a touch press moves inside the touch screen.
     *
     * @param id The identifier for the touch press.
     * @param x The x-axis position of the touch inside the window, in pixels.
     * @param y The y-axis position of the touch inside the window, in pixels.
     * @param dx The x-axis movement of the touch inside the window, in pixels.
     * @param dy The y-axis movement of the touch inside the window, in pixels.
     * @param pressure The amount of pressure being applied. Most touch screens aren't pressure sensitive, in which case the pressure will be 1.
     * @link [love.touchmoved](https://love2d.org/wiki/love.touchmoved)
     */
    export let touchmoved: (id: LightUserData, x: number, y: number, dx: number, dy: number, pressure: number) => void;

    /**
     * Callback function triggered when the touch screen is touched.
     *
     * @param id The identifier for the touch press.
     * @param x The x-axis position of the touch press inside the window, in pixels.
     * @param y The y-axis position of the touch press inside the window, in pixels.
     * @param dx The x-axis movement of the touch press inside the window, in pixels. This should always be zero.
     * @param dy The y-axis movement of the touch press inside the window, in pixels. This should always be zero.
     * @param pressure The amount of pressure being applied. Most touch screens aren't pressure sensitive, in which case the pressure will be 1.
     * @link [love.touchpressed](https://love2d.org/wiki/love.touchpressed)
     */
    export let touchpressed: (id: LightUserData, x: number, y: number, dx: number, dy: number, pressure: number) => void;

    /**
     * Callback function triggered when the touch screen stops being touched.
     *
     * @param id The identifier for the touch press.
     * @param x The x-axis position of the touch inside the window, in pixels.
     * @param y The y-axis position of the touch inside the window, in pixels.
     * @param dx The x-axis movement of the touch inside the window, in pixels.
     * @param dy The y-axis movement of the touch inside the window, in pixels.
     * @param pressure The amount of pressure being applied. Most touch screens aren't pressure sensitive, in which case the pressure will be 1.
     * @link [love.touchreleased](https://love2d.org/wiki/love.touchreleased)
     */
    export let touchreleased: (id: LightUserData, x: number, y: number, dx: number, dy: number, pressure: number) => void;

    /**
     * Callback function used to update the state of the game every frame.
```ts
love.update = (delta: number) => {
    print(delta);
}
```
     * @param dt Time since the last update in seconds.
     * @link [love.update](https://love2d.org/wiki/love.update)
     */
    export let update: (dt: number) => void;

    /**
     * Callback function triggered when window is minimized/hidden or unminimized by
     * the user.
     *
     * @param visible True if the window is visible, false if it isn't.
     * @link [love.visible](https://love2d.org/wiki/love.visible)
     */
    export let visible: (visible: boolean) => void;

    /**
     * Callback function triggered when the mouse wheel is moved.
     *
     * @param x Amount of horizontal mouse wheel movement. Positive values indicate movement to the right.
     * @param y Amount of vertical mouse wheel movement. Positive values indicate upward movement.
     * @link [love.wheelmoved](https://love2d.org/wiki/love.wheelmoved)
     */
    export let wheelmoved: (x: number, y: number) => void;

}
