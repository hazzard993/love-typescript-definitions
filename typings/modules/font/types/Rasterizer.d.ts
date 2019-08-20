declare module "love.font" {
    import { LoveObject } from "love";

    /**
     * @link [Rasterizer](https://love2d.org/wiki/Rasterizer)
     */
    export interface Rasterizer extends LoveObject<"Rasterizer"> {
        /**
         * @todo This function is undocumented on the wiki
         */
        getAdvance: Function;

        /**
         * @todo This function is undocumented on the wiki
         */
        getAscent: Function;

        /**
         * @todo This function is undocumented on the wiki
         */
        getDescent: Function;

        /**
         * @todo This function is undocumented on the wiki
         */
        getGlyphCount: Function;

        /**
         * @todo This function is undocumented on the wiki
         */
        getGlyphData: Function;

        /**
         * @link [Rasterizer:getHeight](https://love2d.org/wiki/Rasterizer:getHeight)
         */
        getHeight(): number;

        /**
         * @todo This function is undocumented on the wiki
         */
        getLineHeight: Function;

        /**
         * @todo This function is undocumented on the wiki
         */
        hasGlyphs: Function;
    }
}
