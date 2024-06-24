import User from "../../../models/user";
import { comparePassword } from "../../../utils/hash";
import { generateToken } from "../../../utils/jwt";

export class AuthService {
  public static async login(email: string, password: string): Promise<string> {
    const user = await User.findOne({ where: { email } });
    if (!user || !comparePassword(password, user.password)) {
      throw new Error("Invalid credentials");
    }
    return generateToken({ id: user.id, email: user.email });
  }
}
