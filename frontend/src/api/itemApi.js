import axios from "axios";

const rawApiUrl =
  import.meta.env.VITE_API_URL ||
  "https://wmtlabtestproject-production-cb14.up.railway.app";

const normalizedApiUrl = rawApiUrl.replace(/^http:\/\//i, "https://").replace(/\/$/, "");

const API = axios.create({
  baseURL: `${normalizedApiUrl}/api`,
});

export const getItems = () => API.get("/items");
export const getItemById = (id) => API.get(`/items/${id}`);
export const createItem = (itemData) => API.post("/items", itemData);
export const updateItem = (id, itemData) => API.put(`/items/${id}`, itemData);
export const deleteItem = (id) => API.delete(`/items/${id}`);

export default API;