import axios from "axios";

const API_URL = "https://intern-task-api.bravo68web.workers.dev/auth";

// Sign Up
export const signUp = async (formData) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, formData);
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error.response?.data || "Signup failed");
  }
};

// Login
export const login = async (formData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, formData);
    const token = response.data.token;
    localStorage.setItem('token', token);
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error.response?.data || "Login failed");
  }
};


