"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const customer_service_1 = require("@/services/customer.service");
class CustomerController {
    constructor() {
        this.register = this.register.bind(this);
    }
    async register({ body }, resp) {
        const response = await (0, customer_service_1.registerCustomer)(body);
        if (response === 'ALREADY_REGISTERED') {
            return resp.status(409).send(response);
        }
        const { password: _password, ...userWithoutPassword } = response;
        return resp.send(userWithoutPassword);
    }
}
exports.default = new CustomerController();
//# sourceMappingURL=customer.controller.js.map