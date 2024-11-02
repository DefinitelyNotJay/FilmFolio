import mongoose from "mongoose";
import { User } from "../model/Model.js";
import { Comment } from "../model/Model.js";


export async function addRatingMovie(req, res, next) {
	const { movieId, userId, comment } = req.body;

	if (!movieId || !userId || !comment) {
		return res.status(400).json({ message: 'movieId, userId, and comment are required' });
	}

	try {
		const updatedUser = await User.findOneAndUpdate(
			{ _id: userId },
			{
				$push: {
					comments: {
						text: comment,
						movie: movieId
					}
				}
			},
			{ new: true }
		);

		if (!updatedUser) {
			return res.status(404).json({ message: 'User not found' });
		}

		res.status(200).json(updatedUser);
	} catch (error) {
		console.error('Error adding comment:', error);
		return res.status(500).json({ message: 'Failed to add comment' });
	}
}


export async function removeRatingMovie(req, res, next) {
    try {
        const { commentId, userId } = req.body;

        if (!commentId || !userId) {
            return res.status(400).json({ message: 'Missing required fields' });
        }

        const user = await User.findOneAndUpdate(
            { _id: userId },
            { $pull: { comments: { _id: commentId } } },
        );

        if (!user) {
            return res.status(404).json({ message: 'User or comment not found' });
        }

        res.status(200).json({ message: 'Comment removed successfully', user });
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
        const user = await User.findById(user_id).select('comments');  // Use `user_id` here as well
        
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json(user.comments);
    } catch (error) {
        next(error);
    }
}

