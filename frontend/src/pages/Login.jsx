import axios from 'axios';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';

function login() {
  const { isAuthenticated, setIsAuthenticated, setProfile } = useAuth();
  

  const navigateTo = useNavigate();
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  //const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

 
  const handleLogin = async(e) => {
    e.preventDefault();
   
    try {
      const {data} = await axios.post('http://localhost:4001/api/users/login', {email, password, role}, 
      {
        withCredentials: true,
        headers: {
          'Content-Type': "application/json",
        },
      }
      );
    
      console.log(data);
      // Store the token in local storage
      localStorage.setItem("jwt", data.token); // storing token in local storage so that if user refreshed the page it will not redirect again in login
      toast.success(data.message || 'User Logged In Successfully', {
        duration: 3000,
      });
      setProfile(data);
      setIsAuthenticated(true); 
      setRole('');
      setEmail('');
      //setPhone('');
      setPassword('');
      navigateTo("/");
      
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message || 'please fill required fields', {
        duration: 3000,
      });
    }
  };

  return (
    <div className='min-h-screen flex justify-center items-center bg-grey-100'>
      <div className='w-full max-w-md bg-white shadow-md rounded-lg p-8 '>

        <form onSubmit={handleLogin}>
        <div className="font-semibold text-xl items-center text-center">
              Rahul Raj<span className="text-blue-500">Blogs</span>
            </div>

        
        <h1 className='text-xl font-semibold mb-6'>Login</h1>

        <select value={role}
         onChange={(e) => setRole(e.target.value)}
         className='w-full p-2 mb-4 border border-gray-300 rounded-md ' >
          <option value="">Select Role</option>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>

        <div className='mb-4'>
          <input type="email" placeholder='Enter Your Email Address...' value={email} 
          onChange={(e) => setEmail(e.target.value)} className="w-full p-2 border border-gray-300 rounded-md" />
        </div>

        <div className='mb-4'>
          <input type="password" placeholder='Enter Password...' value={password} 
          onChange={(e) => setPassword(e.target.value)} className="w-full p-2 border border-gray-300 rounded-md" />
        </div>

        <p className='text-center mb-4'>Don't have an account ? <Link className='text-blue-600' to = {'/register'} >Signup</Link></p>

        <p className='mb-2 items-center text-center text-blue-500 hover:text-blue-800'>
          <Link to ='/forgotPassword'>Forget Password</Link>
        </p>

        <button type='submit' className='w-full p-2 mb-4 bg-blue-500 hover:bg-blue-800 duration-300 text-white rounded-md'>Login</button>
        </form>
      </div>
    </div>
  );
}

export default login;
