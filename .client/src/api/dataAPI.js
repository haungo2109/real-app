import axiosClient from "./axiosClient";

const productApi = {
  getProducts: () => {
    const url = "/products/";
    return axiosClient.get(url);
  },
};
export default productApi;
