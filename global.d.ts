// https://www.lua.org/manual/5.1/manual.html#5.1

type table = {
  [key: number]: any;
  [key: string]: any;
};
type TableKey = number | string;
type thread = {};
type userdata = any;

/**
 * Before starting to run the script, lua collects all arguments in the command
 * line in a global table called arg. The script name is stored at index 0, the
 * first argument after the script name goes to index 1, and so on. Any arguments
 * before the script name (that is, the interpreter name plus the options) go to
 * negative indices. For instance, in the call.
 */
declare let arg: { [index: number]: string };

/**
 * Returns the current environment in use by the function. f can be a Lua function
 * or a number that specifies the function at that stack level: Level 1 is the
 * function calling getfenv. If the given function is not a Lua function, or if f
 * is 0, getfenv returns the global environment. The default for f is 1.
 */
declare function getfenv(f?: Function | 0 | 1 | 2): table;

/**
 * Loads a chunk using function func to get its pieces. Each call to func must
 * return a string that concatenates with previous results. A return of an empty
 * string, nil, or no value signals the end of the chunk.
 *
 * If there are no errors, returns the compiled chunk as a function; otherwise,
 * returns nil plus the error message. The environment of the returned function is
 * the global environment.
 *
 * chunkname is used as the chunk name for error messages and debug information.
 * When absent, it defaults to "=(load)".
 */
declare function load(
  chunk: string | (() => string | null | undefined),
  chunkname?: string,
  mode?: 'b' | 't' | 'bt',
  env?: any,
): () => () => any | [null, string];

/**
 * Similar to load, but gets the chunk from file filename or from the standard
 * input, if no file name is given.
 */
/** @TupleReturn */
declare function loadfile(
  filename?: string,
  mode?: 'b' | 't' | 'bt',
  env?: any,
): () => any | [null, string];

/**
 * This function is similar to pcall, except that it sets a new message handler msgh.
 */
/** @TupleReturn */
declare function xpcall(f: () => any, msgh: () => any, ...args: any[]): true | [false, string];

/**
 * Returns the elements from the given list. This function is equivalent to
 *
 * `return list[i], list[i+1], ···, list[j]`
 *
 * By default, i is 1 and j is #list.
 */
/** @TupleReturn */
declare function unpack(list: any[], i?: number, j?: number): any[];
