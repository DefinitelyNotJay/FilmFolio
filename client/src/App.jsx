import { Route, Routes } from "react-router-dom";
import Home from "./pages/admin/Home";
import Users from "./pages/admin/Users";
import Movie from "./pages/admin/Movie";
import Profile from "./pages/admin/Profile";
import Comments from "./pages/admin/Comments";
import EditMovie from "./pages/admin/EditMovie";
import AddMovie from "./pages/admin/AddMovie";
import HomeUser from "./pages/user/HomeUser";
import AdminLayout from "./pages/admin/AdminLayout";
import UserLayout from "./pages/user/UserLayout";
import Historyrating from "./pages/user/Historyrating";

export const url = "http://localhost:3000/api";

export default function App() {
  return (
    <Routes>
      {/* Admin Routes */}
      <Route element={<AdminLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/users" element={<Users />} />
        <Route path="/movies" element={<Movie />} />
        <Route path="/comments" element={<Comments />} />
        <Route path="/movie/:id" element={<EditMovie />} />
        <Route path="/movie/new" element={<AddMovie />} />
      </Route>

      {/* User Routes */}
      <Route element={<UserLayout />}>
        <Route path="/home" element={<HomeUser />} />
        <Route path="/historyrating" element={<Historyrating/>} />
        {/* Add other user routes here */}
      </Route>
    </Routes>
  );
}
