import axios from "axios";

const API_URL = "https://api.themoviedb.org/3/";
const API_KEY = "6267c4e0ce9b4b6facab1d7cd48497b2";

export function fetchApiData(path, parameterString) {
  return axios.get(`${API_URL}${path}?api_key=${API_KEY}&${parameterString}`);
}
