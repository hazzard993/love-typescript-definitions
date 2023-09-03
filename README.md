<div align="center">
    <img src="./media/love-typescript-definitions.png?raw=true" alt="TypeScriptToLua + LÖVE 2D" width="512" />
    <h1>
        LÖVE 2D TypeScript Definitions
        <p></p>
        <a href="http://love2d.org/"><img alt="LÖVE 2D" src="https://img.shields.io/badge/L%C3%96VE-11.4-EA316E.svg?style=for-the-badge" /></a>
        <a href="https://www.npmjs.com/package/love-typescript-definitions"><img alt="npm" src="https://img.shields.io/npm/v/love-typescript-definitions.svg?style=for-the-badge" /></a>
    </h1>
</div>

Contains declaration files to build [LÖVE 2D](https://love2d.org/) projects with TypeScript!

Built for use with [TypeScriptToLua](https://github.com/TypeScriptToLua/TypeScriptToLua). Check out [love-typescript-template](https://github.com/hazzard993/love-typescript-template) to get a sample project to build off.

Or run the following in a terminal to try it out:

```sh
# Requires NPX and Love2D to be available via cli
npm init -y
npm install -D typescript-to-lua typescript love-typescript-definitions
echo '{ "compilerOptions": { "target": "ESNext", "lib": ["ESNext"], "moduleResolution": "Node", "types": ["love-typescript-definitions", "@typescript-to-lua/language-extensions"] }, "tstl": { "luaTarget": "JIT" } }' > tsconfig.json
echo "love.draw = () => { love.graphics.print('Hello World') };" > main.ts
npx tstl -p tsconfig.json
love .
```

> TIP: Use _tstl_'s watch mode (`--watch`) if you're after fast and automatic transpilation as files are updated.

Available on NPM.

```sh
npm install love-typescript-definitions
```

## Other Definitions / Tools to Help

- [lua-types](https://github.com/ark120202/lua-types) declarations for the various Lua environments. Allows LuaJIT specific functions to be used.
- [peachy-types](https://github.com/hazzard993/peachy-types) for using [peachy](https://github.com/josh-perry/peachy), a parser/renderer for Aseprite animations in LÖVE.
- [encompass-ecs](https://encompass-ecs.github.io/), a powerful engine-agnostic framework to help you code games, or other kinds of simulations.
- [vscode-typescript-to-lua](https://marketplace.visualstudio.com/items?itemName=ark120202.vscode-typescript-to-lua) plugin for VSCode. Highlights errors you'd encounter with TypeScriptToLua and gives _tsconfig.json_ information all within the editor.
- [local-lua-debugger-vscode](https://github.com/tomblind/local-lua-debugger-vscode), a simple Lua debugger which requires no additional dependencies. Works with TypeScriptToLua and LÖVE.
- [TypeScriptGame](https://github.com/yancouto/simple-stuff/tree/master/TypeScriptGame), an example game made with these declarations by [@yancouto](https://github.com/yancouto)
- [tstl-lurker](https://github.com/hazzard993/tstl-lurker) declarations for [lurker](https://github.com/rxi/lurker). Allows code TypeScript code to be hotswapped with a running Lua game.
- [UTF-8](https://github.com/hazzard993/tstl-utf8) the utf8 module included with LÖVE 2D.
- [tstl-anim8](https://github.com/maxiy01/tstl-anim8) declarations for anim8, a small animation library for LÖVE.
- [tstl-flux](https://github.com/maxiy01/tstl-flux) declarations for flux, a fast, lightweight tweening library for Lua.
- [tstl-roomy](https://github.com/maxiy01/tstl-roomy) declarations for roomy, a small screen-management lua module.
- [bump-types](https://github.com/Nyaacinth/bump-types) declarations for bump.lua, a collision detection library for Lua.
- [lovebird-types](https://github.com/Nyaacinth/lovebird-types) declarations for lovebird, a browser-based debug console for the LÖVE framework.
- [bitser-types](https://github.com/Nyaacinth/bitser-types) declarations for bitser, a library helps (de)serialization of Lua values with LuaJIT
- [cartographer-types](https://github.com/Nyaacinth/cartographer-types) declarations for cartographer, a small library for loading, reading, and drawing Tiled maps in LÖVE
