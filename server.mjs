
// import { readFileSync } from 'fs'; // for data reading
// import express from 'express';

// import { readFileSync } from 'fs';
import fs, {readFileSync, readFile, writeFile } from 'fs';

import path from 'path';
import url from 'url'
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
 
 


import express from 'express';

const app = express();
const port = 3000;
app.use(express.json()); // middleware
const posts = JSON.parse(readFileSync(`${__dirname}/data/posts.mjs`));

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
  res.status(200).json({
      status: 'success',
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

// app.get('/api/v1/posts', getAllPosts )
// app.post('/api/v1/posts', CreatePost);
// app.get('/api/v1/posts/:id', getPost )
// app.patch('/api/v1/posts/:id', updatePost)
// app.delete('/api/v1/posts/:id', deletePost)

app
.route('/api/v1/posts')
.get(getAllPosts)
.post(CreatePost);

app
.route('/api/v1/posts/:id')
.get(getPost)
.patch(updatePost)
.delete(deletePost)








app.listen(port, () => {
    console.log(`App running on port ${port}...`);
})