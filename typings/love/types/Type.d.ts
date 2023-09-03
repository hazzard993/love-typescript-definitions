declare module "love" {
  /**
   * The superclass of all LÖVE types.
   *
   * Use `typeOf` to determine what subtype that is.
   * @link [Object](https://love2d.org/wiki/Object)
   */
  interface Type<T extends keyof Types = keyof Types> {
    /** @ignore */
    " __opaque": never;

    /**
     * Destroys the object's Lua reference.
     *
     * The object will be completely deleted if it's not referenced by any other LÖVE object or thread.
     * @return success, True if the object was released by this call, false if it had been previously released.
     * @link [Object:release](https://love2d.org/wiki/Object:release)
     */
    release(): this is never;

    /**
     * Gets the type of the object as a string.
     *
     * @return type, The type as a string.
     * @link [Object:type](https://love2d.org/wiki/Object:type)
     */
    type(): T;

    /**
     * Checks whether an object is of a certain type. If the object has the type with
     * the specified name in its hierarchy, this function will return true.
     *
     * @param name The name of the type to check for.
     * @return b, True if the object is of the specified type, false otherwise.
     * @link [Object:typeOf](https://love2d.org/wiki/Object:typeOf)
     */
    typeOf<T extends keyof Types>(name: T): this is Types[T];
  }
}
