/**
 * The superclass of all LÖVE types.
 * @link [Object](https://love2d.org/wiki/Object)
 */
interface LoveObject {

    /**
     * Destroys the object's Lua reference.
     *
     * The object will be completely deleted if it's not referenced by any other LÖVE object or thread.
     * @link [Object:release](https://love2d.org/wiki/Object:release)
     */
    release(): boolean;

    /**
     * Gets the type of the object as a string.
     *
     * @return type, The type as a string.
     * @link [Object:type](https://love2d.org/wiki/Object:type)
     */
    type(): string;

    /**
     * Checks whether an object is of a certain type. If the object has the type with
     * the specified name in its hierarchy, this function will return true.
     *
     * @param name The name of the type to check for.
     * @return b, True if the object is of the specified type, false otherwise.
     * @link [Object:typeOf](https://love2d.org/wiki/Object:typeOf)
     */
    typeOf(name: string): boolean;

}
