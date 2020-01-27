# Changelog

## Version 0.18.0

Docs are now available.

Access them at `node_modules/love-typescript-definitions/docs/index.html`.

## Version 0.17.0

Declarations now include 11.3 changes.

See that changelog [here](https://love2d.org/wiki/11.3).

## Version 0.16.0

There are now two ways to call LÖVE's functions.

```ts
love.graphics.newImage("image.png");
```

```ts
import { newImage } from "love.graphics";

newImage("image.png");
```

These modules contain all of LÖVE's functions, types and enums.

Advantages:

- Doesn't pollute the environment with all of LÖVE's types
- Reveals code's reliance on LÖVE's API
  - Code is easier to adapt to any LuaJIT environment
- Enables LÖVE modules to be mocked for testing instead of using bootstrap scripts to create objects

Also good for users who prefer to avoid global variables.

Here are the type paths to use for choosing one of these two methods:

| Type Path                     | Description                                                                      |
| ----------------------------- | -------------------------------------------------------------------------------- |
| `love-typescript-definitions` | All types, structs, modules and the `love` namespace will be globally available. |
| `/modules`                    | Only LÖVE's modules will be globally available. (`love.graphics`, etc)           |
| `/namespace`                  | Exposes the `love` namespace purely for overriding callbacks.                    |

> VS Code can automatically create import paths to members within these declarations.

If you want to use LÖVE in this modular way, configure your _types_ in your _tsconfig.json_ like so:

```json
{
  "types": [
    "love-typescript-definitions/modules",
    "love-typescript-definitions/namespace",
    "love-typescript-definitions"
  ]
}
```

- `love.data.PackedData` must be accessed in a different way. Use...
  - `import("love.data").PackedData` or
  - `import { PackedData } from "love.data"`

## Version 0.15.0

## Packing and Unpacking

- Enhanced _love.data.pack_ and _love.data.unpack_ keep track of the formatting and values to create the packed value for type safety. See [packing and unpacking](https://github.com/hazzard993/love-typescript-definitions/wiki/Packing-and-Unpacking).

```ts
function unpack(
  packedData: love.data.PackedData<{
    format: "n1";
    values: [1, 2, 3, 4];
  }>
) {
  love.data.unpack("n1", packedData);
}

unpack(love.data.pack("data", "n1", 1, 2, 3));
// ❌ Expected 4 values to be packed
unpack(love.data.pack("data", "n2", 1, 2, 3, 4));
// ❌ Unsupported formatting
unpack(love.data.pack("data", "n1", 1, 2, 3, 4));
// ✔
```

- Enhanced _love.system.getOS_. It can only return one of a select number of strings.

```ts
switch (love.system.getOS()) {
  case "Android":
  case "Linux":
  case "OS X":
  case "UWP":
  case "Unknown":
  case "Windows":
  case "iOS":
  case "PSP": // ❌ Impossible unless the source was modified
}
```

- Removed _SoundData_ and _Decoder_'s _getChannels_ method. This was removed.
- Updated _love.timer.step_ removing a variant that did not exist.

## Version 0.14.0

- Enhanced _LoveObject.type_, _LoveObject.typeOf_ and _LoveObject.release_ to determine types.

```ts
function useQuad(quad: Quad) {
  const equal = quad.type() === "Channel";
  // ❌ Impossible. Quad types return "Quad".
}
```

```ts
/**
 * @param object Any object. Unknown what it is. It could be one of 56 types.
 */
function useObject(object: LoveObject): void {
  if (object.typeOf("Image")) {
    const [width, height] = object.getDimensions();
    // ✔ TypeScript knows object is an Image type.
    // So this code shouldn't fail.
  }
  object.getDimensions();
  // ❌ TypeScript knows getDimensions doesn't exist on every LoveObject.
  // So this won't work for those cases.
}
```

```ts
function releaseImage(image: Image) {
  if (image.release()) {
    // ❌ TypeScript doesn't allow this call.
    // It knows image does not exist.
    image.getDimensions();
  }
}
```

- Enhanced _love.filesystem.lines_ and _File#lines_ allowing them to be used in a for..of loop. (Requires `--downLevelIteration`)

```ts
for (const line of love.filesystem.lines("file.txt")) {
  print(line);
}
```

- +2 _Canvas_ functions. -1 and +1 variant.

```diff
+ canvas.generateMipmaps();
+ canvas.getMSAA();
  canvas.newImageData();
- canvas.newImageData(x, y, width, height);
+ canvas.newImageData(slice, mipmap, x, y, width, height);
```

- -2 deprecated _ParticleSystem_ methods.

```diff
- particleSystem.getAreaSpread
- particleSystem.setAreaSpread
```

- +1 _love.filesystem.newFile_ variant.

```diff
+ love.filesystem.newFile(filename);
  love.filesystem.newFile(filename, mode);
```

- +2 _love.filesystem.getInfo_ variants

```diff
+ love.filesystem.getInfo(path, filetype)
  love.filesystem.getInfo(path, info)
+ love.filesystem.getInfo(path, filetype, info)
```

- +1 _love.filesystem.read_ variant.

```diff
  love.filesystem.read(name, size)
+ love.filesystem.read("string", name, size)
+ love.filesystem.read("file", name, size)
```

- Using _undefined_ instead of _null_ for missing values.
- Added _\_\_opaque_ to _LoveObject_. This stops users being able to create any _LoveObject_ not using one Love's API.
- Added _\_\_drawable_ to _Drawable_. This stops _LoveObject_ types being used as a Drawable object since _LoveObject_ and _Drawable_ are equivalent TS types.
- +2 enum values `"borderellipse"` and `"borderrectangle"` added to AreaSpreadDistribution.

## Version 0.13.0

- Improved indenting of example code.
- Added some tables to describe string enums.
- Removed _FileInfo_, _ArrayImageSettings_ and _Conf_ and added them directly to their only associated function.
- It is now possible to extend the path used when referencing these types in _tsconfig.json_ files.
  - `love-typescript-definitions` all LÖVE 2D declarations.
  - `love-typescript-definitions/typings/modules` all LÖVE 2D's modules but not _love's_ callbacks and functions.
  - `love-typescript-definitions/typings/love` all of _love's_ functions.
  - `love-typescript-definitions/typings/love.callbacks` all of _love's_ callbacks.

## Version 0.11.2

- +2 _love.graphics.draw_ variants

```diff
  love.graphics.draw(image);
  love.graphics.draw(image, quad);
+ love.graphics.draw(image, transform);
+ love.graphics.draw(image, quad, transform);
```

- +1 _love.graphics.clear_ variant. This was possible to write before but now TypeScript will display the correct documentation when highlighting the fourth variant.

```diff
  love.graphics.clear();
  love.graphics.clear(0, 0, 0);
  love.graphics.clear([0, 0, 0, 0], [0, 0, 0, 0], true, true);
+ love.graphics.clear(true, 255, 255);
```

- Modified _love.graphics.stencil_'s function argument. `Function` to `() => void`
- Modified _love.graphics.captureScreenshot_'s function argument. `Function` to `() => void`

- +1 _love.graphics.newCanvas_ variant. Used to create a volume or array texture-type Canvas.

```diff
  love.graphics.newCanvas();
  love.graphics.newCanvas(100, 100);
  love.graphics.newCanvas(100, 100, {});
+ love.graphics.newCanvas(100, 100, 80);
```

- +2 _love.graphics.newFont_ variants.

```diff
  love.graphics.newFont("font.ttf");
+ love.graphics.newFont("font.ttf", 12, "normal");
  love.graphics.newFont("font.bmf", "image.png");
+ love.graphics.newFont();
```

- +1 documented _love.graphics.newImage_ variant.

```diff
  love.graphics.newImage("image.png");
  love.graphics.newImage(imageData);
  love.graphics.newImage(compressedImageData);
+ love.graphics.newImage("image.png", { linear: false });
```

- +1 documented _love.graphics.newImageFont_ variant.

```diff
  love.graphics.newImageFont("abc.png", "abc");
  love.graphics.newImageFont(imageData, "abc");
  love.graphics.newImageFont("abc.png", "abc", 0);
+ love.graphics.newImageFont(imageData, "abc", 0);
```

- +1 documented _love.graphics.newParticleSystem_ variant.

```diff
+ love.graphics.newParticleSystem(image);
  love.graphics.newParticleSystem(canvas);
```

- +2 _love.graphics.newVideo_ variants
- -1 _love.graphics.newVideo_ variant. This variant was deprecated.

```diff
  love.graphics.newVideo("video.mp4");
  love.graphics.newVideo(videoStream);
+ love.graphics.newVideo("video.mp4", {});
+ love.graphics.newVideo(videoStream, {});
- love.graphics.newVideo(videoStream, false);
```

- +2 _love.graphics.setNewFont_ variants.

```diff
+ love.graphics.setNewFont();
  love.graphics.setNewFont("font.ttf");
  love.graphics.setNewFont(file);
  love.graphics.setNewFont(data);
+ love.graphics.setNewFont(rasterizer);
```

- Removed `Stats` interface to improve the tooltip display of _love.graphics.getStats_.
