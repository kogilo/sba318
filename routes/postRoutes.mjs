import path from 'path';
import url from 'url'
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import express from "express";
import postControllers from "./../controllers/postControllers.mjs";

// import router from "express/lib/router";

import { checkId } from './../controllers/postControllers.mjs';
import { checkBody } from './../controllers/postControllers.mjs';
const router = express.Router();

router.param('id', checkId);

// Create a chechBody widdleware
// Chexck if body contains the title and content
// if not, send back 400 (bad request)
router
.route('/')
.get(postControllers.getAllPosts)
.post(checkBody, postControllers.createPost);

router
.route('/:id')
.get(postControllers.getPost)
.patch(postControllers.updatePost)
.delete(postControllers.deletePost)

export default router;
// module.exports = router;
// module.exports = router;

// const postRoutes = { /* Your route handlers or functions here */ };

// export default postRoutes;
