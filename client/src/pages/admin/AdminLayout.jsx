import AdminSidebar from "@/components/AdminSidebar";
import AdminTopbar from "@/components/AdminTopbar";
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="w-screen h-full bg-[#242423] flex font-Inter">
      <AdminSidebar />
      <div className="w-full bg-[#242423">
        <AdminTopbar />
        <Outlet /> {/* Renders the matched child route */}
      </div>
    </div>
  );
}
