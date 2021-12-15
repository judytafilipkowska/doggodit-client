import axios from "axios";

class DogService {
    constructor() {
        this.api = axios.create({
            baseURL: process.env.REACT_APP_SERVER_URL || "http://localhost:5005",
        });

        // Automatically set JWT token in the headers for every request
        this.api.interceptors.request.use((config) => {
            // Retrieve the JWT token from the local storage
            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` };
            }

            return config;
        });
    }

    // get/api/doglist
    getAllDogs = async (data) => {
        console.log(data)
        return this.api.get('/api/doglist', data);
    }
}

const dogService = new DogService();

export default dogService;