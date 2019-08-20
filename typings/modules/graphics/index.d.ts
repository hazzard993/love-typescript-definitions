import "./enums";
import "./functions";
import "./structs";
import "./types";

/**
 * The primary responsibility for the love.graphics module is the drawing of
 * lines, shapes, text, Images and other Drawable objects onto the screen. Its
 * secondary responsibilities include loading external files (including Images and
 * Fonts) into memory, creating specialized objects (such as ParticleSystems or
 * Canvases) and managing screen geometry.
 *
 * LÖVE's coordinate system is rooted in the upper-left corner of the screen,
 * which is at location (0, 0). The x axis is horizontal: larger values are
 * further to the right. The y axis is vertical: larger values are further towards
 * the bottom.
 *
 * In many cases, you draw images or shapes in terms of their upper-left corner.
 *
 * Many of the functions are used to manipulate the graphics coordinate system,
 * which is essentially the way coordinates are mapped to the display. You can
 * change the position, scale, and even rotation in this way.
 * @noSelf
 * @noResolution
 * @link [love.graphics](https://love2d.org/wiki/love.graphics)
 */
declare module "love.graphics";
