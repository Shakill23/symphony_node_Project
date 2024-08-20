import express from 'express';
import {router} from './routes/productRoutes.js'
import { routerUsers } from './routes/userRouter.js';
import cors from 'cors';

let port = process.env.PORT ||7070
const app = express()

app.use(cors())

// app.use(cors({
//     origin: 'http://localhost:8081',
//     credentials:true
// }))

app.use(express.json())
app.use(express.static('public'))

app.use('/products', router)
app.use('/users', routerUsers)

app.listen(port,()=>{
    console.log('http://localhost:'+ port);
})
