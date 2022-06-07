export const isBokmarkedByCurrentUser = (post, bookmarks) =>
  bookmarks.find((currPost) => currPost._id === post._id);
