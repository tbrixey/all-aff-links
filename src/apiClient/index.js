import axios from "axios";

export const apiClient = axios.create({
  baseURL: "https://all-aff-links-api.herokuapp.com/",
});
