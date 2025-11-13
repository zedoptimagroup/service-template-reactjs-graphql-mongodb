import axios from "axios";

const API_BASE = "http://localhost:3000/api/customer"; // ← Your Next.js server

export const getCustomers = async () => {
  console.log("Trying to get the customers from the API")
  const response = await axios.get(`${API_BASE}/list`);
  console.log("Response: ", response)
  return response.data;
};

export const getCustomer = async (id) => {
  const response = await axios.get(`${API_BASE}/${id}/read`);
  return response.data;
};

export const createCustomer = async (data) => {
  const response = await axios.post(`${API_BASE}/create`, data);
  return response.data;
};

export const updateCustomer = async (id, data) => {
  const response = await axios.put(`${API_BASE}/${id}/update`, data);
  return response.data;
};

export const deleteCustomer = async (id) => {
  const response = await axios.delete(`${API_BASE}/${id}/delete`);
  return response.data;
};
