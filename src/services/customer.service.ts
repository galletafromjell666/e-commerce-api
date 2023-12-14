import CustomerModel from '@/models/customer.model';
import { Customer } from '@/interfaces/customer.interface';
import { encrypt } from '@/utils/bcrypt';
// import { Auth } from '@/interfaces/auth.interface';
// import { generateToken } from '@/utils/bcrypt';

const registerCustomer = async (customer: Customer) => {
  const isRegistered = await CustomerModel.findOne({ email: customer.email });
  if (isRegistered) return 'ALREADY_REGISTERED';
  const hashedPassword = await encrypt(customer.password);
  const registerNewUser = await CustomerModel.create({
    email: customer.email,
    hashedPassword,
    firstName: customer.firstName,
    lastName: customer.lastName,
    isEmailVerified: false,
  });
  return registerNewUser;
};
/*
  loginUser = async ({ email, password }: Auth) => {
    const registeredUser = await UserModel.findOne({ email });
    if (!registeredUser) return 'EMAIL_NOT_FOUND';

    const storedPassword = registeredUser.password;
    const isCorrect = await verify(password, storedPassword);
    if (!isCorrect) return 'INCORRECT_PASSWORD';

    const jwt = generateToken(registeredUser);
    const { password: _password, ...cleanUser } = registeredUser.toJSON();
    return { user: cleanUser, jwt };
  };
  */

export { registerCustomer };
