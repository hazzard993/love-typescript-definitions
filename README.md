<div align="center">
    <img src="love-typescript-definitions.png?raw=true" alt="TypeScriptToLua + LÖVE 2D" width="512" />
    <h1>
        LÖVE 2D TypeScript Definitions
        <p></p>
        <a href="http://love2d.org/"><img alt="LÖVE 2D" src="https://img.shields.io/badge/L%C3%96VE-11.2-EA316E.svg?style=for-the-badge" /></a>
        <a href="https://github.com/TypescriptToLua/TypeScriptToLua"><img alt="TypeScriptToLua" src="https://img.shields.io/badge/TypeScriptToLua-0.19.0-blue.svg?style=for-the-badge" /></a>
        <a href="https://www.npmjs.com/package/love-typescript-definitions"><img alt="npm" src="https://img.shields.io/npm/v/love-typescript-definitions.svg?style=for-the-badge" /></a>
        <a href="https://travis-ci.org/hazzard993/love-typescript-definitions"><img alt="Build status" src="https://img.shields.io/travis/hazzard993/love-typescript-definitions/master.svg?style=for-the-badge" /></a>
    </h1>
</div>

Contains definition files to build [LÖVE 2D](https://love2d.org/) projects with TypeScript!

This can be achieved with the [TypeScriptToLua](https://github.com/TypeScriptToLua/TypeScriptToLua) transpiler as well as [lua-types](https://github.com/ark120202/lua-types) to define the LuaJIT environment!

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
    },
    "tstl": {
        "luaTarget": "JIT"
    }
}
```

And then use _tstl_ to transform a `main.ts` file to `main.lua`.

```
tstl -p tsconfig.json
```

See the [wiki](https://github.com/hazzard993/love-typescript-definitions/wiki) for information on getting started building a project.

## Other Definitions / Tools to Help

- [vscode-typescript-to-lua](https://marketplace.visualstudio.com/items?itemName=ark120202.vscode-typescript-to-lua) plugin for VSCode. Highlights errors you'd encounter with TypeScriptToLua and gives _tsconfig.json_ information all within the editor
- [UTF-8](https://github.com/hazzard993/tstl-utf8) the utf8 module included with LÖVE 2D.

## Try the Transpiler and Definitions Online
You'll be able to see what the TypescriptToLua transpiler creates as Lua code.

This can be used in a `main.lua` file for a LÖVE 2D game or [run online](https://schellingb.github.io/LoveWebBuilder/run-code).
- [LÖVE 2D Hello World](https://bit.ly/2qB3Ljj)
- [Classes, Autocomplete and Editor Tooltips](https://bit.ly/2zEDdli)
- [Near Empty Editor](https://bit.ly/2zCUknC) for playing around
