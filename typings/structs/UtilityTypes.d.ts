/**
 * Allows a method that returns an iterable result to be used in a for..of statement.
 *
 * @luaIterator
 */
declare interface LuaIterator<T> extends Iterable<T> {}
