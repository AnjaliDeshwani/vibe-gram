import axios from "axios";

export const getUserByUsername = async (username) => {
  return await axios.get(`/api/users/${username}`);
};
