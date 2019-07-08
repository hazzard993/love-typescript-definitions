/**
 * A ParticleSystem can be used to create particle effects like fire or smoke.
 * @link [ParticleSystem](https://love2d.org/wiki/ParticleSystem)
 */
declare interface ParticleSystem extends Drawable {
    /**
     * Creates an identical copy of the ParticleSystem in the stopped state.
     *
     *
     * Cloned ParticleSystem inherit all the set-able state of the original
     * ParticleSystem, but they are initialized stopped.
     *
     * @return particlesystem, The new identical copy of this ParticleSystem.
     */
    clone(): ParticleSystem;

    /**
     * Emits a burst of particles from the particle emitter.
     *
     * @param numparticles The amount of particles to emit. The number of emitted particles will be truncated if the particle system's max buffer size is reached.
     */
    emit(numparticles: number): void;

    /**
     * Gets the amount of particles that are currently in the system.
     *
     * @return count, The current number of live particles.
     */
    getCount(): number;

    /**
     * Gets the area-based spawn parameters for the particles.
     *
     * @return distribution, The type of distribution for new particles.
     * @return dx, The maximum spawn distance from the emitter along the x-axis for uniform distribution, or the standard deviation along the x-axis for normal distribution.
     * @return dy, The maximum spawn distance from the emitter along the y-axis for uniform distribution, or the standard deviation along the y-axis for normal distribution.
     * @tupleReturn
     */
    getAreaSpread(): [AreaSpreadDistribution, number, number];

    /**
     * Gets the size of the buffer (the max allowed amount of particles in the
     * system).
     *
     * @return buffer, The buffer size.
     */
    getBufferSize(): number;

    /**
     * Gets a series of colors to apply to the particle sprite. The particle system
     * will interpolate between each color evenly over the particle's lifetime. Color
     * modulation needs to be activated for this function to have any effect.
     *
     *
     * Arguments are passed in groups of four, representing the components of the
     * desired RGBA value. At least one color must be specified. A maximum of eight
     * may be used.
     *
     * @return r1, First color, red component (0-255).
     * @return g1, First color, green component (0-255).
     * @return b1, First color, blue component (0-255).
     * @return a1, First color, alpha component (0-255).
     * @return r2, Second color, red component (0-255).
     * @return g2, Second color, green component (0-255).
     * @return b2, Second color, blue component (0-255).
     * @return a2, Second color, alpha component (0-255).
     * @return ..., Etc.
     * @tupleReturn
     */
    getColors(): [number, number, number, number, number, number, number, number, number];

    /**
     * Gets the direction the particles will be emitted in.
     *
     * @return direction, The direction of the particles (in radians).
     */
    getDirection(): number;

    /**
     * Gets the area-based spawn parameters for the particles.
     * @return distribution, The type of distribution for new particles.
     * @return dx, The maximum spawn distance from the emitter along the x-axis for uniform distribution, or the standard deviation along the x-axis for normal distribution.
     * @return dy, The maximum spawn distance from the emitter along the y-axis for uniform distribution, or the standard deviation along the y-axis for normal distribution.
     * @return angle, The angle in radians of the emission area.
     * @return directionRelativeToCenter, True if newly spawned particles will be oriented relative to the center of the emission area, false otherwise.
     * @link [ParticleSystem:getEmissionArea](https://love2d.org/wiki/ParticleSystem:getEmissionArea)
     */
    getEmissionArea(): [AreaSpreadDistribution, number, number, number, boolean];

    /**
     * Gets the amount of particles emitted per second.
     *
     * @return rate, The amount of particles per second.
     */
    getEmissionRate(): number;

    /**
     * Gets the mode to use when the ParticleSystem adds new particles.
     *
     * @return mode, The mode to use when the ParticleSystem adds new particles.
     */
    getInsertMode(): ParticleInsertMode;

    /**
     * Gets the linear acceleration (acceleration along the x and y axes) for
     * particles.
     *
     *
     * Every particle created will accelerate along the x and y axes between xmin,ymin
     * and xmax,ymax.
     *
     * @return xmin, The minimum acceleration along the x axis.
     * @return ymin, The minimum acceleration along the y axis.
     * @return xmax, The maximum acceleration along the x axis.
     * @return ymax, The maximum acceleration along the y axis.
     * @tupleReturn
     */
    getLinearAcceleration(): [number, number, number, number];

