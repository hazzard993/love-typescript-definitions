declare module "love.graphics" {
  /**
   * Types of particle area spread distribution.
   *
   * | Constant | Description |
   * | :- | :- |
   * | `"uniform"` | Uniform distribution. |
   * | `"normal"` | Normal (gaussian) distribution. |
   * | `"ellipse"` | Uniform distribution in an ellipse. |
   * | `"borderellipse"` | Distribution in an ellipse with particles spawning at the edges of the ellipse. |
   * | `"borderrectangle"` | Distribution in a rectangle with particles spawning at the edges of the rectangle. |
   * | `"none"` | No distribution - area spread is disabled. |
   *
   * @link [AreaSpreadDistribution](https://love2d.org/wiki/AreaSpreadDistribution)
   */
  type AreaSpreadDistribution =
    | "uniform"
    | "normal"
    | "ellipse"
    | "borderellipse"
    | "borderrectangle"
    | "none";
}
