import { useSelector, useDispatch } from "react-redux";
import {
  LeftSidebar,
  RightSidebar,
  SearchBar,
  LatestPost,
} from "../../components";

export const Bookmarks = () => {
  const { bookmarks } = useSelector((state) => state.users);
  return (
    <div className="min-h-screen grid sm:grid-cols-6 lg:grid-cols-10  w-full sm:w-[80%] sm:gap-12 lg:gap-4 mx-auto">
      <LeftSidebar />
      <div className="main-section sm:col-span-5 lg:col-span-5 w-full border-x-2 border-x-gray-200">
        <div className="flex justify-between items-center border-b-2 border-b-gray-200">
          <h2 className="font-bold text-xl p-4">Bookmarks</h2>
          <div className="lg:hidden">
            <SearchBar />
          </div>
        </div>
        {bookmarks.map((post) => (
          <LatestPost post={post} key={post._id} />
        ))}
      </div>
      <RightSidebar />
    </div>
  );
};
