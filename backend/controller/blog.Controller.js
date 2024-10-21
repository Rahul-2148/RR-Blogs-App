import mongoose from "mongoose";
import { Blog } from "../models/blog.model.js";
import { v2 as cloudinary } from 'cloudinary';

// ---------------- Create Blog -----------------------
export const createBlog = async (req,res) => {
    try {
      if(!req.files || Object.keys(req.files).length===0){
          return res.status(400).json({message: "Blog Image is required"});
      }
      const { blogImage }=req.files;
      const allowedFormats = ["image/jpeg", "image/png", "image/jpg", "image/webp"];
      if(!allowedFormats.includes(blogImage.mimetype)) {
          return res.status(400).json({ message: "Invalid photo format. Only jpg and png are allowed" });
      }
  
      const { title,category,about } = req.body;
      if(!title || !category || !about ){
          return res.status(400).json({message: "title, category and about are required fields"});
      }
     
      const adminName = req?.user?.name;
      const adminPhoto = req?.user?.photo?.url;
      const createdBy = req?.user?._id;

      const cloudinaryResponse= await cloudinary.uploader.upload(
          blogImage.tempFilePath
      )
      if(!cloudinaryResponse || cloudinaryResponse.error){
          console.log(cloudinaryResponse.error);
          return res.status(500).json({ message: "Failed to upload image" });
      }
      const blogData= {
          title,
          about,
          category,
          adminName,
          adminPhoto,
          createdBy,
          blogImage:{
              public_id:cloudinaryResponse.public_id,
              url:cloudinaryResponse.url,
          }
      };
      const blog = await Blog.create(blogData);
      
      // successfully created blog response
      return res.status(201).json({ message: "Blog created successfully", blog });
    }
    catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  };

// ---------------- Delete Blog -----------------------
export const deleteBlog = async (req,res) => {
    try {
        const { id } = req.params;
        const blog = await Blog.findById(id);
        if (!blog) {
          return res.status(404).json({ message: "Blog not found" });
        }
        await blog.deleteOne();
        return res.status(200).json({ message: "Blog deleted successfully" });
    }
    catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  };


// ---------------- Get All Blogs -----------------------
export const getAllBlogs = async (_req,res) => {
    try {
        const allBlogs = await Blog.find();
        return res.status(200).json(allBlogs);
    }
    catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  };
  

// ---------------- Get Single Blog -----------------------
export const getSingleBlog = async (req,res) => {
    try {
        const { id } = req.params;
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({ message: "Invalid Blog id" });
        }
        const blog = await Blog.findById(id);
        if (!blog) {
          return res.status(404).json({ message: "Blog not found" });
        }
        return res.status(200).json({ message: "Blog fetched successfully", blog });
    }
    catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  };


// ---------------- My Blogs -----------------------
export const getMyBlogs = async (req,res) => {
    try {
        const createdBy = req.user._id;
        const myBlogs = await Blog.find({ createdBy });
        return res.status(200).json({ message: "Your Blogs fetched successfully", myBlogs });
    }
    catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  };

// ---------------- Update Blog -----------------------
export const updateBlog = async (req,res) => {
    try {
        const { id } = req.params;
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({ message: "Invalid Blog id" });
        }
        const blog = await Blog.findById(id);
        if (!blog) {
          return res.status(404).json({ message: "Blog not found" });
        }
        const updatedBlog = await Blog.findByIdAndUpdate(id, req.body, { new: true });
        return res.status(200).json({ message: "Blog updated successfully", updatedBlog });
    }
    catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }; 
  