import path from 'path';
import url from 'url'
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


import fs, {readFileSync, readFile, writeFile } from 'fs';

const posts = JSON.parse(readFileSync(`${__dirname}/../data/posts.mjs`));


// const router = express.Router()

export const checkId = (req, res, next, val) => {
  
  console.log(`Post id is ${val}`);
  if(req.params.id * 1 > posts.length) {
    return res.status(404),express.json({
        status: 'fail',
        message: 'Invalid ID'
    });
}
  next();
}

export const checkBody = (req, res, next, val) => {
  
  console.log(`Post id is ${val}`);
  if(!req.body.title || !req.body.content) {
    return res.status(400),express.json({
        status: 'fail',
        message: 'Missing title or content'
    });
}
  next();
}


export const deletePost = (req, res) => {
    
  res.status(204).json({
    status: 'success',
    data: null
  })
  }
  
  export const updatePost = (req, res) => {
  
    
  res.status(200).json({
    status: 'success',
    data: {
      tour: '<Updated post here...'
    }
  })
  }

  
  export const getAllPosts = (req, res) =>{
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
  
  export const getPost = (req, res) =>{
    console.log(req.params)
  
    const id = req.params.id * 1; //convert id to number.
    const post = posts.find(el => el.id === id);
  
   
    
    res.status(200).json({
        status: 'success',
        data: {
            posts
        }
    })
  }
  
  export const createPost = (req, res) =>{
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
  
  export default {getAllPosts, getPost, updatePost, createPost, deletePost};