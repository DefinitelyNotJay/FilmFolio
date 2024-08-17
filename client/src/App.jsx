import React from 'react';
import Register from '../src/pages/register'
import Login from '../src/pages/login'

export default function App() {
  return (
    <div className="h-[2000px] w-screen bg-[#242423] flex">
      <div className="w-full">
        <div>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="register/" element={<Register />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
