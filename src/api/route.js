import api from "./api";

export const getRoutes = async () => {
  const response = await api.get(`/route`);
  return response.data;
};

export const getRoute = async (id) => {
  const response = await api.get(`/route/${id}`);
  return response.data;
};
