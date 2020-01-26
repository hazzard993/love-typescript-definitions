<div align="center">
    <img src="./media/love-typescript-definitions.png?raw=true" alt="TypeScriptToLua + LÖVE 2D" width="512" />
    <h1>
        LÖVE 2D TypeScript Definitions
        <p></p>
        <a href="http://love2d.org/"><img alt="LÖVE 2D" src="https://img.shields.io/badge/L%C3%96VE-11.3-EA316E.svg?style=for-the-badge" /></a>
        <a href="https://github.com/TypescriptToLua/TypeScriptToLua"><img alt="TypeScriptToLua" src="https://img.shields.io/badge/TypeScriptToLua-0.31.0-blue.svg?style=for-the-badge" /></a>
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
yarn add -D --modules-folder node_modules/@types love-typescript-definitions lua-types
# or
npm install -D --prefix node_modules/@types love-typescript-definitions lua-types
```

then write up a `main.ts` file.

```ts
/// <reference no-default-lib="true" />
/// <reference lib="esnext" />
love.draw = () => {
  love.graphics.print("Hello World");
};
```

and then use [TypeScriptToLua](https://github.com/TypeScriptToLua/TypeScriptToLua) (_tstl_) to transform a `main.ts` file to `main.lua`.

> TIP: Use _tstl_'s watch mode (`--watch`) if you're after fast and automatic transpilation as files are updated.

```
tstl main.ts
```

This package also ships with documentation (`node_modules/love-typescript-definitions/docs/index.html`).

See the [wiki](https://github.com/hazzard993/love-typescript-definitions/wiki) for information on getting started building a project and [CHANGELOG.md](CHANGELOG.md) for recent changes.

## Other Definitions / Tools to Help

- [lua-types](https://github.com/ark120202/lua-types) declarations for the various Lua environments. Allows LuaJIT specific functions to be used.
- [peachy-types](https://github.com/hazzard993/peachy-types) for using [peachy](https://github.com/josh-perry/peachy), a parser/renderer for Aseprite animations in LÖVE.
- [encompass-ecs](https://encompass-ecs.github.io/), a powerful engine-agnostic framework to help you code games, or other kinds of simulations.
- [vscode-typescript-to-lua](https://marketplace.visualstudio.com/items?itemName=ark120202.vscode-typescript-to-lua) plugin for VSCode. Highlights errors you'd encounter with TypeScriptToLua and gives _tsconfig.json_ information all within the editor.
- [local-lua-debugger-vscode](https://github.com/tomblind/local-lua-debugger-vscode), a simple Lua debugger which requires no additional dependencies. Works with TypeScriptToLua and LÖVE.
- [TypeScriptGame](https://github.com/yancouto/simple-stuff/tree/master/TypeScriptGame), an example game made with these declarations by [@yancouto](https://github.com/yancouto)
- [tstl-lurker](https://github.com/hazzard993/tstl-lurker) declarations for [lurker](https://github.com/rxi/lurker). Allows code TypeScript code to be hotswapped with a running Lua game.
- [UTF-8](https://github.com/hazzard993/tstl-utf8) the utf8 module included with LÖVE 2D.
