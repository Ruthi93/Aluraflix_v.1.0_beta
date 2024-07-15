import axios from 'axios';

const API_URL = 'http://localhost:3001/videos';

export const getVideos = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const getVideo = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

export const addVideo = async (video) => {
  await axios.post(API_URL, video);
};

export const updateVideo = async (id, video) => {
  await axios.put(`${API_URL}/${id}`, video);
};

export const deleteVideo = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};
