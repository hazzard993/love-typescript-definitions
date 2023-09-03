declare module "love" {
  import { RecordingDevice, Source } from "love.audio";
  import { ByteData, CompressedData, Data } from "love.data";
  import { File, FileData } from "love.filesystem";
  import { GlyphData, Rasterizer } from "love.font";
  import {
    Canvas,
    Drawable,
    Font,
    Image,
    Mesh,
    ParticleSystem,
    Quad,
    Shader,
    SpriteBatch,
    Text,
    Texture,
    Video,
  } from "love.graphics";
  import { ImageData, CompressedImageData } from "love.image";
  import { Joystick } from "love.joystick";
  import { BezierCurve, RandomGenerator, Transform } from "love.math";
  import { Cursor } from "love.mouse";
  import {
    Body,
    ChainShape,
    CircleShape,
    Contact,
    DistanceJoint,
    EdgeShape,
    Fixture,
    FrictionJoint,
    GearJoint,
    Joint,
    MotorJoint,
    MouseJoint,
    PolygonShape,
    PrismaticJoint,
    PulleyJoint,
    RevoluteJoint,
    RopeJoint,
    Shape,
    WeldJoint,
    WheelJoint,
    World,
  } from "love.physics";
  import { Decoder, SoundData } from "love.sound";
  import { Channel, Thread } from "love.thread";
  import { VideoStream } from "love.video";

  type Types = {
    Object: Type<keyof Types>;
    RecordingDevice: RecordingDevice;
    Source: Source;
    ByteData: ByteData;
    Data: Data;
    File: File;
    FileData: FileData;
    Font: Font;
    GlyphData: GlyphData;
    Rasterizer: Rasterizer;
    Canvas: Canvas;
    Drawable: Drawable;
    Image: Image;
    Mesh: Mesh;
    ParticleSystem: ParticleSystem;
    Quad: Quad;
    Shader: Shader;
    SpriteBatch: SpriteBatch;
    Text: Text;
    Texture: Texture;
    Video: Video;
    CompressedImageData: CompressedImageData;
    ImageData: ImageData;
    Joystick: Joystick;
    BezierCurve: BezierCurve;
    CompressedData: CompressedData;
    RandomGenerator: RandomGenerator;
    Transform: Transform;
    Cursor: Cursor;
    Body: Body;
    ChainShape: ChainShape;
    CircleShape: CircleShape;
    Contact: Contact;
    DistanceJoint: DistanceJoint;
    EdgeShape: EdgeShape;
    Fixture: Fixture;
    FrictionJoint: FrictionJoint;
    GearJoint: GearJoint;
    Joint: Joint;
    MotorJoint: MotorJoint;
    MouseJoint: MouseJoint;
    PolygonShape: PolygonShape;
    PrismaticJoint: PrismaticJoint;
    PulleyJoint: PulleyJoint;
    RevoluteJoint: RevoluteJoint;
    RopeJoint: RopeJoint;
    Shape: Shape;
    WeldJoint: WeldJoint;
    WheelJoint: WheelJoint;
    World: World;
    Decoder: Decoder;
    SoundData: SoundData;
    Channel: Channel;
    Thread: Thread;
    VideoStream: VideoStream;
  };
}
