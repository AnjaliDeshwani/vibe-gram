import axios from "axios";

export const getUserByUsername = async (username) => {
  return await axios.get(`/api/users/${username}`);
};

export const getBookmarkPostHandlerService = async (token) => {
  return await axios.get("/api/users/bookmark", {
    headers: { authorization: token },
  });
};

export const addBookmarkPostService = async ({ postId, token }) => {
  return await axios.post(
    `/api/users/bookmark/${postId}`,
    {},
    { headers: { authorization: token } }
  );
};

export const removePostFromBookmarkService = async ({ postId, token }) => {
  return await axios.post(
    `/api/users/remove-bookmark/${postId}`,
    {},
    { headers: { authorization: token } }
  );
};
