import { useNavigate, useLocation } from "react-router-dom";
import { CircleUserRound } from "lucide-react";
export default function AdminTopbar() {
  const navigate = useNavigate();
  return (
    <div className="w-full h-24 sticky top-0 border-b border-b-[#343A40] bg-[#242423] flex items-center justify-between px-6 py-6">
      <div className="flex gap-2">
        <button
          className="text-white text-2xl bg-[#343434] rounded-md font-light px-3 py-1"
          onClick={() => {
            navigate(-1);
          }}
        >
          {"<"}
        </button>
        <button
          className="text-white text-2xl bg-[#343434] rounded-md font-light px-3 py-1"
          onClick={() => {
            navigate(1);
          }}
        >
          {">"}
        </button>
      </div>
      <CircleUserRound className="text-white size-6"/>
    </div>
  );
}
