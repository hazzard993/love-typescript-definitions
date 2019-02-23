/**
 * The different distance models.
 *
 *
 * Extended information can be found in the chapter "3.4. Attenuation By Distance"
 * of the OpenAL 1.1 specification.
 *
 */
type DistanceModel = 'none' | 'inverse' | 'inverseclamped' | 'linear' | 'linearclamped' | 'exponent' | 'exponentclamped';

/**
 * Types of audio sources.
 *
 *
 * A good rule of thumb is to use stream for music files and static for all short
 * sound effects. Basically, you want to avoid loading large files into memory at
 * once.
 *
 */
type SourceType = 'static' | 'stream';

/**
 * Units that represent time.
 *
 */
type TimeUnit = 'seconds' | 'samples';

/**
 * Arguments to love.event.push() and the like.
 *
 */
type Event = 'focus' | 'joystickaxis' | 'joystickhat' | 'joystickpressed' | 'joystickreleased' | 'keypressed' | 'keyreleased' | 'mousefocus' | 'mousepressed' | 'mousereleased' | 'resize' | 'threaderror' | 'quit' | 'visible';

/**
 * Buffer modes for File objects.
 *
 */
type BufferMode = 'none' | 'line' | 'full';

/**
 * How to decode a given FileData.
 *
 */
type FileDecoder = 'file' | 'base64';

/**
 * The different modes you can open a file in.
 *
 */
type FileMode = 'r' | 'w' | 'a' | 'c';

/**
 * The type of a file.
 *
 */
type FileType = 'file' | 'directory' | 'symlink' | 'other';

/**
 * Text alignment.
 *
 */
type AlignMode = 'center' | 'left' | 'right' | 'justify';

/**
 * Different types of arcs that can be drawn.
 *
 */
type ArcType = 'pie' | 'open' | 'closed';

/**
 * Types of particle area spread distribution.
 *
 */
type AreaSpreadDistribution = 'uniform' | 'normal' | 'ellipse' | 'none';

/**
 * Different ways alpha affects color blending. See BlendMode and the BlendMode
 * Formulas for additional notes.
 *
 */
type BlendAlphaMode = 'alphamultiply' | 'premultiplied';

/**
 * Different ways to do color blending. See BlendAlphaMode and the BlendMode
 * Formulas for additional notes.
 *
 */
type BlendMode = 'alpha' | 'replace' | 'screen' | 'add' | 'subtract' | 'multiply' | 'lighten' | 'darken';

/**
 * Canvas formats.
 *
 */
type CanvasFormat = 'normal' | 'hdr' | 'rgba8' | 'rgba4' | 'rgb5a1' | 'rgb565' | 'rgb10a2' | 'rgba16f' | 'rgba32f' | 'rg11b10f' | 'srgb' | 'r8' | 'rg8' | 'r16f' | 'rg16f' | 'r32f' | 'rg32f';

/**
 * Different types of per-pixel stencil test comparisons. The pixels of an object
 * will be drawn if the comparison succeeds, for each pixel that the object
 * touches.
 *
 */
type CompareMode = 'equal' | 'notequal' | 'less' | 'lequal' | 'gequal' | 'greater';

/**
 * Controls whether shapes are drawn as an outline, or filled.
 *
 */
type DrawMode = 'fill' | 'line';

/**
 * How the image is filtered when scaling.
 *
 */
type FilterMode = 'linear' | 'nearest';

/**
 * Graphics features that can be checked for with love.graphics.getSupported.
 *
 */
type GraphicsFeature = 'clampzero' | 'lighten' | 'multicanvasformats';

/**
 * Types of system-dependent graphics limits checked for using
 * love.graphics.getSystemLimits.
 *
 */
type GraphicsLimit = 'pointsize' | 'texturesize' | 'multicanvas' | 'canvasmsaa';

/**
 * Line join style.
 *
 */
type LineJoin = 'miter' | 'bevel' | 'none';

/**
 * The styles in which lines are drawn.
 *
 */
type LineStyle = 'rough' | 'smooth';

/**
 * How a Mesh's vertices are used when drawing.
 *
 */
type MeshDrawMode = 'fan' | 'strip' | 'triangles' | 'points';

/**
 * How newly created particles are added to the ParticleSystem.
 *
 */
type ParticleInsertMode = 'top' | 'bottom' | 'random';

/**
 * Usage hints for SpriteBatches and Meshes to optimize data storage and access.
 *
 */
type SpriteBatchUsage = 'dynamic' | 'static' | 'stream';

/**
 * Graphics state stack types used with love.graphics.push.
 *
 */
type StackType = 'transform' | 'all';

/**
 * How a stencil function modifies the stencil values of pixels it touches.
 *
 */
type StencilAction = 'replace' | 'increment' | 'decrement' | 'incrementwrap' | 'decrementwrap' | 'invert';

/**
 * How the image wraps inside a Quad with a larger quad size than image size. This
 * also affects how Meshes with texture coordinates which are outside the range of
 * [0, 1] are drawn, and the color returned by the Texel Shader function when
 * using it to sample from texture coordinates outside of the range of [0, 1].
 *
 */
type WrapMode = 'clamp' | 'repeat' | 'mirroredrepeat' | 'clampzero';

/**
 * Compressed image data formats. Here and here are a couple overviews of many of
 * the formats.
 *
 *
 * Unlike traditional PNG or jpeg, these formats stay compressed in RAM and in the
 * graphics card's VRAM. This is good for saving memory space as well as improving
 * performance, since the graphics card will be able to keep more of the image's
 * pixels in its fast-access cache when drawing it.
 *
 */
type CompressedImageFormat = 'DXT1' | 'DXT3' | 'DXT5' | 'BC4' | 'BC4s' | 'BC5' | 'BC5s' | 'BC6h' | 'BC6hs' | 'BC7' | 'ETC1' | 'ETC2rgb' | 'ETC2rgba' | 'ETC2rgba1' | 'EACr' | 'EACrs' | 'EACrg' | 'EACrgs' | 'PVR1rgb2' | 'PVR1rgb4' | 'PVR1rgba2' | 'PVR1rgba4' | 'ASTC4x4' | 'ASTC5x4' | 'ASTC5x5' | 'ASTC6x5' | 'ASTC6x6' | 'ASTC8x5' | 'ASTC8x6' | 'ASTC8x8' | 'ASTC10x5' | 'ASTC10x6' | 'ASTC10x8' | 'ASTC10x10' | 'ASTC12x10' | 'ASTC12x12';

/**
 * Encoded image formats.
 *
 */
type ImageFormat = 'tga' | 'png';

/**
 * Virtual gamepad axes.
 *
 */
type GamepadAxis = 'leftx' | 'lefty' | 'rightx' | 'righty' | 'triggerleft' | 'triggerright';

/**
 * Virtual gamepad buttons.
 *
 */
type GamepadButton = 'a' | 'b' | 'x' | 'y' | 'back' | 'guide' | 'start' | 'leftstick' | 'rightstick' | 'leftshoulder' | 'rightshoulder' | 'dpup' | 'dpdown' | 'dpleft' | 'dpright';

/**
 * Joystick hat positions.
 *
 */
type JoystickHat = 'c' | 'd' | 'l' | 'ld' | 'lu' | 'r' | 'rd' | 'ru' | 'u';

/**
 * Types of Joystick inputs.
 *
 */
type JoystickInputType = 'axis' | 'button' | 'hat';

/**
 * All the keys you can press. Note that some keys may not be available on your
 * keyboard or system.
 *
 */
type KeyConstant = 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h' | 'i' | 'j' | 'k' | 'l' | 'm' | 'n' | 'o' | 'p' | 'q' | 'r' | 's' | 't' | 'u' | 'v' | 'w' | 'x' | 'y' | 'z' | '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'space' | '!' | '"' | '#' | '$' | '&' | "'" | '(' | ')' | '*' | '+' | ',' | '-' | '.' | '/' | ':' | ';' | '<' | '=' | '>' | '?' | '@' | '[' | '\\' | ']' | '^' | '_' | '`' | 'kp0' | 'kp1' | 'kp2' | 'kp3' | 'kp4' | 'kp5' | 'kp6' | 'kp7' | 'kp8' | 'kp9' | 'kp.' | 'kp/' | 'kp*' | 'kp-' | 'kp+' | 'kpenter' | 'kp=' | 'up' | 'down' | 'right' | 'left' | 'home' | 'end' | 'pageup' | 'pagedown' | 'insert' | 'backspace' | 'tab' | 'clear' | 'return' | 'delete' | 'f1' | 'f2' | 'f3' | 'f4' | 'f5' | 'f6' | 'f7' | 'f8' | 'f9' | 'f10' | 'f11' | 'f12' | 'f13' | 'f14' | 'f15' | 'numlock' | 'capslock' | 'scrollock' | 'rshift' | 'lshift' | 'rctrl' | 'lctrl' | 'ralt' | 'lalt' | 'rmeta' | 'lmeta' | 'lsuper' | 'rsuper' | 'mode' | 'compose' | 'pause' | 'escape' | 'help' | 'print' | 'sysreq' | 'break' | 'menu' | 'power' | 'euro' | 'undo' | 'www' | 'mail' | 'calculator' | 'appsearch' | 'apphome' | 'appback' | 'appforward' | 'apprefresh' | 'appbookmarks';

/**
 * Keyboard scancodes.
 *
 *
 * Scancodes are keyboard layout-independent, so the scancode "w" will be
 * generated if the key in the same place as the "w" key on an American QWERTY
 * keyboard is pressed, no matter what the key is labelled or what the user's
 * operating system settings are.
 *
 *
 * Using scancodes, rather than keycodes, is useful because keyboards with layouts
 * differing from the US/UK layout(s) might have keys that generate 'any'
 * keycodes, but the scancodes will still be detected. This however would
 * necessitate having a list for each keyboard layout one would choose to support.
 *
 *
 * One could use textinput or textedited instead, but those only give back the end
 * result of keys used, i.e. you can't get modifiers on their own from it, only
 * the final symbols that were generated.
 *
 */
type Scancode = 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h' | 'i' | 'j' | 'k' | 'l' | 'm' | 'n' | 'o' | 'p' | 'q' | 'r' | 's' | 't' | 'u' | 'v' | 'w' | 'x' | 'y' | 'z' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '0' | 'return' | 'escape' | 'backspace' | 'tab' | 'space' | '-' | '=' | '[' | ']' | '\\' | 'nonus#' | ';' | "'" | '`' | ',' | '.' | '/' | 'capslock' | 'f1' | 'f2' | 'f3' | 'f4' | 'f5' | 'f6' | 'f7' | 'f8' | 'f9' | 'f10' | 'f11' | 'f12' | 'f13' | 'f14' | 'f15' | 'f16' | 'f17' | 'f18' | 'f19' | 'f20' | 'f21' | 'f22' | 'f23' | 'f24' | 'lctrl' | 'lshift' | 'lalt' | 'lgui' | 'rctrl' | 'rshift' | 'ralt' | 'rgui' | 'printscreen' | 'scrolllock' | 'pause' | 'insert' | 'home' | 'numlock' | 'pageup' | 'delete' | 'end' | 'pagedown' | 'right' | 'left' | 'down' | 'up' | 'nonusbackslash' | 'application' | 'execute' | 'help' | 'menu' | 'select' | 'stop' | 'again' | 'undo' | 'cut' | 'copy' | 'paste' | 'find' | 'kp/' | 'kp*' | 'kp-' | 'kp+' | 'kp=' | 'kpenter' | 'kp1' | 'kp2' | 'kp3' | 'kp4' | 'kp5' | 'kp6' | 'kp7' | 'kp8' | 'kp9' | 'kp0' | 'kp.' | 'international1' | 'international2' | 'international3' | 'international4' | 'international5' | 'international6' | 'international7' | 'international8' | 'international9' | 'lang1' | 'lang2' | 'lang3' | 'lang4' | 'lang5' | 'mute' | 'volumeup' | 'volumedown' | 'audionext' | 'audioprev' | 'audiostop' | 'audioplay' | 'audiomute' | 'mediaselect' | 'www' | 'mail' | 'calculator' | 'computer' | 'acsearch' | 'achome' | 'acback' | 'acforward' | 'acstop' | 'acrefresh' | 'acbookmarks' | 'power' | 'brightnessdown' | 'brightnessup' | 'displayswitch' | 'kbdillumtoggle' | 'kbdillumdown' | 'kbdillumup' | 'eject' | 'sleep' | 'alterase' | 'sysreq' | 'cancel' | 'clear' | 'prior' | 'return2' | 'separator' | 'out' | 'oper' | 'clearagain' | 'crsel' | 'exsel' | 'kp00' | 'kp000' | 'thsousandsseparator' | 'decimalseparator' | 'currencyunit' | 'currencysubunit' | 'app1' | 'app2' | 'any';

/**
 * Compressed data formats.
 *
 */
type CompressedDataFormat = 'lz4' | 'zlib' | 'gzip';

/**
 * The layout of matrix elements (row-major or column-major).
 *
 */
type MatrixLayout = 'row' | 'column';

/**
 * Types of hardware cursors.
 *
 */
type CursorType = 'image' | 'arrow' | 'ibeam' | 'wait' | 'waitarrow' | 'crosshair' | 'sizenwse' | 'sizenesw' | 'sizewe' | 'sizens' | 'sizeall' | 'no' | 'hand';

/**
 * The types of a Body.
 *
 */
type BodyType = 'static' | 'dynamic' | 'kinematic';

/**
 * Different types of joints.
 *
 */
type JointType = 'distance' | 'gear' | 'mouse' | 'prismatic' | 'pulley' | 'revolute' | 'friction' | 'weld' | 'rope';

/**
 * The different types of Shapes, as returned by Shape:getType.
 *
 */
type ShapeType = 'circle' | 'polygon' | 'edge' | 'chain';

/**
 * The basic state of the system's power supply.
 *
 */
type PowerState = 'any' | 'battery' | 'nobattery' | 'charging' | 'charged';

/**
 * Types of fullscreen modes.
 *
 *
 * In normal fullscreen mode, if a window size is used which does not match one of
 * the monitor's supported display modes, the window will be resized to the next
 * largest display mode.
 *
 *
 * Normal fullscreen mode is sometimes avoided by users because it can cause
 * issues in some window managers and with multi-monitor setups. In OS X it
 * prevents switching to a different program until fullscreen mode is exited. The
 * "desktop" fullscreen mode generally avoids these issues.
 *
 */
type FullscreenType = 'desktop' | 'exclusive';

/**
 * Types of message box dialogs. Different types may have slightly different
 * looks.
 *
 */
type MessageBoxType = 'info' | 'warning' | 'error';

declare interface Source extends Object {
	/**
	 * Creates an identical copy of the Source in the stopped state.
	 *
	 *
	 * Static Sources will use significantly less memory and take much less time to be
	 * created if Source:clone is used to create them instead of love.audio.newSource,
	 * so this method should be preferred when making multiple Sources which play the
	 * same sound.
	 *
	 *
	 * Cloned Sources inherit all the set-able state of the original Source, but they
	 * are initialized stopped.
	 *
	 * @return {Source} source, The new identical copy of this Source.
	 */
	clone(): Source;

	/**
	 * Returns the reference and maximum distance of the source.
	 *
	 * @return {number} ref, The reference distance.
	 * @return {number} max, The maximum distance.
	 */
	/** @TupleReturn */
	getAttenuationDistances(): [number, number];

	/**
	 * Gets the number of channels in the Source. Only 1-channel (mono) Sources can
	 * use directional and positional effects.
	 *
	 * @return {number} channels, 1 for mono, 2 for stereo.
	 */
	getChannelCount(): number;

	/**
	 * Gets the Source's directional volume cones. Together with Source:setDirection,
	 * the cone angles allow for the Source's volume to vary depending on its
	 * direction.
	 *
	 * @return {number} innerAngle, The inner angle from the Source's direction, in radians. The Source will play at normal volume if the listener is inside the cone defined by this angle.
	 * @return {number} outerAngle, The outer angle from the Source's direction, in radians. The Source will play at a volume between the normal and outer volumes, if the listener is in between the cones defined by the inner and outer angles.
	 * @return {number} outerVolume, The Source's volume when the listener is outside both the inner and outer cone angles.
	 */
	/** @TupleReturn */
	getCone(): [number, number, number];

	/**
	 * Gets the direction of the Source.
	 *
	 * @return {number} x, The X part of the direction vector.
	 * @return {number} y, The Y part of the direction vector.
	 * @return {number} z, The Z part of the direction vector.
	 */
	/** @TupleReturn */
	getDirection(): [number, number, number];

	/**
	 * Gets the duration of the Source. For streaming Sources it may not always be
	 * sample-accurate, and may return -1 if the duration cannot be determined at all.
	 *
	 * @param unit The time unit for the return value.
	 * @return {number} duration, The duration of the Source, or -1 if it cannot be determined.
	 */
	getDuration(unit?: TimeUnit): number;

	/**
	 * Gets the current pitch of the Source.
	 *
	 * @return {number} pitch, The pitch, where 1.0 is normal.
	 */
	getPitch(): number;

	/**
	 * Gets the position of the Source.
	 *
	 * @return {number} x, The X position of the Source.
	 * @return {number} y, The Y position of the Source.
	 * @return {number} z, The Z position of the Source.
	 */
	/** @TupleReturn */
	getPosition(): [number, number, number];

	/**
	 * Returns the rolloff factor of the source.
	 *
	 * @return {number} rolloff, The rolloff factor.
	 */
	getRolloff(): number;

	/**
	 * Gets the type (static or stream) of the Source.
	 *
	 * @return {SourceType} sourcetype, The type of the source.
	 */
	getType(): SourceType;

	/**
	 * Gets the velocity of the Source.
	 *
	 * @return {number} x, The X part of the velocity vector.
	 * @return {number} y, The Y part of the velocity vector.
	 * @return {number} z, The Z part of the velocity vector.
	 */
	/** @TupleReturn */
	getVelocity(): [number, number, number];

	/**
	 * Gets the current volume of the Source.
	 *
	 * @return {number} volume, The volume of the Source, where 1.0 is normal volume.
	 */
	getVolume(): number;

	/**
	 * Returns the volume limits of the source.
	 *
	 * @return {number} min, The minimum volume.
	 * @return {number} max, The maximum volume.
	 */
	/** @TupleReturn */
	getVolumeLimits(): [number, number];

	/**
	 * Returns whether the Source will loop.
	 *
	 * @return {boolean} loop, True if the Source will loop, false otherwise.
	 */
	isLooping(): boolean;

	/**
	 * Returns whether the Source is paused.
	 *
	 * @return {boolean} paused, True if the Source is paused, false otherwise.
	 */
	isPaused(): boolean;

	/**
	 * Returns whether the Source is playing.
	 *
	 * @return {boolean} playing, True if the Source is playing, false otherwise.
	 */
	isPlaying(): boolean;

	/**
	 * Returns whether the Source is stopped.
	 *
	 * @return {boolean} stopped, True if the Source is stopped, false otherwise.
	 */
	isStopped(): boolean;

	/**
	 * Pauses the Source.
	 *
	 */
	pause(): void;

	/**
	 * Starts playing the Source.
	 *
	 * @return {boolean} success, True if the Source started playing successfully, false otherwise.
	 */
	play(): boolean;

	/**
	 * Resumes a paused Source.
	 *
	 */
	resume(): void;

	/**
	 * Rewinds a Source.
	 *
	 */
	rewind(): void;

	/**
	 * Sets the playing position of the Source.
	 *
	 * @param position The position to seek to.
	 * @param unit The unit of the position value.
	 */
	seek(position: number, unit?: TimeUnit): void;

	/**
	 * Sets the direction vector of the Source. A zero vector makes the source
	 * non-directional.
	 *
	 * @param x The X part of the direction vector.
	 * @param y The Y part of the direction vector.
	 * @param z The Z part of the direction vector.
	 */
	setDirection(x: number, y: number, z: number): void;

	/**
	 * Sets the reference and maximum distance of the source.
	 *
	 * @param ref The new reference distance.
	 * @param max The new maximum distance.
	 */
	setAttenuationDistances(ref: number, max: number): void;

	/**
	 * Sets the Source's directional volume cones. Together with Source:setDirection,
	 * the cone angles allow for the Source's volume to vary depending on its
	 * direction.
	 *
	 * @param innerAngle The inner angle from the Source's direction, in radians. The Source will play at normal volume if the listener is inside the cone defined by this angle.
	 * @param outerAngle The outer angle from the Source's direction, in radians. The Source will play at a volume between the normal and outer volumes, if the listener is in between the cones defined by the inner and outer angles.
	 * @param outerVolume The Source's volume when the listener is outside both the inner and outer cone angles.
	 */
	setCone(innerAngle: number, outerAngle: number, outerVolume?: number): void;

	/**
	 * Sets whether the Source should loop.
	 *
	 * @param loop True if the source should loop, false otherwise.
	 */
	setLooping(loop: boolean): void;

	/**
	 * Sets the pitch of the Source.
	 *
	 * @param pitch Calculated with regard to 1 being the base pitch. Each reduction by 50 percent equals a pitch shift of -12 semitones (one octave reduction). Each doubling equals a pitch shift of 12 semitones (one octave increase). Zero is not a legal value.
	 */
	setPitch(pitch: number): void;

	/**
	 * Sets the position of the Source.
	 *
	 * @param x The X position of the Source.
	 * @param y The Y position of the Source.
	 * @param z The Z position of the Source.
	 */
	setPosition(x: number, y: number, z: number): void;

	/**
	 * Sets the rolloff factor which affects the strength of the used distance
	 * attenuation.
	 *
	 *
	 * Extended information and detailed formulas can be found in the chapter "3.4.
	 * Attenuation By Distance" of OpenAL 1.1 specification.
	 *
	 * @param rolloff The new rolloff factor.
	 */
	setRolloff(rolloff: number): void;

	/**
	 * Sets the velocity of the Source.
	 *
	 *
	 * This does not change the position of the Source, but is used to calculate the
	 * doppler effect.
	 *
	 * @param x The X part of the velocity vector.
	 * @param y The Y part of the velocity vector.
	 * @param z The Z part of the velocity vector.
	 */
	setVelocity(x: number, y: number, z: number): void;

	/**
	 * Sets the volume of the Source.
	 *
	 * @param volume The volume of the Source, where 1.0 is normal volume.
	 */
	setVolume(volume: number): void;

	/**
	 * Sets the volume limits of the source. The limits have to be numbers from 0 to
	 * 1.
	 *
	 * @param min The minimum volume.
	 * @param max The maximum volume.
	 */
	setVolumeLimits(min: number, max: number): void;

	/**
	 * Stops a Source.
	 *
	 */
	stop(): void;

	/**
	 * Gets the currently playing position of the Source.
	 *
	 * @param unit The type of unit for the return value.
	 * @return {number} position, The currently playing position of the Source.
	 */
	tell(unit?: TimeUnit): number;

}
declare interface RecordingDevice extends Object {
}
declare interface File extends Object {
	/**
	 * Closes a file.
	 *
	 * @return {boolean} success, Whether closing was successful.
	 */
	close(): boolean;

	/**
	 * Flushes any buffered written data in the file to the disk.
	 *
	 * @return {boolean} success, Whether the file successfully flushed any buffered data to the disk.
	 * @return {string} err, The error string, if an error occurred and the file could not be flushed.
	 */
	/** @TupleReturn */
	flush(): [boolean, string];

	/**
	 * Gets the buffer mode of a file.
	 *
	 * @return {BufferMode} mode, The current buffer mode of the file.
	 * @return {number} size, The maximum size in bytes of the file's buffer.
	 */
	/** @TupleReturn */
	getBuffer(): [BufferMode, number];

	/**
	 * Gets the filename that the File object was created with. If the file object
	 * originated from the love.filedropped callback, the filename will be the full
	 * platform-dependent file path.
	 *
	 * @return {string} filename, The filename of the File.
	 */
	getFilename(): string;

	/**
	 * Gets the FileMode the file has been opened with.
	 *
	 * @return {FileMode} mode, The mode this file has been opened with.
	 */
	getMode(): FileMode;

	/**
	 * Returns the file size.
	 *
	 * @return {number} size, The file size
	 */
	getSize(): number;

	/**
	 * Gets whether end-of-file has been reached.
	 *
	 * @return {boolean} eof, Whether EOF has been reached.
	 */
	isEOF(): boolean;

	/**
	 * Gets whether the file is open.
	 *
	 * @return {boolean} open, True if the file is currently open, false otherwise.
	 */
	isOpen(): boolean;

	/**
	 * Iterate over all the lines in a file
	 *
	 * @return {Function} iterator, The iterator (can be used in for loops)
	 */
	lines(): Function;

	/**
	 * Open the file for write, read or append.
	 *
	 *
	 * If you are getting the error message "Could not set write directory", try
	 * setting the save directory. This is done either with
	 * love.filesystem.setIdentity or by setting the identity field in love.conf.
	 *
	 * @param mode The mode to open the file in.
	 * @return {boolean} success, True on success, false otherwise.
	 */
	open(mode: FileMode): boolean;

	/**
	 * Read a number of bytes from a file.
	 *
	 * @param bytes The number of bytes to read
	 * @return {string} contents, The contents of the read bytes.
	 * @return {number} size, How many bytes have been read.
	 */
	/** @TupleReturn */
	read(bytes?: number): [string, number];

	/**
	 * Seek to a position in a file.
	 *
	 * @param position The position to seek to.
	 * @return {boolean} success, Whether the operation was successful.
	 */
	seek(position: number): boolean;

	/**
	 * Sets the buffer mode for a file opened for writing or appending. Files with
	 * buffering enabled will not write data to the disk until the buffer size limit
	 * is reached, depending on the buffer mode.
	 *
	 * @param mode The buffer mode to use.
	 * @param size The maximum size in bytes of the file's buffer.
	 * @return {boolean} success, Whether the buffer mode was successfully set.
	 * @return {string} errorstr, The error string, if the buffer mode could not be set and an error occurred.
	 */
	/** @TupleReturn */
	setBuffer(mode: BufferMode, size?: number): [boolean, string];

	/**
	 * Returns the position in the file.
	 *
	 * @return {number} pos, The current position.
	 */
	tell(): number;

	/**
	 * Write data to a file.
	 *
	 * @param data The data to write.
	 * @param size How many bytes to write.
	 * @return {boolean} success, Whether the operation was successful.
	 */
	write(data: string, size?: number): boolean;

}
declare interface FileData extends Data {
	/**
	 * Gets the extension of the FileData.
	 *
	 * @return {string} ext, The extension of the file the FileData represents.
	 */
	getExtension(): string;

	/**
	 * Gets the filename of the FileData.
	 *
	 * @return {string} name, The name of the file the FileData represents.
	 */
	getFilename(): string;

}
declare interface Canvas extends Texture {
	/**
	 * Gets the width and height of the Canvas.
	 *
	 * @return {number} width, The width of the Canvas, in pixels.
	 * @return {number} height, The height of the Canvas, in pixels.
	 */
	/** @TupleReturn */
	getDimensions(): [number, number];

	/**
	 * Gets the filter mode of the Canvas.
	 *
	 * @return {FilterMode} min, Filter mode used when minifying the canvas.
	 * @return {FilterMode} mag, Filter mode used when magnifying the canvas.
	 * @return {number} anisotropy, Maximum amount of anisotropic filtering used.
	 */
	/** @TupleReturn */
	getFilter(): [FilterMode, FilterMode, number];

	/**
	 * Gets the texture format of the Canvas.
	 *
	 * @return {CanvasFormat} format, The format of the Canvas.
	 */
	getFormat(): CanvasFormat;

	/**
	 * Gets the height of the Canvas.
	 *
	 * @return {number} height, The height of the Canvas, in pixels.
	 */
	getHeight(): number;

	/**
	 * Gets the number of multisample antialiasing (MSAA) samples used when drawing to
	 * the Canvas.
	 *
	 *
	 * This may be different than the number used as an argument to
	 * love.graphics.newCanvas if the system running LÖVE doesn't support that
	 * number.
	 *
	 * @return {number} samples, The number of multisample antialiasing samples used by the canvas when drawing to it.
	 */
	getMSAA(): number;

	/**
	 * Gets the width of the Canvas.
	 *
	 * @return {number} width, The width of the Canvas, in pixels.
	 */
	getWidth(): number;

	/**
	 * Gets the wrapping properties of a Canvas.
	 *
	 *
	 * This function returns the currently set horizontal and vertical wrapping modes
	 * for the Canvas.
	 *
	 * @return {WrapMode} horizontal, Horizontal wrapping mode of the Canvas.
	 * @return {WrapMode} vertical, Vertical wrapping mode of the Canvas.
	 */
	/** @TupleReturn */
	getWrap(): [WrapMode, WrapMode];

	/**
	 * Generates ImageData from the contents of the Canvas.
	 *
	 * @return {ImageData} data, The image data stored in the Canvas.
	 */
	newImageData(): ImageData;

	/**
	 * Generates ImageData from the contents of the Canvas.
	 *
	 * @param x The x-axis of the top-left corner of the area within the Canvas to capture.
	 * @param y The y-axis of the top-left corner of the area within the Canvas to capture.
	 * @param width The width of the area within the Canvas to capture.
	 * @param height The height of the area within the Canvas to capture.
	 * @return {ImageData} data, The new ImageData made from the Canvas' contents.
	 */
	newImageData(x: number, y: number, width: number, height: number): ImageData;

	/**
	 * Render to the Canvas using a function.
	 *
	 * @param func A function performing drawing operations.
	 */
	renderTo(func: Function): void;

	/**
	 * Sets the filter of the Canvas.
	 *
	 * @param min How to scale a canvas down.
	 * @param mag How to scale a canvas up.
	 * @param anisotropy Maximum amount of anisotropic filtering used.
	 */
	setFilter(min: FilterMode, mag?: FilterMode, anisotropy?: number): void;

	/**
	 * Sets the wrapping properties of a Canvas.
	 *
	 *
	 * This function sets the way the edges of a Canvas are treated if it is scaled or
	 * rotated. If the WrapMode is set to "clamp", the edge will not be interpolated.
	 * If set to "repeat", the edge will be interpolated with the pixels on the
	 * opposing side of the framebuffer.
	 *
	 * @param horizontal Horizontal wrapping mode of the Canvas.
	 * @param vertical Vertical wrapping mode of the Canvas.
	 */
	setWrap(horizontal: WrapMode, vertical?: WrapMode): void;

}
declare interface Font extends Object {
	/**
	 * Gets the ascent of the Font. The ascent spans the distance between the baseline
	 * and the top of the glyph that reaches farthest from the baseline.
	 *
	 * @return {number} ascent, The ascent of the Font in pixels.
	 */
	getAscent(): number;

	/**
	 * Gets the baseline of the Font. Most scripts share the notion of a baseline: an
	 * imaginary horizontal line on which characters rest. In some scripts, parts of
	 * glyphs lie below the baseline.
	 *
	 * @return {number} baseline, The baseline of the Font in pixels.
	 */
	getBaseline(): number;

	/**
	 * Gets the descent of the Font. The descent spans the distance between the
	 * baseline and the lowest descending glyph in a typeface.
	 *
	 * @return {number} descent, The descent of the Font in pixels.
	 */
	getDescent(): number;

	/**
	 * Gets the filter mode for a font.
	 *
	 * @return {FilterMode} min, Filter mode used when minifying the font.
	 * @return {FilterMode} mag, Filter mode used when magnifying the font.
	 * @return {number} anisotropy, Maximum amount of anisotropic filtering used.
	 */
	/** @TupleReturn */
	getFilter(): [FilterMode, FilterMode, number];

	/**
	 * Gets the height of the Font. The height of the font is the size including any
	 * spacing; the height which it will need.
	 *
	 * @return {number} height, The height of the Font in pixels.
	 */
	getHeight(): number;

	/**
	 * Gets the line height. This will be the value previously set by
	 * Font:setLineHeight, or 1.0 by default.
	 *
	 * @return {number} height, The current line height.
	 */
	getLineHeight(): number;

	/**
	 * Determines the horizontal size a line of text needs. Does not support
	 * line-breaks.
	 *
	 * @param line A line of text.
	 * @return {number} width, The width of the line.
	 */
	getWidth(line: string): number;

	/**
	 * Gets formatting information for text, given a wrap limit.
	 *
	 *
	 * This function accounts for newlines correctly (i.e. '\n').
	 *
	 * @param text The text that will be wrapped.
	 * @param wraplimit The maximum width in pixels of each line that text is allowed before wrapping.
	 * @return {number} width, The maximum width of the wrapped text.
	 * @return {table} wrappedtext, A sequence containing each line of text that was wrapped.
	 */
	/** @TupleReturn */
	getWrap(text: string, wraplimit: number): [number, table];

	/**
	 * Gets whether the font can render a particular character.
	 *
	 * @param character A unicode character.
	 * @return {boolean} hasglyph, Whether the font can render the glyph represented by the character.
	 */
	hasGlyphs(character: string): boolean;

	/**
	 * Gets whether the font can render a particular character.
	 *
	 * @param codepoint A unicode codepoint number.
	 * @return {boolean} hasglyph, Whether the font can render the glyph represented by the codepoint number.
	 */
	hasGlyphs(codepoint: number): boolean;

	/**
	 * Sets the fallback fonts. When the Font doesn't contain a glyph, it will
	 * substitute the glyph from the next subsequent fallback Fonts. This is akin to
	 * setting a "font stack" in Cascading Style Sheets (CSS).
	 *
	 * @param fallbackfont1 The first fallback Font to use.
	 * @param ... Additional fallback Fonts.
	 */
	setFallbacks(fallbackfont1: Font, ...vararg: Font[]): void;

	/**
	 * Sets the filter mode for a font.
	 *
	 * @param min How to scale a font down.
	 * @param mag How to scale a font up.
	 * @param anisotropy Maximum amount of anisotropic filtering used.
	 */
	setFilter(min: FilterMode, mag?: FilterMode, anisotropy?: number): void;

	/**
	 * Sets the line height. When rendering the font in lines the actual height will
	 * be determined by the line height multiplied by the height of the font. The
	 * default is 1.0.
	 *
	 * @param height The new line height.
	 */
	setLineHeight(height: number): void;

}
declare interface Mesh extends Drawable {
	/**
	 * Attaches a vertex attribute from a different Mesh onto this Mesh, for use when
	 * drawing. This can be used to share vertex attribute data between several
	 * different Meshes.
	 *
	 * @param name The name of the vertex attribute to attach.
	 * @param mesh The Mesh to get the vertex attribute from.
	 */
	attachAttribute(name: string, mesh: Mesh): void;

	/**
	 * Removes a previously attached vertex attribute from this Mesh.
	 *
	 * @param name The name of the attached vertex attribute to detach.
	 * @return {boolean} success, Whether the attribute was successfully detached.
	 */
	detachAttribute(name: string): boolean;

	/**
	 * Gets the mode used when drawing the Mesh.
	 *
	 * @return {MeshDrawMode} mode, The mode used when drawing the Mesh.
	 */
	getDrawMode(): MeshDrawMode;

	/**
	 * Gets the range of vertices used when drawing the Mesh.
	 *
	 *
	 * If the Mesh's draw range has not been set previously with Mesh:setDrawRange,
	 * this function will return nil.
	 *
	 * @return {number} min, The index of the first vertex used when drawing, or the index of the first value in the vertex map used if one is set for this Mesh.
	 * @return {number} max, The index of the last vertex used when drawing, or the index of the last value in the vertex map used if one is set for this Mesh.
	 */
	/** @TupleReturn */
	getDrawRange(): [number, number];

	/**
	 * Gets the texture (Image or Canvas) used when drawing the Mesh.
	 *
	 * @return {Texture} texture, The Image or Canvas to texture the Mesh with when drawing, or nil if none is set.
	 */
	getTexture(): Texture;

	/**
	 * Gets the properties of a vertex in the Mesh.
	 *
	 * @param index The index of the the vertex you want to retrieve the information for.
	 * @return {number} attributecomponent, The first component of the first vertex attribute in the specified vertex.
	 * @return {number} ..., Additional components of all vertex attributes in the specified vertex.
	 */
	/** @TupleReturn */
	getVertex(index: number): [number, number];

	/**
	 * Gets the properties of a vertex in the Mesh.
	 *
	 * @param index The index of the the vertex you want to retrieve the information for.
	 * @return {number} x, The position of the vertex on the x-axis.
	 * @return {number} y, The position of the vertex on the y-axis.
	 * @return {number} u, The horizontal component of the texture coordinate.
	 * @return {number} v, The vertical component of the texture coordinate.
	 * @return {number} r, The red component of the vertex's color.
	 * @return {number} g, The green component of the vertex's color.
	 * @return {number} b, The blue component of the vertex's color.
	 * @return {number} a, The alpha component of the vertex's color.
	 */
	/** @TupleReturn */
	getVertex(index: number): [number, number, number, number, number, number, number, number];

	/**
	 * Gets the properties of a specific attribute within a vertex in the Mesh.
	 *
	 *
	 * Meshes without a custom vertex format specified in love.graphics.newMesh have
	 * position as their first attribute, texture coordinates as their second
	 * attribute, and color as their third attribute.
	 *
	 * @param vertexindex The index of the the vertex to be modified.
	 * @param attributeindex The index of the attribute within the vertex to be modified.
	 * @return {number} value1, The value of the first component of the attribute.
	 * @return {number} value2, The value of the second component of the attribute.
	 * @return {number} ..., Any additional vertex attribute components.
	 */
	/** @TupleReturn */
	getVertexAttribute(vertexindex: number, attributeindex: number): [number, number, number];

	/**
	 * Returns the total number of vertices in the Mesh.
	 *
	 * @return {number} num, The total number of vertices in this Mesh.
	 */
	getVertexCount(): number;

	/**
	 * Gets the vertex format that the Mesh was created with.
	 *
	 * @return {table} format, The vertex format of the Mesh, which is a table containing tables for each vertex attribute the Mesh was created with, in the form of {attribute, ...}.
	 */
	getVertexFormat(): table;

	/**
	 * Gets the vertex map for the Mesh. The vertex map describes the order in which
	 * the vertices are used when the Mesh is drawn. The vertices, vertex map, and
	 * mesh draw mode work together to determine what exactly is displayed on the
	 * screen.
	 *
	 *
	 * If no vertex map has been set previously via Mesh:setVertexMap, then this
	 * function will return nil in LÖVE 0.10.0+, or an empty table in 0.9.2 and
	 * older.
	 *
	 * @return {table} map, A table containing a list of vertex indices used when drawing.
	 */
	getVertexMap(): table;

	/**
	 * Gets whether a specific vertex attribute in the Mesh is enabled. Vertex data
	 * from disabled attributes is not used when drawing the Mesh.
	 *
	 * @param name The name of the vertex attribute to enable or disable.
	 * @return {boolean} enabled, Whether the vertex attribute is used when drawing this Mesh.
	 */
	isAttributeEnabled(name: string): boolean;

	/**
	 * Enables or disables a specific vertex attribute in the Mesh. Vertex data from
	 * disabled attributes is not used when drawing the Mesh.
	 *
	 * @param name The name of the vertex attribute to enable or disable.
	 * @param enable Whether the vertex attribute is used when drawing this Mesh.
	 */
	setAttributeEnabled(name: string, enable: boolean): void;

	/**
	 * Sets the mode used when drawing the Mesh.
	 *
	 * @param mode The mode to use when drawing the Mesh.
	 */
	setDrawMode(mode: MeshDrawMode): void;

	/**
	 * Restricts the drawn vertices of the Mesh to a subset of the total.
	 *
	 *
	 * If a vertex map is used with the Mesh, this method will set a subset of the
	 * values in the vertex map array to use, instead of a subset of the total
	 * vertices in the Mesh.
	 *
	 *
	 * For example, if Mesh:setVertexMap(1, 2, 3, 1, 3, 4) and Mesh:setDrawRange(4, 6)
	 * are called, vertices 1, 3, and 4 will be drawn.
	 *
	 * @param min The index of the first vertex to use when drawing, or the index of the first value in the vertex map to use if one is set for this Mesh.
	 * @param max The index of the last vertex to use when drawing, or the index of the last value in the vertex map to use if one is set for this Mesh.
	 */
	setDrawRange(min: number, max: number): void;

	/**
	 * Restricts the drawn vertices of the Mesh to a subset of the total.
	 *
	 *
	 * If a vertex map is used with the Mesh, this method will set a subset of the
	 * values in the vertex map array to use, instead of a subset of the total
	 * vertices in the Mesh.
	 *
	 *
	 * For example, if Mesh:setVertexMap(1, 2, 3, 1, 3, 4) and Mesh:setDrawRange(4, 6)
	 * are called, vertices 1, 3, and 4 will be drawn.
	 *
	 */
	setDrawRange(): void;

	/**
	 * Sets the texture (Image or Canvas) used when drawing the Mesh.
	 *
	 *
	 * When called without an argument disables the texture. Untextured meshes have a
	 * white color by default.
	 *
	 */
	setTexture(): void;

	/**
	 * Sets the texture (Image or Canvas) used when drawing the Mesh.
	 *
	 *
	 * When called without an argument disables the texture. Untextured meshes have a
	 * white color by default.
	 *
	 * @param texture The Image or Canvas to texture the Mesh with when drawing.
	 */
	setTexture(texture: Texture): void;

	/**
	 * Sets the properties of a vertex in the Mesh.
	 *
	 * @param index The index of the the vertex you want to modify.
	 * @param attributecomponent The first component of the first vertex attribute in the specified vertex.
	 * @param ... Additional components of all vertex attributes in the specified vertex.
	 */
	setVertex(index: number, attributecomponent: number, ...vararg: number[]): void;

	/**
	 * Sets the properties of a vertex in the Mesh.
	 *
	 * @param index The index of the the vertex you want to modify.
	 * @param vertex A table with vertex information, in the form of {attributecomponent, ...}.
	 */
	setVertex(index: number, vertex: table): void;

	/**
	 * Sets the properties of a vertex in the Mesh.
	 *
	 * @param index The index of the the vertex you want to modify.
	 * @param x The position of the vertex on the x-axis.
	 * @param y The position of the vertex on the y-axis.
	 * @param u The horizontal component of the texture coordinate.
	 * @param v The vertical component of the texture coordinate.
	 * @param r The red component of the vertex's color.
	 * @param g The green component of the vertex's color.
	 * @param b The blue component of the vertex's color.
	 * @param a The alpha component of the vertex's color.
	 */
	setVertex(index: number, x: number, y: number, u: number, v: number, r?: number, g?: number, b?: number, a?: number): void;

	/**
	 * Sets the properties of a vertex in the Mesh.
	 *
	 * @param index The index of the the vertex you want to modify.
	 * @param vertex A table with vertex information.
	 */
	setVertex(index: number, vertex: table): void;

	/**
	 * Sets the properties of a specific attribute within a vertex in the Mesh.
	 *
	 *
	 * Meshes without a custom vertex format specified in love.graphics.newMesh have
	 * position as their first attribute, texture coordinates as their second
	 * attribute, and color as their third attribute.
	 *
	 * @param vertexindex The index of the the vertex to be modified.
	 * @param attributeindex The index of the attribute within the vertex to be modified.
	 * @param value1 The value of the first component of the attribute.
	 * @param value2 The value of the second component of the attribute.
	 * @param ... Any additional vertex attribute components.
	 */
	setVertexAttribute(vertexindex: number, attributeindex: number, value1: number, value2: number, ...vararg: number[]): void;

	/**
	 * Sets the vertex map for the Mesh. The vertex map describes the order in which
	 * the vertices are used when the Mesh is drawn. The vertices, vertex map, and
	 * mesh draw mode work together to determine what exactly is displayed on the
	 * screen.
	 *
	 *
	 * The vertex map allows you to re-order or reuse vertices when drawing without
	 * changing the actual vertex parameters or duplicating vertices. It is especially
	 * useful when combined with different Mesh Draw Modes.
	 *
	 * @param map A table containing a list of vertex indices to use when drawing. Values must be in the range of [1, Mesh:getVertexCount()].
	 */
	setVertexMap(map: table): void;

	/**
	 * Sets the vertex map for the Mesh. The vertex map describes the order in which
	 * the vertices are used when the Mesh is drawn. The vertices, vertex map, and
	 * mesh draw mode work together to determine what exactly is displayed on the
	 * screen.
	 *
	 *
	 * The vertex map allows you to re-order or reuse vertices when drawing without
	 * changing the actual vertex parameters or duplicating vertices. It is especially
	 * useful when combined with different Mesh Draw Modes.
	 *
	 * @param vi1 The index of the first vertex to use when drawing. Must be in the range of [1, Mesh:getVertexCount()].
	 * @param vi2 The index of the second vertex to use when drawing.
	 * @param vi3 The index of the third vertex to use when drawing.
	 */
	setVertexMap(vi1: number, vi2: number, vi3: number): void;

	/**
	 * Replaces a range of vertices in the Mesh with new ones. The total number of
	 * vertices in a Mesh cannot be changed after it has been created.
	 *
	 * @param vertices The table filled with vertex information tables for each vertex, in the form of {vertex, ...} where each vertex is a table in the form of {attributecomponent, ...}.
	 */
	setVertices(vertices: table): void;

	/**
	 * Replaces a range of vertices in the Mesh with new ones. The total number of
	 * vertices in a Mesh cannot be changed after it has been created.
	 *
	 * @param vertices The table filled with vertex information tables for each vertex as follows:
	 */
	setVertices(vertices: table): void;

}
declare interface Image extends Texture {
	/**
	 * Gets the original ImageData or CompressedImageData used to create the Image.
	 *
	 *
	 * All Images keep a reference to the Data that was used to create the Image. The
	 * Data is used to refresh the Image when love.window.setMode or Image:refresh is
	 * called.
	 *
	 * @return {ImageData} data, The original ImageData used to create the Image, if the image is not compressed.
	 */
	getData(): ImageData;

	/**
	 * Gets the original ImageData or CompressedImageData used to create the Image.
	 *
	 *
	 * All Images keep a reference to the Data that was used to create the Image. The
	 * Data is used to refresh the Image when love.window.setMode or Image:refresh is
	 * called.
	 *
	 * @return {CompressedImageData} data, The original CompressedImageData used to create the Image, if the image is compressed.
	 */
	getData(): CompressedImageData;

	/**
	 * Gets the width and height of the Image.
	 *
	 * @return {number} width, The width of the Image, in pixels.
	 * @return {number} height, The height of the Image, in pixels.
	 */
	/** @TupleReturn */
	getDimensions(): [number, number];

	/**
	 * Gets the filter mode for an image.
	 *
	 * @return {FilterMode} min, Filter mode used when minifying the image.
	 * @return {FilterMode} mag, Filter mode used when magnifying the image.
	 */
	/** @TupleReturn */
	getFilter(): [FilterMode, FilterMode];

	/**
	 * Gets the flags used when the image was created.
	 *
	 * @return {table} flags, A table with ImageFlag keys.
	 */
	getFlags(): table;

	/**
	 * Gets the height of the Image.
	 *
	 * @return {number} height, The height of the Image, in pixels.
	 */
	getHeight(): number;

	/**
	 * Gets the mipmap filter mode for an Image.
	 *
	 * @return {FilterMode} mode, The filter mode used in between mipmap levels. nil if mipmap filtering is not enabled.
	 * @return {number} sharpness, Value used to determine whether the image should use more or less detailed mipmap levels than normal when drawing.
	 */
	/** @TupleReturn */
	getMipmapFilter(): [FilterMode, number];

	/**
	 * Gets the width of the Image.
	 *
	 * @return {number} width, The width of the Image, in pixels.
	 */
	getWidth(): number;

	/**
	 * Gets the wrapping properties of an Image.
	 *
	 *
	 * This function returns the currently set horizontal and vertical wrapping modes
	 * for the image.
	 *
	 * @return {WrapMode} horizontal, Horizontal wrapping mode of the image.
	 * @return {WrapMode} vertical, Vertical wrapping mode of the image.
	 */
	/** @TupleReturn */
	getWrap(): [WrapMode, WrapMode];

	/**
	 * Reloads the Image's contents from the ImageData or CompressedImageData used to
	 * create the image.
	 *
	 */
	refresh(): void;

	/**
	 * Reloads the Image's contents from the ImageData or CompressedImageData used to
	 * create the image.
	 *
	 * @param x The x-axis of the top-left corner of the area within the Image to reload.
	 * @param y The y-axis of the top-left corner of the area within the Image to reload.
	 * @param width The width of the area within the Image to reload.
	 * @param height The height of the area within the Image to reload.
	 */
	refresh(x: number, y: number, width: number, height: number): void;

	/**
	 * Replaces the contents of an Image.
	 *
	 * @param data The new ImageData to replace the contents with.
	 * @param slice Which slice to replace, if applicable.
	 * @param mipmap The mimap level of the new ImageData. If 0 Image:replacePixels will generate new mimaps.
	 */
	replacePixels(data: ImageData, slice: number, mipmap?: number): void;

	/**
	 * Sets the filter mode for an image.
	 *
	 * @param min How to scale an image down.
	 * @param mag How to scale an image up.
	 */
	setFilter(min: FilterMode, mag?: FilterMode): void;

	/**
	 * Sets the mipmap filter mode for an Image.
	 *
	 *
	 * Mipmapping is useful when drawing an image at a reduced scale. It can improve
	 * performance and reduce aliasing issues.
	 *
	 *
	 * In 0.10.0 and newer, the Image must be created with the mipmaps flag enabled
	 * for the mipmap filter to have any effect.
	 *
	 * @param filtermode The filter mode to use in between mipmap levels. "nearest" will often give better performance.
	 * @param sharpness A positive sharpness value makes the image use a more detailed mipmap level when drawing, at the expense of performance. A negative value does the reverse.
	 */
	setMipmapFilter(filtermode: FilterMode, sharpness?: number): void;

	/**
	 * Sets the mipmap filter mode for an Image.
	 *
	 *
	 * Mipmapping is useful when drawing an image at a reduced scale. It can improve
	 * performance and reduce aliasing issues.
	 *
	 *
	 * In 0.10.0 and newer, the Image must be created with the mipmaps flag enabled
	 * for the mipmap filter to have any effect.
	 *
	 */
	setMipmapFilter(): void;

	/**
	 * Sets the wrapping properties of an Image.
	 *
	 *
	 * This function sets the way an Image is repeated when it is drawn with a Quad
	 * that is larger than the image's extent. An image may be clamped or set to
	 * repeat in both horizontal and vertical directions. Clamped images appear only
	 * once, but repeated ones repeat as many times as there is room in the Quad.
	 *
	 *
	 * If you use a Quad that is larger than the image extent and do not use repeated
	 * tiling, there may be an unwanted visual effect of the image stretching all the
	 * way to fill the Quad. If this is the case, setting Image:getWrap("repeat",
	 * "repeat") for all the images to be repeated, and using Quad of appropriate size
	 * will result in the best visual appearance.
	 *
	 * @param horizontal Horizontal wrapping mode of the image.
	 * @param vertical Vertical wrapping mode of the image.
	 */
	setWrap(horizontal: WrapMode, vertical?: WrapMode): void;

}
declare interface ParticleSystem extends Drawable {
	/**
	 * Creates an identical copy of the ParticleSystem in the stopped state.
	 *
	 *
	 * Cloned ParticleSystem inherit all the set-able state of the original
	 * ParticleSystem, but they are initialized stopped.
	 *
	 * @return {ParticleSystem} particlesystem, The new identical copy of this ParticleSystem.
	 */
	clone(): ParticleSystem;

	/**
	 * Emits a burst of particles from the particle emitter.
	 *
	 * @param numparticles The amount of particles to emit. The number of emitted particles will be truncated if the particle system's max buffer size is reached.
	 */
	emit(numparticles: number): void;

	/**
	 * Gets the amount of particles that are currently in the system.
	 *
	 * @return {number} count, The current number of live particles.
	 */
	getCount(): number;

	/**
	 * Gets the area-based spawn parameters for the particles.
	 *
	 * @return {AreaSpreadDistribution} distribution, The type of distribution for new particles.
	 * @return {number} dx, The maximum spawn distance from the emitter along the x-axis for uniform distribution, or the standard deviation along the x-axis for normal distribution.
	 * @return {number} dy, The maximum spawn distance from the emitter along the y-axis for uniform distribution, or the standard deviation along the y-axis for normal distribution.
	 */
	/** @TupleReturn */
	getAreaSpread(): [AreaSpreadDistribution, number, number];

	/**
	 * Gets the size of the buffer (the max allowed amount of particles in the
	 * system).
	 *
	 * @return {number} buffer, The buffer size.
	 */
	getBufferSize(): number;

	/**
	 * Gets a series of colors to apply to the particle sprite. The particle system
	 * will interpolate between each color evenly over the particle's lifetime. Color
	 * modulation needs to be activated for this function to have any effect.
	 *
	 *
	 * Arguments are passed in groups of four, representing the components of the
	 * desired RGBA value. At least one color must be specified. A maximum of eight
	 * may be used.
	 *
	 * @return {number} r1, First color, red component (0-255).
	 * @return {number} g1, First color, green component (0-255).
	 * @return {number} b1, First color, blue component (0-255).
	 * @return {number} a1, First color, alpha component (0-255).
	 * @return {number} r2, Second color, red component (0-255).
	 * @return {number} g2, Second color, green component (0-255).
	 * @return {number} b2, Second color, blue component (0-255).
	 * @return {number} a2, Second color, alpha component (0-255).
	 * @return {number} ..., Etc.
	 */
	/** @TupleReturn */
	getColors(): [number, number, number, number, number, number, number, number, number];

	/**
	 * Gets the direction the particles will be emitted in.
	 *
	 * @return {number} direction, The direction of the particles (in radians).
	 */
	getDirection(): number;

	/**
	 * Gets the amount of particles emitted per second.
	 *
	 * @return {number} rate, The amount of particles per second.
	 */
	getEmissionRate(): number;

	/**
	 * Gets the mode to use when the ParticleSystem adds new particles.
	 *
	 * @return {ParticleInsertMode} mode, The mode to use when the ParticleSystem adds new particles.
	 */
	getInsertMode(): ParticleInsertMode;

	/**
	 * Gets the linear acceleration (acceleration along the x and y axes) for
	 * particles.
	 *
	 *
	 * Every particle created will accelerate along the x and y axes between xmin,ymin
	 * and xmax,ymax.
	 *
	 * @return {number} xmin, The minimum acceleration along the x axis.
	 * @return {number} ymin, The minimum acceleration along the y axis.
	 * @return {number} xmax, The maximum acceleration along the x axis.
	 * @return {number} ymax, The maximum acceleration along the y axis.
	 */
	/** @TupleReturn */
	getLinearAcceleration(): [number, number, number, number];

	/**
	 * Gets the amount of linear damping (constant deceleration) for particles.
	 *
	 * @return {number} min, The minimum amount of linear damping applied to particles.
	 * @return {number} max, The maximum amount of linear damping applied to particles.
	 */
	/** @TupleReturn */
	getLinearDamping(): [number, number];

	/**
	 * Gets how long the particle system should emit particles (if -1 then it emits
	 * particles forever).
	 *
	 * @return {number} life, The lifetime of the emitter (in seconds).
	 */
	getEmitterLifetime(): number;

	/**
	 * Get the offget position which the particle sprite is rotated around. If this
	 * function is not used, the particles rotate around their center.
	 *
	 * @return {number} x, The x coordinate of the rotation offget.
	 * @return {number} y, The y coordinate of the rotation offget.
	 */
	/** @TupleReturn */
	getOffset(): [number, number];

	/**
	 * Gets the life of the particles.
	 *
	 * @return {number} min, The minimum life of the particles (seconds).
	 * @return {number} max, The maximum life of the particles (seconds).
	 */
	/** @TupleReturn */
	getParticleLifetime(): [number, number];

	/**
	 * Gets the series of Quads used for the particle sprites.
	 *
	 * @return {table} quads, A table containing the Quads used.
	 */
	getQuads(): table;

	/**
	 * Gets the position of the emitter.
	 *
	 * @return {number} x, Position along x-axis.
	 * @return {number} y, Position along y-axis.
	 */
	/** @TupleReturn */
	getPosition(): [number, number];

	/**
	 * Get the radial acceleration (away from the emitter).
	 *
	 * @return {number} min, The minimum acceleration.
	 * @return {number} max, The maximum acceleration.
	 */
	/** @TupleReturn */
	getRadialAcceleration(): [number, number];

	/**
	 * Gets the rotation of the image upon particle creation (in radians).
	 *
	 * @return {number} min, The minimum initial angle (radians).
	 * @return {number} max, The maximum initial angle (radians).
	 */
	/** @TupleReturn */
	getRotation(): [number, number];

	/**
	 * Gets a series of sizes by which to scale a particle sprite. 1.0 is normal size.
	 * The particle system will interpolate between each size evenly over the
	 * particle's lifetime.
	 *
	 *
	 * At least one size must be specified. A maximum of eight may be used.
	 *
	 * @return {number} size1, The first size.
	 * @return {number} size2, The second size.
	 * @return {number} ..., Etc.
	 */
	/** @TupleReturn */
	getSizes(): [number, number, number];

	/**
	 * Gets the degree of variation (0 meaning no variation and 1 meaning full
	 * variation between start and end).
	 *
	 * @return {number} variation, The degree of variation (0 meaning no variation and 1 meaning full variation between start and end).
	 */
	getSizeVariation(): number;

	/**
	 * Gets the speed of the particles.
	 *
	 * @return {number} min, The minimum linear speed of the particles.
	 * @return {number} max, The maximum linear speed of the particles.
	 */
	/** @TupleReturn */
	getSpeed(): [number, number];

	/**
	 * Gets the spin of the sprite.
	 *
	 * @return {number} min, The minimum spin (radians per second).
	 * @return {number} max, The maximum spin (radians per second).
	 */
	/** @TupleReturn */
	getSpin(): [number, number];

	/**
	 * Gets the degree of variation (0 meaning no variation and 1 meaning full
	 * variation between start and end).
	 *
	 * @return {number} variation, The degree of variation (0 meaning no variation and 1 meaning full variation between start and end).
	 */
	getSpinVariation(): number;

	/**
	 * Gets the amount of spread for the system.
	 *
	 * @return {number} spread, The amount of spread (radians).
	 */
	getSpread(): number;

	/**
	 * Gets the Image or Canvas which is to be emitted.
	 *
	 * @return {Texture} texture, An Image or Canvas to use for the particle.
	 */
	getTexture(): Texture;

	/**
	 * Gets the tangential acceleration (acceleration perpendicular to the particle's
	 * direction).
	 *
	 * @return {number} min, The minimum acceleration.
	 * @return {number} max, The maximum acceleration.
	 */
	/** @TupleReturn */
	getTangentialAcceleration(): [number, number];

	/**
	 * Gets whether particle angles and rotations are relative to their velocities. If
	 * enabled, particles are aligned to the angle of their velocities and rotate
	 * relative to that angle.
	 *
	 * @return {boolean} enabled, True if relative particle rotation is enabled, false if it's disabled.
	 */
	hasRelativeRotation(): boolean;

	/**
	 * Checks whether the particle system is actively emitting particles.
	 *
	 * @return {boolean} active, True if system is active, false otherwise.
	 */
	isActive(): boolean;

	/**
	 * Checks whether the particle system is paused.
	 *
	 * @return {boolean} paused, True if system is paused, false otherwise.
	 */
	isPaused(): boolean;

	/**
	 * Checks whether the particle system is stopped.
	 *
	 * @return {boolean} stopped, True if system is stopped, false otherwise.
	 */
	isStopped(): boolean;

	/**
	 * Moves the position of the emitter. This results in smoother particle spawning
	 * behaviour than if ParticleSystem:setPosition is used every frame.
	 *
	 * @param x Position along x-axis.
	 * @param y Position along y-axis.
	 */
	moveTo(x: number, y: number): void;

	/**
	 * Pauses the particle emitter.
	 *
	 */
	pause(): void;

	/**
	 * Resets the particle emitter, removing any existing particles and resetting the
	 * lifetime counter.
	 *
	 */
	reset(): void;

	/**
	 * Sets area-based spawn parameters for the particles. Newly created particles
	 * will spawn in an area around the emitter based on the parameters to this
	 * function.
	 *
	 * @param distribution The type of distribution for new particles.
	 * @param dx The maximum spawn distance from the emitter along the x-axis for uniform distribution, or the standard deviation along the x-axis for normal distribution.
	 * @param dy The maximum spawn distance from the emitter along the y-axis for uniform distribution, or the standard deviation along the y-axis for normal distribution.
	 */
	setAreaSpread(distribution: AreaSpreadDistribution, dx: number, dy: number): void;

	/**
	 * Sets the size of the buffer (the max allowed amount of particles in the
	 * system).
	 *
	 * @param buffer The buffer size.
	 */
	setBufferSize(buffer: number): void;

	/**
	 * Sets a series of colors to apply to the particle sprite. The particle system
	 * will interpolate between each color evenly over the particle's lifetime. Color
	 * modulation needs to be activated for this function to have any effect.
	 *
	 *
	 * Arguments are passed in groups of four, representing the components of the
	 * desired RGBA value. At least one color must be specified. A maximum of eight
	 * may be used.
	 *
	 * @param r1 First color, red component (0-255).
	 * @param g1 First color, green component (0-255).
	 * @param b1 First color, blue component (0-255).
	 * @param a1 First color, alpha component (0-255).
	 * @param r2 Second color, red component (0-255).
	 * @param g2 Second color, green component (0-255).
	 * @param b2 Second color, blue component (0-255).
	 * @param a2 Second color, alpha component (0-255).
	 * @param ... Etc.
	 */
	setColors(r1: number, g1: number, b1: number, a1: number, r2: number, g2: number, b2: number, a2: number, ...vararg: number[]): void;

	/**
	 * Sets the direction the particles will be emitted in.
	 *
	 * @param direction The direction of the particles (in radians).
	 */
	setDirection(direction: number): void;

	/**
	 * Sets the amount of particles emitted per second.
	 *
	 * @param rate The amount of particles per second.
	 */
	setEmissionRate(rate: number): void;

	/**
	 * Sets how long the particle system should emit particles (if -1 then it emits
	 * particles forever).
	 *
	 * @param life The lifetime of the emitter (in seconds).
	 */
	setEmitterLifetime(life: number): void;

	/**
	 * Sets the mode to use when the ParticleSystem adds new particles.
	 *
	 * @param mode The mode to use when the ParticleSystem adds new particles.
	 */
	setInsertMode(mode: ParticleInsertMode): void;

	/**
	 * Sets the linear acceleration (acceleration along the x and y axes) for
	 * particles.
	 *
	 *
	 * Every particle created will accelerate along the x and y axes between xmin,ymin
	 * and xmax,ymax.
	 *
	 * @param xmin The minimum acceleration along the x axis.
	 * @param ymin The minimum acceleration along the y axis.
	 * @param xmax The maximum acceleration along the x axis.
	 * @param ymax The maximum acceleration along the y axis.
	 */
	setLinearAcceleration(xmin: number, ymin?: number, xmax?: number, ymax?: number): void;

	/**
	 * Sets the amount of linear damping (constant deceleration) for particles.
	 *
	 * @param min The minimum amount of linear damping applied to particles.
	 * @param max The maximum amount of linear damping applied to particles.
	 */
	setLinearDamping(min: number, max: number): void;

	/**
	 * Set the offset position which the particle sprite is rotated around. If this
	 * function is not used, the particles rotate around their center.
	 *
	 * @param x The x coordinate of the rotation offset.
	 * @param y The y coordinate of the rotation offset.
	 */
	setOffset(x: number, y: number): void;

	/**
	 * Sets the life of the particles.
	 *
	 * @param min The minimum life of the particles (seconds).
	 * @param max The maximum life of the particles (seconds).
	 */
	setParticleLifetime(min: number, max?: number): void;

	/**
	 * Sets the position of the emitter.
	 *
	 * @param x Position along x-axis.
	 * @param y Position along y-axis.
	 */
	setPosition(x: number, y: number): void;

	/**
	 * Sets a series of Quads to use for the particle sprites. Particles will choose a
	 * Quad from the list based on the particle's current lifetime, allowing for the
	 * use of animated sprite sheets with ParticleSystems.
	 *
	 * @param quad1 The first Quad to use.
	 * @param quad2 The second Quad to use.
	 */
	setQuads(quad1: Quad, quad2: Quad): void;

	/**
	 * Sets a series of Quads to use for the particle sprites. Particles will choose a
	 * Quad from the list based on the particle's current lifetime, allowing for the
	 * use of animated sprite sheets with ParticleSystems.
	 *
	 * @param quads A table containing the Quads to use.
	 */
	setQuads(quads: table): void;

	/**
	 * Set the radial acceleration (away from the emitter).
	 *
	 * @param min The minimum acceleration.
	 * @param max The maximum acceleration.
	 */
	setRadialAcceleration(min: number, max?: number): void;

	/**
	 * Sets whether particle angles and rotations are relative to their velocities. If
	 * enabled, particles are aligned to the angle of their velocities and rotate
	 * relative to that angle.
	 *
	 * @param enable True to enable relative particle rotation, false to disable it.
	 */
	setRelativeRotation(enable: boolean): void;

	/**
	 * Sets the rotation of the image upon particle creation (in radians).
	 *
	 * @param min The minimum initial angle (radians).
	 * @param max The maximum initial angle (radians).
	 */
	setRotation(min: number, max?: number): void;

	/**
	 * Sets a series of sizes by which to scale a particle sprite. 1.0 is normal size.
	 * The particle system will interpolate between each size evenly over the
	 * particle's lifetime.
	 *
	 *
	 * At least one size must be specified. A maximum of eight may be used.
	 *
	 * @param size1 The first size.
	 * @param size2 The second size.
	 * @param ... Etc.
	 */
	setSizes(size1: number, size2: number, ...vararg: number[]): void;

	/**
	 * Sets the degree of variation (0 meaning no variation and 1 meaning full
	 * variation between start and end).
	 *
	 * @param variation The degree of variation (0 meaning no variation and 1 meaning full variation between start and end).
	 */
	setSizeVariation(variation: number): void;

	/**
	 * Sets the speed of the particles.
	 *
	 * @param min The minimum linear speed of the particles.
	 * @param max The maximum linear speed of the particles.
	 */
	setSpeed(min: number, max?: number): void;

	/**
	 * Sets the spin of the sprite.
	 *
	 * @param min The minimum spin (radians per second).
	 * @param max The maximum spin (radians per second).
	 */
	setSpin(min: number, max?: number): void;

	/**
	 * Sets the degree of variation (0 meaning no variation and 1 meaning full
	 * variation between start and end).
	 *
	 * @param variation The degree of variation (0 meaning no variation and 1 meaning full variation between start and end).
	 */
	setSpinVariation(variation: number): void;

	/**
	 * Sets the amount of spread for the system.
	 *
	 * @param spread The amount of spread (radians).
	 */
	setSpread(spread: number): void;

	/**
	 * Sets the Image or Canvas which is to be emitted.
	 *
	 * @param texture An Image or Canvas to use for the particle.
	 */
	setTexture(texture: Texture): void;

	/**
	 * Sets the tangential acceleration (acceleration perpendicular to the particle's
	 * direction).
	 *
	 * @param min The minimum acceleration.
	 * @param max The maximum acceleration.
	 */
	setTangentialAcceleration(min: number, max?: number): void;

	/**
	 * Starts the particle emitter.
	 *
	 */
	start(): void;

	/**
	 * Stops the particle emitter, resetting the lifetime counter.
	 *
	 */
	stop(): void;

	/**
	 * Updates the particle system; moving, creating and killing particles.
	 *
	 * @param dt The time (seconds) since last frame.
	 */
	update(dt: number): void;

}
declare interface Quad extends Object {
	/**
	 * Gets reference texture dimensions initially specified in love.graphics.newQuad.
	 *
	 * @return {number} sw, The Texture width used by the Quad.
	 * @return {number} sh, The Texture height used by the Quad.
	 */
	/** @TupleReturn */
	getTextureDimensions(): [number, number];

	/**
	 * Gets the current viewport of this Quad.
	 *
	 * @return {number} x, The top-left corner along the x-axis.
	 * @return {number} y, The top-left corner along the y-axis.
	 * @return {number} w, The width of the viewport.
	 * @return {number} h, The height of the viewport.
	 */
	/** @TupleReturn */
	getViewport(): [number, number, number, number];

	/**
	 * Sets the texture coordinates according to a viewport.
	 *
	 * @param x The top-left corner along the x-axis.
	 * @param y The top-right corner along the y-axis.
	 * @param w The width of the viewport.
	 * @param h The height of the viewport.
	 */
	setViewport(x: number, y: number, w: number, h: number): void;

}
declare interface Shader extends Object {
	/**
	 * Gets information about an 'extern' ('uniform') variable in the shader.
	 *
	 * @param name The name of the extern variable.
	 * @return {ShaderVariableType} type, The base type of the variable.
	 * @return {number} components, The number of components in the variable (e.g. 2 for a vec2 or mat2.)
	 * @return {number} arrayelements, The number of elements in the array if the variable is an array, or 1 if not.
	 */
	/** @TupleReturn */
	getExternVariable(name: string): [ShaderVariableType, number, number];

	/**
	 * Returns any warning and error messages from compiling the shader code. This can
	 * be used for debugging your shaders if there's anything the graphics hardware
	 * doesn't like.
	 *
	 * @return {string} warnings, Warning messages (if any).
	 */
	getWarnings(): string;

	/**
	 * Gets whether a uniform / extern variable exists in the Shader.
	 *
	 *
	 * If a graphics driver's shader compiler determines that a uniform / extern
	 * variable doesn't affect the final output of the shader, it may optimize the
	 * variable out. This function will return false in that case.
	 *
	 * @param name The name of the uniform variable.
	 * @return {boolean} hasuniform, Whether the uniform exists in the shader and affects its final output.
	 */
	hasUniform(name: string): boolean;

	/**
	 * Sends one or more values to a special (uniform) variable inside the shader.
	 * Uniform variables have to be marked using the uniform or extern keyword.
	 *
	 * @param name Name of the number to send to the shader.
	 * @param number Number to send to store in the uniform variable.
	 * @param ... Additional numbers to send if the uniform variable is an array.
	 */
	send(name: string, number: number, ...vararg: number[]): void;

	/**
	 * Sends one or more values to a special (uniform) variable inside the shader.
	 * Uniform variables have to be marked using the uniform or extern keyword.
	 *
	 * @param name Name of the vector to send to the shader.
	 * @param vector Numbers to send to the uniform variable as a vector. The number of elements in the table determines the type of the vector (e.g. two numbers -> vec2). At least two and at most four numbers can be used.
	 * @param ... Additional vectors to send if the uniform variable is an array. All vectors need to be of the same size (e.g. only vec3's).
	 */
	send(name: string, vector: table, ...vararg: table[]): void;

	/**
	 * Sends one or more values to a special (uniform) variable inside the shader.
	 * Uniform variables have to be marked using the uniform or extern keyword.
	 *
	 * @param name Name of the matrix to send to the shader.
	 * @param matrix 2x2, 3x3, or 4x4 matrix to send to the uniform variable. Using table form: {{a,b,c,d}, {e,f,g,h}, ... }.
	 * @param ... Additional matrices of the same type as matrix to store in a uniform array.
	 */
	send(name: string, matrix: table, ...vararg: table[]): void;

	/**
	 * Sends one or more values to a special (uniform) variable inside the shader.
	 * Uniform variables have to be marked using the uniform or extern keyword.
	 *
	 * @param name Name of the Texture to send to the shader.
	 * @param texture Texture (Image or Canvas) to send to the uniform variable.
	 */
	send(name: string, texture: Texture): void;

	/**
	 * Sends one or more values to a special (uniform) variable inside the shader.
	 * Uniform variables have to be marked using the uniform or extern keyword.
	 *
	 * @param name Name of the boolean to send to the shader.
	 * @param boolean Boolean to send to store in the uniform variable.
	 * @param ... Additional booleans to send if the uniform variable is an array.
	 */
	send(name: string, boolean: boolean, ...vararg: boolean[]): void;

	/**
	 * Sends one or more colors to a special (extern / uniform) vec3 or vec4 variable
	 * inside the shader. The color components must be in the range of [0, 255],
	 * unlike Shader:send. The colors are gamma-corrected if global gamma-correction
	 * is enabled.
	 *
	 * @param name The name of the color extern variable to send to in the shader.
	 * @param color A table with red, green, blue, and optional alpha color components in the range of [0, 255] to send to the extern as a vector.
	 * @param ... Additional colors to send in case the extern is an array. All colors need to be of the same size (e.g. only vec3's).
	 */
	sendColor(name: string, color: table, ...vararg: table[]): void;

}
declare interface SpriteBatch extends Drawable {
	/**
	 * Add a sprite to the batch.
	 *
	 * @param x The position to draw the object (x-axis).
	 * @param y The position to draw the object (y-axis).
	 * @param r Orientation (radians).
	 * @param sx Scale factor (x-axis).
	 * @param sy Scale factor (y-axis).
	 * @param ox Origin offset (x-axis).
	 * @param oy Origin offset (y-axis).
	 * @param kx Shear factor (x-axis).
	 * @param ky Shear factor (y-axis).
	 * @return {number} id, An identifier for the added sprite.
	 */
	add(x: number, y: number, r?: number, sx?: number, sy?: number, ox?: number, oy?: number, kx?: number, ky?: number): number;

	/**
	 * Add a sprite to the batch.
	 *
	 * @param quad The Quad to add.
	 * @param x The position to draw the object (x-axis).
	 * @param y The position to draw the object (y-axis).
	 * @param r Orientation (radians).
	 * @param sx Scale factor (x-axis).
	 * @param sy Scale factor (y-axis).
	 * @param ox Origin offset (x-axis).
	 * @param oy Origin offset (y-axis).
	 * @param kx Shear factor (x-axis).
	 * @param ky Shear factor (y-axis).
	 * @return {number} id, An identifier for the added sprite.
	 */
	add(quad: Quad, x: number, y: number, r?: number, sx?: number, sy?: number, ox?: number, oy?: number, kx?: number, ky?: number): number;

	/**
	 * Attaches a per-vertex attribute from a Mesh onto this SpriteBatch, for use when
	 * drawing. This can be combined with a Shader to augment a SpriteBatch with
	 * per-vertex or additional per-sprite information instead of just having
	 * per-sprite colors.
	 *
	 *
	 * Each sprite in a SpriteBatch has 4 vertices in the following order: top-left,
	 * bottom-left, top-right, bottom-right. The index returned by SpriteBatch:add
	 * (and used by SpriteBatch:set) can used to determine the first vertex of a
	 * specific sprite with the formula "1 + 4 * ( id - 1 )".
	 *
	 * @param name The name of the vertex attribute to attach.
	 * @param mesh The Mesh to get the vertex attribute from.
	 */
	attachAttribute(name: string, mesh: Mesh): void;

	/**
	 * Removes all sprites from the buffer.
	 *
	 */
	clear(): void;

	/**
	 * Immediately sends all new and modified sprite data in the batch to the graphics
	 * card.
	 *
	 */
	flush(): void;

	/**
	 * Gets the maximum number of sprites the SpriteBatch can hold.
	 *
	 * @return {number} size, The maximum number of sprites the batch can hold.
	 */
	getBufferSize(): number;

	/**
	 * Gets the color that will be used for the next add and set operations.
	 *
	 *
	 * If no color has been set with SpriteBatch:setColor or the current SpriteBatch
	 * color has been cleared, this method will return nil.
	 *
	 * @return {number} r, The red component (0-255).
	 * @return {number} g, The green component (0-255).
	 * @return {number} b, The blue component (0-255).
	 * @return {number} a, The alpha component (0-255).
	 */
	/** @TupleReturn */
	getColor(): [number, number, number, number];

	/**
	 * Gets the amount of sprites currently in the SpriteBatch.
	 *
	 * @return {number} count, The amount of sprites currently in the batch.
	 */
	getCount(): number;

	/**
	 * Returns the Image or Canvas used by the SpriteBatch.
	 *
	 * @return {Texture} texture, The Image or Canvas for the sprites.
	 */
	getTexture(): Texture;

	/**
	 * Changes a sprite in the batch. This requires the identifier returned by add and
	 * addq.
	 *
	 * @param id The identifier of the sprite that will be changed.
	 * @param x The position to draw the object (x-axis).
	 * @param y The position to draw the object (y-axis).
	 * @param r Orientation (radians).
	 * @param sx Scale factor (x-axis).
	 * @param sy Scale factor (y-axis).
	 * @param ox Origin offset (x-axis).
	 * @param oy Origin offset (y-axis).
	 * @param kx Shear factor (x-axis).
	 * @param ky Shear factor (y-axis).
	 */
	set(id: number, x: number, y: number, r?: number, sx?: number, sy?: number, ox?: number, oy?: number, kx?: number, ky?: number): void;

	/**
	 * Changes a sprite in the batch. This requires the identifier returned by add and
	 * addq.
	 *
	 * @param id The identifier of the sprite that will be changed.
	 * @param quad The quad used on the image of the batch.
	 * @param x The position to draw the object (x-axis).
	 * @param y The position to draw the object (y-axis).
	 * @param r Orientation (radians).
	 * @param sx Scale factor (x-axis).
	 * @param sy Scale factor (y-axis).
	 * @param ox Origin offset (x-axis).
	 * @param oy Origin offset (y-axis).
	 * @param kx Shear factor (x-axis).
	 * @param ky Shear factor (y-axis).
	 */
	set(id: number, quad: Quad, x: number, y: number, r?: number, sx?: number, sy?: number, ox?: number, oy?: number, kx?: number, ky?: number): void;

	/**
	 * Sets the maximum number of sprites the SpriteBatch can hold. Existing sprites
	 * in the batch (up to the new maximum) will not be cleared when this function is
	 * called.
	 *
	 * @param size The new maximum number of sprites the batch can hold.
	 */
	setBufferSize(size: number): void;

	/**
	 * Sets the color that will be used for the next add and set operations. Calling
	 * the function without arguments will clear the color.
	 *
	 *
	 * In version [[0.9.2]] and older, the global color set with
	 * love.graphics.setColor will not work on the SpriteBatch if any of the sprites
	 * has its own color.
	 *
	 * @param r The amount of red.
	 * @param g The amount of green.
	 * @param b The amount of blue.
	 * @param a The amount of alpha.
	 */
	setColor(r: number, g: number, b: number, a?: number): void;

	/**
	 * Sets the color that will be used for the next add and set operations. Calling
	 * the function without arguments will clear the color.
	 *
	 *
	 * In version [[0.9.2]] and older, the global color set with
	 * love.graphics.setColor will not work on the SpriteBatch if any of the sprites
	 * has its own color.
	 *
	 */
	setColor(): void;

	/**
	 * Restricts the drawn sprites in the SpriteBatch to a subset of the total.
	 *
	 * @param start The index of the first sprite to draw. Index 1 corresponds to the first sprite added with SpriteBatch:add.
	 * @param count The number of sprites to draw.
	 */
	setDrawRange(start: number, count: number): void;

	/**
	 * Restricts the drawn sprites in the SpriteBatch to a subset of the total.
	 *
	 */
	setDrawRange(): void;

	/**
	 * Replaces the Image or Canvas used for the sprites.
	 *
	 * @param texture The new Image or Canvas to use for the sprites.
	 */
	setTexture(texture: Texture): void;

}
declare interface Text extends Drawable {
	/**
	 * Adds additional colored text to the Text object at the specified position.
	 *
	 * @param textstring The text to add to the object.
	 * @param x The position of the new text on the x-axis.
	 * @param y The position of the new text on the y-axis.
	 * @param angle The orientation of the new text in radians.
	 * @param sx Scale factor on the x-axis.
	 * @param sy Scale factor on the y-axis.
	 * @param ox Origin offset on the x-axis.
	 * @param oy Origin offset on the y-axis.
	 * @param kx Shearing / skew factor on the x-axis.
	 * @param ky Shearing / skew factor on the y-axis.
	 * @return {number} index, An index number that can be used with Text:getWidth or Text:getHeight.
	 */
	add(textstring: string, x?: number, y?: number, angle?: number, sx?: number, sy?: number, ox?: number, oy?: number, kx?: number, ky?: number): number;

	/**
	 * Adds additional colored text to the Text object at the specified position.
	 *
	 * @param coloredtext A table containing colors and strings to use as the new text, in the form of { color1, string1, color2, string2, ... }.
	 * @param x The position of the new text on the x-axis.
	 * @param y The position of the new text on the y-axis.
	 * @param angle The orientation of the new text in radians.
	 * @param sx Scale factor on the x-axis.
	 * @param sy Scale factor on the y-axis.
	 * @param ox Origin offset on the x-axis.
	 * @param oy Origin offset on the y-axis.
	 * @param kx Shearing / skew factor on the x-axis.
	 * @param ky Shearing / skew factor on the y-axis.
	 * @return {number} index, An index number that can be used with Text:getWidth or Text:getHeight.
	 */
	add(coloredtext: table, x?: number, y?: number, angle?: number, sx?: number, sy?: number, ox?: number, oy?: number, kx?: number, ky?: number): number;

	/**
	 * Adds additional formatted / colored text to the Text object at the specified
	 * position.
	 *
	 * @param textstring The text to add to the object.
	 * @param wraplimit The maximum width in pixels of the text before it gets automatically wrapped to a new line.
	 * @param align The alignment of the text.
	 * @param x The position of the new text on the x-axis.
	 * @param y The position of the new text on the y-axis.
	 * @param angle The orientation of the object in radians.
	 * @param sx Scale factor on the x-axis.
	 * @param sy Scale factor on the y-axis.
	 * @param ox Origin offset on the x-axis.
	 * @param oy Origin offset on the y-axis.
	 * @param kx Shearing / skew factor on the x-axis.
	 * @param ky Shearing / skew factor on the y-axis.
	 * @return {number} index, An index number that can be used with Text:getWidth or Text:getHeight.
	 */
	addf(textstring: string, wraplimit: number, align: AlignMode, x: number, y: number, angle?: number, sx?: number, sy?: number, ox?: number, oy?: number, kx?: number, ky?: number): number;

	/**
	 * Adds additional formatted / colored text to the Text object at the specified
	 * position.
	 *
	 * @param coloredtext A table containing colors and strings to use as the new text, in the form of { color1, string1, color2, string2, ... }.
	 * @param wraplimit The maximum width in pixels of the text before it gets automatically wrapped to a new line.
	 * @param align The alignment of the text.
	 * @param x The position of the new text on the x-axis.
	 * @param y The position of the new text on the y-axis.
	 * @param angle The orientation of the object in radians.
	 * @param sx Scale factor on the x-axis.
	 * @param sy Scale factor on the y-axis.
	 * @param ox Origin offset on the x-axis.
	 * @param oy Origin offset on the y-axis.
	 * @param kx Shearing / skew factor on the x-axis.
	 * @param ky Shearing / skew factor on the y-axis.
	 * @return {number} index, An index number that can be used with Text:getWidth or Text:getHeight.
	 */
	addf(coloredtext: table, wraplimit: number, align: AlignMode, x: number, y: number, angle?: number, sx?: number, sy?: number, ox?: number, oy?: number, kx?: number, ky?: number): number;

	/**
	 * Clears the contents of the Text object.
	 *
	 */
	clear(): void;

	/**
	 * Gets the width and height of the text in pixels.
	 *
	 * @return {number} width, The width of the text. If multiple sub-strings have been added with Text:add, the width of the last sub-string is returned.
	 * @return {number} height, The height of the text. If multiple sub-strings have been added with Text:add, the height of the last sub-string is returned.
	 */
	/** @TupleReturn */
	getDimensions(): [number, number];

	/**
	 * Gets the width and height of the text in pixels.
	 *
	 * @param index An index number returned by Text:add or Text:addf.
	 * @return {number} width, The width of the sub-string (before scaling and other transformations).
	 * @return {number} height, The height of the sub-string (before scaling and other transformations).
	 */
	/** @TupleReturn */
	getDimensions(index: number): [number, number];

	/**
	 * Gets the Font used with the Text object.
	 *
	 * @return {Font} font, The font used with this Text object.
	 */
	getFont(): Font;

	/**
	 * Gets the height of the text in pixels.
	 *
	 * @return {number} height, The height of the text. If multiple sub-strings have been added with Text:add, the height of the last sub-string is returned.
	 */
	getHeight(): number;

	/**
	 * Gets the height of the text in pixels.
	 *
	 * @param index An index number returned by Text:add or Text:addf.
	 * @return {number} height, The height of the sub-string (before scaling and other transformations).
	 */
	getHeight(index: number): number;

	/**
	 * Gets the width of the text in pixels.
	 *
	 * @return {number} width, The width of the text. If multiple sub-strings have been added with Text:add, the width of the last sub-string is returned.
	 */
	getWidth(): number;

	/**
	 * Gets the width of the text in pixels.
	 *
	 * @param index An index number returned by Text:add or Text:addf.
	 * @return {number} width, The width of the sub-string (before scaling and other transformations).
	 */
	getWidth(index: number): number;

	/**
	 * Replaces the contents of the Text object with a new unformatted string.
	 *
	 * @param textstring The new string of text to use.
	 */
	set(textstring: string): void;

	/**
	 * Replaces the contents of the Text object with a new unformatted string.
	 *
	 * @param coloredtext A table containing colors and strings to use as the new text, in the form of { color1, string1, color2, string2, ... }.
	 */
	set(coloredtext: table): void;

	/**
	 * Replaces the contents of the Text object with a new unformatted string.
	 *
	 */
	set(): void;

	/**
	 * Replaces the contents of the Text object with a new formatted string.
	 *
	 * @param textstring The new string of text to use.
	 * @param wraplimit The maximum width in pixels of the text before it gets automatically wrapped to a new line.
	 * @param align The alignment of the text.
	 */
	setf(textstring: string, wraplimit: number, align: AlignMode): void;

	/**
	 * Replaces the contents of the Text object with a new formatted string.
	 *
	 * @param coloredtext A table containing colors and strings to use as the new text, in the form of { color1, string1, color2, string2, ... }.
	 * @param wraplimit The maximum width in pixels of the text before it gets automatically wrapped to a new line.
	 * @param align The alignment of the text.
	 */
	setf(coloredtext: table, wraplimit: number, align: AlignMode): void;

	/**
	 * Replaces the contents of the Text object with a new formatted string.
	 *
	 */
	setf(): void;

	/**
	 * Replaces the Font used with the text.
	 *
	 * @param font The new font to use with this Text object.
	 */
	setFont(font: Font): void;

}
declare interface Texture extends Drawable {
	/**
	 * Gets the depth of a Volume Texture. Returns 1 for 2D, Cubemap, and Array
	 * textures.
	 *
	 * @return {number} depth, The depth of the volume Texture.
	 */
	getDepth(): number;

	/**
	 * Gets the PixelFormat of the Texture.
	 *
	 * @return {PixelFormat} format, The pixel format the Texture was created with.
	 */
	getFormat(): PixelFormat;

	/**
	 * Gets the number of layers / slices in an Array Texture. Returns 1 for 2D,
	 * Cubemap, and Volume textures.
	 *
	 * @return {number} layers, The number of layers in the Array Texture.
	 */
	getLayerCount(): number;

	/**
	 * Gets the number of mipmaps contained in the Texture. If the texture was not
	 * created with mipmaps, it will return 1.
	 *
	 * @return {number} mipmaps, The number of mipmaps in the Texture.
	 */
	getMipmapCount(): number;

	/**
	 * Gets the type of the Texture.
	 *
	 * @return {TextureType} texturetype, The type of the Texture.
	 */
	getTextureType(): TextureType;

	/**
	 * Gets whether the Texture can be drawn and sent to a Shader.
	 *
	 *
	 * Canvases created with stencil and/or depth PixelFormats are not readable by
	 * default, unless readable=true is specified in the settings table passed into
	 * love.graphics.newCanvas.
	 *
	 *
	 * Non-readable Canvases can still be rendered to.
	 *
	 * @return {boolean} readable, Whether the Texture is readable.
	 */
	isReadable(): boolean;

}
declare interface Video extends Drawable {
	/**
	 * Gets the width and height of the Video in pixels.
	 *
	 * @return {number} width, The width of the Video.
	 * @return {number} height, The height of the video.
	 */
	/** @TupleReturn */
	getDimensions(): [number, number];

	/**
	 * Gets the scaling filters used when drawing the Video.
	 *
	 * @return {FilterMode} min, The filter mode used when scaling the Video down.
	 * @return {FilterMode} mag, The filter mode used when scaling the Video up.
	 * @return {number} anisotropy, Maximum amount of anisotropic filtering used.
	 */
	/** @TupleReturn */
	getFilter(): [FilterMode, FilterMode, number];

	/**
	 * Gets the height of the Video in pixels.
	 *
	 * @return {number} height, The height of the Video.
	 */
	getHeight(): number;

	/**
	 * Gets the audio Source used for playing back the video's audio. May return nil
	 * if the video has no audio, or if Video:setSource is called with a nil argument.
	 *
	 * @return {Source} source, The audio Source used for audio playback, or nil if the video has no audio.
	 */
	getSource(): Source;

	/**
	 * Gets the VideoStream object used for decoding and controlling the video.
	 *
	 * @return {VideoStream} stream, The VideoStream used for decoding and controlling the video.
	 */
	getStream(): VideoStream;

	/**
	 * Gets the width of the Video in pixels.
	 *
	 * @return {number} width, The width of the Video.
	 */
	getWidth(): number;

	/**
	 * Gets whether the Video is currently playing.
	 *
	 * @return {boolean} playing, Whether the video is playing.
	 */
	isPlaying(): boolean;

	/**
	 * Pauses the Video.
	 *
	 */
	pause(): void;

	/**
	 * Starts playing the Video. In order for the video to appear onscreen it must be
	 * drawn with love.graphics.draw.
	 *
	 */
	play(): void;

	/**
	 * Rewinds the Video to the beginning.
	 *
	 */
	rewind(): void;

	/**
	 * Sets the current playback position of the Video.
	 *
	 * @param offset The time in seconds since the beginning of the Video.
	 */
	seek(offset: number): void;

	/**
	 * Sets the scaling filters used when drawing the Video.
	 *
	 * @param min The filter mode used when scaling the Video down.
	 * @param mag The filter mode used when scaling the Video up.
	 * @param anisotropy Maximum amount of anisotropic filtering used.
	 */
	setFilter(min: FilterMode, mag: FilterMode, anisotropy?: number): void;

	/**
	 * Sets the audio Source used for playing back the video's audio. The audio Source
	 * also controls playback speed and synchronization.
	 *
	 * @param source The audio Source used for audio playback, or nil to disable audio synchronization.
	 */
	setSource(source?: Source): void;

	/**
	 * Gets the current playback position of the Video.
	 *
	 * @param seconds The time in seconds since the beginning of the Video.
	 */
	tell(seconds: number): void;

}
declare interface CompressedImageData extends Data {
	/**
	 * Gets the width and height of the CompressedImageData.
	 *
	 * @return {number} width, The width of the CompressedImageData.
	 * @return {number} height, The height of the CompressedImageData.
	 */
	/** @TupleReturn */
	getDimensions(): [number, number];

	/**
	 * Gets the width and height of the CompressedImageData.
	 *
	 * @param level A mipmap level. Must be in the range of [1, CompressedImageData:getMipmapCount()].
	 * @return {number} width, The width of the CompressedImageData.
	 * @return {number} height, The height of the CompressedImageData.
	 */
	/** @TupleReturn */
	getDimensions(level: number): [number, number];

	/**
	 * Gets the format of the CompressedImageData.
	 *
	 * @return {CompressedImageFormat} format, The format of the CompressedImageData.
	 */
	getFormat(): CompressedImageFormat;

	/**
	 * Gets the height of the CompressedImageData.
	 *
	 * @return {number} height, The height of the CompressedImageData.
	 */
	getHeight(): number;

	/**
	 * Gets the height of the CompressedImageData.
	 *
	 * @param level A mipmap level. Must be in the range of [1,  CompressedImageData:getMipmapCount()].
	 * @return {number} height, The height of the CompressedImageData.
	 */
	getHeight(level: number): number;

	/**
	 * Gets the number of mipmap levels in the CompressedImageData. The base mipmap
	 * level (original image) is included in the count.
	 *
	 * @return {number} mipmaps, The number of mipmap levels stored in the CompressedImageData.
	 */
	getMipmapCount(): number;

	/**
	 * Gets the width of the CompressedImageData.
	 *
	 * @return {number} width, The width of the CompressedImageData.
	 */
	getWidth(): number;

	/**
	 * Gets the width of the CompressedImageData.
	 *
	 * @param level A mipmap level. Must be in the range of [1, CompressedImageData:getMipmapCount()].
	 * @return {number} width, The width of the CompressedImageData.
	 */
	getWidth(level: number): number;

}
declare interface ImageData extends Data {
	/**
	 * Encodes the ImageData and optionally writes it to the save directory.
	 *
	 * @param format The format to encode the image as.
	 * @param filename The filename to write the file to. If nil, no file will be written but the FileData will still be returned.
	 * @return {FileData} filedata, The encoded image as a new FileData object.
	 */
	encode(format: ImageFormat, filename?: string): FileData;

	/**
	 * Gets the width and height of the ImageData in pixels.
	 *
	 * @return {number} width, The width of the ImageData in pixels.
	 * @return {number} height, The height of the ImageData in pixels.
	 */
	/** @TupleReturn */
	getDimensions(): [number, number];

	/**
	 * Gets the height of the ImageData in pixels.
	 *
	 * @return {number} height, The height of the ImageData in pixels.
	 */
	getHeight(): number;

	/**
	 * Gets the color of a pixel at a specific position in the image.
	 *
	 *
	 * Valid x and y values start at 0 and go up to image width and height minus 1.
	 * Non-integer values are floored.
	 *
	 * @param x The position of the pixel on the x-axis.
	 * @param y The position of the pixel on the y-axis.
	 * @return {number} r, The red component (0-255).
	 * @return {number} g, The green component (0-255).
	 * @return {number} b, The blue component (0-255).
	 * @return {number} a, The alpha component (0-255).
	 */
	/** @TupleReturn */
	getPixel(x: number, y: number): [number, number, number, number];

	/**
	 * Gets the width of the ImageData in pixels.
	 *
	 * @return {number} width, The width of the ImageData in pixels.
	 */
	getWidth(): number;

	/**
	 * Transform an image by applying a function to every pixel.
	 *
	 *
	 * This function is a higher order function. It takes another function as a
	 * parameter, and calls it once for each pixel in the ImageData.
	 *
	 *
	 * The function parameter is called with six parameters for each pixel in turn.
	 * The parameters are numbers that represent the x and y coordinates of the pixel
	 * and its red, green, blue and alpha values. The function parameter can return up
	 * to four number values, which become the new r, g, b and a values of the pixel.
	 * If the function returns fewer values, the remaining components are set to 0.
	 *
	 * @param pixelFunction Function parameter to apply to every pixel.
	 */
	mapPixel(pixelFunction: Function): void;

	/**
	 * Paste into ImageData from another source ImageData.
	 *
	 * @param source Source ImageData from which to copy.
	 * @param dx Destination top-left position on x-axis.
	 * @param dy Destination top-left position on y-axis.
	 * @param sx Source top-left position on x-axis.
	 * @param sy Source top-left position on y-axis.
	 * @param sw Source width.
	 * @param sh Source height.
	 */
	paste(source: ImageData, dx: number, dy: number, sx: number, sy: number, sw: number, sh: number): void;

	/**
	 * Sets the color of a pixel at a specific position in the image.
	 *
	 *
	 * Valid x and y values start at 0 and go up to image width and height minus 1.
	 *
	 * @param x The position of the pixel on the x-axis.
	 * @param y The position of the pixel on the y-axis.
	 * @param r The red component (0-255).
	 * @param g The green component (0-255).
	 * @param b The blue component (0-255).
	 * @param a The alpha component (0-255).
	 */
	setPixel(x: number, y: number, r: number, g: number, b: number, a: number): void;

}
declare interface Joystick extends Object {
	/**
	 * Gets the direction of each axis.
	 *
	 * @return {number} axisDir1, Direction of axis1.
	 * @return {number} axisDir2, Direction of axis2.
	 * @return {number} axisDirN, Direction of axisN.
	 */
	/** @TupleReturn */
	getAxes(): [number, number, number];

	/**
	 * Gets the direction of an axis.
	 *
	 * @param axis The index of the axis to be checked.
	 * @return {number} direction, Current value of the axis.
	 */
	getAxis(axis: number): number;

	/**
	 * Gets the number of axes on the joystick.
	 *
	 * @return {number} axes, The number of axes available.
	 */
	getAxisCount(): number;

	/**
	 * Gets the number of buttons on the joystick.
	 *
	 * @return {number} buttons, The number of buttons available.
	 */
	getButtonCount(): number;

	/**
	 * Gets a stable GUID unique to the type of the physical joystick which does not
	 * change over time. For example, all Sony Dualshock 3 controllers in OS X have
	 * the same GUID. The value is platform-dependent.
	 *
	 * @return {string} guid, The Joystick type's OS-dependent unique identifier.
	 */
	getGUID(): string;

	/**
	 * Gets the direction of a virtual gamepad axis. If the Joystick isn't recognized
	 * as a gamepad or isn't connected, this function will always return 0.
	 *
	 * @param axis The virtual axis to be checked.
	 * @return {number} direction, Current value of the axis.
	 */
	getGamepadAxis(axis: GamepadAxis): number;

	/**
	 * Gets the button, axis or hat that a virtual gamepad input is bound to.
	 *
	 * @param axis The virtual gamepad axis to get the binding for.
	 * @return {JoystickInputType} inputtype, The type of input the virtual gamepad axis is bound to.
	 * @return {number} inputindex, The index of the Joystick's button, axis or hat that the virtual gamepad axis is bound to.
	 * @return {JoystickHat} hatdirection, The direction of the hat, if the virtual gamepad axis is bound to a hat. nil otherwise.
	 */
	/** @TupleReturn */
	getGamepadMapping(axis: GamepadAxis): [JoystickInputType, number, JoystickHat];

	/**
	 * Gets the button, axis or hat that a virtual gamepad input is bound to.
	 *
	 * @param button The virtual gamepad button to get the binding for.
	 * @return {JoystickInputType} inputtype, The type of input the virtual gamepad button is bound to.
	 * @return {number} inputindex, The index of the Joystick's button, axis or hat that the virtual gamepad button is bound to.
	 * @return {JoystickHat} hatdirection, The direction of the hat, if the virtual gamepad button is bound to a hat. nil otherwise.
	 */
	/** @TupleReturn */
	getGamepadMapping(button: GamepadAxis): [JoystickInputType, number, JoystickHat];

	/**
	 * Gets the direction of the Joystick's hat.
	 *
	 * @param hat The index of the hat to be checked.
	 * @return {JoystickHat} direction, The direction the hat is pushed.
	 */
	getHat(hat: number): JoystickHat;

	/**
	 * Gets the number of hats on the joystick.
	 *
	 * @return {number} hats, How many hats the joystick has.
	 */
	getHatCount(): number;

	/**
	 * Gets the joystick's unique identifier. The identifier will remain the same for
	 * the life of the game, even when the Joystick is disconnected and reconnected,
	 * but it will change when the game is re-launched.
	 *
	 * @return {number} id, The Joystick's unique identifier. Remains the same as long as the game is running.
	 * @return {number} instanceid, Unique instance identifier. Changes every time the Joystick is reconnected. nil if the Joystick is not connected.
	 */
	/** @TupleReturn */
	getID(): [number, number];

	/**
	 * Gets the name of the joystick.
	 *
	 * @return {string} name, The name of the joystick.
	 */
	getName(): string;

	/**
	 * Gets the current vibration motor strengths on a Joystick with rumble support.
	 *
	 * @return {number} left, Current strength of the left vibration motor on the Joystick.
	 * @return {number} right, Current strength of the right vibration motor on the Joystick.
	 */
	/** @TupleReturn */
	getVibration(): [number, number];

	/**
	 * Gets whether the Joystick is connected.
	 *
	 * @return {boolean} connected, True if the Joystick is currently connected, false otherwise.
	 */
	isConnected(): boolean;

	/**
	 * Checks if a button on the Joystick is pressed.
	 *
	 *
	 * LÖVE 0.9.0 had a bug which required the button indices passed to
	 * Joystick:isDown to be 0-based instead of 1-based, for example button 1 would be
	 * 0 for this function. It was fixed in 0.9.1.
	 *
	 * @param ... The index of a button to check.
	 * @return {boolean} anyDown, True if any supplied button is down, false if not.
	 */
	isDown(...vararg: number[]): boolean;

	/**
	 * Gets whether the Joystick is recognized as a gamepad. If this is the case, the
	 * Joystick's buttons and axes can be used in a standardized manner across
	 * different operating systems and joystick models via Joystick:getGamepadAxis and
	 * related functions.
	 *
	 *
	 * LÖVE automatically recognizes most popular controllers with a similar layout
	 * to the Xbox 360 controller as gamepads, but you can add more with
	 * love.joystick.setGamepadMapping.
	 *
	 * @return {boolean} isgamepad, True if the Joystick is recognized as a gamepad, false otherwise.
	 */
	isGamepad(): boolean;

	/**
	 * Checks if a virtual gamepad button on the Joystick is pressed. If the Joystick
	 * is not recognized as a Gamepad or isn't connected, then this function will
	 * always return false.
	 *
	 * @param ... The gamepad button to check.
	 * @return {boolean} anyDown, True if any supplied button is down, false if not.
	 */
	isGamepadDown(...vararg: GamepadButton[]): boolean;

	/**
	 * Gets whether the Joystick supports vibration.
	 *
	 * @return {boolean} supported, True if rumble / force feedback vibration is supported on this Joystick, false if not.
	 */
	isVibrationSupported(): boolean;

	/**
	 * Sets the vibration motor speeds on a Joystick with rumble support.
	 *
	 * @param left Strength of the left vibration motor on the Joystick. Must be in the range of [0, 1].
	 * @param right Strength of the right vibration motor on the Joystick. Must be in the range of [0, 1].
	 * @return {boolean} success, True if the vibration was successfully applied, false if not.
	 */
	setVibration(left: number, right: number): boolean;

	/**
	 * Sets the vibration motor speeds on a Joystick with rumble support.
	 *
	 * @return {boolean} success, True if the vibration was successfully disabled, false if not.
	 */
	setVibration(): boolean;

	/**
	 * Sets the vibration motor speeds on a Joystick with rumble support.
	 *
	 * @param left Strength of the left vibration motor on the Joystick. Must be in the range of [0, 1].
	 * @param right Strength of the right vibration motor on the Joystick. Must be in the range of [0, 1].
	 * @param duration The duration of the vibration in seconds. A negative value means infinite duration.
	 * @return {boolean} success, True if the vibration was successfully applied, false if not.
	 */
	setVibration(left: number, right: number, duration: number): boolean;

}
declare interface BezierCurve extends Object {
	/**
	 * Evaluate Bézier curve at parameter t. The parameter must be between 0 and 1
	 * (inclusive).
	 *
	 *
	 * This function can be used to move objects along paths or tween parameters.
	 * However it should not be used to render the curve, see BezierCurve:render for
	 * that purpose.
	 *
	 * @param t Where to evaluate the curve.
	 * @return {number} x, x coordinate of the curve at parameter t.
	 * @return {number} y, y coordinate of the curve at parameter t.
	 */
	/** @TupleReturn */
	evaluate(t: number): [number, number];

	/**
	 * Get coordinates of the i-th control point. Indices start with 1.
	 *
	 * @param i Index of the control point.
	 * @return {number} x, Position of the control point along the x axis.
	 * @return {number} y, Position of the control point along the y axis.
	 */
	/** @TupleReturn */
	getControlPoint(i: number): [number, number];

	/**
	 * Get the number of control points in the Bézier curve.
	 *
	 * @return {number} count, The number of control points.
	 */
	getControlPointCount(): number;

	/**
	 * Get degree of the Bézier curve. The degree is equal to
	 * number-of-control-points - 1.
	 *
	 * @return {number} degree, Degree of the Bézier curve.
	 */
	getDegree(): number;

	/**
	 * Get the derivative of the Bézier curve.
	 *
	 *
	 * This function can be used to rotate sprites moving along a curve in the
	 * direction of the movement and compute the direction perpendicular to the curve
	 * at some parameter t.
	 *
	 * @return {BezierCurve} derivative, The derivative curve.
	 */
	getDerivative(): BezierCurve;

	/**
	 * Gets a BezierCurve that corresponds to the specified segment of this
	 * BezierCurve.
	 *
	 * @param startpoint The starting point along the curve. Must be between 0 and 1.
	 * @param endpoint The end of the segment. Must be between 0 and 1.
	 * @return {BezierCurve} curve, A BezierCurve that corresponds to the specified segment.
	 */
	getSegment(startpoint: number, endpoint: number): BezierCurve;

	/**
	 * Insert control point as the new i-th control point. Existing control points
	 * from i onwards are pushed back by 1. Indices start with 1. Negative indices
	 * wrap around: -1 is the last control point, -2 the one before the last, etc.
	 *
	 * @param x Position of the control point along the x axis.
	 * @param y Position of the control point along the y axis.
	 * @param i Index of the control point.
	 */
	insertControlPoint(x: number, y: number, i?: number): void;

	/**
	 * Removes the specified control point.
	 *
	 * @param index The index of the control point to remove.
	 */
	removeControlPoint(index: number): void;

	/**
	 * Get a list of coordinates to be used with love.graphics.line.
	 *
	 *
	 * This function samples the Bézier curve using recursive subdivision. You can
	 * control the recursion depth using the depth parameter.
	 *
	 *
	 * If you are just interested to know the position on the curve given a parameter,
	 * use BezierCurve:evaluate.
	 *
	 * @param depth Number of recursive subdivision steps.
	 * @return {table} coordinates, List of x,y-coordinate pairs of points on the curve.
	 */
	render(depth?: number): table;

	/**
	 * Get a list of coordinates on a specific part of the curve, to be used with
	 * love.graphics.line.
	 *
	 *
	 * This function samples the Bézier curve using recursive subdivision. You can
	 * control the recursion depth using the depth parameter.
	 *
	 *
	 * If you are just need to know the position on the curve given a parameter, use
	 * BezierCurve:evaluate.
	 *
	 * @param startpoint The starting point along the curve. Must be between 0 and 1.
	 * @param endpoint The end of the segment to render. Must be between 0 and 1.
	 * @param depth Number of recursive subdivision steps.
	 * @return {table} coordinates, List of x,y-coordinate pairs of points on the curve.
	 */
	renderSegment(startpoint: number, endpoint: number, depth?: number): table;

	/**
	 * Rotate the Bézier curve by an angle.
	 *
	 * @param angle Rotation angle in radians.
	 * @param ox X coordinate of the rotation center.
	 * @param oy Y coordinate of the rotation center.
	 */
	rotate(angle: number, ox?: number, oy?: number): void;

	/**
	 * Scale the Bézier curve by a factor.
	 *
	 * @param s Scale factor.
	 * @param ox X coordinate of the scaling center.
	 * @param oy Y coordinate of the scaling center.
	 */
	scale(s: number, ox?: number, oy?: number): void;

	/**
	 * Set coordinates of the i-th control point. Indices start with 1.
	 *
	 * @param i Index of the control point.
	 * @param ox Position of the control point along the x axis.
	 * @param oy Position of the control point along the y axis.
	 */
	setControlPoint(i: number, ox: number, oy: number): void;

	/**
	 * Move the Bézier curve by an offset.
	 *
	 * @param dx Offset along the x axis.
	 * @param dy Offset along the y axis.
	 */
	translate(dx: number, dy: number): void;

}
declare interface CompressedData extends Data {
	/**
	 * Gets the compression format of the CompressedData.
	 *
	 * @return {CompressedDataFormat} format, The format of the CompressedData.
	 */
	getFormat(): CompressedDataFormat;

}
declare interface RandomGenerator extends Object {
	/**
	 * Gets the state of the random number generator.
	 *
	 *
	 * The state is split into two numbers due to Lua's use of doubles for all number
	 * values - doubles can't accurately represent integer values above 2^53.
	 *
	 * @return {number} low, Integer number representing the lower 32 bits of the random number generator's 64 bit state value.
	 * @return {number} high, Integer number representing the higher 32 bits of the random number generator's 64 bit state value.
	 */
	/** @TupleReturn */
	getSeed(): [number, number];

	/**
	 * Gets the current state of the random number generator. This returns an opaque
	 * implementation-dependent string which is only useful for later use with
	 * RandomGenerator:setState.
	 *
	 *
	 * This is different from RandomGenerator:getSeed in that getState gets the
	 * RandomGenerator's current state, whereas getSeed gets the previously set seed
	 * number.
	 *
	 *
	 * The value of the state string does not depend on the current operating system.
	 *
	 * @return {string} state, The current state of the RandomGenerator object, represented as a string.
	 */
	getState(): string;

	/**
	 * Generates a pseudo-random number in a platform independent manner.
	 *
	 * @return {number} number, The pseudo random number.
	 */
	random(): number;

	/**
	 * Generates a pseudo-random number in a platform independent manner.
	 *
	 * @param max The maximum possible value it should return.
	 * @return {number} number, The pseudo-random integer number.
	 */
	random(max: number): number;

	/**
	 * Generates a pseudo-random number in a platform independent manner.
	 *
	 * @param min The minimum possible value it should return.
	 * @param max The maximum possible value it should return.
	 * @return {number} number, The pseudo-random integer number.
	 */
	random(min: number, max: number): number;

	/**
	 * Get a normally distributed pseudo random number.
	 *
	 * @param stddev Standard deviation of the distribution.
	 * @param mean The mean of the distribution.
	 * @return {number} number, Normally distributed random number with variance (stddev)² and the specified mean.
	 */
	randomNormal(stddev?: number, mean?: number): number;

	/**
	 * Sets the seed of the random number generator using the specified integer
	 * number.
	 *
	 * @param seed The integer number with which you want to seed the randomization. Must be within the range of [1, 2^53].
	 */
	setSeed(seed: number): void;

	/**
	 * Sets the seed of the random number generator using the specified integer
	 * number.
	 *
	 * @param low The lower 32 bits of the state value. Must be within the range of [0, 2^32 - 1].
	 * @param high The higher 32 bits of the state value. Must be within the range of [0, 2^32 - 1].
	 */
	setSeed(low: number, high?: number): void;

	/**
	 * Sets the current state of the random number generator. The value used as an
	 * argument for this function is an opaque implementation-dependent string and
	 * should only originate from a previous call to RandomGenerator:getState.
	 *
	 *
	 * This is different from RandomGenerator:setSeed in that setState directly sets
	 * the RandomGenerator's current implementation-dependent state, whereas setSeed
	 * gives it a new seed value.
	 *
	 *
	 * The effect of the state string does not depend on the current operating system.
	 *
	 * @param state The new state of the RandomGenerator object, represented as a string. This should originate from a previous call to RandomGenerator:getState.
	 */
	setState(state: string): void;

}
declare interface Transform extends Object {
	/**
	 * Applies the given other Transform object to this one.
	 *
	 * @param other The other Transform object to apply to this Transform.
	 * @return {Transform} transform, The Transform object the method was called on. Allows easily chaining Transform methods.
	 */
	apply(other: Transform): Transform;

	/**
	 * Creates a new copy of this Transform.
	 *
	 * @return {Transform} clone, The copy of this Transform.
	 */
	clone(): Transform;

	/**
	 * Gets the internal 4x4 transformation matrix stored by this Transform. The
	 * matrix is returned in row-major order.
	 *
	 * @return {number} e1_1, The first column of the first row of the matrix.
	 * @return {number} e1_2, The second column of the first row of the matrix.
	 * @return {number} ..., Additional matrix elements.
	 * @return {number} e4_4, The fourth column of the fourth row of the matrix.
	 */
	/** @TupleReturn */
	getMatrix(): [number, number, number, number];

	/**
	 * Creates a new Transform containing the inverse of this Transform.
	 *
	 * @return {Transform} inverse, A new Transform object representing the inverse of this Transform's matrix.
	 */
	inverse(): Transform;

	/**
	 * Applies the reverse of the Transform object's transformation to the given 2D
	 * position.
	 *
	 *
	 * This effectively converts the given position from the local coordinate space of
	 * the Transform into global coordinates.
	 *
	 *
	 * One use of this method can be to convert a screen-space mouse position into
	 * global world coordinates, if the given Transform has transformations applied
	 * that are used for a camera system in-game.
	 *
	 * @param localX The x component of the position with the transform applied.
	 * @param localY The y component of the position with the transform applied.
	 * @return {number} globalX, The x component of the position in global coordinates.
	 * @return {number} globalY, The y component of the position in global coordinates.
	 */
	/** @TupleReturn */
	inverseTransformPoint(localX: number, localY: number): [number, number];

	/**
	 * Resets the Transform to an identity state. All previously applied
	 * transformations are erased.
	 *
	 * @return {Transform} transform, The Transform object the method was called on. Allows easily chaining Transform methods.
	 */
	reset(): Transform;

	/**
	 * Applies a rotation to the Transform's coordinate system. This method does not
	 * reset any previously applied transformations.
	 *
	 * @param angle The relative angle in radians to rotate this Transform by.
	 * @return {Transform} transform, The Transform object the method was called on. Allows easily chaining Transform methods.
	 */
	rotate(angle: number): Transform;

	/**
	 * Scales the Transform's coordinate system. This method does not reset any
	 * previously applied transformations.
	 *
	 * @param sx The relative scale factor along the x-axis.
	 * @param sy The relative scale factor along the y-axis.
	 * @return {Transform} transform, The Transform object the method was called on. Allows easily chaining Transform methods.
	 */
	scale(sx: number, sy: number): Transform;

	/**
	 * Directly sets the Transform's internal 4x4 transformation matrix.
	 *
	 * @param e1_1 The first column of the first row of the matrix.
	 * @param e1_2 The second column of the first row of the matrix.
	 * @param ... Additional matrix elements.
	 * @return {Transform} transform, The Transform object the method was called on. Allows easily chaining Transform methods.
	 */
	setMatrix(e1_1: number, e1_2: number, ...vararg: number[]): Transform;

	/**
	 * Directly sets the Transform's internal 4x4 transformation matrix.
	 *
	 * @param layout How to interpret the matrix element arguments (row-major or column-major).
	 * @param e1_1 The first column of the first row of the matrix.
	 * @param e1_2 The second column of the first row of the matrix.
	 * @param e4_4 The fourth column of the fourth row of the matrix.
	 * @return {Transform} transform, The Transform object the method was called on. Allows easily chaining Transform methods.
	 */
	setMatrix(layout: MatrixLayout, e1_1: number, e1_2: number, e4_4: number): Transform;

	/**
	 * Directly sets the Transform's internal 4x4 transformation matrix.
	 *
	 * @param layout How to interpret the matrix element arguments (row-major or column-major).
	 * @param matrix A flat table containing the 16 matrix elements.
	 * @return {Transform} transform, The Transform object the method was called on. Allows easily chaining Transform methods.
	 */
	setMatrix(layout: MatrixLayout, matrix: table): Transform;

	/**
	 * Directly sets the Transform's internal 4x4 transformation matrix.
	 *
	 * @param layout How to interpret the matrix element arguments (row-major or column-major).
	 * @param matrix A table of 4 tables, with each sub-table containing 4 matrix elements.
	 * @return {Transform} transform, The Transform object the method was called on. Allows easily chaining Transform methods.
	 */
	setMatrix(layout: MatrixLayout, matrix: table): Transform;

	/**
	 * Resets the Transform to the specified transformation parameters.
	 *
	 * @param x The position of the Transform on the x-axis.
	 * @param y The position of the Transform on the y-axis.
	 * @param angle The orientation of the Transform in radians.
	 * @param sx Scale factor on the x-axis.
	 * @param sy Scale factor on the y-axis.
	 * @param ox Origin offset on the x-axis.
	 * @param oy Origin offset on the y-axis.
	 * @param kx Shearing / skew factor on the x-axis.
	 * @param ky Shearing / skew factor on the y-axis.
	 * @return {Transform} transform, The Transform object the method was called on. Allows easily chaining Transform methods.
	 */
	setTransformation(x: number, y: number, angle?: number, sx?: number, sy?: number, ox?: number, oy?: number, kx?: number, ky?: number): Transform;

	/**
	 * Applies a shear factor (skew) to the Transform's coordinate system. This method
	 * does not reset any previously applied transformations.
	 *
	 * @param kx The shear factor along the x-axis.
	 * @param ky The shear factor along the y-axis.
	 * @return {Transform} transform, The Transform object the method was called on. Allows easily chaining Transform methods.
	 */
	shear(kx: number, ky: number): Transform;

	/**
	 * Applies the Transform object's transformation to the given 2D position.
	 *
	 *
	 * This effectively converts the given position from global coordinates into the
	 * local coordinate space of the Transform.
	 *
	 * @param globalX The x component of the position in global coordinates.
	 * @param globalY The y component of the position in global coordinates.
	 * @return {number} localX, The x component of the position with the transform applied.
	 * @return {number} localY, The y component of the position with the transform applied.
	 */
	/** @TupleReturn */
	transformPoint(globalX: number, globalY: number): [number, number];

	/**
	 * Applies a translation to the Transform's coordinate system. This method does
	 * not reset any previously applied transformations.
	 *
	 * @param dx The relative translation along the x-axis.
	 * @param dy The relative translation along the y-axis.
	 * @return {Transform} transform, The Transform object the method was called on. Allows easily chaining Transform methods.
	 */
	translate(dx: number, dy: number): Transform;

}
declare interface Cursor extends Object {
	/**
	 * Gets the type of the Cursor.
	 *
	 * @return {CursorType} cursortype, The type of the Cursor.
	 */
	getType(): CursorType;

}
declare interface Body extends Object {
	/**
	 * Applies an angular impulse to a body. This makes a single, instantaneous
	 * addition to the body momentum.
	 *
	 *
	 * A body with with a larger mass will react less. The reaction does not depend on
	 * the timestep, and is equivalent to applying a force continuously for 1 second.
	 * Impulses are best used to give a single push to a body. For a continuous push
	 * to a body it is better to use Body:applyForce.
	 *
	 * @param impulse The impulse in kilogram-square meter per second.
	 */
	applyAngularImpulse(impulse: number): void;

	/**
	 * Apply force to a Body.
	 *
	 *
	 * A force pushes a body in a direction. A body with with a larger mass will react
	 * less. The reaction also depends on how long a force is applied: since the force
	 * acts continuously over the entire timestep, a short timestep will only push the
	 * body for a short time. Thus forces are best used for many timesteps to give a
	 * continuous push to a body (like gravity). For a single push that is independent
	 * of timestep, it is better to use Body:applyLinearImpulse.
	 *
	 *
	 * If the position to apply the force is not given, it will act on the center of
	 * mass of the body. The part of the force not directed towards the center of mass
	 * will cause the body to spin (and depends on the rotational inertia).
	 *
	 *
	 * Note that the force components and position must be given in world coordinates.
	 *
	 * @param fx The x component of force to apply to the center of mass.
	 * @param fy The y component of force to apply to the center of mass.
	 */
	applyForce(fx: number, fy: number): void;

	/**
	 * Apply force to a Body.
	 *
	 *
	 * A force pushes a body in a direction. A body with with a larger mass will react
	 * less. The reaction also depends on how long a force is applied: since the force
	 * acts continuously over the entire timestep, a short timestep will only push the
	 * body for a short time. Thus forces are best used for many timesteps to give a
	 * continuous push to a body (like gravity). For a single push that is independent
	 * of timestep, it is better to use Body:applyLinearImpulse.
	 *
	 *
	 * If the position to apply the force is not given, it will act on the center of
	 * mass of the body. The part of the force not directed towards the center of mass
	 * will cause the body to spin (and depends on the rotational inertia).
	 *
	 *
	 * Note that the force components and position must be given in world coordinates.
	 *
	 * @param fx The x component of force to apply.
	 * @param fy The y component of force to apply.
	 * @param x The x position to apply the force.
	 * @param y The y position to apply the force.
	 */
	applyForce(fx: number, fy: number, x: number, y: number): void;

	/**
	 * Applies an impulse to a body. This makes a single, instantaneous addition to
	 * the body momentum.
	 *
	 *
	 * An impulse pushes a body in a direction. A body with with a larger mass will
	 * react less. The reaction does not depend on the timestep, and is equivalent to
	 * applying a force continuously for 1 second. Impulses are best used to give a
	 * single push to a body. For a continuous push to a body it is better to use
	 * Body:applyForce.
	 *
	 *
	 * If the position to apply the impulse is not given, it will act on the center of
	 * mass of the body. The part of the impulse not directed towards the center of
	 * mass will cause the body to spin (and depends on the rotational inertia).
	 *
	 *
	 * Note that the impulse components and position must be given in world
	 * coordinates.
	 *
	 * @param ix The x component of the impulse applied to the center of mass.
	 * @param iy The y component of the impulse applied to the center of mass.
	 */
	applyLinearImpulse(ix: number, iy: number): void;

	/**
	 * Applies an impulse to a body. This makes a single, instantaneous addition to
	 * the body momentum.
	 *
	 *
	 * An impulse pushes a body in a direction. A body with with a larger mass will
	 * react less. The reaction does not depend on the timestep, and is equivalent to
	 * applying a force continuously for 1 second. Impulses are best used to give a
	 * single push to a body. For a continuous push to a body it is better to use
	 * Body:applyForce.
	 *
	 *
	 * If the position to apply the impulse is not given, it will act on the center of
	 * mass of the body. The part of the impulse not directed towards the center of
	 * mass will cause the body to spin (and depends on the rotational inertia).
	 *
	 *
	 * Note that the impulse components and position must be given in world
	 * coordinates.
	 *
	 * @param ix The x component of the impulse.
	 * @param iy The y component of the impulse.
	 * @param x The x position to apply the impulse.
	 * @param y The y position to apply the impulse.
	 */
	applyLinearImpulse(ix: number, iy: number, x: number, y: number): void;

	/**
	 * Apply torque to a body.
	 *
	 *
	 * Torque is like a force that will change the angular velocity (spin) of a body.
	 * The effect will depend on the rotational inertia a body has.
	 *
	 * @param torque The torque to apply.
	 */
	applyTorque(torque: number): void;

	/**
	 * Explicitly destroys the Body. When you don't have time to wait for garbage
	 * collection, this function may be used to free the object immediately, but note
	 * that an error will occur if you attempt to use the object after calling this
	 * function.
	 *
	 */
	destroy(): void;

	/**
	 * Get the angle of the body.
	 *
	 *
	 * The angle is measured in radians. If you need to transform it to degrees, use
	 * math.deg.
	 *
	 *
	 * A value of 0 radians will mean "looking to the right". Although radians
	 * increase counter-clockwise, the y-axis points down so it becomes clockwise from
	 * our point of view.
	 *
	 * @return {number} angle, The angle in radians.
	 */
	getAngle(): number;

	/**
	 * Gets the Angular damping of the Body
	 *
	 *
	 * The angular damping is the rate of decrease of the angular velocity over time:
	 * A spinning body with no damping and no external forces will continue spinning
	 * indefinitely. A spinning body with damping will gradually stop spinning.
	 *
	 *
	 * Damping is not the same as friction - they can be modelled together. However,
	 * only damping is provided by Box2D (and LÖVE).
	 *
	 *
	 * Damping parameters should be between 0 and infinity, with 0 meaning no damping,
	 * and infinity meaning full damping. Normally you will use a damping value
	 * between 0 and 0.1.
	 *
	 * @return {number} damping, The value of the angular damping.
	 */
	getAngularDamping(): number;

	/**
	 * Get the angular velocity of the Body.
	 *
	 *
	 * The angular velocity is the rate of change of angle over time.
	 *
	 *
	 * It is changed in World:update by applying torques, off centre forces/impulses,
	 * and angular damping. It can be set directly with Body:setAngularVelocity.
	 *
	 *
	 * If you need the rate of change of position over time, use
	 * Body:getLinearVelocity.
	 *
	 * @return {number} w, The angular velocity in radians/second.
	 */
	getAngularVelocity(): number;

	/**
	 * Gets a list of all Contacts attached to the Body.
	 *
	 * @return {table} contacts, A list with all contacts associated with the Body.
	 */
	getContactList(): table;

	/**
	 * @deprecated renamed to Body.getFixtures()
	 * Returns a table with all fixtures.
	 *
	 * @return {table} fixtures, A sequence with all fixtures.
	 */
	getFixtureList(): table;

	/**
	 * Returns a table with all fixtures.
	 *
	 * @return {table} fixtures, A sequence with all fixtures.
	 */
	getFixtures(): table;

	/**
	 * Returns the gravity scale factor.
	 *
	 * @return {number} scale, The gravity scale factor.
	 */
	getGravityScale(): number;

	/**
	 * Gets the rotational inertia of the body.
	 *
	 *
	 * The rotational inertia is how hard is it to make the body spin.
	 *
	 * @return {number} inertia, The rotational inertial of the body.
	 */
	getInertia(): number;

	/**
	 * Returns a table containing the Joints attached to this Body.
	 *
	 * @return {table} joints, A sequence with the Joints attached to the Body.
	 */
	getJointList(): table;

	/**
	 * Gets the linear damping of the Body.
	 *
	 *
	 * The linear damping is the rate of decrease of the linear velocity over time. A
	 * moving body with no damping and no external forces will continue moving
	 * indefinitely, as is the case in space. A moving body with damping will
	 * gradually stop moving.
	 *
	 *
	 * Damping is not the same as friction - they can be modelled together. However,
	 * only damping is provided by Box2D (and LÖVE).
	 *
	 * @return {number} damping, The value of the linear damping.
	 */
	getLinearDamping(): number;

	/**
	 * Gets the linear velocity of the Body from its center of mass.
	 *
	 *
	 * The linear velocity is the rate of change of position over time.
	 *
	 *
	 * If you need the rate of change of angle over time, use Body:getAngularVelocity.
	 * If you need to get the linear velocity of a point different from the center of
	 * mass:
	 *
	 *
	 * Body:getLinearVelocityFromLocalPoint allows you to specify the point in local
	 * coordinates.
	 *
	 *
	 * Body:getLinearVelocityFromWorldPoint allows you to specify the point in world
	 * coordinates.
	 *
	 * @return {number} x, The x component of the velocity vector.
	 * @return {number} y, The y component of the velocity vector.
	 */
	/** @TupleReturn */
	getLinearVelocity(): [number, number];

	/**
	 * Get the linear velocity of a point on the body.
	 *
	 *
	 * The linear velocity for a point on the body is the velocity of the body center
	 * of mass plus the velocity at that point from the body spinning.
	 *
	 *
	 * The point on the body must given in local coordinates. Use
	 * Body:getLinearVelocityFromWorldPoint to specify this with world coordinates.
	 *
	 * @param x The x position to measure velocity.
	 * @param y The y position to measure velocity.
	 * @return {number} vx, The x component of velocity at point (x,y).
	 * @return {number} vy, The y component of velocity at point (x,y).
	 */
	/** @TupleReturn */
	getLinearVelocityFromLocalPoint(x: number, y: number): [number, number];

	/**
	 * Get the linear velocity of a point on the body.
	 *
	 *
	 * The linear velocity for a point on the body is the velocity of the body center
	 * of mass plus the velocity at that point from the body spinning.
	 *
	 *
	 * The point on the body must given in world coordinates. Use
	 * Body:getLinearVelocityFromLocalPoint to specify this with local coordinates.
	 *
	 * @param x The x position to measure velocity.
	 * @param y The y position to measure velocity.
	 * @return {number} vx, The x component of velocity at point (x,y).
	 * @return {number} vy, The y component of velocity at point (x,y).
	 */
	/** @TupleReturn */
	getLinearVelocityFromWorldPoint(x: number, y: number): [number, number];

	/**
	 * Get the center of mass position in local coordinates.
	 *
	 *
	 * Use Body:getWorldCenter to get the center of mass in world coordinates.
	 *
	 * @return {number} x, The x coordinate of the center of mass.
	 * @return {number} y, The y coordinate of the center of mass.
	 */
	/** @TupleReturn */
	getLocalCenter(): [number, number];

	/**
	 * Transform a point from world coordinates to local coordinates.
	 *
	 * @param worldX The x position in world coordinates.
	 * @param worldY The y position in world coordinates.
	 * @return {number} localX, The x position in local coordinates.
	 * @return {number} localY, The y position in local coordinates.
	 */
	/** @TupleReturn */
	getLocalPoint(worldX: number, worldY: number): [number, number];

	/**
	 * Transform a vector from world coordinates to local coordinates.
	 *
	 * @param worldX The vector x component in world coordinates.
	 * @param worldY The vector y component in world coordinates.
	 * @return {number} localX, The vector x component in local coordinates.
	 * @return {number} localY, The vector y component in local coordinates.
	 */
	/** @TupleReturn */
	getLocalVector(worldX: number, worldY: number): [number, number];

	/**
	 * Get the mass of the body.
	 *
	 * @return {number} mass, The mass of the body (in kilograms).
	 */
	getMass(): number;

	/**
	 * Returns the mass, its center, and the rotational inertia.
	 *
	 * @return {number} x, The x position of the center of mass.
	 * @return {number} y, The y position of the center of mass.
	 * @return {number} mass, The mass of the body.
	 * @return {number} inertia, The rotational inertia.
	 */
	/** @TupleReturn */
	getMassData(): [number, number, number, number];

	/**
	 * Get the position of the body.
	 *
	 *
	 * Note that this may not be the center of mass of the body.
	 *
	 * @return {number} x, The x position.
	 * @return {number} y, The y position.
	 */
	/** @TupleReturn */
	getPosition(): [number, number];

	/**
	 * Returns the type of the body.
	 *
	 * @return {BodyType} type, The body type.
	 */
	getType(): BodyType;

	/**
	 * Returns the Lua value associated with this Body.
	 *
	 * @return {any} value, The Lua value associated with the Body.
	 */
	getUserData(): any;

	/**
	 * Gets the World the body lives in.
	 *
	 * @return {World} world, The world the body lives in.
	 */
	getWorld(): World;

	/**
	 * Get the center of mass position in world coordinates.
	 *
	 *
	 * Use Body:getLocalCenter to get the center of mass in local coordinates.
	 *
	 * @return {number} x, The x coordinate of the center of mass.
	 * @return {number} y, The y coordinate of the center of mass.
	 */
	/** @TupleReturn */
	getWorldCenter(): [number, number];

	/**
	 * Transform a point from local coordinates to world coordinates.
	 *
	 * @param localX The x position in local coordinates.
	 * @param localY The y position in local coordinates.
	 * @return {number} worldX, The x position in world coordinates.
	 * @return {number} worldY, The y position in world coordinates.
	 */
	/** @TupleReturn */
	getWorldPoint(localX: number, localY: number): [number, number];

	/**
	 * Transforms multiple points from local coordinates to world coordinates.
	 *
	 * @param x1 The x position of the first point.
	 * @param y1 The y position of the first point.
	 * @param x2 The x position of the second point.
	 * @param y2 The y position of the second point.
	 * @param ... More x and y points.
	 * @return {number} x1, The transformed x position of the first point.
	 * @return {number} y1, The transformed y position of the first point.
	 * @return {number} x2, The transformed x position of the second point.
	 * @return {number} y2, The transformed y position of the second point.
	 * @return {number} ..., The transformed x and y positions of additional points.
	 */
	/** @TupleReturn */
	getWorldPoints(x1: number, y1: number, x2: number, y2: number, ...vararg: number[]): [number, number, number, number, number];

	/**
	 * Transform a vector from local coordinates to world coordinates.
	 *
	 * @param localX The vector x component in local coordinates.
	 * @param localY The vector y component in local coordinates.
	 * @return {number} worldX, The vector x component in world coordinates.
	 * @return {number} worldY, The vector y component in world coordinates.
	 */
	/** @TupleReturn */
	getWorldVector(localX: number, localY: number): [number, number];

	/**
	 * Get the x position of the body in world coordinates.
	 *
	 * @return {number} x, The x position in world coordinates.
	 */
	getX(): number;

	/**
	 * Get the y position of the body in world coordinates.
	 *
	 * @return {number} y, The y position in world coordinates.
	 */
	getY(): number;

	/**
	 * Returns whether the body is actively used in the simulation.
	 *
	 * @return {boolean} status, True if the body is active or false if not.
	 */
	isActive(): boolean;

	/**
	 * Returns the sleep status of the body.
	 *
	 * @return {boolean} status, True if the body is awake or false if not.
	 */
	isAwake(): boolean;

	/**
	 * Get the bullet status of a body.
	 *
	 *
	 * There are two methods to check for body collisions:
	 *
	 *
	 * at their location when the world is updated (default)
	 *
	 *
	 * using continuous collision detection (CCD)
	 *
	 *
	 * The default method is efficient, but a body moving very quickly may sometimes
	 * jump over another body without producing a collision. A body that is set as a
	 * bullet will use CCD. This is less efficient, but is guaranteed not to jump when
	 * moving quickly.
	 *
	 *
	 * Note that static bodies (with zero mass) always use CCD, so your walls will not
	 * let a fast moving body pass through even if it is not a bullet.
	 *
	 * @return {boolean} status, The bullet status of the body.
	 */
	isBullet(): boolean;

	/**
	 * Gets whether the Body is destroyed. Destroyed bodies cannot be used.
	 *
	 * @return {boolean} destroyed, Whether the Body is destroyed.
	 */
	isDestroyed(): boolean;

	/**
	 * Returns whether the body rotation is locked.
	 *
	 * @return {boolean} fixed, True if the body's rotation is locked or false if not.
	 */
	isFixedRotation(): boolean;

	/**
	 * Returns the sleeping behaviour of the body.
	 *
	 * @return {boolean} status, True if the body is allowed to sleep or false if not.
	 */
	isSleepingAllowed(): boolean;

	/**
	 * Resets the mass of the body by recalculating it from the mass properties of the
	 * fixtures.
	 *
	 */
	resetMassData(): void;

	/**
	 * Sets whether the body is active in the world.
	 *
	 *
	 * An inactive body does not take part in the simulation. It will not move or
	 * cause any collisions.
	 *
	 * @param active If the body is active or not.
	 */
	setActive(active: boolean): void;

	/**
	 * Set the angle of the body.
	 *
	 *
	 * The angle is measured in radians. If you need to transform it from degrees, use
	 * math.rad.
	 *
	 *
	 * A value of 0 radians will mean "looking to the right". Although radians
	 * increase counter-clockwise, the y-axis points down so it becomes clockwise from
	 * our point of view.
	 *
	 *
	 * It is possible to cause a collision with another body by changing its angle.
	 *
	 * @param angle The angle in radians.
	 */
	setAngle(angle: number): void;

	/**
	 * Sets the angular damping of a Body.
	 *
	 *
	 * See Body:getAngularDamping for a definition of angular damping.
	 *
	 *
	 * Angular damping can take any value from 0 to infinity. It is recommended to
	 * stay between 0 and 0.1, though. Other values will look unrealistic.
	 *
	 * @param damping The new angular damping.
	 */
	setAngularDamping(damping: number): void;

	/**
	 * Sets the angular velocity of a Body.
	 *
	 *
	 * The angular velocity is the rate of change of angle over time.
	 *
	 *
	 * This function will not accumulate anything; any impulses previously applied
	 * since the last call to World:update will be lost.
	 *
	 * @param w The new angular velocity, in radians per second
	 */
	setAngularVelocity(w: number): void;

	/**
	 * Wakes the body up or puts it to sleep.
	 *
	 * @param awake The body sleep status.
	 */
	setAwake(awake: boolean): void;

	/**
	 * Set the bullet status of a body.
	 *
	 *
	 * There are two methods to check for body collisions:
	 *
	 *
	 * at their location when the world is updated (default)
	 *
	 *
	 * using continuous collision detection (CCD)
	 *
	 *
	 * The default method is efficient, but a body moving very quickly may sometimes
	 * jump over another body without producing a collision. A body that is set as a
	 * bullet will use CCD. This is less efficient, but is guaranteed not to jump when
	 * moving quickly.
	 *
	 *
	 * Note that static bodies (with zero mass) always use CCD, so your walls will not
	 * let a fast moving body pass through even if it is not a bullet.
	 *
	 * @param status The bullet status of the body.
	 */
	setBullet(status: boolean): void;

	/**
	 * Set whether a body has fixed rotation.
	 *
	 *
	 * Bodies with fixed rotation don't vary the speed at which they rotate.
	 *
	 * @param fixed Whether the body should have fixed rotation.
	 */
	setFixedRotation(fixed: boolean): void;

	/**
	 * Sets a new gravity scale factor for the body.
	 *
	 * @param scale The new gravity scale factor.
	 */
	setGravityScale(scale: number): void;

	/**
	 * Set the inertia of a body.
	 *
	 * @param inertia The new moment of inertia, in kilograms per meter squared.
	 */
	setInertia(inertia: number): void;

	/**
	 * Sets the linear damping of a Body
	 *
	 *
	 * See Body:getLinearDamping for a definition of linear damping.
	 *
	 *
	 * Linear damping can take any value from 0 to infinity. It is recommended to stay
	 * between 0 and 0.1, though. Other values will make the objects look "floaty".
	 *
	 * @param ld The new linear damping.
	 */
	setLinearDamping(ld: number): void;

	/**
	 * Sets a new linear velocity for the Body.
	 *
	 *
	 * This function will not accumulate anything; any impulses previously applied
	 * since the last call to World:update will be lost.
	 *
	 * @param x The x component of the velocity vector.
	 * @param y The y component of the velocity vector.
	 */
	setLinearVelocity(x: number, y: number): void;

	/**
	 * Sets the mass in kilograms.
	 *
	 * @param mass The mass, in kilograms.
	 */
	setMass(mass: number): void;

	/**
	 * Overrides the calculated mass data.
	 *
	 * @param x The x component of the center of mass in local coordinates.
	 * @param y The y component of the center of mass in local coordinates.
	 * @param mass The mass, in kilograms.
	 * @param inertia The rotational inertia, in kilograms per squared meter.
	 */
	setMassData(x: number, y: number, mass: number, inertia: number): void;

	/**
	 * Set the position of the body.
	 *
	 *
	 * Note that this may not be the center of mass of the body.
	 *
	 * @param x The x position.
	 * @param y The y position.
	 */
	setPosition(x: number, y: number): void;

	/**
	 * Sets the sleeping behaviour of the body.
	 *
	 * @param allowed True if the body is allowed to sleep or false if not.
	 */
	setSleepingAllowed(allowed: boolean): void;

	/**
	 * Sets a new body type.
	 *
	 * @param type The new type.
	 */
	setType(type: BodyType): void;

	/**
	 * Associates a Lua value with the Body.
	 *
	 *
	 * To delete the reference, explicitly pass nil.
	 *
	 * @param value The Lua value to associate with the Body.
	 */
	setUserData(value: any): void;

	/**
	 * Set the x position of the body.
	 *
	 * @param x The x position.
	 */
	setX(x: number): void;

	/**
	 * Set the y position of the body.
	 *
	 * @param y The y position.
	 */
	setY(y: number): void;

}
declare interface ChainShape extends Shape {
	/**
	 * Returns a child of the shape as an EdgeShape.
	 *
	 * @param index The index of the child.
	 * @return {number} EdgeShape, The child as an EdgeShape.
	 */
	getChildEdge(index: number): number;

	/**
	 * Gets the vertex that establishes a connection to the next shape.
	 *
	 *
	 * Setting next and previous ChainShape vertices can help prevent unwanted
	 * collisions when a flat shape slides along the edge and moves over to the new
	 * shape.
	 *
	 * @param x The x-component of the vertex, or nil if ChainShape:setNextVertex hasn't been called.
	 * @param y The y-component of the vertex, or nil if ChainShape:setNextVertex hasn't been called.
	 */
	getNextVertex(x?: number, y?: number): void;

	/**
	 * Returns a point of the shape.
	 *
	 * @param index The index of the point to return.
	 * @return {number} x, The x-coordinate of the point.
	 * @return {number} y, The y-coordinate of the point.
	 */
	/** @TupleReturn */
	getPoint(index: number): [number, number];

	/**
	 * Returns all points of the shape.
	 *
	 * @return {number} x1, The x-coordinate of the first point.
	 * @return {number} y1, The y-coordinate of the first point.
	 * @return {number} x2, The x-coordinate of the second point.
	 * @return {number} y2, The y-coordinate of the second point.
	 * @return {number} ..., Additional x and y values.
	 */
	/** @TupleReturn */
	getPoints(): [number, number, number, number, number];

	/**
	 * Gets the vertex that establishes a connection to the previous shape.
	 *
	 *
	 * Setting next and previous ChainShape vertices can help prevent unwanted
	 * collisions when a flat shape slides along the edge and moves over to the new
	 * shape.
	 *
	 * @return {number} x, The x-component of the vertex, or nil if ChainShape:setNextVertex hasn't been called.
	 * @return {number} y, The y-component of the vertex, or nil if ChainShape:setNextVertex hasn't been called.
	 */
	/** @TupleReturn */
	getPreviousVertex(): [number, number];

	/**
	 * Returns the number of vertices the shape has.
	 *
	 * @return {number} count, The number of vertices.
	 */
	getVertexCount(): number;

	/**
	 * Sets a vertex that establishes a connection to the next shape.
	 *
	 *
	 * This can help prevent unwanted collisions when a flat shape slides along the
	 * edge and moves over to the new shape.
	 *
	 * @param x The x component of the vertex.
	 * @param y The y component of the vertex.
	 */
	setNextVertex(x: number, y: number): void;

	/**
	 * Sets a vertex that establishes a connection to the previous shape.
	 *
	 *
	 * This can help prevent unwanted collisions when a flat shape slides along the
	 * edge and moves over to the new shape.
	 *
	 * @param x The x component of the vertex.
	 * @param y The y component of the vertex.
	 */
	setPreviousVertex(x: number, y: number): void;

}
declare interface CircleShape extends Shape {
	/**
	 * Gets the center point of the circle shape.
	 *
	 * @return {number} x, The x-component of the center point of the circle.
	 * @return {number} y, The y-component of the center point of the circle.
	 */
	/** @TupleReturn */
	getPoint(): [number, number];

	/**
	 * Gets the radius of the circle shape.
	 *
	 * @return {number} radius, The radius of the circle.
	 */
	getRadius(): number;

	/**
	 * Sets the location of the center of the circle shape.
	 *
	 * @param x The x-component of the new center point of the circle.
	 * @param y The y-component of the new center point of the circle.
	 */
	setPoint(x: number, y: number): void;

	/**
	 * Sets the radius of the circle.
	 *
	 * @param radius The radius of the circle.
	 */
	setRadius(radius: number): void;

}
declare interface Contact extends Object {
	/**
	 * Gets the two Fixtures that hold the shapes that are in contact.
	 *
	 * @return {Fixture} fixtureA, The first Fixture.
	 * @return {Fixture} fixtureB, The second Fixture.
	 */
	/** @TupleReturn */
	getFixtures(): [Fixture, Fixture];

	/**
	 * Get the friction between two shapes that are in contact.
	 *
	 * @return {number} friction, The friction of the contact.
	 */
	getFriction(): number;

	/**
	 * Get the normal vector between two shapes that are in contact.
	 *
	 *
	 * This function returns the coordinates of a unit vector that points from the
	 * first shape to the second.
	 *
	 * @return {number} nx, The x component of the normal vector.
	 * @return {number} ny, The y component of the normal vector.
	 */
	/** @TupleReturn */
	getNormal(): [number, number];

	/**
	 * Returns the contact points of the two colliding fixtures. There can be one or
	 * two points.
	 *
	 * @return {number} x1, The x coordinate of the first contact point.
	 * @return {number} y1, The y coordinate of the first contact point.
	 * @return {number} x2, The x coordinate of the second contact point.
	 * @return {number} y2, The y coordinate of the second contact point.
	 */
	/** @TupleReturn */
	getPositions(): [number, number, number, number];

	/**
	 * Get the restitution between two shapes that are in contact.
	 *
	 * @return {number} restitution, The restitution between the two shapes.
	 */
	getRestitution(): number;

	/**
	 * Returns whether the contact is enabled. The collision will be ignored if a
	 * contact gets disabled in the preSolve callback.
	 *
	 * @return {boolean} enabled, True if enabled, false otherwise.
	 */
	isEnabled(): boolean;

	/**
	 * Returns whether the two colliding fixtures are touching each other.
	 *
	 * @return {boolean} touching, True if they touch or false if not.
	 */
	isTouching(): boolean;

	/**
	 * Resets the contact friction to the mixture value of both fixtures.
	 *
	 */
	resetFriction(): void;

	/**
	 * Resets the contact restitution to the mixture value of both fixtures.
	 *
	 */
	resetRestitution(): void;

	/**
	 * Enables or disables the contact.
	 *
	 * @param enabled True to enable or false to disable.
	 */
	setEnabled(enabled: boolean): void;

	/**
	 * Sets the contact friction.
	 *
	 * @param friction The contact friction.
	 */
	setFriction(friction: number): void;

	/**
	 * Sets the contact restitution.
	 *
	 * @param restitution The contact restitution.
	 */
	setRestitution(restitution: number): void;

}
declare interface EdgeShape extends Shape {
	/**
	 * Returns the local coordinates of the edge points.
	 *
	 * @return {number} x1, The x component of the first vertex.
	 * @return {number} y1, The y component of the first vertex.
	 * @return {number} x2, The x component of the second vertex.
	 * @return {number} y2, The y component of the second vertex.
	 */
	/** @TupleReturn */
	getPoints(): [number, number, number, number];

	/**
	 * Gets the vertex that establishes a connection to the next shape.
	 *
	 *
	 * Setting next and previous EdgeShape vertices can help prevent unwanted
	 * collisions when a flat shape slides along the edge and moves over to the new
	 * shape.
	 *
	 * @return {number} x, The x-component of the vertex, or nil if EdgeShape:setNextVertex hasn't been called.
	 * @return {number} y, The y-component of the vertex, or nil if EdgeShape:setNextVertex hasn't been called.
	 */
	/** @TupleReturn */
	getNextVertex(): [number, number];

	/**
	 * Gets the vertex that establishes a connection to the previous shape.
	 *
	 *
	 * Setting next and previous EdgeShape vertices can help prevent unwanted
	 * collisions when a flat shape slides along the edge and moves over to the new
	 * shape.
	 *
	 * @return {number} x, The x-component of the vertex, or nil if EdgeShape:setPreviousVertex hasn't been called.
	 * @return {number} y, The y-component of the vertex, or nil if EdgeShape:setPreviousVertex hasn't been called.
	 */
	/** @TupleReturn */
	getPreviousVertex(): [number, number];

	/**
	 * Sets a vertex that establishes a connection to the next shape.
	 *
	 *
	 * This can help prevent unwanted collisions when a flat shape slides along the
	 * edge and moves over to the new shape.
	 *
	 * @param x The x-component of the vertex.
	 * @param y The y-component of the vertex.
	 */
	setNextVertex(x: number, y: number): void;

	/**
	 * Sets a vertex that establishes a connection to the previous shape.
	 *
	 *
	 * This can help prevent unwanted collisions when a flat shape slides along the
	 * edge and moves over to the new shape.
	 *
	 * @param x The x-component of the vertex.
	 * @param y The y-component of the vertex.
	 */
	setPreviousVertex(x: number, y: number): void;

}
declare interface DistanceJoint extends Joint {
	/**
	 * Gets the damping ratio.
	 *
	 * @return {number} ratio, The damping ratio.
	 */
	getDampingRatio(): number;

	/**
	 * Gets the response speed.
	 *
	 * @return {number} Hz, The response speed.
	 */
	getFrequency(): number;

	/**
	 * Gets the equilibrium distance between the two Bodies.
	 *
	 * @return {number} l, The length between the two Bodies.
	 */
	getLength(): number;

	/**
	 * Sets the damping ratio.
	 *
	 * @param ratio The damping ratio.
	 */
	setDampingRatio(ratio: number): void;

	/**
	 * Sets the response speed.
	 *
	 * @param Hz The response speed.
	 */
	setFrequency(Hz: number): void;

	/**
	 * Sets the equilibrium distance between the two Bodies.
	 *
	 * @param l The length between the two Bodies.
	 */
	setLength(l: number): void;

}
declare interface Fixture extends Object {
	/**
	 * Destroys the fixture
	 *
	 */
	destroy(): void;

	/**
	 * Returns the body to which the fixture is attached.
	 *
	 * @return {Body} body, The parent body.
	 */
	getBody(): Body;

	/**
	 * Returns the points of the fixture bounding box. In case the fixture has
	 * multiple children a 1-based index can be specified. For example, a fixture will
	 * have multiple children with a chain shape.
	 *
	 * @param index A bounding box of the fixture.
	 * @return {number} topLeftX, The x position of the top-left point.
	 * @return {number} topLeftY, The y position of the top-left point.
	 * @return {number} bottomRightX, The x position of the bottom-right point.
	 * @return {number} bottomRightY, The y position of the bottom-right point.
	 */
	/** @TupleReturn */
	getBoundingBox(index?: number): [number, number, number, number];

	/**
	 * Returns the categories the fixture belongs to.
	 *
	 * @return {number} category1, The first category.
	 * @return {number} category2, The second category.
	 * @return {number} ..., Additional categories.
	 */
	/** @TupleReturn */
	getCategory(): [number, number, number];

	/**
	 * Returns the density of the fixture.
	 *
	 * @return {number} density, The fixture density in kilograms per square meter.
	 */
	getDensity(): number;

	/**
	 * Returns the filter data of the fixture. Categories and masks are encoded as the
	 * bits of a 16-bit integer.
	 *
	 * @return {number} categories, The categories as an integer from 0 to 65535.
	 * @return {number} mask, The mask as an integer from 0 to 65535.
	 * @return {number} group, The group as an integer from -32768 to 32767.
	 */
	/** @TupleReturn */
	getFilterData(): [number, number, number];

	/**
	 * Returns the friction of the fixture.
	 *
	 * @return {number} friction, The fixture friction.
	 */
	getFriction(): number;

	/**
	 * Returns the group the fixture belongs to. Fixtures with the same group will
	 * always collide if the group is positive or never collide if it's negative. The
	 * group zero means no group.
	 *
	 *
	 * The groups range from -32768 to 32767.
	 *
	 * @return {number} group, The group of the fixture.
	 */
	getGroupIndex(): number;

	/**
	 * Returns the category mask of the fixture.
	 *
	 * @return {number} mask1, The first category selected by the mask.
	 * @return {number} mask2, The second category selected by the mask.
	 * @return {number} ..., Additional categories selected by the mask.
	 */
	/** @TupleReturn */
	getMask(): [number, number, number];

	/**
	 * Returns the mass, its center and the rotational inertia.
	 *
	 * @return {number} x, The x position of the center of mass.
	 * @return {number} y, The y position of the center of mass.
	 * @return {number} mass, The mass of the fixture.
	 * @return {number} inertia, The rotational inertia.
	 */
	/** @TupleReturn */
	getMassData(): [number, number, number, number];

	/**
	 * Returns the restitution of the fixture.
	 *
	 * @return {number} restitution, The fixture restitution.
	 */
	getRestitution(): number;

	/**
	 * Returns the shape of the fixture. This shape is a reference to the actual data
	 * used in the simulation. It's possible to change its values between timesteps.
	 *
	 *
	 * Do not call any functions on this shape after the parent fixture has been
	 * destroyed. This shape will point to an invalid memory address and likely cause
	 * crashes if you interact further with it.
	 *
	 * @return {Shape} shape, The fixture's shape.
	 */
	getShape(): Shape;

	/**
	 * Returns the Lua value associated with this fixture.
	 *
	 *
	 * Use this function in one thread only.
	 *
	 * @return {any} value, The Lua value associated with the fixture.
	 */
	getUserData(): any;

	/**
	 * Gets whether the Fixture is destroyed. Destroyed fixtures cannot be used.
	 *
	 * @return {boolean} destroyed, Whether the Fixture is destroyed.
	 */
	isDestroyed(): boolean;

	/**
	 * Returns whether the fixture is a sensor.
	 *
	 * @return {boolean} sensor, If the fixture is a sensor.
	 */
	isSensor(): boolean;

	/**
	 * Casts a ray against the shape of the fixture and returns the surface normal
	 * vector and the line position where the ray hit. If the ray missed the shape,
	 * nil will be returned.
	 *
	 *
	 * The ray starts on the first point of the input line and goes towards the second
	 * point of the line. The fourth argument is the maximum distance the ray is going
	 * to travel as a scale factor of the input line length.
	 *
	 *
	 * The childIndex parameter is used to specify which child of a parent shape, such
	 * as a ChainShape, will be ray casted. For ChainShapes, the index of 1 is the
	 * first edge on the chain. Ray casting a parent shape will only test the child
	 * specified so if you want to test every shape of the parent, you must loop
	 * through all of its children.
	 *
	 *
	 * The world position of the impact can be calculated by multiplying the line
	 * vector with the third return value and adding it to the line starting point.
	 *
	 *
	 * hitx, hity = x1 + (x2 - x1) * fraction, y1 + (y2 - y1) * fraction
	 *
	 * @param x1 The x position of the ray starting point.
	 * @param y1 The y position of the ray starting point.
	 * @param x2 The x position of the ray end point.
	 * @param y2 The y position of the ray end point.
	 * @param maxFraction The maximum distance the ray is going to travel as a number from 0 to 1.
	 * @param childIndex The index of the child the ray gets cast against.
	 * @return {number} x, The x position where the ray intersects with the shape.
	 * @return {number} y, The y position where the ray intersects with the shape.
	 * @return {number} fraction, The position on the input vector where the intersection happened as a number from 0 to 1.
	 */
	/** @TupleReturn */
	rayCast(x1: number, y1: number, x2: number, y2: number, maxFraction: number, childIndex?: number): [number, number, number];

	/**
	 * Sets the categories the fixture belongs to. There can be up to 16 categories
	 * represented as a number from 1 to 16.
	 *
	 * @param category1 The first category.
	 * @param ... Additional categories.
	 */
	setCategory(category1: number, ...vararg: number[]): void;

	/**
	 * Sets the density of the fixture. Call Body:resetMassData if this needs to take
	 * effect immediately.
	 *
	 * @param density The fixture density in kilograms per square meter.
	 */
	setDensity(density: number): void;

	/**
	 * Sets the filter data of the fixture.
	 *
	 *
	 * Groups, categories, and mask can be used to define the collision behaviour of
	 * the fixture.
	 *
	 *
	 * If two fixtures are in the same group they either always collide if the group
	 * is positive, or never collide if it's negative. If the group is zero or they do
	 * not match, then the contact filter checks if the fixtures select a category of
	 * the other fixture with their masks. The fixtures do not collide if that's not
	 * the case. If they do have each other's categories selected, the return value of
	 * the custom contact filter will be used. They always collide if none was set.
	 *
	 *
	 * There can be up to 16 categories. Categories and masks are encoded as the bits
	 * of a 16-bit integer.
	 *
	 * @param categories The categories as an integer from 0 to 65535.
	 * @param mask The mask as an integer from 0 to 65535.
	 * @param group The group as an integer from -32768 to 32767.
	 */
	setFilterData(categories: number, mask: number, group: number): void;

	/**
	 * Sets the friction of the fixture.
	 *
	 * @param friction The fixture friction.
	 */
	setFriction(friction: number): void;

	/**
	 * Sets the group the fixture belongs to. Fixtures with the same group will always
	 * collide if the group is positive or never collide if it's negative. The group
	 * zero means no group.
	 *
	 *
	 * The groups range from -32768 to 32767.
	 *
	 * @param group The group as an integer from -32768 to 32767.
	 */
	setGroupIndex(group: number): void;

	/**
	 * Sets the category mask of the fixture. There can be up to 16 categories
	 * represented as a number from 1 to 16.
	 *
	 *
	 * This fixture will collide with the fixtures that are in the selected categories
	 * if the other fixture also has a category of this fixture selected.
	 *
	 * @param mask1 The first category.
	 * @param mask2 The second category.
	 * @param ... Additional categories.
	 */
	setMask(mask1: number, mask2: number, ...vararg: number[]): void;

	/**
	 * Sets the restitution of the fixture.
	 *
	 * @param restitution The fixture restitution.
	 */
	setRestitution(restitution: number): void;

	/**
	 * Sets whether the fixture should act as a sensor.
	 *
	 *
	 * Sensor do not produce collisions responses, but the begin and end callbacks
	 * will still be called for this fixture.
	 *
	 * @param sensor The sensor status.
	 */
	setSensor(sensor: boolean): void;

	/**
	 * Associates a Lua value with the fixture.
	 *
	 *
	 * Use this function in one thread only.
	 *
	 * @param value The Lua value associated with the fixture.
	 */
	setUserData(value: any): void;

	/**
	 * Checks if a point is inside the shape of the fixture.
	 *
	 * @param x The x position of the point.
	 * @param y The y position of the point.
	 * @return {boolean} isInside, True if the point is inside or false if it is outside.
	 */
	testPoint(x: number, y: number): boolean;

}
declare interface FrictionJoint extends Joint {
	/**
	 * Gets the maximum friction force in Newtons.
	 *
	 * @return {number} force, Maximum force in Newtons.
	 */
	getMaxForce(): number;

	/**
	 * Gets the maximum friction torque in Newton-meters.
	 *
	 * @return {number} torque, Maximum torque in Newton-meters.
	 */
	getMaxTorque(): number;

	/**
	 * Sets the maximum friction force in Newtons.
	 *
	 * @param maxForce Max force in Newtons.
	 */
	setMaxForce(maxForce: number): void;

	/**
	 * Sets the maximum friction torque in Newton-meters.
	 *
	 * @param torque Maximum torque in Newton-meters.
	 */
	setMaxTorque(torque: number): void;

}
declare interface GearJoint extends Joint {
	/**
	 * Get the Joints connected by this GearJoint.
	 *
	 * @return {Joint} joint1, The first connected Joint.
	 * @return {Joint} joint2, The second connected Joint.
	 */
	/** @TupleReturn */
	getJoints(): [Joint, Joint];

	/**
	 * Get the ratio of a gear joint.
	 *
	 * @return {number} ratio, The ratio of the joint.
	 */
	getRatio(): number;

	/**
	 * Set the ratio of a gear joint.
	 *
	 * @param ratio The new ratio of the joint.
	 */
	setRatio(ratio: number): void;

}
declare interface Joint extends Object {
	/**
	 * Explicitly destroys the Joint. When you don't have time to wait for garbage
	 * collection, this function may be used to free the object immediately, but note
	 * that an error will occur if you attempt to use the object after calling this
	 * function.
	 *
	 */
	destroy(): void;

	/**
	 * Get the anchor points of the joint.
	 *
	 * @return {number} x1, The x component of the anchor on Body 1.
	 * @return {number} y1, The y component of the anchor on Body 1.
	 * @return {number} x2, The x component of the anchor on Body 2.
	 * @return {number} y2, The y component of the anchor on Body 2.
	 */
	/** @TupleReturn */
	getAnchors(): [number, number, number, number];

	/**
	 * Gets the bodies that the Joint is attached to.
	 *
	 * @return {Body} bodyA, The first Body.
	 * @return {Body} bodyB, The second Body.
	 */
	/** @TupleReturn */
	getBodies(): [Body, Body];

	/**
	 * Gets whether the connected Bodies collide.
	 *
	 * @return {boolean} c, True if they collide, false otherwise.
	 */
	getCollideConnected(): boolean;

	/**
	 * Gets the reaction force on Body 2 at the joint anchor.
	 *
	 * @return {number} x, The x component of the force.
	 * @return {number} y, The y component of the force.
	 */
	/** @TupleReturn */
	getReactionForce(): [number, number];

	/**
	 * Returns the reaction torque on the second body.
	 *
	 * @param invdt How long the force applies. Usually the inverse time step or 1/dt.
	 * @return {number} torque, The reaction torque on the second body.
	 */
	getReactionTorque(invdt: number): number;

	/**
	 * Gets a string representing the type.
	 *
	 * @return {JointType} type, A string with the name of the Joint type.
	 */
	getType(): JointType;

	/**
	 * Returns the Lua value associated with this Joint.
	 *
	 * @return {any} value, The Lua value associated with the Joint.
	 */
	getUserData(): any;

	/**
	 * Gets whether the Joint is destroyed. Destroyed joints cannot be used.
	 *
	 * @return {boolean} destroyed, Whether the Joint is destroyed.
	 */
	isDestroyed(): boolean;

	/**
	 * Associates a Lua value with the Joint.
	 *
	 *
	 * To delete the reference, explicitly pass nil.
	 *
	 * @param value The Lua value to associate with the Joint.
	 */
	setUserData(value: any): void;

}
declare interface MotorJoint extends Joint {
	/**
	 * Gets the target angular offset between the two Bodies the Joint is attached to.
	 *
	 * @return {number} angularoffset, The target angular offset in radians: the second body's angle minus the first body's angle.
	 */
	getAngularOffset(): number;

	/**
	 * Gets the target linear offset between the two Bodies the Joint is attached to.
	 *
	 * @return {number} x, The x component of the target linear offset, relative to the first Body.
	 * @return {number} y, The y component of the target linear offset, relative to the first Body.
	 */
	/** @TupleReturn */
	getLinearOffset(): [number, number];

	/**
	 * Sets the target angluar offset between the two Bodies the Joint is attached to.
	 *
	 * @param angularoffset The target angular offset in radians: the second body's angle minus the first body's angle.
	 */
	setAngularOffset(angularoffset: number): void;

	/**
	 * Sets the target linear offset between the two Bodies the Joint is attached to.
	 *
	 * @param x The x component of the target linear offset, relative to the first Body.
	 * @param y The y component of the target linear offset, relative to the first Body.
	 */
	setLinearOffset(x: number, y: number): void;

}
declare interface MouseJoint extends Joint {
	/**
	 * Returns the damping ratio.
	 *
	 * @return {number} ratio, The new damping ratio.
	 */
	getDampingRatio(): number;

	/**
	 * Returns the frequency.
	 *
	 * @return {number} freq, The frequency in hertz.
	 */
	getFrequency(): number;

	/**
	 * Gets the highest allowed force.
	 *
	 * @return {number} f, The max allowed force.
	 */
	getMaxForce(): number;

	/**
	 * Gets the target point.
	 *
	 * @return {number} x, The x component of the target.
	 * @return {number} y, The x component of the target.
	 */
	/** @TupleReturn */
	getTarget(): [number, number];

	/**
	 * Sets a new damping ratio.
	 *
	 * @param ratio The new damping ratio.
	 */
	setDampingRatio(ratio: number): void;

	/**
	 * Sets a new frequency.
	 *
	 * @param freq The new frequency in hertz.
	 */
	setFrequency(freq: number): void;

	/**
	 * Sets the highest allowed force.
	 *
	 * @param f The max allowed force.
	 */
	setMaxForce(f: number): void;

	/**
	 * Sets the target point.
	 *
	 * @param x The x component of the target.
	 * @param y The y component of the target.
	 */
	setTarget(x: number, y: number): void;

}
declare interface PolygonShape extends Shape {
	/**
	 * Get the local coordinates of the polygon's vertices.
	 *
	 *
	 * This function has a variable number of return values. It can be used in a
	 * nested fashion with love.graphics.polygon.
	 *
	 *
	 * This function may have up to 16 return values, since it returns two values for
	 * each vertex in the polygon. In other words, it can return the coordinates of up
	 * to 8 points.
	 *
	 * @return {number} x1, The x component of the first vertex.
	 * @return {number} y1, The y component of the first vertex.
	 * @return {number} x2, The x component of the second vertex.
	 * @return {number} y2, The y component of the second vertex.
	 * @return {number} ..., Additional x and y values.
	 */
	/** @TupleReturn */
	getPoints(): [number, number, number, number, number];

}
declare interface PrismaticJoint extends Joint {
	/**
	 * Checks whether the limits are enabled.
	 *
	 * @return {boolean} enabled, True if enabled, false otherwise.
	 */
	areLimitsEnabled(): boolean;

	/**
	 * Gets the world-space axis vector of the Prismatic Joint.
	 *
	 * @return {number} x, The x-axis coordinate of the world-space axis vector.
	 * @return {number} y, The y-axis coordinate of the world-space axis vector.
	 */
	/** @TupleReturn */
	getAxis(): [number, number];

	/**
	 * Get the current joint angle speed.
	 *
	 * @return {number} s, Joint angle speed in meters/second.
	 */
	getJointSpeed(): number;

	/**
	 * Get the current joint translation.
	 *
	 * @return {number} t, Joint translation, usually in meters.
	 */
	getJointTranslation(): number;

	/**
	 * Gets the joint limits.
	 *
	 * @return {number} lower, The lower limit, usually in meters.
	 * @return {number} upper, The upper limit, usually in meters.
	 */
	/** @TupleReturn */
	getLimits(): [number, number];

	/**
	 * Gets the lower limit.
	 *
	 * @return {number} lower, The lower limit, usually in meters.
	 */
	getLowerLimit(): number;

	/**
	 * Gets the maximum motor force.
	 *
	 * @return {number} f, The maximum motor force, usually in N.
	 */
	getMaxMotorForce(): number;

	/**
	 * Get the current motor force.
	 *
	 * @return {number} f, The current motor force, usually in N.
	 */
	getMotorForce(): number;

	/**
	 * Gets the motor speed.
	 *
	 * @return {number} s, The motor speed, usually in meters per second.
	 */
	getMotorSpeed(): number;

	/**
	 * Gets the upper limit.
	 *
	 * @return {number} upper, The upper limit, usually in meters.
	 */
	getUpperLimit(): number;

	/**
	 * Checks whether the motor is enabled.
	 *
	 * @return {boolean} enabled, True if enabled, false if disabled.
	 */
	isMotorEnabled(): boolean;

	/**
	 * Sets the limits.
	 *
	 * @param lower The lower limit, usually in meters.
	 * @param upper The upper limit, usually in meters.
	 */
	setLimits(lower: number, upper: number): void;

	/**
	 * Enables or disables the limits of the joint.
	 *
	 * @param enable True to enable, false to disable.
	 */
	setLimitsEnabled(enable: boolean): void;

	/**
	 * Sets the lower limit.
	 *
	 * @param lower The lower limit, usually in meters.
	 */
	setLowerLimit(lower: number): void;

	/**
	 * Set the maximum motor force.
	 *
	 * @param f The maximum motor force, usually in N.
	 */
	setMaxMotorForce(f: number): void;

	/**
	 * Starts or stops the joint motor.
	 *
	 * @param enable True to enable, false to disable.
	 */
	setMotorEnabled(enable: boolean): void;

	/**
	 * Sets the motor speed.
	 *
	 * @param s The motor speed, usually in meters per second.
	 */
	setMotorSpeed(s: number): void;

	/**
	 * Sets the upper limit.
	 *
	 * @param upper The upper limit, usually in meters.
	 */
	setUpperLimit(upper: number): void;

}
declare interface PulleyJoint extends Joint {
	/**
	 * Get the total length of the rope.
	 *
	 * @return {number} length, The length of the rope in the joint.
	 */
	getConstant(): number;

	/**
	 * Get the ground anchor positions in world coordinates.
	 *
	 * @return {number} a1x, The x coordinate of the first anchor.
	 * @return {number} a1y, The y coordinate of the first anchor.
	 * @return {number} a2x, The x coordinate of the second anchor.
	 * @return {number} a2y, The y coordinate of the second anchor.
	 */
	/** @TupleReturn */
	getGroundAnchors(): [number, number, number, number];

	/**
	 * Get the current length of the rope segment attached to the first body.
	 *
	 * @return {number} length, The length of the rope segment.
	 */
	getLengthA(): number;

	/**
	 * Get the current length of the rope segment attached to the second body.
	 *
	 * @return {number} length, The length of the rope segment.
	 */
	getLengthB(): number;

	/**
	 * Get the maximum lengths of the rope segments.
	 *
	 * @return {number} len1, The maximum length of the first rope segment.
	 * @return {number} len2, The maximum length of the second rope segment.
	 */
	/** @TupleReturn */
	getMaxLengths(): [number, number];

	/**
	 * Get the pulley ratio.
	 *
	 * @return {number} ratio, The pulley ratio of the joint.
	 */
	getRatio(): number;

	/**
	 * Set the total length of the rope.
	 *
	 *
	 * Setting a new length for the rope updates the maximum length values of the
	 * joint.
	 *
	 * @param length The new length of the rope in the joint.
	 */
	setConstant(length: number): void;

	/**
	 * Set the maximum lengths of the rope segments.
	 *
	 *
	 * The physics module also imposes maximum values for the rope segments. If the
	 * parameters exceed these values, the maximum values are set instead of the
	 * requested values.
	 *
	 * @param max1 The new maximum length of the first segment.
	 * @param max2 The new maximum length of the second segment.
	 */
	setMaxLengths(max1: number, max2: number): void;

	/**
	 * Set the pulley ratio.
	 *
	 * @param ratio The new pulley ratio of the joint.
	 */
	setRatio(ratio: number): void;

}
declare interface RevoluteJoint extends Joint {
	/**
	 * Checks whether the limits are enabled.
	 *
	 * @return {boolean} enabled, True if enabled, false otherwise.
	 */
	areLimitsEnabled(): boolean;

	/**
	 * Enables or disables the joint limits.
	 *
	 * @param enable True to enable, false to disable.
	 */
	setLimitsEnabled(enable: boolean): void;

	/**
	 * Starts or stops the joint motor.
	 *
	 * @param enable True to enable, false to disable.
	 */
	setMotorEnabled(enable: boolean): void;

	/**
	 * Get the current joint angle.
	 *
	 * @return {number} angle, The joint angle in radians.
	 */
	getJointAngle(): number;

	/**
	 * Get the current joint angle speed.
	 *
	 * @return {number} s, Joint angle speed in radians/second.
	 */
	getJointSpeed(): number;

	/**
	 * Gets the joint limits.
	 *
	 * @return {number} lower, The lower limit, in radians.
	 * @return {number} upper, The upper limit, in radians.
	 */
	/** @TupleReturn */
	getLimits(): [number, number];

	/**
	 * Gets the lower limit.
	 *
	 * @return {number} lower, The lower limit, in radians.
	 */
	getLowerLimit(): number;

	/**
	 * Gets the maximum motor force.
	 *
	 * @return {number} f, The maximum motor force, in Nm.
	 */
	getMaxMotorTorque(): number;

	/**
	 * Gets the motor speed.
	 *
	 * @return {number} s, The motor speed, radians per second.
	 */
	getMotorSpeed(): number;

	/**
	 * Get the current motor force.
	 *
	 * @return {number} f, The current motor force, in Nm.
	 */
	getMotorTorque(): number;

	/**
	 * Gets the upper limit.
	 *
	 * @return {number} upper, The upper limit, in radians.
	 */
	getUpperLimit(): number;

	/**
	 * Checks whether the motor is enabled.
	 *
	 * @return {boolean} enabled, True if enabled, false if disabled.
	 */
	isMotorEnabled(): boolean;

	/**
	 * Sets the limits.
	 *
	 * @param lower The lower limit, in radians.
	 * @param upper The upper limit, in radians.
	 */
	setLimits(lower: number, upper: number): void;

	/**
	 * Sets the lower limit.
	 *
	 * @param lower The lower limit, in radians.
	 */
	setLowerLimit(lower: number): void;

	/**
	 * Set the maximum motor force.
	 *
	 * @param f The maximum motor force, in Nm.
	 */
	setMaxMotorTorque(f: number): void;

	/**
	 * Sets the motor speed.
	 *
	 * @param s The motor speed, radians per second.
	 */
	setMotorSpeed(s: number): void;

	/**
	 * Sets the upper limit.
	 *
	 * @param upper The upper limit, in radians.
	 */
	setUpperLimit(upper: number): void;

}
declare interface RopeJoint extends Joint {
	/**
	 * Gets the maximum length of a RopeJoint.
	 *
	 * @return {number} maxLength, The maximum length of the RopeJoint.
	 */
	getMaxLength(): number;

	/**
	 * Sets the maximum length of a RopeJoint.
	 *
	 * @param maxLength The maximum length of the RopeJoint.
	 */
	setMaxLength(maxLength: number): void;

}
declare interface Shape extends Object {
	/**
	 * Returns the points of the bounding box for the transformed shape.
	 *
	 * @param tx The translation of the shape on the x-axis.
	 * @param ty The translation of the shape on the y-axis.
	 * @param tr The shape rotation.
	 * @param childIndex The index of the child to compute the bounding box of.
	 * @return {number} topLeftX, The x position of the top-left point.
	 * @return {number} topLeftY, The y position of the top-left point.
	 * @return {number} bottomRightX, The x position of the bottom-right point.
	 * @return {number} bottomRightY, The y position of the bottom-right point.
	 */
	/** @TupleReturn */
	computeAABB(tx: number, ty: number, tr: number, childIndex?: number): [number, number, number, number];

	/**
	 * Computes the mass properties for the shape with the specified density.
	 *
	 * @param density The shape density.
	 * @return {number} x, The x postition of the center of mass.
	 * @return {number} y, The y postition of the center of mass.
	 * @return {number} mass, The mass of the shape.
	 * @return {number} inertia, The rotational inertia.
	 */
	/** @TupleReturn */
	computeMass(density: number): [number, number, number, number];

	/**
	 * Returns the number of children the shape has.
	 *
	 * @return {number} count, The number of children.
	 */
	getChildCount(): number;

	/**
	 * Gets the radius of the shape.
	 *
	 * @return {number} radius, The radius of the shape.
	 */
	getRadius(): number;

	/**
	 * Gets a string representing the Shape. This function can be useful for
	 * conditional debug drawing.
	 *
	 * @return {ShapeType} type, The type of the Shape.
	 */
	getType(): ShapeType;

	/**
	 * Casts a ray against the shape and returns the surface normal vector and the
	 * line position where the ray hit. If the ray missed the shape, nil will be
	 * returned. The Shape can be transformed to get it into the desired position.
	 *
	 *
	 * The ray starts on the first point of the input line and goes towards the second
	 * point of the line. The fourth argument is the maximum distance the ray is going
	 * to travel as a scale factor of the input line length.
	 *
	 *
	 * The childIndex parameter is used to specify which child of a parent shape, such
	 * as a ChainShape, will be ray casted. For ChainShapes, the index of 1 is the
	 * first edge on the chain. Ray casting a parent shape will only test the child
	 * specified so if you want to test every shape of the parent, you must loop
	 * through all of its children.
	 *
	 *
	 * The world position of the impact can be calculated by multiplying the line
	 * vector with the third return value and adding it to the line starting point.
	 *
	 *
	 * hitx, hity = x1 + (x2 - x1) * fraction, y1 + (y2 - y1) * fraction
	 *
	 * @param x1 The x position of the input line starting point.
	 * @param y1 The y position of the input line starting point.
	 * @param x2 The x position of the input line end point.
	 * @param y2 The y position of the input line end point.
	 * @param maxFraction Ray length parameter.
	 * @param tx The translation of the shape on the x-axis.
	 * @param ty The translation of the shape on the y-axis.
	 * @param tr The shape rotation.
	 * @param childIndex The index of the child the ray gets cast against.
	 * @return {number} xn, The x component of the normal vector of the edge where the ray hit the shape.
	 * @return {number} yn, The y component of the normal vector of the edge where the ray hit the shape.
	 * @return {number} fraction, The position on the input line where the intersection happened as a factor of the line length.
	 */
	/** @TupleReturn */
	rayCast(x1: number, y1: number, x2: number, y2: number, maxFraction: number, tx: number, ty: number, tr: number, childIndex?: number): [number, number, number];

	/**
	 * Checks whether a point lies inside the shape. This is particularly useful for
	 * mouse interaction with the shapes. By looping through all shapes and testing
	 * the mouse position with this function, we can find which shapes the mouse
	 * touches.
	 *
	 * @param x The x component of the point.
	 * @param y The y component of the point.
	 * @return {boolean} hit, True if inside, false if outside
	 */
	testPoint(x: number, y: number): boolean;

}
declare interface WeldJoint extends Joint {
	/**
	 * Returns the damping ratio of the joint.
	 *
	 * @return {number} ratio, The damping ratio.
	 */
	getDampingRatio(): number;

	/**
	 * Returns the frequency.
	 *
	 * @return {number} freq, The frequency in hertz.
	 */
	getFrequency(): number;

	/**
	 * The new damping ratio.
	 *
	 * @param ratio The new damping ratio.
	 */
	setDampingRatio(ratio: number): void;

	/**
	 * Sets a new frequency.
	 *
	 * @param freq The new frequency in hertz.
	 */
	setFrequency(freq: number): void;

}
declare interface WheelJoint extends Joint {
	/**
	 * Gets the world-space axis vector of the Wheel Joint.
	 *
	 * @return {number} x, The x-axis coordinate of the world-space axis vector.
	 * @return {number} y, The y-axis coordinate of the world-space axis vector.
	 */
	/** @TupleReturn */
	getAxis(): [number, number];

	/**
	 * Returns the current joint translation speed.
	 *
	 * @return {number} speed, The translation speed of the joint in meters per second.
	 */
	getJointSpeed(): number;

	/**
	 * Returns the current joint translation.
	 *
	 * @return {number} position, The translation of the joint in meters.
	 */
	getJointTranslation(): number;

	/**
	 * Returns the maximum motor torque.
	 *
	 * @return {number} maxTorque, The maximum torque of the joint motor in newton meters.
	 */
	getMaxMotorTorque(): number;

	/**
	 * Returns the speed of the motor.
	 *
	 * @return {number} speed, The speed of the joint motor in radians per second.
	 */
	getMotorSpeed(): number;

	/**
	 * Returns the current torque on the motor.
	 *
	 * @param invdt How long the force applies. Usually the inverse time step or 1/dt.
	 * @return {number} torque, The torque on the motor in newton meters.
	 */
	getMotorTorque(invdt: number): number;

	/**
	 * Returns the damping ratio.
	 *
	 * @return {number} ratio, The damping ratio.
	 */
	getSpringDampingRatio(): number;

	/**
	 * Returns the spring frequency.
	 *
	 * @return {number} freq, The frequency in hertz.
	 */
	getSpringFrequency(): number;

	/**
	 * Sets a new maximum motor torque.
	 *
	 * @param maxTorque The new maximum torque for the joint motor in newton meters.
	 */
	setMaxMotorTorque(maxTorque: number): void;

	/**
	 * Starts and stops the joint motor.
	 *
	 * @param enable True turns the motor on and false turns it off.
	 */
	setMotorEnabled(enable: boolean): void;

	/**
	 * Sets a new speed for the motor.
	 *
	 * @param speed The new speed for the joint motor in radians per second.
	 */
	setMotorSpeed(speed: number): void;

	/**
	 * Sets a new damping ratio.
	 *
	 * @param ratio The new damping ratio.
	 */
	setSpringDampingRatio(ratio: number): void;

	/**
	 * Sets a new spring frequency.
	 *
	 * @param freq The new frequency in hertz.
	 */
	setSpringFrequency(freq: number): void;

}
declare interface World extends Object {
	/**
	 * Destroys the world, taking all bodies, joints, fixtures and their shapes with
	 * it.
	 *
	 *
	 * An error will occur if you attempt to use any of the destroyed objects after
	 * calling this function.
	 *
	 */
	destroy(): void;

	/**
	 * Get the number of bodies in the world.
	 *
	 * @return {number} n, The number of bodies in the world.
	 */
	getBodyCount(): number;

	/**
	 * Returns a table with all bodies.
	 *
	 * @return {table} bodies, A sequence with all bodies.
	 */
	getBodyList(): table;

	/**
	 * Returns functions for the callbacks during the world update.
	 *
	 * @return {Function} beginContact, Gets called when two fixtures begin to overlap.
	 * @return {Function} endContact, Gets called when two fixtures cease to overlap.
	 * @return {Function} preSolve, Gets called before a collision gets resolved.
	 * @return {Function} postSolve, Gets called after the collision has been resolved.
	 */
	/** @TupleReturn */
	getCallbacks(): [Function, Function, Function, Function];

	/**
	 * Returns the number of contacts in the world.
	 *
	 * @return {number} n, The number of contacts in the world.
	 */
	getContactCount(): number;

	/**
	 * Returns the function for collision filtering.
	 *
	 * @return {Function} contactFilter, The function that handles the contact filtering.
	 */
	getContactFilter(): Function;

	/**
	 * Returns a table with all contacts.
	 *
	 * @return {table} contacts, A sequence with all contacts.
	 */
	getContactList(): table;

	/**
	 * Get the gravity of the world.
	 *
	 * @return {number} x, The x component of gravity.
	 * @return {number} y, The y component of gravity.
	 */
	/** @TupleReturn */
	getGravity(): [number, number];

	/**
	 * Get the number of joints in the world.
	 *
	 * @return {number} n, The number of joints in the world.
	 */
	getJointCount(): number;

	/**
	 * Returns a table with all joints.
	 *
	 * @return {table} joints, A sequence with all joints.
	 */
	getJointList(): table;

	/**
	 * Gets whether the World is destroyed. Destroyed worlds cannot be used.
	 *
	 * @return {boolean} destroyed, Whether the World is destroyed.
	 */
	isDestroyed(): boolean;

	/**
	 * Returns if the world is updating its state.
	 *
	 *
	 * This will return true inside the callbacks from World:setCallbacks.
	 *
	 * @return {boolean} locked, Will be true if the world is in the process of updating its state.
	 */
	isLocked(): boolean;

	/**
	 * Returns the sleep behaviour of the world.
	 *
	 * @return {boolean} allowSleep, True if the bodies are allowed to sleep or false if not.
	 */
	isSleepingAllowed(): boolean;

	/**
	 * Calls a function for each fixture inside the specified area.
	 *
	 * @param topLeftX The x position of the top-left point.
	 * @param topLeftY The y position of the top-left point.
	 * @param bottomRightX The x position of the bottom-right point.
	 * @param bottomRightY The y position of the bottom-right point.
	 * @param callback This function gets passed one argument, the fixture, and should return a boolean. The search will continue if it is true or stop if it is false.
	 */
	queryBoundingBox(topLeftX: number, topLeftY: number, bottomRightX: number, bottomRightY: number, callback: Function): void;

	/**
	 * Casts a ray and calls a function for each fixtures it intersects.
	 *
	 * @param x1 The x position of the starting point of the ray.
	 * @param y1 The y position of the starting point of the ray.
	 * @param x2 The x position of the end point of the ray.
	 * @param y2 The y position of the end point of the ray.
	 * @param callback This function gets six arguments and should return a number.
	 */
	rayCast(x1: number, y1: number, x2: number, y2: number, callback: Function): void;

	/**
	 * Sets functions for the collision callbacks during the world update.
	 *
	 *
	 * Four Lua functions can be given as arguments. The value nil removes a function.
	 *
	 *
	 * When called, each function will be passed three arguments. The first two
	 * arguments are the colliding fixtures and the third argument is the Contact
	 * between them. The PostSolve callback additionally gets the normal and tangent
	 * impulse for each contact point.
	 *
	 * @param beginContact Gets called when two fixtures begin to overlap.
	 * @param endContact Gets called when two fixtures cease to overlap.
	 * @param preSolve Gets called before a collision gets resolved.
	 * @param postSolve Gets called after the collision has been resolved.
	 */
	setCallbacks(beginContact: Function, endContact?: Function, preSolve?: Function, postSolve?: Function): void;

	/**
	 * Sets a function for collision filtering.
	 *
	 *
	 * If the group and category filtering doesn't generate a collision decision, this
	 * function gets called with the two fixtures as arguments. The function should
	 * return a boolean value where true means the fixtures will collide and false
	 * means they will pass through each other.
	 *
	 * @param filter The function handling the contact filtering.
	 */
	setContactFilter(filter: Function): void;

	/**
	 * Set the gravity of the world.
	 *
	 * @param x The x component of gravity.
	 * @param y The y component of gravity.
	 */
	setGravity(x: number, y: number): void;

	/**
	 * Set the sleep behaviour of the world.
	 *
	 *
	 * A sleeping body is much more efficient to simulate than when awake.
	 *
	 *
	 * If sleeping is allowed, any body that has come to rest will sleep.
	 *
	 * @param allowSleep True if the bodies are allowed to sleep or false if not.
	 */
	setSleepingAllowed(allowSleep: boolean): void;

	/**
	 * Translates the World's origin. Useful in large worlds where floating point
	 * precision issues become noticeable at far distances from the origin.
	 *
	 * @param x The x component of the new origin with respect to the old origin.
	 * @param y The y component of the new origin with respect to the old origin.
	 */
	translateOrigin(x: number, y: number): void;

	/**
	 * Update the state of the world.
	 *
	 * @param dt The time (in seconds) to advance the physics simulation.
	 * @param velocityiterations The maximum number of steps used to determine the new velocities when resolving a collision.
	 * @param positioniterations The maximum number of steps used to determine the new positions when resolving a collision.
	 */
	update(dt: number, velocityiterations?: number, positioniterations?: number): void;

}
declare interface Decoder extends Object {
	/**
	 * Returns the number of bits per sample.
	 *
	 * @return {number} bitDepth, Either 8 or 16.
	 */
	getBitDepth(): number;

	/**
	 * Returns the number of channels in the stream.
	 *
	 * @return {number} channels, 1 for mono, 2 for stereo.
	 */
	getChannelCount(): number;

	/**
	 * Gets the duration of the sound file. It may not always be sample-accurate, and
	 * it may return -1 if the duration cannot be determined at all.
	 *
	 * @return {number} duration, The duration of the sound file in seconds, or -1 if it cannot be determined.
	 */
	getDuration(): number;

	/**
	 * Returns the sample rate of the Decoder.
	 *
	 * @return {number} rate, Number of samples per second.
	 */
	getSampleRate(): number;

}
declare interface SoundData extends Data {
	/**
	 * Returns the number of bits per sample.
	 *
	 * @return {number} bits, Either 8 or 16.
	 */
	getBitDepth(): number;

	/**
	 * Returns the number of channels in the stream.
	 *
	 * @return {number} channels, 1 for mono, 2 for stereo.
	 */
	getChannelCount(): number;

	/**
	 * Gets the duration of the sound data.
	 *
	 * @return {number} duration, The duration of the sound data in seconds.
	 */
	getDuration(): number;

	/**
	 * Gets the sample at the specified position.
	 *
	 * @param i An integer value specifying the position of the sample (0 points to the first sample).
	 * @return {number} sample, The normalized sample (range -1.0 to 1.0).
	 */
	getSample(i: number): number;

	/**
	 * Returns the number of samples per channel of the SoundData.
	 *
	 * @return {number} count, Total number of samples.
	 */
	getSampleCount(): number;

	/**
	 * Returns the sample rate of the SoundData.
	 *
	 * @return {number} rate, Number of samples per second.
	 */
	getSampleRate(): number;

	/**
	 * Sets the sample at the specified position.
	 *
	 * @param i The position of the sample (0 means first sample).
	 * @param sample A normalized sample (range -1.0 to 1.0).
	 */
	setSample(i: number, sample: number): void;

}
declare interface Thread extends Object {
	/**
	 * Retrieves the error string from the thread if it produced an error.
	 *
	 * @return {string} message, The error message.
	 */
	getError(): string;

	/**
	 * Starts the thread.
	 *
	 *
	 * Threads can be restarted after they have completed their execution.
	 *
	 */
	start(): void;

	/**
	 * Starts the thread.
	 *
	 *
	 * Threads can be restarted after they have completed their execution.
	 *
	 * @param arg1 A string, number, boolean, LÖVE object, or simple table.
	 * @param arg2 A string, number, boolean, LÖVE object, or simple table.
	 * @param ... You can continue passing values to the thread.
	 */
	start(arg1: Variant, arg2: Variant, ...vararg: Variant[]): void;

	/**
	 * Wait for a thread to finish. This call will block until the thread finishes.
	 *
	 */
	wait(): void;

	/**
	 * Returns whether the thread is currently running.
	 *
	 *
	 * Threads which are not running can be (re)started with Thread:start.
	 *
	 * @return {boolean} running, True if the thread is running, false otherwise.
	 */
	isRunning(): boolean;

}
declare interface Channel extends Object {
	/**
	 * Clears all the messages in the Channel queue.
	 *
	 */
	clear(): void;

	/**
	 * Retrieves the value of a Channel message and removes it from the message queue.
	 *
	 *
	 * It waits until a message is in the queue then returns the message value.
	 *
	 * @return {Variant} value, The contents of the message.
	 */
	demand(): Variant;

	/**
	 * Retrieves the value of a Channel message and removes it from the message queue.
	 *
	 *
	 * It waits until a message is in the queue then returns the message value.
	 *
	 * @param timeout The maximum amount of time to wait.
	 * @return {Variant} value, The contents of the message or nil if the timeout expired.
	 */
	demand(timeout: number): Variant;

	/**
	 * Retrieves the number of messages in the thread Channel queue.
	 *
	 * @return {number} count, The number of messages in the queue.
	 */
	getCount(): number;

	/**
	 * Gets whether a pushed value has been popped or otherwise removed from the
	 * Channel.
	 *
	 * @param id An id value previously returned by Channel:push.
	 * @return {boolean} hasread, Whether the value represented by the id has been removed from the Channel via Channel:pop, Channel:demand, or Channel:clear.
	 */
	hasRead(id: number): boolean;

	/**
	 * Retrieves the value of a Channel message, but leaves it in the queue.
	 *
	 *
	 * It returns nil if there's no message in the queue.
	 *
	 * @return {Variant} value, The contents of the message.
	 */
	peek(): Variant;

	/**
	 * Executes the specified function atomically with respect to this Channel.
	 *
	 *
	 * Calling multiple methods in a row on the same Channel is often useful. However
	 * if multiple Threads are calling this Channel's methods at the same time, the
	 * different calls on each Thread might end up interleaved (e.g. one or more of
	 * the second thread's calls may happen in between the first thread's calls.)
	 *
	 *
	 * This method avoids that issue by making sure the Thread calling the method has
	 * exclusive access to the Channel until the specified function has returned.
	 *
	 * @param func The function to call, the form of function(channel, arg1, arg2, ...) end. The Channel is passed as the first argument to the function when it is called.
	 * @param arg1 Additional arguments that the given function will receive when it is called.
	 * @param ... Additional arguments that the given function will receive when it is called.
	 * @return {any} ret1, The first return value of the given function (if any.)
	 * @return {any} ..., Any other return values.
	 */
	/** @TupleReturn */
	performAtomic(func: Function, arg1: any, ...vararg: any[]): [any, any];

	/**
	 * Retrieves the value of a Channel message and removes it from the message queue.
	 *
	 *
	 * It returns nil if there are no messages in the queue.
	 *
	 * @return {Variant} value, The contents of the message.
	 */
	pop(): Variant;

	/**
	 * Send a message to the thread Channel.
	 *
	 *
	 * See Variant for the list of supported types.
	 *
	 * @param value The contents of the message.
	 */
	push(value: Variant): void;

	/**
	 * Send a message to the thread Channel and wait for a thread to accept it.
	 *
	 *
	 * See Variant for the list of supported types.
	 *
	 * @param value The contents of the message.
	 * @return {boolean} success, Whether the message was successfully supplied (always true).
	 */
	supply(value: Variant): boolean;

	/**
	 * Send a message to the thread Channel and wait for a thread to accept it.
	 *
	 *
	 * See Variant for the list of supported types.
	 *
	 * @param value The contents of the message.
	 * @param timeout The maximum amount of time to wait.
	 * @return {boolean} success, Whether the message was successfully supplied before the timeout expired.
	 */
	supply(value: Variant, timeout: number): boolean;

}
declare interface VideoStream extends Object {
}
interface Data {
	/**
	 * Gets a pointer to the Data.
	 *
	 * @return {LightUserData} pointer, A raw pointer to the Data.
	 */
	getPointer(): LightUserData;

	/**
	 * Gets the size of the Data.
	 *
	 * @return {number} size, The size of the Data in bytes.
	 */
	getSize(): number;

	/**
	 * Gets the full Data as a string.
	 *
	 * @return {string} data, The raw data.
	 */
	getString(): string;

}
interface Drawable {
}
interface Object {
	/**
	 * Gets the type of the object as a string.
	 *
	 * @return {string} type, The type as a string.
	 */
	type(): string;

	/**
	 * Checks whether an object is of a certain type. If the object has the type with
	 * the specified name in its hierarchy, this function will return true.
	 *
	 * @param name The name of the type to check for.
	 * @return {boolean} b, True if the object is of the specified type, false otherwise.
	 */
	typeOf(name: string): boolean;

}
declare namespace love {
	/**
	 * Gets the current running version of LÖVE.
	 *
	 * @return {number} major, The major version of LÖVE, i.e. 0 for version 0.9.1.
	 * @return {number} minor, The minor version of LÖVE, i.e. 9 for version 0.9.1.
	 * @return {number} revision, The revision version of LÖVE, i.e. 1 for version 0.9.1.
	 * @return {string} codename, The codename of the current version, i.e. "Baby Inspector" for version 0.9.1.
	 */
	/** @TupleReturn */
	export function getVersion(): [number, number, number, string];

	/**
	 * Sets whether LÖVE displays warnings when using deprecated functionality. It is
	 * disabled by default in fused mode, and enabled by default otherwise.
	 *
	 *
	 * When deprecation output is enabled, the first use of a formally deprecated
	 * LÖVE API will show a message at the bottom of the screen for a short time, and
	 * print the message to the console.
	 *
	 * @param enable Whether to enable or disable deprecation output.
	 */
	export function setDeprecationOutput(enable: boolean): void;

	/**
	 * Gets whether LÖVE displays warnings when using deprecated functionality. It is
	 * disabled by default in fused mode, and enabled by default otherwise.
	 *
	 *
	 * When deprecation output is enabled, the first use of a formally deprecated
	 * LÖVE API will show a message at the bottom of the screen for a short time, and
	 * print the message to the console.
	 *
	 * @return {boolean} enabled, Whether deprecation output is enabled.
	 */
	export function hasDeprecationOutput(): boolean;

	/**
	 * If a file called conf.lua is present in your game folder (or .love file), it is
	 * run before the LÖVE modules are loaded. You can use this file to overwrite the
	 * love.conf function, which is later called by the LÖVE 'boot' script. Using the
	 * love.conf function, you can set some configuration options, and change things
	 * like the default size of the window, which modules are loaded, and other stuff.
	 *
	 * @param t The love.conf function takes one argument: a table filled with all the default values which you can overwrite to your liking. If you want to change the default window size, for instance, do:

function love.conf(t)
    t.window.width = 1024
    t.window.height = 768
end

If you don't need the physics module or joystick module, do the following.

function love.conf(t)
    t.modules.joystick = false
    t.modules.physics = false
end

Setting unused modules to false is encouraged when you release your game. It reduces startup time slightly (especially if the joystick module is disabled) and reduces memory usage (slightly).

Note that you can't disable love.filesystem; it's mandatory. The same goes for the love module itself. love.graphics needs love.window to be enabled.
	 */
	export let conf: (t: table) => void;

	/**
	 * Callback function triggered when a directory is dragged and dropped onto the
	 * window.
	 *
	 * @param path The full platform-dependent path to the directory. It can be used as an argument to love.filesystem.mount, in order to gain read access to the directory with love.filesystem.
	 */
	export let directorydropped: (path: string) => void;

	/**
	 * Callback function used to draw on the screen every frame.
	 *
	 */
	export let draw: () => void;

	/**
	 * The error handler, used to display error messages.
	 *
	 * @param msg The error message.
	 */
	export let errorhandler: (msg: string) => void;

	/**
	 * Callback function triggered when a file is dragged and dropped onto the window.
	 *
	 * @param file The unopened File object representing the file that was dropped.
	 */
	export let filedropped: (file: File) => void;

	/**
	 * Callback function triggered when window receives or loses focus.
	 *
	 * @param focus True if the window gains focus, false if it loses focus.
	 */
	export let focus: (focus: boolean) => void;

	/**
	 * Called when a Joystick's virtual gamepad axis is moved.
	 *
	 * @param joystick The joystick object.
	 * @param axis The virtual gamepad axis.
	 * @param value The new axis value.
	 */
	export let gamepadaxis: (joystick: Joystick, axis: GamepadAxis, value: number) => void;

	/**
	 * Called when a Joystick's virtual gamepad button is pressed.
	 *
	 * @param joystick The joystick object.
	 * @param button The virtual gamepad button.
	 */
	export let gamepadpressed: (joystick: Joystick, button: GamepadButton) => void;

	/**
	 * Called when a Joystick's virtual gamepad button is released.
	 *
	 * @param joystick The joystick object.
	 * @param button The virtual gamepad button.
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
	 */
	export let joystickadded: (joystick: Joystick) => void;

	/**
	 * Called when a joystick axis moves.
	 *
	 * @param joystick The joystick object.
	 * @param axis The axis number.
	 * @param value The new axis value.
	 */
	export let joystickaxis: (joystick: Joystick, axis: number, value: number) => void;

	/**
	 * Called when a joystick hat direction changes.
	 *
	 * @param joystick The joystick object.
	 * @param hat The hat number.
	 * @param direction The new hat direction.
	 */
	export let joystickhat: (joystick: Joystick, hat: number, direction: JoystickHat) => void;

	/**
	 * Called when a joystick button is pressed.
	 *
	 * @param joystick The joystick number.
	 * @param button The button number.
	 */
	export let joystickpressed: (joystick: number, button: number) => void;

	/**
	 * Called when a joystick button is released.
	 *
	 * @param joystick The joystick number.
	 * @param button The button number.
	 */
	export let joystickreleased: (joystick: number, button: number) => void;

	/**
	 * Called when a Joystick is disconnected.
	 *
	 * @param joystick The now-disconnected Joystick object.
	 */
	export let joystickremoved: (joystick: Joystick) => void;

	/**
	 * Callback function triggered when a key is pressed.
	 *
	 * @param key Character of the pressed key.
	 * @param scancode The scancode representing the pressed key.
	 * @param isrepeat Whether this keypress event is a repeat. The delay between key repeats depends on the user's system settings.
	 */
	export let keypressed: (key: KeyConstant, scancode: Scancode, isrepeat: boolean) => void;

	/**
	 * Callback function triggered when a keyboard key is released.
	 *
	 * @param key Character of the released key.
	 * @param scancode The scancode representing the released key.
	 */
	export let keyreleased: (key: KeyConstant, scancode: Scancode) => void;

	/**
	 * This function is called exactly once at the beginning of the game.
	 *
	 * @param arg Command line arguments given to the game.
	 */
	export let load: (arg: table) => void;

	/**
	 * Callback function triggered when the system is running out of memory on mobile
	 * devices.
	 *
	 *
	 * Mobile operating systems may forcefully kill the game if it uses too much
	 * memory, so any non-critical resource should be removed if possible (by setting
	 * all variables referencing the resources to nil, and calling collectgarbage()),
	 * when this event is triggered. Sounds and images in particular tend to use the
	 * most memory.
	 *
	 */
	export let lowmemory: () => void;

	/**
	 * Callback function triggered when window receives or loses mouse focus.
	 *
	 * @param focus Whether the window has mouse focus or not.
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
	 */
	export let mousemoved: (x: number, y: number, dx: number, dy: number, istouch: boolean) => void;

	/**
	 * Callback function triggered when a mouse button is pressed.
	 *
	 * @param x Mouse x position, in pixels.
	 * @param y Mouse y position, in pixels.
	 * @param button The button index that was pressed. 1 is the primary mouse button, 2 is the secondary mouse button and 3 is the middle button. Further buttons are mouse dependent
	 * @param isTouch True if the mouse button press originated from a touchscreen touch-press.
	 */
	export let mousepressed: (x: number, y: number, button: number, isTouch: boolean) => void;

	/**
	 * Callback function triggered when a mouse button is released.
	 *
	 * @param x Mouse x position, in pixels.
	 * @param y Mouse y position, in pixels.
	 * @param button The button index that was released. 1 is the primary mouse button, 2 is the secondary mouse button and 3 is the middle button. Further buttons are mouse dependent.
	 * @param isTouch True if the mouse button press originated from a touchscreen touch-release.
	 */
	export let mousereleased: (x: number, y: number, button: number, isTouch: boolean) => void;

	/**
	 * Callback function triggered when the game is closed.
	 *
	 * @return {boolean} r, Abort quitting. If true, do not close the game.
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
	 */
	export let resize: (w: number, h: number) => void;

	/**
	 * The main function, containing the main loop. A sensible default is used when
	 * left out.
	 *
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
	 */
	export let textedited: (text: string, start: number, length: number) => void;

	/**
	 * Called when text has been entered by the user. For example if shift-2 is
	 * pressed on an American keyboard layout, the text "@" will be generated.
	 *
	 * @param text The UTF-8 encoded unicode text.
	 */
	export let textinput: (text: string) => void;

	/**
	 * Callback function triggered when a Thread encounters an error.
	 *
	 * @param thread The thread which produced the error.
	 * @param errorstr The error message.
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
	 */
	export let touchreleased: (id: LightUserData, x: number, y: number, dx: number, dy: number, pressure: number) => void;

	/**
	 * Callback function used to update the state of the game every frame.
	 *
	 * @param dt Time since the last update in seconds.
	 */
	export let update: (dt: number) => void;

	/**
	 * Callback function triggered when window is minimized/hidden or unminimized by
	 * the user.
	 *
	 * @param visible True if the window is visible, false if it isn't.
	 */
	export let visible: (visible: boolean) => void;

	/**
	 * Callback function triggered when the mouse wheel is moved.
	 *
	 * @param x Amount of horizontal mouse wheel movement. Positive values indicate movement to the right.
	 * @param y Amount of vertical mouse wheel movement. Positive values indicate upward movement.
	 */
	export let wheelmoved: (x: number, y: number) => void;

	/**
	 * Provides an interface to create noise with the user's speakers.
	 *
	 */
	export namespace audio {
		/**
		 * Gets the current number of simultaneously playing sources.
		 *
		 * @return {number} count, The current number of simultaneously playing sources.
		 */
		export function getActiveSourceCount(): number;

		/**
		 * Returns the distance attenuation model.
		 *
		 * @return {DistanceModel} model, The current distance model. The default is 'inverseclamped'.
		 */
		export function getDistanceModel(): DistanceModel;

		/**
		 * Gets the current global scale factor for velocity-based doppler effects.
		 *
		 * @return {number} scale, The current doppler scale factor.
		 */
		export function getDopplerScale(): number;

		/**
		 * Returns the number of sources which are currently playing or paused.
		 *
		 * @return {number} numSources, The number of sources which are currently playing or paused.
		 */
		export function getSourceCount(): number;

		/**
		 * Returns the orientation of the listener.
		 *
		 * @return {number} fx, The X component of the forward vector of the listener orientation.
		 * @return {number} fy, The Y component of the forward vector of the listener orientation.
		 * @return {number} fz, The Z component of the forward vector of the listener orientation.
		 * @return {number} ux, The X component of the up vector of the listener orientation.
		 * @return {number} uy, The Y component of the up vector of the listener orientation.
		 * @return {number} uz, The Z component of the up vector of the listener orientation.
		 */
		/** @TupleReturn */
		export function getOrientation(): [number, number, number, number, number, number];

		/**
		 * Returns the position of the listener.
		 *
		 * @return {number} x, The X position of the listener.
		 * @return {number} y, The Y position of the listener.
		 * @return {number} z, The Z position of the listener.
		 */
		/** @TupleReturn */
		export function getPosition(): [number, number, number];

		/**
		 * Returns the velocity of the listener.
		 *
		 * @return {number} x, The X velocity of the listener.
		 * @return {number} y, The Y velocity of the listener.
		 * @return {number} z, The Z velocity of the listener.
		 */
		/** @TupleReturn */
		export function getVelocity(): [number, number, number];

		/**
		 * Returns the master volume.
		 *
		 * @return {number} volume, The current master volume.
		 */
		export function getVolume(): number;

		/**
		 * Creates a new Source from a file or SoundData. Sources created from SoundData
		 * are always static.
		 *
		 * @param filename The filepath to create a Source from.
		 * @param type Streaming or static source.
		 * @return {Source} source, A new Source that can play the specified audio.
		 */
		export function newSource(filename: string, type?: SourceType): Source;

		/**
		 * Creates a new Source from a file or SoundData. Sources created from SoundData
		 * are always static.
		 *
		 * @param file A File pointing to an audio file.
		 * @param type Streaming or static source.
		 * @return {Source} source, A new Source that can play the specified audio.
		 */
		export function newSource(file: File, type?: SourceType): Source;

		/**
		 * Creates a new Source from a file or SoundData. Sources created from SoundData
		 * are always static.
		 *
		 * @param decoder The Decoder to create a Source from.
		 * @param type Streaming or static source.
		 * @return {Source} source, A new Source that can play the specified audio.
		 */
		export function newSource(decoder: Decoder, type?: SourceType): Source;

		/**
		 * Creates a new Source from a file or SoundData. Sources created from SoundData
		 * are always static.
		 *
		 * @param soundData The SoundData to create a Source from.
		 * @return {Source} source, A new Source that can play the specified audio. The SourceType of the returned audio is "static".
		 */
		export function newSource(soundData: SoundData): Source;

		/**
		 * Creates a new Source from a file or SoundData. Sources created from SoundData
		 * are always static.
		 *
		 * @param fileData The FileData to create a Source from.
		 * @return {Source} source, A new Source that can play the specified audio.
		 */
		export function newSource(fileData: FileData): Source;

		/**
		 * Pauses currently played Sources.
		 *
		 */
		export function pause(): void;

		/**
		 * Pauses currently played Sources.
		 *
		 * @param source The source on which to pause the playback.
		 */
		export function pause(source: Source): void;

		/**
		 * Plays the specified Source.
		 *
		 * @param source The Source to play.
		 */
		export function play(source: Source): void;

		/**
		 * Resumes all audio
		 *
		 */
		export function resume(): void;

		/**
		 * Resumes all audio
		 *
		 * @param source The source on which to resume the playback.
		 */
		export function resume(source: Source): void;

		/**
		 * Rewinds all playing audio.
		 *
		 */
		export function rewind(): void;

		/**
		 * Rewinds all playing audio.
		 *
		 * @param source The source to rewind.
		 */
		export function rewind(source: Source): void;

		/**
		 * Sets the distance attenuation model.
		 *
		 * @param model The new distance model.
		 */
		export function setDistanceModel(model: DistanceModel): void;

		/**
		 * Sets a global scale factor for velocity-based doppler effects. The default
		 * scale value is 1.
		 *
		 * @param scale The new doppler scale factor. The scale must be greater than 0.
		 */
		export function setDopplerScale(scale: number): void;

		/**
		 * Sets the orientation of the listener.
		 *
		 * @param fx The X component of the forward vector of the listener orientation.
		 * @param fy The Y component of the forward vector of the listener orientation.
		 * @param fz The Z component of the forward vector of the listener orientation.
		 * @param ux The X component of the up vector of the listener orientation.
		 * @param uy The Y component of the up vector of the listener orientation.
		 * @param uz The Z component of the up vector of the listener orientation.
		 */
		export function setOrientation(fx: number, fy: number, fz: number, ux: number, uy: number, uz: number): void;

		/**
		 * Sets the position of the listener, which determines how sounds play.
		 *
		 * @param x The X position of the listener.
		 * @param y The Y position of the listener.
		 * @param z The Z position of the listener.
		 */
		export function setPosition(x: number, y: number, z: number): void;

		/**
		 * Sets the velocity of the listener.
		 *
		 * @param x The X velocity of the listener.
		 * @param y The Y velocity of the listener.
		 * @param z The Z velocity of the listener.
		 */
		export function setVelocity(x: number, y: number, z: number): void;

		/**
		 * Sets the master volume.
		 *
		 * @param volume 1.0f is max and 0.0f is off.
		 */
		export function setVolume(volume: number): void;

		/**
		 * Stops currently played sources.
		 *
		 */
		export function stop(): void;

		/**
		 * Stops currently played sources.
		 *
		 * @param source The source on which to stop the playback.
		 */
		export function stop(source: Source): void;

	}
	/**
	 * Manages events, like keypresses.
	 *
	 */
	export namespace event {
		/**
		 * Clears the event queue.
		 *
		 */
		export function clear(): void;

		/**
		 * Returns an iterator for messages in the event queue.
		 *
		 * @return {Function} i, Iterator function usable in a for loop.
		 */
		export function poll(): Function;

		/**
		 * Pump events into the event queue. This is a low-level function, and is usually
		 * not called by the user, but by love.run. Note that this does need to be called
		 * for any OS to think you're still running, and if you want to handle
		 * OS-generated events at all (think callbacks). love.event.pump can only be
		 * called from the main thread, but afterwards, the rest of love.event can be used
		 * from any other thread.
		 *
		 */
		export function pump(): void;

		/**
		 * Adds an event to the event queue.
		 *
		 * @param e The name of the event.
		 * @param a First event argument.
		 * @param b Second event argument.
		 * @param c Third event argument.
		 * @param d Fourth event argument.
		 */
		export function push(e: Event, a?: Variant, b?: Variant, c?: Variant, d?: Variant): void;

		/**
		 * Adds the quit event to the queue.
		 *
		 *
		 * The quit event is a signal for the event handler to close LÖVE. It's possible
		 * to abort the exit process with the love.quit callback.
		 *
		 */
		export function quit(): void;

		/**
		 * Adds the quit event to the queue.
		 *
		 *
		 * The quit event is a signal for the event handler to close LÖVE. It's possible
		 * to abort the exit process with the love.quit callback.
		 *
		 * @param exitstatus The program exit status to use when closing the application.
		 */
		export function quit(exitstatus?: number): void;

		/**
		 * Adds the quit event to the queue.
		 *
		 *
		 * The quit event is a signal for the event handler to close LÖVE. It's possible
		 * to abort the exit process with the love.quit callback.
		 *
		 * @param "restart" Restarts the game without relaunching the executable. This cleanly shuts down the main Lua state instance and creates a brand new one.
		 */
		export function quit(restartstr: RestartString): void;

		/**
		 * Like love.event.poll but blocks until there is an event in the queue.
		 *
		 * @return {Event} e, The type of event.
		 * @return {Variant} a, First event argument.
		 * @return {Variant} b, Second event argument.
		 * @return {Variant} c, Third event argument.
		 * @return {Variant} d, Fourth event argument.
		 */
		/** @TupleReturn */
		export function wait(): [Event, Variant, Variant, Variant, Variant];

	}
	/**
	 * Provides an interface to the user's filesystem.
	 *
	 */
	export namespace filesystem {
		/**
		 * Append data to an existing file.
		 *
		 * @param name The name (and path) of the file.
		 * @param data The data that should be written to the file
		 * @param size How many bytes to write.
		 * @return {boolean} success, True if the operation was successful, or nil if there was an error.
		 * @return {string} errormsg, The error message on failure.
		 */
		/** @TupleReturn */
		export function append(name: string, data: string, size?: number): [boolean, string];

		/**
		 * Gets whether love.filesystem follows symbolic links.
		 *
		 * @return {boolean} enable, Whether love.filesystem follows symbolic links.
		 */
		export function areSymlinksEnabled(): boolean;

		/**
		 * Creates a directory.
		 *
		 * @param name The directory to create.
		 * @return {boolean} success, True if the directory was created, false if not.
		 */
		export function createDirectory(name: string): boolean;

		/**
		 * Returns the application data directory (could be the same as getUserDirectory)
		 *
		 * @return {string} path, The path of the application data directory.
		 */
		export function getAppdataDirectory(): string;

		/**
		 * Gets the filesystem paths that will be searched for c libraries when require is
		 * called.
		 *
		 *
		 * The paths string returned by this function is a sequence of path templates
		 * separated by semicolons. The argument passed to require will be inserted in
		 * place of any question mark ("?") character in each template (after the dot
		 * characters in the argument passed to require are replaced by directory
		 * separators.) Additionally, any occurrence of a double question mark ("??") will
		 * be replaced by the name passed to require and the default library extension for
		 * the platform.
		 *
		 *
		 * The paths are relative to the game's source and save directories, as well as
		 * any paths mounted with love.filesystem.mount.
		 *
		 * @return {string} paths, The paths that the require function will check for c libraries in love's filesystem.
		 */
		export function getCRequirePath(): string;

		/**
		 * Returns a table with the names of files and subdirectories in the specified
		 * path. The table is not sorted in any way; the order is undefined.
		 *
		 *
		 * If the path passed to the function exists in the game and the save directory,
		 * it will list the files and directories from both places.
		 *
		 * @param dir The directory.
		 * @return {table} items, A sequence with the names of all files and subdirectories as strings.
		 */
		export function getDirectoryItems(dir: string): table;

		/**
		 * Gets the write directory name for your game. Note that this only returns the
		 * name of the folder to store your files in, not the full location.
		 *
		 * @param name The identity that is used as write directory.
		 */
		export function getIdentity(name: string): void;

		/**
		 * Gets information about the specified file or directory.
		 *
		 * @param path The file or directory path to check.
		 * @return {table} info, A table containing information about the specified path, or nil if nothing exists at the path. The table contains the following fields:
		 */
		export function getInfo(path: string): table;

		/**
		 * Gets information about the specified file or directory.
		 *
		 * @param path The file or directory path to check.
		 * @param info A table which will be filled in with info about the specified path.
		 * @return {table} info, A table containing information about the specified path, or nil if nothing exists at the path. The table contains the following fields:
		 */
		export function getInfo(path: string, info: table): table;

		/**
		 * Gets the platform-specific absolute path of the directory containing a
		 * filepath.
		 *
		 *
		 * This can be used to determine whether a file is inside the save directory or
		 * the game's source .love.
		 *
		 * @param filepath The filepath to get the directory of.
		 * @return {string} realdir, The platform-specific full path of the directory containing the filepath.
		 */
		export function getRealDirectory(filepath: string): string;

		/**
		 * Gets the filesystem paths that will be searched when require is called.
		 *
		 *
		 * The paths string returned by this function is a sequence of path templates
		 * separated by semicolons. The argument passed to require will be inserted in
		 * place of any question mark ("?") character in each template (after the dot
		 * characters in the argument passed to require are replaced by directory
		 * separators.)
		 *
		 *
		 * The paths are relative to the game's source and save directories, as well as
		 * any paths mounted with love.filesystem.mount.
		 *
		 * @return {string} paths, The paths that the require function will check in love's filesystem.
		 */
		export function getRequirePath(): string;

		/**
		 * Gets the full path to the designated save directory. This can be useful if you
		 * want to use the standard io library (or something else) to read or write in the
		 * save directory.
		 *
		 * @return {string} path, The absolute path to the save directory.
		 */
		export function getSaveDirectory(): string;

		/**
		 * Returns the full path to the the .love file or directory. If the game is fused
		 * to the LÖVE executable, then the executable is returned.
		 *
		 * @return {string} path, The full platform-dependent path of the .love file or directory.
		 */
		export function getSource(): string;

		/**
		 * Returns the full path to the directory containing the .love file. If the game
		 * is fused to the LÖVE executable, then the directory containing the executable
		 * is returned.
		 *
		 *
		 * If love.filesystem.isFused is true, the path returned by this function can be
		 * passed to love.filesystem.mount, which will make the directory containing the
		 * main game readable by love.filesystem.
		 *
		 * @return {string} path, The full platform-dependent path of the directory containing the .love file.
		 */
		export function getSourceBaseDirectory(): string;

		/**
		 * Returns the path of the user's directory.
		 *
		 * @return {string} path, The path of the user's directory.
		 */
		export function getUserDirectory(): string;

		/**
		 * Gets the current working directory.
		 *
		 * @return {string} path, The current working directory.
		 */
		export function getWorkingDirectory(): string;

		/**
		 * Initializes love.filesystem, will be called internally, so should not be used
		 * explicitly.
		 *
		 * @param appname The name of the application binary, typically love.
		 */
		export function init(appname: string): void;

		/**
		 * Gets whether the game is in fused mode or not.
		 *
		 *
		 * If a game is in fused mode, its save directory will be directly in the Appdata
		 * directory instead of Appdata/LOVE/. The game will also be able to load C Lua
		 * dynamic libraries which are located in the save directory.
		 *
		 *
		 * A game is in fused mode if the source .love has been fused to the executable
		 * (see Game Distribution), or if "--fused" has been given as a command-line
		 * argument when starting the game.
		 *
		 * @return {boolean} fused, True if the game is in fused mode, false otherwise.
		 */
		export function isFused(): boolean;

		/**
		 * Iterate over the lines in a file.
		 *
		 * @param name The name (and path) of the file.
		 * @return {Function} iterator, A function that iterates over all the lines in the file.
		 */
		export function lines(name: string): Function;

		/**
		 * Loads a Lua file (but does not run it).
		 *
		 * @param name The name (and path) of the file.
		 * @param errormsg The error message if file could not be opened.
		 * @return {Function} chunk, The loaded chunk.
		 */
		export function load(name: string, errormsg?: string): Function;

		/**
		 * Mounts a zip file or folder in the game's save directory for reading.
		 *
		 * @param archive The folder or zip file in the game's save directory to mount.
		 * @param mountpoint The new path the archive will be mounted to.
		 * @return {boolean} success, True if the archive was successfully mounted, false otherwise.
		 */
		export function mount(archive: string, mountpoint: string): boolean;

		/**
		 * Mounts a zip file or folder in the game's save directory for reading.
		 *
		 * @param archive The folder or zip file in the game's save directory to mount.
		 * @param mountpoint The new path the archive will be mounted to.
		 * @param appendToPath Whether the archive will be searched when reading a filepath before or after already-mounted archives. This includes the game's source and save directories.
		 * @return {boolean} success, True if the archive was successfully mounted, false otherwise.
		 */
		export function mount(archive: string, mountpoint: string, appendToPath?: string): boolean;

		/**
		 * Creates a new File object. It needs to be opened before it can be accessed.
		 *
		 * @param filename The filename of the file to read.
		 * @param mode The mode to open the file in.
		 * @return {File} file, The new File object, or nil if an error occurred.
		 * @return {string} errorstr, The error string if an error occurred.
		 */
		/** @TupleReturn */
		export function newFile(filename: string, mode?: FileMode): [File, string];

		/**
		 * Creates a new FileData object.
		 *
		 * @param contents The contents of the file.
		 * @param name The name of the file.
		 * @param decoder The method to use when decoding the contents.
		 * @return {FileData} data, Your new FileData.
		 */
		export function newFileData(contents: string, name: string, decoder?: FileDecoder): FileData;

		/**
		 * Creates a new FileData object.
		 *
		 * @param filepath Path to the file.
		 * @return {FileData} data, The new FileData, or nil if an error occurred.
		 * @return {string} err, The error string, if an error occurred.
		 */
		/** @TupleReturn */
		export function newFileData(filepath: string): [FileData, string];

		/**
		 * Read the contents of a file.
		 *
		 * @param name The name (and path) of the file.
		 * @param bytes How many bytes to read.
		 * @return {string} contents, The file contents.
		 * @return {number} size, How many bytes have been read.
		 */
		/** @TupleReturn */
		export function read(name: string, bytes?: number): [string, number];

		/**
		 * Removes a file or directory.
		 *
		 * @param name The file or directory to remove.
		 * @return {boolean} success, True if the file/directory was removed, false otherwise.
		 */
		export function remove(name: string): boolean;

		/**
		 * Sets the filesystem paths that will be searched for c libraries when require is
		 * called.
		 *
		 *
		 * The paths string returned by this function is a sequence of path templates
		 * separated by semicolons. The argument passed to require will be inserted in
		 * place of any question mark ("?") character in each template (after the dot
		 * characters in the argument passed to require are replaced by directory
		 * separators.) Additionally, any occurrence of a double question mark ("??") will
		 * be replaced by the name passed to require and the default library extension for
		 * the platform.
		 *
		 *
		 * The paths are relative to the game's source and save directories, as well as
		 * any paths mounted with love.filesystem.mount.
		 *
		 * @param paths The paths that the require function will check in love's filesystem.
		 */
		export function setCRequirePath(paths: string): void;

		/**
		 * Sets the write directory for your game. Note that you can only set the name of
		 * the folder to store your files in, not the location.
		 *
		 * @param name The new identity that will be used as write directory.
		 * @param appendToPath Whether the identity directory will be searched when reading a filepath before or after the game's source directory and any currently mounted archives.
		 */
		export function setIdentity(name: string, appendToPath?: boolean): void;

		/**
		 * Sets the filesystem paths that will be searched when require is called.
		 *
		 *
		 * The paths string given to this function is a sequence of path templates
		 * separated by semicolons. The argument passed to require will be inserted in
		 * place of any question mark ("?") character in each template (after the dot
		 * characters in the argument passed to require are replaced by directory
		 * separators.)
		 *
		 *
		 * The paths are relative to the game's source and save directories, as well as
		 * any paths mounted with love.filesystem.mount.
		 *
		 * @param paths The paths that the require function will check in love's filesystem.
		 */
		export function setRequirePath(paths: string): void;

		/**
		 * Sets the source of the game, where the code is present. This function can only
		 * be called once, and is normally automatically done by LÖVE.
		 *
		 * @param path Absolute path to the game's source folder.
		 */
		export function setSource(path: string): void;

		/**
		 * Sets whether love.filesystem follows symbolic links. It is enabled by default
		 * in version 0.10.0 and newer, and disabled by default in 0.9.2.
		 *
		 * @param enable Whether love.filesystem should follow symbolic links.
		 */
		export function setSymlinksEnabled(enable: boolean): void;

		/**
		 * Unmounts a zip file or folder previously mounted for reading with
		 * love.filesystem.mount.
		 *
		 * @param archive The folder or zip file in the game's save directory which is currently mounted.
		 * @return {boolean} success, True if the archive was successfully unmounted, false otherwise.
		 */
		export function unmount(archive: string): boolean;

		/**
		 * Write data to a file.
		 *
		 *
		 * If you are getting the error message "Could not set write directory", try
		 * setting the save directory. This is done either with
		 * love.filesystem.setIdentity or by setting the identity field in love.conf.
		 *
		 * @param name The name (and path) of the file.
		 * @param data The string data to write to the file.
		 * @param size How many bytes to write.
		 * @return {boolean} success, If the operation was successful.
		 * @return {string} message, Error message if operation was unsuccessful.
		 */
		/** @TupleReturn */
		export function write(name: string, data: string, size?: number): [boolean, string];

		/**
		 * Write data to a file.
		 *
		 *
		 * If you are getting the error message "Could not set write directory", try
		 * setting the save directory. This is done either with
		 * love.filesystem.setIdentity or by setting the identity field in love.conf.
		 *
		 * @param name The name (and path) of the file.
		 * @param data The Data object to write to the file.
		 * @param size How many bytes to write.
		 * @return {boolean} success, If the operation was successful.
		 * @return {string} message, Error message if operation was unsuccessful.
		 */
		/** @TupleReturn */
		export function write(name: string, data: Data, size?: number): [boolean, string];

	}
	/**
	 * The primary responsibility for the love.graphics module is the drawing of
	 * lines, shapes, text, Images and other Drawable objects onto the screen. Its
	 * secondary responsibilities include loading external files (including Images and
	 * Fonts) into memory, creating specialized objects (such as ParticleSystems or
	 * Canvases) and managing screen geometry.
	 *
	 *
	 * LÖVE's coordinate system is rooted in the upper-left corner of the screen,
	 * which is at location (0, 0). The x axis is horizontal: larger values are
	 * further to the right. The y axis is vertical: larger values are further towards
	 * the bottom.
	 *
	 *
	 * In many cases, you draw images or shapes in terms of their upper-left corner.
	 *
	 *
	 * Many of the functions are used to manipulate the graphics coordinate system,
	 * which is essentially the way coordinates are mapped to the display. You can
	 * change the position, scale, and even rotation in this way.
	 *
	 */
	export namespace graphics {
		/**
		 * Draws a filled or unfilled arc at position (x, y). The arc is drawn from angle1
		 * to angle2 in radians. The segments parameter determines how many segments are
		 * used to draw the arc. The more segments, the smoother the edge.
		 *
		 * @param drawmode How to draw the arc.
		 * @param x The position of the center along x-axis.
		 * @param y The position of the center along y-axis.
		 * @param radius Radius of the arc.
		 * @param angle1 The angle at which the arc begins.
		 * @param angle2 The angle at which the arc terminates.
		 * @param segments The number of segments used for drawing the arc.
		 */
		export function arc(drawmode: DrawMode, x: number, y: number, radius: number, angle1: number, angle2: number, segments?: number): void;

		/**
		 * Draws a filled or unfilled arc at position (x, y). The arc is drawn from angle1
		 * to angle2 in radians. The segments parameter determines how many segments are
		 * used to draw the arc. The more segments, the smoother the edge.
		 *
		 * @param drawmode How to draw the arc.
		 * @param arctype The type of arc to draw.
		 * @param x The position of the center along x-axis.
		 * @param y The position of the center along y-axis.
		 * @param radius Radius of the arc.
		 * @param angle1 The angle at which the arc begins.
		 * @param angle2 The angle at which the arc terminates.
		 * @param segments The number of segments used for drawing the arc.
		 */
		export function arc(drawmode: DrawMode, arctype: ArcType, x: number, y: number, radius: number, angle1: number, angle2: number, segments?: number): void;

		/**
		 * Applies the given Transform object to the current coordinate transformation.
		 *
		 *
		 * This effectively multiplies the existing coordinate transformation's matrix
		 * with the Transform object's internal matrix to produce the new coordinate
		 * transformation.
		 *
		 * @param transform The Transform object to apply to the current graphics coordinate transform.
		 */
		export function applyTransform(transform: Transform): void;

		/**
		 * Creates a screenshot once the current frame is done (after love.draw has
		 * finished).
		 *
		 *
		 * Since this function enqueues a screenshot capture rather than executing it
		 * immediately, it can be called from an input callback or love.update and it will
		 * still capture all of what's drawn to the screen in that frame.
		 *
		 * @param filename The filename to save the screenshot to. The encoded image type is determined based on the extension of the filename, and must be one of the ImageFormats.
		 */
		export function captureScreenshot(filename: string): void;

		/**
		 * Creates a screenshot once the current frame is done (after love.draw has
		 * finished).
		 *
		 *
		 * Since this function enqueues a screenshot capture rather than executing it
		 * immediately, it can be called from an input callback or love.update and it will
		 * still capture all of what's drawn to the screen in that frame.
		 *
		 * @param callback Function which gets called once the screenshot has been captured. An ImageData is passed into the function as its only argument.
		 */
		export function captureScreenshot(callback: Function): void;

		/**
		 * Creates a screenshot once the current frame is done (after love.draw has
		 * finished).
		 *
		 *
		 * Since this function enqueues a screenshot capture rather than executing it
		 * immediately, it can be called from an input callback or love.update and it will
		 * still capture all of what's drawn to the screen in that frame.
		 *
		 * @param channel The Channel to push the generated ImageData to.
		 */
		export function captureScreenshot(channel: Channel): void;

		/**
		 * Draws a circle.
		 *
		 * @param mode How to draw the circle.
		 * @param x The position of the center along x-axis.
		 * @param y The position of the center along y-axis.
		 * @param radius The radius of the circle.
		 */
		export function circle(mode: DrawMode, x: number, y: number, radius: number): void;

		/**
		 * Draws a circle.
		 *
		 * @param mode How to draw the circle.
		 * @param x The position of the center along x-axis.
		 * @param y The position of the center along y-axis.
		 * @param radius The radius of the circle.
		 * @param segments The number of segments used for drawing the circle. Note: The default variable for the segments parameter varies between different versions of LÖVE.
		 */
		export function circle(mode: DrawMode, x: number, y: number, radius: number, segments: number): void;

		/**
		 * Clears the screen to the background color in LÖVE 0.9.2 and earlier, or to the
		 * specified color in 0.10.0 and newer.
		 *
		 *
		 * This function is called automatically before love.draw in the default love.run
		 * function. See the example in love.run for a typical use of this function.
		 *
		 *
		 * Note that the scissor area bounds the cleared region.
		 *
		 */
		export function clear(): void;

		/**
		 * Clears the screen to the background color in LÖVE 0.9.2 and earlier, or to the
		 * specified color in 0.10.0 and newer.
		 *
		 *
		 * This function is called automatically before love.draw in the default love.run
		 * function. See the example in love.run for a typical use of this function.
		 *
		 *
		 * Note that the scissor area bounds the cleared region.
		 *
		 * @param r The red channel of the color to clear the screen to.
		 * @param g The green channel of the color to clear the screen to.
		 * @param b The blue channel of the color to clear the screen to.
		 * @param a The alpha channel of the color to clear the screen to.
		 */
		export function clear(r: number, g: number, b: number, a?: number): void;

		/**
		 * Clears the screen to the background color in LÖVE 0.9.2 and earlier, or to the
		 * specified color in 0.10.0 and newer.
		 *
		 *
		 * This function is called automatically before love.draw in the default love.run
		 * function. See the example in love.run for a typical use of this function.
		 *
		 *
		 * Note that the scissor area bounds the cleared region.
		 *
		 * @param color A table in the form of {r, g, b, a} containing the color to clear the first active Canvas to.
		 * @param ... Additional tables for each active Canvas.
		 */
		export function clear(color: table, ...vararg: table[]): void;

		/**
		 * Discards (trashes) the contents of the screen or active Canvas. This is a
		 * performance optimization function with niche use cases.
		 *
		 *
		 * If the active Canvas has just been changed and the "replace" BlendMode is about
		 * to be used to draw something which covers the entire screen, calling
		 * love.graphics.discard rather than calling love.graphics.clear or doing nothing
		 * may improve performance on mobile devices.
		 *
		 *
		 * On some desktop systems this function may do nothing.
		 *
		 * @param discardcolor Whether to discard the texture(s) of the active Canvas(es) (the contents of the screen if no Canvas is active).
		 * @param discardstencil Whether to discard the contents of the stencil buffer of the screen / active Canvas.
		 */
		export function discard(discardcolor?: boolean, discardstencil?: boolean): void;

		/**
		 * Discards (trashes) the contents of the screen or active Canvas. This is a
		 * performance optimization function with niche use cases.
		 *
		 *
		 * If the active Canvas has just been changed and the "replace" BlendMode is about
		 * to be used to draw something which covers the entire screen, calling
		 * love.graphics.discard rather than calling love.graphics.clear or doing nothing
		 * may improve performance on mobile devices.
		 *
		 *
		 * On some desktop systems this function may do nothing.
		 *
		 * @param discardcolors An array containing boolean values indicating whether to discard the texture of each active Canvas, when multiple simultaneous Canvases are active.
		 * @param discardstencil Whether to discard the contents of the stencil buffer of the screen / active Canvas.
		 */
		export function discard(discardcolors: table, discardstencil?: boolean): void;

		/**
		 * Draws a Drawable object (an Image, Canvas, SpriteBatch, ParticleSystem, Mesh,
		 * Text object, or Video) on the screen with optional rotation, scaling and
		 * shearing.
		 *
		 *
		 * Objects are drawn relative to their local coordinate system. The origin is by
		 * default located at the top left corner of Image and Canvas. All scaling,
		 * shearing, and rotation arguments transform the object relative to that point.
		 * Also, the position of the origin can be specified on the screen coordinate
		 * system.
		 *
		 *
		 * It's possible to rotate an object about its center by offsetting the origin to
		 * the center. Angles must be given in radians for rotation. One can also use a
		 * negative scaling factor to flip about its centerline.
		 *
		 *
		 * Note that the offsets are applied before rotation, scaling, or shearing;
		 * scaling and shearing are applied before rotation.
		 *
		 *
		 * The right and bottom edges of the object are shifted at an angle defined by the
		 * shearing factors.
		 *
		 * @param drawable A drawable object.
		 * @param x The position to draw the object (x-axis).
		 * @param y The position to draw the object (y-axis).
		 * @param r Orientation (radians).
		 * @param sx Scale factor (x-axis). Can be negative.
		 * @param sy Scale factor (y-axis). Can be negative.
		 * @param ox Origin offset (x-axis). (A value of 20 would effectively move your drawable object 20 pixels to the left.)
		 * @param oy Origin offset (y-axis). (A value of 20 would effectively move your drawable object 20 pixels up.)
		 * @param kx Shearing factor (x-axis).
		 * @param ky Shearing factor (y-axis).
		 */
		export function draw(drawable: Drawable, x?: number, y?: number, r?: number, sx?: number, sy?: number, ox?: number, oy?: number, kx?: number, ky?: number): void;

		/**
		 * Draws a Drawable object (an Image, Canvas, SpriteBatch, ParticleSystem, Mesh,
		 * Text object, or Video) on the screen with optional rotation, scaling and
		 * shearing.
		 *
		 *
		 * Objects are drawn relative to their local coordinate system. The origin is by
		 * default located at the top left corner of Image and Canvas. All scaling,
		 * shearing, and rotation arguments transform the object relative to that point.
		 * Also, the position of the origin can be specified on the screen coordinate
		 * system.
		 *
		 *
		 * It's possible to rotate an object about its center by offsetting the origin to
		 * the center. Angles must be given in radians for rotation. One can also use a
		 * negative scaling factor to flip about its centerline.
		 *
		 *
		 * Note that the offsets are applied before rotation, scaling, or shearing;
		 * scaling and shearing are applied before rotation.
		 *
		 *
		 * The right and bottom edges of the object are shifted at an angle defined by the
		 * shearing factors.
		 *
		 * @param texture A Texture (Image or Canvas) to texture the Quad with.
		 * @param quad The Quad to draw on screen.
		 * @param x The position to draw the object (x-axis).
		 * @param y The position to draw the object (y-axis).
		 * @param r Orientation (radians).
		 * @param sx Scale factor (x-axis). Can be negative.
		 * @param sy Scale factor (y-axis). Can be negative.
		 * @param ox Origin offset (x-axis).
		 * @param oy Origin offset (y-axis)
		 * @param kx Shearing factor (x-axis).
		 * @param ky Shearing factor (y-axis).
		 */
		export function draw(texture: Texture, quad: Quad, x?: number, y?: number, r?: number, sx?: number, sy?: number, ox?: number, oy?: number, kx?: number, ky?: number): void;

		/**
		 * Draws many instances of a Mesh with a single draw call, using hardware geometry
		 * instancing.
		 *
		 *
		 * Each instance can have unique properties (positions, colors, etc.) but will not
		 * by default unless a custom Shader along with either per-instance attributes or
		 * the love_InstanceID GLSL 3 vertex shader variable is used, otherwise they will
		 * all render at the same position on top of each other.
		 *
		 *
		 * Instancing is not supported by some older GPUs that are only capable of using
		 * OpenGL ES 2 or OpenGL 2. Use love.graphics.getSupported to check.
		 *
		 * @param mesh The mesh to render.
		 * @param instancecount The number of instances to render.
		 * @param x The position to draw the instances (x-axis).
		 * @param y The position to draw the instances (y-axis).
		 * @param r Orientation (radians).
		 * @param sx Scale factor (x-axis).
		 * @param sy Scale factor (y-axis).
		 * @param ox Origin offset (x-axis).
		 * @param oy Origin offset (y-axis).
		 * @param kx Shearing factor (x-axis).
		 * @param ky Shearing factor (y-axis).
		 */
		export function drawInstanced(mesh: Mesh, instancecount: number, x?: number, y?: number, r?: number, sx?: number, sy?: number, ox?: number, oy?: number, kx?: number, ky?: number): void;

		/**
		 * Draws many instances of a Mesh with a single draw call, using hardware geometry
		 * instancing.
		 *
		 *
		 * Each instance can have unique properties (positions, colors, etc.) but will not
		 * by default unless a custom Shader along with either per-instance attributes or
		 * the love_InstanceID GLSL 3 vertex shader variable is used, otherwise they will
		 * all render at the same position on top of each other.
		 *
		 *
		 * Instancing is not supported by some older GPUs that are only capable of using
		 * OpenGL ES 2 or OpenGL 2. Use love.graphics.getSupported to check.
		 *
		 * @param mesh The mesh to render.
		 * @param instancecount The number of instances to render.
		 * @param transform A transform object.
		 */
		export function drawInstanced(mesh: Mesh, instancecount: number, transform: Transform): void;

		/**
		 * Draws a layer of an Array Texture.
		 *
		 * @param texture The Array Texture to draw.
		 * @param layerindex The index of the layer to use when drawing.
		 * @param x The position to draw the texture (x-axis).
		 * @param y The position to draw the texture (y-axis).
		 * @param r Orientation (radians).
		 * @param sx Scale factor (x-axis).
		 * @param sy Scale factor (y-axis).
		 * @param ox Origin offset (x-axis).
		 * @param oy Origin offset (y-axis).
		 * @param kx Shearing factor (x-axis).
		 * @param ky Shearing factor (y-axis).
		 */
		export function drawLayer(texture: Texture, layerindex: number, x?: number, y?: number, r?: number, sx?: number, sy?: number, ox?: number, oy?: number, kx?: number, ky?: number): void;

		/**
		 * Draws a layer of an Array Texture.
		 *
		 * @param texture The Array Texture to draw.
		 * @param layerindex The index of the layer to use when drawing.
		 * @param quad The subsection of the texture's layer to use when drawing.
		 * @param x The position to draw the texture (x-axis).
		 * @param y The position to draw the texture (y-axis).
		 * @param r Orientation (radians).
		 * @param sx Scale factor (x-axis).
		 * @param sy Scale factor (y-axis).
		 * @param ox Origin offset (x-axis).
		 * @param oy Origin offset (y-axis).
		 * @param kx Shearing factor (x-axis).
		 * @param ky Shearing factor (y-axis).
		 */
		export function drawLayer(texture: Texture, layerindex: number, quad: Quad, x?: number, y?: number, r?: number, sx?: number, sy?: number, ox?: number, oy?: number, kx?: number, ky?: number): void;

		/**
		 * Draws a layer of an Array Texture.
		 *
		 * @param texture The Array Texture to draw.
		 * @param layerindex The index of the layer to use when drawing.
		 * @param transform A transform object.
		 */
		export function drawLayer(texture: Texture, layerindex: number, transform: Transform): void;

		/**
		 * Draws a layer of an Array Texture.
		 *
		 * @param texture The Array Texture to draw.
		 * @param layerindex The index of the layer to use when drawing.
		 * @param quad The subsection of the texture's layer to use when drawing.
		 * @param transform A transform object.
		 */
		export function drawLayer(texture: Texture, layerindex: number, quad: Quad, transform: Transform): void;

		/**
		 * Draws an ellipse.
		 *
		 * @param mode How to draw the ellipse.
		 * @param x The position of the center along x-axis.
		 * @param y The position of the center along y-axis.
		 * @param radiusx The radius of the ellipse along the x-axis (half the ellipse's width).
		 * @param radiusy The radius of the ellipse along the y-axis (half the ellipse's height).
		 */
		export function ellipse(mode: DrawMode, x: number, y: number, radiusx: number, radiusy: number): void;

		/**
		 * Draws an ellipse.
		 *
		 * @param mode How to draw the ellipse.
		 * @param x The position of the center along x-axis.
		 * @param y The position of the center along y-axis.
		 * @param radiusx The radius of the ellipse along the x-axis (half the ellipse's width).
		 * @param radiusy The radius of the ellipse along the y-axis (half the ellipse's height).
		 * @param segments The number of segments used for drawing the ellipse.
		 */
		export function ellipse(mode: DrawMode, x: number, y: number, radiusx: number, radiusy: number, segments: number): void;

		/**
		 * Immediately renders any pending automatically batched draws.
		 *
		 *
		 * LÖVE will call this function internally as needed when most state is changed,
		 * so it is not necessary to manually call it.
		 *
		 *
		 * The current batch will be automatically flushed by love.graphics state changes
		 * (except for the transform stack and the current color), as well as Shader:send
		 * and methods on Textures which change their state. Using a different Image in
		 * consecutive love.graphics.draw calls will also flush the current batch.
		 *
		 *
		 * SpriteBatches, ParticleSystems, Meshes, and Text objects do their own batching
		 * and do not affect automatic batching of other draws.
		 *
		 */
		export function flushBatch(): void;

		/**
		 * Gets the current background color.
		 *
		 * @return {number} r, The red component (0-255).
		 * @return {number} g, The green component (0-255).
		 * @return {number} b, The blue component (0-255).
		 * @return {number} a, The alpha component (0-255).
		 */
		/** @TupleReturn */
		export function getBackgroundColor(): [number, number, number, number];

		/**
		 * Gets the blending mode.
		 *
		 * @return {BlendMode} mode, The current blend mode.
		 * @return {BlendAlphaMode} alphamode, The current blend alpha mode – it determines how the alpha of drawn objects affects blending.
		 */
		/** @TupleReturn */
		export function getBlendMode(): [BlendMode, BlendAlphaMode];

		/**
		 * Gets the current target Canvas.
		 *
		 * @return {Canvas} canvas, The Canvas set by setCanvas. Returns nil if drawing to the real screen.
		 */
		export function getCanvas(): Canvas;

		/**
		 * Gets the available Canvas formats, and whether each is supported.
		 *
		 * @return {table} formats, A table containing CanvasFormats as keys, and a boolean indicating whether the format is supported as values. Not all systems support all formats.
		 */
		export function getCanvasFormats(): table;

		/**
		 * Gets the current color.
		 *
		 * @return {number} r, The red component (0-255).
		 * @return {number} g, The red component (0-255).
		 * @return {number} b, The blue component (0-255).
		 * @return {number} a, The alpha component (0-255).
		 */
		/** @TupleReturn */
		export function getColor(): [number, number, number, number];

		/**
		 * Gets the active color components used when drawing. Normally all 4 components
		 * are active unless love.graphics.setColorMask has been used.
		 *
		 *
		 * The color mask determines whether individual components of the colors of drawn
		 * objects will affect the color of the screen. They affect love.graphics.clear
		 * and Canvas:clear as well.
		 *
		 * @return {boolean} r, Whether the red color component is active when rendering.
		 * @return {boolean} g, Whether the green color component is active when rendering.
		 * @return {boolean} b, Whether the blue color component is active when rendering.
		 * @return {boolean} a, Whether the alpha color component is active when rendering.
		 */
		/** @TupleReturn */
		export function getColorMask(): [boolean, boolean, boolean, boolean];

		/**
		 * Gets the available compressed image formats, and whether each is supported.
		 *
		 * @return {table} formats, A table containing CompressedFormats as keys, and a boolean indicating whether the format is supported as values. Not all systems support all formats.
		 */
		export function getCompressedImageFormats(): table;

		/**
		 * Returns the default scaling filters used with Images, Canvases, and Fonts.
		 *
		 * @return {FilterMode} min, Filter mode used when scaling the image down.
		 * @return {FilterMode} mag, Filter mode used when scaling the image up.
		 * @return {number} anisotropy, Maximum amount of Anisotropic Filtering used.
		 */
		/** @TupleReturn */
		export function getDefaultFilter(): [FilterMode, FilterMode, number];

		/**
		 * Gets the current depth test mode and whether writing to the depth buffer is
		 * enabled.
		 *
		 *
		 * This is low-level functionality designed for use with custom vertex shaders and
		 * Meshes with custom vertex attributes. No higher level APIs are provided to set
		 * the depth of 2D graphics such as shapes, lines, and Images.
		 *
		 * @return {CompareMode} comparemode, Depth comparison mode used for depth testing.
		 * @return {boolean} write, Whether to write update / write values to the depth buffer when rendering.
		 */
		/** @TupleReturn */
		export function getDepthMode(): [CompareMode, boolean];

		/**
		 * Gets the width and height of the window.
		 *
		 * @return {number} width, The width of the window.
		 * @return {number} height, The height of the window.
		 */
		/** @TupleReturn */
		export function getDimensions(): [number, number];

		/**
		 * Gets the current Font object.
		 *
		 * @return {Font} font, The current Font, or nil if none is set.
		 */
		export function getFont(): Font;

		/**
		 * Gets whether triangles with clockwise- or counterclockwise-ordered vertices are
		 * considered front-facing.
		 *
		 *
		 * This is designed for use in combination with Mesh face culling. Other
		 * love.graphics shapes, lines, and sprites are not guaranteed to have a specific
		 * winding order to their internal vertices.
		 *
		 * @return {VertexWinding} winding, The winding mode to use. The default winding is counterclockwise ("ccw").
		 */
		export function getFrontFaceWinding(): VertexWinding;

		/**
		 * Gets the height of the window.
		 *
		 * @return {number} height, The height of the window.
		 */
		export function getHeight(): number;

		/**
		 * Gets the line join style.
		 *
		 * @return {LineJoin} join, The LineJoin style.
		 */
		export function getLineJoin(): LineJoin;

		/**
		 * Gets the line style.
		 *
		 * @return {LineStyle} style, The current line style.
		 */
		export function getLineStyle(): LineStyle;

		/**
		 * Gets the current line width.
		 *
		 * @return {number} width, The current line width.
		 */
		export function getLineWidth(): number;

		/**
		 * Gets whether back-facing triangles in a Mesh are culled.
		 *
		 *
		 * Mesh face culling is designed for use with low level custom
		 * hardware-accelerated 3D rendering via custom vertex attributes on Meshes,
		 * custom vertex shaders, and depth testing with a depth buffer.
		 *
		 * @return {CullMode} mode, The Mesh face culling mode in use (whether to render everything, cull back-facing triangles, or cull front-facing triangles).
		 */
		export function getMeshCullMode(): CullMode;

		/**
		 * Returns the current Shader. Returns nil if none is set.
		 *
		 * @return {Shader} shader, The current Shader.
		 */
		export function getShader(): Shader;

		/**
		 * Gets the current depth of the transform / state stack (the number of pushes
		 * without corresponding pops).
		 *
		 * @return {number} depth, The current depth of the transform and state love.graphics stack.
		 */
		export function getStackDepth(): number;

		/**
		 * Gets performance-related rendering statistics.
		 *
		 * @return {table} stats, A table with the following fields:
		 */
		export function getStats(): table;

		/**
		 * Gets whether stencil testing is enabled.
		 *
		 *
		 * When stencil testing is enabled, the geometry of everything that is drawn will
		 * be clipped / stencilled out based on whether it intersects with what has been
		 * previously drawn to the stencil buffer.
		 *
		 *
		 * Each Canvas has its own stencil buffer.
		 *
		 * @return {boolean} enabled, Whether stencil testing is enabled.
		 * @return {boolean} inverted, Whether the stencil test is inverted or not.
		 */
		/** @TupleReturn */
		export function getStencilTest(): [boolean, boolean];

		/**
		 * Gets the optional graphics features and whether they're supported on the
		 * system.
		 *
		 *
		 * Some older or low-end systems don't always support all graphics features.
		 *
		 * @return {table} features, A table containing GraphicsFeature keys, and boolean values indicating whether each feature is supported.
		 */
		export function getSupported(): table;

		/**
		 * Gets the system-dependent maximum values for love.graphics features.
		 *
		 * @return {table} limits, A table containing GraphicsLimit keys, and number values.
		 */
		export function getSystemLimits(): table;

		/**
		 * Gets the point size.
		 *
		 * @return {number} size, The current point size.
		 */
		export function getPointSize(): number;

		/**
		 * Gets information about the system's video card and drivers.
		 *
		 * @return {string} name, The name of the renderer, e.g. "OpenGL" or "OpenGL ES".
		 * @return {string} version, The version of the renderer with some extra driver-dependent version info, e.g. "2.1 INTEL-8.10.44".
		 * @return {string} vendor, The name of the graphics card vendor, e.g. "Intel Inc".
		 * @return {string} device, The name of the graphics card, e.g. "Intel HD Graphics 3000 OpenGL Engine".
		 */
		/** @TupleReturn */
		export function getRendererInfo(): [string, string, string, string];

		/**
		 * Gets the current scissor box.
		 *
		 * @return {number} x, The x component of the top-left point of the box.
		 * @return {number} y, The y component of the top-left point of the box.
		 * @return {number} width, The width of the box.
		 * @return {number} height, The height of the box.
		 */
		/** @TupleReturn */
		export function getScissor(): [number, number, number, number];

		/**
		 * Gets the available texture types, and whether each is supported.
		 *
		 * @return {table} texturetypes, A table containing TextureTypes as keys, and a boolean indicating whether the type is supported as values. Not all systems support all types.
		 */
		export function getTextureTypes(): table;

		/**
		 * Gets the width of the window.
		 *
		 * @return {number} width, The width of the window.
		 */
		export function getWidth(): number;

		/**
		 * Sets the scissor to the rectangle created by the intersection of the specified
		 * rectangle with the existing scissor. If no scissor is active yet, it behaves
		 * like love.graphics.setScissor.
		 *
		 *
		 * The scissor limits the drawing area to a specified rectangle. This affects all
		 * graphics calls, including love.graphics.clear.
		 *
		 *
		 * The dimensions of the scissor is unaffected by graphical transformations
		 * (translate, scale, ...).
		 *
		 * @param x The x-coordinate of the upper left corner of the rectangle to intersect with the existing scissor rectangle.
		 * @param y The y-coordinate of the upper left corner of the rectangle to intersect with the existing scissor rectangle.
		 * @param width The width of the rectangle to intersect with the existing scissor rectangle.
		 * @param height The height of the rectangle to intersect with the existing scissor rectangle.
		 */
		export function intersectScissor(x: number, y: number, width: number, height: number): void;

		/**
		 * Sets the scissor to the rectangle created by the intersection of the specified
		 * rectangle with the existing scissor. If no scissor is active yet, it behaves
		 * like love.graphics.setScissor.
		 *
		 *
		 * The scissor limits the drawing area to a specified rectangle. This affects all
		 * graphics calls, including love.graphics.clear.
		 *
		 *
		 * The dimensions of the scissor is unaffected by graphical transformations
		 * (translate, scale, ...).
		 *
		 */
		export function intersectScissor(): void;

		/**
		 * Converts the given 2D position from screen-space into global coordinates.
		 *
		 *
		 * This effectively applies the reverse of the current graphics transformations to
		 * the given position. A similar Transform:inverseTransformPoint method exists for
		 * Transform objects.
		 *
		 * @param screenX The x component of the screen-space position.
		 * @param screenY The y component of the screen-space position.
		 * @return {number} globalX, The x component of the position in global coordinates.
		 * @return {number} globalY, The y component of the position in global coordinates.
		 */
		/** @TupleReturn */
		export function inverseTransformPoint(screenX: number, screenY: number): [number, number];

		/**
		 * Gets whether gamma-correct rendering is supported and enabled. It can be
		 * enabled by setting t.gammacorrect = true in love.conf.
		 *
		 *
		 * Not all devices support gamma-correct rendering, in which case it will be
		 * automatically disabled and this function will return false. It is supported on
		 * desktop systems which have graphics cards that are capable of using OpenGL 3 /
		 * DirectX 10, and iOS devices that can use OpenGL ES 3.
		 *
		 * @return {boolean} gammacorrect, True if gamma-correct rendering is supported and was enabled in love.conf, false otherwise.
		 */
		export function isGammaCorrect(): boolean;

		/**
		 * Gets whether wireframe mode is used when drawing.
		 *
		 * @return {boolean} wireframe, True if wireframe lines are used when drawing, false if it's not.
		 */
		export function isWireframe(): boolean;

		/**
		 * Draws lines between points.
		 *
		 * @param x1 The position of first point on the x-axis.
		 * @param y1 The position of first point on the y-axis.
		 * @param x2 The position of second point on the x-axis.
		 * @param y2 The position of second point on the y-axis.
		 * @param ... You can continue passing point positions to draw a polyline.
		 */
		export function line(x1: number, y1: number, x2: number, y2: number, ...vararg: number[]): void;

		/**
		 * Draws lines between points.
		 *
		 * @param points A table of point positions.
		 */
		export function line(points: table): void;

		/**
		 * Creates a new Canvas object for offscreen rendering.
		 *
		 *
		 * Antialiased Canvases have slightly higher system requirements than normal
		 * Canvases. Additionally, the supported maximum number of MSAA samples varies
		 * depending on the system. Use love.graphics.getSystemLimit to check.
		 *
		 *
		 * If the number of MSAA samples specified is greater than the maximum supported
		 * by the system, the Canvas will still be created but only using the maximum
		 * supported amount (this includes 0.)
		 *
		 * @param width The width of the Canvas.
		 * @param height The height of the Canvas.
		 * @param settings A table of optional settings.
		 * @return {Canvas} canvas, A new Canvas object.
		 */
		export function newCanvas(width?: number, height?: number, settings?: {
			//type?: TextureType,
			format?: PixelFormat,
			readable?: boolean,
			msaa?: number,
			dpiscale?: number,
			mipmaps?: CanvasMipmapMode,
		}): Canvas;

		/**
		 * Creates a new Font from a TrueType Font or BMFont file. Created fonts are not
		 * cached, in that calling this function with the same arguments will always
		 * create a new Font object.
		 *
		 *
		 * All variants which accept a filename can also accept a Data object instead.
		 *
		 * @param filename The filepath to the BMFont or TrueType font file.
		 * @return {Font} font, A Font object which can be used to draw text on screen.
		 */
		export function newFont(filename: string): Font;

		/**
		 * Creates a new Font from a TrueType Font or BMFont file. Created fonts are not
		 * cached, in that calling this function with the same arguments will always
		 * create a new Font object.
		 *
		 *
		 * All variants which accept a filename can also accept a Data object instead.
		 *
		 * @param filename The filepath to the TrueType font file.
		 * @param size The size of the font in pixels.
		 * @return {Font} font, A Font object which can be used to draw text on screen.
		 */
		export function newFont(filename: string, size: number): Font;

		/**
		 * Creates a new Font from a TrueType Font or BMFont file. Created fonts are not
		 * cached, in that calling this function with the same arguments will always
		 * create a new Font object.
		 *
		 *
		 * All variants which accept a filename can also accept a Data object instead.
		 *
		 * @param filename The filepath to the BMFont file.
		 * @param imagefilename The filepath to the BMFont's image file. If this argument is omitted, the path specified inside the BMFont file will be used.
		 * @return {Font} font, A Font object which can be used to draw text on screen.
		 */
		export function newFont(filename: string, imagefilename: string): Font;

		/**
		 * Creates a new Font from a TrueType Font or BMFont file. Created fonts are not
		 * cached, in that calling this function with the same arguments will always
		 * create a new Font object.
		 *
		 *
		 * All variants which accept a filename can also accept a Data object instead.
		 *
		 * @param size The size of the font in pixels.
		 * @return {Font} font, A Font object which can be used to draw text on screen.
		 */
		export function newFont(size: number): Font;

		/**
		 * Creates a new Mesh.
		 *
		 *
		 * Use Mesh:setTexture if the Mesh should be textured with an Image or Canvas when
		 * it's drawn.
		 *
		 * @param vertices The table filled with vertex information tables for each vertex as follows:
		 * @param mode How the vertices are used when drawing. The default mode "fan" is sufficient for simple convex polygons.
		 * @param usage The expected usage of the Mesh. The specified usage mode affects the Mesh's memory usage and performance.
		 * @return {Mesh} mesh, The new Mesh.
		 */
		export function newMesh(vertices: table, mode?: MeshDrawMode, usage?: SpriteBatchUsage): Mesh;

		/**
		 * Creates a new Mesh.
		 *
		 *
		 * Use Mesh:setTexture if the Mesh should be textured with an Image or Canvas when
		 * it's drawn.
		 *
		 * @param vertexcount The total number of vertices the Mesh will use. Each vertex is initialized to {0,0, 0,0, 255,255,255,255}.
		 * @param mode How the vertices are used when drawing. The default mode "fan" is sufficient for simple convex polygons.
		 * @param usage The expected usage of the Mesh. The specified usage mode affects the Mesh's memory usage and performance.
		 * @return {Mesh} mesh, The new Mesh.
		 */
		export function newMesh(vertexcount: number, mode?: MeshDrawMode, usage?: SpriteBatchUsage): Mesh;

		/**
		 * Creates a new Mesh.
		 *
		 *
		 * Use Mesh:setTexture if the Mesh should be textured with an Image or Canvas when
		 * it's drawn.
		 *
		 * @param vertexformat A table in the form of {attribute, ...}. Each attribute is a table which specifies a custom vertex attribute used for each vertex.
		 * @param vertices The table filled with vertex information tables for each vertex, in the form of {vertex, ...} where each vertex is a table in the form of {attributecomponent, ...}.
		 * @param mode How the vertices are used when drawing. The default mode "fan" is sufficient for simple convex polygons.
		 * @param usage The expected usage of the Mesh. The specified usage mode affects the Mesh's memory usage and performance.
		 * @return {Mesh} mesh, The new Mesh.
		 */
		export function newMesh(vertexformat: table, vertices: table, mode?: MeshDrawMode, usage?: SpriteBatchUsage): Mesh;

		/**
		 * Creates a new Mesh.
		 *
		 *
		 * Use Mesh:setTexture if the Mesh should be textured with an Image or Canvas when
		 * it's drawn.
		 *
		 * @param vertexformat A table in the form of {attribute, ...}. Each attribute is a table which specifies a custom vertex attribute used for each vertex.
		 * @param vertexcount The total number of vertices the Mesh will use.
		 * @param mode How the vertices are used when drawing. The default mode "fan" is sufficient for simple convex polygons.
		 * @param usage The expected usage of the Mesh. The specified usage mode affects the Mesh's memory usage and performance.
		 * @return {Mesh} mesh, The new Mesh.
		 */
		export function newMesh(vertexformat: table, vertexcount: number, mode?: MeshDrawMode, usage?: SpriteBatchUsage): Mesh;

		/**
		 * Creates a new Image from a filepath, FileData, an ImageData, or a
		 * CompressedImageData, and optionally generates or specifies mipmaps for the
		 * image.
		 *
		 * @param filename The filepath to the image file.
		 * @return {Image} image, An Image object which can be drawn on screen.
		 */
		export function newImage(filename: string): Image;

		/**
		 * Creates a new Image from a filepath, FileData, an ImageData, or a
		 * CompressedImageData, and optionally generates or specifies mipmaps for the
		 * image.
		 *
		 * @param imageData An ImageData object. The Image will use this ImageData to reload itself when love.window.setMode is called.
		 * @return {Image} image, An Image object which can be drawn on screen.
		 */
		export function newImage(imageData: ImageData): Image;

		/**
		 * Creates a new Image from a filepath, FileData, an ImageData, or a
		 * CompressedImageData, and optionally generates or specifies mipmaps for the
		 * image.
		 *
		 * @param compressedImageData A CompressedImageData object. The Image will use this CompressedImageData to reload itself when love.window.setMode is called.
		 * @return {Image} image, An Image object which can be drawn on screen.
		 */
		export function newImage(compressedImageData: CompressedImageData): Image;

		/**
		 * Creates a new Image from a filepath, FileData, an ImageData, or a
		 * CompressedImageData, and optionally generates or specifies mipmaps for the
		 * image.
		 *
		 * @param filename The filepath to the image file (or a FileData or ImageData or CompressedImageData object).
		 * @param flags A table containing the following fields:
		 * @return {Image} image, An Image object which can be drawn on screen.
		 */
		export function newImage(filename: string, flags: table): Image;

		/**
		 * Creates a new Font by loading a specifically formatted image.
		 *
		 *
		 * In versions prior to 0.9.0, LÖVE expects ISO 8859-1 encoding for the glyphs
		 * string.
		 *
		 * @param filename The filepath to the image file.
		 * @param glyphs A string of the characters in the image in order from left to right.
		 * @return {Font} font, A Font object which can be used to draw text on screen.
		 */
		export function newImageFont(filename: string, glyphs: string): Font;

		/**
		 * Creates a new Font by loading a specifically formatted image.
		 *
		 *
		 * In versions prior to 0.9.0, LÖVE expects ISO 8859-1 encoding for the glyphs
		 * string.
		 *
		 * @param imageData The ImageData object to create the font from.
		 * @param glyphs A string of the characters in the image in order from left to right.
		 * @return {Font} font, A Font object which can be used to draw text on screen.
		 */
		export function newImageFont(imageData: ImageData, glyphs: string): Font;

		/**
		 * Creates a new Font by loading a specifically formatted image.
		 *
		 *
		 * In versions prior to 0.9.0, LÖVE expects ISO 8859-1 encoding for the glyphs
		 * string.
		 *
		 * @param filename The filepath to the image file.
		 * @param glyphs A string of the characters in the image in order from left to right.
		 * @param extraspacing Additional spacing (positive or negative) to apply to each glyph in the Font.
		 * @return {Font} font, A Font object which can be used to draw text on screen.
		 */
		export function newImageFont(filename: string, glyphs: string, extraspacing?: number): Font;

		/**
		 * Creates a new ParticleSystem.
		 *
		 * @param texture The Image or Canvas to use.
		 * @param buffer The max number of particles at the same time.
		 * @return {ParticleSystem} system, A new ParticleSystem.
		 */
		export function newParticleSystem(texture: Texture, buffer?: number): ParticleSystem;

		/**
		 * Creates a new Shader object for hardware-accelerated vertex and pixel effects.
		 * A Shader contains either vertex shader code, pixel shader code, or both.
		 *
		 *
		 * Vertex shader code must contain at least one function, named position, which is
		 * the function that will produce transformed vertex positions of drawn objects in
		 * screen-space.
		 *
		 *
		 * Pixel shader code must contain at least one function, named effect, which is
		 * the function that will produce the color which is blended onto the screen for
		 * each pixel a drawn object touches.
		 *
		 * @param code The pixel shader or vertex shader code, or a filename pointing to a file with the code.
		 * @return {Shader} shader, A Shader object for use in drawing operations.
		 */
		export function newShader(code: string): Shader;

		/**
		 * Creates a new Shader object for hardware-accelerated vertex and pixel effects.
		 * A Shader contains either vertex shader code, pixel shader code, or both.
		 *
		 *
		 * Vertex shader code must contain at least one function, named position, which is
		 * the function that will produce transformed vertex positions of drawn objects in
		 * screen-space.
		 *
		 *
		 * Pixel shader code must contain at least one function, named effect, which is
		 * the function that will produce the color which is blended onto the screen for
		 * each pixel a drawn object touches.
		 *
		 * @param pixelcode The pixel shader code, or a filename pointing to a file with the code.
		 * @param vertexcode The vertex shader code, or a filename pointing to a file with the code.
		 * @return {Shader} shader, A Shader object for use in drawing operations.
		 */
		export function newShader(pixelcode: string, vertexcode: string): Shader;

		/**
		 * Creates a new drawable Text object.
		 *
		 * @param font The font to use for the text.
		 * @param textstring The initial string of text that the new Text object will contain. May be nil.
		 * @return {Text} text, The new drawable Text object.
		 */
		export function newText(font: Font, textstring?: string): Text;

		/**
		 * Creates a new Quad.
		 *
		 *
		 * The purpose of a Quad is to describe the result of the following transformation
		 * on any drawable object. The object is first scaled to dimensions sw * sh. The
		 * Quad then describes the rectangular area of dimensions width * height whose
		 * upper left corner is at position (x, y) inside the scaled object.
		 *
		 * @param x The top-left position along the x-axis.
		 * @param y The top-left position along the y-axis.
		 * @param width The width of the Quad.
		 * @param height The height of the Quad.
		 * @param sw The reference width, the width of the Image.
		 * @param sh The reference height, the height of the Image.
		 * @return {Quad} quad, The new Quad.
		 */
		export function newQuad(x: number, y: number, width: number, height: number, sw: number, sh: number): Quad;

		/**
		 * Creates a new SpriteBatch object.
		 *
		 * @param texture The Image or Canvas to use for the sprites.
		 * @param maxsprites The max number of sprites.
		 * @param usage The expected usage of the SpriteBatch. The specified usage mode affects the SpriteBatch's memory usage and performance.
		 * @return {SpriteBatch} spriteBatch, The new SpriteBatch.
		 */
		export function newSpriteBatch(texture: Texture, maxsprites?: number, usage?: SpriteBatchUsage): SpriteBatch;

		/**
		 * Creates a new drawable Video. Currently only Ogg Theora video files are
		 * supported.
		 *
		 * @param filename The file path to the Ogg Theora video file.
		 * @param loadaudio Whether to try to load the video's audio into an audio Source. If not explicitly set to true or false, it will try without causing an error if the video has no audio.
		 * @return {Video} video, A new Video.
		 */
		export function newVideo(filename: string, loadaudio?: boolean): Video;

		/**
		 * Creates a new drawable Video. Currently only Ogg Theora video files are
		 * supported.
		 *
		 * @param videostream A video stream object.
		 * @param loadaudio Whether to try to load the video's audio into an audio Source. If not explicitly set to true or false, it will try without causing an error if the video has no audio.
		 * @return {Video} video, A new Video.
		 */
		export function newVideo(videostream: VideoStream, loadaudio?: boolean): Video;

		/**
		 * Resets the current coordinate transformation.
		 *
		 *
		 * This function is always used to reverse any previous calls to
		 * love.graphics.rotate, love.graphics.scale, love.graphics.shear or
		 * love.graphics.translate. It returns the current transformation state to its
		 * defaults.
		 *
		 */
		export function origin(): void;

		/**
		 * Draws one or more points.
		 *
		 * @param x The position of the first point on the x-axis.
		 * @param y The position of the first point on the y-axis.
		 * @param ... The x and y coordinates of additional points.
		 */
		export function points(x: number, y: number, ...vararg: number[]): void;

		/**
		 * Draws one or more points.
		 *
		 * @param points A table containing multiple point positions, in the form of {x, y, ...}.
		 */
		export function points(points: table): void;

		/**
		 * Draws one or more points.
		 *
		 * @param points A table containing multiple individually colored points, in the form of {point, ...}. Each table contains the position and color of a point in the form of {x, y, r, g, b, a}. The color components are optional.
		 */
		export function points(points: table): void;

		/**
		 * Draw a polygon.
		 *
		 *
		 * Following the mode argument, this function can accept multiple numeric
		 * arguments or a single table of numeric arguments. In either case the arguments
		 * are interpreted as alternating x and y coordinates of the polygon's vertices.
		 *
		 *
		 * When in fill mode, the polygon must be convex and simple or rendering artifacts
		 * may occur.
		 *
		 * @param mode How to draw the polygon.
		 * @param ... The vertices of the polygon.
		 */
		export function polygon(mode: DrawMode, ...vararg: number[]): void;

		/**
		 * Draw a polygon.
		 *
		 *
		 * Following the mode argument, this function can accept multiple numeric
		 * arguments or a single table of numeric arguments. In either case the arguments
		 * are interpreted as alternating x and y coordinates of the polygon's vertices.
		 *
		 *
		 * When in fill mode, the polygon must be convex and simple or rendering artifacts
		 * may occur.
		 *
		 * @param mode How to draw the polygon.
		 * @param vertices The vertices of the polygon as a table.
		 */
		export function polygon(mode: DrawMode, vertices: table): void;

		/**
		 * Pops the current coordinate transformation from the transformation stack.
		 *
		 *
		 * This function is always used to reverse a previous push operation. It returns
		 * the current transformation state to what it was before the last preceding push.
		 * For an example, see the description of love.graphics.push.
		 *
		 */
		export function pop(): void;

		/**
		 * Displays the results of drawing operations on the screen.
		 *
		 *
		 * This function is used when writing your own love.run function. It presents all
		 * the results of your drawing operations on the screen. See the example in
		 * love.run for a typical use of this function.
		 *
		 */
		export function present(): void;

		/**
		 * Draws text on screen. If no Font is set, one will be created and set (once) if
		 * needed.
		 *
		 *
		 * As of LOVE 0.7.1, when using translation and scaling functions while drawing
		 * text, this function assumes the scale occurs first. If you don't script with
		 * this in mind, the text won't be in the right position, or possibly even on
		 * screen.
		 *
		 *
		 * love.graphics.print and love.graphics.printf both support UTF-8 encoding.
		 * You'll also need a proper Font for special characters.
		 *
		 * @param text The text to draw.
		 * @param x The position to draw the object (x-axis).
		 * @param y The position to draw the object (y-axis).
		 * @param r Orientation (radians).
		 * @param sx Scale factor (x-axis).
		 * @param sy Scale factor (y-axis).
		 * @param ox Origin offset (x-axis).
		 * @param oy Origin offset (y-axis).
		 * @param kx Shear factor (x-axis).
		 * @param ky Shear factor (y-axis).
		 */
		export function print(text: string, x: number, y: number, r?: number, sx?: number, sy?: number, ox?: number, oy?: number, kx?: number, ky?: number): void;

		/**
		 * Draws text on screen. If no Font is set, one will be created and set (once) if
		 * needed.
		 *
		 *
		 * As of LOVE 0.7.1, when using translation and scaling functions while drawing
		 * text, this function assumes the scale occurs first. If you don't script with
		 * this in mind, the text won't be in the right position, or possibly even on
		 * screen.
		 *
		 *
		 * love.graphics.print and love.graphics.printf both support UTF-8 encoding.
		 * You'll also need a proper Font for special characters.
		 *
		 * @param coloredtext A table containing colors and strings to add to the object, in the form of {color1, string1, color2, string2, ...}.
		 * @param x The position of the new text on the x-axis.
		 * @param y The position of the new text on the y-axis.
		 * @param angle The orientation of the object in radians.
		 * @param sx Scale factor on the x-axis.
		 * @param sy Scale factor on the y-axis.
		 * @param ox Origin offset on the x-axis.
		 * @param oy Origin offset on the y-axis.
		 * @param kx Shearing / skew factor on the x-axis.
		 * @param ky Shearing / skew factor on the y-axis.
		 */
		export function print(coloredtext: table, x: number, y: number, angle?: number, sx?: number, sy?: number, ox?: number, oy?: number, kx?: number, ky?: number): void;

		/**
		 * Draws formatted text, with word wrap and alignment.
		 *
		 *
		 * See additional notes in love.graphics.print.
		 *
		 *
		 * In version 0.9.2 and earlier, wrapping was implemented by breaking up words by
		 * spaces and putting them back together to make sure things fit nicely within the
		 * limit provided. However, due to the way this is done, extra spaces between
		 * words would end up missing when printed on the screen, and some lines could
		 * overflow past the provided wrap limit. In version 0.10.0 and newer this is no
		 * longer the case.
		 *
		 * @param text A text string.
		 * @param x The position on the x-axis.
		 * @param y The position on the y-axis.
		 * @param limit Wrap the line after this many horizontal pixels.
		 * @param align The alignment.
		 * @param r Orientation (radians).
		 * @param sx Scale factor (x-axis).
		 * @param sy Scale factor (y-axis).
		 * @param ox Origin offset (x-axis).
		 * @param oy Origin offset (y-axis).
		 * @param kx Shear factor (x-axis).
		 * @param ky Shear factor (y-axis).
		 */
		export function printf(text: string, x: number, y: number, limit: number, align?: AlignMode, r?: number, sx?: number, sy?: number, ox?: number, oy?: number, kx?: number, ky?: number): void;

		/**
		 * Draws formatted text, with word wrap and alignment.
		 *
		 *
		 * See additional notes in love.graphics.print.
		 *
		 *
		 * In version 0.9.2 and earlier, wrapping was implemented by breaking up words by
		 * spaces and putting them back together to make sure things fit nicely within the
		 * limit provided. However, due to the way this is done, extra spaces between
		 * words would end up missing when printed on the screen, and some lines could
		 * overflow past the provided wrap limit. In version 0.10.0 and newer this is no
		 * longer the case.
		 *
		 * @param coloredtext A table containing colors and strings to add to the object, in the form of {color1, string1, color2, string2, ...}.
		 * @param x The position of the new text on the x-axis.
		 * @param y The position of the new text on the y-axis.
		 * @param wraplimit The maximum width in pixels of the text before it gets automatically wrapped to a new line.
		 * @param align The alignment of the text.
		 * @param angle The orientation of the object in radians.
		 * @param sx Scale factor on the x-axis.
		 * @param sy Scale factor on the y-axis.
		 * @param ox Origin offset on the x-axis.
		 * @param oy Origin offset on the y-axis.
		 * @param kx Shearing / skew factor on the x-axis.
		 * @param ky Shearing / skew factor on the y-axis.
		 */
		export function printf(coloredtext: table, x: number, y: number, wraplimit: number, align: AlignMode, angle?: number, sx?: number, sy?: number, ox?: number, oy?: number, kx?: number, ky?: number): void;

		/**
		 * Copies and pushes the current coordinate transformation to the transformation
		 * stack.
		 *
		 *
		 * This function is always used to prepare for a corresponding pop operation
		 * later. It stores the current coordinate transformation state into the
		 * transformation stack and keeps it active. Later changes to the transformation
		 * can be undone by using the pop operation, which returns the coordinate
		 * transform to the state it was in before calling push.
		 *
		 * @param stack The type of stack to push (e.g. just transformation state, or all love.graphics state).
		 */
		export function push(stack?: StackType): void;

		/**
		 * Draws a rectangle.
		 *
		 * @param mode How to draw the rectangle.
		 * @param x The position of top-left corner along the x-axis.
		 * @param y The position of top-left corner along the y-axis.
		 * @param width Width of the rectangle.
		 * @param height Height of the rectangle.
		 */
		export function rectangle(mode: DrawMode, x: number, y: number, width: number, height: number): void;

		/**
		 * Draws a rectangle.
		 *
		 * @param mode How to draw the rectangle.
		 * @param x The position of top-left corner along the x-axis.
		 * @param y The position of top-left corner along the y-axis.
		 * @param width Width of the rectangle.
		 * @param height Height of the rectangle.
		 * @param rx The x-axis radius of each round corner. Cannot be greater than half the rectangle's width.
		 * @param ry The y-axis radius of each round corner. Cannot be greater than half the rectangle's height.
		 * @param segments The number of segments used for drawing the round corners. A default amount will be chosen if no number is given.
		 */
		export function rectangle(mode: DrawMode, x: number, y: number, width: number, height: number, rx: number, ry?: number, segments?: number): void;

		/**
		 * Replaces the current coordinate transformation with the given Transform object.
		 *
		 * @param transform The Transform object to replace the current graphics coordinate transform with.
		 */
		export function replaceTransform(transform: Transform): void;

		/**
		 * Resets the current graphics settings.
		 *
		 *
		 * Calling reset makes the current drawing color white, the current background
		 * color black, resets any active Canvas or Shader, and removes any scissor
		 * settings. It sets the BlendMode to alpha. It also sets both the point and line
		 * drawing modes to smooth and their sizes to 1.0.
		 *
		 */
		export function reset(): void;

		/**
		 * Rotates the coordinate system in two dimensions.
		 *
		 *
		 * Calling this function affects all future drawing operations by rotating the
		 * coordinate system around the origin by the given amount of radians. This change
		 * lasts until love.draw exits.
		 *
		 * @param angle The amount to rotate the coordinate system in radians.
		 */
		export function rotate(angle: number): void;

		/**
		 * Scales the coordinate system in two dimensions.
		 *
		 *
		 * By default the coordinate system in LÖVE corresponds to the display pixels in
		 * horizontal and vertical directions one-to-one, and the x-axis increases towards
		 * the right while the y-axis increases downwards. Scaling the coordinate system
		 * changes this relation.
		 *
		 *
		 * After scaling by sx and sy, all coordinates are treated as if they were
		 * multiplied by sx and sy. Every result of a drawing operation is also
		 * correspondingly scaled, so scaling by (2, 2) for example would mean making
		 * everything twice as large in both x- and y-directions. Scaling by a negative
		 * value flips the coordinate system in the corresponding direction, which also
		 * means everything will be drawn flipped or upside down, or both. Scaling by zero
		 * is not a useful operation.
		 *
		 *
		 * Scale and translate are not commutative operations, therefore, calling them in
		 * different orders will change the outcome.
		 *
		 *
		 * Scaling lasts until love.draw exits.
		 *
		 * @param sx The scaling in the direction of the x-axis.
		 * @param sy The scaling in the direction of the y-axis. If omitted, it defaults to same as parameter sx.
		 */
		export function scale(sx: number, sy?: number): void;

		/**
		 * Sets the background color.
		 *
		 * @param r The red component (0-255).
		 * @param g The green component (0-255).
		 * @param b The blue component (0-255).
		 * @param a The alpha component (0-255).
		 */
		export function setBackgroundColor(r: number, g: number, b: number, a?: number): void;

		/**
		 * Sets the background color.
		 *
		 * @param rgba A numerical indexed table with the red, green and blue values as numbers. Alpha is 255 if it is not in the table
		 */
		export function setBackgroundColor(rgba: table): void;

		/**
		 * Sets the blending mode.
		 *
		 * @param mode The blend mode to use.
		 */
		export function setBlendMode(mode: BlendMode): void;

		/**
		 * Sets the blending mode.
		 *
		 * @param mode The blend mode to use.
		 * @param alphamode What to do with the alpha of drawn objects when blending.
		 */
		export function setBlendMode(mode: BlendMode, alphamode?: BlendAlphaMode): void;

		/**
		 * Captures drawing operations to a Canvas.
		 *
		 * @param canvas A render target.
		 */
		export function setCanvas(canvas: Canvas): void;

		/**
		 * Captures drawing operations to a Canvas.
		 *
		 */
		export function setCanvas(): void;

		/**
		 * Captures drawing operations to a Canvas.
		 *
		 * @param canvas1 The first render target.
		 * @param canvas2 The second render target.
		 * @param ... More canvases.
		 */
		export function setCanvas(canvas1: Canvas, canvas2: Canvas, ...vararg: Canvas[]): void;

		/**
		 * Sets the color used for drawing.
		 *
		 * @param red The amount of red.
		 * @param green The amount of green.
		 * @param blue The amount of blue.
		 * @param alpha The amount of alpha. The alpha value will be applied to all subsequent draw operations, even the drawing of an image.
		 */
		export function setColor(red: number, green: number, blue: number, alpha: number): void;

		/**
		 * Sets the color used for drawing.
		 *
		 * @param rgba A numerical indexed table with the red, green, blue and alpha values as numbers. The alpha is optional and defaults to 255 if it is left out.
		 */
		export function setColor(rgba: table): void;

		/**
		 * Sets the color mask. Enables or disables specific color components when
		 * rendering and clearing the screen. For example, if red is set to false, no
		 * further changes will be made to the red component of any pixels.
		 *
		 *
		 * Enables all color components when called without arguments.
		 *
		 * @param red Render red component.
		 * @param green Render green component.
		 * @param blue Render blue component.
		 * @param alpha Render alpha component.
		 */
		export function setColorMask(red: boolean, green: boolean, blue: boolean, alpha: boolean): void;

		/**
		 * Sets the color mask. Enables or disables specific color components when
		 * rendering and clearing the screen. For example, if red is set to false, no
		 * further changes will be made to the red component of any pixels.
		 *
		 *
		 * Enables all color components when called without arguments.
		 *
		 */
		export function setColorMask(): void;

		/**
		 * Sets the default scaling filters used with Images, Canvases, and Fonts.
		 *
		 *
		 * This function does not apply retroactively to loaded images.
		 *
		 * @param min Filter mode used when scaling the image down.
		 * @param mag Filter mode used when scaling the image up.
		 * @param anisotropy Maximum amount of Anisotropic Filtering used.
		 */
		export function setDefaultFilter(min: FilterMode, mag?: FilterMode, anisotropy?: number): void;

		/**
		 * Configures depth testing and writing to the depth buffer.
		 *
		 *
		 * This is low-level functionality designed for use with custom vertex shaders and
		 * Meshes with custom vertex attributes. No higher level APIs are provided to set
		 * the depth of 2D graphics such as shapes, lines, and Images.
		 *
		 * @param comparemode Depth comparison mode used for depth testing.
		 * @param write Whether to write update / write values to the depth buffer when rendering.
		 */
		export function setDepthMode(comparemode: CompareMode, write: boolean): void;

		/**
		 * Set an already-loaded Font as the current font or create and load a new one
		 * from the file and size.
		 *
		 *
		 * It's recommended that Font objects are created with love.graphics.newFont in
		 * the loading stage and then passed to this function in the drawing stage.
		 *
		 * @param font The Font object to use.
		 */
		export function setFont(font: Font): void;

		/**
		 * Sets whether triangles with clockwise- or counterclockwise-ordered vertices are
		 * considered front-facing.
		 *
		 *
		 * This is designed for use in combination with Mesh face culling. Other
		 * love.graphics shapes, lines, and sprites are not guaranteed to have a specific
		 * winding order to their internal vertices.
		 *
		 * @param winding The winding mode to use. The default winding is counterclockwise ("ccw").
		 */
		export function setFrontFaceWinding(winding: VertexWinding): void;

		/**
		 * Sets the line join style.
		 *
		 * @param join The LineJoin to use.
		 */
		export function setLineJoin(join: LineJoin): void;

		/**
		 * Sets the line style.
		 *
		 * @param style The LineStyle to use.
		 */
		export function setLineStyle(style: LineStyle): void;

		/**
		 * Sets the line width.
		 *
		 * @param width The width of the line.
		 */
		export function setLineWidth(width: number): void;

		/**
		 * Sets whether back-facing triangles in a Mesh are culled.
		 *
		 *
		 * This is designed for use with low level custom hardware-accelerated 3D
		 * rendering via custom vertex attributes on Meshes, custom vertex shaders, and
		 * depth testing with a depth buffer.
		 *
		 * @param mode The Mesh face culling mode to use (whether to render everything, cull back-facing triangles, or cull front-facing triangles).
		 */
		export function setMeshCullMode(mode: CullMode): void;

		/**
		 * Creates and sets a new font.
		 *
		 * @param filename The path and name of the file with the font.
		 * @param size The size of the font.
		 * @return {Font} font, The new font.
		 */
		export function setNewFont(filename: string, size?: number): Font;

		/**
		 * Creates and sets a new font.
		 *
		 * @param file A File with the font.
		 * @param size The size of the font.
		 * @return {Font} font, The new font.
		 */
		export function setNewFont(file: File, size?: number): Font;

		/**
		 * Creates and sets a new font.
		 *
		 * @param data A Data with the font.
		 * @param size The size of the font.
		 * @return {Font} font, The new font.
		 */
		export function setNewFont(data: Data, size?: number): Font;

		/**
		 * Sets or resets a Shader as the current pixel effect or vertex shaders. All
		 * drawing operations until the next love.graphics.setShader will be drawn using
		 * the Shader object specified.
		 *
		 *
		 * Disables the shaders when called without arguments.
		 *
		 */
		export function setShader(): void;

		/**
		 * Sets or resets a Shader as the current pixel effect or vertex shaders. All
		 * drawing operations until the next love.graphics.setShader will be drawn using
		 * the Shader object specified.
		 *
		 *
		 * Disables the shaders when called without arguments.
		 *
		 * @param shader The new shader.
		 */
		export function setShader(shader: Shader): void;

		/**
		 * Sets the point size.
		 *
		 * @param size The new point size.
		 */
		export function setPointSize(size: number): void;

		/**
		 * Sets or disables scissor.
		 *
		 *
		 * The scissor limits the drawing area to a specified rectangle. This affects all
		 * graphics calls, including love.graphics.clear.
		 *
		 * @param x The X coordinate of upper left corner.
		 * @param y The Y coordinate of upper left corner.
		 * @param width The width of clipping rectangle.
		 * @param height The height of clipping rectangle.
		 */
		export function setScissor(x: number, y: number, width: number, height: number): void;

		/**
		 * Sets or disables scissor.
		 *
		 *
		 * The scissor limits the drawing area to a specified rectangle. This affects all
		 * graphics calls, including love.graphics.clear.
		 *
		 */
		export function setScissor(): void;

		/**
		 * Configures or disables stencil testing.
		 *
		 *
		 * When stencil testing is enabled, the geometry of everything that is drawn
		 * afterward will be clipped / stencilled out based on a comparison between the
		 * arguments of this function and the stencil value of each pixel that the
		 * geometry touches. The stencil values of pixels are affected via
		 * love.graphics.stencil.
		 *
		 *
		 * Each Canvas has its own per-pixel stencil values.
		 *
		 * @param comparemode The type of comparison to make for each pixel.
		 * @param comparevalue The value to use when comparing with the stencil value of each pixel. Must be between 0 and 255.
		 */
		export function setStencilTest(comparemode: CompareMode, comparevalue: number): void;

		/**
		 * Configures or disables stencil testing.
		 *
		 *
		 * When stencil testing is enabled, the geometry of everything that is drawn
		 * afterward will be clipped / stencilled out based on a comparison between the
		 * arguments of this function and the stencil value of each pixel that the
		 * geometry touches. The stencil values of pixels are affected via
		 * love.graphics.stencil.
		 *
		 *
		 * Each Canvas has its own per-pixel stencil values.
		 *
		 */
		export function setStencilTest(): void;

		/**
		 * Sets whether wireframe lines will be used when drawing.
		 *
		 *
		 * Wireframe mode should only be used for debugging. The lines drawn with it
		 * enabled do not behave like regular love.graphics lines: their widths don't
		 * scale with the coordinate transformations or with love.graphics.setLineWidth,
		 * and they don't use the smooth LineStyle.
		 *
		 * @param enable True to enable wireframe mode when drawing, false to disable it.
		 */
		export function setWireframe(enable: boolean): void;

		/**
		 * Shears the coordinate system.
		 *
		 * @param kx The shear factor on the x-axis.
		 * @param ky The shear factor on the y-axis.
		 */
		export function shear(kx: number, ky: number): void;

		/**
		 * Draws geometry as a stencil.
		 *
		 *
		 * The geometry drawn by the supplied function sets invisible stencil values of
		 * pixels, instead of setting pixel colors. The stencil values of pixels can act
		 * like a mask / stencil - love.graphics.setStencilTest can be used afterward to
		 * determine how further rendering is affected by the stencil values in each
		 * pixel.
		 *
		 *
		 * Each Canvas has its own per-pixel stencil values. Stencil values are within the
		 * range of [0, 255].
		 *
		 * @param stencilfunction Function which draws geometry. The stencil values of pixels, rather than the color of each pixel, will be affected by the geometry.
		 * @param action How to modify any stencil values of pixels that are touched by what's drawn in the stencil function.
		 * @param value The new stencil value to use for pixels if the "replace" stencil action is used. Has no effect with other stencil actions. Must be between 0 and 255.
		 * @param keepvalues True to preserve old stencil values of pixels, false to re-set every pixel's stencil value to 0 before executing the stencil function. love.graphics.clear will also re-set all stencil values.
		 */
		export function stencil(stencilfunction: Function, action?: StencilAction, value?: number, keepvalues?: boolean): void;

		/**
		 * Converts the given 2D position from global coordinates into screen-space.
		 *
		 *
		 * This effectively applies the current graphics transformations to the given
		 * position. A similar Transform:transformPoint method exists for Transform
		 * objects.
		 *
		 * @param globalX The x component of the position in global coordinates.
		 * @param globalY The y component of the position in global coordinates.
		 * @return {number} screenX, The x component of the position with graphics transformations applied.
		 * @return {number} sreenY, The y component of the position with graphics transformations applied.
		 */
		/** @TupleReturn */
		export function transformPoint(globalX: number, globalY: number): [number, number];

		/**
		 * Translates the coordinate system in two dimensions.
		 *
		 *
		 * When this function is called with two numbers, dx, and dy, all the following
		 * drawing operations take effect as if their x and y coordinates were x+dx and
		 * y+dy.
		 *
		 *
		 * Scale and translate are not commutative operations, therefore, calling them in
		 * different orders will change the outcome.
		 *
		 *
		 * This change lasts until love.graphics.clear is called (which is called
		 * automatically before love.draw in the default love.run function), or a
		 * love.graphics.pop reverts to a previous coordinate system state.
		 *
		 *
		 * Translating using whole numbers will prevent tearing/blurring of images and
		 * fonts draw after translating.
		 *
		 * @param dx The translation relative to the x-axis.
		 * @param dy The translation relative to the y-axis.
		 */
		export function translate(dx: number, dy: number): void;

		/**
		 * Validates shader code. Check if specificed shader code does not contain any
		 * errors.
		 *
		 * @param gles Validate code as GLSL ES shader.
		 * @param code The pixel shader or vertex shader code, or a filename pointing to a file with the code.
		 * @return {boolean} status, true if specified shader code doesn't contain any errors. false otherwise.
		 * @return {string} message, Reason why shader code validation failed (or nil if validation succeded).
		 */
		/** @TupleReturn */
		export function validateShader(gles: boolean, code: string): [boolean, string];

		/**
		 * Validates shader code. Check if specificed shader code does not contain any
		 * errors.
		 *
		 * @param gles Validate code as GLSL ES shader.
		 * @param pixelcode The pixel shader code, or a filename pointing to a file with the code.
		 * @param vertexcode The vertex shader code, or a filename pointing to a file with the code.
		 * @return {boolean} status, true if specified shader code doesn't contain any errors. false otherwise.
		 * @return {string} message, Reason why shader code validation failed (or nil if validation succeded).
		 */
		/** @TupleReturn */
		export function validateShader(gles: boolean, pixelcode: string, vertexcode: string): [boolean, string];

	}
	/**
	 * Provides an interface to decode encoded image data.
	 *
	 */
	export namespace image {
		/**
		 * Determines whether a file can be loaded as CompressedImageData.
		 *
		 * @param filename The filename of the potentially compressed image file.
		 * @return {boolean} compressed, Whether the file can be loaded as CompressedImageData or not.
		 */
		export function isCompressed(filename: string): boolean;

		/**
		 * Determines whether a file can be loaded as CompressedImageData.
		 *
		 * @param fileData A FileData potentially containing a compressed image.
		 * @return {boolean} compressed, Whether the FileData can be loaded as CompressedImageData or not.
		 */
		export function isCompressed(fileData: FileData): boolean;

		/**
		 * Create a new CompressedImageData object from a compressed image file. LÖVE
		 * supports several compressed texture formats, enumerated in the
		 * CompressedImageFormat page.
		 *
		 * @param filename The filename of the compressed image file.
		 * @return {CompressedImageData} compressedImageData, The new CompressedImageData object.
		 */
		export function newCompressedData(filename: string): CompressedImageData;

		/**
		 * Create a new CompressedImageData object from a compressed image file. LÖVE
		 * supports several compressed texture formats, enumerated in the
		 * CompressedImageFormat page.
		 *
		 * @param fileData A FileData containing a compressed image.
		 * @return {CompressedImageData} compressedImageData, The new CompressedImageData object.
		 */
		export function newCompressedData(fileData: FileData): CompressedImageData;

		/**
		 * Create a new ImageData object.
		 *
		 * @param width The width of the ImageData.
		 * @param height The height of the ImageData.
		 * @return {ImageData} imageData, The new blank ImageData object. Each pixel's color values, (including the alpha values!) will be set to zero.
		 */
		export function newImageData(width: number, height: number): ImageData;

		/**
		 * Create a new ImageData object.
		 *
		 * @param width The width of the ImageData.
		 * @param height The height of the ImageData.
		 * @param data The data to load into the ImageData (RGBA bytes, left to right and top to bottom).
		 * @return {ImageData} imageData, The new ImageData object.
		 */
		export function newImageData(width: number, height: number, data: string): ImageData;

		/**
		 * Create a new ImageData object.
		 *
		 * @param filename The filename of the image file.
		 * @return {ImageData} imageData, The new ImageData object.
		 */
		export function newImageData(filename: string): ImageData;

		/**
		 * Create a new ImageData object.
		 *
		 * @param filedata The encoded file data to decode into image data.
		 * @return {ImageData} imageData, The new ImageData object.
		 */
		export function newImageData(filedata: FileData): ImageData;

	}
	/**
	 * Provides an interface to the user's joystick.
	 *
	 */
	export namespace joystick {
		/**
		 * Gets the number of connected joysticks.
		 *
		 * @return {number} joystickcount, The number of connected joysticks.
		 */
		export function getJoystickCount(): number;

		/**
		 * Gets a list of connected Joysticks.
		 *
		 * @return {table} joysticks, The list of currently connected Joysticks.
		 */
		export function getJoysticks(): table;

		/**
		 * Loads a gamepad mappings string or file created with
		 * love.joystick.saveGamepadMappings.
		 *
		 * @param filename The filename to load the mappings string from.
		 */
		export function loadGamepadMappings(filename: string): void;

		/**
		 * Loads a gamepad mappings string or file created with
		 * love.joystick.saveGamepadMappings.
		 *
		 * @param mappings The mappings string to load.
		 */
		export function loadGamepadMappings(mappings: string): void;

		/**
		 * Saves the virtual gamepad mappings of all Joysticks that are recognized as
		 * gamepads and have either been recently used or their gamepad bindings have been
		 * modified.
		 *
		 * @param filename The filename to save the mappings string to.
		 * @return {string} mappings, The mappings string that was written to the file.
		 */
		export function saveGamepadMappings(filename: string): string;

		/**
		 * Saves the virtual gamepad mappings of all Joysticks that are recognized as
		 * gamepads and have either been recently used or their gamepad bindings have been
		 * modified.
		 *
		 * @return {string} mappings, The mappings string.
		 */
		export function saveGamepadMappings(): string;

		/**
		 * Binds a virtual gamepad input to a button, axis or hat for all Joysticks of a
		 * certain type. For example, if this function is used with a GUID returned by a
		 * Dualshock 3 controller in OS X, the binding will affect Joystick:getGamepadAxis
		 * and Joystick:isGamepadDown for all Dualshock 3 controllers used with the game
		 * when run in OS X.
		 *
		 *
		 * LÖVE includes built-in gamepad bindings for many common controllers. This
		 * function lets you change the bindings or add new ones for types of Joysticks
		 * which aren't recognized as gamepads by default.
		 *
		 *
		 * The virtual gamepad buttons and axes are designed around the Xbox 360
		 * controller layout.
		 *
		 * @param guid The OS-dependent GUID for the type of Joystick the binding will affect.
		 * @param button The virtual gamepad button to bind.
		 * @param inputtype The type of input to bind the virtual gamepad button to.
		 * @param inputindex The index of the axis, button, or hat to bind the virtual gamepad button to.
		 * @param hatdirection The direction of the hat, if the virtual gamepad button will be bound to a hat. nil otherwise.
		 * @return {boolean} success, Whether the virtual gamepad button was successfully bound.
		 */
		export function setGamepadMapping(guid: string, button: GamepadButton, inputtype: JoystickInputType, inputindex: number, hatdirection: JoystickHat): boolean;

		/**
		 * Binds a virtual gamepad input to a button, axis or hat for all Joysticks of a
		 * certain type. For example, if this function is used with a GUID returned by a
		 * Dualshock 3 controller in OS X, the binding will affect Joystick:getGamepadAxis
		 * and Joystick:isGamepadDown for all Dualshock 3 controllers used with the game
		 * when run in OS X.
		 *
		 *
		 * LÖVE includes built-in gamepad bindings for many common controllers. This
		 * function lets you change the bindings or add new ones for types of Joysticks
		 * which aren't recognized as gamepads by default.
		 *
		 *
		 * The virtual gamepad buttons and axes are designed around the Xbox 360
		 * controller layout.
		 *
		 * @param guid The OS-dependent GUID for the type of Joystick the binding will affect.
		 * @param axis The virtual gamepad axis to bind.
		 * @param inputtype The type of input to bind the virtual gamepad axis to.
		 * @param inputindex The index of the axis, button, or hat to bind the virtual gamepad axis to.
		 * @param hatdirection The direction of the hat, if the virtual gamepad axis will be bound to a hat. nil otherwise.
		 * @return {boolean} success, Whether the virtual gamepad button was successfully bound.
		 */
		export function setGamepadMapping(guid: string, axis: GamepadAxis, inputtype: JoystickInputType, inputindex: number, hatdirection: JoystickHat): boolean;

	}
	/**
	 * Provides an interface to the user's keyboard.
	 *
	 */
	export namespace keyboard {
		/**
		 * Gets the key corresponding to the given hardware scancode.
		 *
		 *
		 * Unlike key constants, Scancodes are keyboard layout-independent. For example
		 * the scancode "w" will be generated if the key in the same place as the "w" key
		 * on an American keyboard is pressed, no matter what the key is labelled or what
		 * the user's operating system settings are.
		 *
		 *
		 * Scancodes are useful for creating default controls that have the same physical
		 * locations on on all systems.
		 *
		 * @param scancode The scancode to get the key from.
		 * @return {KeyConstant} key, The key corresponding to the given scancode, or "any" if the scancode doesn't map to a KeyConstant on the current system.
		 */
		export function getKeyFromScancode(scancode: Scancode): KeyConstant;

		/**
		 * Gets the hardware scancode corresponding to the given key.
		 *
		 *
		 * Unlike key constants, Scancodes are keyboard layout-independent. For example
		 * the scancode "w" will be generated if the key in the same place as the "w" key
		 * on an American keyboard is pressed, no matter what the key is labelled or what
		 * the user's operating system settings are.
		 *
		 *
		 * Scancodes are useful for creating default controls that have the same physical
		 * locations on on all systems.
		 *
		 * @param key The key to get the scancode from.
		 * @return {Scancode} scancode, The scancode corresponding to the given key, or "any" if the given key has no known physical representation on the current system.
		 */
		export function getScancodeFromKey(key: KeyConstant): Scancode;

		/**
		 * Gets whether key repeat is enabled.
		 *
		 * @return {boolean} enabled, Whether key repeat is enabled.
		 */
		export function hasKeyRepeat(): boolean;

		/**
		 * Gets whether text input events are enabled.
		 *
		 * @return {boolean} enabled, Whether text input events are enabled.
		 */
		export function hasTextInput(): boolean;

		/**
		 * Checks whether a certain key is down. Not to be confused with love.keypressed
		 * or love.keyreleased.
		 *
		 * @param key The key to check.
		 * @return {boolean} down, True if the key is down, false if not.
		 */
		export function isDown(key: KeyConstant): boolean;

		/**
		 * Checks whether a certain key is down. Not to be confused with love.keypressed
		 * or love.keyreleased.
		 *
		 * @param key A key to check.
		 * @param ... Additional keys to check.
		 * @return {boolean} anyDown, True if any supplied key is down, false if not.
		 */
		export function isDown(key: KeyConstant, ...vararg: KeyConstant[]): boolean;

		/**
		 * Checks whether the specified Scancodes are pressed. Not to be confused with
		 * love.keypressed or love.keyreleased.
		 *
		 *
		 * Unlike regular KeyConstants, Scancodes are keyboard layout-independent. The
		 * scancode "w" is used if the key in the same place as the "w" key on an American
		 * keyboard is pressed, no matter what the key is labelled or what the user's
		 * operating system settings are.
		 *
		 * @param scancode A Scancode to check.
		 * @param ... Additional Scancodes to check.
		 * @return {boolean} down, True if any supplied Scancode is down, false if not.
		 */
		export function isScancodeDown(scancode: Scancode, ...vararg: Scancode[]): boolean;

		/**
		 * Enables or disables key repeat. It is disabled by default.
		 *
		 *
		 * The interval between repeats depends on the user's system settings.
		 *
		 * @param enable Whether repeat keypress events should be enabled when a key is held down.
		 */
		export function setKeyRepeat(enable: boolean): void;

		/**
		 * Enables or disables text input events. It is enabled by default on Windows,
		 * Mac, and Linux, and disabled by default on iOS and Android.
		 *
		 * @param enable Whether text input events should be enabled.
		 */
		export function setTextInput(enable: boolean): void;

		/**
		 * Enables or disables text input events. It is enabled by default on Windows,
		 * Mac, and Linux, and disabled by default on iOS and Android.
		 *
		 * @param enable Whether text input events should be enabled.
		 * @param x On-screen keyboard x position.
		 * @param y On-screen keyboard y position.
		 * @param w On-screen keyboard width.
		 * @param h On-screen keyboard height.
		 */
		export function setTextInput(enable: boolean, x: number, y: number, w: number, h: number): void;

	}
	/**
	 * Provides system-independent mathematical functions.
	 *
	 */
	export namespace math {
		/**
		 * Compresses a string or data using a specific compression algorithm.
		 *
		 * @param rawstring The raw (un-compressed) string to compress.
		 * @param format The format to use when compressing the string.
		 * @param level The level of compression to use, between 0 and 9. -1 indicates the default level. The meaning of this argument depends on the compression format being used.
		 * @return {CompressedData} compressedData, A new Data object containing the compressed version of the string.
		 */
		export function compress(rawstring: string, format?: CompressedDataFormat, level?: number): CompressedData;

		/**
		 * Compresses a string or data using a specific compression algorithm.
		 *
		 * @param data A Data object containing the raw (un-compressed) data to compress.
		 * @param format The format to use when compressing the data.
		 * @param level The level of compression to use, between 0 and 9. -1 indicates the default level. The meaning of this argument depends on the compression format being used.
		 * @return {CompressedData} compressedData, A new Data object containing the compressed version of the raw data.
		 */
		export function compress(data: Data, format?: CompressedDataFormat, level?: number): CompressedData;

		/**
		 * Decompresses a CompressedData or previously compressed string or Data object.
		 *
		 * @param compressedData The compressed data to decompress.
		 * @return {string} rawstring, A string containing the raw decompressed data.
		 */
		export function decompress(compressedData: CompressedData): string;

		/**
		 * Decompresses a CompressedData or previously compressed string or Data object.
		 *
		 * @param compressedString A string containing data previously compressed with love.math.compress.
		 * @param format The format that was used to compress the given string.
		 * @return {string} rawstring, A string containing the raw decompressed data.
		 */
		export function decompress(compressedString: string, format: CompressedDataFormat): string;

		/**
		 * Decompresses a CompressedData or previously compressed string or Data object.
		 *
		 * @param data A Data object containing data previously compressed with love.math.compress.
		 * @param format The format that was used to compress the given data.
		 * @return {string} rawstring, A string containing the raw decompressed data.
		 */
		export function decompress(data: Data, format: CompressedDataFormat): string;

		/**
		 * Converts a color from gamma-space (sRGB) to linear-space (RGB). This is useful
		 * when doing gamma-correct rendering and you need to do math in linear RGB in the
		 * few cases where LÖVE doesn't handle conversions automatically.
		 *
		 * @param r The red channel of the sRGB color to convert.
		 * @param g The green channel of the sRGB color to convert.
		 * @param b The blue channel of the sRGB color to convert.
		 * @return {number} lr, The red channel of the converted color in linear RGB space.
		 * @return {number} lg, The green channel of the converted color in linear RGB space.
		 * @return {number} lb, The blue channel of the converted color in linear RGB space.
		 */
		/** @TupleReturn */
		export function gammaToLinear(r: number, g: number, b: number): [number, number, number];

		/**
		 * Converts a color from gamma-space (sRGB) to linear-space (RGB). This is useful
		 * when doing gamma-correct rendering and you need to do math in linear RGB in the
		 * few cases where LÖVE doesn't handle conversions automatically.
		 *
		 * @param color An array with the red, green, and blue channels of the sRGB color to convert.
		 * @return {number} lr, The red channel of the converted color in linear RGB space.
		 * @return {number} lg, The green channel of the converted color in linear RGB space.
		 * @return {number} lb, The blue channel of the converted color in linear RGB space.
		 */
		/** @TupleReturn */
		export function gammaToLinear(color: table): [number, number, number];

		/**
		 * Converts a color from gamma-space (sRGB) to linear-space (RGB). This is useful
		 * when doing gamma-correct rendering and you need to do math in linear RGB in the
		 * few cases where LÖVE doesn't handle conversions automatically.
		 *
		 * @param c The value of a color channel in sRGB space to convert.
		 * @return {number} lc, The value of the color channel in linear RGB space.
		 */
		export function gammaToLinear(c: number): number;

		/**
		 * Gets the seed of the random number generator.
		 *
		 *
		 * The state is split into two numbers due to Lua's use of doubles for all number
		 * values - doubles can't accurately represent integer values above 2^53.
		 *
		 * @return {number} low, Integer number representing the lower 32 bits of the random number generator's 64 bit state value.
		 * @return {number} high, Integer number representing the higher 32 bits of the random number generator's 64 bit state value.
		 */
		/** @TupleReturn */
		export function getRandomSeed(): [number, number];

		/**
		 * Gets the current state of the random number generator. This returns an opaque
		 * implementation-dependent string which is only useful for later use with
		 * RandomGenerator:setState.
		 *
		 *
		 * This is different from RandomGenerator:getSeed in that getState gets the
		 * RandomGenerator's current state, whereas getSeed gets the previously set seed
		 * number.
		 *
		 *
		 * The value of the state string does not depend on the current operating system.
		 *
		 * @return {string} state, The current state of the RandomGenerator object, represented as a string.
		 */
		export function getRandomState(): string;

		/**
		 * Checks whether a polygon is convex.
		 *
		 *
		 * PolygonShapes in love.physics, some forms of Mesh, and polygons drawn with
		 * love.graphics.polygon must be simple convex polygons.
		 *
		 * @param vertices The vertices of the polygon as a table in the form of {x1, y1, x2, y2, x3, y3, ...}.
		 * @return {boolean} convex, Whether the given polygon is convex.
		 */
		export function isConvex(vertices: table): boolean;

		/**
		 * Checks whether a polygon is convex.
		 *
		 *
		 * PolygonShapes in love.physics, some forms of Mesh, and polygons drawn with
		 * love.graphics.polygon must be simple convex polygons.
		 *
		 * @param x1 The position of the first vertex of the polygon on the x-axis.
		 * @param y1 The position of the first vertex of the polygon on the y-axis.
		 * @param x2 The position of the second vertex of the polygon on the x-axis.
		 * @param y2 The position of the second vertex of the polygon on the y-axis.
		 * @param x3 The position of the third vertex of the polygon on the x-axis.
		 * @param y3 The position of the third vertex of the polygon on the y-axis.
		 * @param ... Additional vertices.
		 * @return {boolean} convex, Whether the given polygon is convex.
		 */
		export function isConvex(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, ...vararg: number[]): boolean;

		/**
		 * Converts a color from linear-space (RGB) to gamma-space (sRGB). This is useful
		 * when storing linear RGB color values in an image, because the linear RGB color
		 * space has less precision than sRGB for dark colors, which can result in
		 * noticeable color banding when drawing.
		 *
		 *
		 * In general, colors chosen based on what they look like on-screen are already in
		 * gamma-space and should not be double-converted. Colors calculated using math
		 * are often in the linear RGB space.
		 *
		 * @param lr The red channel of the linear RGB color to convert.
		 * @param lg The green channel of the linear RGB color to convert.
		 * @param lb The blue channel of the linear RGB color to convert.
		 * @return {number} cr, The red channel of the converted color in gamma sRGB space.
		 * @return {number} cg, The green channel of the converted color in gamma sRGB space.
		 * @return {number} cb, The blue channel of the converted color in gamma sRGB space.
		 */
		/** @TupleReturn */
		export function linearToGamma(lr: number, lg: number, lb: number): [number, number, number];

		/**
		 * Converts a color from linear-space (RGB) to gamma-space (sRGB). This is useful
		 * when storing linear RGB color values in an image, because the linear RGB color
		 * space has less precision than sRGB for dark colors, which can result in
		 * noticeable color banding when drawing.
		 *
		 *
		 * In general, colors chosen based on what they look like on-screen are already in
		 * gamma-space and should not be double-converted. Colors calculated using math
		 * are often in the linear RGB space.
		 *
		 * @param color An array with the red, green, and blue channels of the linear RGB color to convert.
		 * @return {number} cr, The red channel of the converted color in gamma sRGB space.
		 * @return {number} cg, The green channel of the converted color in gamma sRGB space.
		 * @return {number} cb, The blue channel of the converted color in gamma sRGB space.
		 */
		/** @TupleReturn */
		export function linearToGamma(color: table): [number, number, number];

		/**
		 * Converts a color from linear-space (RGB) to gamma-space (sRGB). This is useful
		 * when storing linear RGB color values in an image, because the linear RGB color
		 * space has less precision than sRGB for dark colors, which can result in
		 * noticeable color banding when drawing.
		 *
		 *
		 * In general, colors chosen based on what they look like on-screen are already in
		 * gamma-space and should not be double-converted. Colors calculated using math
		 * are often in the linear RGB space.
		 *
		 * @param lc The value of a color channel in linear RGB space to convert.
		 * @return {number} c, The value of the color channel in gamma sRGB space.
		 */
		export function linearToGamma(lc: number): number;

		/**
		 * Creates a new BezierCurve object.
		 *
		 *
		 * The number of vertices in the control polygon determines the degree of the
		 * curve, e.g. three vertices define a quadratic (degree 2) Bézier curve, four
		 * vertices define a cubic (degree 3) Bézier curve, etc.
		 *
		 * @param vertices The vertices of the control polygon as a table in the form of {x1, y1, x2, y2, x3, y3, ...}.
		 * @return {BezierCurve} curve, A Bézier curve object.
		 */
		export function newBezierCurve(vertices: table): BezierCurve;

		/**
		 * Creates a new BezierCurve object.
		 *
		 *
		 * The number of vertices in the control polygon determines the degree of the
		 * curve, e.g. three vertices define a quadratic (degree 2) Bézier curve, four
		 * vertices define a cubic (degree 3) Bézier curve, etc.
		 *
		 * @param x1 The position of the first vertex of the control polygon on the x-axis.
		 * @param y1 The position of the first vertex of the control polygon on the y-axis.
		 * @param x2 The position of the second vertex of the control polygon on the x-axis.
		 * @param y2 The position of the second vertex of the control polygon on the y-axis.
		 * @param x3 The position of the third vertex of the control polygon on the x-axis.
		 * @param y3 The position of the third vertex of the control polygon on the y-axis.
		 * @param ... Additional vertices.
		 * @return {BezierCurve} curve, A Bézier curve object.
		 */
		export function newBezierCurve(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, ...vararg: number[]): BezierCurve;

		/**
		 * Creates a new RandomGenerator object which is completely independent of other
		 * RandomGenerator objects and random functions.
		 *
		 * @return {RandomGenerator} rng, The new Random Number Generator object.
		 */
		export function newRandomGenerator(): RandomGenerator;

		/**
		 * Creates a new RandomGenerator object which is completely independent of other
		 * RandomGenerator objects and random functions.
		 *
		 * @param seed The initial seed number to use for this object.
		 * @return {RandomGenerator} rng, The new Random Number Generator object.
		 */
		export function newRandomGenerator(seed: number): RandomGenerator;

		/**
		 * Creates a new RandomGenerator object which is completely independent of other
		 * RandomGenerator objects and random functions.
		 *
		 * @param low The lower 32 bits of the state number to use for this instance of the object.
		 * @param high The higher 32 bits of the state number to use for this instance of the object.
		 * @return {RandomGenerator} rng, The new Random Number Generator object.
		 */
		export function newRandomGenerator(low: number, high: number): RandomGenerator;

		/**
		 * Creates a new Transform object.
		 *
		 * @return {Transform} transform, The new Transform object.
		 */
		export function newTransform(): Transform;

		/**
		 * Creates a new Transform object.
		 *
		 * @param x The position of the new Transform on the x-axis.
		 * @param y The position of the new Transform on the y-axis.
		 * @param angle The orientation of the new Transform in radians.
		 * @param sx Scale factor on the x-axis.
		 * @param sy Scale factor on the y-axis.
		 * @param ox Origin offset on the x-axis.
		 * @param oy Origin offset on the y-axis.
		 * @param kx Shearing / skew factor on the x-axis.
		 * @param ky Shearing / skew factor on the y-axis.
		 * @return {Transform} transform, The new Transform object.
		 */
		export function newTransform(x: number, y: number, angle?: number, sx?: number, sy?: number, ox?: number, oy?: number, kx?: number, ky?: number): Transform;

		/**
		 * Generates a Simplex or Perlin noise value in 1-4 dimensions. The return value
		 * will always be the same, given the same arguments.
		 *
		 *
		 * Simplex noise is closely related to Perlin noise. It is widely used for
		 * procedural content generation.
		 *
		 *
		 * There are many webpages which discuss Perlin and Simplex noise in detail.
		 *
		 * @param x The number used to generate the noise value.
		 * @return {number} value, The noise value in the range of [0, 1].
		 */
		export function noise(x: number): number;

		/**
		 * Generates a Simplex or Perlin noise value in 1-4 dimensions. The return value
		 * will always be the same, given the same arguments.
		 *
		 *
		 * Simplex noise is closely related to Perlin noise. It is widely used for
		 * procedural content generation.
		 *
		 *
		 * There are many webpages which discuss Perlin and Simplex noise in detail.
		 *
		 * @param x The first value of the 2-dimensional vector used to generate the noise value.
		 * @param y The second value of the 2-dimensional vector used to generate the noise value.
		 * @return {number} value, The noise value in the range of [0, 1].
		 */
		export function noise(x: number, y: number): number;

		/**
		 * Generates a Simplex or Perlin noise value in 1-4 dimensions. The return value
		 * will always be the same, given the same arguments.
		 *
		 *
		 * Simplex noise is closely related to Perlin noise. It is widely used for
		 * procedural content generation.
		 *
		 *
		 * There are many webpages which discuss Perlin and Simplex noise in detail.
		 *
		 * @param x The first value of the 3-dimensional vector used to generate the noise value.
		 * @param y The second value of the 3-dimensional vector used to generate the noise value.
		 * @param z The third value of the 3-dimensional vector used to generate the noise value.
		 * @return {number} value, The noise value in the range of [0, 1].
		 */
		export function noise(x: number, y: number, z: number): number;

		/**
		 * Generates a Simplex or Perlin noise value in 1-4 dimensions. The return value
		 * will always be the same, given the same arguments.
		 *
		 *
		 * Simplex noise is closely related to Perlin noise. It is widely used for
		 * procedural content generation.
		 *
		 *
		 * There are many webpages which discuss Perlin and Simplex noise in detail.
		 *
		 * @param x The first value of the 4-dimensional vector used to generate the noise value.
		 * @param y The second value of the 4-dimensional vector used to generate the noise value.
		 * @param z The third value of the 4-dimensional vector used to generate the noise value.
		 * @param w The fourth value of the 4-dimensional vector used to generate the noise value.
		 * @return {number} value, The noise value in the range of [0, 1].
		 */
		export function noise(x: number, y: number, z: number, w: number): number;

		/**
		 * Generates a pseudo-random number in a platform independent manner.
		 *
		 * @return {number} number, The pseudo-random number.
		 */
		export function random(): number;

		/**
		 * Generates a pseudo-random number in a platform independent manner.
		 *
		 * @param max The maximum possible value it should return.
		 * @return {number} number, The pseudo-random integer number.
		 */
		export function random(max: number): number;

		/**
		 * Generates a pseudo-random number in a platform independent manner.
		 *
		 * @param min The minimum possible value it should return.
		 * @param max The maximum possible value it should return.
		 * @return {number} number, The pseudo-random integer number.
		 */
		export function random(min: number, max: number): number;

		/**
		 * Get a normally distributed pseudo random number.
		 *
		 * @param stddev Standard deviation of the distribution.
		 * @param mean The mean of the distribution.
		 * @return {number} number, Normally distributed random number with variance (stddev)² and the specified mean.
		 */
		export function randomNormal(stddev?: number, mean?: number): number;

		/**
		 * Sets the seed of the random number generator using the specified integer
		 * number.
		 *
		 * @param seed The integer number with which you want to seed the randomization. Must be within the range of [1, 2^53].
		 */
		export function setRandomSeed(seed: number): void;

		/**
		 * Sets the seed of the random number generator using the specified integer
		 * number.
		 *
		 * @param low The lower 32 bits of the state value. Must be within the range of [0, 2^32 - 1].
		 * @param high The higher 32 bits of the state value. Must be within the range of [0, 2^32 - 1].
		 */
		export function setRandomSeed(low: number, high: number): void;

		/**
		 * Gets the current state of the random number generator. This returns an opaque
		 * implementation-dependent string which is only useful for later use with
		 * RandomGenerator:setState.
		 *
		 *
		 * This is different from RandomGenerator:getSeed in that getState gets the
		 * RandomGenerator's current state, whereas getSeed gets the previously set seed
		 * number.
		 *
		 *
		 * The value of the state string does not depend on the current operating system.
		 *
		 * @param state The current state of the RandomGenerator object, represented as a string.
		 */
		export function setRandomState(state: string): void;

		/**
		 * Triangulate a simple polygon.
		 *
		 * @param polygon Polygon to triangulate. Must not intersect itself.
		 * @return {table} triangles, List of triangles the polygon is composed of, in the form of {{x1, y1, x2, y2, x3, y3}, {x1, y1, x2, y2, x3, y3}, ...}.
		 */
		export function triangulate(polygon: table): table;

		/**
		 * Triangulate a simple polygon.
		 *
		 * @param x1 The position of the first vertex of the polygon on the x-axis.
		 * @param y1 The position of the first vertex of the polygon on the y-axis.
		 * @param x2 The position of the second vertex of the polygon on the x-axis.
		 * @param y2 The position of the second vertex of the polygon on the y-axis.
		 * @param x3 The position of the third vertex of the polygon on the x-axis.
		 * @param y3 The position of the third vertex of the polygon on the y-axis.
		 * @param ... Additional vertices.
		 * @return {table} triangles, List of triangles the polygon is composed of, in the form of {{x1, y1, x2, y2, x3, y3}, {x1, y1, x2, y2, x3, y3}, ...}.
		 */
		export function triangulate(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, ...vararg: number[]): table;

	}
	/**
	 * Provides an interface to the user's mouse.
	 *
	 */
	export namespace mouse {
		/**
		 * Gets the current Cursor.
		 *
		 * @return {Cursor} cursor, The current cursor, or nil if no cursor is set.
		 */
		export function getCursor(): Cursor;

		/**
		 * Returns the current position of the mouse.
		 *
		 * @return {number} x, The position of the mouse along the x-axis.
		 * @return {number} y, The position of the mouse along the y-axis.
		 */
		/** @TupleReturn */
		export function getPosition(): [number, number];

		/**
		 * Gets whether relative mode is enabled for the mouse.
		 *
		 *
		 * If relative mode is enabled, the cursor is hidden and doesn't move when the
		 * mouse does, but relative mouse motion events are still generated via
		 * love.mousemoved. This lets the mouse move in any direction indefinitely without
		 * the cursor getting stuck at the edges of the screen.
		 *
		 *
		 * The reported position of the mouse is not updated while relative mode is
		 * enabled, even when relative mouse motion events are generated.
		 *
		 * @return {boolean} enabled, True if relative mode is enabled, false if it's disabled.
		 */
		export function getRelativeMode(): boolean;

		/**
		 * Gets a Cursor object representing a system-native hardware cursor.
		 *
		 *
		 * Hardware cursors are framerate-independent and work the same way as normal
		 * operating system cursors. Unlike drawing an image at the mouse's current
		 * coordinates, hardware cursors never have visible lag between when the mouse is
		 * moved and when the cursor position updates, even at low framerates.
		 *
		 * @param ctype The type of system cursor to get.
		 * @return {Cursor} cursor, The Cursor object representing the system cursor type.
		 */
		export function getSystemCursor(ctype: CursorType): Cursor;

		/**
		 * Returns the current x position of the mouse.
		 *
		 * @return {number} x, The position of the mouse along the x-axis.
		 */
		export function getX(): number;

		/**
		 * Returns the current y position of the mouse.
		 *
		 * @return {number} y, The position of the mouse along the y-axis.
		 */
		export function getY(): number;

		/**
		 * Gets whether cursor functionality is supported.
		 *
		 *
		 * If it isn't supported, calling love.mouse.newCursor and
		 * love.mouse.getSystemCursor will cause an error. Mobile devices do not support
		 * cursors.
		 *
		 * @return {boolean} hascursor, Whether the system has cursor functionality.
		 */
		export function hasCursor(): boolean;

		/**
		 * Gets whether cursor functionality is supported.
		 *
		 *
		 * If it isn't supported, calling love.mouse.newCursor and
		 * love.mouse.getSystemCursor will cause an error. Mobile devices do not support
		 * cursors.
		 *
		 * @return {boolean} supported, Whether the system has cursor functionality.
		 */
		export function isCursorSupported(): boolean;

		/**
		 * Checks whether a certain mouse button is down. This function does not detect
		 * mousewheel scrolling; you must use the love.wheelmoved (or love.mousepressed in
		 * version 0.9.2 and older) callback for that.
		 *
		 * @param button The index of a button to check. 1 is the primary mouse button, 2 is the secondary mouse button, etc.
		 * @param ... Additional button numbers to check.
		 * @return {boolean} down, True if the specified button is down.
		 */
		export function isDown(button: number, ...vararg: number[]): boolean;

		/**
		 * Checks if the mouse is grabbed.
		 *
		 * @return {boolean} grabbed, True if the cursor is grabbed, false if it is not.
		 */
		export function isGrabbed(): boolean;

		/**
		 * Checks if the cursor is visible.
		 *
		 * @return {boolean} visible, True if the cursor to visible, false if the cursor is hidden.
		 */
		export function isVisible(): boolean;

		/**
		 * Creates a new hardware Cursor object from an image file or ImageData.
		 *
		 *
		 * Hardware cursors are framerate-independent and work the same way as normal
		 * operating system cursors. Unlike drawing an image at the mouse's current
		 * coordinates, hardware cursors never have visible lag between when the mouse is
		 * moved and when the cursor position updates, even at low framerates.
		 *
		 *
		 * The hot spot is the point the operating system uses to determine what was
		 * clicked and at what position the mouse cursor is. For example, the normal arrow
		 * pointer normally has its hot spot at the top left of the image, but a crosshair
		 * cursor might have it in the middle.
		 *
		 * @param imageData The ImageData to use for the the new Cursor.
		 * @param hotx The x-coordinate in the ImageData of the cursor's hot spot.
		 * @param hoty The y-coordinate in the ImageData of the cursor's hot spot.
		 * @return {Cursor} cursor, The new Cursor object.
		 */
		export function newCursor(imageData: ImageData, hotx?: number, hoty?: number): Cursor;

		/**
		 * Creates a new hardware Cursor object from an image file or ImageData.
		 *
		 *
		 * Hardware cursors are framerate-independent and work the same way as normal
		 * operating system cursors. Unlike drawing an image at the mouse's current
		 * coordinates, hardware cursors never have visible lag between when the mouse is
		 * moved and when the cursor position updates, even at low framerates.
		 *
		 *
		 * The hot spot is the point the operating system uses to determine what was
		 * clicked and at what position the mouse cursor is. For example, the normal arrow
		 * pointer normally has its hot spot at the top left of the image, but a crosshair
		 * cursor might have it in the middle.
		 *
		 * @param filepath Path to the image to use for the new Cursor.
		 * @param hotx The x-coordinate in the ImageData of the cursor's hot spot.
		 * @param hoty The y-coordinate in the ImageData of the cursor's hot spot.
		 * @return {Cursor} cursor, The new Cursor object.
		 */
		export function newCursor(filepath: string, hotx?: number, hoty?: number): Cursor;

		/**
		 * Creates a new hardware Cursor object from an image file or ImageData.
		 *
		 *
		 * Hardware cursors are framerate-independent and work the same way as normal
		 * operating system cursors. Unlike drawing an image at the mouse's current
		 * coordinates, hardware cursors never have visible lag between when the mouse is
		 * moved and when the cursor position updates, even at low framerates.
		 *
		 *
		 * The hot spot is the point the operating system uses to determine what was
		 * clicked and at what position the mouse cursor is. For example, the normal arrow
		 * pointer normally has its hot spot at the top left of the image, but a crosshair
		 * cursor might have it in the middle.
		 *
		 * @param fileData Data representing the image to use for the new Cursor.
		 * @param hotx The x-coordinate in the ImageData of the cursor's hot spot.
		 * @param hoty The y-coordinate in the ImageData of the cursor's hot spot.
		 * @return {Cursor} cursor, The new Cursor object.
		 */
		export function newCursor(fileData: FileData, hotx?: number, hoty?: number): Cursor;

		/**
		 * Sets the current mouse cursor.
		 *
		 *
		 * Resets the current mouse cursor to the default when called without arguments.
		 *
		 */
		export function setCursor(): void;

		/**
		 * Sets the current mouse cursor.
		 *
		 *
		 * Resets the current mouse cursor to the default when called without arguments.
		 *
		 * @param cursor The Cursor object to use as the current mouse cursor.
		 */
		export function setCursor(cursor: Cursor): void;

		/**
		 * Grabs the mouse and confines it to the window.
		 *
		 * @param grab True to confine the mouse, false to let it leave the window.
		 */
		export function setGrabbed(grab: boolean): void;

		/**
		 * Sets the current position of the mouse. Non-integer values are floored.
		 *
		 * @param x The new position of the mouse along the x-axis.
		 * @param y The new position of the mouse along the y-axis.
		 */
		export function setPosition(x: number, y: number): void;

		/**
		 * Sets whether relative mode is enabled for the mouse.
		 *
		 *
		 * When relative mode is enabled, the cursor is hidden and doesn't move when the
		 * mouse does, but relative mouse motion events are still generated via
		 * love.mousemoved. This lets the mouse move in any direction indefinitely without
		 * the cursor getting stuck at the edges of the screen.
		 *
		 *
		 * The reported position of the mouse is not updated while relative mode is
		 * enabled, even when relative mouse motion events are generated.
		 *
		 * @param enable True to enable relative mode, false to disable it.
		 */
		export function setRelativeMode(enable: boolean): void;

		/**
		 * Sets the visibility of the cursor.
		 *
		 * @param visible True to set the cursor to visible, false to hide the cursor.
		 */
		export function setVisible(visible: boolean): void;

		/**
		 * Sets the current X position of the mouse. Non-integer values are floored.
		 *
		 * @param x The new position of the mouse along the x-axis.
		 */
		export function setX(x: number): void;

		/**
		 * Sets the current Y position of the mouse. Non-integer values are floored.
		 *
		 * @param y The new position of the mouse along the y-axis.
		 */
		export function setY(y: number): void;

	}
	/**
	 * Can simulate 2D rigid body physics in a realistic manner. This module is based
	 * on Box2D, and this API corresponds to the Box2D API as closely as possible.
	 *
	 */
	export namespace physics {
		/**
		 * Returns the two closest points between two fixtures and their distance.
		 *
		 * @param fixture1 The first fixture.
		 * @param fixture2 The second fixture.
		 * @return {number} distance, The distance of the two points.
		 * @return {number} x1, The x-coordinate of the first point.
		 * @return {number} y1, The y-coordinate of the first point.
		 * @return {number} x2, The x-coordinate of the second point.
		 * @return {number} y2, The y-coordinate of the second point.
		 */
		/** @TupleReturn */
		export function getDistance(fixture1: Fixture, fixture2: Fixture): [number, number, number, number, number];

		/**
		 * Get the scale of the world.
		 *
		 *
		 * The world scale is the number of pixels per meter. Try to keep your shape sizes
		 * less than 10 times this scale.
		 *
		 *
		 * This is important because the physics in Box2D is tuned to work well for
		 * objects of size 0.1m up to 10m. All physics coordinates are divided by this
		 * number for the physics calculations.
		 *
		 * @return {number} scale, The size of 1 meter in pixels.
		 */
		export function getMeter(): number;

		/**
		 * Creates a new body.
		 *
		 *
		 * There are three types of bodies. Static bodies do not move, have a infinite
		 * mass, and can be used for level boundaries. Dynamic bodies are the main actors
		 * in the simulation, they collide with everything. Kinematic bodies do not react
		 * to forces and only collide with dynamic bodies.
		 *
		 *
		 * The mass of the body gets calculated when a Fixture is attached or removed, but
		 * can be changed at any time with Body:setMass or Body:resetMassData.
		 *
		 * @param world The world to create the body in.
		 * @param x The x position of the body.
		 * @param y The y position of the body.
		 * @param type The type of the body.
		 * @return {Body} body, A new body.
		 */
		export function newBody(world: World, x?: number, y?: number, type?: BodyType): Body;

		/**
		 * Creates a new ChainShape.
		 *
		 * @param loop If the chain should loop back to the first point.
		 * @param x1 The x position of the first point.
		 * @param y1 The y position of the first point.
		 * @param x2 The x position of the second point.
		 * @param y2 The y position of the second point.
		 * @param ... Additional point positions.
		 * @return {ChainShape} shape, The new shape.
		 */
		export function newChainShape(loop: boolean, x1: number, y1: number, x2: number, y2: number, ...vararg: number[]): ChainShape;

		/**
		 * Creates a new ChainShape.
		 *
		 * @param loop If the chain should loop back to the first point.
		 * @param points A list of points to construct the ChainShape, in the form of {x1, y1, x2, y2, ...}.
		 * @return {ChainShape} shape, The new shape.
		 */
		export function newChainShape(loop: boolean, points: table): ChainShape;

		/**
		 * Creates a new CircleShape.
		 *
		 * @param radius The radius of the circle.
		 * @return {CircleShape} shape, The new shape.
		 */
		export function newCircleShape(radius: number): CircleShape;

		/**
		 * Creates a new CircleShape.
		 *
		 * @param x The x offset of the circle.
		 * @param y The y offset of the circle.
		 * @param radius The radius of the circle.
		 * @return {CircleShape} shape, The new shape.
		 */
		export function newCircleShape(x: number, y: number, radius: number): CircleShape;

		/**
		 * Create a distance joint between two bodies.
		 *
		 *
		 * This joint constrains the distance between two points on two bodies to be
		 * constant. These two points are specified in world coordinates and the two
		 * bodies are assumed to be in place when this joint is created. The first anchor
		 * point is connected to the first body and the second to the second body, and the
		 * points define the length of the distance joint.
		 *
		 * @param body1 The first body to attach to the joint.
		 * @param body2 The second body to attach to the joint.
		 * @param x1 The x position of the first anchor point (world space).
		 * @param y1 The y position of the first anchor point (world space).
		 * @param x2 The x position of the second anchor point (world space).
		 * @param y2 The y position of the second anchor point (world space).
		 * @param collideConnected Specifies whether the two bodies should collide with each other.
		 * @return {DistanceJoint} joint, The new distance joint.
		 */
		export function newDistanceJoint(body1: Body, body2: Body, x1: number, y1: number, x2: number, y2: number, collideConnected?: boolean): DistanceJoint;

		/**
		 * Creates a edge shape.
		 *
		 * @param x1 The x position of the first point.
		 * @param y1 The y position of the first point.
		 * @param x2 The x position of the second point.
		 * @param y2 The y position of the second point.
		 * @return {EdgeShape} shape, The new shape.
		 */
		export function newEdgeShape(x1: number, y1: number, x2: number, y2: number): EdgeShape;

		/**
		 * Creates and attaches a Fixture to a body.
		 *
		 * @param body The body which gets the fixture attached.
		 * @param shape The shape of the fixture.
		 * @param density The density of the fixture.
		 * @return {Fixture} fixture, The new fixture.
		 */
		export function newFixture(body: Body, shape: Shape, density?: number): Fixture;

		/**
		 * Create a friction joint between two bodies. A FrictionJoint applies friction to
		 * a body.
		 *
		 * @param body1 The first body to attach to the joint.
		 * @param body2 The second body to attach to the joint.
		 * @param x The x position of the anchor point.
		 * @param y The y position of the anchor point.
		 * @param collideConnected Specifies whether the two bodies should collide with eachother.
		 * @return {FrictionJoint} joint, The new FrictionJoint.
		 */
		export function newFrictionJoint(body1: Body, body2: Body, x: number, y: number, collideConnected?: boolean): FrictionJoint;

		/**
		 * Create a gear joint connecting two joints.
		 *
		 *
		 * The gear joint connects two joints that must be either prismatic or revolute
		 * joints. Using this joint requires that the joints it uses connect their
		 * respective bodies to the ground and have the ground as the first body. When
		 * destroying the bodies and joints you must make sure you destroy the gear joint
		 * before the other joints.
		 *
		 *
		 * The gear joint has a ratio the determines how the angular or distance values of
		 * the connected joints relate to each other. The formula coordinate1 + ratio *
		 * coordinate2 always has a constant value that is set when the gear joint is
		 * created.
		 *
		 * @param joint1 The first joint to connect with a gear joint.
		 * @param joint2 The second joint to connect with a gear joint.
		 * @param ratio The gear ratio.
		 * @param collideConnected Specifies whether the two bodies should collide with each other.
		 * @return {GearJoint} joint, The new gear joint.
		 */
		export function newGearJoint(joint1: Joint, joint2: Joint, ratio?: number, collideConnected?: boolean): GearJoint;

		/**
		 * Creates a joint between two bodies which controls the relative motion between
		 * them.
		 *
		 *
		 * Position and rotation offsets can be specified once the MotorJoint has been
		 * created, as well as the maximum motor force and torque that will be be applied
		 * to reach the target offsets.
		 *
		 * @param body1 The first body to attach to the joint.
		 * @param body2 The second body to attach to the joint.
		 * @param correctionFactor The joint's initial position correction factor, in the range of [0, 1].
		 * @return {MotorJoint} joint, The new MotorJoint.
		 */
		export function newMotorJoint(body1: Body, body2: Body, correctionFactor?: number): MotorJoint;

		/**
		 * Creates a joint between two bodies which controls the relative motion between
		 * them.
		 *
		 *
		 * Position and rotation offsets can be specified once the MotorJoint has been
		 * created, as well as the maximum motor force and torque that will be be applied
		 * to reach the target offsets.
		 *
		 * @param body1 The first body to attach to the joint.
		 * @param body2 The second body to attach to the joint.
		 * @param correctionFactor The joint's initial position correction factor, in the range of [0, 1].
		 * @param collideConnected Specifies whether the two bodies should collide with each other.
		 * @return {MotorJoint} joint, The new MotorJoint.
		 */
		export function newMotorJoint(body1: Body, body2: Body, correctionFactor?: number, collideConnected?: boolean): MotorJoint;

		/**
		 * Create a joint between a body and the mouse.
		 *
		 *
		 * This joint actually connects the body to a fixed point in the world. To make it
		 * follow the mouse, the fixed point must be updated every timestep (example
		 * below).
		 *
		 *
		 * The advantage of using a MouseJoint instead of just changing a body position
		 * directly is that collisions and reactions to other joints are handled by the
		 * physics engine.
		 *
		 * @param body The body to attach to the mouse.
		 * @param x The x position of the connecting point.
		 * @param y The y position of the connecting point.
		 * @return {MouseJoint} joint, The new mouse joint.
		 */
		export function newMouseJoint(body: Body, x: number, y: number): MouseJoint;

		/**
		 * Creates a new PolygonShape.
		 *
		 *
		 * This shape can have 8 vertices at most, and must form a convex shape.
		 *
		 * @param x1 The position of first point on the x-axis.
		 * @param y1 The position of first point on the y-axis.
		 * @param x2 The position of second point on the x-axis.
		 * @param y2 The position of second point on the y-axis.
		 * @param ... You can continue passing more point positions to create the PolygonShape.
		 * @return {PolygonShape} shape, A new PolygonShape.
		 */
		export function newPolygonShape(x1: number, y1: number, x2: number, y2: number, ...vararg: number[]): PolygonShape;

		/**
		 * Creates a new PolygonShape.
		 *
		 *
		 * This shape can have 8 vertices at most, and must form a convex shape.
		 *
		 * @param vertices A list of vertices to construct the polygon, in the form of {x1, y1, x2, y2, x3, y3, ...}.
		 * @return {PolygonShape} shape, A new PolygonShape.
		 */
		export function newPolygonShape(vertices: table): PolygonShape;

		/**
		 * Create a prismatic joints between two bodies.
		 *
		 *
		 * A prismatic joint constrains two bodies to move relatively to each other on a
		 * specified axis. It does not allow for relative rotation. Its definition and
		 * operation are similar to a revolute joint, but with translation and force
		 * substituted for angle and torque.
		 *
		 * @param body1 The first body to connect with a prismatic joint.
		 * @param body2 The second body to connect with a prismatic joint.
		 * @param x The x coordinate of the anchor point.
		 * @param y The y coordinate of the anchor point.
		 * @param ax The x coordinate of the axis unit vector.
		 * @param ay The y coordinate of the axis unit vector.
		 * @param collideConnected Specifies whether the two bodies should collide with each other.
		 * @return {PrismaticJoint} joint, The new prismatic joint.
		 */
		export function newPrismaticJoint(body1: Body, body2: Body, x: number, y: number, ax: number, ay: number, collideConnected?: boolean): PrismaticJoint;

		/**
		 * Create a prismatic joints between two bodies.
		 *
		 *
		 * A prismatic joint constrains two bodies to move relatively to each other on a
		 * specified axis. It does not allow for relative rotation. Its definition and
		 * operation are similar to a revolute joint, but with translation and force
		 * substituted for angle and torque.
		 *
		 * @param body1 The first body to connect with a prismatic joint.
		 * @param body2 The second body to connect with a prismatic joint.
		 * @param x1 The x coordinate of the first anchor point.
		 * @param y1 The y coordinate of the first anchor point.
		 * @param x2 The x coordinate of the second anchor point.
		 * @param y2 The y coordinate of the second anchor point.
		 * @param ax The x coordinate of the axis unit vector.
		 * @param ay The y coordinate of the axis unit vector.
		 * @param collideConnected Specifies whether the two bodies should collide with each other.
		 * @return {PrismaticJoint} joint, The new prismatic joint.
		 */
		export function newPrismaticJoint(body1: Body, body2: Body, x1: number, y1: number, x2: number, y2: number, ax: number, ay: number, collideConnected?: boolean): PrismaticJoint;

		/**
		 * Create a prismatic joints between two bodies.
		 *
		 *
		 * A prismatic joint constrains two bodies to move relatively to each other on a
		 * specified axis. It does not allow for relative rotation. Its definition and
		 * operation are similar to a revolute joint, but with translation and force
		 * substituted for angle and torque.
		 *
		 * @param body1 The first body to connect with a prismatic joint.
		 * @param body2 The second body to connect with a prismatic joint.
		 * @param x1 The x coordinate of the first anchor point.
		 * @param y1 The y coordinate of the first anchor point.
		 * @param x2 The x coordinate of the second anchor point.
		 * @param y2 The y coordinate of the second anchor point.
		 * @param ax The x coordinate of the axis unit vector.
		 * @param ay The y coordinate of the axis unit vector.
		 * @param collideConnected Specifies whether the two bodies should collide with each other.
		 * @param referenceAngle The reference angle between body1 and body2, in radians.
		 * @return {PrismaticJoint} joint, The new prismatic joint.
		 */
		export function newPrismaticJoint(body1: Body, body2: Body, x1: number, y1: number, x2: number, y2: number, ax: number, ay: number, collideConnected?: boolean, referenceAngle?: number): PrismaticJoint;

		/**
		 * Create a pulley joint to join two bodies to each other and the ground.
		 *
		 *
		 * The pulley joint simulates a pulley with an optional block and tackle. If the
		 * ratio parameter has a value different from one, then the simulated rope extends
		 * faster on one side than the other. In a pulley joint the total length of the
		 * simulated rope is the constant length1 + ratio * length2, which is set when the
		 * pulley joint is created.
		 *
		 *
		 * Pulley joints can behave unpredictably if one side is fully extended. It is
		 * recommended that the method setMaxLengths be used to constrain the maximum
		 * lengths each side can attain.
		 *
		 * @param body1 The first body to connect with a pulley joint.
		 * @param body2 The second body to connect with a pulley joint.
		 * @param gx1 The x coordinate of the first body's ground anchor.
		 * @param gy1 The y coordinate of the first body's ground anchor.
		 * @param gx2 The x coordinate of the second body's ground anchor.
		 * @param gy2 The y coordinate of the second body's ground anchor.
		 * @param x1 The x coordinate of the pulley joint anchor in the first body.
		 * @param y1 The y coordinate of the pulley joint anchor in the first body.
		 * @param x2 The x coordinate of the pulley joint anchor in the second body.
		 * @param y2 The y coordinate of the pulley joint anchor in the second body.
		 * @param ratio The joint ratio.
		 * @param collideConnected Specifies whether the two bodies should collide with each other.
		 * @return {PulleyJoint} joint, The new pulley joint.
		 */
		export function newPulleyJoint(body1: Body, body2: Body, gx1: number, gy1: number, gx2: number, gy2: number, x1: number, y1: number, x2: number, y2: number, ratio?: number, collideConnected?: boolean): PulleyJoint;

		/**
		 * Shorthand for creating rectangular PolygonShapes.
		 *
		 *
		 * By default, the local origin is located at the center of the rectangle as
		 * opposed to the top left for graphics.
		 *
		 * @param width The width of the rectangle.
		 * @param height The height of the rectangle.
		 * @return {PolygonShape} shape, A new PolygonShape.
		 */
		export function newRectangleShape(width: number, height: number): PolygonShape;

		/**
		 * Shorthand for creating rectangular PolygonShapes.
		 *
		 *
		 * By default, the local origin is located at the center of the rectangle as
		 * opposed to the top left for graphics.
		 *
		 * @param x The offset along the x-axis.
		 * @param y The offset along the y-axis.
		 * @param width The width of the rectangle.
		 * @param height The height of the rectangle.
		 * @param angle The initial angle of the rectangle.
		 * @return {PolygonShape} shape, A new PolygonShape.
		 */
		export function newRectangleShape(x: number, y: number, width: number, height: number, angle?: number): PolygonShape;

		/**
		 * Creates a pivot joint between two bodies.
		 *
		 *
		 * This joint connects two bodies to a point around which they can pivot.
		 *
		 * @param body1 The first body.
		 * @param body2 The second body.
		 * @param x The x position of the connecting point.
		 * @param y The y position of the connecting point.
		 * @param collideConnected Specifies whether the two bodies should collide with each other.
		 * @return {RevoluteJoint} joint, The new revolute joint.
		 */
		export function newRevoluteJoint(body1: Body, body2: Body, x: number, y: number, collideConnected?: boolean): RevoluteJoint;

		/**
		 * Creates a pivot joint between two bodies.
		 *
		 *
		 * This joint connects two bodies to a point around which they can pivot.
		 *
		 * @param body1 The first body.
		 * @param body2 The second body.
		 * @param x1 The x position of the first connecting point.
		 * @param y1 The y position of the first connecting point.
		 * @param x2 The x position of the second connecting point.
		 * @param y2 The y position of the second connecting point.
		 * @param collideConnected Specifies whether the two bodies should collide with each other.
		 * @param referenceAngle Specifies whether the two bodies should collide with each other.
		 * @return {RevoluteJoint} joint, The new revolute joint.
		 */
		export function newRevoluteJoint(body1: Body, body2: Body, x1: number, y1: number, x2: number, y2: number, collideConnected?: boolean, referenceAngle?: number): RevoluteJoint;

		/**
		 * Create a joint between two bodies. Its only function is enforcing a max
		 * distance between these bodies.
		 *
		 * @param body1 The first body to attach to the joint.
		 * @param body2 The second body to attach to the joint.
		 * @param x1 The x position of the first anchor point.
		 * @param y1 The y position of the first anchor point.
		 * @param x2 The x position of the second anchor point.
		 * @param y2 The y position of the second anchor point.
		 * @param maxLength The maximum distance for the bodies.
		 * @param collideConnected Specifies whether the two bodies should collide with each other.
		 * @return {RopeJoint} joint, The new RopeJoint.
		 */
		export function newRopeJoint(body1: Body, body2: Body, x1: number, y1: number, x2: number, y2: number, maxLength: number, collideConnected?: boolean): RopeJoint;

		/**
		 * Creates a constraint joint between two bodies. A WeldJoint essentially glues
		 * two bodies together. The constraint is a bit soft, however, due to Box2D's
		 * iterative solver.
		 *
		 * @param body1 The first body to attach to the joint.
		 * @param body2 The second body to attach to the joint.
		 * @param x The x position of the anchor point (world space).
		 * @param y The y position of the anchor point (world space).
		 * @param collideConnected Specifies whether the two bodies should collide with each other.
		 * @return {WeldJoint} joint, The new WeldJoint.
		 */
		export function newWeldJoint(body1: Body, body2: Body, x: number, y: number, collideConnected?: boolean): WeldJoint;

		/**
		 * Creates a constraint joint between two bodies. A WeldJoint essentially glues
		 * two bodies together. The constraint is a bit soft, however, due to Box2D's
		 * iterative solver.
		 *
		 * @param body1 The first body to attach to the joint.
		 * @param body2 The second body to attach to the joint.
		 * @param x1 The x position of the first anchor point (world space).
		 * @param y1 The y position of the first anchor point (world space).
		 * @param x2 The x position of the second anchor point (world space).
		 * @param y2 The y position of the second anchor point (world space).
		 * @param collideConnected Specifies whether the two bodies should collide with each other.
		 * @return {WeldJoint} joint, The new WeldJoint.
		 */
		export function newWeldJoint(body1: Body, body2: Body, x1: number, y1: number, x2: number, y2: number, collideConnected?: boolean): WeldJoint;

		/**
		 * Creates a constraint joint between two bodies. A WeldJoint essentially glues
		 * two bodies together. The constraint is a bit soft, however, due to Box2D's
		 * iterative solver.
		 *
		 * @param body1 The first body to attach to the joint.
		 * @param body2 The second body to attach to the joint.
		 * @param x1 The x position of the first anchor point (world space).
		 * @param y1 The y position of the first anchor point (world space).
		 * @param x2 The x position of the second anchor point (world space).
		 * @param y2 The y position of the second anchor point (world space).
		 * @param collideConnected Specifies whether the two bodies should collide with each other.
		 * @param referenceAngle The reference angle between body1 and body2, in radians.
		 * @return {WeldJoint} joint, The new WeldJoint.
		 */
		export function newWeldJoint(body1: Body, body2: Body, x1: number, y1: number, x2: number, y2: number, collideConnected?: boolean, referenceAngle?: number): WeldJoint;

		/**
		 * Creates a wheel joint.
		 *
		 * @param body1 The first body.
		 * @param body2 The second body.
		 * @param x The x position of the anchor point.
		 * @param y The y position of the anchor point.
		 * @param ax The x position of the axis unit vector.
		 * @param ay The y position of the axis unit vector.
		 * @param collideConnected Specifies whether the two bodies should collide with each other.
		 * @return {WheelJoint} joint, The new WheelJoint.
		 */
		export function newWheelJoint(body1: Body, body2: Body, x: number, y: number, ax: number, ay: number, collideConnected?: boolean): WheelJoint;

		/**
		 * Creates a new World.
		 *
		 * @param xg The x component of gravity.
		 * @param yg The y component of gravity.
		 * @param sleep Whether the bodies in this world are allowed to sleep.
		 * @return {World} world, A brave new World.
		 */
		export function newWorld(xg?: number, yg?: number, sleep?: boolean): World;

		/**
		 * Sets the pixels to meter scale factor.
		 *
		 *
		 * All coordinates in the physics module are divided by this number and converted
		 * to meters, and it creates a convenient way to draw the objects directly to the
		 * screen without the need for graphics transformations.
		 *
		 *
		 * It is recommended to create shapes no larger than 10 times the scale. This is
		 * important because Box2D is tuned to work well with shape sizes from 0.1 to 10
		 * meters. The default meter scale is 30.
		 *
		 *
		 * love.physics.setMeter does not apply retroactively to created objects. Created
		 * objects retain their meter coordinates but the scale factor will affect their
		 * pixel coordinates.
		 *
		 * @param scale The scale factor as an integer.
		 */
		export function setMeter(scale: number): void;

	}
	/**
	 * This module is responsible for decoding sound files. It can't play the sounds,
	 * see love.audio for that.
	 *
	 */
	export namespace sound {
		/**
		 * Attempts to find a decoder for the encoded sound data in the specified file.
		 *
		 * @param file The file with encoded sound data.
		 * @param buffer The size of each decoded chunk, in bytes.
		 * @return {Decoder} decoder, A new Decoder object.
		 */
		export function newDecoder(file: File, buffer?: number): Decoder;

		/**
		 * Attempts to find a decoder for the encoded sound data in the specified file.
		 *
		 * @param filename The filename of the file with encoded sound data.
		 * @param buffer The size of each decoded chunk, in bytes.
		 * @return {Decoder} decoder, A new Decoder object.
		 */
		export function newDecoder(filename: string, buffer?: number): Decoder;

		/**
		 * Creates new SoundData from a file. It's also possible to create SoundData with
		 * a custom sample rate, channel and bit depth.
		 *
		 *
		 * The sound data will be decoded to the memory in a raw format. It is recommended
		 * to create only short sounds like effects, as a 3 minute song uses 30 MB of
		 * memory this way.
		 *
		 * @param filename The filename of the file to load.
		 * @return {SoundData} soundData, A new SoundData object.
		 */
		export function newSoundData(filename: string): SoundData;

		/**
		 * Creates new SoundData from a file. It's also possible to create SoundData with
		 * a custom sample rate, channel and bit depth.
		 *
		 *
		 * The sound data will be decoded to the memory in a raw format. It is recommended
		 * to create only short sounds like effects, as a 3 minute song uses 30 MB of
		 * memory this way.
		 *
		 * @param file A File pointing to an audio file.
		 * @return {SoundData} soundData, A new SoundData object.
		 */
		export function newSoundData(file: File): SoundData;

		/**
		 * Creates new SoundData from a file. It's also possible to create SoundData with
		 * a custom sample rate, channel and bit depth.
		 *
		 *
		 * The sound data will be decoded to the memory in a raw format. It is recommended
		 * to create only short sounds like effects, as a 3 minute song uses 30 MB of
		 * memory this way.
		 *
		 * @param data The encoded data to decode into audio.
		 * @return {SoundData} soundData, A new SoundData object.
		 */
		export function newSoundData(data: Data): SoundData;

		/**
		 * Creates new SoundData from a file. It's also possible to create SoundData with
		 * a custom sample rate, channel and bit depth.
		 *
		 *
		 * The sound data will be decoded to the memory in a raw format. It is recommended
		 * to create only short sounds like effects, as a 3 minute song uses 30 MB of
		 * memory this way.
		 *
		 * @param samples Total number of samples.
		 * @param rate Number of samples per second
		 * @param bits Bits per sample (8 or 16).
		 * @param channels Either 1 for mono or 2 for stereo.
		 * @return {SoundData} soundData, A new SoundData object.
		 */
		export function newSoundData(samples: number, rate?: number, bits?: number, channels?: number): SoundData;

	}
	/**
	 * Provides access to information about the user's system.
	 *
	 */
	export namespace system {
		/**
		 * Gets text from the clipboard.
		 *
		 * @return {string} text, The text currently held in the system's clipboard.
		 */
		export function getClipboardText(): string;

		/**
		 * Gets the current operating system. In general, LÖVE abstracts away the need to
		 * know the current operating system, but there are a few cases where it can be
		 * useful (especially in combination with os.execute.)
		 *
		 * @return {string} osString, The current operating system. "OS X", "Windows", "Linux", "Android" or "iOS".
		 */
		export function getOS(): string;

		/**
		 * Gets information about the system's power supply.
		 *
		 * @return {PowerState} state, The basic state of the power supply.
		 * @return {number} percent, Percentage of battery life left, between 0 and 100. nil if the value can't be determined or there's no battery.
		 * @return {number} seconds, Seconds of battery life left. nil if the value can't be determined or there's no battery.
		 */
		/** @TupleReturn */
		export function getPowerInfo(): [PowerState, number, number];

		/**
		 * Gets the amount of logical processor in the system.
		 *
		 * @return {number} processorCount, Amount of logical processors.
		 */
		export function getProcessorCount(): number;

		/**
		 * Opens a URL with the user's web or file browser.
		 *
		 * @param url The URL to open. Must be formatted as a proper URL.

To open a file or folder, "file://" must be prepended to the path.
		 * @return {boolean} success, Whether the URL was opened successfully.
		 */
		export function openURL(url: string): boolean;

		/**
		 * Puts text in the clipboard.
		 *
		 * @param text The new text to hold in the system's clipboard.
		 */
		export function setClipboardText(text: string): void;

		/**
		 * Causes the device to vibrate, if possible. Currently this will only work on
		 * Android and iOS devices that have a built-in vibration motor.
		 *
		 * @param seconds The duration to vibrate for. If called on an iOS device, it will always vibrate for 0.5 seconds due to limitations in the iOS system APIs.
		 */
		export function vibrate(seconds?: number): void;

	}
	/**
	 * Allows you to work with threads.
	 *
	 *
	 * Threads are separate Lua environments, running in parallel to the main code. As
	 * their code runs separately, they can be used to compute complex operations
	 * without adversely affecting the frame rate of the main thread. However, as they
	 * are separate environments, they cannot access the variables and functions of
	 * the main thread, and communication between threads is limited.
	 *
	 *
	 * All LOVE objects (userdata) are shared among threads so you'll only have to
	 * send their references across threads. You may run into concurrency issues if
	 * you manipulate an object on multiple threads at the same time.
	 *
	 *
	 * When a Thread is started, it only loads the love.thread module. Every other
	 * module has to be loaded with require.
	 *
	 */
	export namespace thread {
		/**
		 * Creates or retrieves a named thread channel.
		 *
		 * @param name The name of the channel you want to create or retrieve.
		 * @return {Channel} channel, A named channel object which can be further manipulated.
		 */
		export function getChannel(name: string): Channel;

		/**
		 * Create a new unnamed thread channel.
		 *
		 *
		 * One use for them is to pass new unnamed channels to other threads via
		 * Channel:push
		 *
		 * @return {Channel} channel, A unnamed channel object which can be further manipulated.
		 */
		export function newChannel(): Channel;

		/**
		 * Creates a new Thread from a File or Data object.
		 *
		 * @param filename The name of the Lua File to use as source.
		 * @return {Thread} thread, A new Thread that has yet to be started.
		 */
		export function newThread(filename: string): Thread;

		/**
		 * Creates a new Thread from a File or Data object.
		 *
		 * @param fileData The FileData containing the Lua code to use as the source.
		 * @return {Thread} thread, A new Thread that has yet to be started.
		 */
		export function newThread(fileData: FileData): Thread;

		/**
		 * Creates a new Thread from a File or Data object.
		 *
		 * @param codestring A string containing the Lua code to use as the source. It needs to either be at least 1024 characters long, or contain at least one newline.
		 * @return {Thread} thread, A new Thread that has yet to be started.
		 */
		export function newThread(codestring: string): Thread;

	}
	/**
	 * Provides an interface to the user's clock.
	 *
	 */
	export namespace timer {
		/**
		 * Returns the average delta time (seconds per frame) over the last second.
		 *
		 * @return {number} delta, The average delta time over the last second.
		 */
		export function getAverageDelta(): number;

		/**
		 * Returns the time between the last two frames.
		 *
		 * @return {number} dt, The time passed (in seconds).
		 */
		export function getDelta(): number;

		/**
		 * Returns the current frames per second.
		 *
		 * @return {number} fps, The current FPS.
		 */
		export function getFPS(): number;

		/**
		 * Returns the value of a timer with an unspecified starting time. This function
		 * should only be used to calculate differences between points in time, as the
		 * starting time of the timer is any.
		 *
		 * @return {number} time, The time in seconds.
		 */
		export function getTime(): number;

		/**
		 * Sleeps the program for the specified amount of time.
		 *
		 * @param s Seconds to sleep for.
		 */
		export function sleep(s: number): void;

		/**
		 * Measures the time between two frames. Calling this changes the return value of
		 * love.timer.getDelta.
		 *
		 */
		export function step(): void;

		/**
		 * Measures the time between two frames. Calling this changes the return value of
		 * love.timer.getDelta.
		 *
		 * @return {number} dt, The time passed (in seconds).
		 */
		export function step(): number;

	}
	/**
	 * Provides an interface to touch-screen presses.
	 *
	 */
	export namespace touch {
		/**
		 * Gets the current position of the specified touch-press, in pixels.
		 *
		 * @param id The identifier of the touch-press. Use love.touch.getTouches, love.touchpressed, or love.touchmoved to obtain touch id values.
		 * @return {number} x, The position along the x-axis of the touch-press inside the window, in pixels.
		 * @return {number} y, The position along the y-axis of the touch-press inside the window, in pixels.
		 */
		/** @TupleReturn */
		export function getPosition(id: LightUserData): [number, number];

		/**
		 * Gets the current pressure of the specified touch-press.
		 *
		 * @param id The identifier of the touch-press. Use love.touch.getTouches, love.touchpressed, or love.touchmoved to obtain touch id values.
		 * @return {number} pressure, The pressure of the touch-press. Most touch screens aren't pressure sensitive, in which case the pressure will be 1.
		 */
		export function getPressure(id: LightUserData): number;

		/**
		 * Gets a list of all active touch-presses.
		 *
		 * @return {table} touches, A list of active touch-press id values, which can be used with love.touch.getPosition.
		 */
		export function getTouches(): table;

	}
	/**
	 * This module is responsible for decoding, controlling, and streaming video
	 * files.
	 *
	 *
	 * It can't draw the videos, see love.graphics.newVideo and Video objects for
	 * that.
	 *
	 */
	export namespace video {
		/**
		 * Creates a new VideoStream. Currently only Ogg Theora video files are supported.
		 * VideoStreams can't draw videos, see love.graphics.newVideo for that.
		 *
		 * @param filename The file path to the Ogg Theora video file.
		 * @return {VideoStream} videostream, A new VideoStream.
		 */
		export function newVideoStream(filename: string): VideoStream;

		/**
		 * Creates a new VideoStream. Currently only Ogg Theora video files are supported.
		 * VideoStreams can't draw videos, see love.graphics.newVideo for that.
		 *
		 * @param file The File object containing the Ogg Theora video.
		 * @return {VideoStream} videostream, A new VideoStream.
		 */
		export function newVideoStream(file: File): VideoStream;

	}
	/**
	 * Provides an interface for modifying and retrieving information about the
	 * program's window.
	 *
	 */
	export namespace window {
		/**
		 * Closes the window. It can be reopened with love.window.setMode.
		 *
		 */
		export function close(): void;

		/**
		 * Converts a number from pixels to density-independent units.
		 *
		 *
		 * The pixel density inside the window might be greater (or smaller) than the
		 * "size" of the window. For example on a retina screen in Mac OS X with the
		 * highdpi window flag enabled, the window may take up the same physical size as
		 * an 800x600 window, but the area inside the window uses 1600x1200 pixels.
		 * love.window.fromPixels(1600) would return 800 in that case.
		 *
		 *
		 * This function converts coordinates from pixels to the size users are expecting
		 * them to display at onscreen. love.window.toPixels does the opposite. The
		 * highdpi window flag must be enabled to use the full pixel density of a Retina
		 * screen on Mac OS X and iOS. The flag currently does nothing on Windows and
		 * Linux, and on Android it is effectively always enabled.
		 *
		 *
		 * Most LÖVE functions return values and expect arguments in terms of pixels
		 * rather than density-independent units.
		 *
		 * @param pixelvalue A number in pixels to convert to density-independent units.
		 * @return {number} value, The converted number, in density-independent units.
		 */
		export function fromPixels(pixelvalue: number): number;

		/**
		 * Converts a number from pixels to density-independent units.
		 *
		 *
		 * The pixel density inside the window might be greater (or smaller) than the
		 * "size" of the window. For example on a retina screen in Mac OS X with the
		 * highdpi window flag enabled, the window may take up the same physical size as
		 * an 800x600 window, but the area inside the window uses 1600x1200 pixels.
		 * love.window.fromPixels(1600) would return 800 in that case.
		 *
		 *
		 * This function converts coordinates from pixels to the size users are expecting
		 * them to display at onscreen. love.window.toPixels does the opposite. The
		 * highdpi window flag must be enabled to use the full pixel density of a Retina
		 * screen on Mac OS X and iOS. The flag currently does nothing on Windows and
		 * Linux, and on Android it is effectively always enabled.
		 *
		 *
		 * Most LÖVE functions return values and expect arguments in terms of pixels
		 * rather than density-independent units.
		 *
		 * @param px The x-axis value of a coordinate in pixels.
		 * @param py The y-axis value of a coordinate in pixels.
		 * @return {number} x, The converted x-axis value of the coordinate, in density-independent units.
		 * @return {number} y, The converted y-axis value of the coordinate, in density-independent units.
		 */
		/** @TupleReturn */
		export function fromPixels(px: number, py: number): [number, number];

		/**
		 * Gets the name of a display.
		 *
		 * @param displayindex The index of the display to get the name of.
		 * @return {string} name, The name of the specified display.
		 */
		export function getDisplayName(displayindex: number): string;

		/**
		 * Gets the DPI scale factor associated with the window.
		 *
		 *
		 * The pixel density inside the window might be greater (or smaller) than the
		 * "size" of the window. For example on a retina screen in Mac OS X with the
		 * highdpi window flag enabled, the window may take up the same physical size as
		 * an 800x600 window, but the area inside the window uses 1600x1200 pixels.
		 * love.window.getDPIScale() would return 2.0 in that case.
		 *
		 *
		 * The love.window.fromPixels and love.window.toPixels functions can also be used
		 * to convert between units.
		 *
		 *
		 * The highdpi window flag must be enabled to use the full pixel density of a
		 * Retina screen on Mac OS X and iOS. The flag currently does nothing on Windows
		 * and Linux, and on Android it is effectively always enabled.
		 *
		 * @return {number} scale, The pixel scale factor associated with the window.
		 */
		export function getDPIScale(): number;

		/**
		 * Gets whether the window is fullscreen.
		 *
		 * @return {boolean} fullscreen, True if the window is fullscreen, false otherwise.
		 * @return {FullscreenType} fstype, The type of fullscreen mode used.
		 */
		/** @TupleReturn */
		export function getFullscreen(): [boolean, FullscreenType];

		/**
		 * Gets a list of supported fullscreen modes.
		 *
		 * @param display The index of the display, if multiple monitors are available.
		 * @return {table} modes, A table of width/height pairs. (Note that this may not be in order.)
		 */
		export function getFullscreenModes(display?: number): table;

		/**
		 * Gets the window icon.
		 *
		 * @return {ImageData} imagedata, The window icon imagedata, or nil of no icon has been set with love.window.setIcon.
		 */
		export function getIcon(): ImageData;

		/**
		 * Returns the current display mode.
		 *
		 * @return {number} width, Window width.
		 * @return {number} height, Window height.
		 * @return {table} flags, Table containing the window properties.
		 */
		/** @TupleReturn */
		export function getMode(): [number, number, table];

		/**
		 * Gets the DPI scale factor associated with the window.
		 *
		 *
		 * The pixel density inside the window might be greater (or smaller) than the
		 * "size" of the window. For example on a retina screen in Mac OS X with the
		 * highdpi window flag enabled, the window may take up the same physical size as
		 * an 800x600 window, but the area inside the window uses 1600x1200 pixels.
		 * love.window.getPixelScale() would return 2.0 in that case.
		 *
		 *
		 * The love.window.fromPixels and love.window.toPixels functions can also be used
		 * to convert between units.
		 *
		 *
		 * The highdpi window flag must be enabled to use the full pixel density of a
		 * Retina screen on Mac OS X and iOS. The flag currently does nothing on Windows
		 * and Linux, and on Android it is effectively always enabled.
		 *
		 * @return {number} scale, The pixel scale factor associated with the window.
		 */
		export function getPixelScale(): number;

		/**
		 * Gets the position of the window on the screen.
		 *
		 *
		 * The window position is in the coordinate space of the display it is currently
		 * in.
		 *
		 * @return {number} x, The x-coordinate of the window's position.
		 * @return {number} y, The y-coordinate of the window's position.
		 * @return {number} display, The index of the display that the window is in.
		 */
		/** @TupleReturn */
		export function getPosition(): [number, number, number];

		/**
		 * Gets the window title.
		 *
		 * @return {string} title, The current window title.
		 */
		export function getTitle(): string;

		/**
		 * Checks if the game window has keyboard focus.
		 *
		 * @return {boolean} focus, True if the window has the focus or false if not.
		 */
		export function hasFocus(): boolean;

		/**
		 * Checks if the game window has mouse focus.
		 *
		 * @return {boolean} focus, True if the window has mouse focus or false if not.
		 */
		export function hasMouseFocus(): boolean;

		/**
		 * Gets whether the display is allowed to sleep while the program is running.
		 *
		 *
		 * Display sleep is disabled by default. Some types of input (e.g. joystick button
		 * presses) might not prevent the display from sleeping, if display sleep is
		 * allowed.
		 *
		 * @return {boolean} enabled, True if system display sleep is enabled / allowed, false otherwise.
		 */
		export function isDisplaySleepEnabled(): boolean;

		/**
		 * Gets whether the Window is currently maximized.
		 *
		 *
		 * The window can be maximized if it is not fullscreen and is resizable, and
		 * either the user has pressed the window's Maximize button or
		 * love.window.maximize has been called.
		 *
		 * @return {boolean} maximized, True if the window is currently maximized in windowed mode, false otherwise.
		 */
		export function isMaximized(): boolean;

		/**
		 * Gets whether the Window is currently minimized.
		 *
		 * @return {boolean} maximized, True if the window is currently minimized, false otherwise.
		 */
		export function isMinimized(): boolean;

		/**
		 * Checks if the window is open.
		 *
		 * @return {boolean} open, True if the window is open, false otherwise.
		 */
		export function isOpen(): boolean;

		/**
		 * Checks if the game window is visible.
		 *
		 *
		 * The window is considered visible if it's not minimized and the program isn't
		 * hidden.
		 *
		 * @return {boolean} visible, True if the window is visible or false if not.
		 */
		export function isVisible(): boolean;

		/**
		 * Makes the window as large as possible.
		 *
		 *
		 * This function has no effect if the window isn't resizable, since it essentially
		 * programmatically presses the window's "maximize" button.
		 *
		 */
		export function maximize(): void;

		/**
		 * Minimizes the window to the system's task bar / dock.
		 *
		 */
		export function minimize(): void;

		/**
		 * Restores the size and position of the window if it was minimized or maximized.
		 *
		 */
		export function restore(): void;

		/**
		 * Causes the window to request the attention of the user if it is not in the
		 * foreground.
		 *
		 *
		 * In Windows the taskbar icon will flash, and in OS X the dock icon will bounce.
		 *
		 * @param continuous Whether to continuously request attention until the window becomes active, or to do it only once.
		 */
		export function requestAttention(continuous?: boolean): void;

		/**
		 * Sets whether the display is allowed to sleep while the program is running.
		 *
		 *
		 * Display sleep is disabled by default. Some types of input (e.g. joystick button
		 * presses) might not prevent the display from sleeping, if display sleep is
		 * allowed.
		 *
		 * @param enable True to enable system display sleep, false to disable it.
		 */
		export function setDisplaySleepEnabled(enable: boolean): void;

		/**
		 * Enters or exits fullscreen. The display to use when entering fullscreen is
		 * chosen based on which display the window is currently in, if multiple monitors
		 * are connected.
		 *
		 *
		 * If fullscreen mode is entered and the window size doesn't match one of the
		 * monitor's display modes (in normal fullscreen mode) or the window size doesn't
		 * match the desktop size (in 'desktop' fullscreen mode), the window will be
		 * resized appropriately. The window will revert back to its original size again
		 * when fullscreen mode is exited using this function.
		 *
		 * @param fullscreen Whether to enter or exit fullscreen mode.
		 * @return {boolean} success, True if successful, false otherwise.
		 */
		export function setFullscreen(fullscreen: boolean): boolean;

		/**
		 * Enters or exits fullscreen. The display to use when entering fullscreen is
		 * chosen based on which display the window is currently in, if multiple monitors
		 * are connected.
		 *
		 *
		 * If fullscreen mode is entered and the window size doesn't match one of the
		 * monitor's display modes (in normal fullscreen mode) or the window size doesn't
		 * match the desktop size (in 'desktop' fullscreen mode), the window will be
		 * resized appropriately. The window will revert back to its original size again
		 * when fullscreen mode is exited using this function.
		 *
		 * @param fullscreen Whether to enter or exit fullscreen mode.
		 * @param fstype The type of fullscreen mode to use.
		 * @return {boolean} success, True if successful, false otherwise.
		 */
		export function setFullscreen(fullscreen: boolean, fstype: FullscreenType): boolean;

		/**
		 * Sets the window icon until the game is quit. Not all operating systems support
		 * very large icon images.
		 *
		 * @param imagedata The window icon image.
		 * @return {boolean} success, Whether the icon has been set successfully.
		 */
		export function setIcon(imagedata: ImageData): boolean;

		/**
		 * Sets the display mode and properties of the window.
		 *
		 *
		 * If width or height is 0, setMode will use the width and height of the desktop.
		 *
		 *
		 * Changing the display mode may have side effects: for example, canvases will be
		 * cleared and values sent to shaders with Shader:send will be erased. Make sure
		 * to save the contents of canvases beforehand or re-draw to them afterward if you
		 * need to.
		 *
		 * @param width Display width.
		 * @param height Display height.
		 * @param flags The flags table with the options:
		 * @return {boolean} success, True if successful, false otherwise.
		 */
		export function setMode(width: number, height: number, flags: table): boolean;

		/**
		 * Sets the position of the window on the screen.
		 *
		 *
		 * The window position is in the coordinate space of the specified display.
		 *
		 * @param x The x-coordinate of the window's position.
		 * @param y The y-coordinate of the window's position.
		 * @param display The index of the display that the new window position is relative to.
		 */
		export function setPosition(x: number, y: number, display: number): void;

		/**
		 * Sets the window title.
		 *
		 * @param title The new window title.
		 */
		export function setTitle(title: string): void;

		/**
		 * Displays a message box dialog above the love window. The message box contains a
		 * title, optional text, and buttons.
		 *
		 * @param title The title of the message box.
		 * @param message The text inside the message box.
		 * @param type The type of the message box.
		 * @param attachtowindow Whether the message box should be attached to the love window or free-floating.
		 * @return {boolean} success, Whether the message box was successfully displayed.
		 */
		export function showMessageBox(title: string, message: string, type?: MessageBoxType, attachtowindow?: boolean): boolean;

		/**
		 * Displays a message box dialog above the love window. The message box contains a
		 * title, optional text, and buttons.
		 *
		 * @param title The title of the message box.
		 * @param message The text inside the message box.
		 * @param buttonlist A table containing a list of button names to show. The table can also contain the fields enterbutton and escapebutton, which should be the index of the default button to use when the user presses 'enter' or 'escape', respectively.
		 * @param type The type of the message box.
		 * @param attachtowindow Whether the message box should be attached to the love window or free-floating.
		 * @return {number} pressedbutton, The index of the button pressed by the user. May be 0 if the message box dialog was closed without pressing a button.
		 */
		export function showMessageBox(title: string, message: string, buttonlist: table, type?: MessageBoxType, attachtowindow?: boolean): number;

		/**
		 * Converts a number from density-independent units to pixels.
		 *
		 *
		 * The pixel density inside the window might be greater (or smaller) than the
		 * "size" of the window. For example on a retina screen in Mac OS X with the
		 * highdpi window flag enabled, the window may take up the same physical size as
		 * an 800x600 window, but the area inside the window uses 1600x1200 pixels.
		 * love.window.toPixels(800) would return 1600 in that case.
		 *
		 *
		 * This is used to convert coordinates from the size users are expecting them to
		 * display at onscreen to pixels. love.window.fromPixels does the opposite. The
		 * highdpi window flag must be enabled to use the full pixel density of a Retina
		 * screen on Mac OS X and iOS. The flag currently does nothing on Windows and
		 * Linux, and on Android it is effectively always enabled.
		 *
		 *
		 * Most LÖVE functions return values and expect arguments in terms of pixels
		 * rather than density-independent units.
		 *
		 * @param value A number in density-independent units to convert to pixels.
		 * @return {number} pixelvalue, The converted number, in pixels.
		 */
		export function toPixels(value: number): number;

		/**
		 * Converts a number from density-independent units to pixels.
		 *
		 *
		 * The pixel density inside the window might be greater (or smaller) than the
		 * "size" of the window. For example on a retina screen in Mac OS X with the
		 * highdpi window flag enabled, the window may take up the same physical size as
		 * an 800x600 window, but the area inside the window uses 1600x1200 pixels.
		 * love.window.toPixels(800) would return 1600 in that case.
		 *
		 *
		 * This is used to convert coordinates from the size users are expecting them to
		 * display at onscreen to pixels. love.window.fromPixels does the opposite. The
		 * highdpi window flag must be enabled to use the full pixel density of a Retina
		 * screen on Mac OS X and iOS. The flag currently does nothing on Windows and
		 * Linux, and on Android it is effectively always enabled.
		 *
		 *
		 * Most LÖVE functions return values and expect arguments in terms of pixels
		 * rather than density-independent units.
		 *
		 * @param x The x-axis value of a coordinate in density-independent units to convert to pixels.
		 * @param y The y-axis value of a coordinate in density-independent units to convert to pixels.
		 * @return {number} px, The converted x-axis value of the coordinate, in pixels.
		 * @return {number} py, The converted y-axis value of the coordinate, in pixels.
		 */
		/** @TupleReturn */
		export function toPixels(x: number, y: number): [number, number];

		/**
		 * Sets the display mode and properties of the window, without modifying
		 * unspecified properties.
		 *
		 *
		 * If width or height is 0, updateMode will use the width and height of the
		 * desktop.
		 *
		 *
		 * Changing the display mode may have side effects: for example, canvases will be
		 * cleared. Make sure to save the contents of canvases beforehand or re-draw to
		 * them afterward if you need to.
		 *
		 * @param width Window width.
		 * @param height Window height.
		 * @param settings The settings table with the following optional fields. Any field not filled in will use the current value that would be returned by love.window.getMode.
		 * @return {boolean} success, True if successful, false otherwise.
		 */
		export function updateMode(width: number, height: number, settings: table): boolean;

	}
}
