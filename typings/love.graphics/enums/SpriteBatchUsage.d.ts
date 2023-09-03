declare module "love.graphics" {
  /**
   * Usage hints for SpriteBatches and Meshes to optimize data storage and access.
   * @link [SpriteBatchUsage](https://love2d.org/wiki/SpriteBatchUsage)
   */
  type SpriteBatchUsage = "dynamic" | "static" | "stream";
}
