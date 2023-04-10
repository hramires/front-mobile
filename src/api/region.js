import api from "./api";

export const getRegions = async () => {
  const response = await api.get(`/region`);
  return response.data;
};

export const getRegion = async (id) => {
  const response = await api.get(`/region/${id}`);
  return response.data;
};
