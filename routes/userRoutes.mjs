import path from 'path';
import url from 'url'
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import express from "express"
// import router from "router"
// const router = express.Router()

// const router = express.Router()

import userControllers from "./../controllers/userControllers.mjs";
  
  const router = express.Router();  

  
router
.route('/')
.get(userControllers.getAllUsers)
.post(userControllers.createUser)

router
.route('/:id')
.get(userControllers.getUser)
.patch(userControllers.updateUser)
.delete(userControllers.deleteUser)


export default router;

// module.exports = router