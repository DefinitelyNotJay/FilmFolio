import '@fortawesome/fontawesome-free/css/all.min.css';
import SearchBar from '../../components/SearchBar';

function AllLikes() {
    return(
        <div className="w-full h-[844px] bg-[#242423] text-white overflow-y-auto justify-center px-4 py-4">
            {/* grid */}
            <div className="py-4">
                <SearchBar />
                {/* Other components */}
            </div>
            <div className="grid grid-cols-3 gap-3">
                {/* Movie Card */}
                <div className="flex flex-col item-center w-full rounded-lg">
                    <img className="w-full rounded-xl" src="https://www.movieposters.com/cdn/shop/products/c104f1bfed20481f35bc96cb9addc940_240x360_crop_center.progressive.jpg?v=1573588574" alt="" />
                    <h3 className="font-semibold text-sm mt-1 px-2">Titanic</h3>
                    <div className="flex w-full justify-between p-2">
                        <div className='flex w-8/12 items-baseline'>
                            <i className="fas fa-star text-[8px] text-yellow-300"></i>
                            <i className="fas fa-star text-[8px] text-yellow-300"></i>
                            <i className="fas fa-star text-[8px] text-yellow-300"></i>
                            <i className="fas fa-star text-[8px] text-yellow-300"></i>
                            <i className="far fa-star text-[8px] text-yellow-300"></i>
                        </div>
                        <div className='flex w-4/12 gap-2 items-baseline justify-end'>
                            <i className="fas fa-eye text-[10px] text-white"></i>
                            <i className="fas fa-heart text-[10px] text-red-400"></i>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
export default AllLikes