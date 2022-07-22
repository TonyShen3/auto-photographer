import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:5000/api/v1/auto-photographer",
    headers: {
        "Content-type": "application/json"
    },
    maxContentLength: 10000000,
    maxBodyLength: 10000000
});