# LÖVE 2D Typescript Definition Files

![Use](https://i.imgur.com/NPfeARe.png)

[![LOVE](https://img.shields.io/badge/L%C3%96VE-11.1-EA316E.svg)](http://love2d.org/)

Provides Typescript definitions to use with [Typescript to Lua](https://github.com/Perryvw/TypescriptToLua) for LÖVE 2D's environment.

This includes definitions for Lua and LuaJIT as well, hopefully the rest of the environment in the future.

LÖVE 2D's definitions are transpiled from the [love-api](https://github.com/love2d-community/love-api).

See the [Wiki](https://github.com/hazzard993/love-typescript-definitions/wiki) for more information regarding setup, features and editor information.

## Try TypescriptToLua's Online Editor
You'll be able to see the final Lua code. This can be used in a `main.lua` file for a LÖVE 2D game.
- [Basic LÖVE 2D project](https://typescripttolua.github.io/play.html#src=%2F%2F%20You%20can%20use%20the%20transpiled%20code%20in%20the%20right%20panel%20for%20a%20main.lua%20file%0Alove.draw%20%3D%20function()%20%7B%0A%20%20%20%20love.graphics.print(%22Hello%20World%22%2C%20400%2C%20300)%3B%0A%20%20%20%20%2F%2F%20Try%20using%20love.graphics.circle%20in%20this%20editor%20below.%0A%20%20%20%20%0A%20%20%20%20%2F%2F%20love-typescript-definitions%20provides%20more%20of%20these%20definitions%0A%20%20%20%20%2F%2F%20for%20this%20example%20not%20all%20definitions%20have%20been%20given%0A%7D%0A%0A%2F%2F%20%23region%20FOLD%20THIS%20CODE%20FOR%20READABILITY%20%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%0A%2F%2F%20use%20controls%20to%20the%20left%20of%20the%20previous%20line%20to%20fold%0A%0A%2F%2F%20definitions%20are%20usually%20stored%20in%20other%20files%0A%2F%2F%20none%20of%20this%20code%20is%20actually%20included%20in%20the%20transpiled%20code%0A%0Adeclare%20namespace%20love%20%7B%0A%20%20%20%20export%20namespace%20graphics%20%7B%0A%20%20%20%20%20%20%20%20export%20function%20print(text%3A%20string%2C%20x%3A%20number%2C%20y%3A%20number)%3A%20void%3B%0A%09%09%2F**%0A%09%09%20*%20Draws%20a%20circle.%0A%09%09%20*%20%0A%09%09%20*%20%40param%20mode%20How%20to%20draw%20the%20circle.%0A%09%09%20*%20%40param%20x%20The%20position%20of%20the%20center%20along%20x-axis.%0A%09%09%20*%20%40param%20y%20The%20position%20of%20the%20center%20along%20y-axis.%0A%09%09%20*%20%40param%20radius%20The%20radius%20of%20the%20circle.%0A%09%09%20*%2F%0A%09%09export%20function%20circle(mode%3A%20%22fill%22%20%7C%20%22line%22%2C%20x%3A%20number%2C%20y%3A%20number%2C%20radius%3A%20number)%3A%20void%3B%0A%20%20%20%20%7D%0A%20%20%20%20let%20load%3A%20(args%3A%20object)%20%3D%3E%20void%3B%0A%20%20%20%20let%20update%3A%20(delta%3A%20number)%20%3D%3E%20void%3B%0A%20%20%20%20let%20draw%3A%20()%20%3D%3E%20void%3B%0A%7D%0A%2F%2F%20%23endregion%0A)
- [Objects from TypeScript](https://typescripttolua.github.io/play.html#src=%2F%2F%20You%20can%20use%20the%20transpiled%20code%20in%20the%20right%20panel%20for%20a%20main.lua%20file%0Aclass%20Player%20%7B%0A%20%20%20%20%2F%2F%20Use%20TypeScript%20constructor%20assignments!%0A%20%20%20%20%2F%2F%20https%3A%2F%2Fkendaleiv.com%2Ftypescript-constructor-assignment-public-and-private-keywords%2F%0A%20%20%20%20constructor(private%20x%3A%20number%2C%20private%20y%3A%20number)%20%7B%7D%0A%20%20%20%20%2F**%0A%20%20%20%20%20*%20Moves%20the%20player%20to%20the%20right%20at%20100px%20per%20second%0A%20%20%20%20%20*%20Hover%20over%20p.update%20or%20this%20declaration%20to%20see%20this%20comment%0A%20%20%20%20%20*%20%40param%20%7Bnumber%7D%20How%20many%20seconds%20have%20passed%0A%20%20%20%20%20*%2F%0A%20%20%20%20update(delta%3A%20number)%20%7B%0A%20%20%20%20%20%20%20%20this.x%20%2B%3D%20delta%20*%20100%3B%20%20%2F%2F%20100px%20per%20second%0A%20%20%20%20%7D%0A%20%20%20%20draw()%20%7B%0A%20%20%20%20%20%20%20%20love.graphics.circle(%22fill%22%2C%20this.x%2C%20this.y%2C%2012)%3B%0A%20%20%20%20%7D%0A%7D%0A%0Alet%20p%3A%20Player%3B%0A%0Alove.load%20%3D%20function(args%3A%20object)%20%7B%0A%20%20%20%20p%20%3D%20new%20Player(80%2C%20300)%3B%0A%7D%0A%0Alove.update%20%3D%20function(delta%3A%20number)%20%7B%0A%20%20%20%20p.update(delta)%3B%0A%20%20%20%20%2F%2F%20autocomplete%20available%20for%20p.*%0A%7D%0A%0Alove.draw%20%3D%20function()%20%7B%0A%20%20%20%20p.draw()%3B%0A%7D%0A%0A%2F%2F%20%23region%20FOLD%20THIS%20CODE%20FOR%20READABILITY%20%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%0Adeclare%20namespace%20love%20%7B%0A%20%20%20%20export%20namespace%20graphics%20%7B%0A%09%09export%20function%20circle(mode%3A%20%22fill%22%20%7C%20%22line%22%2C%20x%3A%20number%2C%20y%3A%20number%2C%20radius%3A%20number)%3A%20void%3B%0A%20%20%20%20%7D%0A%20%20%20%20let%20load%3A%20(args%3A%20object)%20%3D%3E%20void%3B%0A%20%20%20%20let%20update%3A%20(delta%3A%20number)%20%3D%3E%20void%3B%0A%20%20%20%20let%20draw%3A%20()%20%3D%3E%20void%3B%0A%7D%0A%2F%2F%20%23endregion%0A)
- [Mostly empty editor](https://typescripttolua.github.io/play.html#src=%0A%0A%2F%2F%20So%20the%20editor%20knows%20what%20print()%20is%0Adeclare%20function%20print(...args%3A%20any%5B%5D)%3B)

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
