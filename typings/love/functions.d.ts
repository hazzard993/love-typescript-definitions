/** @noSelf */
declare module "love" {
  /**
   * Gets the current running version of LÖVE.
   *
   * ```ts
   * const [major, minor, revision, codename] = love.getVersion();
   * ```
   *
   * @returns The major, minor, revision and codename respectively.
   * @link [love.getVersion][https://love2d.org/wiki/love.getVersion]
   * @link [Version Warnings][https://love2d.org/wiki/Config_Files#version]
   */
  function getVersion(): LuaMultiReturn<
    [major: number, minor: number, revision: number, codename: string]
  >;

  /**
   * Sets whether LÖVE displays warnings when using deprecated functionality.
   * It is disabled by default in fused mode
   *
   * This is enabled by default.
   *
   * [ref]: https://love2d.org/wiki/love.setDeprecationOutput
   * @param enable Whether to enable or disable deprecation output.
   * @link [love.setDeprecationOutput][ref]
   */
  function setDeprecationOutput(enable: boolean): void;

  /**
   * Gets whatever the version is compatible with current running version of
   * LÖVE.
   *
   * [ref]: https://love2d.org/wiki/love.isVersionCompatible
   * @link [love.isVersionCompatible][ref]
   * @returns True if the current version of LÖVE is compatible.
   */
  function isVersionCompatible(version: Version): boolean;
  function isVersionCompatible(
    major: number,
    minor: number,
    revision: number,
  ): boolean;

  /**
   * Gets whether LÖVE displays warnings when using deprecated functionality.
   * It is disabled by default in fused mode, and enabled by default
   * otherwise.
   *
   * When deprecation output is enabled, the first use of a formally
   * deprecated LÖVE API will show a message at the bottom of the screen for a
   * short time, and print the message to the console.
   *
   * [ref]: https://love2d.org/wiki/love.hasDeprecationOutput
   * @return enabled, Whether deprecation output is enabled.
   * @link [love.hasDeprecationOutput][ref]
   */
  function hasDeprecationOutput(): boolean;
}
