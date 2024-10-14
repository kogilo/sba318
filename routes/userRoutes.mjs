import express from "express"
// import router from "router"
// const router = express.Router()

// const router = express.Router()


const getAllUsers = (req, res) => {
    res.status(500).json({
      satus: 'error',
      message: 'This route is not yet defined'
    })
  }
  
  
  const getUser = (req, res) => {
    res.status(500).json({
      satus: 'error',
      message: 'This route is not yet defined'
    })
  }
  
  
  
  const createUser = (req, res) => {
    res.status(500).json({
      satus: 'error',
      message: 'This route is not yet defined'
    })
  }
  
  
  
  const updateUser = (req, res) => {
    res.status(500).json({
      satus: 'error',
      message: 'This route is not yet defined'
    })
  }
  
  const deleteUser = (req, res) => {
    res.status(500).json({
      satus: 'error',
      message: 'This route is not yet defined'
    })
  }


  
  
  const router = express.Router();  

  
router
.route('/')
.get(getAllUsers)
.post(createUser)

router
.route('/:id')
.get(getUser)
.patch(updateUser)
.delete(deleteUser)


export default router;

// module.exports = router