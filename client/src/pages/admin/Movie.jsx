import MovieList from '../../components/MovieList';
import { Plus } from 'lucide-react';
import { url } from '@/App';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';


export default function Movie() {
	const [data, setData] = useState([]);
	useEffect(() => {
		axios.get(`${url}/movie`).then((res) => {
			console.log(res.data);
			setData(res.data);
		});
	}, []);
	console.log(data);
	data.forEach(movie=>{
		console.log(movie.imgUrl)
	})
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
				data.map((movie) => (
					<MovieList key={movie._id} title={movie.title} imgSrc={movie.imgUrl} id={movie._id} rating={movie.rating} year={movie.year}/>
				))}
		</div>
	);
}
