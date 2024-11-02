import express from "express"
import { browseComments, createComment, getCommentsFromId,gatCountCommentsFromId } from "../controllers/commentController.js"

const router = express.Router()

router.get("/", browseComments)
router.get("/count/:userId", gatCountCommentsFromId)
router.get("/:id", getCommentsFromId)
router.post("/create", createComment)


export default router