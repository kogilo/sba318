
import fs, {readFileSync, readFile, writeFile } from 'fs';
import path from 'path';
import url from 'url'
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import express from 'express';
import morgan from 'morgan';// 3rd party middleware
const app = express();
const port = 3000;

// 1. MIDDLEWARES
app.use(morgan('dev'))
app.use(express.json()); 
// Create our own middleware
app.use((req, res, next) => {
  console.log('Hello from the middleware 👍');
  next();
})
app.use((req, res, next) =>{
  req.requestTime = new Date().toISOString();
  next();
})


// 2. ROUTES HANDLERS

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

// app.get('/api/v1/posts', getAllPosts )
// app.post('/api/v1/posts', CreatePost);
// app.get('/api/v1/posts/:id', getPost )
// app.patch('/api/v1/posts/:id', updatePost)
// app.delete('/api/v1/posts/:id', deletePost)




// 3. ROUTES

app
.route('/api/v1/posts')
.get(getAllPosts)
.post(CreatePost);

app
.route('/api/v1/posts/:id')
.get(getPost)
.patch(updatePost)
.delete(deletePost)


// 4. START SERVER

app.listen(port, () => {
    console.log(`App running on port ${port}...`);
})