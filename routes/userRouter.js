import {getUsers,getUser,addUser,deleteUser,updateUser,loginUser} from '../controller/usersController.js'
import express from 'express'
import { checkUser} from '../middleware/authenticate.js'

const routerUsers = express.Router()

routerUsers.get('/getUsers', getUsers)

routerUsers.get('/getUser/:id', getUser)

routerUsers.post('/addUser', addUser)

routerUsers.post('/login',checkUser, loginUser)

routerUsers.delete('/:id',deleteUser)

routerUsers.patch('/:id', updateUser)

export{routerUsers}

