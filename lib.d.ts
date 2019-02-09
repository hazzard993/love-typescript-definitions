// These definitions are required by Typescript when using --noLib.
// These definitions consider Love2D's Lua environment and how the
// tstl compiler behaves.

/**
 * Becomes a Lua object being used as an array.
 * In Lua, arrays start at 1.
 * tstl adds a +1 where you index array values.
 * e.g.
 * ts        lua (via tstl)
 * x[0]      x[0+1]
 */
interface Array<T> {
    /**
     * The length of the array.
     * tstl transpiles this to #array.
     * e.g.
     * ts              lua (via tstl)
     * array.length    #array
     */
    length: number;
}

/**
 * Transpiles to the same thing in Lua.
 */
interface Boolean {}

/**
 * tstl attempts to keep Functions functionally the same.
 */
interface Function {}

/**
 * Varargs in lua "..."
 */
interface IArguments {}

/**
 * Transpiles to the same thing in Lua.
 */
interface Number {}

/**
 * Becomes a table in Lua.
 */
interface Object {}

/**
 * Literal regular expressions are NOT SUPPORTED
 */
interface RegExp {}

/**
 * Transpiles to a literal string in Lua.
 */
interface String {}
