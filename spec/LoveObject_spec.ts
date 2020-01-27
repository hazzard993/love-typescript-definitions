declare let type: Type;

if (type.typeOf("Image")) {
    const [width, height] = type.getDimensions();
}

if (type.typeOf("Quad")) {
    const [width, height] = type.getTextureDimensions();
}
