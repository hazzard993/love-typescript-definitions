declare namespace love {

	/**
	 * Can simulate 2D rigid body physics in a realistic manner. This module is based
	 * on Box2D, and this API corresponds to the Box2D API as closely as possible.
	 * @link [love.physics](https://love2d.org/wiki/love.physics)
	 */
    export namespace physics {
		/**
		 * Returns the two closest points between two fixtures and their distance.
		 *
		 * @param fixture1 The first fixture.
		 * @param fixture2 The second fixture.
		 * @return {number} distance, The distance of the two points.
		 * @return {number} x1, The x-coordinate of the first point.
		 * @return {number} y1, The y-coordinate of the first point.
		 * @return {number} x2, The x-coordinate of the second point.
		 * @return {number} y2, The y-coordinate of the second point.
		 */
        /** @tupleReturn */
        export function getDistance(fixture1: Fixture, fixture2: Fixture): [number, number, number, number, number];

		/**
		 * Get the scale of the world.
		 *
		 *
		 * The world scale is the number of pixels per meter. Try to keep your shape sizes
		 * less than 10 times this scale.
		 *
		 *
		 * This is important because the physics in Box2D is tuned to work well for
		 * objects of size 0.1m up to 10m. All physics coordinates are divided by this
		 * number for the physics calculations.
		 *
		 * @return {number} scale, The size of 1 meter in pixels.
		 */
        export function getMeter(): number;

		/**
		 * Creates a new body.
		 *
		 *
		 * There are three types of bodies. Static bodies do not move, have a infinite
		 * mass, and can be used for level boundaries. Dynamic bodies are the main actors
		 * in the simulation, they collide with everything. Kinematic bodies do not react
		 * to forces and only collide with dynamic bodies.
		 *
		 *
		 * The mass of the body gets calculated when a Fixture is attached or removed, but
		 * can be changed at any time with Body:setMass or Body:resetMassData.
		 *
		 * @param world The world to create the body in.
		 * @param x The x position of the body.
		 * @param y The y position of the body.
		 * @param type The type of the body.
		 * @return {Body} body, A new body.
		 */
        export function newBody(world: World, x?: number, y?: number, type?: BodyType): Body;

		/**
		 * Creates a new ChainShape.
		 *
		 * @param loop If the chain should loop back to the first point.
		 * @param x1 The x position of the first point.
		 * @param y1 The y position of the first point.
		 * @param x2 The x position of the second point.
		 * @param y2 The y position of the second point.
		 * @param ... Additional point positions.
		 * @return {ChainShape} shape, The new shape.
		 */
        export function newChainShape(loop: boolean, x1: number, y1: number, x2: number, y2: number, ...vararg: number[]): ChainShape;

		/**
		 * Creates a new ChainShape.
		 *
		 * @param loop If the chain should loop back to the first point.
		 * @param points A list of points to construct the ChainShape, in the form of {x1, y1, x2, y2, ...}.
		 * @return {ChainShape} shape, The new shape.
		 */
        export function newChainShape(loop: boolean, points: table): ChainShape;

		/**
		 * Creates a new CircleShape.
		 *
		 * @param radius The radius of the circle.
		 * @return {CircleShape} shape, The new shape.
		 */
        export function newCircleShape(radius: number): CircleShape;

		/**
		 * Creates a new CircleShape.
		 *
		 * @param x The x offset of the circle.
		 * @param y The y offset of the circle.
		 * @param radius The radius of the circle.
		 * @return {CircleShape} shape, The new shape.
		 */
        export function newCircleShape(x: number, y: number, radius: number): CircleShape;

		/**
		 * Create a distance joint between two bodies.
		 *
		 *
		 * This joint constrains the distance between two points on two bodies to be
		 * constant. These two points are specified in world coordinates and the two
		 * bodies are assumed to be in place when this joint is created. The first anchor
		 * point is connected to the first body and the second to the second body, and the
		 * points define the length of the distance joint.
		 *
		 * @param body1 The first body to attach to the joint.
		 * @param body2 The second body to attach to the joint.
		 * @param x1 The x position of the first anchor point (world space).
		 * @param y1 The y position of the first anchor point (world space).
		 * @param x2 The x position of the second anchor point (world space).
		 * @param y2 The y position of the second anchor point (world space).
		 * @param collideConnected Specifies whether the two bodies should collide with each other.
		 * @return {DistanceJoint} joint, The new distance joint.
		 */
        export function newDistanceJoint(body1: Body, body2: Body, x1: number, y1: number, x2: number, y2: number, collideConnected?: boolean): DistanceJoint;

		/**
		 * Creates a edge shape.
		 *
		 * @param x1 The x position of the first point.
		 * @param y1 The y position of the first point.
		 * @param x2 The x position of the second point.
		 * @param y2 The y position of the second point.
		 * @return {EdgeShape} shape, The new shape.
		 */
        export function newEdgeShape(x1: number, y1: number, x2: number, y2: number): EdgeShape;

		/**
		 * Creates and attaches a Fixture to a body.
		 *
		 * @param body The body which gets the fixture attached.
		 * @param shape The shape of the fixture.
		 * @param density The density of the fixture.
		 * @return {Fixture} fixture, The new fixture.
		 */
        export function newFixture(body: Body, shape: Shape, density?: number): Fixture;

		/**
		 * Create a friction joint between two bodies. A FrictionJoint applies friction to
		 * a body.
		 *
		 * @param body1 The first body to attach to the joint.
		 * @param body2 The second body to attach to the joint.
		 * @param x The x position of the anchor point.
		 * @param y The y position of the anchor point.
		 * @param collideConnected Specifies whether the two bodies should collide with eachother.
		 * @return {FrictionJoint} joint, The new FrictionJoint.
		 */
        export function newFrictionJoint(body1: Body, body2: Body, x: number, y: number, collideConnected?: boolean): FrictionJoint;

		/**
		 * Create a gear joint connecting two joints.
		 *
		 *
		 * The gear joint connects two joints that must be either prismatic or revolute
		 * joints. Using this joint requires that the joints it uses connect their
		 * respective bodies to the ground and have the ground as the first body. When
		 * destroying the bodies and joints you must make sure you destroy the gear joint
		 * before the other joints.
		 *
		 *
		 * The gear joint has a ratio the determines how the angular or distance values of
		 * the connected joints relate to each other. The formula coordinate1 + ratio *
		 * coordinate2 always has a constant value that is set when the gear joint is
		 * created.
		 *
		 * @param joint1 The first joint to connect with a gear joint.
		 * @param joint2 The second joint to connect with a gear joint.
		 * @param ratio The gear ratio.
		 * @param collideConnected Specifies whether the two bodies should collide with each other.
		 * @return {GearJoint} joint, The new gear joint.
		 */
        export function newGearJoint(joint1: Joint, joint2: Joint, ratio?: number, collideConnected?: boolean): GearJoint;

		/**
		 * Creates a joint between two bodies which controls the relative motion between
		 * them.
		 *
		 *
		 * Position and rotation offsets can be specified once the MotorJoint has been
		 * created, as well as the maximum motor force and torque that will be be applied
		 * to reach the target offsets.
		 *
		 * @param body1 The first body to attach to the joint.
		 * @param body2 The second body to attach to the joint.
		 * @param correctionFactor The joint's initial position correction factor, in the range of [0, 1].
		 * @return {MotorJoint} joint, The new MotorJoint.
		 */
        export function newMotorJoint(body1: Body, body2: Body, correctionFactor?: number): MotorJoint;

		/**
		 * Creates a joint between two bodies which controls the relative motion between
		 * them.
		 *
		 *
		 * Position and rotation offsets can be specified once the MotorJoint has been
		 * created, as well as the maximum motor force and torque that will be be applied
		 * to reach the target offsets.
		 *
		 * @param body1 The first body to attach to the joint.
		 * @param body2 The second body to attach to the joint.
		 * @param correctionFactor The joint's initial position correction factor, in the range of [0, 1].
		 * @param collideConnected Specifies whether the two bodies should collide with each other.
		 * @return {MotorJoint} joint, The new MotorJoint.
		 */
        export function newMotorJoint(body1: Body, body2: Body, correctionFactor?: number, collideConnected?: boolean): MotorJoint;

		/**
		 * Create a joint between a body and the mouse.
		 *
		 *
		 * This joint actually connects the body to a fixed point in the world. To make it
		 * follow the mouse, the fixed point must be updated every timestep (example
		 * below).
		 *
		 *
		 * The advantage of using a MouseJoint instead of just changing a body position
		 * directly is that collisions and reactions to other joints are handled by the
		 * physics engine.
		 *
		 * @param body The body to attach to the mouse.
		 * @param x The x position of the connecting point.
		 * @param y The y position of the connecting point.
		 * @return {MouseJoint} joint, The new mouse joint.
		 */
        export function newMouseJoint(body: Body, x: number, y: number): MouseJoint;

		/**
		 * Creates a new PolygonShape.
		 *
		 *
		 * This shape can have 8 vertices at most, and must form a convex shape.
		 *
		 * @param x1 The position of first point on the x-axis.
		 * @param y1 The position of first point on the y-axis.
		 * @param x2 The position of second point on the x-axis.
		 * @param y2 The position of second point on the y-axis.
		 * @param ... You can continue passing more point positions to create the PolygonShape.
		 * @return {PolygonShape} shape, A new PolygonShape.
		 */
        export function newPolygonShape(x1: number, y1: number, x2: number, y2: number, ...vararg: number[]): PolygonShape;

		/**
		 * Creates a new PolygonShape.
		 *
		 *
		 * This shape can have 8 vertices at most, and must form a convex shape.
		 *
		 * @param vertices A list of vertices to construct the polygon, in the form of {x1, y1, x2, y2, x3, y3, ...}.
		 * @return {PolygonShape} shape, A new PolygonShape.
		 */
        export function newPolygonShape(vertices: table): PolygonShape;

		/**
		 * Create a prismatic joints between two bodies.
		 *
		 *
		 * A prismatic joint constrains two bodies to move relatively to each other on a
		 * specified axis. It does not allow for relative rotation. Its definition and
		 * operation are similar to a revolute joint, but with translation and force
		 * substituted for angle and torque.
		 *
		 * @param body1 The first body to connect with a prismatic joint.
		 * @param body2 The second body to connect with a prismatic joint.
		 * @param x The x coordinate of the anchor point.
		 * @param y The y coordinate of the anchor point.
		 * @param ax The x coordinate of the axis unit vector.
		 * @param ay The y coordinate of the axis unit vector.
		 * @param collideConnected Specifies whether the two bodies should collide with each other.
		 * @return {PrismaticJoint} joint, The new prismatic joint.
		 */
        export function newPrismaticJoint(body1: Body, body2: Body, x: number, y: number, ax: number, ay: number, collideConnected?: boolean): PrismaticJoint;

		/**
		 * Create a prismatic joints between two bodies.
		 *
		 *
		 * A prismatic joint constrains two bodies to move relatively to each other on a
		 * specified axis. It does not allow for relative rotation. Its definition and
		 * operation are similar to a revolute joint, but with translation and force
		 * substituted for angle and torque.
		 *
		 * @param body1 The first body to connect with a prismatic joint.
		 * @param body2 The second body to connect with a prismatic joint.
		 * @param x1 The x coordinate of the first anchor point.
		 * @param y1 The y coordinate of the first anchor point.
		 * @param x2 The x coordinate of the second anchor point.
		 * @param y2 The y coordinate of the second anchor point.
		 * @param ax The x coordinate of the axis unit vector.
		 * @param ay The y coordinate of the axis unit vector.
		 * @param collideConnected Specifies whether the two bodies should collide with each other.
		 * @return {PrismaticJoint} joint, The new prismatic joint.
		 */
        export function newPrismaticJoint(body1: Body, body2: Body, x1: number, y1: number, x2: number, y2: number, ax: number, ay: number, collideConnected?: boolean): PrismaticJoint;

		/**
		 * Create a prismatic joints between two bodies.
		 *
		 *
		 * A prismatic joint constrains two bodies to move relatively to each other on a
		 * specified axis. It does not allow for relative rotation. Its definition and
		 * operation are similar to a revolute joint, but with translation and force
		 * substituted for angle and torque.
		 *
		 * @param body1 The first body to connect with a prismatic joint.
		 * @param body2 The second body to connect with a prismatic joint.
		 * @param x1 The x coordinate of the first anchor point.
		 * @param y1 The y coordinate of the first anchor point.
		 * @param x2 The x coordinate of the second anchor point.
		 * @param y2 The y coordinate of the second anchor point.
		 * @param ax The x coordinate of the axis unit vector.
		 * @param ay The y coordinate of the axis unit vector.
		 * @param collideConnected Specifies whether the two bodies should collide with each other.
		 * @param referenceAngle The reference angle between body1 and body2, in radians.
		 * @return {PrismaticJoint} joint, The new prismatic joint.
		 */
        export function newPrismaticJoint(body1: Body, body2: Body, x1: number, y1: number, x2: number, y2: number, ax: number, ay: number, collideConnected?: boolean, referenceAngle?: number): PrismaticJoint;

		/**
		 * Create a pulley joint to join two bodies to each other and the ground.
		 *
		 *
		 * The pulley joint simulates a pulley with an optional block and tackle. If the
		 * ratio parameter has a value different from one, then the simulated rope extends
		 * faster on one side than the other. In a pulley joint the total length of the
		 * simulated rope is the constant length1 + ratio * length2, which is set when the
		 * pulley joint is created.
		 *
		 *
		 * Pulley joints can behave unpredictably if one side is fully extended. It is
		 * recommended that the method setMaxLengths be used to constrain the maximum
		 * lengths each side can attain.
		 *
		 * @param body1 The first body to connect with a pulley joint.
		 * @param body2 The second body to connect with a pulley joint.
		 * @param gx1 The x coordinate of the first body's ground anchor.
		 * @param gy1 The y coordinate of the first body's ground anchor.
		 * @param gx2 The x coordinate of the second body's ground anchor.
		 * @param gy2 The y coordinate of the second body's ground anchor.
		 * @param x1 The x coordinate of the pulley joint anchor in the first body.
		 * @param y1 The y coordinate of the pulley joint anchor in the first body.
		 * @param x2 The x coordinate of the pulley joint anchor in the second body.
		 * @param y2 The y coordinate of the pulley joint anchor in the second body.
		 * @param ratio The joint ratio.
		 * @param collideConnected Specifies whether the two bodies should collide with each other.
		 * @return {PulleyJoint} joint, The new pulley joint.
		 */
        export function newPulleyJoint(body1: Body, body2: Body, gx1: number, gy1: number, gx2: number, gy2: number, x1: number, y1: number, x2: number, y2: number, ratio?: number, collideConnected?: boolean): PulleyJoint;

		/**
		 * Shorthand for creating rectangular PolygonShapes.
		 *
		 *
		 * By default, the local origin is located at the center of the rectangle as
		 * opposed to the top left for graphics.
		 *
		 * @param width The width of the rectangle.
		 * @param height The height of the rectangle.
		 * @return {PolygonShape} shape, A new PolygonShape.
		 */
        export function newRectangleShape(width: number, height: number): PolygonShape;

		/**
		 * Shorthand for creating rectangular PolygonShapes.
		 *
		 *
		 * By default, the local origin is located at the center of the rectangle as
		 * opposed to the top left for graphics.
		 *
		 * @param x The offset along the x-axis.
		 * @param y The offset along the y-axis.
		 * @param width The width of the rectangle.
		 * @param height The height of the rectangle.
		 * @param angle The initial angle of the rectangle.
		 * @return {PolygonShape} shape, A new PolygonShape.
		 */
        export function newRectangleShape(x: number, y: number, width: number, height: number, angle?: number): PolygonShape;

		/**
		 * Creates a pivot joint between two bodies.
		 *
		 *
		 * This joint connects two bodies to a point around which they can pivot.
		 *
		 * @param body1 The first body.
		 * @param body2 The second body.
		 * @param x The x position of the connecting point.
		 * @param y The y position of the connecting point.
		 * @param collideConnected Specifies whether the two bodies should collide with each other.
		 * @return {RevoluteJoint} joint, The new revolute joint.
		 */
        export function newRevoluteJoint(body1: Body, body2: Body, x: number, y: number, collideConnected?: boolean): RevoluteJoint;

		/**
		 * Creates a pivot joint between two bodies.
		 *
		 *
		 * This joint connects two bodies to a point around which they can pivot.
		 *
		 * @param body1 The first body.
		 * @param body2 The second body.
		 * @param x1 The x position of the first connecting point.
		 * @param y1 The y position of the first connecting point.
		 * @param x2 The x position of the second connecting point.
		 * @param y2 The y position of the second connecting point.
		 * @param collideConnected Specifies whether the two bodies should collide with each other.
		 * @param referenceAngle Specifies whether the two bodies should collide with each other.
		 * @return {RevoluteJoint} joint, The new revolute joint.
		 */
        export function newRevoluteJoint(body1: Body, body2: Body, x1: number, y1: number, x2: number, y2: number, collideConnected?: boolean, referenceAngle?: number): RevoluteJoint;

		/**
		 * Create a joint between two bodies. Its only function is enforcing a max
		 * distance between these bodies.
		 *
		 * @param body1 The first body to attach to the joint.
		 * @param body2 The second body to attach to the joint.
		 * @param x1 The x position of the first anchor point.
		 * @param y1 The y position of the first anchor point.
		 * @param x2 The x position of the second anchor point.
		 * @param y2 The y position of the second anchor point.
		 * @param maxLength The maximum distance for the bodies.
		 * @param collideConnected Specifies whether the two bodies should collide with each other.
		 * @return {RopeJoint} joint, The new RopeJoint.
		 */
        export function newRopeJoint(body1: Body, body2: Body, x1: number, y1: number, x2: number, y2: number, maxLength: number, collideConnected?: boolean): RopeJoint;

		/**
		 * Creates a constraint joint between two bodies. A WeldJoint essentially glues
		 * two bodies together. The constraint is a bit soft, however, due to Box2D's
		 * iterative solver.
		 *
		 * @param body1 The first body to attach to the joint.
		 * @param body2 The second body to attach to the joint.
		 * @param x The x position of the anchor point (world space).
		 * @param y The y position of the anchor point (world space).
		 * @param collideConnected Specifies whether the two bodies should collide with each other.
		 * @return {WeldJoint} joint, The new WeldJoint.
		 */
        export function newWeldJoint(body1: Body, body2: Body, x: number, y: number, collideConnected?: boolean): WeldJoint;

		/**
		 * Creates a constraint joint between two bodies. A WeldJoint essentially glues
		 * two bodies together. The constraint is a bit soft, however, due to Box2D's
		 * iterative solver.
		 *
		 * @param body1 The first body to attach to the joint.
		 * @param body2 The second body to attach to the joint.
		 * @param x1 The x position of the first anchor point (world space).
		 * @param y1 The y position of the first anchor point (world space).
		 * @param x2 The x position of the second anchor point (world space).
		 * @param y2 The y position of the second anchor point (world space).
		 * @param collideConnected Specifies whether the two bodies should collide with each other.
		 * @return {WeldJoint} joint, The new WeldJoint.
		 */
        export function newWeldJoint(body1: Body, body2: Body, x1: number, y1: number, x2: number, y2: number, collideConnected?: boolean): WeldJoint;

		/**
		 * Creates a constraint joint between two bodies. A WeldJoint essentially glues
		 * two bodies together. The constraint is a bit soft, however, due to Box2D's
		 * iterative solver.
		 *
		 * @param body1 The first body to attach to the joint.
		 * @param body2 The second body to attach to the joint.
		 * @param x1 The x position of the first anchor point (world space).
		 * @param y1 The y position of the first anchor point (world space).
		 * @param x2 The x position of the second anchor point (world space).
		 * @param y2 The y position of the second anchor point (world space).
		 * @param collideConnected Specifies whether the two bodies should collide with each other.
		 * @param referenceAngle The reference angle between body1 and body2, in radians.
		 * @return {WeldJoint} joint, The new WeldJoint.
		 */
        export function newWeldJoint(body1: Body, body2: Body, x1: number, y1: number, x2: number, y2: number, collideConnected?: boolean, referenceAngle?: number): WeldJoint;

		/**
		 * Creates a wheel joint.
		 *
		 * @param body1 The first body.
		 * @param body2 The second body.
		 * @param x The x position of the anchor point.
		 * @param y The y position of the anchor point.
		 * @param ax The x position of the axis unit vector.
		 * @param ay The y position of the axis unit vector.
		 * @param collideConnected Specifies whether the two bodies should collide with each other.
		 * @return {WheelJoint} joint, The new WheelJoint.
		 */
        export function newWheelJoint(body1: Body, body2: Body, x: number, y: number, ax: number, ay: number, collideConnected?: boolean): WheelJoint;

		/**
		 * Creates a new World.
		 *
		 * @param xg The x component of gravity.
		 * @param yg The y component of gravity.
		 * @param sleep Whether the bodies in this world are allowed to sleep.
		 * @return {World} world, A brave new World.
		 */
        export function newWorld(xg?: number, yg?: number, sleep?: boolean): World;

		/**
		 * Sets the pixels to meter scale factor.
		 *
		 *
		 * All coordinates in the physics module are divided by this number and converted
		 * to meters, and it creates a convenient way to draw the objects directly to the
		 * screen without the need for graphics transformations.
		 *
		 *
		 * It is recommended to create shapes no larger than 10 times the scale. This is
		 * important because Box2D is tuned to work well with shape sizes from 0.1 to 10
		 * meters. The default meter scale is 30.
		 *
		 *
		 * love.physics.setMeter does not apply retroactively to created objects. Created
		 * objects retain their meter coordinates but the scale factor will affect their
		 * pixel coordinates.
		 *
		 * @param scale The scale factor as an integer.
		 */
        export function setMeter(scale: number): void;

    }

}
