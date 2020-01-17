/**
 * Provides an interface to the user's filesystem.
 *
 * @noResolution
 * @noSelf
 * @link [love.filesystem](https://love2d.org/wiki/love.filesystem)
 */
declare module "love.filesystem" {
    import { Data } from "love.data";
    import { LuaIterator } from "love";

    /**
     * Append data to an existing file.
     *
     * @param name The name (and path) of the file.
     * @param data The data that should be written to the file
     * @param size How many bytes to write.
     * @return success, True if the operation was successful, or _nil/undefined_ if there was an error.
     * @return errormsg, The error message on failure.
     * @tupleReturn
     * @link [love.filesystem.append](https://love2d.org/wiki/love.filesystem.append)
     */
    export function append(name: string, data: string, size?: number): [boolean, string | undefined];
    export function append(name: string, data: Data, size?: number): [boolean, string | undefined];

    /**
     * Gets whether love.filesystem follows symbolic links.
     *
     * @return enable, Whether love.filesystem follows symbolic links.
     * @link [love.filesystem.areSymlinksEnabled](https://love2d.org/wiki/love.filesystem.areSymlinksEnabled)
     */
    export function areSymlinksEnabled(): boolean;

    /**
     * Creates a directory.
     *
     * @param name The directory to create.
     * @return success, True if the directory was created, false if not.
     * @link [love.filesystem.createDirectory](https://love2d.org/wiki/love.filesystem.createDirectory)
     */
    export function createDirectory(name: string): boolean;

    /**
     * Returns the application data directory (could be the same as getUserDirectory)
     *
     * @return path, The path of the application data directory.
     * @link [love.filesystem.getAppdataDirectory](https://love2d.org/wiki/love.filesystem.getAppdataDirectory)
     */
    export function getAppdataDirectory(): string;

    /**
     * Gets the filesystem paths that will be searched for c libraries when require is
     * called.
     *
     * The paths string returned by this function is a sequence of path templates
     * separated by semicolons. The argument passed to require will be inserted in
     * place of any question mark ("?") character in each template (after the dot
     * characters in the argument passed to require are replaced by directory
     * separators.) Additionally, any occurrence of a double question mark ("??") will
     * be replaced by the name passed to require and the default library extension for
     * the platform.
     *
     * The paths are relative to the game's source and save directories, as well as
     * any paths mounted with love.filesystem.mount.
     *
     * @return paths, The paths that the require function will check for c libraries in love's filesystem.
     * @link [love.filesystem.getCRequirePath](https://love2d.org/wiki/love.filesystem.getCRequirePath)
     */
    export function getCRequirePath(): string;

    /**
     * Returns a table with the names of files and subdirectories in the specified
     * path. The table is not sorted in any way; the order is undefined.
     *
     * If the path passed to the function exists in the game and the save directory,
     * it will list the files and directories from both places.
     *
     * @param dir The directory.
     * @return items, A sequence with the names of all files and subdirectories as strings.
     * @link [love.filesystem.getDirectoryItems](https://love2d.org/wiki/love.filesystem.getDirectoryItems)
     */
    export function getDirectoryItems(dir: string): Array<string>;

    /**
     * Gets the write directory name for your game. Note that this only returns the
     * name of the folder to store your files in, not the full location.
     *
     * @param name The identity that is used as write directory.
     * @link [love.filesystem.getIdentity](https://love2d.org/wiki/love.filesystem.getIdentity)
     */
    export function getIdentity(name: string): void;

    export type FileInfo = {
        /**
         * The type of the object at the path (file, directory, symlink, etc.)
         */
        type: FileType;

        /**
         * The size in bytes of the file, or _nil/undefined_ if it can't be determined.
         */
        size: number | undefined;

        /**
         * The file's last modification time in seconds since the unix epoch, or _nil/undefined_ if it can't be determined.
         */
        modtime: number | undefined;
    };

    /**
     * Gets information about the specified file or directory.
     *
     * @param path The file or directory path to check.
     * @param filetype If supplied, this parameter causes getInfo to only return the info table if the item at the given path matches the specified file type. (Default _nil/undefined_)
     * @link [love.filesystem.getInfo](https://love2d.org/wiki/love.filesystem.getInfo)
     */
    export function getInfo(path: string, filetype?: FileType): FileInfo | undefined;

    /**
     * Gets information about the specified file or directory.
     *
     * @param path The file or directory path to check.
     * @param info A table which will be filled in with info about the specified path.
     * @return info, A table containing information about the specified path, or _nil/undefined_ if nothing exists at the path.
     * @link [love.filesystem.getInfo](https://love2d.org/wiki/love.filesystem.getInfo)
     */
    export function getInfo(path: string, info?: object): FileInfo | undefined;

