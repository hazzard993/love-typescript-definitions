/**
 * A Shader is used for advanced hardware-accelerated pixel or vertex manipulation.
 * @link [Shader](https://love2d.org/wiki/Shader)
 */
declare interface Shader extends Object {
    /**
     * Gets information about an 'extern' ('uniform') variable in the shader.
     *
     * @param name The name of the extern variable.
     * @return {ShaderVariableType} type, The base type of the variable.
     * @return {number} components, The number of components in the variable (e.g. 2 for a vec2 or mat2.)
     * @return {number} arrayelements, The number of elements in the array if the variable is an array, or 1 if not.
     */
    /** @tupleReturn */
    getExternVariable(name: string): [ShaderVariableType, number, number];

    /**
     * Returns any warning and error messages from compiling the shader code. This can
     * be used for debugging your shaders if there's anything the graphics hardware
     * doesn't like.
     *
     * @return {string} warnings, Warning messages (if any).
     */
    getWarnings(): string;

    /**
     * Gets whether a uniform / extern variable exists in the Shader.
     *
     *
     * If a graphics driver's shader compiler determines that a uniform / extern
     * variable doesn't affect the final output of the shader, it may optimize the
     * variable out. This function will return false in that case.
     *
     * @param name The name of the uniform variable.
     * @return {boolean} hasuniform, Whether the uniform exists in the shader and affects its final output.
     */
    hasUniform(name: string): boolean;

    /**
     * Sends one or more values to a special (uniform) variable inside the shader.
     * Uniform variables have to be marked using the uniform or extern keyword.
     *
     * @param name Name of the number to send to the shader.
     * @param number Number to send to store in the uniform variable.
     * @param ... Additional numbers to send if the uniform variable is an array.
     */
    send(name: string, number: number, ...vararg: Array<number>): void;

    /**
     * Sends one or more values to a special (uniform) variable inside the shader.
     * Uniform variables have to be marked using the uniform or extern keyword.
     *
     * @param name Name of the vector to send to the shader.
     * @param vector Numbers to send to the uniform variable as a vector. The number of elements in the table determines the type of the vector (e.g. two numbers -> vec2). At least two and at most four numbers can be used.
     * @param ... Additional vectors to send if the uniform variable is an array. All vectors need to be of the same size (e.g. only vec3's).
     */
    send(name: string, vector: table, ...vararg: Array<table>): void;

    /**
     * Sends one or more values to a special (uniform) variable inside the shader.
     * Uniform variables have to be marked using the uniform or extern keyword.
     *
     * @param name Name of the matrix to send to the shader.
     * @param matrix 2x2, 3x3, or 4x4 matrix to send to the uniform variable. Using table form: {{a,b,c,d}, {e,f,g,h}, ... }.
     * @param ... Additional matrices of the same type as matrix to store in a uniform array.
     */
    send(name: string, matrix: table, ...vararg: Array<table>): void;

    /**
     * Sends one or more values to a special (uniform) variable inside the shader.
     * Uniform variables have to be marked using the uniform or extern keyword.
     *
     * @param name Name of the Texture to send to the shader.
     * @param texture Texture (Image or Canvas) to send to the uniform variable.
     */
    send(name: string, texture: Texture): void;

    /**
     * Sends one or more values to a special (uniform) variable inside the shader.
     * Uniform variables have to be marked using the uniform or extern keyword.
     *
     * @param name Name of the boolean to send to the shader.
     * @param boolean Boolean to send to store in the uniform variable.
     * @param ... Additional booleans to send if the uniform variable is an array.
     */
    send(name: string, boolean: boolean, ...vararg: Array<boolean>): void;

    /**
     * Sends one or more colors to a special (extern / uniform) vec3 or vec4 variable
     * inside the shader. The color components must be in the range of [0, 255],
     * unlike Shader:send. The colors are gamma-corrected if global gamma-correction
     * is enabled.
     *
     * @param name The name of the color extern variable to send to in the shader.
     * @param color A table with red, green, blue, and optional alpha color components in the range of [0, 255] to send to the extern as a vector.
     * @param ... Additional colors to send in case the extern is an array. All colors need to be of the same size (e.g. only vec3's).
     */
    sendColor(name: string, color: table, ...vararg: Array<table>): void;

}
