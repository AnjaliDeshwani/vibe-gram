export const isLikedByCurrentUser = (post, user) => {
  return post.likes.likedBy.find(
    (currUser) => currUser.username === user.username
  );
};
