import axios from "axios";

export const createPost = (newPost: any) =>
  axios.post("http://localhost:3000/posts", newPost);

export const getPosts = () => axios.get("http://localhost:3000/posts");
