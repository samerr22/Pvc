import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {

    
    name: {
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
   
    
    
  },
  { timestamps: true }
);

const product = mongoose.model('product', productSchema);

export default product;