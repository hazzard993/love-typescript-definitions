// https://www.lua.org/manual/5.1/manual.html#5.9

/**
 * This library provides the functionality of the debug interface (§4.9) to Lua
 * programs. You should exert care when using this library. Several of its
 * functions violate basic assumptions about Lua code (e.g., that variables local
 * to a function cannot be accessed from outside; that userdata metatables cannot
 * be changed by Lua code; that Lua programs do not crash) and therefore can
 * compromise otherwise secure code. Moreover, some functions in this library may
 * be slow.
 *
 * All functions in this library are provided inside the debug table. All
 * functions that operate over a thread have an optional first argument which is
 * the thread to operate over. The default is always the current thread.
 */
declare namespace debug {
  /**
   * Returns the current environment in use by the function. f can be a Lua function
   * or a number that specifies the function at that stack level: Level 1 is the
   * function calling getfenv. If the given function is not a Lua function, or if f
   * is 0, getfenv returns the global environment. The default for f is 1.
   */
  export function getfenv(f?: Function | 0 | 1 | 2): table;

  /**
   * Sets the environment to be used by the given function. f can be a Lua function
   * * or a number that specifies the function at that stack level: Level 1 is the *
   * function calling setfenv. setfenv returns the given function.
   *
   * As a special case, when f is 0 setfenv changes the environment of the running
   * thread. In this case, setfenv returns no values.
   */
  export function setfenv(f: Function | 0 | 1 | 2, tbl: table): Function | null;

}
