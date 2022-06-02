export const LatestPost = () => {
  return (
    <div className="p-4 border-b-2 border-b-gray-200 grid grid-cols-[4rem,1fr]">
      <div className="bg-red-300 w-12 h-12 rounded-full self-baseline"></div>
      <div className="flex flex-col gap-1 ">
        <div className="flex gap-1">
          <span className="font-bold tracking-wide">charlie</span>
          <span className="text-gray-500">@charlieputin</span>
          <span className="text-gray-500">.</span>
          <span className="text-gray-500">5h ago</span>
        </div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
          nobis in consequatur a omnis temporibus sequi ab, quisquam repellat
          nihil provident accusamus modi nemo, iusto, tempora necessitatibus
          quaerat sint? Modi?
        </p>
        <div className="flex justify-between text-gray-500 w-9/12">
          <span className="cursor-pointer">
            <i className="fa-regular fa-heart text-lg w-8 h-8 hover:bg-sky-400 hover:text-black hover:rounded-full hover:bg-opacity-40 flex items-center justify-center"></i>
          </span>
          <span className="cursor-pointer">
            <i className="fa-regular fa-comment text-lg  w-8 h-8 hover:bg-sky-400 hover:text-black hover:rounded-full hover:bg-opacity-40 flex items-center justify-center"></i>
          </span>
          <span className="cursor-pointer">
            <i className="fa-regular fa-bookmark text-lg  w-8 h-8 hover:bg-sky-400 hover:text-black  hover:rounded-full hover:bg-opacity-40 flex items-center justify-center"></i>
          </span>
        </div>
      </div>
    </div>
  );
};
