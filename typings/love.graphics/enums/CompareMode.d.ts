declare module "love.graphics" {
  /**
   * Different types of per-pixel stencil test and depth test comparisons.
   *
   * The pixels of an object will be drawn if the comparison succeeds, for
   * each pixel that the object touches.
   *
   * *equal*
   * - stencil tests: the stencil value of the pixel must be equal to the
   *   supplied value.
   * - depth tests: the depth value of the drawn object at that pixel must be
   *   equal to the existing depth value of that pixel.
   *
   * *notequal*
   * - stencil tests: the stencil value of the pixel must not be equal to the
   *   supplied value.
   * - depth tests: the depth value of the drawn object at that pixel must not
   *   be equal to the existing depth value of that pixel.
   *
   * *less*
   * - stencil tests: the stencil value of the pixel must be less than the
   *   supplied value.
   * - depth tests: the depth value of the drawn object at that pixel must be
   *   less than the existing depth value of that pixel.
   *
   * *lequal*
   * - stencil tests: the stencil value of the pixel must be less than or
   *   equal to the supplied value.
   * - depth tests: the depth value of the drawn object at that pixel must be
   *   less than or equal to the existing depth value of that pixel.
   *
   * *gequal*
   * - stencil tests: the stencil value of the pixel must be greater than or
   *   equal to the supplied value.
   * - depth tests: the depth value of the drawn object at that pixel must be
   *   greater than or equal to the existing depth value of that pixel.
   *
   * *greater*
   * - stencil tests: the stencil value of the pixel must be greater than the
   *   supplied value.
   * - depth tests: the depth value of the drawn object at that pixel must be
   *   greater than the existing depth value of that pixel.
   *
   * *never*
   * - Objects will never be drawn.
   *
   * *always*
   * - Objects will always be drawn. Effectively disables the depth or stencil
   *   test.
   *
   * @link [CompareMode](https://love2d.org/wiki/CompareMode)
   * @since 0.10.0
   */
  type CompareMode =
    | "equal"
    | "notequal"
    | "less"
    | "lequal"
    | "gequal"
    | "greater"
    | "never"
    | "always";
}
