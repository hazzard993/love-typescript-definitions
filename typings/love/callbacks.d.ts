import { LightUserData } from "love";
import { File } from "love.filesystem";
import { Joystick, GamepadAxis, GamepadButton, JoystickHat } from "love.joystick";
import { KeyConstant, Scancode } from "love.keyboard";
import { Thread } from "love.thread";
import { DisplayOrientation } from "love.window";

/**
 * @noSelf
 */
export interface Callbacks {
    /**
     * Should be overwritten inside a `conf.lua` file.
     * ```ts
     * love.conf = (t: Conf) => {
     *     t.window.width = 1024;
     *     t.window.height = 768;
     * }
     * ```
     * @link [Config Files](https://love2d.org/wiki/Config_Files)
     */
    conf?: (t: {
        /**
         * This flag determines the name of the save directory for your game. Note that you can only specify the name, not the location where it will be created.
         *
         * Alternatively [love.filesystem.setIdentity](https://love2d.org/wiki/love.filesystem.setIdentity) can be used to set the save directory outside of the config file.
         * ```ts
         * t.identity = "gabe_HL3"             // Correct
         * t.identity = "c:/Users/gabe/HL3"    // Incorrect
         * ```
         * @default undefined
         */
        identity: string;

        /**
         * This flag determines if game directory should be searched first then save directory (`true`) or otherwise (`false`)
         * @default false
         */
        appendidentity: boolean;

        /**
         * Should be a string, representing the version of LÖVE for which your game was made.
         *
         * If set in the config file of the game, LÖVE will display a warning if the game isn't compatible with the current version of LÖVE being used to run the game.
         *
         * Its default is the version of LÖVE running.
         * @default "11.2"
         */
        version:
            | "11.2"
            | "11.1"
            | "11.0"
            | "0.10.2"
            | "0.10.1"
            | "0.10.0"
            | "0.9.2"
            | "0.9.1"
            | "0.9.0"
            | "0.8.0"
            | "0.7.2"
            | "0.7.1"
            | "0.7.0"
            | "0.6.2"
            | "0.6.1"
            | "0.6.0"
            | "0.5.0"
            | "0.4.0"
            | "0.3.2"
            | "0.3.1"
            | "0.3.0"
            | "0.2.1"
            | "0.2.0"
            | "0.1.1";

        /**
         * Determines whether a console should be opened alongside the game window (Windows only) or not. Note: On OSX you can get console output by running LÖVE through the terminal, or on Windows with LÖVE 0.10.2, by running `lovec.exe` instead of `love.exe`.
         * @default false
         */
        console: boolean;

        /**
         * Sets whether the device accelerometer on iOS and Android should be exposed as a 3-axis Joystick. Disabling the accelerometer when it's not used may reduce CPU usage.
         * @default true
         */
        accelerometerjoystick: boolean;

        /**
         * Sets whether files are saved in external storage (true) or internal storage (false) on Android.
         * @default false
         */
        externalstorage: boolean;

        /**
         * Determines whether [gamma-correct rendering](https://love2d.org/wiki/love.graphics.isGammaCorrect) is enabled, when the system supports it.
         * @default false
         */
        gammacorrect: boolean;

        audio: {
            /**
             * Sets whether background audio / music from other apps should play while LÖVE is open.
             *
             * See [love.system.hasBackgroundMusic](https://love2d.org/wiki/love.system.hasBackgroundMusic) for more details.
             * @default true
             */
            mixwithsystem: boolean;

            /**
             * Request and use microphone capabilities in Android
             *
             * @default false
             * @since 11.3
             */
            mic: boolean;
        };

        /**
         * @link https://love2d.org/wiki/Config_Files#window
         */
        window: {
            /**
             * Sets the title of the window the game is in.
             *
             * Alternatively [love.window.setTitle](https://love2d.org/wiki/love.window.setTitle) can be used to change the window title outside of the config file.
             * @default "Untitled"
             */
            title: string;

            /**
             * A filepath to an image to use as the window's icon. Not all operating systems support very large icon images.
             * The icon can also be changed with [love.window.setIcon](https://love2d.org/wiki/love.window.setIcon).
             * @default undefined
             */
            icon: string;

            /**
             * The window width
             * @default 800
             */
            width: number;

            /**
             * The window height
             * @default 600
             */
            height: number;

            /**
             * Removes all border visuals from the window. Note that the effects may wary between operating systems.
             * @default false
             */
            borderless: boolean;

            /**
             * Let the window be resizable
             * @default false
             */
            resizable: boolean;

            /**
             * Minimum window width if the window is resizable
             * @default 1
             */
            minwidth: number;

            /**
             * Minimum window height if the window is resizable
             * @default 1
             */
            minheight: number;

            /**
             * Enable fullscreen
             * @default false
             */
            fullscreen: boolean;

            /**
             * Choose between "desktop" fullscreen or "exclusive" fullscreen mode
             * @default "desktop"
             */
            fullscreentype: "desktop" | "exclusive";

            /**
             * Enable automatic DPI scaling (boolean)
             * @default true
             */
            usedpiscale: boolean;

            /**
             * Vertical sync mode
             * @default 1
             */
            vsync: number;

            /**
             * The number of samples to use with multi - sampled antialiasing
             * @default 0
             */
            msaa: number;

            /**
             * The number of bits per sample in the depth buffer
             * @default undefined
             */
            depth: number;

            /**
             * The number of bits per sample in the stencil buffer
             * @default undefined
             */
            stencil: number;

            /**
             * Index of the monitor to show the window in
             * @default 1
             */
            display: number;

            /**
             * Enable high - dpi mode for the window on a Retina display
             * @default false
             */
            highdpi: boolean;

            /**
             * The x - coordinate of the window's position in the specified display
             * @default undefined
             */
            x: number;

            /**
             * The y - coordinate of the window's position in the specified display
             * @default undefined
             */
            y: number;
        };

        modules: {
            /**
             * Enable/Disable the audio module
             * @default true
             */
            audio: boolean;

            /**
             * Enable/Disable the data module
             * @default true
             */
            data: boolean;

            /**
             * Enable/Disable the event module
             * @default true
             */
            event: boolean;

            /**
             * Enable/Disable the font module
             * @default true
             */
            font: boolean;

            /**
             * Enable/Disable the graphics module
             * @default true
             */
            graphics: boolean;

            /**
             * Enable/Disable the image module
             * @default true
             */
            image: boolean;

            /**
             * Enable/Disable the joystick module
             * @default true
             */
            joystick: boolean;

            /**
             * Enable/Disable the keyboard module
             * @default true
             */
            keyboard: boolean;

            /**
             * Enable/Disable the math module
             * @default true
             */
            math: boolean;

            /**
             * Enable/Disable the mouse module
             * @default true
             */
            mouse: boolean;

            /**
             * Enable/Disable the physics module
             * @default true
             */
            physics: boolean;

            /**
             * Enable/Disable the sound module
             * @default true
             */
            sound: boolean;

            /**
             * Enable/Disable the system module
             * @default true
             */
            system: boolean;

            /**
             * Enable/Disable the thread module
             * @default true
             */
            thread: boolean;

            /**
             * Enable/Disable the timer module
             * @default true
             */
            timer: boolean;

            /**
             * Enable/Disable the touch module
             * @default true
             */
            touch: boolean;

            /**
             * Enable/Disable the video module
             * @default true
             */
            video: boolean;

            /**
             * Enable/Disable the window module
             * @default true
             */
            window: boolean;
        };
    }) => void;

