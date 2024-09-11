/**
 * Provides an interface to the user's filesystem.
 *
 * @noResolution
 * @noSelf
 * @link [love.filesystem](https://love2d.org/wiki/love.filesystem)
 */
declare module "love.filesystem" {
  import { Data } from "love.data";

  /**
   * Append data to a file.
   *
   * @param name The name (and path) of the file.
   * @param string The string data to append to the file.
   * @param bytes How many bytes to write. (all bytes by default)
   * @returns success, true on success.
   * @returns errormsg, The error message, or _nil/undefined_ on error.
   * @link [love.filesystem.append](https://love2d.org/wiki/love.filesystem.append)
   * @since 0.9.0
   */
  function append(
    name: string,
    string: string,
    bytes?: number,
  ): LuaMultiReturn<[success: true] | [success: false, errormsg: string]>;

  /**
   * Append data to a file.
   *
   * @param name The name (and path) of the file.
   * @param data The string data to append to the file.
   * @param bytes How many bytes to write. (all bytes by default)
   * @returns success, true on success.
   * @returns errormsg, The error message, or _nil/undefined_ on error.
   * @link [love.filesystem.append](https://love2d.org/wiki/love.filesystem.append)
   * @since 0.9.0
   */
  function append(
    name: string,
    data: Data,
    bytes: number,
  ): LuaMultiReturn<[success: true] | [success: false, errormsg: string]>;

  /**
   * Returns whether love.filesystem follows symbolic links.
   *
   * @link [love.filesystem.areSymlinksEnabled](https://love2d.org/wiki/love.filesystem.areSymlinksEnabled)
   * @since 0.9.2
   */
  function areSymlinksEnabled(): boolean;

  /**
   * Creates a directory.
   *
   * Does nothing but return true if that directory already exists.
   *
   * @param name The new directory's name.
   * @returns true if that directory exists.
   * @link [love.filesystem.createDirectory](https://love2d.org/wiki/love.filesystem.createDirectory)
   * @since 0.9.0
   */
  function createDirectory(name: string): boolean;

  /**
   * Returns an absolute path to the application data directory.
   *
   * @link [love.filesystem.getAppdataDirectory](https://love2d.org/wiki/love.filesystem.getAppdataDirectory)
   */
  function getAppdataDirectory(): string;

  /**
   * Returns a path string used for importing C libraries.
   *
   * @link [love.filesystem.getCRequirePath](https://love2d.org/wiki/love.filesystem.getCRequirePath)
   * @since 11.0
   */
  function getCRequirePath(): string;

  /**
   * Returns an unsorted array of item names within a specified directory.
   *
   * If the path passed to the function exists in the game and the save directory,
   * it will list the files and directories from both places.
   *
   * @param dir A path to a filesystem.
   * @returns The names of all items in the specified directory.
   * @link [love.filesystem.getDirectoryItems](https://love2d.org/wiki/love.filesystem.getDirectoryItems)
   * @since 0.9.0
   */
  function getDirectoryItems(dir: string): string[];

  /**
   * Returns the write directory name for your game.
   *
   * Not the full location of that directory.
   *
   * @returns The write directory name for your game.
   * @link [love.filesystem.getIdentity](https://love2d.org/wiki/love.filesystem.getIdentity)
   * @since 0.9.0
   */
  function getIdentity(): string;

  type FileInfo<T extends FileType = FileType> = {
    /**
     * The {@link FileType} of the object at the path.
     */
    type: T;

    /**
     * The size in bytes of the file.
     */
    size?: number;

    /**
     * The file's last modification time in seconds since the unix epoch.
     */
    modtime?: number;
  };

  /**
   * Returns {@link FileInfo} for something on the filesystem.
   *
   * @param path A filesystem path.
   * @param filetype Used to filter only items matching this {@link FileType}.
   * @returns _nil/undefined_ if nothing exists at the specified path.
   * @link [love.filesystem.getInfo](https://love2d.org/wiki/love.filesystem.getInfo)
   * @since 11.0
   */
  function getInfo<T extends FileType>(
    path: string,
    filetype?: T,
  ): FileInfo<T> | undefined;

  /**
   * Returns {@link FileInfo} for something on the filesystem.
   *
   * Avoids creating a new object by mutating an existing one.
   *
   * @param path A filesystem path.
   * @param info An object to mutate.
   * @returns The mutated object or _nil/undefined_.
   * @link [love.filesystem.getInfo](https://love2d.org/wiki/love.filesystem.getInfo)
   * @since 11.0
   */
  function getInfo(path: string, info?: object): FileInfo | undefined;

