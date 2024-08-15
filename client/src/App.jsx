import React from "react";
import AdminSidebar from "./components/AdminSidebar";
import AdminTopbar from "./components/AdminTopbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/admin/Home";
import Users from "./pages/admin/Users";
import Movie from "./pages/admin/Movie";
import Profile from "./pages/admin/Profile";
import Comments from "./pages/admin/Comments";

export default function App() {
  return (
    <div className="h-full w-screen bg-[#242423] flex">
      <AdminSidebar />
      <div className="w-full">
        <AdminTopbar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/users" element={<Users />} />
            <Route path="/movies" element={<Movie />} />
            <Route path="/comments" element={<Comments />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
