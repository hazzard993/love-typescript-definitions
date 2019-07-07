# Changelog

## Version 0.12.0

- Improved indenting of example code.
- Added some tables to describe string enums.
- Removed `FileInfo` and `ArrayImageSettings` and added them directly to their only associated function.

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
