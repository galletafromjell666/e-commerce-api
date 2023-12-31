"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateToken = exports.verifyToken = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const { JWT_SECRET = '' } = process.env;
const generateToken = (customer) => {
    const jwt = (0, jsonwebtoken_1.sign)({ id: customer.email }, JWT_SECRET, { expiresIn: '2h' });
    return jwt;
};
exports.generateToken = generateToken;
const verifyToken = (jwt) => (0, jsonwebtoken_1.verify)(jwt, JWT_SECRET);
exports.verifyToken = verifyToken;
//# sourceMappingURL=jwt.js.map