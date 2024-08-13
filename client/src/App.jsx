import React from "react";
import AdminSidebar from "./components/AdminSidebar";
import AdminTopbar from "./components/AdminTopbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/admin/Home";
import Users from "./pages/admin/Users";

export default function App() {
  return (
    <div className="h-[2000px] w-screen bg-[#242423] flex">
      <AdminSidebar />
      <div className="w-full">
        <AdminTopbar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Users />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