    /**
     * This variant only returns info if the item at the given path is the same file type as specified in the filtertype argument, and accepts an existing table to fill in, instead of creating a new one.
     *
     * @param path The file or directory path to check.
     * @param filetype Causes getInfo to only return the info table if the item at the given path matches the specified file type.
     * @param info A table which will be filled in with info about the specified path.
     * @link [love.filesystem.getInfo](https://love2d.org/wiki/love.filesystem.getInfo)
     */
    export function getInfo(path: string, filetype: FileType, info: object): FileInfo | undefined;

    /**
     * Gets the platform-specific absolute path of the directory containing a
     * filepath.
     *
     * This can be used to determine whether a file is inside the save directory or
     * the game's source .love.
     *
     * @param filepath The filepath to get the directory of.
     * @return realdir, The platform-specific full path of the directory containing the filepath.
     * @link [love.filesystem.getRealDirectory](https://love2d.org/wiki/love.filesystem.getRealDirectory)
     */
    export function getRealDirectory(filepath: string): string;

    /**
     * Gets the filesystem paths that will be searched when require is called.
     *
     * The paths string returned by this function is a sequence of path templates
     * separated by semicolons. The argument passed to require will be inserted in
     * place of any question mark ("?") character in each template (after the dot
     * characters in the argument passed to require are replaced by directory
     * separators.)
     *
     * The paths are relative to the game's source and save directories, as well as
     * any paths mounted with love.filesystem.mount.
     *
     * @return paths, The paths that the require function will check in love's filesystem.
     * @link [love.filesystem.getRequirePath](https://love2d.org/wiki/love.filesystem.getRequirePath)
     */
    export function getRequirePath(): string;

    /**
     * Gets the full path to the designated save directory. This can be useful if you
     * want to use the standard io library (or something else) to read or write in the
     * save directory.
     *
     * @return path, The absolute path to the save directory.
     * @link [love.filesystem.getSaveDirectory](https://love2d.org/wiki/love.filesystem.getSaveDirectory)
     */
    export function getSaveDirectory(): string;

    /**
     * Returns the full path to the the .love file or directory. If the game is fused
     * to the LÖVE executable, then the executable is returned.
     *
     * @return path, The full platform-dependent path of the .love file or directory.
     * @link [love.filesystem.getSource](https://love2d.org/wiki/love.filesystem.getSource)
     */
    export function getSource(): string;

    /**
     * Returns the full path to the directory containing the .love file. If the game
     * is fused to the LÖVE executable, then the directory containing the executable
     * is returned.
     *
     * If love.filesystem.isFused is true, the path returned by this function can be
     * passed to love.filesystem.mount, which will make the directory containing the
     * main game readable by love.filesystem.
     *
     * @return path, The full platform-dependent path of the directory containing the .love file.
     * @link [love.filesystem.getSourceBaseDirectory](https://love2d.org/wiki/love.filesystem.getSourceBaseDirectory)
     */
    export function getSourceBaseDirectory(): string;

    /**
     * Returns the path of the user's directory.
     *
     * @return path, The path of the user's directory.
     * @link [love.filesystem.getUserDirectory](https://love2d.org/wiki/love.filesystem.getUserDirectory)
     */
    export function getUserDirectory(): string;

    /**
     * Gets the current working directory.
     *
     * @return path, The current working directory.
     * @link [love.filesystem.getWorkingDirectory](https://love2d.org/wiki/love.filesystem.getWorkingDirectory)
     */
    export function getWorkingDirectory(): string;

    /**
     * Initializes love.filesystem, will be called internally, so should not be used
     * explicitly.
     *
     * @param appname The name of the application binary, typically love.
     * @link [love.filesystem.init](https://love2d.org/wiki/love.filesystem.init)
     */
    export function init(appname: string): void;

    /**
     * Gets whether the game is in fused mode or not.
     *
     * If a game is in fused mode, its save directory will be directly in the Appdata
     * directory instead of Appdata/LOVE/. The game will also be able to load C Lua
     * dynamic libraries which are located in the save directory.
     *
     * A game is in fused mode if the source .love has been fused to the executable
     * (see Game Distribution), or if "--fused" has been given as a command-line
     * argument when starting the game.
     *
     * @return fused, True if the game is in fused mode, false otherwise.
     * @link [love.filesystem.isFused](https://love2d.org/wiki/love.filesystem.isFused)
     */
    export function isFused(): boolean;

