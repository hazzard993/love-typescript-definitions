/**
 * A 2D polygon mesh used for drawing arbitrary textured shapes.
 * @link [Mesh](https://love2d.org/wiki/Mesh)
 */
declare interface Mesh extends Drawable {
    /**
     * Attaches a vertex attribute from a different Mesh onto this Mesh, for use when
     * drawing. This can be used to share vertex attribute data between several
     * different Meshes.
     *
     * @param name The name of the vertex attribute to attach.
     * @param mesh The Mesh to get the vertex attribute from.
     */
    attachAttribute(name: string, mesh: Mesh): void;

    /**
     * Removes a previously attached vertex attribute from this Mesh.
     *
     * @param name The name of the attached vertex attribute to detach.
     * @return success, Whether the attribute was successfully detached.
     */
    detachAttribute(name: string): boolean;

    /**
     * Immediately sends all modified vertex data in the Mesh to the graphics card.
     * @link [Mesh:flush](https://love2d.org/wiki/Mesh:flush)
     */
    flush(): void;

    /**
     * Gets the mode used when drawing the Mesh.
     *
     * @return mode, The mode used when drawing the Mesh.
     */
    getDrawMode(): MeshDrawMode;

    /**
     * Gets the range of vertices used when drawing the Mesh.
     *
     *
     * If the Mesh's draw range has not been set previously with Mesh:setDrawRange,
     * this function will return _nil/null_.
     *
     * @return min, The index of the first vertex used when drawing, or the index of the first value in the vertex map used if one is set for this Mesh.
     * @return max, The index of the last vertex used when drawing, or the index of the last value in the vertex map used if one is set for this Mesh.
     * @tupleReturn
     * @link [Mesh:getDrawRange](https://love2d.org/wiki/Mesh:getDrawRange)
     */
    getDrawRange(): [number | null, number | null];

    /**
     * Gets the texture (Image or Canvas) used when drawing the Mesh.
     *
     * @return texture, The Image or Canvas to texture the Mesh with when drawing, or _nil/null_ if none is set.
     * @link [Mesh:getTexture](https://love2d.org/wiki/Mesh:getTexture)
     */
    getTexture(): Texture | null;

    /**
     * Gets the properties of a vertex in the Mesh.
     *
     * @param index The index of the the vertex you want to retrieve the information for.
     * @return attributecomponent, The first component of the first vertex attribute in the specified vertex.
     * @return ..., Additional components of all vertex attributes in the specified vertex.
     */
    /** @tupleReturn */
    getVertex(index: number): [number, number];

    /**
     * Gets the properties of a vertex in the Mesh.
     *
     * @param index The index of the the vertex you want to retrieve the information for.
     * @return x, The position of the vertex on the x-axis.
     * @return y, The position of the vertex on the y-axis.
     * @return u, The horizontal component of the texture coordinate.
     * @return v, The vertical component of the texture coordinate.
     * @return r, The red component of the vertex's color.
     * @return g, The green component of the vertex's color.
     * @return b, The blue component of the vertex's color.
     * @return a, The alpha component of the vertex's color.
     */
    /** @tupleReturn */
    getVertex(index: number): [number, number, number, number, number, number, number, number];

    /**
     * Gets the properties of a specific attribute within a vertex in the Mesh.
     *
     *
     * Meshes without a custom vertex format specified in love.graphics.newMesh have
     * position as their first attribute, texture coordinates as their second
     * attribute, and color as their third attribute.
     *
     * @param vertexindex The index of the the vertex to be modified.
     * @param attributeindex The index of the attribute within the vertex to be modified.
     * @return value1, The value of the first component of the attribute.
     * @return value2, The value of the second component of the attribute.
     * @return ..., Any additional vertex attribute components.
     */
    /** @tupleReturn */
    getVertexAttribute(vertexindex: number, attributeindex: number): [number, number, number];

