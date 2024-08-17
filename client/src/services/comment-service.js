import axios from "axios";

const API_URL = import.meta.env.API_URL || "http://localhost:8080";

class CommentService {
  createComment(formData) {
    return axios.post(API_URL + "/server/comment/create", formData, {
      withCredentials: true,
    });
  }
}

export default new CommentService();
