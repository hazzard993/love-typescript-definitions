/**
 * Documented at
 * https://love2d.org/wiki/Body
 * Obtained 2019/03/03
 */
declare const body: Body;
body.applyAngularImpulse;
body.applyForce;
body.applyLinearImpulse;
body.applyTorque;
body.destroy;
body.getAngle;
body.getAngularDamping;
body.getAngularVelocity;
body.getContactList;
body.getFixtureList;
body.getGravityScale;
body.getInertia;
body.getJointList;
body.getLinearDamping;
body.getLinearVelocity;
body.getLinearVelocityFromLocalPoint;
body.getLinearVelocityFromWorldPoint;
body.getLocalCenter;
body.getLocalPoint;
body.getLocalVector;
body.getMass;
body.getMassData;
body.getPosition;
body.getType;
body.getUserData;
body.getWorld;
body.getWorldCenter;
body.getWorldPoint;
body.getWorldPoints;
body.getWorldVector;
body.getX;
body.getY;
body.isActive;
body.isAwake;
body.isBullet;
body.isDestroyed;
body.isFixedRotation;
body.isSleepingAllowed;
body.isTouching;
body.resetMassData;
body.setActive;
body.setAngle;
body.setAngularDamping;
body.setAngularVelocity;
body.setAwake;
body.setBullet;
body.setFixedRotation;
body.setGravityScale;
body.setInertia;
body.setLinearDamping;
body.setLinearVelocity;
body.setMass;
body.setMassData;
body.setPosition;
body.setSleepingAllowed;
body.setType;
body.setUserData;
body.setX;
body.setY;
body.release;
body.type;
body.typeOf;

/**
 * Documented at
 * https://love2d.org/wiki/ChainShape
 * Obtained 2019/03/03
 */
declare const chainShape: ChainShape;
chainShape.getChildEdge;
chainShape.getNextVertex;
chainShape.getPoint;
chainShape.getPoints;
chainShape.getPreviousVertex;
chainShape.getVertexCount;
chainShape.setNextVertex;
chainShape.setPreviousVertex;
chainShape.release;
chainShape.type;
chainShape.typeOf;
chainShape.computeAABB;
chainShape.computeMass;
chainShape.getChildCount;
chainShape.getRadius;
chainShape.getType;
chainShape.rayCast;
chainShape.testPoint;

/**
 * Documented at
 * https://love2d.org/wiki/CircleShape
 * Obtained 2019/03/03
 */
declare const circleShape: CircleShape;
circleShape.getPoint;
circleShape.getRadius;
circleShape.setPoint;
circleShape.setRadius;
circleShape.release;
circleShape.type;
circleShape.typeOf;
circleShape.computeAABB;
circleShape.computeMass;
circleShape.getChildCount;
circleShape.getRadius;
circleShape.getType;
circleShape.rayCast;
circleShape.testPoint;

/**
 * Documented at
 * https://love2d.org/wiki/Contact
 * Obtained 2019/04/03
 */
declare const contact: Contact;
contact.getChildren;
contact.getFixtures;
contact.getFriction;
contact.getNormal;
contact.getPositions;
contact.getRestitution;
contact.isEnabled;
contact.isTouching;
contact.resetFriction;
contact.resetRestitution;
contact.setEnabled;
contact.setFriction;
contact.setRestitution;

/**
 * Documented at
 * https://love2d.org/wiki/DistanceJoint
 * Obtained 2019/03/03
 */
declare const distanceJoint: DistanceJoint;
distanceJoint.getDampingRatio;
distanceJoint.getFrequency;
distanceJoint.getLength;
distanceJoint.setDampingRatio;
distanceJoint.setFrequency;
distanceJoint.setLength;
distanceJoint.destroy;
distanceJoint.getAnchors;
distanceJoint.getBodies;
distanceJoint.getCollideConnected;
distanceJoint.getReactionForce;
distanceJoint.getReactionTorque;
distanceJoint.getType;
distanceJoint.getUserData;
distanceJoint.isDestroyed;
distanceJoint.setUserData;

/**
 * Documented at
 * https://love2d.org/wiki/EdgeShape
 * Obtained 2019/03/03
 */
