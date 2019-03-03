/**
 * The superclass of all data.
 * @link [Data](https://love2d.org/wiki/Data)
 */
declare interface Data extends Object {

	/**
	 * Creates a new copy of the Data object.
	 * @return `clone` The new copy.
	 * @link [Data:clone](https://love2d.org/wiki/Data:clone)
	 * @since 11.0
	 */
	clone(): Data;

	/**
	 * Gets a pointer to the Data.
	 * @return `pointer` A raw pointer to the Data.
	 * @link [Data:getPointer](https://love2d.org/wiki/Data:getPointer)
	 */
	getPointer(): LightUserData;

	/**
	 * Gets the size of the Data.
	 * @return `size` The size of the Data in bytes.
	 * @link [Data:getSize](https://love2d.org/wiki/Data:getSize)
	 */
    getSize(): number;

	/**
	 * Gets the full Data as a string.
	 * @return `data` The raw data.
	 * @link [Data:getString](https://love2d.org/wiki/Data:getString)
	 * @since 0.9.0
	 */
    getString(): string;

}
