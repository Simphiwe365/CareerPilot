import axios from 'axios';
const API = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const sendMessage = (message, context) => axios.post(`${API}/chat/message`, { message, context });
export const getHistory = (params) => axios.get(`${API}/chat/history`, { params });
export const clearHistory = () => axios.delete(`${API}/chat/history`);
