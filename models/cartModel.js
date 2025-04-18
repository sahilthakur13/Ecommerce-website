
const mongoose =  require('mongoose');

const cartSchema = mongoose.Schema({
    imageurl:{
        type:String,
        required:true,
    },
   name:{
    type: String,
    required: true,
   },
   price:{
    type: String,
    required:true,
   },
   category:{
    type:String,
    required: true,
   },
   createdBy:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'products',
   }
},
{timestramps: true})

module.exports = mongoose.model('cart',cartSchema);