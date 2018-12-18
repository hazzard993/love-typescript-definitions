// This file should be able to be compiled.
// No Errors should be shown.

love.graphics.newImage("filename");	// Will cause an error if l2d.lib.d.ts doesn't exist

love.update = (delta: number) =>
    print("Hello");

love.graphics.push(); /* This has a default argument */

math.atan2(0, 0); /* This function should be available */

const [k, v] = ipairs({x: 0});

// console.log("Hello");
