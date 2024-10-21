import { User } from "../models/user.model.js";
import { v2 as cloudinary } from 'cloudinary';
import bcrypt from 'bcryptjs';
import createTokenAndSaveCookies from "../jwt/AuthToken.js";


// ------------------------ Register ------------------------------
export const register = async (req,res) => {
  try {
    if(!req.files || Object.keys(req.files).length===0){
        return res.status(400).json({message: "User Photo is required"});
    }
    const {photo}=req.files;
    const allowedFormats = ["image/jpeg", "image/png", "image/jpg", "image/webp"];
    if(!allowedFormats.includes(photo.mimetype)) {
        return res.status(400).json({ message: "Invalid photo format. Only jpg and png are allowed" });
    }

    const {email,name, phone, password, role, education} = req.body;
    if(!email || !name || !phone || !password || !role || !education || !photo){
        return res.status(400).json({message: "Please fill required fields"});
    }
    const user= await User.findOne({email});
    if(user){
        return res.status(409).json({message:"User already exists with this email"});
    }
    const cloudinaryResponse= await cloudinary.uploader.upload(
        photo.tempFilePath
    )
    if(!cloudinaryResponse || cloudinaryResponse.error){
        console.log(cloudinaryResponse.error);
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
        email,
        name,
        phone,
        password:hashedPassword,
        role,
        education,
        photo:{
            public_id:cloudinaryResponse.public_id,
            url:cloudinaryResponse.url,
        }
    });
    await newUser.save();
    if(newUser){
        const token= await createTokenAndSaveCookies(newUser._id, res);
        console.log("Signup: ", token);
        return res.status(201).json({message:"User registered successfully", user:newUser, token: token});
    }
  }
  catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// ------------------------ Login ------------------------------
export const login = async (req, res) => {
    const { email, password, role } = req.body;
    try {
      if (!email || !password || !role) {
        return res.status(400).json({ message: "Please fill required fields" });
      }
      const user = await User.findOne({ email }).select("+password");
      if (!user.password) {
        return res.status(401).json({ message: "User Password is missing" });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!user || !isMatch) {
        return res.status(401).json({ message: "Invalid email or password" });
      }
      if (user.role !== role) {
        return res.status(401).json({ message: `Given role ${role} not found` });
      }
      const token = await createTokenAndSaveCookies(user._id, res);
      console.log("Login: ", token);
      return res.status(200).json({ message: "User logged in successfully",
        user: {
          _id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
        token: token, 
       });
    
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

// ------------------------ Logout ------------------------------
export const logout = async (req, res) => {
    try {
      res.clearCookie("jwt");
      return res.status(200).json({ message: "User logged out successfully" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  };

// -------------------- Get All Users -------------------------------
export const getAllUsers = async (req, res) => {
    try {
      const users = await User.find();
      return res.status(200).json({ message: "All users fetched successfully", users });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  };

// -------------------- Get My Profile -------------------------------
export const getMyProfile = async (req, res) => {
    try {
      const user = await req.user;
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      return res.status(200).json({user});
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  };

// -------------------- Get Admins -------------------------------
export const getAdmins = async (req, res) => {
    try {
      const admins = await User.find({ role: "admin" });
      return res.status(200).json({ message: "Admins fetched successfully", admins });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  };

// -------------------- Update My Profile -------------------------------
export const updateMyProfile = async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(req.user._id, req.body, {
        new: true,
      });
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      return res.status(200).json({ message: "Profile updated successfully", user });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  };
    