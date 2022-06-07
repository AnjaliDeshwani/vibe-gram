import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { LeftSidebar, RightSidebar, Loader } from "../../components";
import { getSinglePost } from "../../reducers/postSlice";
import {
  getPostDate,
  isLikedByCurrentUser,
  isBokmarkedByCurrentUser,
  getUserFullNameFromUsername,
} from "../../utils";
import { PostOptionsModal } from "../Post/PostOptionsModal";
import { useOnClickOutsideModal } from "../../hooks/useOnClickOutsideModal";
import { EditPostModal, CommentModal } from "../Post";
import { likePost, dislikePost } from "../../reducers/postSlice";
import {
  addBookmarkPosts,
  removePostFromBookmark,
} from "../../reducers/userSlice";

export const SinglePost = () => {
  const dispatch = useDispatch();
  const { postId } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState({ firstName: "", lastName: "" });
  const [showOptionsModal, setShowOptionsModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showCommentModal, setShowCommentModal] = useState(false);
  const postRef = useRef();
  const toggleRef = useRef();
  const { postsStatus, singlePost } = useSelector((state) => state.posts);
  const { user, token } = useSelector((state) => state.auth);
  const { bookmarks } = useSelector((state) => state.users);

  const toggleModalHandler = () => setShowOptionsModal((prev) => !prev);

  useOnClickOutsideModal(postRef, () => setShowOptionsModal(false), toggleRef);

  const isLiked = isLikedByCurrentUser(singlePost, user);

  const likeHandler = () => {
    isLiked
      ? dispatch(dislikePost({ postId: singlePost._id, token }))
      : dispatch(likePost({ postId: singlePost._id, token }));
  };

  const commentHandler = () => {
    setShowCommentModal(true);
  };

  const isBookmarked = isBokmarkedByCurrentUser(singlePost, bookmarks);

  const bookmarkHandler = () => {
    isBookmarked
      ? dispatch(removePostFromBookmark({ postId: singlePost._id, token }))
      : dispatch(addBookmarkPosts({ postId: singlePost._id, token }));
  };

  useEffect(() => {
    getUserFullNameFromUsername(singlePost.username).then((user) =>
      setName({ firstName: user.firstName, lastName: user.lastName })
    );
  }, [singlePost.username]);

  useEffect(() => {
    dispatch(getSinglePost(postId));
  }, [dispatch, postId]);

  return (
    <>
      {postsStatus === "loading" ? (
        <Loader />
      ) : (
        <div className="min-h-screen grid sm:grid-cols-6 lg:grid-cols-10  w-full sm:w-[80%] sm:gap-12 lg:gap-4 mx-auto">
          <LeftSidebar />
          <div className="main-section sm:col-span-5 lg:col-span-5 w-full border-x-2 border-x-gray-200">
            <div className="flex justify-between items-center border-b-2 border-b-gray-200">
              <h2 className="font-bold text-xl p-4">
                <i
                  className="fa-solid fa-arrow-left mr-4 cursor-pointer"
                  onClick={() => navigate(-1)}
                ></i>
                Posts
              </h2>
            </div>
            <div className="relative p-4 border-b-2 border-b-gray-200 grid grid-cols-[4rem,1fr,1rem]">
              <div className="bg-red-300 w-12 h-12 rounded-full self-baseline"></div>
              <div className="flex flex-col gap-1">
                <div className="flex flex-col gap-1 cursor-pointer">
                  <div className="flex gap-1">
                    <span className="font-bold tracking-wide">
                      {name.firstName}
                    </span>
                    <span className="font-bold tracking-wide">
                      {name.lastName}
                    </span>
                    <span className="text-gray-500">
                      @{singlePost.username}
                    </span>
                    <span className="text-gray-500">.</span>
                    <span className="text-gray-500">
                      {getPostDate(singlePost.createdAt)}
                    </span>
                  </div>
                  <p>{singlePost.content}</p>
                </div>
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
                    <span>{singlePost.likes.likeCount}</span>
                  </span>
                  <span
                    className="cursor-pointer flex items-center"
                    onClick={commentHandler}
                  >
                    <i className="fa-regular fa-comment text-lg  w-8 h-8  hover:bg-gray-400 hover:rounded-full hover:bg-opacity-40 flex items-center justify-center"></i>
                    <span>{singlePost.comments.length}</span>
                  </span>
                  <span className="cursor-pointer" onClick={bookmarkHandler}>
                    <i
                      className={`fa-bookmark text-lg w-8 h-8 hover:bg-gray-400 hover:rounded-full hover:bg-opacity-40 flex items-center justify-center ${
                        isBookmarked ? "fa-solid text-sky-400" : "fa-regular "
                      }`}
                    ></i>
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
                    post={singlePost}
                    setShowOptionsModal={setShowOptionsModal}
                    setShowEditModal={setShowEditModal}
                  />
                )}
              </div>
              {showEditModal && (
                <EditPostModal
                  post={singlePost}
                  setShowEditModal={setShowEditModal}
                />
              )}
              {showCommentModal && (
                <CommentModal
                  post={singlePost}
                  setShowCommentModal={setShowCommentModal}
                />
              )}
            </div>
          </div>
          <RightSidebar />
        </div>
      )}
    </>
  );
};
