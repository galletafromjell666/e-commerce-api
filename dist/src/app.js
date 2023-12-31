"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
require("dotenv/config");
const mongo_1 = __importDefault(require("@/config/mongo"));
const routes_1 = __importDefault(require("@/routes"));
const index_1 = require("@/utils/index");
const swagger_1 = __importDefault(require("@/config/swagger"));
const unhandledError_middleware_1 = __importDefault(require("./middlewares/unhandledError.middleware"));
const PORT = process.env.PORT ?? 3301;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/api/v1', routes_1.default);
void (0, mongo_1.default)().then(() => index_1.logger.info('DB connected'));
app.use(unhandledError_middleware_1.default);
// TODO: finish the docs xd
const specs = (0, swagger_jsdoc_1.default)(swagger_1.default);
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(specs, { explorer: true }));
app.listen(PORT, () => index_1.logger.info(`SERVER RUNNING ON PORT ${PORT}`));
//# sourceMappingURL=app.js.map