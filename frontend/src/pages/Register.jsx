import axios from 'axios';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';

function Register() {
  const { isAuthenticated, setIsAuthenticated, setProfile } = useAuth();
  const navigateTo = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [education, setEducation] = useState("");
  const [photo, setPhoto] = useState("");
  const [photoPreview, setPhotoPreview] = useState("");

  const changePhotoHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setPhotoPreview(reader.result);
      setPhoto(file);
    };
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    // Add form data to FormData object
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("password", password);
    formData.append("role", role);
    formData.append("education", education);
    formData.append("photo", photo);
    try {
      const { data } = await axios.post('http://localhost:4001/api/users/register', formData, {
        withCredentials: true,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      localStorage.setItem("jwt", data.token); 
      toast.success(data.message || 'User Registered Successfully');
      setProfile(data);
      setIsAuthenticated(true);

      setName("");
      setEmail("");
      setPhone("");
      setPassword("");
      setRole("");
      setEducation("");
      setPhoto("");
      setPhotoPreview("");
      navigateTo("/");
    } catch (error) {
      toast.error(error.response.data.message || 'Please fill required fields');
    }
  };

  return (
    <div className='min-h-screen flex justify-center items-center bg-gray-100'>
      <div className='w-full max-w-md bg-white shadow-lg rounded-lg p-8'>
        <form onSubmit={handleRegister}>
          <div className='font-bold text-2xl text-center mb-6'>
            <Link to='/'>Rahul Raj <span className='text-blue-500'>Blogs</span></Link>
          </div>

          <h1 className='text-xl font-semibold mb-6 text-gray-700 text-center'>Create Your Account</h1>

          <div className='mb-4'>
            <label className='block text-gray-700 font-medium mb-2'>Role</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className='w-full p-2 border border-gray-300 rounded-md'
            >
              <option value="">Select Role</option>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <div className='mb-4'>
            <label className='block text-gray-700 font-medium mb-2'>Name</label>
            <input
              type="text"
              placeholder='Enter Your Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className='mb-4'>
            <label className='block text-gray-700 font-medium mb-2'>Email</label>
            <input
              type="email"
              placeholder='Enter Your Email Address'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className='mb-4'>
            <label className='block text-gray-700 font-medium mb-2'>Phone</label>
            <input
              type="number"
              placeholder='Enter Your Phone Number'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className='mb-4'>
            <label className='block text-gray-700 font-medium mb-2'>Password</label>
            <input
              type="password"
              placeholder='Enter Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className='mb-4'>
            <label className='block text-gray-700 font-medium mb-2'>Education</label>
            <select
              value={education}
              onChange={(e) => setEducation(e.target.value)}
              className='w-full p-2 border border-gray-300 rounded-md'
            >
              <option value="">Select Your Education</option>
              <option value="B.Tech CSE">B.Tech CSE</option>
              <option value="B.Tech Mechanical">B.Tech Mechanical</option>
              <option value="B.Tech Civil">B.Tech Civil</option>
              <option value="BCA">BCA</option>
              <option value="MCA">MCA</option>
              <option value="M.Tech CSE">M.Tech CSE</option>
              <option value="MBA">MBA</option>
              <option value="BBA">BBA</option>
            </select>
          </div>

          <div className='mb-4'>
            <label className='block text-gray-700 font-medium mb-2'>Upload Profile Picture</label>
            <div className='flex items-center'>
              <div className='photo w-20 h-20 mr-4'>
                <img src={photoPreview ? `${photoPreview}` : "photo"} alt="Profile Preview" className='w-full h-full object-cover rounded-full' />
              </div>
              <input type="file" className='w-full p-2 border border-gray-300 rounded-md' onChange={changePhotoHandler} />
            </div>
          </div>

          <p className='text-center mb-4'>Already Registered? <Link className='text-blue-600' to='/login'>Login Now</Link></p>

          <button type='submit' className='w-full p-2 bg-blue-500 hover:bg-blue-700 transition duration-300 text-white rounded-md'>Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
