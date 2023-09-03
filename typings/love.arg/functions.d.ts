declare module "love" {
  namespace arg {
    /**
     * Finds the key in the table with the lowest integral index. The lowest
     * will typically the executable, for instance "lua5.1.exe".
     *
     * @param args The given arguments to look at.
     * @returns The lowest argument followed by its index within args.
     */
    function getLow(
      this: void,
      args: string[],
    ): LuaMultiReturn<[lowest: string, index: number]>;
    function parseOption(this: void): void;
    function parseOptions(this: void): void;

    /**
     * Returns the arguments that are passed to your game via love.load()
     * arguments that were parsed as options are skipped.
     *
     * @param args The arguments to parse.
     * @returns The parsed arguments.
     */
    function parseGameArguments(this: void, args: string[]): string[];
  }
}
