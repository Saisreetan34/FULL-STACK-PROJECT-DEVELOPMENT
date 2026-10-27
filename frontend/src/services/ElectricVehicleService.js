
import axios from "axios";

const API_URL = "http://localhost:8081";

export const addElectricVehicle = (vehicle) => {
  return axios.post(`${API_URL}/Add`, vehicle);
};

export const getElectricVehicles = () => {
  return axios.get(`${API_URL}/DisplayAll`);
};

export const deleteElectricVehicle = (id) => {
  return axios.delete(`${API_URL}/Delete/${id}`);
};

export const checkBackend = () => {
  return axios.get(`${API_URL}/home`);
};