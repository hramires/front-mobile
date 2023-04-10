import api from "./api";

export const getCategories = async () => {
  const response = await api.get(`/category`);
  return response.data;
};

export const getCategory = async (id) => {
  const response = await api.get(`/category/${id}`);
  return response.data;
};
