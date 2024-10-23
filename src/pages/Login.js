import React, { useState } from "react";
import { login } from "../api/auth";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Validate form
  const validateForm = () => {
    const { email, password } = formData;
    if (!email || !password) {
      return "All fields are required";
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return "Invalid email format";
    }
    return null;
  };

  // Handle form change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }
    setLoading(true);
    try {
      const response = await login(formData);
      localStorage.setItem("token", response.data.token);
      setFormData({
        email: "",
        password: "",
      })
      alert("Logged in successfully!");
      navigate("/products");
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="m-3 ring-slate-50 ring-2 rounded-md max-w-60 p-2 text-center">
    <div className="container mx-auto p-4 flex flex-col">
      <h2 className="text-2xl font-bold text-white mb-4">Login</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="ring-1 ring-white p-2 w-full text-white bg-transparent rounded-md"
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          className="ring-1 ring-white p-2 w-full text-white bg-transparent rounded-md"
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        {error && <p className="text-red-500 text-xs">{error}</p>}
        <button
          className="bg-white text-black py-2 px-4 rounded-md ring-1 ring-white"
          type="submit"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
        <p className="text-sm text-gray-500">
          Don't have an account? <Link to="/register" className="text-blue-500">Register here</Link>
        </p>
      </form>
    </div>
    </section>
  );
};

export default Login;
