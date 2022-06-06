import axios from "axios";

export const getPostsService = async () => {
  return await axios.get("/api/posts");
};

export const createPostService = async ({ postData, token }) => {
  return await axios.post(
    "/api/posts/",
    { postData },
    { headers: { authorization: token } }
  );
};

export const deletePostService = async ({ postId, token }) => {
  return await axios.delete(`/api/posts/${postId}`, {
    headers: { authorization: token },
  });
};
