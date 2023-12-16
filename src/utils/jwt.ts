import { sign, verify } from 'jsonwebtoken';
import { Customer } from '@/interfaces/customer.interface';

const { JWT_SECRET = '' } = process.env;

const generateToken = (customer: Customer) => {
  const jwt = sign({ id: customer.email }, JWT_SECRET, { expiresIn: '2h' });
  return jwt;
};

const verifyToken = (jwt: string) => verify(jwt, JWT_SECRET);

export { verifyToken, generateToken };
