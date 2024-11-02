import mongoose from "mongoose";

// Schema สำหรับผู้ใช้งาน
const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: "Movie" }],
    comments: [
      {
        text: { type: String, required: true },
        movie: { type: mongoose.Schema.Types.ObjectId, ref: "Movie", required: true },
        createdAt: { type: Date, default: Date.now }
      }
    ]
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
    category: { type: [String] },
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


// Schema สำหรับrating
const ratingSchema = new mongoose.Schema(
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
    rating: { type: Number, default: 0 },
    created_at: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const Rating = mongoose.model("Rating", ratingSchema);

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

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: [String],
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

const Category = mongoose.model("Category", categorySchema);

export { Category, Comment, Movie, Stats, User, Rating };
