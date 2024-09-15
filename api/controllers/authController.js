import { User } from "../model/Model.js";
import { comparePassword, hashPassword } from "../helper/auth.js";

const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username) {
      return res.json({
        error: "username is required",
      });
    }
    if (!password || password.length < 6) {
      return res.json({
        error: "password is required ",
      });
    }
    const exist = await User.findOne({ email });
    if (exist) {
      return res.json({
        error: "email is taken already",
      });
    }

    const hashedPassword = await hashPassword(password);

    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });
    return res.json(user);
  } catch (error) {
    console.log(error);
  }
};
export default registerUser;