    /**
     * Gets the amount of linear damping (constant deceleration) for particles.
     *
     * @return min, The minimum amount of linear damping applied to particles.
     * @return max, The maximum amount of linear damping applied to particles.
     * @tupleReturn
     */
    getLinearDamping(): [number, number];

    /**
     * Gets how long the particle system should emit particles (if -1 then it emits
     * particles forever).
     *
     * @return life, The lifetime of the emitter (in seconds).
     */
    getEmitterLifetime(): number;

    /**
     * Get the offget position which the particle sprite is rotated around. If this
     * function is not used, the particles rotate around their center.
     *
     * @return x, The x coordinate of the rotation offget.
     * @return y, The y coordinate of the rotation offget.
     * @tupleReturn
     */
    getOffset(): [number, number];

    /**
     * Gets the life of the particles.
     *
     * @return min, The minimum life of the particles (seconds).
     * @return max, The maximum life of the particles (seconds).
     * @tupleReturn
     */
    getParticleLifetime(): [number, number];

    /**
     * Gets the series of Quads used for the particle sprites.
     *
     * @return quads, A table containing the Quads used.
     */
    getQuads(): Array<Quad>;

    /**
     * Gets the position of the emitter.
     *
     * @return x, Position along x-axis.
     * @return y, Position along y-axis.
     * @tupleReturn
     */
    getPosition(): [number, number];

    /**
     * Get the radial acceleration (away from the emitter).
     *
     * @return min, The minimum acceleration.
     * @return max, The maximum acceleration.
     * @tupleReturn
     */
    getRadialAcceleration(): [number, number];

    /**
     * Gets the rotation of the image upon particle creation (in radians).
     *
     * @return min, The minimum initial angle (radians).
     * @return max, The maximum initial angle (radians).
     * @tupleReturn
     */
    getRotation(): [number, number];

    /**
     * Gets a series of sizes by which to scale a particle sprite. 1.0 is normal size.
     * The particle system will interpolate between each size evenly over the
     * particle's lifetime.
     *
     *
     * At least one size must be specified. A maximum of eight may be used.
     *
     * @return size1, The first size.
     * @return size2, The second size.
     * @return ..., Etc.
     * @tupleReturn
     */
    getSizes(): Array<number>;

    /**
     * Gets the degree of variation (0 meaning no variation and 1 meaning full
     * variation between start and end).
     *
     * @return variation, The degree of variation (0 meaning no variation and 1 meaning full variation between start and end).
     */
    getSizeVariation(): number;

    /**
     * Gets the speed of the particles.
     *
     * @return min, The minimum linear speed of the particles.
     * @return max, The maximum linear speed of the particles.
     * @tupleReturn
     */
    getSpeed(): [number, number];

    /**
     * Gets the spin of the sprite.
     *
     * @return min, The minimum spin (radians per second).
     * @return max, The maximum spin (radians per second).
     * @tupleReturn
     */
    getSpin(): [number, number];

    /**
     * Gets the degree of variation (0 meaning no variation and 1 meaning full
     * variation between start and end).
     *
     * @return variation, The degree of variation (0 meaning no variation and 1 meaning full variation between start and end).
     */
    getSpinVariation(): number;

    /**
     * Gets the amount of spread for the system.
     *
     * @return spread, The amount of spread (radians).
     */
    getSpread(): number;

    /**
     * Gets the Image or Canvas which is to be emitted.
     *
     * @return texture, An Image or Canvas to use for the particle.
     */
    getTexture(): Texture;

    /**
     * Gets the tangential acceleration (acceleration perpendicular to the particle's
     * direction).
     *
     * @return min, The minimum acceleration.
     * @return max, The maximum acceleration.
     * @tupleReturn
     */
    getTangentialAcceleration(): [number, number];

    /**
     * Gets whether particle angles and rotations are relative to their velocities. If
     * enabled, particles are aligned to the angle of their velocities and rotate
     * relative to that angle.
     *
     * @return enabled, True if relative particle rotation is enabled, false if it's disabled.
     */
    hasRelativeRotation(): boolean;

    /**
     * Checks whether the particle system is actively emitting particles.
     *
     * @return active, True if system is active, false otherwise.
     */
    isActive(): boolean;

    /**
     * Checks whether the particle system is paused.
     *
     * @return paused, True if system is paused, false otherwise.
     */
    isPaused(): boolean;

    /**
     * Checks whether the particle system is stopped.
     *
     * @return stopped, True if system is stopped, false otherwise.
     */
    isStopped(): boolean;

