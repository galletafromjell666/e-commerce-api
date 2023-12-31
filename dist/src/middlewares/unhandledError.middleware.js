"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = require("@/errors");
const ajv_1 = __importDefault(require("ajv"));
const utils_1 = require("@/utils");
// TODO: Add a type for this enviroment variable
const ENV = process.env.ENV;
function unhandledErrorMiddleware(e, _req, res) {
    let statusCode = 500;
    let type = 'Server Error';
    let message = 'Internal server Error, Please try again later';
    let details;
    let resource;
    utils_1.logger.info('running unhandledError middleware');
    if (e instanceof errors_1.Duplicate) {
        statusCode = 409;
        type = 'Client Error';
        message = e.message;
        resource = e.resource;
    }
    else if (e instanceof errors_1.NotFound) {
        statusCode = 404;
        type = 'Client Error';
        message = e.message;
        resource = e.resource;
    }
    else if (e instanceof ajv_1.default.ValidationError) {
        statusCode = 422;
        type = 'Client Error';
        message = 'Unprocessable Content';
        details = e.errors.map((schemaError) => ({
            path: schemaError.instancePath,
            params: schemaError.params,
            message: schemaError.message,
            data: schemaError.data,
        }));
    }
    const errorResponse = {
        type,
        message,
        details,
        resource,
        detailed: ENV === 'dev'
            ? e.message
            : 'Detailed error message  only available in development mode',
        stack: ENV === 'dev'
            ? e.stack
            : 'Detailed error stack  only available in development mode',
        time: Date.now(),
    };
    return res.status(statusCode).send(errorResponse);
}
exports.default = unhandledErrorMiddleware;
//# sourceMappingURL=unhandledError.middleware.js.map