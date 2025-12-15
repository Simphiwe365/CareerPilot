import axios from 'axios';
const API = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const uploadCV = (file) => {
  const form = new FormData();
  form.append('file', file);
  return axios.post(`${API}/cv/upload`, form);
};

export const parseCV = (cvId) => axios.post(`${API}/cv/parse`, { cvId });
