import React from 'react';
import Register from '../src/pages/register';
import Login from '../src/pages/login';
import { Route, Routes } from "react-router-dom";
import { Toaster } from 'react-hot-toast';

export default function App() {
  return (
    <>
      <Toaster position='bottom-right' toastOptions={{ duration: 2000 }} />
      <div className="h-[2000px] w-screen bg-[#fafafa] flex">
        <div className="w-full">
          <div>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}