    /**
     * Moves the position of the emitter. This results in smoother particle spawning
     * behaviour than if ParticleSystem:setPosition is used every frame.
     *
     * @param x Position along x-axis.
     * @param y Position along y-axis.
     */
    moveTo(x: number, y: number): void;

    /**
     * Pauses the particle emitter.
     *
     */
    pause(): void;

    /**
     * Resets the particle emitter, removing any existing particles and resetting the
     * lifetime counter.
     *
     */
    reset(): void;

    /**
     * Sets area-based spawn parameters for the particles. Newly created particles
     * will spawn in an area around the emitter based on the parameters to this
     * function.
     *
     * @param distribution The type of distribution for new particles.
     * @param dx The maximum spawn distance from the emitter along the x-axis for uniform distribution, or the standard deviation along the x-axis for normal distribution.
     * @param dy The maximum spawn distance from the emitter along the y-axis for uniform distribution, or the standard deviation along the y-axis for normal distribution.
     */
    setAreaSpread(distribution: AreaSpreadDistribution, dx: number, dy: number): void;

    /**
     * Sets the size of the buffer (the max allowed amount of particles in the
     * system).
     *
     * @param buffer The buffer size.
     */
    setBufferSize(buffer: number): void;

    /**
     * Sets a series of colors to apply to the particle sprite. The particle system
     * will interpolate between each color evenly over the particle's lifetime. Color
     * modulation needs to be activated for this function to have any effect.
     *
     *
     * Arguments are passed in groups of four, representing the components of the
     * desired RGBA value. At least one color must be specified. A maximum of eight
     * may be used.
     *
     * @param r1 First color, red component (0-255).
     * @param g1 First color, green component (0-255).
     * @param b1 First color, blue component (0-255).
     * @param a1 First color, alpha component (0-255).
     * @param r2 Second color, red component (0-255).
     * @param g2 Second color, green component (0-255).
     * @param b2 Second color, blue component (0-255).
     * @param a2 Second color, alpha component (0-255).
     * @param ... Etc.
     */
    setColors(r1: number, g1: number, b1: number, a1: number, r2: number, g2: number, b2: number, a2: number, ...vararg: Array<number>): void;

    /**
     * Sets the direction the particles will be emitted in.
     *
     * @param direction The direction of the particles (in radians).
     */
    setDirection(direction: number): void;

    /**
     * Sets area-based spawn parameters for the particles. Newly created particles will spawn in an area around the emitter based on the parameters to this function.
     * @param distribution The type of distribution for new particles.
     * @param dx The type of distribution for new particles.
     * @param dy The type of distribution for new particles.
     * @param angle The angle in radians of the emission area. (Default 0)
     * @param directionRelativeToCenter The type of distribution for new particles. (Default false)
     * @link [ParticleSystem:setEmissionArea](https://love2d.org/wiki/ParticleSystem:setEmissionArea)
     */
    setEmissionArea(distribution: AreaSpreadDistribution, dx: number, dy: number, angle?: number, directionRelativeToCenter?: boolean): void;

    /**
     * Sets the amount of particles emitted per second.
     *
     * @param rate The amount of particles per second.
     */
    setEmissionRate(rate: number): void;

    /**
     * Sets how long the particle system should emit particles (if -1 then it emits
     * particles forever).
     *
     * @param life The lifetime of the emitter (in seconds).
     */
    setEmitterLifetime(life: number): void;

    /**
     * Sets the mode to use when the ParticleSystem adds new particles.
     *
     * @param mode The mode to use when the ParticleSystem adds new particles.
     */
    setInsertMode(mode: ParticleInsertMode): void;

    /**
     * Sets the linear acceleration (acceleration along the x and y axes) for
     * particles.
     *
     *
     * Every particle created will accelerate along the x and y axes between xmin,ymin
     * and xmax,ymax.
     *
     * @param xmin The minimum acceleration along the x axis.
     * @param ymin The minimum acceleration along the y axis.
     * @param xmax The maximum acceleration along the x axis.
     * @param ymax The maximum acceleration along the y axis.
     */
    setLinearAcceleration(xmin: number, ymin?: number, xmax?: number, ymax?: number): void;

    /**
     * Sets the amount of linear damping (constant deceleration) for particles.
     *
     * @param min The minimum amount of linear damping applied to particles.
     * @param max The maximum amount of linear damping applied to particles.
     */
    setLinearDamping(min: number, max: number): void;

