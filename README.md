# LÖVE 2D Typescript Definition Files

<div><img src="https://raw.githubusercontent.com/remojansen/logo.ts/master/ts.png" width="50" height="50" /></div>
<div><img src="https://bytebucket.org/rude/love/raw/0075bd3f1a52d61f21e995ab536f41f77e3a5655/platform/unix/love.svg" width="50" height="50" /></div>

![Use](https://i.imgur.com/NPfeARe.png)
[![LOVE](https://img.shields.io/badge/L%C3%96VE-11.1-EA316E.svg)](http://love2d.org/)

Provides Typescript definitions to use with [Typescript to Lua](https://github.com/Perryvw/TypescriptToLua) for LÖVE 2D's environment.

This includes definitions for Lua and LuaJIT as well, hopefully the rest of the environment in the future.

LÖVE 2D's definitions are transpiled from the [love-api](https://github.com/love2d-community/love-api).

See the [Wiki](https://github.com/hazzard993/love-typescript-definitions/wiki) for more information regarding setup, features and editor information.

## Usage
**Install TypescriptToLua**

`npm install -g typescript-to-lua`

**Download the definitions**

`git clone https://github.com/hazzard993/love-typescript-definitions.git`

**Create your project**

```bash
mkdir proj ; cd proj
touch main.ts
touch tsconfig.json
```

**Configure your tsconfig.json file**

Consider the options below
```js
{
    "compilerOptions": {
        "baseUrl": ".",         // For resolving require(...) paths
        "noLib": true,          // Prevents auto-complete suggestions from non-lua libraries
        "outDir": "lua"         // Output lua files to a directory named lua
    },
    "files": [
        "main.ts"               // Can be given more .ts files as your project grows
    ],
    "include": [
        // !!! Definitions for LÖVE 2D, LuaJIT and Lua
        "../love-typescript-definitions/include/*.d.ts"
    ],
    "luaTarget": "JIT"          // LÖVE 2D uses LuaJIT, tstl will be considerate of LuaJIT's environment
}
```

**Edit your project (currently just main.ts)**

You may want to consider some tooling for Typescript
- [Typescript plugin for Sublime](https://packagecontrol.io/packages/TypeScript)
- [VS Code](https://code.visualstudio.com/) also provides a great Typescript editing experience

Your `tsconfig.json` file determines your compilation arguments and can influence what your chosen editor does.

*Edit main.ts*
```ts
love.draw = () => {
    love.graphics.print("Hello World", 400, 300);
}
```

**Compile your project**

`tstl -p tsconfig.json`

**Run your project**

`love /path/to/luafiles`

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
