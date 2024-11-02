import { TbEye } from "react-icons/tb";
import { useEffect, useState } from 'react';
import { url } from "@/App";

function HomeUser() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null); 

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(`${url}/movie/categories`);
        if (!response.ok) {
          throw new Error('Failed to fetch categories');
        }
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        setError(error.message);
      }
    };

    const fetchMovies = async () => {
      if (selectedCategory) {
        console.log(selectedCategory)
        setLoading(true);
        try {
          const response = await fetch(`${url}/movie/movieincategory/${selectedCategory}`);
          if (!response.ok) {
            throw new Error('Failed to fetch movies');
          }
          const data = await response.json();
          setMovies(data);
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchCategories();
    fetchMovies(); // Fetch movies based on the selected category
  }, [selectedCategory]);

  if (error) return <div className="flex items-center justify-center h-screen text-white">{error}</div>;

  return (
    <div className="flex flex-col font-Inter pb-20 bg-[#282424]">
      {/* Hero Image */}
      <div
        className="h-[230px] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://wallpaperboat.com/wp-content/uploads/2020/10/08/56270/money-heist-01.jpg")',
        }}
      ></div>

      {/* Featured Movie Section */}
      <div className="flex gap-2 py-5 px-2 bg-opacity-90 bg-[#201c1c] m-4 rounded-lg shadow-lg">
        <div className="p-1 w-5/12">
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.dIce3488j1IrPdO66PdOpwHaE8&pid=Api&P=0&h=180"
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
              <h2 className="text-sm font-bold text-white">Stranger Things</h2>
              <p className="text-gray-400 text-sm">2012-2020</p>
            </div>
          </div>
          <div className="flex items-center mt-2 text-yellow-500">
            <span>★★★★★</span>
          </div>
          <p className="mt-2 text-gray-300 text-xs">
            Stranger Things is an American television series created by the
            Duffer Brothers for Netflix. The first season was released on
            Netflix on July 15, 2016...
          </p>
          <div className="flex justify-end">
            <button className="mt-4 px-3 py-1 bg-yellow-500 rounded-full text-black font-semibold text-xs">
              REVIEW
            </button>
          </div>
        </div>
      </div>

      {/* Category Buttons */}
      <div className="flex flex-wrap gap-2 m-4">
        {categories.map((category) => (
          <button
            key={category.name}
            onClick={() => setSelectedCategory(category.name)}
            className={`py-2 px-4 rounded-full transition-colors duration-300 ${
              selectedCategory === category.name
                ? "bg-yellow-500 text-black" // สีสำหรับปุ่มที่เลือก
                : "bg-gray-300 text-gray-800 hover:bg-gray-400" // สีสำหรับปุ่มที่ไม่ได้เลือก
            } font-semibold text-sm`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Movie Cards Section */}
      <div className="grid grid-cols-3 gap-3 py-4 px-4">
        {movies.map((movie, index) => (
          <div
            key={index}
            className="flex flex-col items-center w-full rounded-lg text-white bg-[#201d1d] pb-3 shadow-3xl"
          >
            <img
              className="w-full rounded-xl"
              src={movie.imgUrl || "http://www.gscmovies.com.my/wp-content/uploads/2015/05/Doraemon-Poster-27x39-CMYK-C2.jpg"} // Use movie.imgUrl if available
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
                <p>
                  <TbEye className="text-[12px] text-gray-300" />
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeUser;
