import axios from "axios";

const API_URL = import.meta.env.API_URL || "http://localhost:8080";

class CommentService {
  createComment(formData) {
    return axios.post(API_URL + "/server/comment/create", formData, {
      withCredentials: true,
    });
  }

  getPostComments(belongPostID, query) {
    return axios.get(
      API_URL + `/server/comment/getpostcomments/${belongPostID}` + query
    );
  }
}

export default new CommentService();
