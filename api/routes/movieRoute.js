import express from "express";
import {
  addToFavoriteMovie,
  getMovieFromId,
  removeFavoriteMovie,
  createMovie,
} from "../controllers/movieController.js";
import upload from "../middleware/multer.js";

const router = express.Router();

router.get("/:id", getMovieFromId);
router.post("/create", upload.single("image"), createMovie);
router.post("/delete/:id");
router.post("/favorite", addToFavoriteMovie);
router.delete("/unfavorite", removeFavoriteMovie);

export default router;