    /**
     * Set the offset position which the particle sprite is rotated around. If this
     * function is not used, the particles rotate around their center.
     *
     * @param x The x coordinate of the rotation offset.
     * @param y The y coordinate of the rotation offset.
     */
    setOffset(x: number, y: number): void;

    /**
     * Sets the life of the particles.
     *
     * @param min The minimum life of the particles (seconds).
     * @param max The maximum life of the particles (seconds).
     */
    setParticleLifetime(min: number, max?: number): void;

    /**
     * Sets the position of the emitter.
     *
     * @param x Position along x-axis.
     * @param y Position along y-axis.
     */
    setPosition(x: number, y: number): void;

    /**
     * Sets a series of Quads to use for the particle sprites. Particles will choose a
     * Quad from the list based on the particle's current lifetime, allowing for the
     * use of animated sprite sheets with ParticleSystems.
     *
     * @param quad1 The first Quad to use.
     * @param quad2 The second Quad to use.
     */
    setQuads(quad1: Quad, quad2: Quad): void;

    /**
     * Sets a series of Quads to use for the particle sprites. Particles will choose a
     * Quad from the list based on the particle's current lifetime, allowing for the
     * use of animated sprite sheets with ParticleSystems.
     *
     * @param quads A table containing the Quads to use.
     */
    setQuads(quads: Array<Quad>): void;

    /**
     * Set the radial acceleration (away from the emitter).
     *
     * @param min The minimum acceleration.
     * @param max The maximum acceleration.
     */
    setRadialAcceleration(min: number, max?: number): void;

    /**
     * Sets whether particle angles and rotations are relative to their velocities. If
     * enabled, particles are aligned to the angle of their velocities and rotate
     * relative to that angle.
     *
     * @param enable True to enable relative particle rotation, false to disable it.
     */
    setRelativeRotation(enable: boolean): void;

    /**
     * Sets the rotation of the image upon particle creation (in radians).
     *
     * @param min The minimum initial angle (radians).
     * @param max The maximum initial angle (radians).
     */
    setRotation(min: number, max?: number): void;

    /**
     * Sets a series of sizes by which to scale a particle sprite. 1.0 is normal size.
     * The particle system will interpolate between each size evenly over the
     * particle's lifetime.
     *
     *
     * At least one size must be specified. A maximum of eight may be used.
     *
     * @param size1 The first size.
     * @param size2 The second size.
     * @param ... Etc.
     */
    setSizes(size1: number, size2: number, ...vararg: Array<number>): void;

    /**
     * Sets the degree of variation (0 meaning no variation and 1 meaning full
     * variation between start and end).
     *
     * @param variation The degree of variation (0 meaning no variation and 1 meaning full variation between start and end).
     */
    setSizeVariation(variation: number): void;

    /**
     * Sets the speed of the particles.
     *
     * @param min The minimum linear speed of the particles.
     * @param max The maximum linear speed of the particles.
     */
    setSpeed(min: number, max?: number): void;

    /**
     * Sets the spin of the sprite.
     *
     * @param min The minimum spin (radians per second).
     * @param max The maximum spin (radians per second).
     */
    setSpin(min: number, max?: number): void;

    /**
     * Sets the degree of variation (0 meaning no variation and 1 meaning full
     * variation between start and end).
     *
     * @param variation The degree of variation (0 meaning no variation and 1 meaning full variation between start and end).
     */
    setSpinVariation(variation: number): void;

    /**
     * Sets the amount of spread for the system.
     *
     * @param spread The amount of spread (radians).
     */
    setSpread(spread: number): void;

    /**
     * Sets the Image or Canvas which is to be emitted.
     *
     * @param texture An Image or Canvas to use for the particle.
     */
    setTexture(texture: Texture): void;

    /**
     * Sets the tangential acceleration (acceleration perpendicular to the particle's
     * direction).
     *
     * @param min The minimum acceleration.
     * @param max The maximum acceleration.
     */
    setTangentialAcceleration(min: number, max?: number): void;

    /**
     * Starts the particle emitter.
     *
     */
    start(): void;

    /**
     * Stops the particle emitter, resetting the lifetime counter.
     *
     */
    stop(): void;

    /**
     * Updates the particle system; moving, creating and killing particles.
     *
     * @param dt The time (seconds) since last frame.
     */
    update(dt: number): void;

}
