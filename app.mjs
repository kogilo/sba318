import path from 'path';
import url from 'url'
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import express from 'express';
import morgan from 'morgan';// 3rd party middleware
const app = express();


import postRouter from "./routes/postRoutes.mjs";
import userRouter from "./routes/userRoutes.mjs";



// import fooData from './foo.json' with { type: 'module' };

// 1. MIDDLEWARES
console.log(process.env.NODE_ENV);
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

app.use(express.json()); 

app.use(express.static(`${__dirname}/public`));

// Create our own middleware
app.use((req, res, next) => {
  console.log('Hello from the middleware 👍');
  next();
})
app.use((req, res, next) =>{
  req.requestTime = new Date().toISOString();
  next();
})

// 3. ROUTES


app.use('/api/v1/posts', postRouter);
app.use('/api/v1/users', userRouter)

// 4. START SERVER



export default app;