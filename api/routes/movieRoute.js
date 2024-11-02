import express from "express";
import {
  addToFavoriteMovie,
  getMovieFromId,
  createMovie,
  getAllMovies,
  getMovieInCategory,
  getAllCategories,
  editMovie,
  deleteMovie
} from "../controllers/movieController.js";
import multer from "multer";

const storage = multer.memoryStorage()
const upload = multer({ storage: storage})

const router = express.Router();

router.get("/categories", getAllCategories);
router.get("/movieincategory/:cate", getMovieInCategory);
router.get("/:id", getMovieFromId);
router.get("/", getAllMovies);
router.post("/create", upload.single("image"), createMovie);
router.patch("/edit", upload.single("image"), editMovie);
router.post("/favorite", addToFavoriteMovie);
router.delete("/:id", deleteMovie)


export default router;
