import User from "../../../models/user";

export class UserService {
  public static async createUser(userData: {
    name: string;
    dni: string;
    address: string;
    email: string;
  }): Promise<User> {
    return await User.create(userData);
  }

  public static async getUserById(id: string): Promise<User | null> {
    return await User.findByPk(id);
  }
}
