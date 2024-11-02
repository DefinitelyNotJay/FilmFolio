import { useParams } from 'react-router-dom';
import { ThumbsUp, ThumbsDown, CircleUserRound, Star, MessageSquarePlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { url } from '@/App';

const MovieDetail = () => {
	const { id } = useParams();
	const [movieData, setMovieData] = useState({});
    const [imageUrl, setImageUrl] = useState("")
	useEffect(() => {
		axios.get(`${url}/movie/${id}`).then((res) => {
            setMovieData(res.data.movie)
            setImageUrl(res.data.imageUrl)
        });
	}, [id]);
	return movieData ? (
		<div className="text-[#fdfdff] p-12 h-full">
			<section>
				<img src={`${imageUrl}`} alt="" className="h-60 mx-auto rounded-md" />
				<div className="text-center flex flex-col gap-1 mt-2">
					<h1 className="text-2xl font-semibold">{movieData.title}</h1>
					<p className="text-sm">{movieData.year}</p>
					<p className="text-sm">★ ★ ★ ★ ☆</p>
				</div>
			</section>
			<section className="mt-4 flex flex-col gap-3">
				<div>
					<h1 className="font-semibold">• Movie Subject</h1>
					<p className="text-sm">
						{movieData.synopsis}
					</p>
				</div>
				<div>
					<div className="flex justify-between items-center mb-4">
						<h1 className="font-semibold">• User review</h1>
						<div className='flex gap-2'>
                            <Button className="bg-[#E49600] text-[12px] rounded-full"><Star /></Button>
                            <Button className="bg-[#fdfdff] text-[#333533] text-[12px] rounded-full"><MessageSquarePlus /></Button>
                        </div>
					</div>
					<div className="p-3 border flex flex-col gap-2 rounded-xl bg-[#333] mt-1">
						<div className="icon flex gap-2 items-center">
							<CircleUserRound size={32} />
							<p>ป้อเองนักเลงพอ</p>
						</div>
						<p className="leading-7">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad molestiae fugiat,
							accusantium sint culpa velit voluptatem repellendus veritatis blanditiis! Cumque iste
							dolorem obcaecati quis deserunt esse officiis id qui assumenda.
						</p>
					</div>
				</div>
			</section>
		</div>
	) : (
		'Loading ...'
	);
};

export default MovieDetail;
