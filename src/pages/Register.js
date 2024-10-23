import React, { useState } from "react";
import { signUp } from "../api/auth";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Validations
  const validateForm = () => {
    const {email, password } = formData;
    if (!email || !password) {
      return "All fields are required";
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return "Invalid email format";
    }
    if (password.length < 6) {
      return "Password must be at least 6 characters";
    }
    return null;
  };

  // handle Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }
    setLoading(true);
    try {
      await signUp(formData);
      alert("User registered successfully!");
      setFormData({
        email: "",
        password: ""
      });
      navigate("/login");
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="m-3 ring-slate-50 ring-2 rounded-md max-w-60 p-2 text-center">
      <div className="container mx-auto p-4 flex flex-col">
        <h2 className="text-2xl font-bold text-white mb-4">Register</h2>
        {error && <p className="text-red-500">{error}</p>}
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
          <button
            className="bg-white text-black py-2 px-4 rounded-md ring-1 ring-white"
            type="submit"
            disabled={loading}
          >
            {loading ? "Signing up..." : "Sign Up"}
          </button>

          <p className="text-white text-sm">
            Already have an account? <Link to="/login" className="text-blue-500">Login here</Link>
          </p>

        </form>
      </div>
    </section>
  );
};

export default Register;
