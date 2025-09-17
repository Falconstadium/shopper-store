import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://fakestoreapi.com",
});

export const getProduct = async () => {
  try {
    const { data } = await axiosInstance.get("/products");
    return data;
  } catch (error) {
    console.error("Error", error);
  }
};
