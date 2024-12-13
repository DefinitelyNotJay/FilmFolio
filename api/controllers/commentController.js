import mongoose from "mongoose";
import { User, Rating } from "../model/Model.js";
import { Comment } from "../model/Model.js";

export async function addCommentMovie(req, res, next) {
  const { movieId, userId, comment } = req.body;

  if (!movieId || !userId || !comment) {
    return res
      .status(400)
      .json({ message: "movieId, userId, and comment are required" });
  }

  try {
    const updatedUser = await User.findOneAndUpdate(
      { _id: userId },
      {
        $push: {
          comments: {
            text: comment,
            movie: movieId,
          },
        },
      },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json(updatedUser);
  } catch (error) {
    console.error("Error adding comment:", error);
    return res.status(500).json({ message: "Failed to add comment" });
  }
}

export async function removeCommentMovie(req, res, next) {
  try {
    const { commentId, userId } = req.params;

    if (!commentId || !userId) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const user = await User.findOneAndUpdate(
      { _id: userId },
      { $pull: { comments: { _id: commentId } } }
    );

    if (!user) {
      return res.status(404).json({ message: "User or comment not found" });
    }

    res.status(200).json({ message: "Comment removed successfully", user });
  } catch (error) {
    next(error);
  }
}

export async function getCommentFromMovieId(req, res, next) {
	const {movie_id} = req.params
	try {
		const usersWithComments = await User.aggregate([
			{
			  $unwind: '$comments' // แยกคอมเมนต์แต่ละรายการ
			},
			{
			  $match: {
				'comments.movie': new mongoose.Types.ObjectId(movie_id) // ตรวจสอบว่า movieId ตรงกันหรือไม่
			  }
			},
			{
			  $project: {
				username: 1, // เลือกฟิลด์ที่ต้องการแสดง เช่น username
				comment: '$comments' // ดึงคอมเมนต์ที่ตรงกับเงื่อนไข
			  }
			}
		  ]);
	
		return res.status(200).json(usersWithComments);
	  } catch (error) {
		console.error('Error fetching comments:', error);
		return res.status(404);
	  }
}

export async function getCountFromId(req, res, next) {
  const { userId } = req.params;
  const user = await User.findOne({ _id: userId });
  const rating = await Rating.countDocuments({ userId });
  const comment = user.comments.length;
  res.status(200).json({ rating, comment });
}

export async function getCommentFromUserId(req, res, next) {
  try {
    const { user_id } = req.params;
    const user = await User.findById(user_id).select("comments"); // Use `user_id` here as well

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user.comments);
  } catch (error) {
    next(error);
  }
}
