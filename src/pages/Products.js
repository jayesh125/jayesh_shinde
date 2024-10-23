import React, { useState, useEffect } from "react";
import { fetchProducts } from "../api/products";
import { getCurrentUser } from "../api/currentUser";
import { Link } from "react-router-dom";
import { fetchQuote } from "../api/quote";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quote, setQuote] = useState(null);

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

  // Fetch Products
  useEffect(() => {
    fetchProducts()
      .then((response) => setProducts(response.data))
      .catch(console.error);
  }, []);

  // Fetch User Data
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getCurrentUser();
        setUser(userData);
      } catch (err) {
        setError("User is not logged in");
        return;
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter products
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Page logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container m-5 p-4 h-screen ">
      
      <h2 className="text-2xl font-bold text-center text-white">Product Listing</h2>

      {/* Display User*/}
      {loading ? (
        <p className="text-lg mt-2 truncate text-white animate-pulse justify-center">Loading data...</p>
      ) : error ? (
        <>
          <p className="text-lg mt-2 text-red-700 animate-pulse text-center">{error}</p>
          <p className="text-lg mt-2 text-blue-700 animate-pulse text-center">Please  
            <Link to={"/login"}> Login Here</Link>
          </p>
        </>
      ) : (
        <p className="text-lg text-center text-white">Welcome, {user.user.sub}!</p> // Display user email
      )}

      {quote && (
        <>
          <p className="text-lg mt-5 text-green-300 text-center">"{quote.quote}"</p>
          <p className="text-lg text-yellow-200 text-center">-{quote.author}</p>
        </>
      )}

      {/* Search Products */}
      <input
        type="text"
        className="border p-2 my-1 w-full mx-auto block rounded-lg"
        placeholder="Search products..."
        value={searchQuery}
        onChange={handleSearch}
      />
      
      {/* Products Display*/}
      <div className="grid grid-cols-2 min-[350px]:grid-cols-2 min-[420px]:grid-cols-3 min-[540px]:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-5 p-4 ">
        {currentProducts.map((product) => (
          <div key={product.id} className="border p-4 flex flex-col rounded-md">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="aspect-[3/2] object-contain bg-blend-color-burn mix-blend-screen"
            />
            <h4 className="text-xs mt-2 sm:text-xs md:text-xs truncate text-white">
              {product.title}
            </h4>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 mt-1">
              ${product.price}
            </p>
          </div>
        ))}
      </div>
      <div className="m-4 text-center flex justify-center p-5">

        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="bg-gray-300 py-2 px-4 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <p className="text-white py-2 px-4 ml-2 rounded disabled:opacity-50">Page {currentPage} of {Math.ceil(filteredProducts.length / productsPerPage)}</p>
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={indexOfLastProduct >= filteredProducts.length}
          className="bg-gray-300 py-2 px-4 ml-2 rounded disabled:opacity-50"
        >
          Next
        </button>

      </div>
    </div>
  );
};

export default Products;
