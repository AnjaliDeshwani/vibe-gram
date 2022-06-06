import { useSelector, useDispatch } from "react-redux";
import { deletePost } from "../../reducers/postSlice";

export const PostModal = ({ post }) => {
  const { user, token } = useSelector((state) => state.auth);
  const { username, _id } = post;

  const dispatch = useDispatch();

  const deletePostHandler = () => {
    dispatch(deletePost({ postId: _id, token }));
  };

  return (
    <div className="absolute z-10 right-8 top-12 ring-1 ring-gray-300 bg-neutral-50 shadow-2xl w-36">
      {user.username === username ? (
        <div className="flex flex-col gap-2">
          <span className="flex gap-3 p-2 items-center cursor-pointer hover:bg-neutral-300 hover:bg-opacity-30">
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
        <div>
          <span className="flex gap-3 p-2 items-center cursor-pointer hover:bg-neutral-300 hover:bg-opacity-30">
            <i className="fa-solid fa-user-xmark"></i>
            <span>Unfollow</span>
          </span>
        </div>
      )}
    </div>
  );
};
