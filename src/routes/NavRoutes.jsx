import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";
import { Home, Explore, Bookmarks, Profile, Login, Signup } from "../pages";
import { PrivateRoute } from "./PrivateRoute";

export const NavRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/mock" element={<Mockman />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/" element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
};
