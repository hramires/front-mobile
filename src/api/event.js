import api from "./api";

export const getEvents = async () => {
  const response = await api.get(`/event`);
  return response.data;
};

export const getEvent = async (id) => {
  const response = await api.get(`/event/${id}`);
  return response.data;
};
