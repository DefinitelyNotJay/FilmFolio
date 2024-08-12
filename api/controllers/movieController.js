import { ObjectId } from "mongodb";
import { Comment, Movie, User } from "../model/Model.js";
import { v2 as cloudinary } from "cloudinary";

export async function getMovieFromId(req, res, next) {
  const { id } = req.params;
  const movie = await Movie.findOne({ _id: id });
  res.status(200).json(movie);
}

export async function addToFavoriteMovie(req, res, next) {
  const { movieId, userId } = req.body;
  const user = await User.findOneAndUpdate(
    { _id: userId },
    { $push: { favorites: movieId } }
  );
  if (user) {
    console.log(user);
  }
  res.status(200).json(user);
}

export async function removeFavoriteMovie(req, res, next) {
  const { movieId, userId } = req.body;
  const user = await User.findOneAndUpdate(
    { _id: userId },
    { $pull: { favorites: movieId } }
  );
  if (user) {
    console.log(user);
  }
  res.status(200).json(user);
}

export async function createMovie(req, res, next) {
  const imageFile = req.file;
  const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
    resource_type: "image",
  });
  try {
    await Movie.create({
      ...req.body,
      image: imageUpload.secure_url,
    });
    res.json({ success: true });
  } catch (err) {
    res.json(err);
  }
}


