<div align="center">
    <img src="love-typescript-definitions.png?raw=true" alt="TypeScriptToLua + LÖVE 2D" width="512" />
    <h1>
        LÖVE 2D TypeScript Definitions
        <p></p>
        <a href="http://love2d.org/"><img alt="LÖVE 2D" src="https://img.shields.io/badge/L%C3%96VE-11.2-EA316E.svg?style=for-the-badge" /></a>
        <a href="https://github.com/TypescriptToLua/TypeScriptToLua"><img alt="TypeScriptToLua" src="https://img.shields.io/badge/TypeScriptToLua-0.23.0-blue.svg?style=for-the-badge" /></a>
        <a href="https://www.npmjs.com/package/love-typescript-definitions"><img alt="npm" src="https://img.shields.io/npm/v/love-typescript-definitions.svg?style=for-the-badge" /></a>
        <a href="https://travis-ci.org/hazzard993/love-typescript-definitions"><img alt="Build status" src="https://img.shields.io/travis/hazzard993/love-typescript-definitions/master.svg?style=for-the-badge" /></a>
    </h1>
</div>

Contains declaration files to build [LÖVE 2D](https://love2d.org/) projects with TypeScript!

This allows incredible static code analysis, syntax checking and type checking of would-be LÖVE 2D projects without any runtime checking overhead.

Transpilation is achieved with the [TypeScriptToLua](https://github.com/TypeScriptToLua/TypeScriptToLua) transpiler.

Check out [love-typescript-template](https://github.com/hazzard993/love-typescript-template) to get a sample project to build off and [VS Code](https://code.visualstudio.com) (if you wish) for one of the best TypeScript editors.

You can install these declarations to your project via Yarn or NPM.

```sh
yarn add -D love-typescript-definitions
# or
npm i -D love-typescript-definitions
```

then link them up to a `tsconfig.json` file.

```json
{
    "compilerOptions": {
        "lib": ["esnext"],
        "types": [
            "love-typescript-definitions"
        ]
    },
    "tstl": {
        "luaTarget": "JIT"
    }
}
```

and then use [TypeScriptToLua](https://github.com/TypeScriptToLua/TypeScriptToLua) (_tstl_) to transform a `main.ts` file to `main.lua`.

```
tstl -p tsconfig.json
```

See the [wiki](https://github.com/hazzard993/love-typescript-definitions/wiki) for information on getting started building a project.

## Other Definitions / Tools to Help

- [lua-types](https://github.com/ark120202/lua-types) declarations for the various Lua environments. Allows LuaJIT specific functions to be used.
- [vscode-typescript-to-lua](https://marketplace.visualstudio.com/items?itemName=ark120202.vscode-typescript-to-lua) plugin for VSCode. Highlights errors you'd encounter with TypeScriptToLua and gives _tsconfig.json_ information all within the editor.
- [tstl-lurker](https://github.com/hazzard993/tstl-lurker) declarations for [lurker](https://github.com/rxi/lurker). Allows code TypeScript code to be hotswapped with a running Lua game.
- [UTF-8](https://github.com/hazzard993/tstl-utf8) the utf8 module included with LÖVE 2D.

## Try the Transpiler and Definitions Online
You'll be able to see what the TypescriptToLua transpiler creates as Lua code.

This can be used in a `main.lua` file for a LÖVE 2D game or [run online](https://schellingb.github.io/LoveWebBuilder/run-code).
- [LÖVE 2D Hello World](https://bit.ly/2IlhMLo)
- [Classes, Autocomplete and Editor Tooltips](https://bit.ly/2Ik5bYZ)
- [Near Empty Editor](https://bit.ly/2XRAX4T) for playing around