    /**
     * Called when the device display orientation changed, for example, user rotated their phone 180 degrees.
     * @param index The index of the display that changed orientation.
     * @param orientation The new orientation.
     * @link [love.displayrotated](https://love2d.org/wiki/love.displayrotated)
     * @since 11.3
     */
    displayrotated?: (index: number, orientation: DisplayOrientation) => void;

    /**
     * Callback function triggered when a directory is dragged and dropped onto the window.
     * ```ts
     * love.directorydropped = (path: string) => {
     *     print(`${path} dropped!`);
     * }
     * ```
     * @param path The full platform-dependent path to the directory. It can be used as an argument to love.filesystem.mount, in order to gain read access to the directory with love.filesystem.
     * @link [love.directorydropped](https://love2d.org/wiki/love.directorydropped)
     */
    directorydropped?: (path: string) => void;

    /**
     * Callback function used to draw on the screen every frame.
     * ```ts
     * love.draw = () => {
     *   love.graphics.print("Hello World!", 400, 300);
     * }
     * ```
     * @link [love.draw](https://love2d.org/wiki/love.draw)
     * @link [love.graphics](https://love2d.org/wiki/love.graphics)
     */
    draw?: () => void;

    /**
     * The error handler, used to display error messages.
     *
     * @param msg The error message.
     * @link [love.errorhandler](https://love2d.org/wiki/love.errorhandler)
     * @tutorial https://love2d.org/wiki/love.errorhandler
     */
    errorhandler?: (msg: string) => void;

