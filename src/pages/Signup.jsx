import React, { useState } from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom"

const Signup = () => {
  const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData)=>({
            ...prevData,
            [name]: value,
        }))
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Form validation
        if(formData.password !== formData.confirmPassword){
            alert("Passwords do not match");
            return;
        } 
        if (!formData.name || !formData.email || !formData.password){
          alert("All the fields are required!");
          return;
        }

        //Retrieve current user from localStorage
        const storedUserData = JSON.parse(localStorage.getItem("userData")) || [];

        // Check if the user email already exists
        const userExists = storedUserData.some((user)=> user.email === formData.email);
        if(userExists){
          alert("User with this email already exists!");
          return;
        }

        // Add the new user to the array
        const newUser = {
        id: storedUserData.length + 1,
        name: formData.name,
        email: formData.email,
        password: formData.password,
    };

    // update local storage with new user Data
    const updatedUserData = [...storedUserData, newUser];
    localStorage.setItem("userData", JSON.stringify(updatedUserData));

        navigate("/login");
    };
    
  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
          <h2 className="text-3xl font-bold mb-6 text-center">Create an Account</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:border-[#3DC3E4]"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:border-[#3DC3E4]"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:border-[#3DC3E4]"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:border-[#3DC3E4]"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#3DC3E4] text-white py-3 px-6 rounded-lg hover:bg-[#0F7D95] transition-colors duration-300"
            >
              Sign Up
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Signup;
