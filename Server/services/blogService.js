const { Blog } = require("../models");

class BlogService {
  static async getAllBlogs() {
    try {
      const blogs = await Blog.findAll();
      return blogs;
    } catch (error) {
      throw error;
    }
  }

  static async getBlogById(id) {
    try {
      const blog = await Blog.findByPk(id);
      if (!blog) {
        throw new Error("Blog not found");
      }
      return blog;
    } catch (error) {
      throw error;
    }
  }

  static async createBlog(data) {
    try {
      const newBlog = await Blog.create(data);
      return newBlog;
    } catch (error) {
      throw error;
    }
  }

  static async updateBlog(id, data) {
    try {
      const blog = await Blog.findByPk(id);
      if (!blog) {
        throw new Error("Blog not found");
      }
      await blog.update(data);
      return blog;
    } catch (error) {
      throw error;
    }
  }

  static async deleteBlog(id) {
    try {
      const blog = await Blog.findByPk(id);
      if (!blog) {
        throw new Error("Blog not found");
      }
      await blog.destroy();
      return blog;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = BlogService;
