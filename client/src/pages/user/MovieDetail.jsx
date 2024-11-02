import { useParams } from 'react-router-dom';
import { ThumbsUp, ThumbsDown, CircleUserRound } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MovieDetail = () => {
	const { id } = useParams();
	console.log(id);
	return (
		<div className="text-[#fdfdff] p-12 h-full">
			<section>
				<img src="/panda.jpg" alt="" className='h-60 mx-auto rounded-md' />
				<div className="text-center flex flex-col gap-1 mt-2">
					<h1 className="text-2xl font-semibold">Kungfu</h1>
					<p className="text-sm">DreamWorks Animation</p>
					<p className="text-sm">★ ★ ★ ★ ☆</p>
				</div>
			</section>
			<section className="mt-4 flex flex-col gap-3">
				<div>
					<h1 className="font-semibold">• Movie Subject</h1>
					<p className='text-sm'>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad molestiae fugiat,
						accusantium sint culpa velit voluptatem repellendus veritatis blanditiis! Cumque iste
						dolorem obcaecati quis deserunt esse officiis id qui assumenda.
					</p>
				</div>
				<div>
					<div className="flex justify-between items-center mb-4">
						<h1 className="font-semibold">• User review</h1>
						<Button className="bg-[#E49600] text-[12px] rounded-md">COMMENT</Button>
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
						<div className="flex items-center justify-between">
							<p>2 likes</p>
							<div className="flex gap-2">
								<ThumbsUp />
								<ThumbsDown />
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default MovieDetail;
