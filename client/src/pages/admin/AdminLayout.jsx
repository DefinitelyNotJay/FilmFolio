import AdminSidebar from "@/components/AdminSidebar";
import AdminTopbar from "@/components/AdminTopbar";
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="w-screen bg-[#242423] flex font-Inter">
      <AdminSidebar />
      <div className="w-full">
        <AdminTopbar />
        <Outlet /> {/* Renders the matched child route */}
      </div>
    </div>
  );
}
