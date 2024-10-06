const express = require("express");
const UserController = require("../controllers/userControllers");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/register", UserController.registerUser);
router.post("/login", UserController.loginUser);
router.get("/profile", authMiddleware, UserController.getUserProfile);

module.exports = router;
