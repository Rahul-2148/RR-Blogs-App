import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google'; // Google OAuth package

function ForgetPassword() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");  // For mobile number input
  const [resetOption, setResetOption] = useState('email'); // 'email' or 'phone'

  // Handle password reset with email
  const handleForgotPasswordWithEmail = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        'http://localhost:4001/api/users/forget-password',
        { email },
        { headers: { 'Content-Type': 'application/json' } }
      );
      toast.success(data.message || 'Password reset link sent to your email.');
      setEmail("");
    } catch (error) {
      toast.error(error.response?.data?.message || 'Error occurred, try again.');
    }
  };

  // Handle password reset with phone number
  const handleForgotPasswordWithPhone = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        'http://localhost:4001/api/users/forget-password-phone',
        { phone },
        { headers: { 'Content-Type': 'application/json' } }
      );
      toast.success(data.message || 'Password reset OTP sent to your mobile number.');
      setPhone("");
    } catch (error) {
      toast.error(error.response?.data?.message || 'Error occurred, try again.');
    }
  };

  // Google login success handler
  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      const { data } = await axios.post(
        'http://localhost:4001/api/users/google-forget-password',
        { tokenId: credentialResponse.credential },
        { withCredentials: true }
      );
      toast.success('Password reset link sent via Google.');
    } catch (error) {
      toast.error('Google password reset failed');
    }
  };

  return (
    <div className='min-h-screen flex justify-center items-center bg-gray-100'>
      <div className='w-full max-w-md bg-white shadow-lg rounded-lg p-8'>
        <div className='font-bold text-2xl text-center mb-6'>
          <Link to='/'>Rahul Raj <span className='text-blue-500'>Blogs</span></Link>
        </div>

        <h1 className='text-xl font-semibold mb-6'>Forget Password</h1>
        <p className='text-gray-600 mb-3 text-sm'>Enter your registered email address and we will send you a password reset link Or Sign in with Google Or Mobile Number</p>


        <div className='flex gap-2 mb-6'>
          <button
            type="button"
            className={`w-full p-2 border rounded-md ${resetOption === 'email' ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}
            onClick={() => setResetOption('email')}
          >
            Reset with Email
          </button>
          <button
            type="button"
            className={`w-full p-2 border rounded-md ${resetOption === 'phone' ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}
            onClick={() => setResetOption('phone')}
          >
            Reset with Mobile Number
          </button>
        </div>

        {resetOption === 'email' ? (
          <form onSubmit={handleForgotPasswordWithEmail}>
            <div className='mb-4'>
              <label className="block mb-2 text-gray-600">Email</label>
              <input
                type="email"
                placeholder='Enter Your Email...'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <button type='submit' className='w-full p-2 bg-blue-500 hover:bg-blue-700 text-white rounded-md'>
              Send Reset Link
            </button>
          </form>
        ) : (
          <form onSubmit={handleForgotPasswordWithPhone}>
            <div className='mb-4'>
              <label className="block mb-2 text-gray-600">Mobile Number</label>
              <input
                type="tel"
                placeholder='Enter Your Mobile Number...'
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <button type='submit' className='w-full p-2 bg-blue-500 hover:bg-blue-700 text-white rounded-md'>
              Send OTP
            </button>
          </form>
        )}

        <div className='mt-6'>
          <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={() => toast.error('Google login failed')}
            />
          </GoogleOAuthProvider>
        </div>

        <p className='text-center mt-4'><Link className='text-blue-600' to='/login'>Back to Login</Link></p>
      </div>
    </div>
  );
}

export default ForgetPassword;
