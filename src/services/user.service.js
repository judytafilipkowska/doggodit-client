import axios from "axios";

class UserService {
    constructor() {
        this.api = axios.create({
            baseURL: process.env.REACT_APP_SERVER_URL || "http://localhost:5005"
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


    // GET /api/users/current
    currentUser = async () => {
        return this.api.get('/api/users/current');
    }

    // PUT /api/users/current
    updateCurrentUser = async (requestBody) => {

        return this.api.put(`/api/users/current`, requestBody);
    }

    // GET /api/users/current/posts
    postsOfCurrentUser = async () => {
        return this.api.get('/api/users/current/posts');
    }
    // GET /api/users/current/posts/:postId
    onePostOfCurrentUser = async (postId) => {
        return this.api.get(`/api/users/current/posts/${postId}`);

    }
    // delete /api/users/current/posts/:postId
    deleteOnePostOfCurrentUser = async (postId) => {
        return this.api.delete(`/api/users/current/posts/${postId}`);
    }
    //PUT /api/users/current/posts/:postId/edit
    editOnePostOfCurrentUser = async (postId, requestBody) => {
        return this.api.put(`/api/users/current/posts/${postId}/edit`, requestBody);
    }


}

// Create one instance of the service
const userService = new UserService();

export default userService;