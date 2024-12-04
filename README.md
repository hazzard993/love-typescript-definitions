<div align="center">
    <img src="./media/love-typescript-definitions.png?raw=true" alt="TypeScriptToLua + LÖVE 2D" width="512" />
    <h1>
        LÖVE 2D TypeScript Definitions
        <p></p>
        <a href="http://love2d.org/"><img alt="LÖVE 2D" src="https://img.shields.io/badge/L%C3%96VE-11.5-EA316E.svg?style=for-the-badge" /></a>
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

- [tstl-anim8](https://github.com/maxiy01/tstl-anim8) declarations for anim8, a small animation library for LÖVE.
- [tstl-flux](https://github.com/maxiy01/tstl-flux) declarations for flux, a fast, lightweight tweening library for Lua.
- [tstl-roomy](https://github.com/maxiy01/tstl-roomy) declarations for roomy, a small screen-management lua module.
