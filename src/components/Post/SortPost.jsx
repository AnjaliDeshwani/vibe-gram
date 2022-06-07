export const SortPost = ({ setSortValue }) => {
  const changeValueHandler = (e) => {
    setSortValue(e.target.value);
  };

  const onClickHandler = () => {
    setSortValue("Trending");
  };

  return (
    <div className="flex justify-around">
      <button
        className="font-bold text-xl flex gap-2 items-center"
        onClick={onClickHandler}
      >
        <i className="fa-solid fa-chart-line"></i>
        <span>Trending</span>
      </button>
      <select
        className=" bg-gradient-to-r from-sky-400 to-cyan-300 outline-none w-32 py-1 px-4 font-bold rounded-md cursor-pointer"
        onChange={changeValueHandler}
      >
        <option className="bg-white hover:bg-sky-300">Latest</option>
        <option className="bg-white">Oldest</option>
      </select>
    </div>
  );
};
