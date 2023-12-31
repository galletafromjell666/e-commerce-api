"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function validateRequestBodyMiddleware(ajvValidate) {
    return (req, _res, next) => {
        try {
            ajvValidate(req.body);
            return next();
        }
        catch (e) {
            return next(e);
        }
    };
}
exports.default = validateRequestBodyMiddleware;
//# sourceMappingURL=validateRequestBody.middleware.js.map