    /**
     * Callback function triggered when a file is dragged and dropped onto the window.
     * ```ts
     * love.filedropped = (file: File) => {
     *     const [content, size] = file.read();
     *     print(`Content of ${file.getFilename()} is`);
     *     print(content);
     *     print("End of file");
     * }
     * ```
     * @param file The unopened File object representing the file that was dropped.
     * @link [love.filedropped](https://love2d.org/wiki/love.filedropped)
     */
    filedropped?: (file: File) => void;

    /**
     * Callback function triggered when window receives or loses focus.
     * ```ts
     * love.focus = (focus: boolean) => {
     *     print(focus);
     * }
     * ```
     * @param focus True if the window gains focus, false if it loses focus.
     * @link [love.focus](https://love2d.org/wiki/love.focus)
     */
    focus?: (focus: boolean) => void;

    /**
     * Called when a Joystick's virtual gamepad axis is moved.
     *
     * @param joystick The joystick object.
     * @param axis The virtual gamepad axis.
     * @param value The new axis value.
     * @link [love.gamepadaxis](https://love2d.org/wiki/love.gamepadaxis)
     */
    gamepadaxis?: (joystick: Joystick, axis: GamepadAxis, value: number) => void;

    /**
     * Called when a Joystick's virtual gamepad button is pressed.
     *
     * @param joystick The joystick object.
     * @param button The virtual gamepad button.
     * @link [love.gamepadpressed](https://love2d.org/wiki/love.gamepadpressed)
     */
    gamepadpressed?: (joystick: Joystick, button: GamepadButton) => void;

    /**
     * Called when a Joystick's virtual gamepad button is released.
     *
     * @param joystick The joystick object.
     * @param button The virtual gamepad button.
     * @link [love.gamepadreleased](https://love2d.org/wiki/love.gamepadreleased)
     */
    gamepadreleased?: (joystick: Joystick, button: GamepadButton) => void;

    /**
     * Called when a Joystick is connected.
     *
     * This callback is also triggered after love.load for every Joystick which was
     * already connected when the game started up.
     *
     * @param joystick The newly connected Joystick object.
     * @link [love.joystickadded](https://love2d.org/wiki/love.joystickadded)
     */
    joystickadded?: (joystick: Joystick) => void;

    /**
     * Called when a joystick axis moves.
     *
     * @param joystick The joystick object.
     * @param axis The axis number.
     * @param value The new axis value.
     * @link [love.joystickaxis](https://love2d.org/wiki/love.joystickaxis)
     */
    joystickaxis?: (joystick: Joystick, axis: number, value: number) => void;

