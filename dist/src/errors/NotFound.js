"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NotFound extends Error {
    resource;
    constructor(message, resource) {
        super(message);
        this.resource = resource;
    }
}
exports.default = NotFound;
//# sourceMappingURL=NotFound.js.map