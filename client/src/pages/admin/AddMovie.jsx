import { useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from 'react-hook-form';

import { url } from '@/App';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AddMovie() {
	const { id } = useParams();
	const [selectCategories, setSelectCategories] = useState([]);
	const [category, setCategory] = useState([]);

	useEffect(() => {
		axios.get(`${url}/movie/categories`).then((res) => setSelectCategories(res.data));
	}, []);

	const { register, handleSubmit } = useForm();

	const submitHandler = async (data) => {
		const createData = { ...data, category: category };
		await axios
			.post(`${url}/movie/create`, createData, { withCredentials: true })
			.then((res) => toast.success('Success!'));
	};

	return (
		<div className="px-6 py-6">
			<ToastContainer autoClose={2000} closeOnClick theme="dark" />
			<h1 className="font-bold text-2xl text-[#e7e7e7]">Movies details</h1>
			<div className="w-full mt-4">
				<form
					onSubmit={handleSubmit(submitHandler)}
					className="w-1/2 flex flex-col gap-6 text-[#e7e7e7]"
				>
					<div className="grid w-full max-w-sm items-center gap-1.5">
						<Label htmlFor="title">Title</Label>
						<Input
							{...register('title')}
							type="text"
							className="outline-none border-none px-2 bg-[#333533] text-[#E8EDDF] focus:bg-[#E8EDDF] py-1 focus:text-[#242423] rounded"
						/>
					</div>
					<div className="grid w-full max-w-sm items-center gap-1.5">
						<Label htmlFor="synopsis">Synopsis</Label>
						<Textarea
							{...register('synopsis')}
							id="synopsis"
							type="text"
							className="resize-none overflow-visible outline-none border-none px-2 bg-[#333533] text-[#E8EDDF] focus:bg-[#E8EDDF] py-1 focus:text-[#242423] rounded"
						/>
					</div>
					<div className="grid w-full max-w-sm items-center gap-1.5">
						<Label htmlFor="year">Year</Label>
						<Input
							{...register('year')}
							type="number"
							className="outline-none border-none px-2 bg-[#333533] text-[#E8EDDF] focus:bg-[#E8EDDF] py-1 focus:text-[#242423] rounded"
						/>
					</div>
					<div className="grid w-full max-w-sm items-center gap-1.5">
						<Label htmlFor="category">Categories</Label>
						<select
							className="outline-none border-none px-2 py-2 bg-[#333533] text-[#E8EDDF] rounded"
							onChange={(e) => {
								setCategory((prev) => {
									if (!prev.includes(e.target.value)) return [...prev, e.target.value];
									else return prev;
								});
							}}
						>
							<option selected disabled>
								Choose one or more
							</option>
							{selectCategories.map((cate) => (
								<option key={cate._id} value={cate.name}>
									{cate.name}
								</option>
							))}
						</select>
						{category && (
							<div className="flex gap-2">
								{category.map((cate) => (
									<p
										className="px-3 py-2 hover:bg-[#f5cb5c] hover:text-[#333] rounded w-fit hover:cursor-pointer"
										onClick={(e) =>
											setCategory((prev) => {
												return prev.filter((item) => item !== e.target.textContent);
											})
										}
										key={cate}
									>
										{cate}
									</p>
								))}
							</div>
						)}
					</div>
					<div className="flex gap-4">
						<Button type="submit" className="bg-[#f5cb5c] w-fit">
							SAVE CHANGES
						</Button>
						<Button variant={'destructive'} className="hover:bg-[#333]">
							DELETE
						</Button>
					</div>
				</form>
				<div className="w-1/2"></div>
			</div>
		</div>
	);
}
