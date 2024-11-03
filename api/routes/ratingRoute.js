import express from "express"
import { addRatingMovie, getRatingFromMovieId, removeRatingMovie, getRatingFromUserId,  getRatingFromMovieAndUserId } from "../controllers/ratingController.js"

const router = express.Router()

// router.get("/user/:user_id/:movie_id", getRatingFromMovieAndUserId)
router.get("/rating/:movie_id", getRatingFromMovieId)
router.get("/user/:user_id", getRatingFromUserId)
router.post("/create", addRatingMovie)
router.get("/", getRatingFromMovieAndUserId)
router.delete("/remove/:rating_id", removeRatingMovie)

export default router