declare const edgeShape: EdgeShape;
edgeShape.getNextVertex;
edgeShape.getPoints;
edgeShape.getPreviousVertex;
edgeShape.setNextVertex;
edgeShape.setPreviousVertex;
edgeShape.release;
edgeShape.type;
edgeShape.typeOf;
edgeShape.computeAABB;
edgeShape.computeMass;
edgeShape.getChildCount;
edgeShape.getRadius;
edgeShape.getType;
edgeShape.rayCast;
edgeShape.testPoint;

/**
 * Documented at
 * https://love2d.org/wiki/Fixture
 * Obtained 2019/03/03
 */
declare const fixture: Fixture;
fixture.destroy;
fixture.getBody;
fixture.getBoundingBox;
fixture.getCategory;
fixture.getDensity;
fixture.getFilterData;
fixture.getFriction;
fixture.getGroupIndex;
fixture.getMask;
fixture.getMassData;
fixture.getRestitution;
fixture.getShape;
fixture.getUserData;
fixture.isDestroyed;
fixture.isSensor;
fixture.rayCast;
fixture.setCategory;
fixture.setDensity;
fixture.setFilterData;
fixture.setFriction;
fixture.setGroupIndex;
fixture.setMask;
fixture.setRestitution;
fixture.setSensor;
fixture.setUserData;
fixture.testPoint;
fixture.release;
fixture.type;
fixture.typeOf;

/**
 * Documented at
 * https://love2d.org/wiki/FrictionJoint
 * Obtained 2019/03/03
 */
declare const frictionJoint: FrictionJoint;
frictionJoint.getMaxForce;
frictionJoint.getMaxTorque;
frictionJoint.setMaxForce;
frictionJoint.setMaxTorque;
frictionJoint.destroy;
frictionJoint.getAnchors;
frictionJoint.getBodies;
frictionJoint.getCollideConnected;
frictionJoint.getReactionForce;
frictionJoint.getReactionTorque;
frictionJoint.getType;
frictionJoint.getUserData;
frictionJoint.isDestroyed;
frictionJoint.setUserData;

/**
 * Documented at
 * https://love2d.org/wiki/GearJoint
 * Obtained 2019/03/03
 */
declare const gearJoint: GearJoint;
gearJoint.getJoints;
gearJoint.getRatio;
gearJoint.setRatio;
gearJoint.destroy;
gearJoint.getAnchors;
gearJoint.getBodies;
gearJoint.getCollideConnected;
gearJoint.getReactionForce;
gearJoint.getReactionTorque;
gearJoint.getType;
gearJoint.getUserData;
gearJoint.isDestroyed;
gearJoint.setUserData;

/**
 * Documented at
 * https://love2d.org/wiki/Joint
 * Obtained 2019/03/03
 */
declare const joint: Joint;
joint.destroy;
joint.getAnchors;
joint.getBodies;
joint.getCollideConnected;
joint.getReactionForce;
joint.getReactionTorque;
joint.getType;
joint.getUserData;
joint.isDestroyed;
joint.setUserData;
joint.release;
joint.type;
joint.typeOf;

/**
 * Documented at
 * https://love2d.org/wiki/MouseJoint
 * Obtained 2019/03/03
 */
declare const mouseJoint: MouseJoint;
mouseJoint.destroy;
mouseJoint.getAnchors;
mouseJoint.getBodies;
mouseJoint.getCollideConnected;
mouseJoint.getReactionForce;
mouseJoint.getReactionTorque;
mouseJoint.getType;
mouseJoint.getUserData;
mouseJoint.isDestroyed;
mouseJoint.setUserData;
mouseJoint.getDampingRatio;
mouseJoint.getFrequency;
mouseJoint.getMaxForce;
mouseJoint.getTarget;
mouseJoint.setDampingRatio;
mouseJoint.setFrequency;
mouseJoint.setMaxForce;
mouseJoint.setTarget;

/**
 * Documented at
 * https://love2d.org/wiki/PolygonShape
 * Obtained 2019/03/03
 */
declare const polygonShape: PolygonShape;
polygonShape.release;
polygonShape.type;
polygonShape.typeOf;
polygonShape.getPoints;
polygonShape.validate;
polygonShape.computeAABB;
polygonShape.computeMass;
polygonShape.getChildCount;
polygonShape.getRadius;
polygonShape.getType;
polygonShape.rayCast;
polygonShape.testPoint;

