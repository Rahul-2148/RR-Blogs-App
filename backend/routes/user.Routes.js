import express from 'express';
import { getAdmins, getAllUsers, getMyProfile, login, logout, register, updateMyProfile } from '../controller/user.Controller.js';
import { isAdmin, isAuthenticated } from '../middleware/authUser.js';

const router=express.Router();

// User Account Sign-up or register route
router.post("/register",register);

// User Account Login route
router.post("/login",login);

// User Account Logout route
router.get("/logout", isAuthenticated, logout);

// Get All Users route
router.get("/all-users", isAuthenticated, isAdmin("admin"), getAllUsers);

// Get My Profile route
router.get("/my-profile", isAuthenticated, getMyProfile);

// Get Admins route
router.get("/admins", getAdmins);

// Update My Profile route
router.put("/update-profile", isAuthenticated, updateMyProfile);


export default router;