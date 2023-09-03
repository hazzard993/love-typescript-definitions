declare module "love" {
  namespace path {
    /**
     * Replace any `\` with `/`.
     *
     * @param path The path to modify.
     * @returns The path in its modified state.
     * @link [love.path.normalslashes](https://bitbucket.org/rude/love/src/8d55498fe68106bb279fbc21f36f94e00b5caf09/src/scripts/boot.lua#lines-29)
     */
    function normalslashes(this: void, path: string): string;

    /**
     * Makes sure there is a slash at the end of a path.
     *
     * @param path The path to return with a slash at the end.
     * @returns A path with a slash at the end.
     */
    function endslash(this: void, path: string): string;

    /**
     * Checks whether a path is absolute or not.
     *
     * @param path The path to check.
     * @returns `true` if the path is absolute, `false` otherwise.
     */
    function abs(this: void, path: string): boolean;

    /**
     * Converts any path into a full path.
     *
     * @param path A relative path from the cwd or a full path.
     * @returns The full path.
     */
    function getFull(this: void, path: string): string;

    /**
     * Returns the leaf of a full path.
     *
     * `/path/to/file --> file`
     *
     * @param path The path to obtain the leaf from.
     * @returns The last part of the path.
     */
    function leaf(this: void, path: string): string;
  }
}
