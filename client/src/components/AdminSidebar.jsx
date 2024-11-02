import { NavLink, useLocation } from "react-router-dom";
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
    <div className="h-screen w-[20%] sticky top-0 border-r border-r-[#343A40] flex flex-col justify-between py-8 px-12">
      <div className="text-[36px] text-center text-white font-semibold cursor-pointer">
        Film<span className="text-[#F5CB5C] ">Folio</span>
      </div>
      <nav className="flex flex-col gap-3">
        <AdminNavLink link="/" Icon={House} title="Dashboard" />
        <AdminNavLink link="/movies" Icon={Clapperboard} title="Movies" />
        <AdminNavLink link="/users" Icon={User} title="Users" />
        <AdminNavLink link="/comments" Icon={MessageCircle} title="Comments" />
        <AdminNavLink link="/profile" Icon={UserPen} title="Profile" />
      </nav>
      <div></div>
      <button className="text-white flex gap-2 px-3 py-4 rounded-md">
        <LogOut />
        Logout
      </button>
    </div>
  );
}

export function AdminNavLink({ link, title, Icon }) {
  const location = useLocation();
  const page = location.pathname.split()[0];
  const active = page === link;
  return (
    <div>
      <NavLink
        to={link}
        className={`text-white gap-2 flex hover:bg-[#50504f] px-3 py-4 rounded-md ${
          active && "bg-[#F5CB5C]"
        }`}
      >
        <Icon className={`${active && "text-[#333]"}`} />
        <p className={`hidden lg:block ${active && "text-[#333]"} `}>{title}</p>
      </NavLink>
    </div>
  );
}
