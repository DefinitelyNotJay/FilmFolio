import mongoose from "mongoose";
import { User } from "../model/Model.js";
import { Rating } from "../model/Model.js";


export async function addRatingMovie(req, res, next) {
	const { movieId, userId, rating } = req.body;

	if (!movieId || !userId || rating == null) {
	  return res.status(400).json({ message: 'movieId, userId, and rating are required' });
	}
	
	try {
	  const newRating = await Rating.create({
		movieId,
		userId,
		rating,
	  });
	  res.status(201).json(newRating);
	} catch (error) {
	  res.status(500).json({ message: 'Error creating rating', error });
	}
}


export async function removeRatingMovie(req, res, next) {
    try {
        const { rating_id } = req.params;
        if (!rating_id) {
            return res.status(400).json({ message: "Rating ID is required" });
        }
        const result = await Rating.deleteOne({ _id: rating_id });
        res.status(200).json({ message: "Rating deleted successfully" });
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
        const rating = await Rating.find({userId : user_id}).populate("movieId", "title year").populate("userId", "username").exec();
        res.json(rating);
    } catch (error) {
        next(error);
    }
}

