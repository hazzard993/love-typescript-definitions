/**
 * @link [Data](https://love2d.org/wiki/Data)
 */
declare interface Data extends Object {

    /**
     * Creates a new copy of the Data object.
     * @link [Data:clone](https://love2d.org/wiki/Data:clone)
     */
    clone(): Data;

    /**
     * Gets a pointer to the Data.
     *
     * @return {LightUserData} pointer, A raw pointer to the Data.
     */
    getPointer(): LightUserData;

    /**
     * Gets the size of the Data.
     *
     * @return {number} size, The size of the Data in bytes.
     */
    getSize(): number;

    /**
     * Gets the full Data as a string.
     *
     * @return {string} data, The raw data.
     */
    getString(): string;

}
