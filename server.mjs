

import express from 'express';
import morgan from 'morgan';// 3rd party middleware
const app = express();
const port = 3000;

import postRouter from "./routes/postRoutes.mjs";
import userRouter from "./routes/userRoutes.mjs";

// import fooData from './foo.json' with { type: 'module' };

// 1. MIDDLEWARES


// 2. ROUTES HANDLERS


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

// 3. ROUTES


app.use('/api/v1/posts', postRouter);
app.use('/api/v1/users', userRouter)

// 4. START SERVER

app.listen(port, () => {
    console.log(`App running on port ${port}...`);
})


// module.exports = app;