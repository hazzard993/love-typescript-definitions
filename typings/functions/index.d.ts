declare module "love" {
    /**
     * Gets the current running version of LÖVE.
     * ```ts
     * let [major, minor, revision, codename] = love.getVersion();
     * ```
     * @return major, The major version of LÖVE, i.e. 0 for version 0.9.1.
     * @return minor, The minor version of LÖVE, i.e. 9 for version 0.9.1.
     * @return revision, The revision version of LÖVE, i.e. 1 for version 0.9.1.
     * @return codename, The codename of the current version, i.e. "Baby Inspector" for version 0.9.1.
     * @link [love.getVersion](https://love2d.org/wiki/love.getVersion)
     * @link [Version Warnings](https://love2d.org/wiki/Config_Files#version)
     * @tupleReturn
     */
    export function getVersion(): [number, number, number, string];

    /**
     * Sets whether LÖVE displays warnings when using deprecated functionality. It is disabled by default in fused mode, and enabled by default otherwise.
     *
     * When deprecation output is enabled, the first use of a formally deprecated LÖVE API will show a message at the bottom of the screen for a short time, and print the message to the console.
     *
     * @param enable Whether to enable or disable deprecation output.
     * @link [love.setDeprecationOutput](https://love2d.org/wiki/love.setDeprecationOutput)
     */
    export function setDeprecationOutput(enable: boolean): void;

    /**
     * Gets whether LÖVE displays warnings when using deprecated functionality. It is disabled by default in fused mode, and enabled by default otherwise.
     *
     * When deprecation output is enabled, the first use of a formally deprecated LÖVE API will show a message at the bottom of the screen for a short time, and print the message to the console.
     *
     * @return enabled, Whether deprecation output is enabled.
     * @link [love.hasDeprecationOutput](https://love2d.org/wiki/love.hasDeprecationOutput)
     */
    export function hasDeprecationOutput(): boolean;
}
