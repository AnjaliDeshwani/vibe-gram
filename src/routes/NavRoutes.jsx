import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";
import { Home, Explore, Bookmarks, Profile } from "../pages";

export const NavRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/mock" element={<Mockman />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/explore" element={<Explore />}></Route>
        <Route path="/bookmarks" element={<Bookmarks />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
    </div>
  );
};
