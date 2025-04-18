 const products = require('../models/productModel');
 async function handleProductCreate(req,res){
        const {name,price ,desc,category} = req.body;
          await products.create({
            imageurl: req.file.filename,
            name,
            price,
            desc,
            category,
        });    
        return res.redirect('/allProducts'); 
 };

 module.exports={
    handleProductCreate,
 }