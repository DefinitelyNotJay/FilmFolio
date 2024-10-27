import { delImg, getImageUrl, putObj } from '../config/s3.js';
import { Category, Comment, Movie, User } from '../model/Model.js';
import { S3Client, ListBucketsCommand } from '@aws-sdk/client-s3';

export async function getAllMovies(req, res, next) {
	let movies = await Movie.find({ image: { $ne: null } }).lean();
	for (let movie of movies) {
		if (movie.image) {
			console.log(movie.image);
			const imgUrl = await getImageUrl(movie.image);
			movie.imgUrl = imgUrl; // เพิ่ม key-value เข้าไปใน object movie
		}
	}

	console.log(movies[0]);

	res.status(200).json(movies);
}

export async function getMovieFromId(req, res, next) {
	const { id } = req.params;
	const movie = await Movie.findOne({ _id: id });
	const imageUrl = await getImageUrl(movie.image);
	movie.image = imageUrl;
	res.status(200).json(movie);
}
export async function getAllCategories(req, res, next) {
	console.log('hey');
	const categories = await Category.find();
	res.status(200).json(categories);
}

export async function addToFavoriteMovie(req, res, next) {
	const { movieId, userId } = req.body;
	const user = await User.findOneAndUpdate({ _id: userId }, { $push: { favorites: movieId } });
	if (user) {
		console.log(user);
	}
	res.status(200).json(user);
}

export async function removeFavoriteMovie(req, res, next) {
	const { movieId, userId } = req.body;
	const user = await User.findOneAndUpdate({ _id: userId }, { $pull: { favorites: movieId } });
	if (user) {
		console.log(user);
	}
	res.status(200).json(user);
}

export async function createMovie(req, res, next) {
	const movieDetail = req.body;
	const movieImage = req.file;

	console.log(movieDetail);

	await putObj(movieImage);

	const movieDoc = await Movie.create({
		title: movieDetail.title,
		synopsis: movieDetail.synopsis,
		year: movieDetail.year,
		category: movieDetail.category,
		image: movieImage.originalname,
	});

	res.status(200).json('Fine!');
}

export async function editMovie(req, res, next) {
	const movieDetail = req.body;
	console.log(!req.file)

	if (!req.file) {
		try {
			await Movie.updateOne(
				{
					_id: movieDetail._id,
				},
				{
					title: movieDetail.title,
					synopsis: movieDetail.synopsis,
					year: movieDetail.year,
					category: movieDetail.category,
				}
			);
			return res.status(200).json({ success: true });
		} catch (err) {
			return res.json(err);
		}
	}
	// กรณีใส่รูปมา
	console.log("this route")
	try {
		const movieImage = req.file;
		const movie = await Movie.findById(movieDetail._id);
		await delImg(movie.image);
		await putObj(movieImage);
		console.log("name", movieImage.originalname)
		movieDetail.image = movieImage.originalname;
		await Movie.updateOne(
			{
				_id: movieDetail._id,
			},
			{
				title: movieDetail.title,
				synopsis: movieDetail.synopsis,
				year: movieDetail.year,
				category: movieDetail.category,
				image: movieDetail.image,
			}
		);
		res.status(200).json({ success: true });
	} catch (err) {
		res.json(err);
	}
}
