import { useSelector } from "react-redux";
import { getSortedPosts } from "../utils/getSortedPosts";

export const useFilteredPosts = (sortValue) => {
  const { allPosts } = useSelector((state) => state.posts);
  const sortedPost = getSortedPosts(allPosts, sortValue);
  return sortedPost;
};
