import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getCurrentUser } from "../api/currentUser";
import { fetchQuote } from "../api/quote";

const Home = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [quote, setQuote] = useState(null);
  const navigate = useNavigate();

  // Fetch Quote Data
  useEffect(() => {
    const fetchQuoteData = async () => {
      try {
        const response = await fetchQuote();
        setQuote(response.data);
      } catch (err) {
        console.error(err.message);
      }
    };

    fetchQuoteData();
  }, []);

  // Fetch User Data
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getCurrentUser();
        setUser(userData);
      } catch (err) {
        console.error(err.message);
        setError(err.message);
      }
    };

    fetchUser();
  }, []);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/login");
  };

  if (error) {
    return (
      <div className="h-screen flex flex-col justify-center items-center">
        <h1 className="text-5xl font-bold mb-4 text-white">Welcome to Our Shop</h1>
        <p className="text-lg mb-4 text-white">Explore the best products here!</p>
        <p className="text-lg mb-8 text-white">{error}</p>
        <div className="space-x-4">
          <Link to="/login" className="bg-white text-black py-2 px-4 rounded-md ring-1 ring-white">
            Login
          </Link>
          <Link to="/register" className="bg-white text-black py-2 px-4 rounded-md ring-1 ring-white">
            Register
          </Link>
        </div>
        <p className="justify-center m-10">
          <Link to="https://github.com/jayesh125" className="text-white text-xs">
            Check My Other projects
          </Link>
        </p>
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold mb-4 text-white text-center">Welcome 👨🏻‍💻<i>{user?.user?.sub}!</i> <br /> to Our Shop</h1>

      {/* Display quotes */}
      {quote && (
        <>
          <p className="text-lg mb-4 text-green-300 text-center">"{quote.quote}"</p>
          <p className="text-lg mb-4 text-yellow-200">-{quote.author}</p>
        </>
      )}

      <p className="text-lg mb-4 text-white">Explore the best products here!</p>

      <div className="space-x-4 flex">
        <button
          onClick={handleLogout}
          className="bg-white text-black py-2 px-4 rounded-md ring-1 ring-white"
        >
          Logout
        </button>
        <Link to="/products" className="bg-white text-black py-2 px-4 rounded-md ring-1 ring-white truncate">
          View Products
        </Link>
      </div>
      <p className="justify-center m-10">
        <Link to="https://github.com/jayesh125" className="text-white text-xs">
          Check My Other projects
        </Link>
      </p>
    </div>
  );
};

export default Home;
