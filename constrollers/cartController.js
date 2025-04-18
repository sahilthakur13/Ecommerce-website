const products = require('../models/productModel');
const cartProduct = require('../models/cartModel');

async function handleAddToCartProduct(req,res){
    const {name,price ,category,imageurl} = await products.findOne({_id: req.params.id});
    await cartProduct.create({
      imageurl,
      name,
      price,
      category,
      createdBy:req.user.id,
  }); 
  
  return res.redirect('/home');
   }
   
   async function handleGetCart(req,res){
    try {
      const myCart = await cartProduct.find({createdBy:req.user.id});
    return res.render('cartProduct',({
      cart : myCart
    }))
    } catch (error) {
      console.error(error.message)
    }
   }
 module.exports={
  handleAddToCartProduct,
    handleGetCart,
 }