    /**
     * Iterate over the lines in a file.
     *
     * ```ts
     * for (const line of love.filesystem.lines("file.txt")) {
     *      print(line);
     * }
     * ```
     *
     * @param name The name (and path) of the file.
     * @return iterator, A function that iterates over all the lines in the file.
     * @link [love.filesystem.lines](https://love2d.org/wiki/love.filesystem.lines)
     */
    export function lines(name: string): LuaIterator<string>;

    /**
     * Loads a Lua file (but does not run it).
     *
     * @param name The name (and path) of the file.
     * @return chunk, The loaded chunk.
     * @return errormsg, The error message if file could not be opened.
     * @tupleReturn
     * @link [love.filesystem.load](https://love2d.org/wiki/love.filesystem.load)
     */
    export function load<T = void>(name: string, errormsg?: string): [(this: void) => T, string | undefined];

    /**
     * Mounts a zip file or folder in the game's save directory for reading. It is also possible to mount love.filesystem.getSourceBaseDirectory if the game is in fused mode.\
     *
     * @param archive The folder or zip file in the game's save directory to mount.
     * @param mountpoint The new path the archive will be mounted to.
     * @param appendToPath Whether the archive will be searched when reading a filepath before or after already-mounted archives. This includes the game's source and save directories. (Default false)
     * @return success, True if the archive was successfully mounted, false otherwise.
     * @link [love.filesystem.mount](https://love2d.org/wiki/love.filesystem.mount)
     */
    export function mount(archive: string, mountpoint: string, appendToPath?: boolean): boolean;

    /**
     * Mounts the contents of the given FileData in memory. The FileData's data must contain a zipped directory structure.
     *
     * @param filedata The FileData object in memory to mount.
     * @param mountpoint The new path the archive will be mounted to.
     * @param appendToPath Whether the archive will be searched when reading a filepath before or after already-mounted archives. This includes the game's source and save directories. (Default false)
     * @return success, True if the archive was successfully mounted, false otherwise.
     * @link [love.filesystem.mount](https://love2d.org/wiki/love.filesystem.mount)
     */
    export function mount(filedata: FileData, mountpoint: string, appendToPath?: boolean): boolean;

    /**
     * The Data object in memory to mount.
     *
     * @param data The Data object in memory to mount.
     * @param archivename The name to associate the mounted data with, for use with love.filesystem.unmount. Must be unique compared to other mounted data.
     * @param mountpoint The new path the archive will be mounted to.
     * @param appendToPath Whether the archive will be searched when reading a filepath before or after already-mounted archives. This includes the game's source and save directories. (Default false)
     * @return success, True if the archive was successfully mounted, false otherwise.
     * @link [love.filesystem.mount](https://love2d.org/wiki/love.filesystem.mount)
     */
    export function mount(data: Data, archivename: string, mountpoint: string, appendToPath?: boolean): boolean;

    /**
     * Creates a new File object. It needs to be opened before it can be accessed.
     *
     * @param filename The filename of the file.
     * @return file, The new File object.
     * @link [love.filesystem.newFile](https://love2d.org/wiki/love.filesystem.newFile)
     */
    export function newFile(filename: string): File;

    /**
     * Creates a new File object. It needs to be opened before it can be accessed.
     *
     * @param filename The filename of the file to read.
     * @param mode The mode to open the file in.
     * @return file, The new File object, or _nil/undefined_ if an error occurred.
     * @return errorstr, The error string if an error occurred.
     * @tupleReturn
     * @link [love.filesystem.newFile](https://love2d.org/wiki/love.filesystem.newFile)
     */
    export function newFile(filename: string, mode: FileMode): [File, undefined] | [undefined, string];

    /**
     * Creates a new FileData object.
     *
     * @param contents The contents of the file.
     * @param name The name of the file.
     * @param decoder The method to use when decoding the contents.
     * @return data, Your new FileData.
     * @link [love.filesystem.newFileData](https://love2d.org/wiki/love.filesystem.newFileData)
     */
    export function newFileData(contents: string, name: string): FileData;

    /**
     * Creates a new FileData object.
     *
     * @param filepath Path to the file.
     * @return data, The new FileData, or _nil/undefined_ if an error occurred.
     * @return err, The error string, if an error occurred.
     * @tupleReturn
     * @link [love.filesystem.newFileData](https://love2d.org/wiki/love.filesystem.newFileData)
     */
    export function newFileData(filepath: string): [FileData, undefined] | [undefined, string];

    /**
     * Read the contents of a file.
     *
     * @param name The name (and path) of the file.
     * @param size How many bytes to read.
     * @return contents, The file contents, or _nil/undefined_ if an error occurred.
     * @return size, How many bytes have been read, or the error string.
     * @tupleReturn
     * @link [love.filesystem.read](https://love2d.org/wiki/love.filesystem.read)
     */
    export function read(name: string, size?: number): [string, number] | [undefined, string];

