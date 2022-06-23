import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchedUsersHandler } from "../../reducers/userSlice";
import { SearchedUsersModal } from "../SearchedUsersModal/SearchedUsersModal";

export const SearchBar = () => {
  const { searchedUsers } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const [searchText, setSearchText] = useState("");

  const textChangeHandler = (e) => {
    setSearchText(e.target.value);
    dispatch(searchedUsersHandler({ searchedText: e.target.value }));
  };

  const clearSearchedText = () => {
    setSearchText("");
  };

  return (
    <div className="mt-2 lg:mt-5 relative">
      <div className="flex items-center md:gap-4 md:w-full bg-slate-200 py-2 px-4 lg:py-3 rounded-full focus-within:ring-1 focus-within:ring-sky-400 focus-within:bg-neutral-50">
        <span className="text-slate-500">
          <i className="fa-solid fa-magnifying-glass "></i>
        </span>
        <input
          type="text"
          placeholder="Search Users"
          className="flex-grow bg-transparent mx-2 outline-none"
          value={searchText}
          onChange={textChangeHandler}
        />

        {searchText && (
          <span
            className="bg-sky-400 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer hover:bg-sky-600"
            onClick={clearSearchedText}
          >
            <i className="fa-solid fa-xmark"></i>
          </span>
        )}
      </div>

      {searchText && (
        <div className="bg-neutral-50 w-full mt-[0.5px] border-2 rounded-md p-2 flex flex-col gap-4 shadow-lg absolute z-10">
          {searchedUsers.length > 0 ? (
            searchedUsers.map((user) => (
              <SearchedUsersModal user={user} key={user._id} />
            ))
          ) : (
            <span className="font-semibold">No user found</span>
          )}
        </div>
      )}
    </div>
  );
};
