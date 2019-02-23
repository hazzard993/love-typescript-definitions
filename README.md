# LÖVE 2D TypeScript Definitions

![Use](https://i.imgur.com/NPfeARe.png)

[![LOVE](https://img.shields.io/badge/L%C3%96VE-11.2-EA316E.svg)](http://love2d.org/)
[![tstl](https://img.shields.io/badge/TypescriptToLua-0.15.2-blue.svg)](https://github.com/Perryvw/TypescriptToLua)
[![Build Status](https://travis-ci.org/hazzard993/love-typescript-definitions.svg?branch=master)](https://travis-ci.org/hazzard993/love-typescript-definitions)

Contains definition files to build LÖVE 2D projects with TypeScript!

Check out [love-typescript-boilerplate](https://github.com/hazzard993/love-typescript-boilerplate) to get a sample project to build off.

These definitions are built to be used with the [TypescriptToLua](https://github.com/Perryvw/TypescriptToLua) transpiler.

These definitions include:
- Definitions for LuaJIT's Lua environment (`unpack`, `string.format`, etc)
- Definitions for LÖVE 2D (`love.graphics.draw`, `love.graphics.newImage`, etc)

You can install these definitions to your project via NPM!

```
npm i love-typescript-definitions
```

Link these definitions up using this `tsconfig.json`.

```json
{
    "compilerOptions": {
        "lib": ["es6"],
        "types": ["love-typescript-definitions"]
    }
}
```

See the [wiki](https://github.com/hazzard993/love-typescript-definitions/wiki) for information on getting started building a project.

## Try the Transpiler and Definitions Online
You'll be able to see what the TypescriptToLua transpiler creates as Lua code.

This can be used in a `main.lua` file for a LÖVE 2D game or [run online](https://schellingb.github.io/LoveWebBuilder/run-code).
- [LÖVE 2D Hello World](https://bit.ly/2qB3Ljj)
- [Classes, Autocomplete and Editor Tooltips](https://bit.ly/2zEDdli)
- [Near Empty Editor](https://bit.ly/2zCUknC) for playing around
