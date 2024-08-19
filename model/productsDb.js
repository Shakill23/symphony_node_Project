import { pool } from "../config/config";
import { config } from "dotenv";
config()

const getProductsDb = async () => {
    let [data] = pool.query('SELECT * FROM products')
    return data
}

const getProductDb = async () => {
    let [[data]] =  await pool.query('SELECT * FROM products WHERE record_id = ?' [id])
    return data
}

const addProductDb = async (fruit_name, weight, amount) => {
    let [data] = await pool.query(`INSERT INTO products (instrument_id, instrumentName, quantity, instrument_price, colorCategory, description, instrument_url) VALUES(?,?,?,?,?,?,?) `,
    [instrument_id, instrumentName, quantity, instrument_price, colorCategory, description, instrument_url]  
    )
    
}

const deleteProductDb = async(id) => {
    let [data] = await pool.query(
        `DELETE FROM products WHERE instrument_id = ?`, [id] 
    )
};

const updateProductDb = async(instrument_id, instrumentName, quantity, instrument_price, colorCategory, description, instrument_url) => {
    await pool.query(
        `UPDATE fruits SET instrumentName = ?, quantity = ?, instrument_price = ?, colorCategory = ?, description = ?, instrument_url =?`, [instrument_id, instrumentName, quantity, instrument_price, colorCategory, description, instrument_url] 
    )
};

// const addToCartDb = async (fruit_ID, user_ID) => {
//     await pool.query (`INSERT INTO cart (fruit_ID, user_ID) VALUES(?,?) `,
//     [fruit_ID, user_ID] )
// }


export {getProductsDb, getProductDb,addProductDb,deleteProductDb, updateRecordDb,updateProductDb}