const express = require('express');
const router = express.Router();
const {handleAddToCartProduct,handleGetCart} = require('../constrollers/cartController');
const cartProduct = require('../models/cartModel');

router.get('/:id',handleAddToCartProduct);
router.get('/',handleGetCart);
router.get('/delete/:id',async(req,res)=>{
    await cartProduct.findOneAndDelete({_id:req.params.id});
   return res.status(400),res.redirect('/cartRouter');
 });

module.exports= router;