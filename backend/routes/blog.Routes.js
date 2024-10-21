import express from 'express';
import { createBlog, deleteBlog, getAllBlogs, getMyBlogs, getSingleBlog, updateBlog } from '../controller/blog.Controller.js';
import { isAdmin, isAuthenticated } from '../middleware/authUser.js';

const router=express.Router();

// Blog Post route
router.post("/create",isAuthenticated, isAdmin("admin"), createBlog);

// Blog Delete route
router.delete("/delete/:id",isAuthenticated, isAdmin("admin"), deleteBlog);

// Get All Blogs route
router.get("/all-blogs", getAllBlogs);

// Get Single Blog route
router.get("/single-blog/:id", isAuthenticated, getSingleBlog);

// Get My Blogs route
router.get("/my-blog", isAuthenticated, isAdmin("admin"), getMyBlogs);

// Update Blog route
router.put("/update/:id",isAuthenticated, isAdmin("admin"), updateBlog);



export default router;