const UserService = require("../services/userService");

class UserController {
  static async registerUser(req, res) {
    try {
      const user = await UserService.registerUser(req.body);
      res.status(201).json({ message: "User registered successfully", user });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async loginUser(req, res) {
    try {
      const { email, password } = req.body;
      const { user, token } = await UserService.loginUser(email, password);
      res.status(200).json({ message: "Login successful", token, user });
    } catch (error) {
      res.status(401).json({ error: error.message });
    }
  }

  static async getUserProfile(req, res) {
    try {
      const user = await UserService.getUserById(req.user.id);
      res.status(200).json(user);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }
}

module.exports = UserController;
