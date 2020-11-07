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
     * Appends data to a file.
     *
     * There will be an attempt to create the file if it doesn't exist.
     *
     * [1]: https://love2d.org/wiki/love.filesystem.append
     * @param filepath A file's path.
     * @param data Data to append.
     * @param bytes How many bytes of data to append.
     * @returns success, true on success, or _nil/undefined_ on error.
     * @returns errormsg, The error message.
     * @tupleReturn
     * @link [love.filesystem.append](1)
     */
    export function append(filepath: string, data: string, bytes?: number): [boolean?, string?];
    export function append(filepath: string, data: Data, bytes?: number): [boolean?, string?];

    /**
     * Returns whether love.filesystem follows symbolic links.
     *
     * [1]: https://love2d.org/wiki/love.filesystem.areSymlinksEnabled
     * @link [love.filesystem.areSymlinksEnabled](1)
     */
    export function areSymlinksEnabled(): boolean;

    /**
     * Creates a directory.
     *
     * Does nothing but return true if that directory already exists.
     *
     * [1]: https://love2d.org/wiki/love.filesystem.createDirectory
     * @param name The new directory's name.
     * @returns true if that directory exists.
     * @link [love.filesystem.createDirectory](1)
     */
    export function createDirectory(name: string): boolean;

    /**
     * Returns an absolute path to the application data directory.
     *
     * [1]: https://love2d.org/wiki/love.filesystem.getAppdataDirectory
     * @link [love.filesystem.getAppdataDirectory](1)
     */
    export function getAppdataDirectory(): string;

    /**
     * Returns a path string used for importing C libraries.
     *
     * [1]: https://love2d.org/wiki/love.filesystem.getCRequirePath
     * @link [love.filesystem.getCRequirePath](1)
     */
    export function getCRequirePath(): string;

    /**
     * Returns an unsorted array of item names within a specified directory.
     *
     * If the path passed to the function exists in the game and the save directory,
     * it will list the files and directories from both places.
     *
     * [1]: https://love2d.org/wiki/love.filesystem.getDirectoryItems
     * @param dir A path to a filesystem.
     * @returns The names of all items in the specified directory.
     * @link [love.filesystem.getDirectoryItems](1)
     */
    export function getDirectoryItems(dir: string): string[];

    /**
     * Returns the write directory name for your game.
     *
     * Not the full location of that directory.
     *
     * [1]: https://love2d.org/wiki/love.filesystem.getIdentity
     * @returns The write directory name for your game.
     * @link [love.filesystem.getIdentity](1)
     */
    export function getIdentity(): string;

    export type FileInfo<T extends FileType = FileType> = {
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
     * [1]: https://love2d.org/wiki/love.filesystem.getInfo
     * @param path A filesystem path.
     * @param filetype Used to filter only items matching this {@link FileType}.
     * @returns {FileInfo<T>} _nil/undefined_ if nothing exists at the specified path.
     * @link [love.filesystem.getInfo](1)
     */
    export function getInfo<T extends FileType>(path: string, filetype?: T): FileInfo<T> | undefined;

    /**
     * Returns {@link FileInfo} for something on the filesystem.
     *
     * Avoids creating a new object by mutating an existing one.
     *
     * [1]: https://love2d.org/wiki/love.filesystem.getInfo
     * @param path A filesystem path.
     * @param info An object to mutate.
     * @returns The mutated object or _nil/undefined_.
     * @link [love.filesystem.getInfo](1)
     */
    export function getInfo(path: string, info?: object): FileInfo | undefined;

    /**
     * Returns {@link FileInfo} for something on the filesystem.
     *
     * Avoids creating a new object by mutating an existing one.
     *
     * [1]: https://love2d.org/wiki/love.filesystem.getInfo
     * @param path A filesystem path.
     * @param filetype Used to filter only items matching this {@link FileType}.
     * @param info The mutated object or _nil/undefined_.
     * @link [love.filesystem.getInfo](1)
     */
    export function getInfo<T extends FileType>(path: string, filetype: T, info: object): FileInfo<T> | undefined;

    /**
     * Returns an absolute path to a path's directory.
     *
     * [1]: https://love2d.org/wiki/love.filesystem.getRealDirectory
     * @param filepath A relative file path.
     * @returns realdir, An absolute path to the file's directory.
     * @returns errormsg, A message if an error occurred.
     * @tupleReturn
     * @link [love.filesystem.getRealDirectory](1)
     */
    export function getRealDirectory(filepath: string): [string?, string?];

    /**
     * Returns a path string used for importing lua files.
     *
     * [1]: https://love2d.org/wiki/love.filesystem.getRequirePath
     * @link [love.filesystem.getRequirePath](1)
     */
    export function getRequirePath(): string;

    /**
     * Returns a full path to the designated save directory.
     *
     * [1]: https://love2d.org/wiki/love.filesystem.getSaveDirectory
     * @link [love.filesystem.getSaveDirectory](1)
     */
    export function getSaveDirectory(): string;

    /**
     * Returns the full path to the the .love file or directory.
     *
     * If the game is fused to the LÖVE executable, then the executable is
     * returned.
     *
     * [1]: https://love2d.org/wiki/love.filesystem.getSource
     * @link [love.filesystem.getSource](1)
     */
    export function getSource(): string;

    /**
     * Like {@link "love.filesystem".getSource} but returns the parent directory.
     *
     * [1]: https://love2d.org/wiki/love.filesystem.getSourceBaseDirectory
     * @link [love.filesystem.getSourceBaseDirectory](1)
     */
    export function getSourceBaseDirectory(): string;

    /**
     * Returns an absolute path to the user's directory.
     *
     * [1]: https://love2d.org/wiki/love.filesystem.getUserDirectory
     * @link [love.filesystem.getUserDirectory](1)
     */
    export function getUserDirectory(): string;

    /**
     * Returns the current working directory.
     *
     * [1]: https://love2d.org/wiki/love.filesystem.getWorkingDirectory
     * @link [love.filesystem.getWorkingDirectory](1)
     */
    export function getWorkingDirectory(): string;

    /**
     * Initializes love.filesystem, will be called internally, so should not be used
     * explicitly.
     *
     * [1]: https://love2d.org/wiki/love.filesystem.init
     * @param appname The name of the application binary, typically love.
     * @link [love.filesystem.init](1)
     */
    export function init(appname: string): void;

    /**
     * Returns whether the game is in fused mode or not.
     *
     * [1]: https://love2d.org/wiki/love.filesystem.isFused
     * @link [love.filesystem.isFused](1)
     */
    export function isFused(): boolean;

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
     * [1]: https://love2d.org/wiki/love.filesystem.lines
     * @param filepath A file's path.
     * @returns An iterator that goes over each line of content in the file.
     * @link [love.filesystem.lines](1)
     */
    export function lines(filepath: string): LuaIterator<string>;

    /**
     * Loads a Lua file (but does not run it).
     *
     * [1]: https://love2d.org/wiki/love.filesystem.load
     * @param name The path to a Lua file.
     * @returns chunk, The loaded chunk.
     * @returns errormsg, The error message if file could not be opened.
     * @tupleReturn
     * @link [love.filesystem.load](1)
     */
    export function load(name: string): [((this: void) => any)?, string?];

    /**
     * Mounts a zip file or folder in the game's save directory for reading. It is also possible to mount love.filesystem.getSourceBaseDirectory if the game is in fused mode.
     *
     * [1]: https://love2d.org/wiki/love.filesystem.mount
     * @param archive The folder or zip file in the game's save directory to mount.
     * @param mountpoint The new path the archive will be mounted to.
     * @param appendToPath Whether the archive will be searched when reading a filepath before or after already-mounted archives. This includes the game's source and save directories. (Default false)
     * @returns true if the archive was successfully mounted, false otherwise.
     * @link [love.filesystem.mount](1)
     */
    export function mount(archive: string, mountpoint: string, appendToPath?: boolean): boolean;

    /**
     * Mounts the contents of the given FileData in memory. The FileData's data must contain a zipped directory structure.
     *
     * [1]: https://love2d.org/wiki/love.filesystem.mount
     * @param filedata The FileData object in memory to mount.
     * @param mountpoint The new path the archive will be mounted to.
     * @param appendToPath Whether the archive will be searched when reading a filepath before or after already-mounted archives. This includes the game's source and save directories. (Default false)
     * @returns true if the archive was successfully mounted, false otherwise.
     * @link [love.filesystem.mount](1)
     */
    export function mount(filedata: FileData, mountpoint: string, appendToPath?: boolean): boolean;

    /**
     * Mounts {@link Data} in memory. The {@link Data} must contain a zipped directory structure.
     *
     * [1]: https://love2d.org/wiki/love.filesystem.mount
     * @param data The Data object in memory to mount.
     * @param archivename The unique name to associate the mounted data with, for use with love.filesystem.unmount. Must be unique compared to other mounted data.
     * @param mountpoint The new path the archive will be mounted to.
     * @param appendToPath Whether the archive will be searched when reading a filepath before or after already-mounted archives. This includes the game's source and save directories. (Default false)
     * @returns true if the archive was successfully mounted, false otherwise.
     * @link [love.filesystem.mount](1)
     */
    export function mount(data: Data, archivename: string, mountpoint: string, appendToPath?: boolean): boolean;

    /**
     * Creates a new {@link File} object. Use {@link File.open} to start using it.
     *
     * [1]: https://love2d.org/wiki/love.filesystem.newFile
     * @param filename The name of the File.
     * @link [love.filesystem.newFile](1)
     */
    export function newFile(filename: string): File;

    /**
     * Creates a new {@link File} object and opens it.
     *
     * [1]: https://love2d.org/wiki/love.filesystem.newFile
     * @param filename The filename of the file.
     * @param mode The mode to open the file in.
     * @returns file, The new File object, or _nil/undefined_ if an error occurred.
     * @returns errorstr, The error string if an error occurred.
     * @tupleReturn
     * @link [love.filesystem.newFile](1)
     */
    export function newFile(filename: string, mode: FileMode): [File?, string?];

    /**
     * Creates a new {@link FileData} object.
     *
     * [1]: https://love2d.org/wiki/love.filesystem.newFileData
     * @param contents The contents of the file.
     * @param name The name of the file.
     * @returns Your new FileData.
     * @link [love.filesystem.newFileData](1)
     */
    export function newFileData(contents: string, name: string): FileData;

    /**
     * Creates a new {@link FileData} from a file on the storage device.
     *
     * [1]: https://love2d.org/wiki/love.filesystem.newFileData
     * @param filepath Path to the file.
     * @return data, The new FileData, or _nil/undefined_ if an error occurred.
     * @return err, The error string, if an error occurred.
     * @tupleReturn
     * @link [love.filesystem.newFileData](1)
     */
    export function newFileData(filepath: string): [FileData?, string?];

    /**
     * Read the contents of a file.
     *
     * [1]: https://love2d.org/wiki/love.filesystem.read
     * @param name The name (and path) of the file.
     * @param size How many bytes to read.
     * @return contents, The file contents, or _nil/undefined_ if an error occurred.
     * @return size, How many bytes have been read, or the error string.
     * @tupleReturn
     * @link [love.filesystem.read](1)
     */
    export function read(name: string, size?: number): [string, number] | [undefined, string];

    /**
     * Reads the contents of a file into either a string or a {@link FileData} object.
     *
     * [1]: https://love2d.org/wiki/love.filesystem.read
     * @param container What type to return the file's contents as.
     * @param name The name (and path) of the file
     * @param size How many bytes to read (Default all)
     * @tupleReturn
     * @link [love.filesystem.read](1)
     */
    export function read(container: "string", name: string, size?: number): [string, number] | [undefined, string];
    export function read(container: "data", name: string, size?: number): [FileData, number] | [undefined, string];

    /**
     * Removes a file or directory.
     *
     * [1]: https://love2d.org/wiki/love.filesystem.remove
     * @param name The file or directory to remove.
     * @return success, True if the file/directory was removed, false otherwise.
     * @link [love.filesystem.remove](1)
     */
    export function remove(name: string): boolean;

    /**
     * Sets the filesystem paths that will be searched for c libraries when
     * require is called.
     *
     * [1]: https://love2d.org/wiki/love.filesystem.setCRequirePath
     * @param paths The paths that the require function will check in love's filesystem.
     * @link [love.filesystem.setCRequirePath](1)
     */
    export function setCRequirePath(paths: string): void;

    /**
     * Sets the write directory for your game. Note that you can only set the name of
     * the folder to store your files in, not the location.
     *
     * [1]: https://love2d.org/wiki/love.filesystem.setIdentity
     * @param name The new identity that will be used as write directory.
     * @param appendToPath Whether the identity directory will be searched when reading a filepath before or after the game's source directory and any currently mounted archives.
     * @link [love.filesystem.setIdentity](1)
     */
    export function setIdentity(name: string, appendToPath?: boolean): void;

    /**
     * Sets the filesystem paths that will be searched when require is called.
     *
     * [1]: https://love2d.org/wiki/love.filesystem.setRequirePath
     * @param paths The paths that the require function will check in love's filesystem.
     * @link [love.filesystem.setRequirePath](1)
     */
    export function setRequirePath(paths: string): void;

    /**
     * Sets the source of the game, where the code is present. This function can only
     * be called once, and is normally automatically done by LÖVE.
     *
     * [1]: https://love2d.org/wiki/love.filesystem.setSource
     * @param path Absolute path to the game's source folder.
     * @link [love.filesystem.setSource](1)
     */
    export function setSource(path: string): void;

    /**
     * Sets whether love.filesystem follows symbolic links. It is enabled by default
     * in version 0.10.0 and newer, and disabled by default in 0.9.2.
     *
     * [1]: https://love2d.org/wiki/love.filesystem.setSymlinksEnabled
     * @param enable Whether love.filesystem should follow symbolic links.
     * @link [love.filesystem.setSymlinksEnabled](1)
     */
    export function setSymlinksEnabled(enable: boolean): void;

    /**
     * Unmounts a zip file or folder previously mounted for reading with
     * love.filesystem.mount.
     *
     * [1]: https://love2d.org/wiki/love.filesystem.unmount
     * @param archive The folder or zip file in the game's save directory which is currently mounted.
     * @return success, True if the archive was successfully unmounted, false otherwise.
     * @link [love.filesystem.unmount](1)
     */
    export function unmount(archive: string): boolean;

    /**
     * Write data to a file in the save directory.
     *
     * If the file existed already, it will be completely replaced by the new contents.
     *
     * [1]: https://love2d.org/wiki/love.filesystem.write
     * @param filepath The file to write to.
     * @param data The string or Data to write to the file.
     * @param size How many bytes to write.
     * @returns success, If the operation was successful.
     * @returns message, Error message if operation was unsuccessful.
     * @tupleReturn
     * @link [love.filesystem.write](1)
     */
    export function write(filepath: string, data: string, size?: number): [boolean, string?];
    export function write(filepath: string, data: Data, size?: number): [boolean, string?];
}
