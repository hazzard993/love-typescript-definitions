# Changelog

## Version 0.14.0

- Enhanced `LoveObject.type`, `LoveObject.typeOf` and `LoveObject.release` to determine types.

```ts
function useQuad(quad: Quad) {
    if (quad.type() === "Channel") {} // ❌ Impossible. Quad types return "Quad".
}
```

```ts
/**
 * @param object Any object. Unknown what it is. It could be one of 56 types.
 */
function useObject(object: LoveObject): void {
    if (object.typeOf("Image")) {
        // ✔ TypeScript knows object is an Image type. 
        // So this code shouldn't fail.
        const [width, height] = object.getDimensions();
    }
    // ❌ TypeScript knows getDimensions doesn't exist on every LoveObject.
    // So this won't work for those cases.
    object.getDimensions();
}
```

```ts
function releaseImage(image: Image) {
    if (image.release()) {
        // ❌ TypeScript doesn't allow this call. It knows "image" no longer exists here.
        image.getDimensions();
    }
    // Unfortunately no type protection here. 
    image.getDimensions();
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

- Added 1 _love.filesystem.newFile_ variant.

```diff
+ love.filesystem.newFile(filename);
  love.filesystem.newFile(filename, mode);
```

- Added 2 _love.filesystem.getInfo_ variants

```diff
+ love.filesystem.getInfo(path, filetype)
  love.filesystem.getInfo(path, info)
+ love.filesystem.getInfo(path, filetype, info)
```

- Added 1 _love.filesystem.read_ variant.

```diff
  love.filesystem.read(name, size)
+ love.filesystem.read("string", name, size)
+ love.filesystem.read("file", name, size)
```

- Enhanced _love.filesystem.lines_ and _File#lines_ allowing them to be used in a for..of loop. (Requires `--downLevelIteration`)

```ts
for (const line of love.filesystem.lines("file.txt")) {
    print(line);
}
```

- Using _undefined_ instead of _null_ for missing values.
- Added _\_\_opaque_ to _LoveObject_. This stops users being able to create any _LoveObject_ not using one Love's API.
- Added _\_\_drawable_ to _Drawable_. This stops _LoveObject_ types being used as a Drawable object since _LoveObject_ and _Drawable_ are equivalent TS types.
- Added `"borderellipse"` and `"borderrectangle"` to AreaSpreadDistribution.

## Version 0.13.0

- Improved indenting of example code.
- Added some tables to describe string enums.
- Removed `FileInfo`, `ArrayImageSettings` and `Conf` and added them directly to their only associated function.
- It is now possible to extend the path used when referencing these types in _tsconfig.json_ files.
  - `love-typescript-definitions` all LÖVE 2D declarations.
  - `love-typescript-definitions/typings/modules` all LÖVE 2D's modules but not _love's_ callbacks and functions.
  - `love-typescript-definitions/typings/love` all of _love's_ functions.
  - `love-typescript-definitions/typings/love.callbacks` all of _love's_ callbacks.

## Version 0.11.2

- Added two `love.graphics.draw` variants

```diff
  love.graphics.draw(image);
  love.graphics.draw(image, quad);
+ love.graphics.draw(image, transform);
+ love.graphics.draw(image, quad, transform);
```

- Added one `love.graphics.clear` variant. This was possible to write before but now TypeScript will display the correct documentation when highlighting the fourth variant.

```diff
  love.graphics.clear();
  love.graphics.clear(0, 0, 0);
  love.graphics.clear([0, 0, 0, 0], [0, 0, 0, 0], true, true);
+ love.graphics.clear(true, 255, 255);
```

- Modified `love.graphics.stencil`'s function argument. `Function` to `() => void`
- Modified `love.graphics.captureScreenshot`'s function argument. `Function` to `() => void`

- Added one `love.graphics.newCanvas` variant. Used to create a volume or array texture-type Canvas.

```diff
  love.graphics.newCanvas();
  love.graphics.newCanvas(100, 100);
  love.graphics.newCanvas(100, 100, {});
+ love.graphics.newCanvas(100, 100, 80);
```

- Added two `love.graphics.newFont` variants.

```diff
  love.graphics.newFont("font.ttf");
+ love.graphics.newFont("font.ttf", 12, "normal");
  love.graphics.newFont("font.bmf", "image.png");
+ love.graphics.newFont();
```

- Documented one `love.graphics.newImage` variant.

```diff
  love.graphics.newImage("image.png");
  love.graphics.newImage(imageData);
  love.graphics.newImage(compressedImageData);
+ love.graphics.newImage("image.png", { linear: false });
```

- Documented one `love.graphics.newImageFont` variant.

```diff
  love.graphics.newImageFont("abc.png", "abc");
  love.graphics.newImageFont(imageData, "abc");
  love.graphics.newImageFont("abc.png", "abc", 0);
+ love.graphics.newImageFont(imageData, "abc", 0);
```

- Documented one `love.graphics.newParticleSystem` variant.

```diff
+ love.graphics.newParticleSystem(image);
  love.graphics.newParticleSystem(canvas);
```

- Added two `love.graphics.newVideo` variants
- Removed one `love.graphics.newVideo` variant. This variant was deprecated.

```diff
  love.graphics.newVideo("video.mp4");
  love.graphics.newVideo(videoStream);
+ love.graphics.newVideo("video.mp4", {});
+ love.graphics.newVideo(videoStream, {});
- love.graphics.newVideo(videoStream, false);
```

- Added two `love.graphics.setNewFont` variants.

```diff
+ love.graphics.setNewFont();
  love.graphics.setNewFont("font.ttf");
  love.graphics.setNewFont(file);
  love.graphics.setNewFont(data);
+ love.graphics.setNewFont(rasterizer);
```

- Removed `Stats` interface to improve the tooltip display of `love.graphics.getStats`.