  /**
   * Returns {@link FileInfo} for something on the filesystem.
   *
   * Avoids creating a new object by mutating an existing one.
   *
   * @param path A filesystem path.
   * @param filetype Used to filter only items matching this {@link FileType}.
   * @param info The mutated object or _nil/undefined_.
   * @link [love.filesystem.getInfo](https://love2d.org/wiki/love.filesystem.getInfo)
   * @since 11.0
   */
  function getInfo<T extends FileType>(
    path: string,
    filetype: T,
    info: object,
  ): FileInfo<T> | undefined;

  /**
   * Returns an absolute path to a path's directory.
   *
   * @param filepath A relative file path.
   * @returns The platform-specific full path of the directory containing the filepath.
   * @link [love.filesystem.getRealDirectory](https://love2d.org/wiki/love.filesystem.getRealDirectory)
   * @since 0.9.2
   */
  function getRealDirectory(filepath: string): string;

  /**
   * Returns a path string used for importing lua files.
   *
   * @link [love.filesystem.getRequirePath](https://love2d.org/wiki/love.filesystem.getRequirePath)
   * @since 0.10.0
   */
  function getRequirePath(): string;

  /**
   * Returns a full path to the designated save directory.
   *
   * @link [love.filesystem.getSaveDirectory](https://love2d.org/wiki/love.filesystem.getSaveDirectory)
   * @since 0.5.0
   */
  function getSaveDirectory(): string;

  /**
   * Returns the full path to the the .love file or directory.
   *
   * If the game is fused to the LÖVE executable, then the executable is
   * returned.
   *
   * @link [love.filesystem.getSource](https://love2d.org/wiki/love.filesystem.getSource)
   * @since 0.9.0
   */
  function getSource(): string;

  /**
   * Like {@link "love.filesystem".getSource} but returns the parent directory.
   *
   * @link [love.filesystem.getSourceBaseDirectory](https://love2d.org/wiki/love.filesystem.getSourceBaseDirectory)
   * @since 0.9.0
   */
  function getSourceBaseDirectory(): string;

  /**
   * Returns an absolute path to the user's directory.
   *
   * @link [love.filesystem.getUserDirectory](https://love2d.org/wiki/love.filesystem.getUserDirectory)
   */
  function getUserDirectory(): string;

  /**
   * Returns the current working directory.
   *
   * @link [love.filesystem.getWorkingDirectory](https://love2d.org/wiki/love.filesystem.getWorkingDirectory)
   * @since 0.5.0
   */
  function getWorkingDirectory(): string;

  /**
   * Initializes love.filesystem, will be called internally, so should not be used
   * explicitly.
   *
   * @param appname The name of the application binary, typically love.
   * @link [love.filesystem.init](https://love2d.org/wiki/love.filesystem.init)
   */
  function init(appname: string): void;

  /**
   * Returns whether the game is in fused mode or not.
   *
   * @link [love.filesystem.isFused](https://love2d.org/wiki/love.filesystem.isFused)
   * @since 0.9.0
   */
  function isFused(): boolean;

  /**
   * Iterate over the lines in a file.
   *
   * Will throw a fatal error if there is trouble accessing the specified
   * file.
   *
   * ```ts
   * for (const line of love.filesystem.lines("file.txt")) {
   *      print(line);
   * }
   * ```
   *
   * @param filepath A file's path.
   * @returns An iterator that goes over each line of content in the file.
   * @link [love.filesystem.lines](https://love2d.org/wiki/love.filesystem.lines)
   */
  function lines(filepath: string): LuaIterable<string>;

  /**
   * Loads a Lua file (but does not run it).
   *
   * @param name The path to a Lua file.
   * @returns chunk, The loaded chunk.
   * @returns errormsg, The error message if file could not be opened.
   * @link [love.filesystem.load](https://love2d.org/wiki/love.filesystem.load)
   * @since 0.5.0
   */
  function load(
    name: string,
  ): LuaMultiReturn<
    [chunk: (this: void) => any] | [chunk: undefined, errormsg: string]
  >;

