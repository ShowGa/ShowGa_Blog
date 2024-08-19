import axios from "axios";
import { query } from "express";

const API_URL = import.meta.env.API_URL || "http://localhost:8080";

class PostService {
  createPost(postContent) {
    return axios.post(API_URL + "/server/post/create", postContent, {
      withCredentials: true,
    });
  }

  getAllPosts(query = "") {
    return axios.get(API_URL + `/server/post/getallposts${query}`);
  }

  getPost(slug) {
    return axios.get(API_URL + `/server/post/getpost/${slug}`);
  }

  getSidebarPost(query) {
    return axios.get(API_URL + `/server/post/getsidebarpost/?${query}`);
  }
}

export default new PostService();
