// Extra details required for Typescript to work
// This file is added to dist/ upon a build
type RestartString = "restart"
type VertexWinding = "cw" | "ccw"
type CullMode = "back" | "front" | "none"
type LuaFunction = Function
type LightUserData = number
type LuaTable = Object
type Variant = LuaTable | number | string | boolean
type TextureType = "2d" | "array" | "cube" | "volume"
type ShaderVariableType = any 	// Unknown type :(
type PixelFormat = CanvasFormat
