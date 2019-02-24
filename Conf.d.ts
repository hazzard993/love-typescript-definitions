/**
 * @link https://love2d.org/wiki/Config_Files
 */
interface Conf {

    /**
     * This flag determines the name of the save directory for your game. Note that you can only specify the name, not the location where it will be created.
     * 
     * Alternatively [love.filesystem.setIdentity](https://love2d.org/wiki/love.filesystem.setIdentity) can be used to set the save directory outside of the config file.
     * @example
     * t.identity = "gabe_HL3" // Correct
     * t.identity = "c:/Users/gabe/HL3" // Incorrect
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
    version: "11.2" | "11.1" | "11.0"
        | "0.10.2" | "0.10.1" | "0.10.0"
        | "0.9.2" | "0.9.1" | "0.9.0"
        | "0.8.0"
        | "0.7.2" | "0.7.1" | "0.7.0"
        | "0.6.2" | "0.6.1" | "0.6.0"
        | "0.5.0" | "0.4.0"
        | "0.3.2" | "0.3.1" | "0.3.0"
        | "0.2.1" | "0.2.0"
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

}