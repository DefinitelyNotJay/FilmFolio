import express from "express"
import { browseComments, createComment, getCommentsFromId } from "../controllers/commentController.js"

const router = express.Router()

router.get("/", browseComments)
router.get("/:id", getCommentsFromId)
router.post("/create", createComment)


export default router