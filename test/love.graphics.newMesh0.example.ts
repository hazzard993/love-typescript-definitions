// Taken from https://love2d.org/wiki/love.graphics.newMesh
// Creates and draws a Mesh identical to a normal drawn image but with different colors at each corner
let image: Image;

love.load = () => {
	image = love.graphics.newImage("pig.png");

	const vertices: Array<VertexInformation> = [
		[
			// top-left corner (red-tinted)
			0, 0, // position of the vertex
			0, 0, // texture coordinate at the vertex position
			1, 0, 0, // color of the vertex
        ],
		[
			// top-right corner (green-tinted)
			image.getWidth(), 0,
			1, 0, // texture coordinates are in the range of [0, 1]
			0, 1, 0
        ],
		[
			// bottom-right corner (blue-tinted)
			image.getWidth(), image.getHeight(),
			1, 1,
			0, 0, 1
        ],
		[
			// bottom-left corner (yellow-tinted)
			0, image.getHeight(),
			0, 1,
			1, 1, 0
        ],
    ];

	// the Mesh DrawMode "fan" works well for 4-vertex Meshes.
	mesh = love.graphics.newMesh(vertices, "fan");
    mesh.setTexture(image);
};

love.draw = () => {
	love.graphics.draw(mesh, 0, 0);
};
