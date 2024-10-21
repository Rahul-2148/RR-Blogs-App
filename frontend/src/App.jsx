import React from 'react'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import Footer from './components/Footer.jsx'
import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import About from './pages/About.jsx'
import Blogs from './pages/Blogs.jsx'
import Contact from './pages/Contact.jsx'
import Creators from './pages/Creators.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import ForgotPassword from './pages/ForgotPassword.jsx'
import { useAuth } from './context/AuthProvider.jsx'
import { Toaster } from 'react-hot-toast';
import BackToTop from './components/BackToTop.jsx'
import TermsOfService from './pages/TermsOfService.jsx'
import UpdateBlog from './dashboard/UpdateBlog.jsx'
import Detail from './pages/Detail.jsx'
import NotFound from './pages/NotFound.jsx'
//import DarkLightMode from './components/DarkLightMode.jsx'


function App() {
  const location= useLocation();
  const hideNavbarFooter = ["/dashboard","/login","/register","/forgotPassword"].includes(location.pathname);

  const { blogs, isAuthenticated } = useAuth();
  let token = localStorage.getItem("jwt"); // Retrieve the token directly from the localStorage to maintaining the routes protect (Go to login.jsx)
  console.log(blogs);
  console.log(isAuthenticated); // it is not using because every page refresh it was redirected to /login

  return (
    <div>
      {!hideNavbarFooter && <Navbar />}

      <Routes>
        <Route path="/" element={token ? <Home /> : <Navigate to={"/login"} />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/creators" element={<Creators />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/termsOfService" element={<TermsOfService />} />

        {/* Single page routes */}
        <Route path="/blog/:id" element={<Detail />} />

        {/* Update Page Route */}
        <Route path="/blog/update/:id" element={<UpdateBlog />} />

        {/* Universal Route */}
        <Route path="*" element={<NotFound />} />

      </Routes>

      <Toaster />
      <BackToTop />

      {/* <DarkLightMode /> */}

      {!hideNavbarFooter && <Footer />}
    </div>
  );
}

export default App;