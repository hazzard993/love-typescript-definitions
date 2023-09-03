declare module "love.physics" {
  /**
   * Different types of joints.
   * @link [JointType](https://love2d.org/wiki/JointType)
   */
  type JointType =
    | "distance"
    | "gear"
    | "mouse"
    | "prismatic"
    | "pulley"
    | "revolute"
    | "friction"
    | "weld"
    | "rope";
}
