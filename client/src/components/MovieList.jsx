import { Eye, Star, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import StarRating from "./StarRating";
export default function MovieList({title="unknown", imgSrc, id, rating, year}) {
  const navigate = useNavigate();
  return (
    <div
      className="w-48 h-full bg-[#333] cursor-pointer rounded-xl flex flex-col shadow-md transition-all duration-75"
      onClick={() => {
        navigate(`/movie/${id}`);
      }}
    >
      
      <img
        src={imgSrc}
        className="w-full h-full object-cover rounded-t-xl"
        alt=""
      />
      <div className="px-2 py-2 bg-[#242423b9] rounded-b-xl">
        <p className="text-lg font-semibold text-[#E8EDDF] text-center">
          {title.length > 12 ? title.slice(0, 13) + "..." : title}
          
        </p>
        <p className="text-sm text-gray-400 text-center">{year}</p>
        <div className="flex mt-1 justify-evenly text-[#E8EDDF] text-sm">
          <div className="flex items-center gap-1">
            <StarRating rating={rating}/>
             ({rating})
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
