/**
 * Drawable text.
 * @link [Text](https://love2d.org/wiki/Text)
 */
declare interface Text extends Drawable {
    /**
     * Adds additional colored text to the Text object at the specified position.
     *
     * @param textstring The text to add to the object.
     * @param x The position of the new text on the x-axis.
     * @param y The position of the new text on the y-axis.
     * @param angle The orientation of the new text in radians.
     * @param sx Scale factor on the x-axis.
     * @param sy Scale factor on the y-axis.
     * @param ox Origin offset on the x-axis.
     * @param oy Origin offset on the y-axis.
     * @param kx Shearing / skew factor on the x-axis.
     * @param ky Shearing / skew factor on the y-axis.
     * @return index, An index number that can be used with Text:getWidth or Text:getHeight.
     */
    add(textstring: string, x?: number, y?: number, angle?: number, sx?: number, sy?: number, ox?: number, oy?: number, kx?: number, ky?: number): number;

    /**
     * Adds additional colored text to the Text object at the specified position.
     *
     * @param coloredtext A table containing colors and strings to use as the new text, in the form of { color1, string1, color2, string2, ... }.
     * @param x The position of the new text on the x-axis.
     * @param y The position of the new text on the y-axis.
     * @param angle The orientation of the new text in radians.
     * @param sx Scale factor on the x-axis.
     * @param sy Scale factor on the y-axis.
     * @param ox Origin offset on the x-axis.
     * @param oy Origin offset on the y-axis.
     * @param kx Shearing / skew factor on the x-axis.
     * @param ky Shearing / skew factor on the y-axis.
     * @return index, An index number that can be used with Text:getWidth or Text:getHeight.
     */
    add(coloredtext: Array<[number, number, number, number] | string>, x?: number, y?: number, angle?: number, sx?: number, sy?: number, ox?: number, oy?: number, kx?: number, ky?: number): number;

    /**
     * Adds additional formatted / colored text to the Text object at the specified
     * position.
     *
     * @param textstring The text to add to the object.
     * @param wraplimit The maximum width in pixels of the text before it gets automatically wrapped to a new line.
     * @param align The alignment of the text.
     * @param x The position of the new text on the x-axis.
     * @param y The position of the new text on the y-axis.
     * @param angle The orientation of the object in radians.
     * @param sx Scale factor on the x-axis.
     * @param sy Scale factor on the y-axis.
     * @param ox Origin offset on the x-axis.
     * @param oy Origin offset on the y-axis.
     * @param kx Shearing / skew factor on the x-axis.
     * @param ky Shearing / skew factor on the y-axis.
     * @return index, An index number that can be used with Text:getWidth or Text:getHeight.
     */
    addf(textstring: string, wraplimit: number, align: AlignMode, x: number, y: number, angle?: number, sx?: number, sy?: number, ox?: number, oy?: number, kx?: number, ky?: number): number;

    /**
     * Adds additional formatted / colored text to the Text object at the specified
     * position.
     *
     * @param coloredtext A table containing colors and strings to use as the new text, in the form of { color1, string1, color2, string2, ... }.
     * @param wraplimit The maximum width in pixels of the text before it gets automatically wrapped to a new line.
     * @param align The alignment of the text.
     * @param x The position of the new text on the x-axis.
     * @param y The position of the new text on the y-axis.
     * @param angle The orientation of the object in radians.
     * @param sx Scale factor on the x-axis.
     * @param sy Scale factor on the y-axis.
     * @param ox Origin offset on the x-axis.
     * @param oy Origin offset on the y-axis.
     * @param kx Shearing / skew factor on the x-axis.
     * @param ky Shearing / skew factor on the y-axis.
     * @return index, An index number that can be used with Text:getWidth or Text:getHeight.
     */
    addf(coloredtext: Array<[number, number, number, number] | string>, wraplimit: number, align: AlignMode, x: number, y: number, angle?: number, sx?: number, sy?: number, ox?: number, oy?: number, kx?: number, ky?: number): number;

    /**
     * Clears the contents of the Text object.
     *
     */
    clear(): void;

    /**
     * Gets the width and height of the text in pixels.
     *
     * @return width, The width of the text. If multiple sub-strings have been added with Text:add, the width of the last sub-string is returned.
     * @return height, The height of the text. If multiple sub-strings have been added with Text:add, the height of the last sub-string is returned.
     * @tupleReturn
     */
    getDimensions(): [number, number];

    /**
     * Gets the width and height of the text in pixels.
     *
     * @param index An index number returned by Text:add or Text:addf.
     * @return width, The width of the sub-string (before scaling and other transformations).
     * @return height, The height of the sub-string (before scaling and other transformations).
     * @tupleReturn
     */
    getDimensions(index: number): [number, number];

    /**
     * Gets the Font used with the Text object.
     *
     * @return font, The font used with this Text object.
     */
    getFont(): Font;

    /**
     * Gets the height of the text in pixels.
     *
     * @return height, The height of the text. If multiple sub-strings have been added with Text:add, the height of the last sub-string is returned.
     */
    getHeight(): number;

    /**
     * Gets the height of the text in pixels.
     *
     * @param index An index number returned by Text:add or Text:addf.
     * @return height, The height of the sub-string (before scaling and other transformations).
     */
    getHeight(index: number): number;

    /**
     * Gets the width of the text in pixels.
     *
     * @return width, The width of the text. If multiple sub-strings have been added with Text:add, the width of the last sub-string is returned.
     */
    getWidth(): number;

    /**
     * Gets the width of the text in pixels.
     *
     * @param index An index number returned by Text:add or Text:addf.
     * @return width, The width of the sub-string (before scaling and other transformations).
     */
    getWidth(index: number): number;

    /**
     * Replaces the contents of the Text object with a new unformatted string.
     *
     * @param textstring The new string of text to use.
     */
    set(textstring: string): void;

    /**
     * Replaces the contents of the Text object with a new unformatted string.
     *
     * @param coloredtext A table containing colors and strings to use as the new text, in the form of { color1, string1, color2, string2, ... }.
     */
    set(coloredtext: Array<[number, number, number, number] | string>): void;

    /**
     * Replaces the contents of the Text object with a new unformatted string.
     *
     */
    set(): void;

    /**
     * Replaces the contents of the Text object with a new formatted string.
     *
     * @param textstring The new string of text to use.
     * @param wraplimit The maximum width in pixels of the text before it gets automatically wrapped to a new line.
     * @param align The alignment of the text.
     */
    setf(textstring: string, wraplimit: number, align: AlignMode): void;

    /**
     * Replaces the contents of the Text object with a new formatted string.
     *
     * @param coloredtext A table containing colors and strings to use as the new text, in the form of { color1, string1, color2, string2, ... }.
     * @param wraplimit The maximum width in pixels of the text before it gets automatically wrapped to a new line.
     * @param align The alignment of the text.
     */
    setf(coloredtext: Array<[number, number, number, number] | string>, wraplimit: number, align: AlignMode): void;

    /**
     * Replaces the contents of the Text object with a new formatted string.
     *
     */
    setf(): void;

    /**
     * Replaces the Font used with the text.
     *
     * @param font The new font to use with this Text object.
     */
    setFont(font: Font): void;

}
