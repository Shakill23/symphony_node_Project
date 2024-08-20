import { pool } from "../config/config.js";
// import { config } from "dotenv";
// config()

const getProductsDb = async () => {
    let [data] = await pool.query('SELECT * FROM products')
    return data
}

const getProductDb = async (id) => {
    let [[data]] =  await pool.query('SELECT * FROM products WHERE productID = ?',[id])
    return data
}


const addProductDb = async (productName, quantity, amount, category_color, description, productURL) => {
    let [data] = await pool.query(`INSERT INTO products (productName, quantity, amount, category_color, description, productURL) VALUES(?,?,?,?,?,?) `,
    [productName, quantity, amount, category_color, description, productURL]  
    )   
}

const deleteProductDb = async(id) => {
    let [data] = await pool.query(
        `DELETE FROM products WHERE productID = ?`, [id] 
    )
};

const updateProductDb = async(productID, productName, quantity, amount, category_color, description, productURL) => {
    await pool.query(
        `UPDATE products SET productID =?, productName=?, quantity=?, amount=?, category_color=?, description=?, productURL=?`, [productID, productName, quantity, amount, category_color, description, productURL] 
    )
};

// const addToCartDb = async (fruit_ID, user_ID) => {
//     await pool.query (`INSERT INTO cart (fruit_ID, user_ID) VALUES(?,?) `,
//     [fruit_ID, user_ID] )
// }


export {getProductsDb, getProductDb,addProductDb,deleteProductDb,updateProductDb}