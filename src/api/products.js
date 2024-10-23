import axios from "axios";

const PRODUCT_API_URL = "https://intern-task-api.bravo68web.workers.dev/api/products";

export const fetchProducts = async () => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.get(PRODUCT_API_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error.response?.data || "Failed to fetch products");
  }
};
