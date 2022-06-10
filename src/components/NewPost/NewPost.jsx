import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../../reducers/postSlice";
import { UserAvatar } from "../index";

export const NewPost = () => {
  const [postData, setPostData] = useState({
    content: "",
  });
  const { content } = postData;
  const dispatch = useDispatch();
  const { user, token } = useSelector((state) => state.auth);
  const postHandler = (e) => {
    setPostData({ ...postData, content: e.target.value });
  };
  const postSubmitHandler = () => {
    dispatch(createPost({ postData, token }));
    setPostData({ content: "" });
  };
  return (
    <div className="flex gap-2 mt-4 justify-center p-4">
      <UserAvatar user={user} />
      <div className="flex-grow flex flex-col gap-4">
        <input
          className="text-xl outline-none mt-1.5 bg-transparent break-all w-full"
          placeholder="What's happening?"
          value={content}
          onChange={postHandler}
        />
        <div className="ml-auto flex items-center gap-4">
          <button>
            <i className="fa-solid fa-image text-lg"></i>
          </button>
          <button
            className={`px-4 py-1 text-center font-semibold  rounded-full bg-gradient-to-r from-sky-400 to-cyan-300 ${
              content.trim() ? "opacity-100" : "opacity-60 pointer-events-none"
            }`}
            onClick={postSubmitHandler}
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
};
