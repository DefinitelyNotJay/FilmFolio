import React from "react";
import { GoHome } from "react-icons/go";
import { FcLike } from "react-icons/fc";
import { LuUser2 } from "react-icons/lu";
import { IoMdLogOut } from "react-icons/io";
import { MdOutlineHistory } from "react-icons/md";
import { useContext } from "react";
import { AuthContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";


function UserFooterBar() {
  const { dispatch } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
      localStorage.removeItem("token");
      dispatch({ type: "LOGOUT" });
      navigate("/");
    };

  return (
    <div className="fixed bottom-0 w-[390px] h-[75px] bg-[#1A1A1A] flex justify-around items-center py-2 shadow-md rounded-t-3xl">
      <a href="/home">
        <div className="cursor-pointer flex flex-col items-center">
          <div className="flex items-center justify-center w-10 h-10 rounded-full hover:scale-110 text-white">
            <GoHome className="text-2xl" />
          </div>
        </div>
        </a>

      <a href="/historyrating">
        <div className="cursor-pointer flex flex-col items-center hover:scale-110 text-white">
          <MdOutlineHistory className="text-2xl" />
        </div>
      </a>

      <a href="/userprofile">
        <div className="cursor-pointer flex flex-col items-center hover:scale-110 text-white">
          <LuUser2 className="text-2xl" />
        </div>
      </a>

      <div onClick={handleLogout} className="cursor-pointer flex flex-col items-center hover:scale-110 text-white">
        <IoMdLogOut className="text-2xl" />
      </div>

    </div>
  );
}

export default UserFooterBar;

