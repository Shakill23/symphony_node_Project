import {getUsers,getUser,addUser,deleteUser,updateUser,loginUser} from '../controller/usersController.js'
import express from 'express'
import { checkUser} from '../middleware/authenticate.js'

const routerUsers = express.Router()

routerUsers.get('/', getUsers)

routerUsers.get('/:id', getUser)

routerUsers.post('/register', addUser)

routerUsers.post('/login',checkUser, loginUser)

routerUsers.delete('/delete/:id',deleteUser)

routerUsers.patch('/update/:id', updateUser)

export{routerUsers}

