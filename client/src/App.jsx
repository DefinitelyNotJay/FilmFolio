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
import HistoryRating from "./pages/user/HistoryRating";
import Register from "./pages/register/register";
import Login from "./pages/login/login";
import Admin from "./pages/admin/admin";
import UserProfile from "./pages/user/UserProfile";
import MovieDetail from "./pages/user/MovieDetail";

export const url = "http://3.81.23.137:3000/api";

export default function App() {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<Admin />} />
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
        <Route path="/home" element={<HomeUser />}/>
        <Route path="/movie/detail/:id" element={<MovieDetail />}/>
        <Route path="/home" element={<HomeUser />} />
        <Route path="/userprofile" element={<UserProfile />} />
        <Route path="/historyrating" element={<HistoryRating/>} />
        {/* Add other user routes here */}
      </Route>
    </Routes>
  );
}