    /**
     * Returns the total number of vertices in the Mesh.
     *
     * @return num, The total number of vertices in this Mesh.
     */
    getVertexCount(): number;

    /**
     * Gets the vertex format that the Mesh was created with.
     *
     * @return format, The vertex format of the Mesh, which is a table containing tables for each vertex attribute the Mesh was created with, in the form of {attribute, ...}.
     */
    getVertexFormat(): table;

    /**
     * Gets the vertex map for the Mesh. The vertex map describes the order in which
     * the vertices are used when the Mesh is drawn. The vertices, vertex map, and
     * mesh draw mode work together to determine what exactly is displayed on the
     * screen.
     *
     *
     * If no vertex map has been set previously via Mesh:setVertexMap, then this
     * function will return _nil/null_ in LÖVE 0.10.0+, or an empty table in 0.9.2 and
     * older.
     *
     * @return map, A table containing a list of vertex indices used when drawing.
     * @link [Mesh:getVertexMap](https://love2d.org/wiki/Mesh:getVertexMap)
     */
    getVertexMap(): table | null;

    /**
     * Gets whether a specific vertex attribute in the Mesh is enabled. Vertex data
     * from disabled attributes is not used when drawing the Mesh.
     *
     * @param name The name of the vertex attribute to enable or disable.
     * @return enabled, Whether the vertex attribute is used when drawing this Mesh.
     */
    isAttributeEnabled(name: string): boolean;

    /**
     * Enables or disables a specific vertex attribute in the Mesh. Vertex data from
     * disabled attributes is not used when drawing the Mesh.
     *
     * @param name The name of the vertex attribute to enable or disable.
     * @param enable Whether the vertex attribute is used when drawing this Mesh.
     */
    setAttributeEnabled(name: string, enable: boolean): void;

    /**
     * Sets the mode used when drawing the Mesh.
     *
     * @param mode The mode to use when drawing the Mesh.
     */
    setDrawMode(mode: MeshDrawMode): void;

    /**
     * Restricts the drawn vertices of the Mesh to a subset of the total.
     *
     *
     * If a vertex map is used with the Mesh, this method will set a subset of the
     * values in the vertex map array to use, instead of a subset of the total
     * vertices in the Mesh.
     *
     *
     * For example, if Mesh:setVertexMap(1, 2, 3, 1, 3, 4) and Mesh:setDrawRange(4, 6)
     * are called, vertices 1, 3, and 4 will be drawn.
     *
     * @param min The index of the first vertex to use when drawing, or the index of the first value in the vertex map to use if one is set for this Mesh.
     * @param max The index of the last vertex to use when drawing, or the index of the last value in the vertex map to use if one is set for this Mesh.
     */
    setDrawRange(min: number, max: number): void;

    /**
     * Restricts the drawn vertices of the Mesh to a subset of the total.
     *
     *
     * If a vertex map is used with the Mesh, this method will set a subset of the
     * values in the vertex map array to use, instead of a subset of the total
     * vertices in the Mesh.
     *
     *
     * For example, if Mesh:setVertexMap(1, 2, 3, 1, 3, 4) and Mesh:setDrawRange(4, 6)
     * are called, vertices 1, 3, and 4 will be drawn.
     *
     */
    setDrawRange(): void;

    /**
     * Sets the texture (Image or Canvas) used when drawing the Mesh.
     *
     *
     * When called without an argument disables the texture. Untextured meshes have a
     * white color by default.
     *
     */
    setTexture(): void;

    /**
     * Sets the texture (Image or Canvas) used when drawing the Mesh.
     *
     *
     * When called without an argument disables the texture. Untextured meshes have a
     * white color by default.
     *
     * @param texture The Image or Canvas to texture the Mesh with when drawing.
     */
    setTexture(texture: Texture): void;

    /**
     * Sets the properties of a vertex in the Mesh.
     *
     * @param index The index of the the vertex you want to modify.
     * @param attributecomponent The first component of the first vertex attribute in the specified vertex.
     * @param ... Additional components of all vertex attributes in the specified vertex.
     */
    setVertex(index: number, attributecomponent: number, ...vararg: Array<number>): void;

