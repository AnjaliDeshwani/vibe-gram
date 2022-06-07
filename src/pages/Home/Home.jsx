import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  LeftSidebar,
  RightSidebar,
  NewPost,
  LatestPost,
  SearchBar,
  Loader,
  SortPost,
} from "../../components";
import { getPosts } from "../../reducers/postSlice";
import { useFilteredPosts } from "../../hooks/useFilteredPosts";

export const Home = () => {
  const dispatch = useDispatch();
  const { postsStatus } = useSelector((state) => state.posts);
  const [sortValue, setSortValue] = useState("Latest");
  const posts = useFilteredPosts(sortValue);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <>
      {postsStatus === "loading" ? (
        <Loader />
      ) : (
        <div className="min-h-screen grid sm:grid-cols-6 lg:grid-cols-10  w-full sm:w-[80%] sm:gap-12 lg:gap-4 mx-auto">
          <LeftSidebar />
          <div className="main-section sm:col-span-5 lg:col-span-5 w-full border-x-2 border-x-gray-200">
            <div className="flex justify-between items-center border-b-2 border-b-gray-200">
              <h2 className="font-bold text-xl p-4">Home</h2>
              <div className="lg:hidden">
                <SearchBar />
              </div>
            </div>
            <NewPost />
            <div className="border-b-2 border-b-gray-200 my-2"></div>
            <SortPost setSortValue={setSortValue} />
            <div className="border-b-2 border-b-gray-200 my-2"></div>
            {posts.map((post) => (
              <LatestPost post={post} key={post._id} />
            ))}
          </div>
          <RightSidebar />
        </div>
      )}
    </>
  );
};
