import axios from "axios";
let baseURL = "https://5f126b63d5e6c90016ee502e.mockapi.io/api/v1";

const axiosClient = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
  paramsSerializer: (params) => JSON.stringify(params),
});
axiosClient.interceptors.request.use(async (config) => {
  //handle token
  return config;
});

axiosClient.interceptors.response.use(
  async (res) => {
    if (res.data) return res.data;
    if (res.status == 400) {
      const error = await res.text();
      throw new Error(error);
    }
    throw new Error("Network response was not ok.");
  },
  (error) => {
    console.error("API call failed. " + error);
    throw error;
  }
);

export default axiosClient;