    /**
     * Sets the properties of a vertex in the Mesh.
     *
     * @param index The index of the the vertex you want to modify.
     * @param vertex A table with vertex information, in the form of {attributecomponent, ...}.
     */
    setVertex(index: number, vertex: table): void;

    /**
     * Sets the properties of a vertex in the Mesh.
     *
     * @param index The index of the the vertex you want to modify.
     * @param x The position of the vertex on the x-axis.
     * @param y The position of the vertex on the y-axis.
     * @param u The horizontal component of the texture coordinate.
     * @param v The vertical component of the texture coordinate.
     * @param r The red component of the vertex's color.
     * @param g The green component of the vertex's color.
     * @param b The blue component of the vertex's color.
     * @param a The alpha component of the vertex's color.
     */
    setVertex(index: number, x: number, y: number, u: number, v: number, r?: number, g?: number, b?: number, a?: number): void;

    /**
     * Sets the properties of a vertex in the Mesh.
     *
     * @param index The index of the the vertex you want to modify.
     * @param vertex A table with vertex information.
     */
    setVertex(index: number, vertex: table): void;

    /**
     * Sets the properties of a specific attribute within a vertex in the Mesh.
     *
     *
     * Meshes without a custom vertex format specified in love.graphics.newMesh have
     * position as their first attribute, texture coordinates as their second
     * attribute, and color as their third attribute.
     *
     * @param vertexindex The index of the the vertex to be modified.
     * @param attributeindex The index of the attribute within the vertex to be modified.
     * @param value1 The value of the first component of the attribute.
     * @param value2 The value of the second component of the attribute.
     * @param ... Any additional vertex attribute components.
     */
    setVertexAttribute(vertexindex: number, attributeindex: number, value1: number, value2: number, ...vararg: Array<number>): void;

    /**
     * Sets the vertex map for the Mesh. The vertex map describes the order in which
     * the vertices are used when the Mesh is drawn. The vertices, vertex map, and
     * mesh draw mode work together to determine what exactly is displayed on the
     * screen.
     *
     *
     * The vertex map allows you to re-order or reuse vertices when drawing without
     * changing the actual vertex parameters or duplicating vertices. It is especially
     * useful when combined with different Mesh Draw Modes.
     *
     * @param map A table containing a list of vertex indices to use when drawing. Values must be in the range of [1, Mesh:getVertexCount()].
     */
    setVertexMap(map: table): void;

    /**
     * Sets the vertex map for the Mesh. The vertex map describes the order in which
     * the vertices are used when the Mesh is drawn. The vertices, vertex map, and
     * mesh draw mode work together to determine what exactly is displayed on the
     * screen.
     *
     *
     * The vertex map allows you to re-order or reuse vertices when drawing without
     * changing the actual vertex parameters or duplicating vertices. It is especially
     * useful when combined with different Mesh Draw Modes.
     *
     * @param vi1 The index of the first vertex to use when drawing. Must be in the range of [1, Mesh:getVertexCount()].
     * @param vi2 The index of the second vertex to use when drawing.
     * @param vi3 The index of the third vertex to use when drawing.
     */
    setVertexMap(vi1: number, vi2: number, vi3: number): void;

    /**
     * Replaces a range of vertices in the Mesh with new ones. The total number of
     * vertices in a Mesh cannot be changed after it has been created.
     *
     * @param vertices The table filled with vertex information tables for each vertex, in the form of where each vertex is a table in the form of {attributecomponent, ...}.
     */
    setVertices(vertices: table): void;

    /**
     * Replaces a range of vertices in the Mesh with new ones. The total number of
     * vertices in a Mesh cannot be changed after it has been created.
     *
     * @param vertices The table filled with vertex information tables for each vertex as follows:
     */
    setVertices(vertices: table): void;

}
