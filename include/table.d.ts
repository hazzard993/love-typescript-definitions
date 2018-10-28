// https://www.lua.org/manual/5.3/manual.html#6.6

/**
 * This library provides generic functions for table manipulation. It provides
 * all its functions inside the table table.
 * 
 * Remember that, whenever an operation needs the length of a table, all caveats
 * about the length operator apply (see §3.4.7). All functions ignore non-numeric
 * keys in the tables given as arguments.
 */
declare namespace table {
  /**
   * Given a list where all elements are strings or numbers, returns the string list
   * [i]..sep..list[i+1] ··· sep..list[j]. The default value for sep is the empty
   * string, the default for i is 1, and the default for j is #list. If i is
   * greater than j, returns the empty string.
   */
  function concat(list: (string | number)[], sep?: string, i?: number, j?: number): string;

  /**
   * Inserts element value at position pos in list, shifting up the elements
   * list[pos], list[pos+1], ···, list[#list]. The default value for pos is
   * #list+1, so that a call table.insert(t,x) inserts x at the end of list t.
   */
  function insert<T>(list: T[], value: T): void;
  function insert<T>(list: T[], pos: number, value: T): void;

  /**
   * Removes from list the element at position pos, returning the value of the
   * removed element. When pos is an integer between 1 and #list, it shifts down
   * the elements list[pos+1], list[pos+2], ···, list[#list] and erases element
   * list[#list]; The index pos can also be 0 when #list is 0, or #list + 1; in
   * those cases, the function erases the element list[pos].
   * 
   * The default value for pos is #list, so that a call table.remove(l) removes the
   * last element of list l.
   */
  function remove(list: any[], pos?: number): any[];

  /**
   * Sorts list elements in a given order, in-place, from list[1] to list[#list].
   * If comp is given, then it must be a function that receives two list elements
   * and returns true when the first element must come before the second in the
   * final order (so that, after the sort, i < j implies not comp(list[j],
   * list[i])). If comp is not given, then the standard Lua operator < is used
   * instead.
   * 
   * Note that the comp function must define a strict partial order over the
   * elements in the list; that is, it must be asymmetric and transitive.
   * Otherwise, no valid sort may be possible.
   * 
   * The sort algorithm is not stable: elements considered equal by the given order
   * may have their relative positions changed by the sort.
   */
  function sort(list: any[], comp?: (a: any, b: any) => boolean): any[];


}

/**
 * Returns the elements from the given list. This function is equivalent to
 *
 * `return list[i], list[i+1], ···, list[j]`
 *
 * By default, i is 1 and j is #list.
 */
/** !TupleReturn */
declare function unpack(list: any[], i?: number, j?: number): any[];
