import { Outlet } from "react-router-dom";

export default function UserLayout() {
  return (
    <div className="w-[390px] bg-white font-Inter">
      <Outlet /> {/* Renders the matched child route */}
    </div>
  );
}
