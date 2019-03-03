/**
 * Documented at
 * https://love2d.org/wiki/BezierCurve
 * Obtained 2019/03/03
 */
let bezierCurve: BezierCurve;
bezierCurve.evaluate;
bezierCurve.getControlPoint;
bezierCurve.getControlPointCount;
bezierCurve.getDegree;
bezierCurve.getDerivative;
bezierCurve.getSegment;
bezierCurve.insertControlPoint;
bezierCurve.removeControlPoint;
bezierCurve.render;
bezierCurve.renderSegment;
bezierCurve.rotate;
bezierCurve.scale;
bezierCurve.setControlPoint;
bezierCurve.translate;
bezierCurve.release;
bezierCurve.type;
bezierCurve.typeOf;

/**
 * Documented at
 * https://love2d.org/wiki/CompressedData
 * Obtained 2019/03/02
 */
let compressedData: CompressedData;
compressedData.getFormat;
compressedData.clone;
compressedData.getPointer;
compressedData.getSize;
compressedData.getString;
compressedData.release;
compressedData.type;
compressedData.typeOf;

/**
 * Documented at
 * https://love2d.org/wiki/RandomGenerator
 * Obtained 2019/03/03
 */
let randomGenerator: RandomGenerator;
randomGenerator.release;
randomGenerator.type;
randomGenerator.typeOf;
randomGenerator.getSeed;
randomGenerator.getState;
randomGenerator.random;
randomGenerator.randomNormal;
randomGenerator.setSeed;
randomGenerator.setState;

/**
 * Documented at
 * https://love2d.org/wiki/Transform
 * 2019/03/03
 */
let transform: Transform;
transform.release;
transform.type;
transform.typeOf;
transform.apply;
transform.clone;
transform.getMatrix;
transform.inverse;
transform.inverseTransformPoint;
transform.isAffine2DTransform;
transform.reset;
transform.rotate;
transform.scale;
transform.setMatrix;
transform.setTransformation;
transform.shear;
transform.transformPoint;
transform.translate;

love;
love.math;

love.math.compress;
love.math.decompress;
love.math.gammaToLinear;
love.math.getRandomSeed;
love.math.isConvex;
love.math.linearToGamma;
love.math.newBezierCurve;
love.math.newRandomGenerator;
love.math.newTransform;
love.math.noise;
love.math.random;
love.math.randomNormal;
love.math.setRandomSeed;
love.math.triangulate;
