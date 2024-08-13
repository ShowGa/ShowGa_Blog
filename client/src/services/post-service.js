import axios from "axios";

const API_URL = import.meta.env.API_URL || "http://localhost:8080";

class PostService {
  createPost(postContent) {
    return axios.post(API_URL + "/server/post/create", postContent, {
      withCredentials: true,
    });
  }
}

export default new PostService();
