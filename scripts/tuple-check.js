/// <reference lib="esnext" />

const ts = require("typescript");
const tstl = require("typescript-to-lua");
const utils = require("./utils");

/** @type {ts.CompilerOptions} */
const options = {};
const host = ts.createCompilerHost(options);
const program = ts.createProgram({ rootNames: ["typings/index.d.ts"], options, host });

class DeclarationCheckingError extends Error {}

/**
 * @param {import("typescript-to-lua").TransformationContext} context
 * @returns {(statement: import("typescript").FunctionDeclaration | import("typescript").MethodSignature) => string}
 */
const expectFunctionDeclarationToUseTupleReturn = context => statement => {
    if (!utils.hasTupleReturnAnnotation(context, statement)) {
        throw new DeclarationCheckingError(
            `${statement.name.getText()} returns a tuple type and is expected to use @tupleReturn`
        );
    }

    return `${context.sourceFile.fileName} ${statement.name.getText()}`;
};

/**
 * @param {import("typescript").SourceFile} sourceFile
 */
const isSourceFileFromThisRepo = sourceFile =>
    !program.isSourceFileDefaultLibrary(sourceFile) && !program.isSourceFileFromExternalLibrary(sourceFile);

/**
 * @returns {string[]}
 */
function expectAllTupleReturnCallSignatureToUseTupleAnnotations() {
    return program
        .getSourceFiles()
        .filter(isSourceFileFromThisRepo)
        .map(sourceFile => {
            const context = new tstl.TransformationContext(program, sourceFile, new Map());
            const functionDeclarationsChecked = sourceFile.statements
                .filter(ts.isModuleDeclaration)
                .map(utils.getFunctionDeclarationsOfModuleDeclaration)
                .flat()
                .filter(utils.hasTupleReturnType)
                .map(expectFunctionDeclarationToUseTupleReturn(context));

            const methodSignaturesChecked = sourceFile.statements
                .filter(ts.isModuleDeclaration)
                .map(utils.getInterfaceDeclarationsOfModuleDeclaration)
                .flat()
                .map(utils.getMethodsOfInterface)
                .flat()
                .filter(utils.hasTupleReturnType)
                .map(expectFunctionDeclarationToUseTupleReturn(context));

            return [...functionDeclarationsChecked, ...methodSignaturesChecked];
        })
        .flat();
}

try {
    console.log("Checking all @tupleReturn annotations");
    const checked = expectAllTupleReturnCallSignatureToUseTupleAnnotations();
    console.log(checked.length, "methods and functions checked");
} catch (err) {
    if (err instanceof DeclarationCheckingError) {
        console.log("DeclarationCheckingError:", err.message);
    } else {
        throw err;
    }
}
