import {getProductsDb, getProductDb,addProductDb,deleteProductDb,updateProductDb}from '../model/productsDb.js'


const getProducts = async (req, res) => {
    try {
        const products = await getProductsDb();
        res.json(products);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ message: 'Failed to retrieve products' });
    }
};


const getProduct = async (req, res) => {
    try {
        const productId = req.params.id;
        console.log(productId);
        const product = await getProductDb(productId);
        res.json(product);
    } catch (error) {
        console.error("Error fetching product:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};


const addProduct= async(req, res) => {
    try {let {productName, quantity, amount, category_color, description, productURL} = req.body;
    await addProductDb(productName, quantity, amount, category_color, description, productURL);
    res.send('New product was inserted successfully')
    }
    catch (error) {
        console.error("Error adding product:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}


const deleteProduct= async(req,res) => {
    let {id} = req.body
    await deleteProductDb(req.params.id)
    res.send('Product was deleted successfully')
}

const updateProduct= async (req,res) => {
    let {productName, quantity, amount, category_color, description, productURL} = req.body
    let products = await updatefruitDb(req.params.id)
    productName? productName=productName : productName = products.productName
    quantity? quantity=quantity : quantity = products.quantity
    amount? amount=amount : amount = products.amount
    category_color? category_color=category_color : category_color = products.category_color
    description? description=description : description = products.description
    productURL? productURL=productURL : productURL = products.productURL
   
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