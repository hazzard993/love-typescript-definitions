/**
 * A tuple return function utility type.
 *
 * @typeparam P The parameters of the function.
 * @typeparam R The return values of the function.
 * @tupleReturn
 */
declare type TupleReturnFunction<P extends any[], R extends any[]> = (this: void, ...params: P) => R;

/**
 * Workaround until https://github.com/Microsoft/TypeScript/issues/26113 is resolved.
 */
declare type TupleReturnFunctionOneParameter<F extends any, P extends any[], R extends any[]> = (this: void, firstParameter: F, ...params: P) => R;