/**
 * Documented at
 * https://love2d.org/wiki/PulleyJoint
 * Obtained 2019/03/03
 */
declare const pulleyJoint: PulleyJoint;
pulleyJoint.destroy;
pulleyJoint.getAnchors;
pulleyJoint.getBodies;
pulleyJoint.getCollideConnected;
pulleyJoint.getReactionForce;
pulleyJoint.getReactionTorque;
pulleyJoint.getType;
pulleyJoint.getUserData;
pulleyJoint.isDestroyed;
pulleyJoint.setUserData;
pulleyJoint.getConstant;
pulleyJoint.getGroundAnchors;
pulleyJoint.getLengthA;
pulleyJoint.getLengthB;
pulleyJoint.getMaxLengths;
pulleyJoint.getRatio;
pulleyJoint.setConstant;
pulleyJoint.setMaxLengths;
pulleyJoint.setRatio;

/**
 * Documented at
 * https://love2d.org/wiki/RevoluteJoint
 * Obtained 2019/03/03
 */
declare const revoluteJoint: RevoluteJoint;
revoluteJoint.destroy;
revoluteJoint.getAnchors;
revoluteJoint.getBodies;
revoluteJoint.getCollideConnected;
revoluteJoint.getReactionForce;
revoluteJoint.getReactionTorque;
revoluteJoint.getType;
revoluteJoint.getUserData;
revoluteJoint.isDestroyed;
revoluteJoint.setUserData;
revoluteJoint.areLimitsEnabled;
revoluteJoint.getJointAngle;
revoluteJoint.getJointSpeed;
revoluteJoint.getLimits;
revoluteJoint.getLowerLimit;
revoluteJoint.getMaxMotorTorque;
revoluteJoint.getMotorSpeed;
revoluteJoint.getMotorTorque;
revoluteJoint.getUpperLimit;
revoluteJoint.hasLimitsEnabled;
revoluteJoint.isMotorEnabled;
revoluteJoint.setLimits;
revoluteJoint.setLimitsEnabled;
revoluteJoint.setLowerLimit;
revoluteJoint.setMaxMotorTorque;
revoluteJoint.setMotorEnabled;
revoluteJoint.setMotorSpeed;

/**
 * Documented at
 * https://love2d.org/wiki/RopeJoint
 * Obtained 2019/03/03
 */
declare const ropeJoint: RopeJoint;
ropeJoint.destroy;
ropeJoint.getAnchors;
ropeJoint.getBodies;
ropeJoint.getCollideConnected;
ropeJoint.getReactionForce;
ropeJoint.getReactionTorque;
ropeJoint.getType;
ropeJoint.getUserData;
ropeJoint.isDestroyed;
ropeJoint.setUserData;
ropeJoint.getMaxLength;
ropeJoint.setMaxLength;

/**
 * Documented at
 * https://love2d.org/wiki/PrismaticJoint
 * Obtained 2019/03/03
 */
declare const prismaticJoint: PrismaticJoint;
prismaticJoint.destroy;
prismaticJoint.getAnchors;
prismaticJoint.getBodies;
prismaticJoint.getCollideConnected;
prismaticJoint.getReactionForce;
prismaticJoint.getReactionTorque;
prismaticJoint.getType;
prismaticJoint.getUserData;
prismaticJoint.isDestroyed;
prismaticJoint.setUserData;
prismaticJoint.areLimitsEnabled;
prismaticJoint.getAxis;
prismaticJoint.getJointSpeed;
prismaticJoint.getJointTranslation;
prismaticJoint.getLimits;
prismaticJoint.getLowerLimit;
prismaticJoint.getMaxMotorForce;
prismaticJoint.getMotorForce;
prismaticJoint.getMotorSpeed;
prismaticJoint.getUpperLimit;
prismaticJoint.hasLimitsEnabled;
prismaticJoint.isMotorEnabled;
prismaticJoint.setLimits;
prismaticJoint.setLimitsEnabled;
prismaticJoint.setLowerLimit;
prismaticJoint.setMaxMotorForce;
prismaticJoint.setMotorEnabled;
prismaticJoint.setMotorSpeed;
prismaticJoint.setUpperLimit;

