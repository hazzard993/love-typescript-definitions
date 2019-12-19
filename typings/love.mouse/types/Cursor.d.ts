declare module "love.mouse" {
    import { LoveObject } from "love";

    /**
     * @link [Cursor](https://love2d.org/wiki/Cursor)
     */
    export interface Cursor extends LoveObject<"Cursor"> {
        /**
         * Gets the type of the Cursor.
         *
         * @return cursortype, The type of the Cursor.
         * @link [Cursor:getType](https://love2d.org/wiki/Cursor:getType)
         */
        getType(): CursorType;
    }
}
