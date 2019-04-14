# LÖVE 2D TypeScript Definitions
<div align="center">
    <img src="love-typescript-definitions.png?raw=true" alt="TypeScriptToLua + LÖVE 2D" width="512" />
    <p></p>
    <a href="http://love2d.org/"><img alt="LÖVE 2D" src="https://img.shields.io/badge/L%C3%96VE-11.2-EA316E.svg?style=for-the-badge" /></a>
    <a href="https://github.com/TypescriptToLua/TypeScriptToLua"><img alt="TypeScriptToLua" src="https://img.shields.io/badge/TypeScriptToLua-0.17.0-blue.svg?style=for-the-badge" /></a>
    <a href="https://www.npmjs.com/package/love-typescript-definitions"><img alt="npm" src="https://img.shields.io/npm/v/love-typescript-definitions.svg?style=for-the-badge" /></a>
    <a href="https://travis-ci.org/hazzard993/love-typescript-definitions"><img alt="Build status" src="https://img.shields.io/travis/hazzard993/love-typescript-definitions/master.svg?style=for-the-badge" /></a>
    <p></p>
</div>

Contains definition files to build LÖVE 2D projects with TypeScript!

This can be achieved with the [TypeScriptToLua](https://github.com/TypeScriptToLua/TypeScriptToLua) transpiler.

Check out [love-typescript-boilerplate](https://github.com/hazzard993/love-typescript-boilerplate) to get a sample project to build off.

You can install these definitions to your project via NPM!

```
npm i -D love-typescript-definitions
```

Link these definitions up using this `tsconfig.json`.

```json
{
    "compilerOptions": {
        "target": "es6",
        "module": "commonjs",
        "lib": ["es2017"],
        "types": [
            "lua-types/jit",
            "love-typescript-definitions"
        ]
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
