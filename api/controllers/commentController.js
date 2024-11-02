import mongoose from "mongoose";
import { Comment, User } from "../model/Model.js";

export async function createComment(req, res, next) {
  const commentDoc = await Comment.collection.insertOne(req.body);
  res.status(200).json(commentDoc);
}

export async function browseComments(req, res, next) {
  const comments = await Comment.find({});
  res.json(comments);
}

export async function getCommentsFromId(req, res, next) {
  const { id } = req.params;
	const comments = await Comment.findOne({ _id: id });
	res.status(200).json(comments);
}

export async function gatCountCommentsFromId(req, res, next) {
  const { userId } = req.params;
  console.log(userId)
  const user = await User.findOne({ _id: userId });
	// const count = user.comments.length;
  // console.log(count)
	res.status(200).json(user);
}
