import { Eye, Star, Heart } from "lucide-react";
export default function MovieList() {
  return (
    <div className="w-48 h-full bg-[#333] rounded-xl flex flex-col shadow-md transition-all duration-75 ">
      <img
        src="/got.jpg"
        className="w-full h-full object-cover rounded-t-xl"
        alt=""
      />
      <div className="px-2 py-2 bg-[#242423b9] rounded-b-xl">
        <p className="text-lg font-semibold text-[#E8EDDF] text-center">
          Game of Thrones
        </p>
        <div className="flex mt-1 justify-evenly text-[#E8EDDF] text-sm">
          <div className="flex items-center">
            <Eye className="fill-[#1b6874] stroke-[#242423]"/>
            {1200}
          </div>
          <div className="flex items-center">
            <Star className="fill-[#55a572] stroke-[#242423]"/>
            {4}
          </div>
          <div className="flex items-center">
            <Heart className="fill-[#fd8b7c] stroke-[#242423]"/>
            {30}
          </div>
        </div>
      </div>
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