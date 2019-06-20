# Changelog

## Version 0.?.?

```sh
love-typescript-definitions -> love.<callback> must be assigned
love-typescript-definitions/love-callback-namespace
```

```diff
+ Allows only one `love.<callback>` implementation.
- Implementation's type safety is up to the implementor.
  Since you are writing your own implementation of love.<callback>, you can specify it however you want.
  Love 2D will only use these callbacks a certain way.
```

Callbacks can be declared like this.

```ts
namespace love {
    export function load(arg: string[], unfilteredArg: string[]) {}

    export function update(dt: number) {}

    export function draw() {}
}
```

- +2 `love.graphics.draw` variants

```diff
  love.graphics.draw(image);
  love.graphics.draw(image, quad);
+ love.graphics.draw(image, transform);
+ love.graphics.draw(image, quad, transform);
```

- +1 `love.graphics.clear` variant. This was possible before but now TypeScript will display the correct documentation when highlighting the fourth variant.

```diff
  love.graphics.clear();
  love.graphics.clear(0, 0, 0);
  love.graphics.clear([0, 0, 0, 0], [0, 0, 0, 0], true, true);
+ love.graphics.clear(true, 255, 255);
```

- Modified `love.graphics.stencil`'s function argument. `Function` to `() => void`
- Modified `love.graphics.captureScreenshot`'s function argument. `Function` to `() => void`

- +1 `love.graphics.newCanvas` variant. Used to create a volume or array texture-type Canvas.

```diff
  love.graphics.newCanvas();
  love.graphics.newCanvas(100, 100);
  love.graphics.newCanvas(100, 100, {});
+ love.graphics.newCanvas(100, 100, 80);
```

- +2 `love.graphics.newFont` variants.

```diff
  love.graphics.newFont("font.ttf");
+ love.graphics.newFont("font.ttf", 12, "normal");
  love.graphics.newFont("font.bmf", "image.png");
+ love.graphics.newFont();
```

- `love.graphics.newImage`'s 4th variant's table flags are documented.

```diff
  love.graphics.newImage("image.png");
  love.graphics.newImage(imageData);
  love.graphics.newImage(compressedImageData);
+ love.graphics.newImage("image.png", { linear: false });
```

- +1 undocumented `love.graphics.newImageFont` variation

```diff
  love.graphics.newImageFont("abc.png", "abc");
  love.graphics.newImageFont(imageData, "abc");
  love.graphics.newImageFont("abc.png", "abc", 0);
+ love.graphics.newImageFont(imageData, "abc", 0);
```

- +1 documented variation of `love.graphics.newParticleSystem`

```diff
+ love.graphics.newParticleSystem(image);
  love.graphics.newParticleSystem(canvas);
```

- +2 `love.graphics.newVideo` variants
- -1 `love.graphics.newVideo` deprecated variant

```diff
  love.graphics.newVideo("video.mp4");
  love.graphics.newVideo(videoStream);
+ love.graphics.newVideo("video.mp4", {});
+ love.graphics.newVideo(videoStream, {});
- love.graphics.newVideo(videoStream, false);
```

- +2 `love.graphics.setNewFont` variants

```diff
+ love.graphics.setNewFont();
  love.graphics.setNewFont("font.ttf");
  love.graphics.setNewFont(file);
  love.graphics.setNewFont(data);
+ love.graphics.setNewFont(rasterizer);
```

- `love.graphics.getStats` should show all returned properties upon hovering.

```ts
love.set("load", args => {});

love.set("update", dt => {});

love.set("draw", () => {});
```

```ts
namespace love {
    export function load(arg: string[], unfilteredArg: string[]) {}

    export function update(dt: number) {}

    export function draw() {}
}
```

```ts
namespace love {
    load = args => {

    }

    update = dt => {

    }

    draw = () => {

    }
}
```

```ts
love.load = args => {};

love.update = dt => {};

love.draw = () => {};
```

```ts
({ load: love.load, update: love.update, draw: love.draw } = {
    load() {

    }

    update() {

    }

    draw() {

    }
});
```