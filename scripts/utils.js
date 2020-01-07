const ts = require("typescript");
const utils = require("typescript-to-lua/dist/transformation/utils/annotations");

/**
 *
 * @param {import("typescript-to-lua").TransformationContext} context
 * @param {import("typescript").FunctionDeclaration | import("typescript").MethodSignature} statement
 */
module.exports.hasTupleReturnAnnotation = (context, statement) => {
    const symbol = context.checker.getSymbolAtLocation(statement.name);

    if (symbol) {
        const annotations = utils.getSymbolAnnotations(context, symbol);
        return annotations.has(utils.AnnotationKind.TupleReturn);
    }

    return false;
};

/**
 * @param {import("typescript").ModuleDeclaration} module
 */
module.exports.getFunctionDeclarationsOfModuleDeclaration = module => {
    if (!module.body) {
        return [];
    }

    if (ts.isModuleBlock(module.body)) {
        return module.body.statements.filter(ts.isFunctionDeclaration);
    }
};

/**
 * @param {import("typescript").ModuleDeclaration} module
 */
module.exports.getInterfaceDeclarationsOfModuleDeclaration = module => {
    if (!module.body) {
        return [];
    }

    if (ts.isModuleBlock(module.body)) {
        return module.body.statements.filter(ts.isInterfaceDeclaration);
    }
};

/**
 * @param {import("typescript").InterfaceDeclaration} interface
 */
module.exports.getMethodsOfInterface = interface => {
    return interface.members.filter(ts.isMethodSignature);
};

/**
 * @param {import("typescript").FunctionDeclaration | import("typescript").MethodSignature} statement
 */
module.exports.hasTupleReturnType = statement => {
    if (!statement.type) {
        return false;
    }

    if (ts.isUnionTypeNode(statement.type)) {
        return statement.type.types.some(ts.isTupleTypeNode);
    }
    return ts.isTupleTypeNode(statement.type);
};
