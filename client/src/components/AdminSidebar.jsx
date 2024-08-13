import { NavLink } from "react-router-dom";
import {
  House,
  Clapperboard,
  User,
  MessageCircle,
  UserPen,
  LogOut,
} from "lucide-react";
export default function AdminSidebar() {
  return (
    <div className="h-full w-[20%] fixed border-r border-r-[#343A40] flex flex-col justify-between py-8 px-12">
      <div className="text-[36px] text-center text-white font-semibold cursor-pointer">
        Film<span className="text-[#F5CB5C] ">Folio</span>
      </div>
      <nav className="flex flex-col gap-3">
        <AdminNavLink link="/" Icon={House} title="Dashboard" />
        <AdminNavLink link="/movies" Icon={Clapperboard} title="Movies" />
        <AdminNavLink link="/users" Icon={User} title="Users" />
        <AdminNavLink link="/comments" Icon={MessageCircle} title="Comments" />
        <AdminNavLink link="/movies" Icon={UserPen} title="Profile" />
      </nav>
      <div></div>
      <button className="text-white flex gap-2 px-3 py-4 rounded-md">
        <LogOut />
        Logout
      </button>
    </div>
  );
}

// black: {
//     100: "#d3d3d3",
//     200: "#a7a7a7",
//     300: "#7c7c7b",
//     400: "#50504f",
//     500: "#242423",
//     600: "#1d1d1c",
//     700: "#161615",
//     800: "#0e0e0e",
//     900: "#070707"
// },

export function AdminNavLink({ link, title, Icon }) {
  return (
    <div>
      <NavLink
        to={link}
        className="text-white gap-2 flex hover:bg-[#50504f] px-3 py-4 rounded-md"
      >
        <Icon />
        <p className=" text-white">{title}</p>
      </NavLink>
    </div>
  );
}
