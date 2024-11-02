import express from "express"
import { addRatingMovie, getRatingFromMovieId, removeRatingMovie, getRatingFromUserId } from "../controllers/ratingController.js"

const router = express.Router()

router.get("/rating/:movie_id", getRatingFromMovieId)
router.get("/user/:user_id", getRatingFromUserId)
router.post("/create", addRatingMovie)
router.delete("/remove", removeRatingMovie)

export default router