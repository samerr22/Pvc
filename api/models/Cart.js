import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema(
  {

    customerId: {
        type: String,
        required: true,
       
      },
  
    
    price: {
      type: String,
      required: true,
    },
    image: {
        type: String,
        required: true,
      },
      desc: {
        type: String,
        required: true,
      },
      quantity: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      address: {
        type: String,
        required: true,
      },
      phoneN: {
        type: String,
        required: true,
      },

      
   
    
    
  },
  { timestamps: true }
);

const cart = mongoose.model('cart', cartSchema);

export default cart;