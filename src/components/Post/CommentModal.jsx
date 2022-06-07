import { useState } from "react";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { addComment } from "../../reducers/postSlice";

export const CommentModal = ({ post, setShowCommentModal }) => {
  const [commentData, setCommentData] = useState({ text: "" });
  const closeCommentModal = () => setShowCommentModal(false);
  const dispatch = useDispatch();

  const { token } = useSelector((state) => state.auth);

  const commentChangeHandler = (e) => {
    setCommentData({ ...commentData, text: e.target.value });
  };
  const addPostCommentHandler = () => {
    dispatch(addComment({ postId: post._id, commentData, token }));
    closeCommentModal();
  };

  return ReactDOM.createPortal(
    <div>
      <div
        className="fixed inset-0 z-50 bg-gray-900 bg-opacity-10"
        onClick={closeCommentModal}
      ></div>
      <div className="fixed z-50 top-1/4 left-1/4 md:left-[15%] w-[50%] bg-white ring-1 ring-gray-300 shadow-inner py-4 rounded-sm">
        <div className="grid grid-cols-[3rem,1fr] gap-4 mt-4 justify-center p-4">
          <div className="bg-red-300 w-12 h-12 rounded-full self-baseline"></div>
          <div className="flex-grow flex flex-col gap-4">
            <input
              className="text-xl outline-none mt-1.5 bg-transparent break-all w-full break-words "
              placeholder="Post your comment"
              value={commentData.text}
              onChange={commentChangeHandler}
            />
            <div className="ml-auto flex justify-between items-center gap-4">
              <button
                className="px-4 py-1 text-center font-semibold  rounded-full border-2 border-sky-400"
                onClick={closeCommentModal}
              >
                Cancel
              </button>
              <button
                className="px-4 py-1 text-center font-semibold  rounded-full bg-gradient-to-r from-sky-400 to-cyan-300"
                onClick={addPostCommentHandler}
              >
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
};