declare module "love.graphics" {
  import { Font } from "love.graphics";

  /**
   * Drawable text.
   * @link [Text](https://love2d.org/wiki/Text)
   */
  interface Text extends Drawable {
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
     * @link [Text:add](https://love2d.org/wiki/Text:add)
     * @since 0.10.0
     */
    add(
      textstring: string,
      x?: number,
      y?: number,
      angle?: number,
      sx?: number,
      sy?: number,
      ox?: number,
      oy?: number,
      kx?: number,
      ky?: number,
    ): number;

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
     * @link [Text:add](https://love2d.org/wiki/Text:add)
     * @since 0.10.0
     */
    add(
      coloredtext: ColouredText,
      x?: number,
      y?: number,
      angle?: number,
      sx?: number,
      sy?: number,
      ox?: number,
      oy?: number,
      kx?: number,
      ky?: number,
    ): number;

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
     * @link [Text:addf](https://love2d.org/wiki/Text:addf)
     * @since 0.10.0
     */
    addf(
      textstring: string,
      wraplimit: number,
      align: AlignMode,
      x: number,
      y: number,
      angle?: number,
      sx?: number,
      sy?: number,
      ox?: number,
      oy?: number,
      kx?: number,
      ky?: number,
    ): number;

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
     * @link [Text:addf](https://love2d.org/wiki/Text:addf)
     * @since 0.10.0
     */
    addf(
      coloredtext: ColouredText,
      wraplimit: number,
      align: AlignMode,
      x: number,
      y: number,
      angle?: number,
      sx?: number,
      sy?: number,
      ox?: number,
      oy?: number,
      kx?: number,
      ky?: number,
    ): number;

    /**
     * Clears the contents of the Text object.
     *
     * @link [Text:clear](https://love2d.org/wiki/Text:clear)
     * @since 0.10.0
     */
    clear(): void;

    /**
     * Gets the width and height of the text in pixels.
     *
     * @return width, The width of the text. If multiple sub-strings have been added with Text:add, the width of the last sub-string is returned.
     * @return height, The height of the text. If multiple sub-strings have been added with Text:add, the height of the last sub-string is returned.
     * @link [Text:getDimensions](https://love2d.org/wiki/Text:getDimensions)
     * @since 0.10.1
     */
    getDimensions(): LuaMultiReturn<[width: number, height: number]>;

    /**
     * Gets the width and height of the text in pixels.
     *
     * @param index An index number returned by Text:add or Text:addf.
     * @return width, The width of the sub-string (before scaling and other transformations).
     * @return height, The height of the sub-string (before scaling and other transformations).
     * @link [Text:getDimensions](https://love2d.org/wiki/Text:getDimensions)
     * @since 0.10.1
     */
    getDimensions(
      index: number,
    ): LuaMultiReturn<[width: number, height: number]>;

    /**
     * Gets the Font used with the Text object.
     *
     * @return font, The font used with this Text object.
     * @link [Text:getFont](https://love2d.org/wiki/Text:getFont)
     * @since 0.10.0
     */
    getFont(): Font;

    /**
     * Gets the height of the text in pixels.
     *
     * @return height, The height of the text. If multiple sub-strings have been added with Text:add, the height of the last sub-string is returned.
     * @link [Text:getHeight](https://love2d.org/wiki/Text:getHeight)
     * @since 0.10.0
     */
    getHeight(): number;

    /**
     * Gets the height of the text in pixels.
     *
     * @param index An index number returned by Text:add or Text:addf.
     * @return height, The height of the sub-string (before scaling and other transformations).
     * @link [Text:getHeight](https://love2d.org/wiki/Text:getHeight)
     * @since 0.10.0
     */
    getHeight(index: number): number;

    /**
     * Gets the width of the text in pixels.
     *
     * @return width, The width of the text. If multiple sub-strings have been added with Text:add, the width of the last sub-string is returned.
     * @link [Text:getWidth](https://love2d.org/wiki/Text:getWidth)
     * @since 0.10.0
     */
    getWidth(): number;

    /**
     * Gets the width of the text in pixels.
     *
     * @param index An index number returned by Text:add or Text:addf.
     * @return width, The width of the sub-string (before scaling and other transformations).
     * @link [Text:getWidth](https://love2d.org/wiki/Text:getWidth)
     * @since 0.10.0
     */
    getWidth(index: number): number;

    /**
     * Replaces the contents of the Text object with a new unformatted string.
     *
     * @param textstring The new string of text to use.
     * @link [Text:set](https://love2d.org/wiki/Text:set)
     * @since 0.10.0
     */
    set(textstring: string): void;

    /**
     * Replaces the contents of the Text object with a new unformatted string.
     *
     * @param coloredtext A table containing colors and strings to use as the new text, in the form of { color1, string1, color2, string2, ... }.
     * @link [Text:set](https://love2d.org/wiki/Text:set)
     * @since 0.10.0
     */
    set(coloredtext: ColouredText): void;

    /**
     * Replaces the contents of the Text object with a new unformatted string.
     *
     * @link [Text:set](https://love2d.org/wiki/Text:set)
     * @since 0.10.0
     */
    set(): void;

    /**
     * Replaces the contents of the Text object with a new formatted string.
     *
     * @param textstring The new string of text to use.
     * @param wraplimit The maximum width in pixels of the text before it gets automatically wrapped to a new line.
     * @param align The alignment of the text.
     * @link [Text:setf](https://love2d.org/wiki/Text:setf)
     * @since 0.10.0
     */
    setf(textstring: string, wraplimit: number, align: AlignMode): void;

    /**
     * Replaces the contents of the Text object with a new formatted string.
     *
     * @param coloredtext A table containing colors and strings to use as the new text, in the form of { color1, string1, color2, string2, ... }.
     * @param wraplimit The maximum width in pixels of the text before it gets automatically wrapped to a new line.
     * @param align The alignment of the text.
     * @link [Text:setf](https://love2d.org/wiki/Text:setf)
     * @since 0.10.0
     */
    setf(
      coloredtext: Array<[number, number, number, number] | string>,
      wraplimit: number,
      align: AlignMode,
    ): void;

    /**
     * Replaces the contents of the Text object with a new formatted string.
     *
     * @link [Text:setf](https://love2d.org/wiki/Text:setf)
     * @since 0.10.0
     */
    setf(): void;

    /**
     * Replaces the Font used with the text.
     *
     * @param font The new font to use with this Text object.
     * @link [Text:setFont](https://love2d.org/wiki/Text:setFont)
     * @since 0.10.0
     */
    setFont(font: Font): void;
  }
}
