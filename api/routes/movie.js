import express from "express";
import { getMovieFromId } from "../controllers/movie.js";

const router = express.Router();

router.get("/:id", getMovieFromId);

export default router;
