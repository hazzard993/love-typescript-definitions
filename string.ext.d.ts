interface String {
    /**
     * Replaces all instances of substr with newSubstr.
     * @param substr The string to replace.
     * @param newSubstr The string to use in replacement.
     * @returns The string with the replaced entries.
     */
    replace(substr: string, newSubstr: string): string;

    /**
     * Returns the position of searchValue within the string.
     * Position 0 is the start of the string.
     * @param searchValue A string representing the value to search for. If no string is explicitly provided.
     * @param fromIndex An integer representing the index at which to start the search the default value is 0.
     * @returns The 0-indexed position of searchValue in the string.
     */
    indexOf(searchValue: string, fromIndex?: number): number;

    /**
     * Returns a portion of a string. Cut between the two specified indexes.
     * Both indexes are 0-indexed.
     * @param startIndex The starting position from where to take the substring.
     * @param endIndex The ending position from where to take the substring. The default is string.length.
     * @returns A portion of the string.
     */
    substr(startIndex: number, endIndex?: number): string;

    /**
     * The substring() method returns the part of the string between the start and end indexes, or to the end of the string.
     * The first character's index is 0.
     * @param indexStart The index of the first character to include in the returned substring.
     * @param indexEnd Optional. The index of the first character to exclude from the returned substring.
     * @returns A new string containing the specified part of the given string.
     */
    substring(indexStart: number, indexEnd?: number): string;

    /**
     * Returns the calling string value converted to lower case.
     * This is converted to string.lower in Lua.
     * @returns A new string representing the calling string converted to lower case.
     */
    toLowerCase(): string;

    /**
     * Returns the calling string value converted to upper case.
     * This is converted to string.upper in Lua.
     * @returns A new string representing the calling string converted to upper case.
     */
    toUpperCase(): string;

    /**
     * The split() method splits a String object into an array of strings by separating the string into substrings, using a specified separator string to determine where to make each split.
     * @param separator Specifies the string which denotes the points at which each split should occur. The separator is treated as a string or as a regular expression. If a plain-text separator contains more than one character, that entire string must be found to represent a split point. If separator is omitted or does not occur in str, the array returned contains one element consisting of the entire string. If separator is an empty string, str is converted to an array having one element for each character of str.
     * @param limit Integer specifying a limit on the number of splits to be found. When this parameter is provided, the split() method splits the string at each occurrence of the specified separator but stops when limit entries have been placed into the array. It may still contain fewer entries than limit if the end of the string is reached before the specified limit is reached. The left-over text is not returned in the new array.
     * @returns An Array of strings split at each point where the separator occurs in the given string.
     */
    split(separator?: string, limit?: number): string[];

    /**
     * Returns the character at the given position.
     * @param index The specified position (0-indexed)
     */
    charAt(index: number): string;

    /**
     * The length of the string.
     */
    length: number;
}