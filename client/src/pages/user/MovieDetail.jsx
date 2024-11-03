import { useParams } from 'react-router-dom';
import { CircleUserRound, Star, MessageSquarePlus, X, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { url } from '@/App';
import { useContext } from 'react';
import { AuthContext } from '../../../context/userContext';
import { toast, ToastContainer } from 'react-toastify';

const MovieDetail = () => {
	const { id } = useParams();
	const [movieData, setMovieData] = useState({});
	const [imageUrl, setImageUrl] = useState('');
	const [openComment, setOpenComment] = useState(false);
	const [commentText, setCommentText] = useState('');
	const [comment, setComment] = useState([]);
	const [openStar, setOpenStar] = useState(false);
	const [star, setStar] = useState(0);
	const [previousStar, setPreviousStar] = useState();

	const { user } = useContext(AuthContext);

	useEffect(() => {
		axios.get(`${url}/movie/${id}`).then((res) => {
			setMovieData(res.data.movie);
			setImageUrl(res.data.imageUrl);
			setOpenComment(false);
		});

		axios.get(`${url}/rating/?userId=${user._id}&movieId=${id}`).then((res) => {
			console.log(res.data);
			if (res.data?.rating) {
				setPreviousStar(res.data.rating);
			}
		});

		axios.get(`${url}/comment/movie/${id}`).then((res) => setComment(res.data));
	}, [id]);
	return movieData ? (
		<div className="bg-[#201c1c] text-[#fdfdff] p-12 w-full pb-24">
			<ToastContainer autoClose={2000} closeOnClick theme="dark" />
			<section>
				<img src={`${imageUrl}`} alt="" className="h-60 mx-auto rounded-md" />
				<div className="text-center flex flex-col gap-1 mt-2">
					<h1 className="text-2xl font-semibold">{movieData.title}</h1>
					<p className="text-sm">{movieData.year}</p>
					<p className="text-sm">★ ★ ★ ★ ☆</p>
					<p>{previousStar}</p>
				</div>
			</section>
			<section className="mt-4 flex flex-col gap-3">
				{previousStar && (
					<div>
						<h1 className="font-semibold">• Your Score</h1>
						<p className="text-sm">{movieData.synopsis}</p>
					</div>
				)}
				<div>
					<h1 className="font-semibold">• Movie Subject</h1>
					<p className="text-sm">{movieData.synopsis}</p>
				</div>
				<div>
					<div className="flex justify-between items-center mb-4">
						<h1 className="font-semibold">• User review</h1>
						<div className="flex gap-2">
							{/* star */}
							<Button
								className="bg-[#E49600] text-[12px] rounded-full"
								onClick={() => {
									setOpenStar(!openStar);
								}}
							>
								<Star />
							</Button>
							<Button
								onClick={() => {
									setOpenComment(!openComment);
								}}
								className="bg-[#fdfdff] text-[#333533] text-[12px] rounded-full"
							>
								<MessageSquarePlus />
							</Button>
						</div>
					</div>
					{openStar && (
						<div className="text-black p-2">
							<form
								action=""
								onSubmit={async (e) => {
									e.preventDefault();
									// const { movieId, userId, rating } = req.body;
									await axios
										.post(
											`${url}/rating/create`,
											{
												movieId: id,
												userId: user._id,
												rating: star,
											},
											{
												withCredentials: true,
											}
										)
										.then(() => {
											toast.success('Success!', {
												position: 'top-center',
												autoClose: 1000,
												hideProgressBar: false,
												theme: 'dark',
												onClose: () => {
													setStar('');
													setOpenStar(false);
													window.location.reload();
												},
											});
										});
								}}
								className="flex items-center h-full gap-2"
							>
								<select
									onChange={(e) => {
										setStar(e.target.value);
									}}
									value={star}
									name="star"
									id=""
									className="g-full rounded-lg text-white bg-[#333] p-4"
								>
									<option value="1">★ ☆ ☆ ☆ ☆</option>
									<option value="2">★ ★ ☆ ☆ ☆</option>
									<option value="3">★ ★ ★ ☆ ☆</option>
									<option value="4">★ ★ ★ ★ ☆</option>
									<option value="5">★ ★ ★ ★ ★</option>
								</select>
								<Button type="submit" className="w-fit p-2 text-[#fdfdff] rounded-lg bg-[#333]">
									<Check height={18} />
								</Button>
							</form>
						</div>
					)}
					{openComment && (
						<>
							<form
								className="relative"
								onSubmit={async (e) => {
									e.preventDefault();
									await axios
										.post(
											`${url}/comment/create`,
											{
												movieId: movieData._id,
												userId: user._id,
												comment: commentText,
											},
											{ withCredentials: true }
										)
										.then(() => {
											console.log('hey2');
											toast.success('Success!', {
												position: 'top-center',
												autoClose: 1000,
												hideProgressBar: false,
												theme: 'dark',
												onClose: () => {
													setCommentText('');
													setOpenComment(false);
													window.location.reload();
												},
											});
										});
								}}
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
								<div className="absolute bottom-4 right-2 justify-self-end flex gap-2">
									<Button
										type="button"
										variant={'destructive'}
										onClick={() => {
											setCommentText('');
											setOpenComment(false);
										}}
										className="w-fit p-2 rounded-full"
									>
										<X height={18} />
									</Button>
									<Button type="submit" className="w-fit p-2 bg-[#fdfdff] rounded-full text-[#333]">
										<Check height={18} />
									</Button>
								</div>
							</form>
						</>
					)}
					<div className="flex flex-col gap-3">
						{comment?.map((com, index) => (
							<div
								key={`${com._id}-${index}`}
								className="p-3 border flex flex-col gap-2 rounded-xl bg-[#333] mt-1"
							>
								<div className="icon flex gap-2 items-center">
									<CircleUserRound size={32} />
									<p>{com.username}</p>
								</div>
								<p className="leading-7">{com.comment.text}</p>
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
