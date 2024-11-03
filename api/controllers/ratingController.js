import mongoose from 'mongoose';
import { User } from '../model/Model.js';
import { Rating } from '../model/Model.js';

export async function addRatingMovie(req, res, next) {
	const { movieId, userId, rating } = req.body;

	if (!movieId || !userId || rating == null) {
		return res.status(400).json({ message: 'movieId, userId, and rating are required' });
	}

	try {
		const rated = await Rating.findOne({ movieId: movieId, userId: userId });

		if (!rated) {
			const newRating = await Rating.create({
				movieId,
				userId,
				rating,
			});
			console.log('create complete');
			return res.status(201).json(newRating);
		}

		const updateRated = await Rating.findOneAndUpdate(
			{ _id: rated._id },
			{ movieId, userId, rating }
		);
		console.log('update complete');
		return res.status(200).json(updateRated);
	} catch (error) {
		return res.status(500).json({ message: 'Error creating rating', error });
	}
}

export async function removeRatingMovie(req, res, next) {
	try {
		const { rating_id } = req.params;
		if (!rating_id) {
			return res.status(400).json({ message: 'Rating ID is required' });
		}
		const result = await Rating.deleteOne({ _id: rating_id });
		res.status(200).json({ message: 'Rating deleted successfully' });
	} catch (error) {
		next(error);
	}
}

export async function getRatingFromMovieId(req, res, next) {
	// try {
	// 	const {movie_id} = req.params;
	// 	const movie = await
	// } catch (error) {
	// }
}

export async function getRatingFromUserId(req, res, next) {
	try {
		const { user_id } = req.params;
		const rating = await Rating.find({ userId: user_id })
			.populate('movieId', 'title year')
			.populate('userId', 'username')
			.exec();
		res.json(rating);
	} catch (error) {
		next(error);
	}
}

export async function getRatingFromMovieAndUserId(req, res, next) {
	try {
		const movieId = req.query.movieId;
		const userId = req.query.userId;
		const rating = await Rating.findOne({ movieId: movieId, userId: userId });
		return res.status(200).json(rating || null);
	} catch (error) {
		next(error);
	}
}
