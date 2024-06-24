import User from "../../../models/user";
import { hashPassword } from "../../../utils/hash";

export class UserService {
  public static async createUser(userData: {
    name: string;
    password: string;
    dni: string;
    address: string;
    email: string;
  }): Promise<User> {
    userData.password = hashPassword(userData.password);
    const user = await User.create(userData);
    return user;
  }
}
