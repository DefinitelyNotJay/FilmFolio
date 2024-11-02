import React from "react";
import { GoHome } from "react-icons/go";
import { FcLike } from "react-icons/fc";
import { LuUser2 } from "react-icons/lu";
import { IoMdLogOut } from "react-icons/io";

function UserFooterBar() {
  return (
    <div className="fixed bottom-0 w-[390px] h-[75px] bg-[#1A1A1A] flex justify-around items-center py-2 shadow-md rounded-t-3xl">
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center w-10 h-10 bg-purple-600 rounded-full text-white">
          <GoHome className="text-2xl" />
        </div>
        <span className="text-xs text-white mt-1">Home</span>
      </div>

      <div className="flex flex-col items-center text-gray-500 hover:text-white">
        <FcLike className="text-2xl" />
      </div>

      <div className="flex flex-col items-center text-gray-500 hover:text-white">
        <LuUser2 className="text-2xl" />
      </div>

      <div className="flex flex-col items-center text-gray-500 hover:text-white">
        <IoMdLogOut className="text-2xl" />
      </div>

    </div>
  );
}

export default UserFooterBar;
