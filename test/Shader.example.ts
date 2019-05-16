// This Shader has no type information
const unsafeShader = love.graphics.newShader(`
uniform float time;
`);
// These declarations give you the benefit of the doubt in this case.
unsafeShader.hasUniform("time");            // Assuming you know the shader can have a "time" variable
unsafeShader.send("time", 0);               // Assuming this is valid.
unsafeShader.send("color", [0, 1, 2, 3]);   // Still assuming

// This shader has type information about all the uniforms it contains
const saferShader = love.graphics.newShader<{
    /** This uniform must be given a single number */
    time: [number],
    /** This uniform must be given two numbers */
    vars: [number, number],
    /** This uniform must be given an array with two numbers */
    light_pos: [[number, number]],
    /** This uniform must be given four arrays with four numbers */
    colors: [[number, number, number, number], [number, number, number, number], [number, number, number, number], [number, number, number, number]]
}>(`
uniform float time;
uniform float vars[2];
uniform vec2 light_pos;
uniform vec4 colors[4];
`);

// It knows that the variable "time" exists and you're meant to give it a number.
saferShader.hasUniform("time");             // TypeScript knows this variable exists
// saferShader.hasUniform("tIme");          // TypeScript has not been told about this variable. Disallowed
saferShader.send("time", 7);
// saferShader.send("time", 7, 7);          // "time" accepts one value, no more than that
saferShader.send("vars", 0, 1);
saferShader.send("light_pos", [0, 0]);
saferShader.send("colors", [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]);
saferShader.sendColor("colors", [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]);

// Typeguarding possibilities are also available.
// This function will accept a shader which has a "specialTime" uniform variable.
function doSomethingWithShader(shader: Shader<{specialTime: [number]}>) {
    shader.hasUniform("specialTime");
}

// doSomethingWithShader(saferShader);      // TypeScript knows this shader does not have a "specialTime" variable
doSomethingWithShader(unsafeShader);        // TypeScript will assume you know what you're doing here
