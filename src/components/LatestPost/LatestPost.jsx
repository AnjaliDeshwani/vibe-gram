import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getPostDate,
  getUserFullNameFromUsername,
  isLikedByCurrentUser,
} from "../../utils";
import { PostOptionsModal } from "../Post/PostOptionsModal";
import { useOnClickOutsideModal } from "../../hooks/useOnClickOutsideModal";
import { EditPostModal, CommentModal } from "../Post";
import { likePost, dislikePost } from "../../reducers/postSlice";

export const LatestPost = ({ post }) => {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  const [showOptionsModal, setShowOptionsModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showCommentModal, setShowCommentModal] = useState(false);
  const postRef = useRef();
  const toggleRef = useRef();
  const dispatch = useDispatch();
  const { user, token } = useSelector((state) => state.auth);

  const toggleModalHandler = () => setShowOptionsModal((prev) => !prev);

  useOnClickOutsideModal(postRef, () => setShowOptionsModal(false), toggleRef);

  const isLiked = isLikedByCurrentUser(post, user);

  const likeHandler = () => {
    isLiked
      ? dispatch(dislikePost({ postId: post._id, token }))
      : dispatch(likePost({ postId: post._id, token }));
  };

  const commentHandler = () => {
    setShowCommentModal(true);
  };

  useEffect(() => {
    getUserFullNameFromUsername(post.username).then((user) =>
      setName({ firstName: user.firstName, lastName: user.lastName })
    );
  }, [post.username]);

  return (
    <div className="relative p-4 border-b-2 border-b-gray-200 grid grid-cols-[4rem,1fr,1rem]">
      <div className="bg-red-300 w-12 h-12 rounded-full self-baseline"></div>
      <div className="flex flex-col gap-1 ">
        <div className="flex gap-1">
          <span className="font-bold tracking-wide">{name.firstName}</span>
          <span className="font-bold tracking-wide">{name.lastName}</span>
          <span className="text-gray-500">@{post.username}</span>
          <span className="text-gray-500">.</span>
          <span className="text-gray-500">{getPostDate(post.createdAt)}</span>
        </div>
        <p>{post.content}</p>
        <div className="flex justify-between text-gray-500 w-9/12">
          <span
            className="cursor-pointer flex items-center"
            onClick={likeHandler}
          >
            <i
              className={`fa-heart text-lg w-8 h-8 hover:bg-gray-400 hover:rounded-full hover:bg-opacity-40 flex items-center justify-center ${
                isLiked ? "fa-solid text-sky-400" : "fa-regular"
              }`}
            ></i>
            <span>{post.likes.likeCount}</span>
          </span>
          <span
            className="cursor-pointer flex items-center"
            onClick={commentHandler}
          >
            <i className="fa-regular fa-comment text-lg  w-8 h-8  hover:bg-gray-400 hover:rounded-full hover:bg-opacity-40 flex items-center justify-center"></i>
            <span>{post.comments.length}</span>
          </span>
          <span className="cursor-pointer">
            <i className="fa-regular fa-bookmark text-lg  w-8 h-8  hover:bg-gray-400  hover:rounded-full hover:bg-opacity-40 flex items-center justify-center"></i>
          </span>
        </div>
      </div>
      <span
        className="cursor-pointer self-start text-center w-6 h-6 hover:bg-gray-400 hover:bg-opacity-30 hover:rounded-full"
        onClick={toggleModalHandler}
        ref={toggleRef}
      >
        <i className="fa-solid fa-ellipsis"></i>
      </span>
      <div ref={postRef}>
        {showOptionsModal && (
          <PostOptionsModal
            post={post}
            setShowOptionsModal={setShowOptionsModal}
            setShowEditModal={setShowEditModal}
          />
        )}
      </div>
      {showEditModal && (
        <EditPostModal post={post} setShowEditModal={setShowEditModal} />
      )}
      {showCommentModal && (
        <CommentModal post={post} setShowCommentModal={setShowCommentModal} />
      )}
    </div>
  );
};
