import axios from "axios";

export const axiosClient = axios.create({
    baseURL: "http://localhost:1337/api",
    headers: {
        "Content-Type": "application/json",
    },
});