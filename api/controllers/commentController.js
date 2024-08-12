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
//   const id = new mongoose.Types.ObjectId(req.params.id);
//   console.log(id);
//   const commentDoc = await Comment.find({ movieId: { _id: id } });
//   res.json(commentDoc);
}
