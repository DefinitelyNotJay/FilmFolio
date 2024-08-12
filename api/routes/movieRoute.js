import express from "express";
import {
  addToFavoriteMovie,
  createComment,
  getMovieFromId,
  removeFavoriteMovie,
} from "../controllers/movieController.js";

const router = express.Router();

router.get("/:id", getMovieFromId);
router.post("/create");
router.post("/delete/:id");
router.post("/favorite", addToFavoriteMovie);
router.delete("/unfavorite", removeFavoriteMovie);
router.post("/comment", createComment);

export default router;
