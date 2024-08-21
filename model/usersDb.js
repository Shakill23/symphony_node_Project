import { pool } from "../config/config.js";
import { config } from "dotenv";
config()

const getUsersDb = async () => {
    let [data] = await pool.query('SELECT * FROM users')
    return data
}

const getUserDb = async (id) => {
    let [[data]] =  await pool.query('SELECT * FROM users WHERE userID = ?', [id])
    return data
}

const getUserDbByEmail = async (emailAdd) => {
    let [[data]] = await pool.query('SELECT * FROM users WHERE emailAdd =?' , [emailAdd])
    return data
}

const addUserDb = async (firstName, lastName, userAge, gender, userRole, emailAdd, userPass, userProfile) => {
    let [data] = await pool.query(`INSERT INTO users (firstName, lastName, userAge, gender, userRole, emailAdd, userPass, userProfile) VALUES(?,?,?,?,?,?,?,?) `,
    [firstName, lastName, userAge, gender, userRole, emailAdd, userPass, userProfile]  
    )   
}

const deleteUserDb = async(id) => {
    let [data] = await pool.query(
        `DELETE FROM users WHERE userID = ?`, [id] 
    )
};

const updateUserDb = async (firstName, lastName, userAge, gender, userRole, emailAdd, userPass, userProfile,id) => {
    await pool.query('UPDATE users SET firstName = ?, lastName = ?, userAge = ?, gender = ?, userRole = ?, emailAdd = ?, userPass = ?, userProfile = ? WHERE userID =?', [firstName, lastName, userAge, gender, userRole, emailAdd, userPass, userProfile, id])
}

// const addToCartDb = async (fruit_ID, user_ID) => {
//     await pool.query (`INSERT INTO cart (fruit_ID, user_ID) VALUES(?,?) `,
//     [fruit_ID, user_ID] )
// }


export {getUsersDb, getUserDb,addUserDb,deleteUserDb,updateUserDb,getUserDbByEmail}