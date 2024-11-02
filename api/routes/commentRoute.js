import express from "express"
import { getCommentFromMovieId, removeCommentMovie, addCommentMovie, getCommentFromUserId } from "../controllers/commentController.js"

const router = express.Router()

router.get("/movie/:movie_id", getCommentFromMovieId)
router.get("/user/:user_id", getCommentFromUserId)
router.post("/create", addCommentMovie)
router.delete("/remove", removeCommentMovie)

export default router