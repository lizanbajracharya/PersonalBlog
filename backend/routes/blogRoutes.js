import express from "express";
const router = express.Router();
import {
  getBlogs,
  getBlogById,
  deleteBlog,
  updateBlog,
  createBlog,
  getBlogByUserId,
} from "../controllers/blogController.js";
import { protect } from "../middleware/authMiddleware.js";

router.route("/").get(getBlogs).post(protect, createBlog);
router.route("/user/:userid").get(protect, getBlogByUserId);
router
  .route("/:id")
  .get(getBlogById)
  .delete(protect, deleteBlog)
  .put(protect, updateBlog);

export default router;
