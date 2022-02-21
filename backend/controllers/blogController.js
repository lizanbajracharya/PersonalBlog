import asyncHandler from "express-async-handler";
import Blog from "../models/blogModel.js";

// @desc     Fetch all blog
// @route   GET api/blog
// @access   Public
const getBlogs = asyncHandler(async (req, res) => {
  const blogs = await Blog.find();

  res.json({ blogs });
});

// @desc     Fetch single blog
// @route    GET api/blog/:id
// @access   Public
const getBlogById = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.id);

  if (blog) {
    res.json(blog);
  } else {
    res.status(404);
    throw new Error("Blog not found");
  }
});

// @desc     Fetch blog by users
// @route    GET api/blogs/user/:userid
// @access   Public
const getBlogByUserId = asyncHandler(async (req, res) => {
  const blog = await Blog.find({ user: req.user._id });

  if (blog) {
    res.json({ blog });
  } else {
    res.status(404);
    throw new Error("Blogs not found");
  }
});

// @desc     Delete a blog
// @route    DELETE api/blog/:id
// @access   Private/User
const deleteBlog = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.id);

  if (blog) {
    await blog.remove();
    res.json({ message: "Blog Removed" });
  } else {
    res.status(404);
    throw new Error("Blog not found");
  }
});

// @desc     Create a blog
// @route    POST api/blogs
// @access   Private/User
const createBlog = asyncHandler(async (req, res) => {
  const { title, description, blogType } = req.body;
  const blog = new Blog({
    title: title,
    user: req.user._id,
    blogType: blogType,
    description: description,
  });

  const createdBlog = await blog.save();
  res.status(201).json(createdBlog);
});

// @desc     Update a blog
// @route    PUT api/blogs/:id
// @access   Private/User
const updateBlog = asyncHandler(async (req, res) => {
  const { title, description, blogType } = req.body;

  const blog = await Blog.findById(req.params.id);

  if (blog) {
    blog.title = title;
    blog.description = description;
    blog.blogType = blogType;

    const updatedBlog = await blog.save();
    res.json(updatedBlog);
  } else {
    res.status(404);
    throw new Error("Blog not found");
  }
});

export {
  getBlogs,
  getBlogById,
  deleteBlog,
  createBlog,
  updateBlog,
  getBlogByUserId,
};
