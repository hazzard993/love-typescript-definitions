/**
 * The superclass of all LÖVE types.
 *
 * Use `typeOf` to determine what subtype that is.
 * @link [Object](https://love2d.org/wiki/Object)
 */
interface LoveObject {

    __opaque: never;

    /**
     * Destroys the object's Lua reference.
     *
     * The object will be completely deleted if it's not referenced by any other LÖVE object or thread.
     * @link [Object:release](https://love2d.org/wiki/Object:release)
     */
    release(): boolean;

    /**
     * Gets the type of the object as a string.
     *
     * @return type, The type as a string.
     * @link [Object:type](https://love2d.org/wiki/Object:type)
     */
    type(): string;

    /**
     * Checks whether an object is of a certain type. If the object has the type with
     * the specified name in its hierarchy, this function will return true.
     *
     * @param name The name of the type to check for.
     * @return b, True if the object is of the specified type, false otherwise.
     * @link [Object:typeOf](https://love2d.org/wiki/Object:typeOf)
     */
    typeOf(name: "Object"): this is LoveObject;
    typeOf(name: "RecordingDevice"): this is RecordingDevice;
    typeOf(name: "Source"): this is Source;
    typeOf(name: "ByteData"): this is ByteData;
    typeOf(name: "Data"): this is Data;
    typeOf(name: "File"): this is File;
    typeOf(name: "FileData"): this is FileData;
    typeOf(name: "BMFontRasterizer"): this is BMFontRasterizer;
    typeOf(name: "Font"): this is Font;
    typeOf(name: "GlyphData"): this is GlyphData;
    typeOf(name: "Rasterizer"): this is Rasterizer;
    typeOf(name: "Canvas"): this is Canvas;
    typeOf(name: "Drawable"): this is Drawable;
    typeOf(name: "Image"): this is Image;
    typeOf(name: "Mesh"): this is Mesh;
    typeOf(name: "ParticleSystem"): this is ParticleSystem;
    typeOf(name: "Quad"): this is Quad;
    typeOf(name: "Shader"): this is Shader;
    typeOf(name: "SpriteBatch"): this is SpriteBatch;
    typeOf(name: "Text"): this is Text;
    typeOf(name: "Texture"): this is Texture;
    typeOf(name: "Video"): this is Video;
    typeOf(name: "CompressedImageData"): this is CompressedImageData;
    typeOf(name: "ImageData"): this is ImageData;
    typeOf(name: "Joystick"): this is Joystick;
    typeOf(name: "BezierCurve"): this is BezierCurve;
    typeOf(name: "CompressedData"): this is CompressedData;
    typeOf(name: "RandomGenerator"): this is RandomGenerator;
    typeOf(name: "Transform"): this is Transform;
    typeOf(name: "Cursor"): this is Cursor;
    typeOf(name: "Body"): this is Body;
    typeOf(name: "ChainShape"): this is ChainShape;
    typeOf(name: "CircleShape"): this is CircleShape;
    typeOf(name: "Contact"): this is Contact;
    typeOf(name: "DistanceJoint"): this is DistanceJoint;
    typeOf(name: "EdgeShape"): this is EdgeShape;
    typeOf(name: "Fixture"): this is Fixture;
    typeOf(name: "FrictionJoint"): this is FrictionJoint;
    typeOf(name: "GearJoint"): this is GearJoint;
    typeOf(name: "Joint"): this is Joint;
    typeOf(name: "MotorJoint"): this is MotorJoint;
    typeOf(name: "PolygonShape"): this is PolygonShape;
    typeOf(name: "PrismaticJoint"): this is PrismaticJoint;
    typeOf(name: "PulleyJoint"): this is PulleyJoint;
    typeOf(name: "RevoluteJoint"): this is RevoluteJoint;
    typeOf(name: "RopeJoint"): this is RopeJoint;
    typeOf(name: "Shape"): this is Shape;
    typeOf(name: "WeldJoint"): this is WeldJoint;
    typeOf(name: "WheelJoint"): this is WheelJoint;
    typeOf(name: "World"): this is World;
    typeOf(name: "Decoder"): this is Decoder;
    typeOf(name: "SoundData"): this is SoundData;
    typeOf(name: "Channel"): this is Channel;
    typeOf(name: "Thread"): this is Thread;
    typeOf(name: "VideoStream"): this is VideoStream;

}
