import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [blogs, setBlogs] = useState();
  const [profile, setProfile] = useState(null); // Start with null to avoid errors
  const [creators, setCreators] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false); // To track if the user is an admin

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        let token = localStorage.getItem("jwt");
        if (token) {
          const { data } = await axios.get(
            "http://localhost:4001/api/users/my-profile",
            {
              withCredentials: true,
              headers: {
                "Content-Type": "application/json",
              },
            }
          );

          // Set the full profile data
          setProfile(data); // Store the entire profile data

          // Determine if the user is authenticated and an admin
          if (data.user) {
            setIsAuthenticated(true);
            setIsAdmin(data.user.role === "admin"); // Check if user is an admin
          } else {
            setIsAuthenticated(false);
          }
        }
      } catch (error) {
        console.log(error);
        setIsAuthenticated(false); // Set to false if there's an error
      }
    };

    const fetchBlogs = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:4001/api/blogs/all-blogs",
          { withCredentials: true }
        );
        setBlogs(data);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchCreators = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:4001/api/users/admins",
          { withCredentials: true }
        );
        setCreators(data.admins);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBlogs();
    fetchProfile();
    fetchCreators();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        blogs,
        profile,
        creators,
        setProfile,
        isAuthenticated,
        isAdmin, // Pass the admin state
        setIsAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
