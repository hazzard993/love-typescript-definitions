declare module "love.graphics" {
  import { Data } from "love.data";

  /**
   * A 2D polygon mesh used for drawing arbitrary textured shapes.
   * @link [Mesh](https://love2d.org/wiki/Mesh)
   */
  interface Mesh extends Drawable<"Mesh"> {
    /**
     * Attaches a vertex attribute from a different Mesh onto this Mesh, for
     * use when drawing.
     *
     * This can be used to share vertex attribute data between several
     * different Meshes.
     *
     * @param name The name of the vertex attribute to attach.
     * @param mesh The Mesh to get the vertex attribute from.
     * @link [Mesh:attachAttribute](https://love2d.org/wiki/Mesh:attachAttribute)
     * @since 0.10.0
     */
    attachAttribute(name: string, mesh: Mesh): void;

    /**
     * Attaches a vertex attribute from a different Mesh onto this Mesh, for
     * use when drawing.
     *
     * This can be used to share vertex attribute data between several
     * different Meshes.
     *
     * @param name The name of the vertex attribute to attach.
     * @param mesh The Mesh to get the vertex attribute from.
     * @param step Whether the attribute will be per-vertex or per-instance
     * when the mesh is drawn. (Default: "pervertex")
     * @param attachname The name of the attribute to use in shader code.
     * Defaults to the name of the attribute in the given mesh. Can be used
     * to use a different name for this attribute when rendering. (Default: name)
     * @link [Mesh:attachAttribute](https://love2d.org/wiki/Mesh:attachAttribute)
     * @since 0.10.0
     */
    attachAttribute(
      name: string,
      mesh: Mesh,
      step: VertexAttributeStep,
      attachname?: string,
    ): void;

    /**
     * Removes a previously attached vertex attribute from this Mesh.
     *
     * @param name The name of the attached vertex attribute to detach.
     * @return success, Whether the attribute was successfully detached.
     * @link [Mesh:detachAttribute](https://love2d.org/wiki/Mesh:detachAttribute)
     * @since 11.0
     */
    detachAttribute(name: string): boolean;

    /**
     * Immediately sends all modified vertex data in the Mesh to the graphics card.
     *
     * @link [Mesh:flush](https://love2d.org/wiki/Mesh:flush)
     * @since 0.10.0
     */
    flush(): void;

    /**
     * Gets the mode used when drawing the Mesh.
     *
     * @return mode, The mode used when drawing the Mesh.
     * @link [Mesh:getDrawMode](https://love2d.org/wiki/Mesh:getDrawMode)
     * @since 0.9.0
     */
    getDrawMode(): MeshDrawMode;

    /**
     * Gets the range of vertices used when drawing the Mesh.
     *
     * If the Mesh's draw range has not been set previously with Mesh:setDrawRange,
     * this function will return _nil/undefined_.
     *
     * @return min, The index of the first vertex used when drawing, or the index of the first value in the vertex map used if one is set for this Mesh.
     * @return max, The index of the last vertex used when drawing, or the index of the last value in the vertex map used if one is set for this Mesh.
     * @link [Mesh:getDrawRange](https://love2d.org/wiki/Mesh:getDrawRange)
     * @since 0.9.1
     */
    getDrawRange(): LuaMultiReturn<[min: number, max: number] | []>;

    /**
     * Gets the texture (Image or Canvas) used when drawing the Mesh.
     *
     * @return texture, The Image or Canvas to texture the Mesh with when drawing, or _nil/undefined_ if none is set.
     * @link [Mesh:getTexture](https://love2d.org/wiki/Mesh:getTexture)
     * @since 0.9.1
     */
    getTexture(): Texture | undefined;

    /**
     * Gets the properties of a vertex in the Mesh.
     *
     * @param index The index of the the vertex you want to retrieve the information for.
     * @return attributecomponent, The first component of the first vertex attribute in the specified vertex.
     * @return ..., Additional components of all vertex attributes in the specified vertex.
     * @link [Mesh:getVertex](https://love2d.org/wiki/Mesh:getVertex)
     * @since 0.9.0
     */
    getVertex(index: number): LuaMultiReturn<number[]>;

    /**
     * Gets the properties of a specific attribute within a vertex in the Mesh.
     *
     * Meshes without a custom vertex format specified in love.graphics.newMesh have
     * position as their first attribute, texture coordinates as their second
     * attribute, and color as their third attribute.
     *
     * @param vertexindex The index of the the vertex to be modified.
     * @param attributeindex The index of the attribute within the vertex to be modified.
     * @return properties, The properties of the specified attribute.
     * @link [Mesh:getVertexAttribute](https://love2d.org/wiki/Mesh:getVertexAttribute)
     * @since 0.10.0
     */
    getVertexAttribute(
      vertexindex: number,
      attributeindex: number,
    ): LuaMultiReturn<number[]>;

    /**
     * Returns the total number of vertices in the Mesh.
     *
     * @return num, The total number of vertices in this Mesh.
     * @link [Mesh:getVertexCount](https://love2d.org/wiki/Mesh:getVertexCount)
     * @since 0.9.0
     */
    getVertexCount(): number;

    /**
     * Gets the vertex format that the Mesh was created with.
     *
     * @return format, The vertex format of the Mesh, which is a table containing tables for each vertex attribute the Mesh was created with, in the form of {attribute, ...}.
     * @link [Mesh:getVertexFormat](https://love2d.org/wiki/Mesh:getVertexFormat)
     * @since 0.10.0
     */
    getVertexFormat(): Array<[string, string, ...Array<any>]>;

    /**
     * Gets the vertex map for the Mesh. The vertex map describes the order in which
     * the vertices are used when the Mesh is drawn. The vertices, vertex map, and
     * mesh draw mode work together to determine what exactly is displayed on the
     * screen.
     *
     * If no vertex map has been set previously via Mesh:setVertexMap, then this
     * function will return _nil/undefined_ in LÃ–VE 0.10.0+, or an empty table in 0.9.2 and
     * older.
     *
     * @return map, A table containing a list of vertex indices used when drawing.
     * @link [Mesh:getVertexMap](https://love2d.org/wiki/Mesh:getVertexMap)
     * @since 0.9.0
     */
    getVertexMap(): number[] | undefined;

    /**
     * Gets whether a specific vertex attribute in the Mesh is enabled. Vertex data
     * from disabled attributes is not used when drawing the Mesh.
     *
     * @param name The name of the vertex attribute to enable or disable.
     * @return enabled, Whether the vertex attribute is used when drawing this Mesh.
     * @link [Mesh:isAttributeEnabled](https://love2d.org/wiki/Mesh:isAttributeEnabled)
     * @since 0.10.0
     */
    isAttributeEnabled(name: string): boolean;

    /**
     * Enables or disables a specific vertex attribute in the Mesh. Vertex data from
     * disabled attributes is not used when drawing the Mesh.
     *
     * @param name The name of the vertex attribute to enable or disable.
     * @param enable Whether the vertex attribute is used when drawing this Mesh.
     * @link [Mesh:setAttributeEnabled](https://love2d.org/wiki/Mesh:setAttributeEnabled)
     * @since 0.10.0
     */
    setAttributeEnabled(name: string, enable: boolean): void;

    /**
     * Sets the mode used when drawing the Mesh.
     *
     * @param mode The mode to use when drawing the Mesh.
     * @link [Mesh:setDrawMode](https://love2d.org/wiki/Mesh:setDrawMode)
     * @since 0.9.0
     */
    setDrawMode(mode: MeshDrawMode): void;

    /**
     * Restricts the drawn vertices of the Mesh to a subset of the total.
     *
     * If a vertex map is used with the Mesh, this method will set a subset of the
     * values in the vertex map array to use, instead of a subset of the total
     * vertices in the Mesh.
     *
     * For example, if Mesh:setVertexMap(1, 2, 3, 1, 3, 4) and Mesh:setDrawRange(4, 6)
     * are called, vertices 1, 3, and 4 will be drawn.
     *
     * @param min The index of the first vertex to use when drawing, or the index of the first value in the vertex map to use if one is set for this Mesh.
     * @param max The index of the last vertex to use when drawing, or the index of the last value in the vertex map to use if one is set for this Mesh.
     * @link [Mesh:setDrawRange](https://love2d.org/wiki/Mesh:setDrawRange)
     * @since 0.9.1
     */
    setDrawRange(min: number, max: number): void;

    /**
     * Restricts the drawn vertices of the Mesh to a subset of the total.
     *
     * If a vertex map is used with the Mesh, this method will set a subset of the
     * values in the vertex map array to use, instead of a subset of the total
     * vertices in the Mesh.
     *
     * For example, if Mesh:setVertexMap(1, 2, 3, 1, 3, 4) and Mesh:setDrawRange(4, 6)
     * are called, vertices 1, 3, and 4 will be drawn.
     *
     * @link [Mesh:setDrawRange](https://love2d.org/wiki/Mesh:setDrawRange)
     * @since 0.9.1
     */
    setDrawRange(): void;

    /**
     * Sets the texture (Image or Canvas) used when drawing the Mesh.
     *
     * When called without an argument disables the texture. Untextured meshes have a
     * white color by default.
     *
     * @link [Mesh:setTexture](https://love2d.org/wiki/Mesh:setTexture)
     * @since 0.9.1
     */
    setTexture(): void;

    /**
     * Sets the texture (Image or Canvas) used when drawing the Mesh.
     *
     * When called without an argument disables the texture. Untextured meshes have a
     * white color by default.
     *
     * @param texture The Image or Canvas to texture the Mesh with when drawing.
     * @link [Mesh:setTexture](https://love2d.org/wiki/Mesh:setTexture)
     * @since 0.9.1
     */
    setTexture(texture: Texture): void;

    /**
     * Sets the properties of a vertex in the Mesh.
     * @param index The index of the the vertex you want to modify.
     * @param attributecomponent The first component of the first vertex attribute in the specified vertex.
     * @param ... Additional components of all vertex attributes in the specified vertex.
     * @link [Mesh:setVertex](https://love2d.org/wiki/Mesh:setVertex)
     * @since 0.9.0
     */
    setVertex(
      index: number,
      attributecomponent: number,
      ...vararg: number[]
    ): void;

    /**
     * Sets the properties of a vertex in the Mesh.
     *
     * @param index The index of the the vertex you want to modify.
     * @param vertex A table with vertex information, in the form of {attributecomponent, ...}.
     * @link [Mesh:setVertex](https://love2d.org/wiki/Mesh:setVertex)
     * @since 0.9.0
     */
    setVertex(index: number, vertex: Array<any>): void;

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
     * @link [Mesh:setVertex](https://love2d.org/wiki/Mesh:setVertex)
     * @since 0.9.0
     */
    setVertex(
      index: number,
      x: number,
      y: number,
      u: number,
      v: number,
      r?: number,
      g?: number,
      b?: number,
      a?: number,
    ): void;

    /**
     * Sets the properties of a vertex in the Mesh.
     *
     * @param index The index of the the vertex you want to modify.
     * @param vertex A table with vertex information.
     * @link [Mesh:setVertex](https://love2d.org/wiki/Mesh:setVertex)
     * @since 0.9.0
     */
    setVertex(index: number, vertex: VertexInformation): void;

    /**
     * Sets the properties of a specific attribute within a vertex in the Mesh.
     *
     * Meshes without a custom vertex format specified in love.graphics.newMesh have
     * position as their first attribute, texture coordinates as their second
     * attribute, and color as their third attribute.
     *
     * @param vertexindex The index of the the vertex to be modified.
     * @param attributeindex The index of the attribute within the vertex to be modified.
     * @param values The value of the first component of the attribute and so on.
     * @link [Mesh:setVertexAttribute](https://love2d.org/wiki/Mesh:setVertexAttribute)
     * @since 0.10.0
     */
    setVertexAttribute(
      vertexindex: number,
      attributeindex: number,
      ...values: Array<number>
    ): void;

    /**
     * Sets the vertex map for the Mesh. The vertex map describes the order in which
     * the vertices are used when the Mesh is drawn. The vertices, vertex map, and
     * mesh draw mode work together to determine what exactly is displayed on the
     * screen.
     *
     * The vertex map allows you to re-order or reuse vertices when drawing without
     * changing the actual vertex parameters or duplicating vertices. It is especially
     * useful when combined with different Mesh Draw Modes.
     *
     * @param map A table containing a list of vertex indices to use when drawing. Values must be in the range of [1, Mesh:getVertexCount()].
     * @link [Mesh:setVertexMap](https://love2d.org/wiki/Mesh:setVertexMap)
     * @since 0.9.0
     */
    setVertexMap(map: number[]): void;

    /**
     * Sets the vertex map for the Mesh. The vertex map describes the order in which
     * the vertices are used when the Mesh is drawn. The vertices, vertex map, and
     * mesh draw mode work together to determine what exactly is displayed on the
     * screen.
     *
     * The vertex map allows you to re-order or reuse vertices when drawing without
     * changing the actual vertex parameters or duplicating vertices. It is especially
     * useful when combined with different Mesh Draw Modes.
     *
     * @param vi1 The index of the first vertex to use when drawing. Must be in the range of [1, Mesh:getVertexCount()].
     * @param vi2 The index of the second vertex to use when drawing.
     * @param vi3 The index of the third vertex to use when drawing.
     * @link [Mesh:setVertexMap](https://love2d.org/wiki/Mesh:setVertexMap)
     * @since 0.9.0
     */
    setVertexMap(...vertexIndexes: number[]): void;

    /**
     * Sets the vertex map for the Mesh.
     *
     * @param data Array of vertex indices to use when drawing. Values must be in the range of [0, Mesh:getVertexCount()-1]
     * @param datatype Datatype of the vertex indices array above.
     * @link [Mesh:setVertexMap](https://love2d.org/wiki/Mesh:setVertexMap)
     * @since 0.9.0
     */
    setVertexMap(data: Data, datatype: IndexDataType): void;

    /**
     * Replaces a range of vertices in the Mesh with new ones. The total number of
     * vertices in a Mesh cannot be changed after it has been created.
     *
     * @param vertices The table filled with vertex information tables for each vertex, in the form of where each vertex is a table in the form of {attributecomponent, ...}.
     * @link [Mesh:setVertices](https://love2d.org/wiki/Mesh:setVertices)
     * @since 0.9.0
     */
    setVertices(vertices: VertexInformation[], startvertex: number): void;

    /**
     * Sets the vertex components of the Mesh by copying directly from the memory of a Data object.
     *
     * @param data A Data object to copy from. The contents of the Data must match the layout of this Mesh's vertex format.
     * @param startvertex The index of the first vertex to replace. (Default: 1)
     * @link [Mesh:setVertices](https://love2d.org/wiki/Mesh:setVertices)
     * @since 0.9.0
     */
    setVertices(data: Data, startvertex?: number): void;
  }
}
