import axios from 'axios';

class PostService {
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

  // POST /api/posts
  createPost = async (requestBody) => {
    return this.api.post('/api/posts', requestBody);
  }

  // GET /api/posts
  displayAll = async () => {
    return this.api.get('/api/posts');
  }

  // GET /api/posts/:postId
  getPost = async ({ postId }) => {
    return this.api.get(`/api/posts/${postId}`);
  }

  // PUT /api/posts/:id
  editPost = async ({ postId }) => {
    return this.api.put(`/api/posts/${postId}`);
  }

  // DELETE /api/posts/:id
  deletePost = async ({ postId }) => {
    return this.api.delete(`/api/posts/${postId}`);
  }


}

// Create one instance of the service
const postService = new PostService();

export default postService;