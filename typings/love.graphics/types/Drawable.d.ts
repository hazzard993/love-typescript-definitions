declare module "love.graphics" {
  import { Type } from "love";
  type DrawableTypes =
    | "Mesh"
    | "ParticleSystem"
    | "SpriteBatch"
    | "Text"
    | "Texture"
    | "Video"
    | "Image"
    | "Canvas";

  /**
   * Superclass for all things that can be drawn on screen. This is an abstract type that can't be created directly.
   *
   * @link [Drawable](https://love2d.org/wiki/Drawable)
   */
  interface Drawable<T extends DrawableTypes = DrawableTypes> extends Type<T> {
    _drawable: never;
  }
}
