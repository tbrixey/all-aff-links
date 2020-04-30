import axios from "axios";

axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

export const apiClient = axios.create({
  baseURL: "http://localhost:3000",
});