    /**
     * Called when a joystick hat direction changes.
     *
     * @param joystick The joystick object.
     * @param hat The hat number.
     * @param direction The new hat direction.
     * @link [love.joystickhat](https://love2d.org/wiki/love.joystickhat)
     */
    joystickhat?: (joystick: Joystick, hat: number, direction: JoystickHat) => void;

    /**
     * Called when a joystick button is pressed.
     *
     * @param joystick The joystick number.
     * @param button The button number.
     * @link [love.joystickpressed](https://love2d.org/wiki/love.joystickpressed)
     */
    joystickpressed?: (joystick: number, button: number) => void;

    /**
     * Called when a joystick button is released.
     *
     * @param joystick The joystick number.
     * @param button The button number.
     * @link [love.joystickreleased](https://love2d.org/wiki/love.joystickreleased)
     */
    joystickreleased?: (joystick: number, button: number) => void;

    /**
     * Called when a Joystick is disconnected.
     *
     * @param joystick The now-disconnected Joystick object.
     * @link [love.joystickremoved](https://love2d.org/wiki/love.joystickremoved)
     */
    joystickremoved?: (joystick: Joystick) => void;

    /**
     * Callback function triggered when a key is pressed.
     *
     * @param key Character of the pressed key.
     * @param scancode The scancode representing the pressed key.
     * @param isrepeat Whether this keypress event is a repeat. The delay between key repeats depends on the user's system settings.
     * @link [love.keypressed](https://love2d.org/wiki/love.keypressed)
     */
    keypressed?: (key: KeyConstant, scancode: Scancode, isrepeat: boolean) => void;

    /**
     * Callback function triggered when a keyboard key is released.
     *
     * @param key Character of the released key.
     * @param scancode The scancode representing the released key.
     * @link [love.keyreleased](https://love2d.org/wiki/love.keyreleased)
     */
    keyreleased?: (key: KeyConstant, scancode: Scancode) => void;

    /**
     * This function is called exactly once at the beginning of the game.
     * ```ts
     * let image: Image;
     *
     * love.load = () =>
     *     image = love.graphics.newImage("image.png");
     *
     * love.draw = () =>
     *     love.graphics.draw(image, 50, 50);
     * ```
     * @param arg Command line arguments given to the game.
     * @param unfilteredArg Unfiltered command-line arguments given to the executable (see [#Notes](https://love2d.org/wiki/love.load#Notes)).
     * @link [love.load](https://love2d.org/wiki/love.load)
     */
    load?: (arg: Array<string>, unfilteredArg?: Array<string>) => void;

    /**
     * Callback function triggered when the system is running out of memory on mobile devices.
     *
     * Mobile operating systems may forcefully kill the game if it uses too much memory, so any non-critical resource should be removed if possible (by setting all variables referencing the resources to nil, and calling collectgarbage()), when this event is triggered. Sounds and images in particular tend to use the most memory.
     * @link [love.lowmemory](https://love2d.org/wiki/love.lowmemory)
     */
    lowmemory?: () => void;

    /**
     * Callback function triggered when window receives or loses mouse focus.
     *
     * @param focus Whether the window has mouse focus or not.
     * @link [love.mousefocus](https://love2d.org/wiki/love.mousefocus)
     */
    mousefocus?: (focus: boolean) => void;

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
    mousemoved?: (x: number, y: number, dx: number, dy: number, istouch: boolean) => void;

    /**
     * Callback function triggered when a mouse button is pressed.
     *
     * @param x Mouse x position, in pixels.
     * @param y Mouse y position, in pixels.
     * @param button The button index that was pressed. 1 is the primary mouse button, 2 is the secondary mouse button and 3 is the middle button. Further buttons are mouse dependent
     * @param isTouch True if the mouse button press originated from a touchscreen touch-press.
     * @link [love.mousepressed](https://love2d.org/wiki/love.mousepressed)
     */
    mousepressed?: (x: number, y: number, button: number, isTouch: boolean) => void;

