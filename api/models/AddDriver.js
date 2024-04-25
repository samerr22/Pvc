import mongoose from 'mongoose';

const AddDriverSchema = new mongoose.Schema(
  {

    customerId: {
        type: String,
        required: true,
       
      },

    title: {
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
     
      quantity: {
        type: String,
        required: true,
      },
      totalprice: {
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
      age: {
        type: String,
        required: true,
      },
      Exprince: {
          type: String,
          required: true,
        },
      contact: {
          type: Number,
          required: true,
        },

   
    
    
  },
  { timestamps: true }
);

const  AddDriver = mongoose.model('AddDriver',  AddDriverSchema);

export default   AddDriver;