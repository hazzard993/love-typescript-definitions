# Typescript Definitions for LÖVE 2D

# About
Write LÖVE 2D games in Typescript!

![Usage GIF](https://media.giphy.com/media/8rEiqcM9BldxRmSMgW/giphy.gif)

# Building

## Dependencies
The following dependencies need to be installed:
- [Windows Linux Subsystem](https://docs.microsoft.com/en-us/windows/wsl/install-win10)
- [Moonscript](https://moonscript.org) (on WLS)
- [Typescript](https://www.typescriptlang.org)
- [TypescriptToLua](https://github.com/Perryvw/TypescriptToLua)

## Instructions
After cloning this repository, use one of the following commands to get or update this repo's dependencies.
```
git submodule update --init               # Get submodules
git submodule update --recursive --remote	# Update submodules
```
After getting those submodules run `./build.ps1 -Test` to build `all.d.ts`.

You can use `all.d.ts` in your typescript project.

Make sure your typescript project folder contains a `tsconfig.json` file.

Here is something you can put in it.
```
{
	"compilerOptions": {
		"baseUrl": ".",
	},
}
```
