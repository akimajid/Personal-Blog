const { User } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class UserService {
  static async registerUser(data) {
    try {
      const user = await User.create(data);
      return user;
    } catch (error) {
      throw error;
    }
  }

  static async loginUser(email, password) {
    try {
      const user = await User.findOne({ where: { email } });
      if (!user) {
        throw new Error("User not found");
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        throw new Error("Invalid password");
      }

      const token = jwt.sign(
        { id: user.id, email: user.email },
        process.env.JWT_SECRET,
        {
          expiresIn: "1h",
        }
      );

      return { user, token };
    } catch (error) {
      throw error;
    }
  }

  static async getUserById(id) {
    try {
      const user = await User.findByPk(id);
      if (!user) {
        throw new Error("User not found");
      }
      return user;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserService;
