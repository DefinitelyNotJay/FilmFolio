import { ObjectId } from "mongodb";
import { Movie, User } from "../model/Model.js";

export async function getMovieFromId(req, res, next) {
  const { id } = req.params;
  const movie = await Movie.findOne({ _id: id });
  res.status(200).json(movie);
}

export async function addToFavorite(req, res, next) {
  const { movieId, customerId } = req.body;
  const user = await User.findOneAndUpdate(
    { _id: movieId },
    { $push: { favorites: customerId } }
  );
  if (user) {
    console.log(user);
  }
  res.status(200).json(user);
}
