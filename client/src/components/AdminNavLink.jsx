import React from "react";
import { NavLink } from "react-router-dom";
export default function AdminNavLink({ link, title, Icon }) {
  return (
    <div>
      <NavLink to={link} className="text-white gap-2 flex">
        <Icon />
        <p className="text-white">{title}</p>
      </NavLink>
    </div>
  );
}
