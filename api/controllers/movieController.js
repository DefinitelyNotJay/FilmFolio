import { deleteImage, getImageUrl, putObj } from '../config/s3.js';
import { Category, Comment, Movie, User } from '../model/Model.js';
import { S3Client, ListBucketsCommand } from '@aws-sdk/client-s3';

export async function getAllMovies(req, res, next) {
	let movies = await Movie.find({ image: { $ne: null } }).lean();
	for (let movie of movies) {
		if (movie.image) {
			const imgUrl = await getImageUrl(movie.image);
			movie.imgUrl = imgUrl; // เพิ่ม key-value เข้าไปใน object movie
		}
	}
	console.log(movies);
	res.status(200).json(movies);
}

export async function getMovieInCategory(req, res, next) {
	const { cate } = req.params;
	console.log(cate);
	try {
		// ดึงภาพยนตร์ทั้งหมดตาม cate_id
		let movies = await Movie.find({ category: cate, image: { $ne: null } }).lean();

		// แปลง URL รูปภาพ
		for (let movie of movies) {
			if (movie.image) {
				const imgUrl = await getImageUrl(movie.image);
				movie.imgUrl = imgUrl;
			}
		}

		console.log(movies); // แสดงภาพยนตร์ทั้งหมดใน console

		res.status(200).json(movies);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'เกิดข้อผิดพลาดในการดึงข้อมูลภาพยนตร์' }); // ส่งข้อผิดพลาดไปยัง client
	}
}

export async function getMovieFromId(req, res, next) {
	const { id } = req.params;
	const movie = await Movie.findOne({ _id: id });

	if (movie.image) {
		const imageUrl = await getImageUrl(movie.image);
		return res.status(200).json({ movie: movie, imageUrl: imageUrl });
	}

	return res.status(200).json({ movie: movie, imageUrl: '' });
}

export async function getAllCategories(req, res, next) {
	const categories = await Category.find();
	res.status(200).json(categories);
}

export async function addToFavoriteMovie(req, res, next) {
	const { movieId, userId } = req.body;
	const user = await User.findOneAndUpdate({ _id: userId }, { $push: { favorites: movieId } });
	res.status(200).json(user);
}

export async function deleteMovie(req, res, next) {
	const { id } = req.params;
	console.log(id)
	const movie = await Movie.findOneAndDelete({ _id: id });
	res.status(200).json(movie);
}

export async function createMovie(req, res, next) {
	const movieDetail = req.body;
	const movieImage = req.file;

	await putObj(movieImage.originalname, movieImage.buffer, movieImage.mimetype);

	const movieDoc = await Movie.create({
		title: movieDetail.title,
		synopsis: movieDetail.synopsis,
		year: movieDetail.year,
		category: movieDetail.categories,
		image: `https://filmfolio-backend.s3.us-east-1.amazonaws.com/${movieImage.originalname}`,
	});
	res.status(200).json('Fine!');
}

export async function editMovie(req, res, next) {
	const movieDetail = req.body;
	const movieImage = req.file;
	console.log(movieImage)
	if (movieImage) {
		if (movieDetail.image) {
			await deleteImage(movieDetail.image);
		}

		await putObj(movieImage.originalname, movieImage.buffer, movieImage.mimetype);

			await Movie.findByIdAndUpdate(
				{
					_id: movieDetail._id,
				},
				{
					image: `https://filmfolio-backend.s3.us-east-1.amazonaws.com/${movieImage.originalname}`,
				}
			);
	}

	try {
		await Movie.findByIdAndUpdate(
			{
				_id: movieDetail._id,
			},
			{
				...movieDetail,
			}
		);
		res.json({ success: true });
	} catch (err) {
		res.json(err);
	}
}
