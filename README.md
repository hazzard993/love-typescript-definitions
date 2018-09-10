# Typescript Definitions for LÖVE 2D
Write LÖVE 2D games in Typescript!

![Usage GIF](https://media.giphy.com/media/8rEiqcM9BldxRmSMgW/giphy.gif)

# Building

## Dependencies
The following dependencies need to be installed:
- [Windows Linux Subsystem](https://docs.microsoft.com/en-us/windows/wsl/install-win10)
- [Moonscript](https://moonscript.org) (on WLS)
- [Typescript](https://www.typescriptlang.org)
- [TypescriptToLua](https://github.com/Perryvw/TypescriptToLua)

## Build Instructions
```bash
git clone <this repo>		# Clone this repository
git submodule update --init	# Get all submodules
cd love-typescript-definitions
./build.ps1 -Test		# Creates dist/all.d.ts
```

# Usage
This project builds a file named `all.d.ts`.
You can use this in your typescript projects.

Here is an example file structure of a project using this definition file.
```
/my-project/
	all.d.ts
	main.ts
	tsconfig.json
```

## Usage with Sublime Text
1. Install the [Sublime Text Typescript Plugin](https://packagecontrol.io/packages/TypeScript).
2. Make sure your typescript project folder contains a `tsconfig.json` file. Below is what it can look like.
```
{
	"compilerOptions": {
		"baseUrl": ".",
	},
}
```
3. Done, open up main.ts with Sublime and see that syntax highlighting.

## Building your project
You should hopefully have access to the `tstl` command. This builds a typescript project.
You can create a sublime-build file like the following to build your typescript project.
```json
{
    "cmd": ["tstl", "-p", "$file"],
    "shell": true
}
```
After this, you can pass your project folder to L2D and it will run your project!
