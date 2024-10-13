
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

// app.get('/', (req, res) => {
//     res.status(200).json({message: 'Hello from server side...', app: 'natour',node: 'JS env'}
//                         );})
// app.post('/', (req, res) =>{
//     res.send(`You can post to this endpoint...`);
// })
const posts = JSON.parse(readFileSync(`${__dirname}/data/posts.mjs`));
app.get('/api/v1/posts', (req, res) =>{
    res.status(200).json({
        status: 'success',
        result: posts.length,
        data: {
          posts
        }
    })
})


app.get('/api/v1/posts/:id', (req, res) =>{
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
})


app.patch('/api/v1/posts/:id', (req, res) => {
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
})



app.delete('/api/v1/posts/:id', (req, res) => {
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
})




app.post('/api/v1/posts', (req, res) =>{
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
});





app.listen(port, () => {
    console.log(`App running on port ${port}...`);
})