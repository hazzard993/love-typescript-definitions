declare let loveObject: LoveObject;

if (loveObject.typeOf("Image")) {
    const [width, height] = loveObject.getDimensions();
}

if (loveObject.typeOf("Quad")) {
    const [width, height] = loveObject.getTextureDimensions();
}
