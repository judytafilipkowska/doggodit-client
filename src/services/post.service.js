import axios from 'axios';

class PostService {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_SERVER_URL || "http://localhost:5005"
    });

    this.api.interceptors.request.use((config) => {
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
  getPost = async (postId) => {
    return this.api.get(`/api/posts/${postId}`);
  }

  // POST /api/comment
  createComment = async (requestBody) => {
    console.log("POSTSERVICES REQ BODY", requestBody)
    return this.api.post(`/api/comment`, requestBody)
  }
}

const postService = new PostService();

export default postService;