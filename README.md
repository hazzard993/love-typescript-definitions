# LÖVE 2D Typescript Definition Files

![Use](https://i.imgur.com/NPfeARe.png)

[![LOVE](https://img.shields.io/badge/L%C3%96VE-11.1-EA316E.svg)](http://love2d.org/)

Provides Typescript definitions to use with [Typescript to Lua](https://github.com/Perryvw/TypescriptToLua) for LÖVE 2D's environment.

This includes definitions for Lua and LuaJIT as well, hopefully the rest of the environment in the future.

LÖVE 2D's definitions are transpiled from the [love-api](https://github.com/love2d-community/love-api).

See the [Wiki](https://github.com/hazzard993/love-typescript-definitions/wiki) for more information regarding setup, features and editor information.

## Try TypescriptToLua's Online Editor
You'll be able to see the final Lua code. This can be used in a `main.lua` file for a LÖVE 2D game.
- [LÖVE 2D Hello World](https://bit.ly/2qB3Ljj)
- [Classes, Autocomplete and JSDoc Tooltips](https://bit.ly/2zEDdli)
- [Near Empty Editor](https://bit.ly/2zCUknC) for playing around

## Usage
**Dependancies**
- [NodeJS](https://www.npmjs.com/get-npm) for the npm command

**Install TypescriptToLua**

`npm install -g typescript-to-lua`

**Download the definitions**

`git clone https://github.com/hazzard993/love-typescript-definitions.git`

Or download from the [releases page](https://github.com/hazzard993/love-typescript-definitions/releases)

**Create a tsconfig.json file**

Consider the options below for the contents of the file
```js
{
    "compilerOptions": {
        "baseUrl": ".",         // For resolving require(...) paths
        "noLib": true,          // Prevents auto-complete suggestions from non-lua libraries
        "outDir": "lua"         // Output lua files to a directory named lua
    },
    "include": [

        // the definition files from this repo
        "../love-typescript-definitions/include/*.d.ts",
        
        // any file ending in ts within the current directory is targeted for transpilation
        // except d.ts files
        "*.ts",

    ],
    "luaTarget": "JIT"          // LÖVE 2D uses LuaJIT, tstl will be considerate of LuaJIT's environment
}
```

Your `tsconfig.json` file determines your compilation arguments and can influence what your chosen editor does.

**Create main.ts**

This plugin and editor may be useful for you when editing `main.ts`
- [Typescript plugin for Sublime](https://packagecontrol.io/packages/TypeScript)
- [VS Code](https://code.visualstudio.com/) also provides a great Typescript editing experience

```ts
love.draw = () => {
    love.graphics.print("Hello World", 400, 300);
}
```

**Compile your project**

`tstl -p tsconfig.json`

**Run your project**

`love.exe lua`
Or drag the lua/ directory to love.exe

## Build Dependencies
- [Moonscript](https://moonscript.org)
- [Lua 5.3.4](https://www.lua.org/download.html)

## Building and Cleaning
```bash
npm run         # See all npm commands
npm run init    # Prepare for build
npm run build   # Build include/love.d.ts
npm run clean   # Clean out generated files
```
