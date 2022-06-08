import { useState, useRef } from "react";
import { getPostDate } from "../../../utils";
import { CommentOptionsModal } from "./index";
import { useOnClickOutsideModal } from "../../../hooks/useOnClickOutsideModal";
export const CommentCard = ({ singlePost, comment }) => {
  const [showCommentOptionsModal, setShowCommentOptionsModal] = useState(false);

  const commentToggleRef = useRef();
  const commentRef = useRef();
  const commentToggleHandler = () =>
    setShowCommentOptionsModal((prev) => !prev);
  useOnClickOutsideModal(
    commentRef,
    () => setShowCommentOptionsModal(false),
    commentToggleRef
  );
  return (
    <div className=" p-4 border-b-2 border-b-gray-200p-4 grid grid-cols-[4rem,1fr,1rem]">
      <div className="bg-red-300 w-12 h-12 rounded-full self-baseline"></div>
      <div className="flex flex-col gap-1">
        <div className="flex flex-col gap-1 cursor-pointer">
          <div className="flex gap-1">
            <span className="font-semibold">@{comment.username}</span>
            <span className="text-gray-500">.</span>
            <span className="text-gray-500">
              {getPostDate(comment.createdAt)}
            </span>
          </div>
          <p>{comment.text}</p>
        </div>
      </div>
      <div
        className="relative cursor-pointer self-start text-center w-6 h-6 hover:bg-gray-400 hover:bg-opacity-30 hover:rounded-full"
        ref={commentToggleRef}
        onClick={commentToggleHandler}
      >
        <i className="fa-solid fa-ellipsis"></i>
        <div ref={commentRef}>
          {showCommentOptionsModal && (
            <CommentOptionsModal
              post={singlePost}
              comment={comment}
              setShowCommentOptionsModal={setShowCommentOptionsModal}
            />
          )}
        </div>
      </div>
    </div>
  );
};
