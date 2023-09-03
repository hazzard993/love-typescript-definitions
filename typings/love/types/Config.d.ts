declare module "love" {
  type Config = {
    /**
     * Save directory name.
     *
     * Not a path.
     *
     * [love.filesystem.setIdentity][1] can also be used to change this.
     *
     * [1]: https://love2d.org/wiki/love.filesystem.setIdentity
     *
     * @default undefined
     */
    identity?: string;

    /**
     * Search the game directory will be searched before the save
     * directory.
     *
     * @default false
     */
    appendidentity: boolean;

    /**
     * The version of LÖVE this application was made for.
     *
     * Its default is the running version.
     *
     * _A warning is displayed if the running version isn't compatible._
     *
     * ```ts
     * config.version = "11.3";
     * /// warn if incompatible with 11.3
     * ```
     */
    version: Version;

    /**
     * Spawn a console alongside the game window (Windows only).
     *
     * @default false
     */
    console: boolean;

    /**
     * Used for reducing CPU usage on iOS or Android devices.
     *
     * If unset the device accelerometer will NOT be exposed as a 3-axis
     * Joystick.
     *
     * @default true
     */
    accelerometerjoystick: boolean;

    /**
     * Save files to external storage on Android.
     *
     * By default they are saved in internal storage (or when flag is _false_).
     *
     * @default false
     */
    externalstorage: boolean;

    /**
     * Enables [gamma-correct rendering][1] if the system supports it.
     *
     * [1]: https://love2d.org/wiki/love.graphics.isGammaCorrect
     *
     * @default false
     */
    gammacorrect: boolean;

    audio: {
      /**
       * Allow background audio / music from other apps to play while LÖVE
       * is open.
       *
       * [1]: https://love2d.org/wiki/love.system.hasBackgroundMusic
       *
       * @link [love.system.hasBackgroundMusic][1]
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

    window: {
      /**
       * Window title.
       *
       * [love.window.setTitle][1] can also be used.
       *
       * [1]: https://love2d.org/wiki/love.window.setTitle
       * @default "Untitled"
       */
      title: string;

      /**
       * A filepath to an image to use as the window's icon.
       *
       * The icon can also be changed with [love.window.setIcon][1].
       *
       * [1]: https://love2d.org/wiki/love.window.setIcon
       *
       * @default undefined
       */
      icon?: string;

      /**
       * Window width.
       *
       * @default 800
       */
      width: number;

      /**
       * Window height.
       *
       * @default 600
       */
      height: number;

      /**
       * Remove all border visuals.
       *
       * @default false
       */
      borderless: boolean;

      /**
       * Allow window to be resized.
       *
       * @default false
       */
      resizable: boolean;

      /**
       * Minimum window width, if it is resizable.
       *
       * @default 1
       */
      minwidth: number;

      /**
       * Minimum window height, if it is resizable.
       *
       * @default 1
       */
      minheight: number;

      /**
       * Make window fullscreen.
       *
       * @default false
       */
      fullscreen: boolean;

      /**
       * Set the window's fullscreen mode.
       *
       * @default "desktop"
       */
      fullscreentype: "desktop" | "exclusive";

      /**
       * Enable automatic DPI scaling.
       *
       * @default true
       */
      usedpiscale: boolean;

      /**
       * Vertical sync mode.
       *
       * @default 1
       */
      vsync: number;

      /**
       * The number of samples to use with multi - sampled antialiasing.
       *
       * @default 0
       */
      msaa: number;

      /**
       * The number of bits per sample in the depth buffer.
       *
       * @default undefined
       */
      depth?: number;

      /**
       * The number of bits per sample in the stencil buffer.
       *
       * @default undefined
       */
      stencil?: number;

      /**
       * The monitor index to show the window on.
       *
       * @default 1
       */
      display: number;

      /**
       * Enable high dpi mode for the window on a Retina display.
       *
       * @default false
       */
      highdpi: boolean;

      /**
       * Set x coordinate.
       *
       * @default undefined
       */
      x?: number;

      /**
       * Set y coordinate.
       *
       * @default undefined
       */
      y?: number;
    };

    /**
     * Set any of these flags to false to disable a module.
     */
    modules: {
      audio: boolean;
      data: boolean;
      event: boolean;
      font: boolean;
      graphics: boolean;
      image: boolean;
      joystick: boolean;
      keyboard: boolean;
      math: boolean;
      mouse: boolean;
      physics: boolean;
      sound: boolean;
      system: boolean;
      thread: boolean;
      timer: boolean;
      touch: boolean;
      video: boolean;
      window: boolean;
    };
  };
}
