import {createPool} from 'mysql2/promise'
import { config } from "dotenv";
config()

const pool = createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.PORT
})

export {pool}