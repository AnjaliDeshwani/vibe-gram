export const SearchBar = () => {
  return (
    <div className="mt-2 lg:mt-5">
      <div className="flex items-center w-52 md:w-full bg-slate-200 px-1 py-2 lg:py-3 rounded-full focus-within:ring-1 focus-within:ring-sky-400">
        <i className="fa-solid fa-magnifying-glass text-slate-500 mx-4 peer-focus:text-sky-400"></i>
        <input
          type="text"
          placeholder="Search Users"
          className="bg-transparent mx-4 outline-none"
        />
      </div>
    </div>
  );
};
