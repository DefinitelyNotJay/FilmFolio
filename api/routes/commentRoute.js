import express from "express"
import { getCommentFromMovieId, removeCommentMovie, addCommentMovie, getCommentFromUserId, getCountFromId } from "../controllers/commentController.js"

const router = express.Router()

router.get("/count/:userId", getCountFromId)
router.get("/movie/:movie_id", getCommentFromMovieId)
router.get("/user/:user_id", getCommentFromUserId)
router.post("/create", addCommentMovie)
router.delete("/remove/:commentId/:userId", removeCommentMovie)
// router.get("/:id", getCommentsFromId)
// router.post("/create", createComment)


export default router