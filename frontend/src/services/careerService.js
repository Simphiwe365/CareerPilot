import axios from 'axios';
const API = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const recommendCareers = (opts={}) => axios.post(`${API}/career/recommend`, opts);
export const getCareerById = (id) => axios.get(`${API}/career/${id}`);
export const getSkillGap = (id) => axios.get(`${API}/career/skill-gap/${id}`);
