// https://www.lua.org/manual/5.3/manual.html#2.4

interface Metatable<T = null> {
  /**
   * the addition (+) operation. If any operand for an addition is not a number
   * (nor a string coercible to a number), Lua will try to call a metamethod. First,
   * Lua will check the first operand (even if it is valid). If that operand does
   * not define a metamethod for __add, then Lua will check the second operand. If
   * Lua can find a metamethod, it calls the metamethod with the two operands as
   * arguments, and the result of the call (adjusted to one value) is the result of
   * the operation. Otherwise, it raises an error.
   */
  __add?(self: any, operand: any): any;

  /**
   * the subtraction (-) operation. Behavior similar to the addition operation.
   */
  __sub?(self: any, operand: any): any;

  /**
   * the multiplication (*) operation. Behavior similar to the addition operation.
   */
  __mul?(self: any, operand: any): any;

  /**
   * the division (/) operation. Behavior similar to the addition operation.
   */
  __div?(self: any, operand: any): any;

  /**
   * the modulo (%) operation. Behavior similar to the addition operation.
   */
  __mod?(self: any, operand: any): any;

  /**
   * the exponentiation (^) operation. Behavior similar to the addition operation.
   */
  __pow?(self: any, operand: any): any;

  /**
   * the negation (unary -) operation. Behavior similar to the addition operation.
   */
  __unm?(self: any, operand: any): any;

  /**
   * the floor division (//) operation. Behavior similar to the addition operation.
   */
  __idiv?(self: any, operand: any): any;

  /**
   * the bitwise AND (&) operation. Behavior similar to the addition operation,
   * except that Lua will try a metamethod if any operand is neither an integer
   * nor a value coercible to an integer (see §3.4.3).
   */
  __band?(self: any, operand: any): any;

  /**
   * the bitwise OR (|) operation. Behavior similar to the bitwise AND operation.
   */
  __bor?(self: any, operand: any): any;

  /**
   * the bitwise exclusive OR (binary ~) operation. Behavior similar to the 
   * bitwise AND operation.
   */
  __bxor?(self: any, operand: any): any;

  /**
   * the bitwise NOT (unary ~) operation. Behavior similar to the bitwise AND operation.
   */
  __bnot?(self: any, operand: any): any;

  /**
   * the bitwise left shift (<<) operation. Behavior similar to the bitwise AND operation.
   */
  __shl?(self: any, operand: any): any;

  /**
   * the bitwise right shift (>>) operation. Behavior similar to the bitwise AND operation.
   */
  __shr?(self: any, operand: any): any;

  /**
   * the concatenation (..) operation. Behavior similar to the addition operation,
   * except that Lua will try a metamethod if any operand is neither a string nor
   * a number (which is always coercible to a string).
   */
  __concat?(self: any, operand: any): any;

  /**
   * the length (#) operation. If the object is not a string, Lua will try its
   * metamethod. If there is a metamethod, Lua calls it with the object as
   * argument, and the result of the call (always adjusted to one value) is the
   * result of the operation. If there is no metamethod but the object is a
   * table, then Lua uses the table length operation (see §3.4.7). Otherwise,
   * Lua raises an error.
   */
  __len?(self: any): any;

  /**
   * the equal (==) operation. Behavior similar to the addition operation,
   * except that Lua will try a metamethod only when the values being compared
   * are either both tables or both full userdata and they are not primitively
   * equal. The result of the call is always converted to a boolean.
   */
  __eq?(self: any, operand: any): boolean;

  /**
   * the less than (<) operation. Behavior similar to the addition operation,
   * except that Lua will try a metamethod only when the values being compared
   * are neither both numbers nor both strings. The result of the call is always
   * converted to a boolean.
   */
  __lt?(self: any, operand: any): boolean;

  /**
   * the less equal (<=) operation. Unlike other operations, the less-equal
   * operation can use two different events. First, Lua looks for the __le
   * metamethod in both operands, like in the less than operation. If it cannot
   * find such a metamethod, then it will try the __lt metamethod, assuming that
   * a <= b is equivalent to not (b < a). As with the other comparison operators,
   * the result is always a boolean. (This use of the __lt event can be removed
   * in future versions; it is also slower than a real __le metamethod.)
   */
  __le?(self: any, operand: any): boolean;

  /**
   * The indexing access table[key]. This event happens when table is not a
   * table or when key is not present in table. The metamethod is looked up in table.
   *
   * Despite the name, the metamethod for this event can be either a function
   * or a table. If it is a function, it is called with table and key as
   * arguments, and the result of the call (adjusted to one value) is the
   * result of the operation. If it is a table, the final result is the result
   * of indexing this table with key. (This indexing is regular, not raw, and
   * therefore can trigger another metamethod.)
   */
  __index?: T | ((self: any, key: any, value: any) => any);

  /**
   * The indexing assignment table[key] = value. Like the index event, this event
   * happens when table is not a table or when key is not present in table. The
   * metamethod is looked up in table.
   * 
   * Like with indexing, the metamethod for this event can be either a function or
   * a table. If it is a function, it is called with table, key, and value as
   * arguments. If it is a table, Lua does an indexing assignment to this table
   * with the same key and value. (This assignment is regular, not raw, and
   * therefore can trigger another metamethod.)
   * 
   * Whenever there is a __newindex metamethod, Lua does not perform the primitive
   * assignment. (If necessary, the metamethod itself can call rawset to do the
   * assignment.)
   */
  __newindex?: table | ((self: any, key: any, value: any) => void);

  /**
   * The call operation func(args). This event happens when Lua tries to call a
   * non-function value (that is, func is not a function). The metamethod is looked
   * up in func. If present, the metamethod is called with func as its first
   * argument, followed by the arguments of the original call (args). All results
   * of the call are the result of the operation. (This is the only metamethod that
   * allows multiple results.)
   */
  __call?(self: any, ...args: any[]): any;
}