    /**
     * Callback function triggered when a mouse button is released.
     *
     * @param x Mouse x position, in pixels.
     * @param y Mouse y position, in pixels.
     * @param button The button index that was released. 1 is the primary mouse button, 2 is the secondary mouse button and 3 is the middle button. Further buttons are mouse dependent.
     * @param isTouch True if the mouse button press originated from a touchscreen touch-release.
     * @link [love.mousereleased](https://love2d.org/wiki/love.mousereleased)
     */
    mousereleased?: (x: number, y: number, button: number, isTouch: boolean) => void;

    /**
     * Callback function triggered when the game is closed.
     *
     * @return r, Abort quitting. If true, do not close the game.
     * @link [love.quit](https://love2d.org/wiki/love.quit)
     */
    quit?: () => boolean;

    /**
     * Called when the window is resized, for example if the user resizes the window,
     * or if love.window.setMode is called with an unsupported width or height in
     * fullscreen and the window chooses the closest appropriate size.
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
    resize?: (w: number, h: number) => void;

    /**
     * The main function, containing the main loop. A sensible default is used when
     * left out.
     * @link [love.run](https://love2d.org/wiki/love.run)
     */
    run?: () => void;

    /**
     * Called when the candidate text for an IME (Input Method Editor) has changed.
     *
     * The candidate text is not the final text that the user will eventually choose.
     * Use love.textinput for that.
     *
     * @param text The UTF-8 encoded unicode candidate text.
     * @param start The start cursor of the selected candidate text.
     * @param length The length of the selected candidate text. May be 0.
     * @link [love.textedited](https://love2d.org/wiki/love.textedited)
     */
    textedited?: (text: string, start: number, length: number) => void;

    /**
     * Called when text has been entered by the user. For example if shift-2 is
     * pressed on an American keyboard layout, the text "@" will be generated.
     *
     * @param text The UTF-8 encoded unicode text.
     * @link [love.textinput](https://love2d.org/wiki/love.textinput)
     */
    textinput?: (text: string) => void;

    /**
     * Callback function triggered when a Thread encounters an error.
     *
     * @param thread The thread which produced the error.
     * @param errorstr The error message.
     * @link [love.threaderror](https://love2d.org/wiki/love.threaderror)
     */
    threaderror?: (thread: Thread, errorstr: string) => void;

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
    touchmoved?: (id: LightUserData<"Touch">, x: number, y: number, dx: number, dy: number, pressure: number) => void;

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
    touchpressed?: (id: LightUserData<"Touch">, x: number, y: number, dx: number, dy: number, pressure: number) => void;

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
    touchreleased?: (
        id: LightUserData<"Touch">,
        x: number,
        y: number,
        dx: number,
        dy: number,
        pressure: number
    ) => void;

    /**
     * Callback function used to update the state of the game every frame.
     * ```ts
     * love.update = (delta: number) => {
     *     print(delta);
     * }
     * ```
     * @param dt Time since the last update in seconds.
     * @link [love.update](https://love2d.org/wiki/love.update)
     */
    update?: (dt: number) => void;

    /**
     * Callback function triggered when window is minimized/hidden or unminimized by
     * the user.
     *
     * @param visible True if the window is visible, false if it isn't.
     * @link [love.visible](https://love2d.org/wiki/love.visible)
     */
    visible?: (visible: boolean) => void;

    /**
     * Callback function triggered when the mouse wheel is moved.
     *
     * @param x Amount of horizontal mouse wheel movement. Positive values indicate movement to the right.
     * @param y Amount of vertical mouse wheel movement. Positive values indicate upward movement.
     * @link [love.wheelmoved](https://love2d.org/wiki/love.wheelmoved)
     */
    wheelmoved?: (x: number, y: number) => void;
}