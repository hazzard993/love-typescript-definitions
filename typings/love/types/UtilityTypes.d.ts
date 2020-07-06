declare module "love" {
    /**
     * Allows a method that returns an iterable result to be used in a for..of statement.
     *
     * @luaIterator
     */
    export type LuaIterator<T> = T[];
}
