const express = require('express');
const app = express();
const PORT = 5000;
const {dbconnection} = require('./connect');
const  cookie = require('cookie-parser');
const path = require('path');
const userRouter =  require('./routes/userRouter');
const staticRouter = require('./routes/staticRouter');
const createProductRoute = require('./routes/productRouter');
const allYourProduct = require('./routes/yourproduct');
const {checkForAuthentication,restrictTO}= require('./middlewares/auth')
const cartRouter = require('./routes/cartRoute')

//db
dbconnection('mongodb://127.0.0.1:27017/e-commerce-app');

//set ejs 
app.set('view engine', 'ejs');
app.set('views',path.resolve('./views'));

app.use(express.static('views'));

app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(cookie());

//routes
app.use('/',staticRouter);
app.use('/users',userRouter);
app.use('/create',checkForAuthentication,restrictTO(['ADMIN']),createProductRoute);
app.use('/allProducts',checkForAuthentication,allYourProduct);
app.use('/cartRouter',checkForAuthentication,cartRouter);

// for images only 
app.use(express.static('./uploads'));

// server 
app.listen(PORT,()=> console.log(`Server Started at ${PORT}`))