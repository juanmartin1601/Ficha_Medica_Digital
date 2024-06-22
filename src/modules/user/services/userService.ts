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

  public static async updateUser(
    id: string,
    updateData: {
      name?: string;
      dni?: string;
      address?: string;
      email?: string;
    }
  ): Promise<User | null> {
    const [updated] = await User.update(updateData, { where: { id } });
    if (updated) {
      return await User.findOne({ where: { id } });
    }
    return null;
  }

  public static async deleteUser(id: string): Promise<number> {
    return await User.destroy({ where: { id } });
  }
}
