export const SuggestedFollowers = () => {
  return (
    <div className="flex gap-1">
      <div className="bg-red-300 w-12 h-12 rounded-full"></div>
      <div className="flex flex-col flex-grow">
        <span className="font-bold tracking-wide">charlie</span>
        <span className="text-gray-500">@charlieputin</span>
      </div>
      <button className="self-center px-4 py-1 text-center font-semibold  rounded-full bg-gradient-to-r from-sky-400 to-cyan-300">
        Follow
      </button>
    </div>
  );
};
