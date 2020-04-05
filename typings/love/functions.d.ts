/** @noSelf */
declare module "love" {
    /**
     * Gets the current running version of LÖVE.
     *
     * ```ts
     * const [major, minor, revision, codename] = love.getVersion();
     * ```
     *
     * [ref]: https://love2d.org/wiki/love.getVersion
     *
     * [1]: https://love2d.org/wiki/Config_Files#version
     * @returns The major, minor, revision and codename respectively.
     * @link [love.getVersion][ref]
     * @link [Version Warnings][1]
     * @tupleReturn
     */
    export function getVersion(): [number, number, number, string];

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
    export function setDeprecationOutput(enable: boolean): void;

    /**
     * Gets whatever the version is compatible with current running version of
     * LÖVE.
     *
     * [ref]: https://love2d.org/wiki/love.isVersionCompatible
     * @link [love.isVersionCompatible][ref]
     * @returns True if the current version of LÖVE is compatible.
     */
    export function isVersionCompatible(version: Version): boolean;
    export function isVersionCompatible(major: number, minor: number, revision: number): boolean;

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
    export function hasDeprecationOutput(): boolean;
}
