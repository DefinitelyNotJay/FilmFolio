import React from "react";
import MovieList from "../../components/MovieList";
import { Plus } from "lucide-react";

export default function Movie() {
  return (
    <div className="px-4 py-4 grid xl:grid-cols-5 lg:grid-cols-2 mx-auto justify-items-center gap-y-8">
      <div className="w-48 h-full bg-[#333] cursor-pointer rounded-xl flex items-center justify-center hover:border hover:bg-[#383838] hover:border-[#E8EDDF]">
        <Plus className="text-[#E8EDDF]"/>
      </div>
      <MovieList />
      <MovieList />
      <MovieList />
      <MovieList />
      <MovieList />
      <MovieList />
      <MovieList />
      <MovieList />
    </div>
  );
}
