declare namespace love {

    /**
     * Provides an interface to the user's filesystem.
     * @noSelf
     * @link [love.filesystem](https://love2d.org/wiki/love.filesystem)
     */
    export namespace filesystem {

        /**
         * Append data to an existing file.
         *
         * @param name The name (and path) of the file.
         * @param data The data that should be written to the file
         * @param size How many bytes to write.
         * @return success, True if the operation was successful, or _nil/null_ if there was an error.
         * @return errormsg, The error message on failure.
         * @tupleReturn
         * @link [love.filesystem.append](https://love2d.org/wiki/love.filesystem.append)
         */
        export function append(name: string, data: string, size?: number): [true] | [null, string];

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
         * Check whether a file or directory exists.
         * @param filename The path to a potential file or directory.
         * @return exists, True if there is a file or directory with the specified name. False otherwise.
         * @link [love.filesystem.exists](https://love2d.org/wiki/love.filesystem.exists)
         * @deprecated since 11.0. This function is deprecated and is replaced by love.filesystem.getInfo.
         */
        export function exists(filename: string): boolean;

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
         * @return paths, The paths that the require function will check for c libraries in love's filesystem.
         * @link [love.filesystem.getCRequirePath](https://love2d.org/wiki/love.filesystem.getCRequirePath)
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

        /**
         * Gets information about the specified file or directory.
         *
         * @param path The file or directory path to check.
         * @param info A table which will be filled in with info about the specified path.
         * @return info, A table containing information about the specified path, or _nil/null_ if nothing exists at the path.
         * @link [love.filesystem.getInfo](https://love2d.org/wiki/love.filesystem.getInfo)
         */
        export function getInfo(path: string, info?: object): FileInfo | null;

        /**
         * Gets the last modification time of a file.
         * @param filename The path and name to a file.
         * @return modtime, The last modification time in seconds since the unix epoch or _nil/null_ on failure.
         * @return errormsg, The error message on failure.
         * @tupleReturn
         * @link [love.filesystem.getLastModified](https://love2d.org/wiki/love.filesystem.getLastModified)
         * @deprecated 11.0
         */
        export function getLastModified(filename: string): [number | null, string | null];

        /**
         * Gets the platform-specific absolute path of the directory containing a
         * filepath.
         *
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
         * Gets the size in bytes of a file.
         * @param filename The path and name to a file.
         * @return size, The size in bytes of the file, or _nil/null_ on failure.
         * @return errormsg, The error message on failure.
         * @link [love.filesystem.getSize](https://love2d.org/wiki/love.filesystem.getSize)
         * @deprecated since 11.0. This function is deprecated and is replaced by love.filesystem.getInfo.
         */
        export function getSize(filename: string): [number | null, string | null];

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
         * Check whether something is a directory.
         * @param filename The path to a potential directory.
         * @return isDir, True if there is a directory with the specified name. False otherwise.
         * @link [love.filesystem.isDirectory](https://love2d.org/wiki/love.filesystem.isDirectory)
         * @deprecated since 11.0. This function is deprecated and is replaced by love.filesystem.getInfo.
         */
        export function isDirectory(filename: string): boolean;

        /**
         * Check whether something is a file.
         * @param filename The path to a potential file.
         * @return isFile, True if there is a file with the specified name. False otherwise.
         * @link [love.filesystem.isFile](https://love2d.org/wiki/love.filesystem.isFile)
         */
        export function isFile(filename: string): boolean;

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
         * @return fused, True if the game is in fused mode, false otherwise.
         */
        export function isFused(): boolean;

        /**
         * Gets whether a filepath is actually a symbolic link.
         * @param path The file or directory path to check.
         * @return symlink, True if the path is a symbolic link, false otherwise.
         * @link [love.filesystem.isSymlink](https://love2d.org/wiki/love.filesystem.isSymlink)
         */
        export function isSymlink(path: string): boolean;

        /**
         * Iterate over the lines in a file.
         *
         * @param name The name (and path) of the file.
         * @return iterator, A function that iterates over all the lines in the file.
         */
        export function lines(name: string): Function;

        /**
         * Loads a Lua file (but does not run it).
         *
         * @param name The name (and path) of the file.
         * @param errormsg The error message if file could not be opened.
         * @return chunk, The loaded chunk.
         */
        export function load(name: string, errormsg?: string): Function;

        /**
         * Mounts a zip file or folder in the game's save directory for reading.
         *
         * @param archive The folder or zip file in the game's save directory to mount.
         * @param mountpoint The new path the archive will be mounted to.
         * @return success, True if the archive was successfully mounted, false otherwise.
         */
        export function mount(archive: string, mountpoint: string): boolean;

        /**
         * Mounts a zip file or folder in the game's save directory for reading.
         *
         * @param archive The folder or zip file in the game's save directory to mount.
         * @param mountpoint The new path the archive will be mounted to.
         * @param appendToPath Whether the archive will be searched when reading a filepath before or after already-mounted archives. This includes the game's source and save directories.
         * @return success, True if the archive was successfully mounted, false otherwise.
         */
        export function mount(archive: string, mountpoint: string, appendToPath?: string): boolean;

        /**
         * Creates a new File object. It needs to be opened before it can be accessed.
         *
         * @param filename The filename of the file to read.
         * @param mode The mode to open the file in.
         * @return file, The new File object, or _nil/null_ if an error occurred.
         * @return errorstr, The error string if an error occurred.
         * @tupleReturn
         */
        export function newFile(filename: string, mode?: FileMode): [File | null, string | null];

        /**
         * Creates a new FileData object.
         *
         * @param contents The contents of the file.
         * @param name The name of the file.
         * @param decoder The method to use when decoding the contents.
         * @return data, Your new FileData.
         */
        export function newFileData(contents: string, name: string, decoder?: FileDecoder): FileData;

        /**
         * Creates a new FileData object.
         *
         * @param filepath Path to the file.
         * @return data, The new FileData, or _nil/null_ if an error occurred.
         * @return err, The error string, if an error occurred.
         * @tupleReturn
         */
        export function newFileData(filepath: string): [FileData | null, string | null];

        /**
         * Read the contents of a file.
         *
         * @param name The name (and path) of the file.
         * @param bytes How many bytes to read.
         * @return contents, The file contents, or _nil/null_ if an error occurred.
         * @return size, How many bytes have been read, or the error string.
         * @tupleReturn
         */
        export function read(name: string, bytes?: number): [string, number] | [null, string];

        /**
         * Removes a file or directory.
         *
         * @param name The file or directory to remove.
         * @return success, True if the file/directory was removed, false otherwise.
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
         * @return success, True if the archive was successfully unmounted, false otherwise.
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
         * @returns _success_, If the operation was successful.
         * @returns _message_, Error message if operation was unsuccessful.
         * @tupleReturn
         */
        export function write(name: string, data: Data | string, size?: number): [boolean, string];

    }

}
