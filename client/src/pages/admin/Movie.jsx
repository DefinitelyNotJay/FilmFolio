import MovieList from "../../components/MovieList";
import { Plus } from "lucide-react";
import { useFetch } from "@/hooks/useFetch";
import { url } from "@/App";

export default function Movie() {
  const { data, loading, error } = useFetch(`${url}/movie`);
  console.log(data)
  return (
      <div className="px-4 py-4 grid xl:grid-cols-5 lg:grid-cols-2 mx-auto justify-items-center gap-y-8">
      <div className="w-48 h-full bg-[#333] cursor-pointer rounded-xl flex items-center justify-center hover:border hover:bg-[#383838] hover:border-[#E8EDDF]">
        <Plus className="text-[#E8EDDF]" />
      </div>
      {data && data.map((movie)=>(
          <MovieList key={movie._id} id={movie._id} title={movie.title}/>
        ))}
    </div>
    )
}
