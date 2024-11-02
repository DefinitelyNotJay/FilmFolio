import React from "react";
import Register from "../src/pages/register/register";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./pages/home/home";
import Login from "../src/pages/login/login";
import Admin from "./pages/admin/admin";
export const api = "http://localhost:3000";
export default function App() {
  return (
    <>
      <Toaster position="bottom-right" toastOptions={{ duration: 2000 }} />
      <div className="h-[2000px] w-screen bg-[#fafafa] flex font-kanit">
        <div className="w-full">
          <div>
            <Routes>
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/admin" element={<Admin />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}
