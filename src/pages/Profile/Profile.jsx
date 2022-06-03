import { useDispatch } from "react-redux";
import { logoutHandler } from "../../reducers/authSlice";
import {
  LeftSidebar,
  RightSidebar,
  LatestPost,
  SearchBar,
} from "../../components";
export const Profile = () => {
  const dispatch = useDispatch();
  const logoutClickHandler = () => {
    dispatch(logoutHandler());
  };
  return (
    <div className="min-h-screen grid sm:grid-cols-6 lg:grid-cols-10  w-full sm:w-[80%] sm:gap-12 lg:gap-4 mx-auto">
      <LeftSidebar />
      <div className="main-section sm:col-span-5 lg:col-span-5 w-full border-x-2 border-x-gray-200">
        <div className="flex justify-between items-center border-b-2 border-b-gray-200">
          <h2 className="font-bold text-xl  p-4">My Profile</h2>
          <div className="lg:hidden">
            <SearchBar />
          </div>
        </div>
        <div className="p-4 grid grid-cols-[7rem_1fr] gap-8">
          <div className="bg-blue-300 w-32 h-32 rounded-full self-baseline"></div>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between">
              <div className="flex flex-col">
                <span className="font-bold tracking-wide">Charlie Putin</span>
                <span className="text-gray-500 text-sm">@charlieputin</span>
              </div>
              <div className="flex gap-4">
                <button className="self-baseline font-semibold border-2 border-slate-400 py-1 px-4 rounded-full text-sm hover:bg-slate-200 hover:border-slate-400">
                  Edit Profile
                </button>
                <span className="cursor-pointer" onClick={logoutClickHandler}>
                  <i className="fa-solid fa-arrow-right-from-bracket"></i>
                </span>
              </div>
            </div>
            <p className="font-semibold">Hey there, bio in progress</p>
            <div className="flex gap-3">
              <span>
                <span className="font-semibold mr-1">8</span>Posts
              </span>
              <span>
                <span className="font-semibold mr-1">5</span>Followers
              </span>
              <span>
                <span className="font-semibold mr-1">10</span>Following
              </span>
            </div>
          </div>
        </div>
        <div className="border-b-2 border-b-gray-200 my-2"></div>
        {[...Array(8)].map(() => (
          <LatestPost />
        ))}
      </div>
      <RightSidebar />
    </div>
  );
};
