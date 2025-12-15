import axios from 'axios';
const API = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const getProfile = () => axios.get(`${API}/user/profile`);
export const updateProfile = (data) => axios.put(`${API}/user/profile`, data);
