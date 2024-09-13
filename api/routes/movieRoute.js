import express from "express";
import {
  addToFavoriteMovie,
  getMovieFromId,
  removeFavoriteMovie,
  createMovie,
  getAllMovies,
  getAllCategories,
  editMovie
} from "../controllers/movieController.js";
import upload from "../middleware/multer.js";

const router = express.Router();

router.get("/categories", getAllCategories);
router.get("/:id", getMovieFromId);
router.get("/", getAllMovies);
router.post("/create", upload.single("image"), createMovie);
router.post("/delete/:id");
router.post("/edit", editMovie);
router.post("/favorite", addToFavoriteMovie);
router.delete("/unfavorite", removeFavoriteMovie);

export default router;
