// This file should be able to be compiled.
// No Errors should be shown.

import * as utf8 from "utf8";

love.graphics.newImage("filename");	// Will cause an error if l2d.lib.d.ts doesn't exist

love.update = (delta: number) =>
    print("Hello");

love.graphics.push(); /* This has a default argument */

math.atan2(0, 0); /* This function should be available */

const [k, v] = ipairs({x: 0});

const [x, y, z] = [0, 1, 2];

// In love, not LuaJIT
debug.setfenv(1, {});
debug.getfenv(1);

// console.log("Hello");
