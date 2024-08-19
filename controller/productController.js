import {getProductsDb, getProductDb,addProductDb,deleteProductDb,updateProductDb}from '../model/productsDb.js'

const getProducts = async (req, res) => {
    res.json(await getProductsDb());
}

const getProduct= async(req,res) => {
    console.log(req.params.id);
    res.json(await getProductDb(req.params.id))
}

const addProduct= async(req, res) => {
    let [instrument_id, instrumentName, quantity, instrument_price, colorCategory, description, instrument_urlt] = req.body;
    await addProductDb();
    res.send('New product was inserted successfully')
}

const deleteProduct= async(req,res) => {
    let [id] = req.body
    await deleteProductDb(req.params.id)
    res.send('Product was deleted successfully')
}

const updateProduct= async (req,res) => {
    let {instrumentName, quantity, instrument_price, colorCategory, description, instrument_url} = req.body
    let products = await updatefruitDb(req.params.id)
    instrumentName? instrumentName=instrumentName : instrumentName = products.instrumentName
    quantity? quantity=quantity : quantity = products.quantity
    instrument_price? instrument_price=instrument_price : instrument_price = products.instrument_price
    colorCategory? colorCategory=colorCategory : colorCategory = products.colorCategory
    description? description=description : description = products.description
    instrument_url? instrument_url=instrument_url : instrument_url = products.instrument_url
   
    await updateProductDb(req.params.id,)
    res.send('Update was successful');
}

// const addToCart = async (req,res) => {
//     console.log(req.body);
//     let user_ID = await getUserDb()
//     // await addToCartDb(req.body.id,)
//     res.json({message:"You've added an item to cart"})
//     console.log('you have added to your cart');
    
// }

export {getProducts,getProduct,addProduct,deleteProduct,updateProduct}