/**
 * Documented at
 * https://love2d.org/wiki/MotorJoint
 * Obtained 2019/03/03
 */
declare const motorJoint: MotorJoint;
motorJoint.destroy;
motorJoint.getAnchors;
motorJoint.getBodies;
motorJoint.getCollideConnected;
motorJoint.getReactionForce;
motorJoint.getReactionTorque;
motorJoint.getType;
motorJoint.getUserData;
motorJoint.isDestroyed;
motorJoint.setUserData;
motorJoint.getAngularOffset;
motorJoint.getLinearOffset;
motorJoint.setAngularOffset;
motorJoint.setLinearOffset;

/**
 * Documented at
 * https://love2d.org/wiki/Shape
 * Obtained 2019/03/03
 */
declare const shape: Shape;
shape.release;
shape.type;
shape.typeOf;
shape.computeAABB;
shape.computeMass;
shape.getChildCount;
shape.getRadius;
shape.getType;
shape.rayCast;
shape.testPoint;

/**
 * Documented at
 * https://love2d.org/wiki/WeldJoint
 * Obtained 2019/03/03
 */
declare const weldJoint: WeldJoint;
weldJoint.destroy;
weldJoint.getAnchors;
weldJoint.getBodies;
weldJoint.getCollideConnected;
weldJoint.getReactionForce;
weldJoint.getReactionTorque;
weldJoint.getType;
weldJoint.getUserData;
weldJoint.isDestroyed;
weldJoint.setUserData;
weldJoint.getDampingRatio;
weldJoint.getFrequency;
weldJoint.setDampingRatio;
weldJoint.setFrequency;

/**
 * Documented at
 * https://love2d.org/wiki/WheelJoint
 * Obtained 2019/03/03
 */
declare const wheelJoint: WheelJoint;
wheelJoint.destroy;
wheelJoint.getAnchors;
wheelJoint.getBodies;
wheelJoint.getCollideConnected;
wheelJoint.getReactionForce;
wheelJoint.getReactionTorque;
wheelJoint.getType;
wheelJoint.getUserData;
wheelJoint.isDestroyed;
wheelJoint.setUserData;
wheelJoint.getAxis;
wheelJoint.getJointSpeed;
wheelJoint.getJointTranslation;
wheelJoint.getMaxMotorTorque;
wheelJoint.getMotorSpeed;
wheelJoint.getMotorTorque;
wheelJoint.getSpringDampingRatio;
wheelJoint.getSpringFrequency;
wheelJoint.isMotorEnabled;
wheelJoint.setMaxMotorTorque;
wheelJoint.setMotorEnabled;
wheelJoint.setMotorSpeed;
wheelJoint.setSpringDampingRatio;
wheelJoint.setSpringFrequency;

/**
 * Documented at
 * https://love2d.org/wiki/World
 * Obtained 2019/03/03
 */
declare const world: World;
world.release;
world.type;
world.typeOf;
world.destroy;
world.getBodies;
world.getBodyCount;
world.getCallbacks;
world.getContactCount;
world.getContactFilter;
world.getGravity;
world.getJointCount;
world.isDestroyed;
world.isLocked;
world.isSleepingAllowed;
world.queryBoundingBox;
world.rayCast;
world.setCallbacks;
world.setContactFilter;
world.setGravity;
world.setSleepingAllowed;
world.translateOrigin;
world.update;

love;
love.physics;

love.physics.getDistance;
love.physics.getMeter;
love.physics.getMeter;
love.physics.newBody;
love.physics.newChainShape;
love.physics.newCircleShape;
love.physics.newDistanceJoint;
love.physics.newEdgeShape;
love.physics.newFixture;
love.physics.newFrictionJoint;
love.physics.newGearJoint;
love.physics.newMotorJoint;
love.physics.newMouseJoint;
love.physics.newPolygonShape;
love.physics.newPrismaticJoint;
love.physics.newPulleyJoint;
love.physics.newRectangleShape;
love.physics.newRevoluteJoint;
love.physics.newRopeJoint;
love.physics.newWeldJoint;
love.physics.newWheelJoint;
love.physics.newWorld;
love.physics.setMeter;
