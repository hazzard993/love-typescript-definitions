declare module "love.math" {
  import { Type } from "love";
  import { MatrixLayout } from "love.graphics";

  /**
   * Object containing a coordinate system transformation.
   * @link [Transform](https://love2d.org/wiki/Transform)
   */
  interface Transform extends Type<"Transform"> {
    /**
     * Applies the given other Transform object to this one.
     *
     * @param other The other Transform object to apply to this Transform.
     * @return transform, The Transform object the method was called on. Allows easily chaining Transform methods.
     * @link [Transform:apply](https://love2d.org/wiki/Transform:apply)
     */
    apply(other: Transform): Transform;

    /**
     * Creates a new copy of this Transform.
     *
     * @return clone, The copy of this Transform.
     * @link [Transform:clone](https://love2d.org/wiki/Transform:clone)
     */
    clone(): Transform;

    /**
     * Gets the internal 4x4 transformation matrix stored by this Transform. The
     * matrix is returned in row-major order.
     *
     * @return e1_1, The first column of the first row of the matrix.
     * @return e1_2, The second column of the first row of the matrix.
     * @return ..., Additional matrix elements.
     * @return e4_4, The fourth column of the fourth row of the matrix.
     * @link [Transform:getMatrix](https://love2d.org/wiki/Transform:getMatrix)
     */
    getMatrix(): LuaMultiReturn<number[]>;

    /**
     * Creates a new Transform containing the inverse of this Transform.
     *
     * @return inverse, A new Transform object representing the inverse of this Transform's matrix.
     * @link [Transform:inverse](https://love2d.org/wiki/Transform:inverse)
     */
    inverse(): Transform;

    /**
     * Applies the reverse of the Transform object's transformation to the given 2D
     * position.
     *
     * This effectively converts the given position from the local coordinate space of
     * the Transform into global coordinates.
     *
     * One use of this method can be to convert a screen-space mouse position into
     * global world coordinates, if the given Transform has transformations applied
     * that are used for a camera system in-game.
     *
     * @param localX The x component of the position with the transform applied.
     * @param localY The y component of the position with the transform applied.
     * @return globalX, The x component of the position in global coordinates.
     * @return globalY, The y component of the position in global coordinates.
     * @link [Transform:inverseTransformPoint](https://love2d.org/wiki/Transform:inverseTransformPoint)
     */
    inverseTransformPoint(
      localX: number,
      localY: number,
    ): LuaMultiReturn<[globalX: number, globalY: number]>;

    /**
     * Checks whether the Transform is an affine transformation.
     * @return affine, `true` if the transform object is an affine transformation, `false` otherwise.
     * @link [Transform:isAffine2DTransform](https://love2d.org/wiki/Transform:isAffine2DTransform)
     */
    isAffine2DTransform(): boolean;

    /**
     * Resets the Transform to an identity state. All previously applied
     * transformations are erased.
     *
     * @return transform, The Transform object the method was called on. Allows easily chaining Transform methods.
     * @link [Transform:reset](https://love2d.org/wiki/Transform:reset)
     */
    reset(): Transform;

    /**
     * Applies a rotation to the Transform's coordinate system. This method does not
     * reset any previously applied transformations.
     *
     * @param angle The relative angle in radians to rotate this Transform by.
     * @return transform, The Transform object the method was called on. Allows easily chaining Transform methods.
     * @link [Transform:rotate](https://love2d.org/wiki/Transform:rotate)
     */
    rotate(angle: number): Transform;

    /**
     * Scales the Transform's coordinate system. This method does not reset any
     * previously applied transformations.
     *
     * @param sx The relative scale factor along the x-axis.
     * @param sy The relative scale factor along the y-axis.
     * @return transform, The Transform object the method was called on. Allows easily chaining Transform methods.
     * @link [Transform:scale](https://love2d.org/wiki/Transform:scale)
     */
    scale(sx: number, sy: number): Transform;

    /**
     * Directly sets the Transform's internal 4x4 transformation matrix.
     *
     * @param e1_1 The first column of the first row of the matrix.
     * @param e1_2 The second column of the first row of the matrix.
     * @param ... Additional matrix elements.
     * @return transform, The Transform object the method was called on. Allows easily chaining Transform methods.
     * @link [Transform:setMatrix](https://love2d.org/wiki/Transform:setMatrix)
     */
    setMatrix(...rows: Array<number>): Transform;

    /**
     * Directly sets the Transform's internal 4x4 transformation matrix.
     *
     * @param layout How to interpret the matrix element arguments (row-major or column-major).
     * @param e1_1 The first column of the first row of the matrix.
     * @param e1_2 The second column of the first row of the matrix.
     * @param e4_4 The fourth column of the fourth row of the matrix.
     * @return transform, The Transform object the method was called on. Allows easily chaining Transform methods.
     * @link [Transform:setMatrix](https://love2d.org/wiki/Transform:setMatrix)
     */
    setMatrix(layout: MatrixLayout, ...rows: Array<number>): Transform;

    /**
     * Directly sets the Transform's internal 4x4 transformation matrix.
     *
     * @param layout How to interpret the matrix element arguments (row-major or column-major).
     * @param matrix A flat table containing the 16 matrix elements.
     * @return transform, The Transform object the method was called on. Allows easily chaining Transform methods.
     * @link [Transform:setMatrix](https://love2d.org/wiki/Transform:setMatrix)
     */
    setMatrix(layout: MatrixLayout, matrix: Array<number>): Transform;

    /**
     * Resets the Transform to the specified transformation parameters.
     *
     * @param x The position of the Transform on the x-axis.
     * @param y The position of the Transform on the y-axis.
     * @param angle The orientation of the Transform in radians.
     * @param sx Scale factor on the x-axis.
     * @param sy Scale factor on the y-axis.
     * @param ox Origin offset on the x-axis.
     * @param oy Origin offset on the y-axis.
     * @param kx Shearing / skew factor on the x-axis.
     * @param ky Shearing / skew factor on the y-axis.
     * @return transform, The Transform object the method was called on. Allows easily chaining Transform methods.
     * @link [Transform:setTransformation](https://love2d.org/wiki/Transform:setTransformation)
     */
    setTransformation(
      x: number,
      y: number,
      angle?: number,
      sx?: number,
      sy?: number,
      ox?: number,
      oy?: number,
      kx?: number,
      ky?: number,
    ): Transform;

    /**
     * Applies a shear factor (skew) to the Transform's coordinate system. This method
     * does not reset any previously applied transformations.
     *
     * @param kx The shear factor along the x-axis.
     * @param ky The shear factor along the y-axis.
     * @return transform, The Transform object the method was called on. Allows easily chaining Transform methods.
     * @link [Transform:shear](https://love2d.org/wiki/Transform:shear)
     */
    shear(kx: number, ky: number): Transform;

    /**
     * Applies the Transform object's transformation to the given 2D position.
     *
     * This effectively converts the given position from global coordinates into the
     * local coordinate space of the Transform.
     *
     * @param globalX The x component of the position in global coordinates.
     * @param globalY The y component of the position in global coordinates.
     * @return localX, The x component of the position with the transform applied.
     * @return localY, The y component of the position with the transform applied.
     * @link [Transform:transformPoint](https://love2d.org/wiki/Transform:transformPoint)
     */
    transformPoint(
      globalX: number,
      globalY: number,
    ): LuaMultiReturn<[localX: number, localY: number]>;

    /**
     * Applies a translation to the Transform's coordinate system. This method does
     * not reset any previously applied transformations.
     *
     * @param dx The relative translation along the x-axis.
     * @param dy The relative translation along the y-axis.
     * @return transform, The Transform object the method was called on. Allows easily chaining Transform methods.
     * @link [Transform:translate](https://love2d.org/wiki/Transform:translate)
     */
    translate(dx: number, dy: number): Transform;
  }
}
