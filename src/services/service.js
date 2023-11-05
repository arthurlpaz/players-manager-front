import axios from "axios";
import {getAcessToken} from "./service.auth";

const api = axios.create({
    baseURL: "http://localhost:8081/api"
});
export default api;