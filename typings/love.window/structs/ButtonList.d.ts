declare module "love.window" {
  /**
   * @link [love.window.showMessageBox](https://love2d.org/wiki/love.window.showMessageBox)
   */
  interface ButtonList {
    [key: number]: string;
    enterbutton?: number;
    escapebutton?: number;
  }
}
