import axios from "axios";

export const getPostsService = async () => {
  return await axios.get("/api/posts");
};
