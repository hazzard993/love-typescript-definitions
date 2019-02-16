// Contains special methods for arrays
// This is for the special translation behaviour within TypescriptToLua 0.12.1

interface Array<T> {

    /**
     * Combines two or more arrays.
     * Uses a LuaLib to make this work in Lua.
     * @param items Additional items to add to the end of the array.
     */
    concat(...items: (T | Array<T>)[]): T[];

    /**
     * Appends new elements to an array, and returns the new length of the array.
     * Uses a LuaLib to make this work in Lua.
     * @param items New elements of the Array.
     */
    push(...items: T[]): number;

    /**
     * Reverses the elements in an Array.
     * Uses a LuaLib to make this work in Lua.
     */
    reverse(): T[];

    /**
     * Removes the first element from an array and returns it.
     * Uses a LuaLib to make this work in Lua.
     */
    shift(): T | undefined;

    /**
     * Inserts new elements at the start of an array.
     * Uses a LuaLib to make this work in Lua.
     * @param items  Elements to insert at the start of the Array.
     */
    unshift(...items: T[]): number;

    /**
     * Sorts an array.
     * Uses a LuaLib to make this work in Lua.
     * @param compareFn The name of the function used to determine the order of the elements. If omitted, the elements are sorted in ascending, ASCII character order.
     */
    sort(compareFn?: (a: T, b: T) => number): this;

    /**
     * Removes the last element from an array and returns it.
     * Transpiles to table.remove()
     */
    pop(): T | undefined;

    /**
     * Performs the specified action for each element in an array.
     * Uses a LuaLib to make this work in Lua.
     * @param callbackfn  A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.
     * @param thisArg  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
     */
    forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;

    /**
     * Returns the index of the first occurrence of a value in an array.
     * Uses a LuaLib to make this work in Lua.
     * @param searchElement The value to locate in the array.
     * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.
     */
    indexOf(searchElement: T, fromIndex?: number): number;

    /**
     * Calls a defined callback function on each element of an array, and returns an array that contains the results.
     * Uses a LuaLib to make this work in Lua.
     * @param callbackfn A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
     * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
     */
    map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];

    /**
     * Returns the elements of an array that meet the condition specified in a callback function.
     * Uses a LuaLib to make this work in Lua.
     * @param callbackfn A function that accepts up to three arguments. The filter method calls the callbackfn function one time for each element in the array.
     * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
     */
    filter<S extends T>(callbackfn: (value: T, index: number, array: T[]) => value is S, thisArg?: any): S[];

    /**
     * Returns the elements of an array that meet the condition specified in a callback function.
     * Uses a LuaLib to make this work in Lua.
     * @param callbackfn A function that accepts up to three arguments. The filter method calls the callbackfn function one time for each element in the array.
     * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
     */
    filter(callbackfn: (value: T, index: number, array: T[]) => any, thisArg?: any): T[];

    /**
     * Determines whether the specified callback function returns true for any element of an array.
     * Uses a LuaLib to make this work in Lua.
     * @param callbackfn A function that accepts up to three arguments. The some method calls the callbackfn function for each element in array1 until the callbackfn returns true, or until the end of the array.
     * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
     */
    some(callbackfn: (value: T, index: number, array: T[]) => boolean, thisArg?: any): boolean;

    /**
     * Determines whether all the members of an array satisfy the specified test.
     * Uses a LuaLib to make this work in Lua.
     * @param callbackfn A function that accepts up to three arguments. The every method calls the callbackfn function for each element in array1 until the callbackfn returns false, or until the end of the array.
     * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
     */
    every(callbackfn: (value: T, index: number, array: T[]) => boolean, thisArg?: any): boolean;

    /**
     * Returns a section of an array.
     * Uses a LuaLib to make this work in Lua.
     * @param start The beginning of the specified portion of the array.
     * @param end The end of the specified portion of the array.
     */
    slice(start?: number, end?: number): T[];

    /**
     * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
     * Uses a LuaLib to make this work in Lua.
     * @param start The zero-based location in the array from which to start removing elements.
     * @param deleteCount The number of elements to remove.
     */
    splice(start: number, deleteCount?: number): T[];

    /**
     * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
     * Uses a LuaLib to make this work in Lua.
     * @param start The zero-based location in the array from which to start removing elements.
     * @param deleteCount The number of elements to remove.
     * @param items Elements to insert into the array in place of the deleted elements.
     */
    splice(start: number, deleteCount: number, ...items: T[]): T[];

    /**
     * Adds all the elements of an array separated by the specified separator string.
     * Transpiles to table.concat
     * @param separator A string used to separate one element of an array from the next in the resulting String. If omitted, the array elements are separated with a comma.
     */
    join(separator?: string): string;

}
