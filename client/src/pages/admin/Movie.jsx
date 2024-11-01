import MovieList from '../../components/MovieList';
import { Plus } from 'lucide-react';
import { useFetch } from '@/hooks/useFetch';
import { url } from '@/App';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function Movie() {
	const { data, loading, error } = useFetch(`${url}/movie`);
	useEffect(() => {
    
  }, []);
	console.log(`${url}/movie`);
	console.log(loading);
	console.log(error);
	console.log(data);
	const navigate = useNavigate();
	return (
		<div className="px-4 py-4 grid xl:grid-cols-5 lg:grid-cols-2 mx-auto justify-items-center gap-y-8">
			<div
				onClick={() => {
					navigate('/movie/new');
				}}
				className="w-48 h-full bg-[#333] cursor-pointer rounded-xl flex items-center justify-center hover:border hover:bg-[#383838] hover:border-[#E8EDDF]"
			>
				<Plus className="text-[#E8EDDF]" />
			</div>
			{data &&
				data?.map((movie) => (
					<MovieList key={movie._id} title={movie.title} imgSrc={movie.imgUrl} />
				))}
		</div>
	);
}
