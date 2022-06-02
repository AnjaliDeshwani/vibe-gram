import { SuggestedFollowers, SearchBar } from "../index";
export const RightSidebar = () => {
  return (
    <div className="hidden lg:block col-span-3">
      <SearchBar />
      <aside className="bg-slate-200 bg-opacity-60 mt-12 my-3 rounded-md py-4 px-3">
        <h2 className="font-bold">Who to follow</h2>
        <div className="flex flex-col gap-10 mt-4">
          {[...Array(3)].map(() => (
            <SuggestedFollowers />
          ))}
        </div>
      </aside>
    </div>
  );
};
