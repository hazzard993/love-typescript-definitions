# Contributing to love-typescript-definitions

## Project Brief

This project's goal is to provide TypeScript definitions to use with the [TypeScriptToLua](https://github.com/TypeScriptToLua/TypeScriptToLua) transpiler to build [LÖVE 2D](https://love2d.org/) projects.

Definitions for LuaJIT are defined over at [lua-types](https://github.com/ark120202/lua-types).

These definitions are obtained from [the official wiki](https://love2d.org/wiki/Main_Page) and/or the [love-api](https://github.com/love2d-community/love-api).

It is expected that these definitions will change a lot, be sure to use `npm` or another package management system to install these definitions to lock the version of these definitions your project requires.

### Goals of the definitions

1. To work with [lua-types](https://github.com/ark120202/lua-types), [TypeScriptToLua](https://github.com/TypeScriptToLua/TypeScriptToLua) and [LÖVE 2D](https://love2d.org/).
2. To not make the [LÖVE 2D wiki](https://love2d.org/wiki/Main_Page) an irrelevant source of information.
3. To enhance the typings in a way that makes sense for LÖVE 2D.
4. To not bog down the users with too much info (give them a `@link` to that instead).

### Branches

```sh
master          # Definitions for the latest version of LÖVE
support/11.1    # Definitions for LÖVE 11.1
```

Each branch is intended to work with the latest version of [TypeScriptToLua](https://github.com/TypeScriptToLua/TypeScriptToLua).

More support branches can be added on request.

## Contributing via Issues

Issues are welcome!

- Requests
- Corrections
- Information on the wiki has changed
- Troubleshooting
- Issues
- ...

Make sure not to post duplicate issues or issues that wouldn't be handled by this project.

## Contributing via Code

- Make sure to use `npm run test` to ensure your code passes the checks
- Make sure to choose the relevant branch
