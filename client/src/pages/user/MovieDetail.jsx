import { useParams } from 'react-router-dom';
import { CircleUserRound, Star, MessageSquarePlus, X, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { url } from '@/App';
import { useContext } from 'react';
import { AuthContext } from '../../../context/userContext';

const MovieDetail = () => {
	const { id } = useParams();
	const [movieData, setMovieData] = useState({});
	const [imageUrl, setImageUrl] = useState('');
	const [openComment, setOpenComment] = useState(false);
	const [commentText, setCommentText] = useState('');
	const [comment, setComment] = useState([])

	const { user } = useContext(AuthContext);

	useEffect(() => {
		axios.get(`${url}/movie/${id}`).then((res) => {
			setMovieData(res.data.movie);
			setImageUrl(res.data.imageUrl);
			setOpenComment(false);
		});

		axios.get(`${url}/comment/movie/${id}`)
			.then(res=>setComment(res.data))
	}, [id]);
	return movieData ? (
		<div className="text-[#fdfdff] px-12 w-full bg-[#201c1c]   pb-24">
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
					<p className="text-sm">{movieData.synopsis}</p>
				</div>
				<div>
					<div className="flex justify-between items-center mb-4">
						<h1 className="font-semibold">• User review</h1>
						<div className="flex gap-2">
							<Button className="bg-[#E49600] text-[12px] rounded-full">
								<Star />
							</Button>
							<Button
								onClick={() => {
									console.log('23123');
									setOpenComment(!openComment);
								}}
								className="bg-[#fdfdff] text-[#333533] text-[12px] rounded-full"
							>
								<MessageSquarePlus />
							</Button>
						</div>
					</div>
					{openComment && (
						<>
							<form
								onSubmit={async (e) => {
									e.preventDefault();
									await axios.post(
										`${url}/comment/create`,
										{
											movieId: movieData._id,
											userId: user._id,
											comment: commentText,
										},
										{ withCredentials: true }
									);
									setCommentText('');
								}}
								className=""
							>
								<textarea
									name=""
									id=""
									rows={4}
									value={commentText}
									onChange={(e) => {
										setCommentText(e.target.value);
									}}
									className="bg-[#333] p-4 w-full outline-none rounded-xl resize-none"
								></textarea>
								<div className="relative top-0 left-0 justify-self-end flex gap-2 mb-5">
									<Button type="button">
										<X />
									</Button>
									<Button type="submit">
										<Check />
									</Button>
								</div>
							</form>
						</>
					)}
					<div className='flex flex-col gap-3'>
					{comment?.map(com=>(
						<div key={com._id} className="p-3 border flex flex-col gap-2 rounded-xl bg-[#333] mt-1 ">
						<div className="icon flex gap-2 items-center">
							<CircleUserRound size={32} />
							<p>{com.username}</p>
						</div>
						<p className="leading-7">
						{com.comment.text}
						</p>
					</div>
					))}
					</div>
				</div>
			</section>
		</div>
	) : (
		'Loading ...'
	);
};

export default MovieDetail;
