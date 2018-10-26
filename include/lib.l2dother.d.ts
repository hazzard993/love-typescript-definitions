// Other definitions that need to be included alongside love.d.ts.
// Needs l2d.lib.d.ts to work and l2d.lib.dts needs this to work.

type RestartString = "restart"
type VertexWinding = "cw" | "ccw"
type CullMode = "back" | "front" | "none"
type LightUserData = number
type LuaTable = Object
type Variant = LuaTable | number | string | boolean
type TextureType = "2d" | "array" | "cube" | "volume"
type ShaderVariableType = any 	// Unknown type :(

// Comment out the below code if not including l2d.lib.d.ts
type PixelFormat = CanvasFormat
