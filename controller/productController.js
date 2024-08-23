import {getProductsDb, getProductDb,addProductDb,deleteProductDb,updateProductDb}from '../model/productsDb.js'


// const getProducts = async (req, res) => {
//     try {
//         const products = await getProductsDb();
//         res.json(products);
//     } catch (error) {
//         console.error('Error fetching products:', error);
//         res.status(500).json({ message: 'Failed to retrieve products' });
//     }
// };

const getProducts = async (req, res) => {
    try {
        const products = await getProductsDb();

        if (!products || products.length === 0) {
            // No products found, return a 200 status code with an appropriate message
            return res.status(200).json({ message: 'No products found' });
        }

        // Products retrieved successfully
        res.status(200).json(products);
    } catch (error) {
        console.error('Error fetching products:', error);

        if (error instanceof BadRequestError) {
            // Handle client-side errors, e.g., invalid request parameters
            return res.status(400).json({ message: 'Bad Request: Invalid parameters' });
        } else {
            // Handle server-side errors
            return res.status(500).json({ message: 'Failed to retrieve products' });
        }
    }
};



// const getProduct = async (req, res) => {
//     try {
//         const productId = req.params.id;
//         console.log(productId);
//         const product = await getProductDb(productId);
//         res.json(product);
//     } catch (error) {
//         console.error("Error fetching product:", error);
//         res.status(500).json({ message: "Internal Server Error" });
//     }
// };

const getProduct = async (req, res) => {
    try {
        const productId = req.params.id;
        console.log(`Fetching product with ID: ${productId}`);
        
        // Validate productId (optional but recommended)
        if (!productId || isNaN(productId)) {
            return res.status(400).json({ message: "Invalid Product ID" });
        }

        const product = await getProductDb(productId);

        if (!product) {
            // Product not found, return a 404 status code
            return res.status(404).json({ message: "Product not found" });
        }

        // Product retrieved successfully
        res.status(200).json(product);
    } catch (error) {
        console.error("Error fetching product:", error);

        if (error instanceof BadRequestError) {
            // Handle client-side errors, e.g., invalid request parameters
            return res.status(400).json({ message: "Bad Request: Invalid parameters" });
        } else {
            // Handle server-side errors
            return res.status(500).json({ message: "Internal Server Error" });
        }
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

// const addProduct = async (req, res) => {
//     try {
//         // Destructure and validate the request body
//         let { productName, quantity, amount, category_color, description, productURL } = req.body;

//         // Basic validation for required fields
//         if (!productName || !quantity || !amount || !category_color || !description || !productURL) {
//             return res.status(400).json({ message: "All fields are required" });
//         }

//         // Additional validation (e.g., check if quantity and amount are numbers)
//         if (isNaN(quantity) || isNaN(amount)) {
//             return res.status(400).json({ message: "Quantity and amount must be valid numbers" });
//         }

//         // Insert the new product into the database
//         await addProductDb(productName, quantity, amount, category_color, description, productURL);
        
//         // Send a success response
//         res.status(201).json({ message: 'New product was inserted successfully' });
//     } catch (error) {
//         console.error("Error adding product:", error);

//         // Handle specific types of errors (optional)
//         if (error instanceof ValidationError) {
//             return res.status(400).json({ message: "Invalid product data" });
//         } else {
//             // Handle server-side errors
//             return res.status(500).json({ message: "Internal Server Error" });
//         }
//     }
// };


const deleteProduct= async(req,res) => {
    let {id} = req.body
    await deleteProductDb(req.params.id)
    res.send('Product was deleted successfully')
}

// const deleteProduct = async (req, res) => {
//     try {
//         const { id } = req.body;

//         // Validate the provided ID
//         if (!id || isNaN(id)) {
//             return res.status(400).json({ message: "Invalid or missing Product ID" });
//         }

//         // Attempt to delete the product from the database
//         const result = await deleteProductDb(id);

//         if (result.affectedRows === 0) {
//             // No rows affected, meaning the product wasn't found
//             return res.status(404).json({ message: "Product not found" });
//         }

//         // Product deleted successfully
//         res.status(200).json({ message: "Product was deleted successfully" });
//     } catch (error) {
//         console.error("Error deleting product:", error);

//         // Handle server-side errors
//         res.status(500).json({ message: "Internal Server Error" });
//     }
// };


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

// const updateProduct = async (req, res) => {
//     try {
//         const { productName, quantity, amount, category_color, description, productURL } = req.body;
//         const { id } = req.params;

//         // Validate the provided ID
//         if (!id || isNaN(id)) {
//             return res.status(400).json({ message: "Invalid or missing Product ID" });
//         }

//         // Fetch the current product data from the database
//         const existingProduct = await getProductDb(id);

//         if (!existingProduct) {
//             // Product not found
//             return res.status(404).json({ message: "Product not found" });
//         }

//         // Determine the updated values, falling back to existing values if new ones aren't provided
//         const updatedProduct = {
//             productName: productName || existingProduct.productName,
//             quantity: quantity || existingProduct.quantity,
//             amount: amount || existingProduct.amount,
//             category_color: category_color || existingProduct.category_color,
//             description: description || existingProduct.description,
//             productURL: productURL || existingProduct.productURL
//         };

//         // Update the product in the database
//         await updateProductDb(id, updatedProduct);

//         // Send a success response
//         res.status(200).json({ message: "Product updated successfully" });
//     } catch (error) {
//         console.error("Error updating product:", error);
//         res.status(500).json({ message: "Internal Server Error" });
//     }
// };


export {getProducts,getProduct,addProduct,deleteProduct,updateProduct}