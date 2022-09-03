import axios from "axios";

export const createPostRequest = (newPost: any) =>
  axios.post("http://localhost:3000/posts", newPost);

export const getPostsRequest = () => axios.get("http://localhost:3000/posts");
