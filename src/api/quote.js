import axios from 'axios';

const API_URL = "https://intern-task-api.bravo68web.workers.dev";

export const fetchQuote = () => {
  const token = localStorage.getItem("token");
  return axios.get(`${API_URL}/api/quote`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};
