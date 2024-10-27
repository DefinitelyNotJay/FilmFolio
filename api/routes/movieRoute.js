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
import multer from "multer";

const storage = multer.memoryStorage()
const upload = multer({ storage: storage})

const router = express.Router();

router.get("/categories", getAllCategories);
router.get("/:id", getMovieFromId);
router.get("/", getAllMovies);
router.post("/create", upload.single("image"), createMovie);
router.post("/delete/:id");
router.patch("/edit",upload.single("image"), editMovie);
router.post("/favorite", addToFavoriteMovie);
router.delete("/unfavorite", removeFavoriteMovie);

export default router;
