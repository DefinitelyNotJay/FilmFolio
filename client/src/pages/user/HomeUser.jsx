import { TbEye } from "react-icons/tb";
import { useEffect, useState } from "react";
import { url } from "@/App";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function HomeUser() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [latestMovie, setLatestMovie] = useState(null)
  const [loading, setLoading] = useState(true); // กำหนดให้ loading เป็น true ครั้งแรกที่โหลด
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${url}/movie`).then((res) => {
      setMovies(res.data);
      setLatestMovie(res.data[res.data.length - 1])
    });


  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(`${url}/movie/categories`);
        if (!response.ok) {
          throw new Error("Failed to fetch categories");
        }
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        setError(error.message);
      }
    };

    const fetchMovies = async () => {
      if (selectedCategory) {
        console.log(selectedCategory);
        try {
          const response = await fetch(
            `${url}/movie/movieincategory/${selectedCategory}`
          );
          if (!response.ok) {
            throw new Error("Failed to fetch movies");
          }
          const data = await response.json();
          console.log(data);
          setMovies(data);
        } catch (error) {
          setError(error.message);
        }
      }
    };

    const loadData = async () => {
      await fetchCategories();
      await fetchMovies();
      setLoading(false);
    };

    loadData();
  }, [selectedCategory]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-white">
        Loading...
      </div>
    );
  }

  if (error)
    return (
      <div className="flex items-center justify-center h-screen text-white">
        {error}
      </div>
    );

  return (
    <div className="w-full flex flex-col font-Inter pb-20 bg-[#282424]">
      {/* Hero Image */}
      <div
        className="h-[230px] bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://images.alphacoders.com/107/thumb-1920-1072652.jpg")',
        }}
      ></div>

      {/* Featured Movie Section */}
      <div className="flex gap-2 py-5 px-2 bg-opacity-90 bg-[#242020] m-4 rounded-lg shadow-lg">
        <div className="p-1 w-5/12">
          <img
            src={`${latestMovie?.imgUrl}`}
            alt="Stranger Things Poster"
            className="w-full h-full rounded-lg object-cover shadow-lg"
          />
        </div>
        <div className="w-7/12">
          <div className="flex justify-end">
            <p className="text-[10px] mb-2 font-medium text-[#ffa781]">New</p>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-sm font-bold text-white">{latestMovie?.title }</h2>
              <p className="text-gray-400 text-sm">{latestMovie?.year}</p>
            </div>
          </div>
          <p className="mt-2 text-gray-300 text-[10px]">
            {latestMovie?.synopsis }
          </p>
          <div className="flex justify-end">
            <button onClick={()=>{navigate(`/movie/detail/${latestMovie?._id}`)}} className="mt-4 px-3 py-1 bg-yellow-500 rounded-full text-black font-semibold text-[10px]">
              REVIEW
            </button>
          </div>
        </div>
      </div>

      {/* Category Buttons */}
      <div className="flex flex-wrap gap-2 m-4 ">
        <button
          onClick={() => {
            window.location.reload();
          }}
          className="bg-gray-300 text-gray-800 hover:bg-gray-400 font-semibold text-[10px] py-2 px-4 rounded-full transition-colors duration-300"
        >
          All
        </button>

        {categories.map((category) => (
          <button
            key={category.name}
            onClick={() => {
              setSelectedCategory(category.name);
            }}
            className={`py-2 px-4 rounded-full transition-colors duration-300 ${
              selectedCategory === category.name
                ? "bg-yellow-500 text-black"
                : "bg-gray-300 text-gray-800 hover:bg-gray-400"
            } font-semibold text-[10px]`}
          >
            {category.name}
          </button>
        ))}
      </div>
      

      <p className="text-lg font-bold text-gray-200 px-5 pt-6 pb-3">
          {selectedCategory?   selectedCategory : "All Movies"}
      </p>
      {/* Movie Cards Section */}
      <div className="grid grid-cols-3 gap-3 py-4 px-4">
        {movies.map((movie, index) => (
          <div
            key={index}
            className="flex flex-col items-center w-full rounded-lg text-white bg-[#201d1d] pb-3 shadow-3xl"
            onClick={() => {
              navigate(`/movie/detail/${movie._id}`);
            }}
          >
            <img
              className="w-full rounded-xl h-[157px]"
              src={
                movie.imgUrl ||
                "http://www.gscmovies.com.my/wp-content/uploads/2015/05/Doraemon-Poster-27x39-CMYK-C2.jpg"
              }
              alt={movie.title}
            />
            <h3 className="font-semibold text-[10px] mt-3 px-2">
              {movie.title}
            </h3>
            <h3 className="font-semibold text-[7px] text-gray-300 px-2">
              {movie.year}
            </h3>
            <div className="flex w-full justify-between px-2">
              <div className="flex items-center justify-between w-full mt-2">
                <span className="text-[12px] text-yellow-400">★★★★★</span>
                <div className="flex items-center gap-1">
                  <p>
                    <TbEye className="text-[12px] text-gray-300" />
                  </p>
                  <p className="text-[9px]">{movie.views}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeUser;
