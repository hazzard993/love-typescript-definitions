declare module "love.graphics" {
  import { Type } from "love";

  /**
   * A Shader is used for advanced hardware-accelerated pixel or vertex manipulation.
   * @typeparam U An object that contains all uniform variables within this shader associated with a value that can be provided to it.
   * @link [Shader](https://love2d.org/wiki/Shader)
   */
  interface Shader<
    U extends { [key: string]: any } | undefined = undefined,
  > extends Type<"Shader"> {
    /**
     * Returns any warning and error messages from compiling the shader code. This can
     * be used for debugging your shaders if there's anything the graphics hardware
     * doesn't like.
     *
     * @return warnings, Warning messages (if any).
     * @link [Shader:getWarnings](https://love2d.org/wiki/Shader:getWarnings)
     */
    getWarnings(): string;

    /**
     * Gets whether a uniform / extern variable exists in the Shader.
     *
     * If a graphics driver's shader compiler determines that a uniform / extern
     * variable doesn't affect the final output of the shader, it may optimize the
     * variable out. This function will return false in that case.
     *
     * @param name The name of the uniform variable.
     * @return hasuniform, Whether the uniform exists in the shader and affects its final output.
     * @link [Shader:hasUniform](https://love2d.org/wiki/Shader:hasUniform)
     */
    hasUniform(name: U extends undefined ? string : keyof U): boolean;

    /**
     * Sends one or more values to a special (uniform) variable inside the shader.
     *
     * Uniform variables have to be marked using the _uniform_ or _extern_ keyword.
     *
     * @param name The name of the uniform / extern variable to send the value(s) to.
     * @param number Number to send to store in the uniform variable.
     * @param ... Additional numbers to send if the uniform variable is an array.
     * @link [Shader:send](https://love2d.org/wiki/Shader:send)
     */
    send<N extends keyof U>(
      name: U extends undefined ? string : N,
      ...values: U extends undefined ? Array<any> : U[N]
    ): void;

    /**
     * Sends one or more colors to a special (extern / uniform) vec3 or vec4 variable
     * inside the shader. The color components must be in the range of [0, 255],
     * unlike Shader:send. The colors are gamma-corrected if global gamma-correction
     * is enabled.
     *
     * @param name The name of the color extern variable to send to in the shader.
     * @param colors A table with `[red, green, blue, and optional alpha color]` components in the range of `[0, 1]` to send to the extern as a vector.
     * @link [Shader:sendColor](https://love2d.org/wiki/Shader:sendColor)
     */
    sendColor<N extends keyof U>(
      name: U extends undefined ? string : N,
      ...colors: Array<[number, number, number, number?]>
    ): void;
  }
}
