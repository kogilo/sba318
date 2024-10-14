import path from 'path';
import url from 'url'
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import express from "express";
import fs, {readFileSync, readFile, writeFile } from 'fs';

const posts = JSON.parse(readFileSync(`${__dirname}/../data/posts.mjs`));




// const router = express.Router()


const deletePost = (req, res) => {
    if(req.params.id * 1 > posts.length) {
        return res.status(404),express.json({
            status: 'fail',
            message: 'Invalid ID'
        });
    }
    
  res.status(204).json({
    status: 'success',
    data: null
  })
  }
  
  const updatePost = (req, res) => {
    if(req.params.id * 1 > posts.length) {
        return res.status(404),express.json({
            status: 'fail',
            message: 'Invalid ID'
        });
    }
    
  res.status(200).json({
    status: 'success',
    data: {
      tour: '<Updated post here...'
    }
  })
  }
  
  const getAllPosts = (req, res) =>{
    console.log(req.requestTime);
    res.status(200).json({
        status: 'success',
        requestedAt: req.requestTime,
        result: posts.length,
        data: {
          posts
        }
    })
  }
  
  const getPost = (req, res) =>{
    console.log(req.params)
  
    const id = req.params.id * 1; //convert id to number.
    const post = posts.find(el => el.id === id);
  
    // if(id > tours.length) {
     if(!posts) {
        return res.status(404),express.json({
            status: 'fail',
            message: 'Invalid ID'
        });
    }
    
    res.status(200).json({
        status: 'success',
        data: {
            posts
        }
    })
  }
  
  const CreatePost = (req, res) =>{
    // console.log(req.body);
    const newId = posts[posts.length -1].id +1;
    const newPost = Object.assign({id: newId
  
    }, req.body);
  
    posts.push(newPost);
    fs.writeFile(`${__dirname}/data/posts.mjs`, JSON.stringify(posts), err => {
        res.status(201).json({
            status: "success",
            data: {
                post: newPost
            }
        })
  
    });
  }
  


// import router from "express/lib/router";

const router = express.Router();
router
.route('/')
.get(getAllPosts)
.post(CreatePost);

router
.route('/:id')
.get(getPost)
.patch(updatePost)
.delete(deletePost)

export default router;
// module.exports = router;

// const postRoutes = { /* Your route handlers or functions here */ };

// export default postRoutes;
