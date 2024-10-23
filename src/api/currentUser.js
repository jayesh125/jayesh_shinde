import axios from "axios";

export const getCurrentUser = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get("https://intern-task-api.bravo68web.workers.dev/api/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      throw new Error("Unauthorized - Please log in again.");
    } else {
      throw new Error("Failed to fetch user data.");
    }
  }
};
  
