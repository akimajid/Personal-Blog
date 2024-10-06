const express = require("express");
const BlogController = require("../controllers/blogControllers");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/blogs", BlogController.getAllBlogs);
router.get("/blogs/:id", BlogController.getBlogById);
router.post("/blogs", authMiddleware, BlogController.createBlog); // Hanya user yang terautentikasi
router.put("/blogs/:id", authMiddleware, BlogController.updateBlog); // Hanya user yang terautentikasi
router.delete("/blogs/:id", authMiddleware, BlogController.deleteBlog); // Hanya user yang terautentikasi

module.exports = router;
