// import { readFileSync } from 'fs'; // for data reading
// import express from 'express';
import path from 'path';
import url from 'url'
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
 
 
import { readFileSync } from 'fs';
import express from 'express';

const app = express();
const port = 3000;

// app.get('/', (req, res) => {
//     res.status(200).json({message: 'Hello from server side...', app: 'natour',node: 'JS env'}
//                         );})
// app.post('/', (req, res) =>{
//     res.send(`You can post to this endpoint...`);
// })
const posts = JSON.parse(readFileSync(`${__dirname}/data/posts.mjs`));
app.get('/api/v1/comments', (req, res) =>{
    res.status(200).json({
        status: 'success',
        result: posts.length,
        data: {
          posts
        }
    })
})




app.listen(port, () => {
    console.log(`App running on port ${port}...`);
})