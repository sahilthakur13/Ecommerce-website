const express = require("express");
const {checkForAuthentication,restrictTO} = require('../middlewares/auth');
const Product=  require('../models/productModel');
const router = express.Router();

router.get('/home',checkForAuthentication,async(req,res)=>{
  
 try {
  const filter = req.query.category;
  const Query ={};
  if(filter && filter !== ''){
    Query.category = filter
  }
  const UserRole = req.user.role;
  const allProducts = await Product.find(Query);
  return res.render('home',{
    allProducts: allProducts,
    UserRole:UserRole,
  });
 } catch (error) {
      throw error
 }
});

router.get("/signup", (req, res) => {
    return res.render("signup");
  });

router.get("/login", (req, res) => {
    return res.render("login");
  });
  // router.get('/product',(req,res)=>{
  //   return res.render('yourproduct')
  // });
  router.get('/create',checkForAuthentication,restrictTO(['ADMIN']),(req,res)=>{
    return res.render('createPRO')
  });
  
  router.get('/logout',function(req,res){
    res.cookie('token','');
    return res.redirect('/login');
  });

  
  module.exports = router;