import products from "../models/productModel.js";


// GET ALL PRODUCTS
export const getProducts = (req, res) => {

  res.json(products);
};


// ADD PRODUCT
export const addProduct = (req, res) => {

  const newProduct = req.body;

  products.push(newProduct);

  res.json({
    message: "Product Added Successfully",
    products
  });
};


// DELETE PRODUCT
export const deleteProduct = (req, res) => {

  const id = parseInt(req.params.id);

  const index = products.findIndex(
    product => product.id === id
  );

  if(index !== -1){

    products.splice(index,1);

    res.json({
      message: "Product Deleted Successfully",
      products
    });

  }else{

    res.status(404).json({
      message: "Product Not Found"
    });
  }
};