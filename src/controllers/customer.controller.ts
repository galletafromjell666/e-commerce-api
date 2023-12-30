import { Customer } from '@/interfaces/customer.interface';
import { registerCustomer } from '@/services/customer.service';
import { type Request, type Response } from 'express';

class CustomerController {
  constructor() {
    this.register = this.register.bind(this);
  }

  async register({ body }: Request, resp: Response) {
    const response = await registerCustomer(body as Customer);
    if (response === 'ALREADY_REGISTERED') {
      return resp.status(409).send(response);
    }
    const { password: _password, ...userWithoutPassword } = response;
    return resp.send(userWithoutPassword);
  }
}

export default new CustomerController();
