import api from "./api";

export const getPlaces = async () => {
  const response = await api.get("/place");
  return response.data;
};

export const getPlace = async (id) => {
  const response = await api.get(`/place/${id}`);
  return response.data;
};
