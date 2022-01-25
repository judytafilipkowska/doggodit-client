import axios from "axios";

class DogService {
    constructor() {
        this.api = axios.create({
            baseURL: process.env.REACT_APP_SERVER_URL || "http://localhost:5005",
        });

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` };
            }

            return config;
        });
    }

    // get/api/doglist
    getAllDogs = async () => {

        return this.api.get('/api/doglist');
    }
}

const dogService = new DogService();

export default dogService;