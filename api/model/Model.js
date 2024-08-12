import mongoose from "mongoose";

// Schema สำหรับผู้ใช้งาน
const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: "Movie" }],
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

// Schema สำหรับภาพยนตร์
const movieSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    synopsis: { type: String },
    year: { type: Number },
    rating: { type: Number, default: 0 },
    category: { type: String },
    views: { type: Number, default: 0 },
    image: { type: String, required: true },
  },
  { timestamps: true }
);

const Movie = mongoose.model("Movie", movieSchema);

// Schema สำหรับคอมเม้นท์
const commentSchema = new mongoose.Schema(
  {
    movieId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Movie",
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    content: { type: String, required: true },
    likes: { type: Number, default: 0 },
    dislikes: { type: Number, default: 0 },
    created_at: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const Comment = mongoose.model("Comment", commentSchema);

// Schema สำหรับสถิติของภาพยนตร์
const statsSchema = new mongoose.Schema(
  {
    movieId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Movie",
      required: true,
    },
    views: { type: Number, default: 0 },
    likes: { type: Number, default: 0 },
    dislikes: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const Stats = mongoose.model("Stats", statsSchema);

// ฟังก์ชันสำหรับผู้ดูแลระบบ

// การจัดการผู้ใช้งาน
export const listUsers = async () => {
  return await User.find();
};

export const deleteUser = async (userId) => {
  return await User.findByIdAndDelete(userId);
};

// การจัดการภาพยนตร์
export const addMovie = async (movieData) => {
  const movie = new Movie(movieData);
  return await movie.save();
};

export const updateMovie = async (movieId, movieData) => {
  return await Movie.findByIdAndUpdate(movieId, movieData, { new: true });
};

export const deleteMovie = async (movieId) => {
  return await Movie.findByIdAndDelete(movieId);
};

// การจัดการคอมเม้นท์
export const listComments = async (movieId) => {
  return await Comment.find({ movieId });
};

export const deleteComment = async (commentId) => {
  return await Comment.findByIdAndDelete(commentId);
};

// การดูสถิติ
export const getMovieStats = async (movieId) => {
  return await Stats.findOne({ movieId });
};

// Export โมเดลทั้งหมด
export { User, Movie, Comment, Stats };
