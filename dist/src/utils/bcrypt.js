"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verify = exports.encrypt = void 0;
const bcryptjs_1 = require("bcryptjs");
const encrypt = async (plainPassword) => {
    const hashedPassword = await (0, bcryptjs_1.hash)(plainPassword, 4);
    return hashedPassword;
};
exports.encrypt = encrypt;
const verify = async (plainPassword, hashedPassword) => {
    const isCorrect = await (0, bcryptjs_1.compare)(plainPassword, hashedPassword);
    return isCorrect;
};
exports.verify = verify;
//# sourceMappingURL=bcrypt.js.map