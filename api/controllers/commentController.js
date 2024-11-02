import mongoose from "mongoose";
import { Comment } from "../model/Model.js";

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
