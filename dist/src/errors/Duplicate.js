"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Duplicate extends Error {
    resource;
    constructor(message, resource) {
        super(message);
        this.resource = resource;
    }
}
exports.default = Duplicate;
//# sourceMappingURL=Duplicate.js.map