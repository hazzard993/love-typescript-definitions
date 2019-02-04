interface Function {
    /**
     * The apply() method calls a function with a given this value, and arguments provided as an array (or an array-like object).
     * @param thisArg Optional. The value of this provided for the call to func. Note that this may not be the actual value seen by the method: if the method is a function in non-strict mode code, null and undefined will be replaced with the global object, and primitive values will be boxed.
     * @param argsArray Optional. An array-like object, specifying the arguments with which func should be called, or null or undefined if no arguments should be provided to the function. Starting with ECMAScript 5 these arguments can be a generic array-like object instead of an array. See below for browser compatibility information.
     * @returns The result of calling the function with the specified this value and arguments.
     */
    apply(thisArg?: any, argsArray?: any[]): Function;
    
    /**
     * The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.
     * @param thisArg The value to be passed as the this parameter to the target function when the bound function is called. The value is ignored if the bound function is constructed using the new operator. When using bind to create a function(supplied as a callback) inside a setTimeout, any primitive value passed as thisArg is converted to object. If no arguments are provided to bind, the this of the executing scope is treated as the thisArg for the new function.
     * @param args Arguments to prepend to arguments provided to the bound function when invoking the target function.
     * @returns A copy of the given function with the specified this value and initial arguments.
     */
    bind(thisArg: any, ...args: any[]): Function;

    /**
     * The call() method calls a function with a given this value and arguments provided individually.
     * @param thisArg Optional. The value of this provided for the call to a function. Note that this may not be the actual value seen by the method: if the method is a function in non-strict mode, null and undefined will be replaced with the global object and primitive values will be converted to objects.
     * @param args Optional. Arguments for the function.
     * @returns The result of calling the function with the specified this value and arguments.
     */
    call(thisArg?: any, ...args: any[]): Function;
}