  /**
   * Mounts a zip file or folder in the game's save directory for reading. It is also possible to mount love.filesystem.getSourceBaseDirectory if the game is in fused mode.
   *
   * @param archive The folder or zip file in the game's save directory to mount.
   * @param mountpoint The new path the archive will be mounted to.
   * @param appendToPath Whether the archive will be searched when reading a filepath before or after already-mounted archives. This includes the game's source and save directories. (Default false)
   * @returns true if the archive was successfully mounted, false otherwise.
   * @link [love.filesystem.mount](https://love2d.org/wiki/love.filesystem.mount)
   * @since 0.9.0
   */
  function mount(
    archive: string,
    mountpoint: string,
    appendToPath?: boolean,
  ): boolean;

  /**
   * Mounts the contents of the given FileData in memory. The FileData's data must contain a zipped directory structure.
   *
   * @param filedata The FileData object in memory to mount.
   * @param mountpoint The new path the archive will be mounted to.
   * @param appendToPath Whether the archive will be searched when reading a filepath before or after already-mounted archives. This includes the game's source and save directories. (Default false)
   * @returns true if the archive was successfully mounted, false otherwise.
   * @link [love.filesystem.mount](https://love2d.org/wiki/love.filesystem.mount)
   * @since 11.0
   */
  function mount(
    filedata: FileData,
    mountpoint: string,
    appendToPath?: boolean,
  ): boolean;

  /**
   * Mounts {@link Data} in memory. The {@link Data} must contain a zipped directory structure.
   *
   * @param data The Data object in memory to mount.
   * @param archivename The unique name to associate the mounted data with, for use with love.filesystem.unmount. Must be unique compared to other mounted data.
   * @param mountpoint The new path the archive will be mounted to.
   * @param appendToPath Whether the archive will be searched when reading a filepath before or after already-mounted archives. This includes the game's source and save directories. (Default false)
   * @returns true if the archive was successfully mounted, false otherwise.
   * @link [love.filesystem.mount](https://love2d.org/wiki/love.filesystem.mount)
   * @since 11.0
   */
  function mount(
    data: Data,
    archivename: string,
    mountpoint: string,
    appendToPath?: boolean,
  ): boolean;

  /**
   * Creates a new {@link File} object. Use {@link File.open} to start using it.
   *
   * @param filename The name of the File.
   * @link [love.filesystem.newFile](https://love2d.org/wiki/love.filesystem.newFile)
   */
  function newFile(filename: string): File;

  /**
   * Creates a new {@link File} object and opens it.
   *
   * @param filename The filename of the file.
   * @param mode The mode to open the file in.
   * @returns file, The new File object, or _nil/undefined_ if an error occurred.
   * @returns errormsg, The error string if an error occurred.
   * @link [love.filesystem.newFile](https://love2d.org/wiki/love.filesystem.newFile)
   * @since 0.9.0
   */
  function newFile(
    filename: string,
    mode: FileMode,
  ): LuaMultiReturn<[file: File] | [file: undefined, errormsg: string]>;

  /**
   * Creates a new {@link FileData} object.
   *
   * @param contents The contents of the file.
   * @param name The name of the file.
   * @returns The new {@link FileData}.
   * @link [love.filesystem.newFileData](https://love2d.org/wiki/love.filesystem.newFileData)
   */
  function newFileData(contents: string, name: string): FileData;

  /**
   * Creates a new {@link FileData} object from a {@link Data} object in memory.
   *
   * @param originalData The contents of the file.
   * @param name The name of the file.
   * @returns The new {@link FileData}.
   * @link [love.filesystem.newFileData](https://love2d.org/wiki/love.filesystem.newFileData)
   * @since 11.4
   */
  function newFileData(originalData: Data, name: string): FileData;

  /**
   * Creates a new {@link FileData} from a file on the storage device.
   *
   * @param filepath Path to the file.
   * @return data, The new {@link FileData}, or _nil/undefined_ if an error occurred.
   * @return err, The error string, if an error occurred.
   * @link [love.filesystem.newFileData](https://love2d.org/wiki/love.filesystem.newFileData)
   * @since 0.9.0
   */
  function newFileData(
    filepath: string,
  ): LuaMultiReturn<[data: FileData] | [data: undefined, err: string]>;

