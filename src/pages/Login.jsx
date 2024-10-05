import React, { useState } from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { userData } from '../data/user';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        /* Validate form */
        if (!formData.email || !formData.password){
          alert("All the fields are required!");
          return;
        }
        const verifyEmail = userData && userData.filter(user=>user.email === formData.email);
        if(!verifyEmail){
            alert("Wrong email password combination!");
        }

        const verifyPassword = userData && userData.filter(user=>user.password === formData.password);
        if(!verifyPassword){
            alert("Wrong email password combination!");
        }
        navigate("/dashboard");
    };

  return (
    <div>
      <Navbar />
            <section className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
                <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
                    <h2 className="text-3xl font-bold mb-6 text-center">Sign In</h2>
                    <form onSubmit={handleSubmit}>
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
                        <button
                            type="submit"
                            className="w-full bg-[#3DC3E4] text-white py-3 px-6 rounded-lg hover:bg-[#0F7D95] transition-colors duration-300"
                        >
                            Sign In
                        </button>
                    </form>
                </div>
            </section>
            <Footer />
    </div>
  )
}

export default Login
