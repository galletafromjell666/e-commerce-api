"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@/utils");
function validateRequestParamsMiddleware(ajvValidate) {
    return async (req, _res, next) => {
        try {
            // eslint-disable-next-line @typescript-eslint/await-thenable
            await ajvValidate(req.params);
            utils_1.logger.info('running to next');
            return next();
        }
        catch (e) {
            utils_1.logger.error('validation error');
            console.log('\n', e, '\n');
            utils_1.logger.info('calling next with the error');
            return next(e);
        }
    };
}
exports.default = validateRequestParamsMiddleware;
//# sourceMappingURL=validateRequestParams.middleware.js.map