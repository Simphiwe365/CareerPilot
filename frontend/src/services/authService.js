import axios from 'axios';
const API = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const login = (data) => axios.post(`${API}/auth/login`, data);
export const register = (data) => axios.post(`${API}/auth/register`, data);
export const me = () => axios.get(`${API}/user/profile`);
