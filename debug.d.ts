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
   * Enters an interactive mode with the user, running each string that the user
   * enters. Using simple commands and other debug facilities, the user can inspect
   * global and local variables, change their values, evaluate expressions, and so
   * on. A line containing only the word cont finishes this function, so that the
   * caller continues its execution.
   *
   * Note that commands for debug.debug are not lexically nested within any function
   * and so have no direct access to local variables.
   */
  function debug(): void;

  /**
   * Returns the current environment in use by the function. f can be a Lua function
   * or a number that specifies the function at that stack level: Level 1 is the
   * function calling getfenv. If the given function is not a Lua function, or if f
   * is 0, getfenv returns the global environment. The default for f is 1.
   */
  function getfenv(f?: Function | 0 | 1 | 2): table;

  /**
   * Returns the current hook settings of the thread, as three values: the current
   * hook function, the current hook mask, and the current hook count (as set by the
   * debug.sethook function).
   */
  /** @TupleReturn */
  function gethook(thread?: thread): [null, 0] | [Function, number, string | null];

  /**
   * Returns a table with information about a function. You can give the function
   * directly or you can give a number as the value of f, which means the function
   * running at level f of the call stack of the given thread: level 0 is the
   * current function (getinfo itself); level 1 is the function that called getinfo
   * (except for tail calls, which do not count on the stack); and so on. If f is a
   * number larger than the number of active functions, then getinfo returns nil.
   *
   * The returned table can contain all the fields returned by lua_getinfo, with the
   * string what describing which fields to fill in. The default for what is to get
   * all information available, except the table of valid lines. If present, the
   * option 'f' adds a field named func with the function itself. If present, the
   * option 'L' adds a field named activelines with the table of valid lines.
   *
   * For instance, the expression debug.getinfo(1,"n").name returns a name for the
   * current function, if a reasonable name can be found, and the expression debug
   * getinfo(print) returns a table with all available information about the
   * print function.
   */
  function getinfo(f: Function | number, what?: any): table;
  function getinfo(thread: thread, f: Function | number, what?: any): table;

  /**
   * This function returns the name and the value of the local variable with index
   * local of the function at level f of the stack. This function accesses not only
   * explicit local variables, but also parameters, temporaries, etc.
   *
   * The first parameter or local variable has index 1, and so on, following the
   * order that they are declared in the code, counting only the variables that are
   * active in the current scope of the function. Negative indices refer to vararg
   * parameters; -1 is the first vararg parameter. The function returns nil if there
   * is no variable with the given index, and raises an error when called with
   * a level out of range. (You can call debug.getinfo to check whether the level is
   * valid.)
   *
   * Variable names starting with '(' (open parenthesis) represent variables with no
   * known names (internal variables such as loop control variables, and variables
   * from chunks saved without debug information).
   *
   * The parameter f may also be a function. In that case, getlocal returns only the
   * name of function parameters.
   */
  /** @TupleReturn */
  function getlocal(f: Function | number, local: number): [string, any];
  function getlocal(thread: thread, f: Function | number, local: number): [string, any];

  /**
   * Returns the metatable of the given value or nil if it does not have a
   * metatable.
   */
  function getmetatable(value: any): Metatable | null;

  /**
   * Returns the registry table (see §4.5).
   */
  function getregistry(): any;

  /**
   * This function returns the name and the value of the upvalue with index up of
   * the function f. The function returns nil if there is no upvalue with the given
   * index.
   *
   * Variable names starting with '(' (open parenthesis) represent variables with no
   * known names (variables from chunks saved without debug information).
   */
  /** @TupleReturn */
  function getupvalue(f: Function, up: number): [string, any] | null;

  /**
   * Sets the environment to be used by the given function. f can be a Lua function
   * * or a number that specifies the function at that stack level: Level 1 is the *
   * function calling setfenv. setfenv returns the given function.
   *
   * As a special case, when f is 0 setfenv changes the environment of the running
   * thread. In this case, setfenv returns no values.
   */
  function setfenv(f: Function | 0 | 1 | 2, tbl: table): Function | null;

  /**
   * Sets the given function as a hook. The string mask and the number count
   * describe when the hook will be called. The string mask may have any combination
   * of the following characters, with the given meaning:
   *
   * * 'c': the hook is called every time Lua calls a function;
   * * 'r': the hook is called every time Lua returns from a function;
   * * 'l': the hook is called every time Lua enters a new line of code.
   *
   * Moreover, with a count different from zero, the hook is called also after
   * every count instructions.
   *
   * When called without arguments, debug.sethook turns off the hook.
   *
   * When the hook is called, its first parameter is a string describing the
   * event that has triggered its call: "call" (or "tail call"), "return",
   * "line", and "count". For line events, the hook also gets the new line number
   * as its second parameter. Inside a hook, you can call getinfo with level 2 to
   * get more information about the running function (level 0 is the getinfo
   * function, and level 1 is the hook function).
   */
  function sethook(): void;
  function sethook(
    hook: (event: 'call' | 'return' | 'line' | 'count', line?: number) => any,
    mask: string,
    count?: number,
  ): void;
  function sethook(
    thread: thread,
    hook: (event: 'call' | 'return' | 'line' | 'count', line?: number) => any,
    mask: string,
    count?: number,
  ): void;

  /**
   * This function assigns the value value to the local variable with index local of
   * the function at level level of the stack. The function returns nil if
   * there is no local variable with the given index, and raises an error when
   * called with a level out of range. (You can call getinfo to check whether
   * the level is valid.) Otherwise, it returns the name of the local variable.
   *
   * See debug.getlocal for more information about variable indices and names.
   */
  function setlocal(level: number, local: number, value: any): string | null;
  function setlocal(thread: thread, level: number, local: number, value: any): string | null;

  /**
   * Sets the metatable for the given value to the given table (which can be nil).
   * Returns value.
   */
  function setmetatable<T>(value: T, table: Metatable | null): T;

  /**
   * This function assigns the value value to the upvalue with index up of the
   * function f. The function returns nil if there is no upvalue with the given
   * index. Otherwise, it returns the name of the upvalue.
   */
  function setupvalue(f: Function, up: number, value: any): string | null;

  /**
   * If message is present but is neither a string nor nil, this function returns
   * message without further processing. Otherwise, it returns a string with a
   * traceback of the call stack. The optional message string is appended at the
   * beginning of the traceback. An optional level number tells at which level to
   * start the traceback (default is 1, the function calling traceback).
   */
  function traceback(thread?: thread, message?: string | null, level?: number): string;
  function traceback<T>(thread?: thread, message?: T, level?: number): T;

  /**
   * Returns a unique identifier (as a light userdata) for the upvalue numbered n
   * from the given function.
   *
   * These unique identifiers allow a program to check whether different closures
   * share upvalues. Lua closures that share an upvalue (that is, that access a same
   * external local variable) will return identical ids for those upvalue indices.
   */
  function upvalueid(f: Function, n: number): any;

  /**
   * Make the n1-th upvalue of the Lua closure f1 refer to the n2-th upvalue of the
   * Lua closure f2.
   */
  function upvaluejoin(f1: any, n1: number, f2: any, n2: number): any;
}