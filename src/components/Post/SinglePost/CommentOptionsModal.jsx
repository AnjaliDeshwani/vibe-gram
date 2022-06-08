import { useSelector, useDispatch } from "react-redux";
import { deleteComment } from "../../../reducers/postSlice";

export const CommentOptionsModal = ({ post, comment }) => {
  const { user, token } = useSelector((state) => state.auth);
  const { _id } = post;

  const dispatch = useDispatch();

  const deletePostHandler = () => {
    dispatch(deleteComment({ postId: _id, commentId: comment._id, token }));
  };

  const editPostHandler = () => {};

  return (
    <div className="absolute z-10 right-8 top-2 ring-1 ring-gray-300 bg-neutral-50 shadow-2xl w-36">
      <div className="flex flex-col gap-2">
        {user.username === comment.username ? (
          <div className="flex flex-col gap-2">
            <span
              className="flex gap-3 p-2 items-center cursor-pointer hover:bg-neutral-300 hover:bg-opacity-30"
              onClick={editPostHandler}
            >
              <i className="fa-solid fa-pen-to-square"></i>
              <span>Edit</span>
            </span>
            <span
              className="flex gap-3 p-2 items-center cursor-pointer hover:bg-neutral-300 hover:bg-opacity-30"
              onClick={deletePostHandler}
            >
              <i className="fa-solid fa-trash"></i>
              <span>Delete</span>
            </span>
          </div>
        ) : (
          <span className="flex gap-3 p-2 items-center cursor-pointer hover:bg-neutral-300 hover:bg-opacity-30">
            <i className="fa-solid fa-user-xmark"></i>
            <span>Unfollow</span>
          </span>
        )}
      </div>
    </div>
  );
};