  /**
   * Read the contents of a file.
   *
   * @param name The name (and path) of the file.
   * @param size How many bytes to read.
   * @return contents, The file contents, or _nil/undefined_ if an error occurred.
   * @return size, How many bytes have been read, or the error string.
   * @link [love.filesystem.read](https://love2d.org/wiki/love.filesystem.read)
   */
  function read(
    name: string,
    size?: number,
  ): LuaMultiReturn<
    [contents: string, size: number] | [contents: undefined, errormsg: string]
  >;

  /**
   * Reads the contents of a file into either a string or a {@link FileData} object.
   *
   * @param container What type to return the file's contents as.
   * @param name The name (and path) of the file
   * @param size How many bytes to read (Default all)
   * @link [love.filesystem.read](https://love2d.org/wiki/love.filesystem.read)
   * @since 11.0
   */
  function read(
    container: "string",
    name: string,
    size?: number,
  ): LuaMultiReturn<
    [contents: string, size: number] | [contents: undefined, errormsg: string]
  >;
  function read(
    container: "data",
    name: string,
    size?: number,
  ): LuaMultiReturn<
    [contents: FileData, size: number] | [contents: undefined, errormsg: string]
  >;

  /**
   * Removes a file or directory.
   *
   * @param name The file or directory to remove.
   * @return success, True if the file/directory was removed, false otherwise.
   * @link [love.filesystem.remove](https://love2d.org/wiki/love.filesystem.remove)
   */
  function remove(name: string): boolean;

  /**
   * Sets the filesystem paths that will be searched for c libraries when
   * require is called.
   *
   * @param paths The paths that the require function will check in love's filesystem.
   * @link [love.filesystem.setCRequirePath](https://love2d.org/wiki/love.filesystem.setCRequirePath)
   * @since 11.0
   */
  function setCRequirePath(paths: string): void;

  /**
   * Sets the write directory for your game. Note that you can only set the name of
   * the folder to store your files in, not the location.
   *
   * @param name The new identity that will be used as write directory.
   * @param appendToPath Whether the identity directory will be searched when reading a filepath before or after the game's source directory and any currently mounted archives.
   * @link [love.filesystem.setIdentity](https://love2d.org/wiki/love.filesystem.setIdentity)
   * @since 0.9.0
   */
  function setIdentity(name: string, appendToPath?: boolean): void;

  /**
   * Sets the filesystem paths that will be searched when require is called.
   *
   * @param paths The paths that the require function will check in love's filesystem.
   * @link [love.filesystem.setRequirePath](https://love2d.org/wiki/love.filesystem.setRequirePath)
   * @since 0.10.0
   */
  function setRequirePath(paths: string): void;

  /**
   * Sets the source of the game, where the code is present. This function can only
   * be called once, and is normally automatically done by LÖVE.
   *
   * @param path Absolute path to the game's source folder.
   * @link [love.filesystem.setSource](https://love2d.org/wiki/love.filesystem.setSource)
   */
  function setSource(path: string): void;

  /**
   * Sets whether love.filesystem follows symbolic links. It is enabled by default
   * in version 0.10.0 and newer, and disabled by default in 0.9.2.
   *
   * @param enable Whether love.filesystem should follow symbolic links.
   * @link [love.filesystem.setSymlinksEnabled](https://love2d.org/wiki/love.filesystem.setSymlinksEnabled)
   * @since 0.9.2
   */
  function setSymlinksEnabled(enable: boolean): void;

  /**
   * Unmounts a zip file or folder previously mounted for reading with
   * love.filesystem.mount.
   *
   * @param archive The folder or zip file in the game's save directory which is currently mounted.
   * @return success, True if the archive was successfully unmounted, false otherwise.
   * @link [love.filesystem.unmount](https://love2d.org/wiki/love.filesystem.unmount)
   * @since 0.9.0
   */
  function unmount(archive: string): boolean;

  /**
   * Write data to a file in the save directory.
   *
   * If the file existed already, it will be completely replaced by the new contents.
   *
   * @param filepath The file to write to.
   * @param data The string or Data to write to the file.
   * @param size How many bytes to write.
   * @returns success, If the operation was successful.
   * @returns message, Error message if operation was unsuccessful.
   * @link [love.filesystem.write](https://love2d.org/wiki/love.filesystem.write)
   */
  function write(
    filepath: string,
    data: string,
    size?: number,
  ): LuaMultiReturn<[success: true] | [success: false, message: string]>;
  function write(
    filepath: string,
    data: Data,
    size?: number,
  ): LuaMultiReturn<[success: true] | [success: false, message: string]>;
}