    /**
     * Reads the contents of a file into either a string or a FileData object.
     *
     * @param container What type to return the file's contents as.
     * @param name The name (and path) of the file
     * @param size How many bytes to read (Default all)
     * @tupleReturn
     * @link [love.filesystem.read](https://love2d.org/wiki/love.filesystem.read)
     */
    export function read(container: "string", name: string, size?: number): [string, number] | [undefined, string];
    export function read(container: "data", name: string, size?: number): [FileData, number] | [undefined, string];

    /**
     * Removes a file or directory.
     *
     * @param name The file or directory to remove.
     * @return success, True if the file/directory was removed, false otherwise.
     * @link [love.filesystem.remove](https://love2d.org/wiki/love.filesystem.remove)
     */
    export function remove(name: string): boolean;

    /**
     * Sets the filesystem paths that will be searched for c libraries when require is
     * called.
     *
     * The paths string returned by this function is a sequence of path templates
     * separated by semicolons. The argument passed to require will be inserted in
     * place of any question mark ("?") character in each template (after the dot
     * characters in the argument passed to require are replaced by directory
     * separators.) Additionally, any occurrence of a double question mark ("??") will
     * be replaced by the name passed to require and the default library extension for
     * the platform.
     *
     * The paths are relative to the game's source and save directories, as well as
     * any paths mounted with love.filesystem.mount.
     *
     * @param paths The paths that the require function will check in love's filesystem.
     * @link [love.filesystem.setCRequirePath](https://love2d.org/wiki/love.filesystem.setCRequirePath)
     */
    export function setCRequirePath(paths: string): void;

    /**
     * Sets the write directory for your game. Note that you can only set the name of
     * the folder to store your files in, not the location.
     *
     * @param name The new identity that will be used as write directory.
     * @param appendToPath Whether the identity directory will be searched when reading a filepath before or after the game's source directory and any currently mounted archives.
     * @link [love.filesystem.setIdentity](https://love2d.org/wiki/love.filesystem.setIdentity)
     */
    export function setIdentity(name: string, appendToPath?: boolean): void;

    /**
     * Sets the filesystem paths that will be searched when require is called.
     *
     * The paths string given to this function is a sequence of path templates
     * separated by semicolons. The argument passed to require will be inserted in
     * place of any question mark ("?") character in each template (after the dot
     * characters in the argument passed to require are replaced by directory
     * separators.)
     *
     * The paths are relative to the game's source and save directories, as well as
     * any paths mounted with love.filesystem.mount.
     *
     * @param paths The paths that the require function will check in love's filesystem.
     * @link [love.filesystem.setRequirePath](https://love2d.org/wiki/love.filesystem.setRequirePath)
     */
    export function setRequirePath(paths: string): void;

    /**
     * Sets the source of the game, where the code is present. This function can only
     * be called once, and is normally automatically done by LÖVE.
     *
     * @param path Absolute path to the game's source folder.
     * @link [love.filesystem.setSource](https://love2d.org/wiki/love.filesystem.setSource)
     */
    export function setSource(path: string): void;

    /**
     * Sets whether love.filesystem follows symbolic links. It is enabled by default
     * in version 0.10.0 and newer, and disabled by default in 0.9.2.
     *
     * @param enable Whether love.filesystem should follow symbolic links.
     * @link [love.filesystem.setSymlinksEnabled](https://love2d.org/wiki/love.filesystem.setSymlinksEnabled)
     */
    export function setSymlinksEnabled(enable: boolean): void;

    /**
     * Unmounts a zip file or folder previously mounted for reading with
     * love.filesystem.mount.
     *
     * @param archive The folder or zip file in the game's save directory which is currently mounted.
     * @return success, True if the archive was successfully unmounted, false otherwise.
     * @link [love.filesystem.unmount](https://love2d.org/wiki/love.filesystem.unmount)
     */
    export function unmount(archive: string): boolean;

    /**
     * Write data to a file in the save directory. If the file existed already, it will be completely replaced by the new contents.
     *
     * @param name The name (and path) of the file.
     * @param data The string data to write to the file.
     * @param size How many bytes to write.
     * @returns success, If the operation was successful.
     * @returns message, Error message if operation was unsuccessful.
     * @tupleReturn
     * @link [love.filesystem.write](https://love2d.org/wiki/love.filesystem.write)
     */
    export function write(name: string, data: Data, size?: number): [true, undefined] | [false, string];
}
