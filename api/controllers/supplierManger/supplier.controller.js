import Outofstock from "../../models/outofStockForm.js";
import Lowitem from "../../models/Lowitems.js";
import User from "../../models/user.model.js";

//get all outofstock form 
export const getAllcartt = async (req, res, next) => {
    try {
      const Items = await Outofstock.find();
  
      if (Items.length > 0) {
        res.json({ message: "Items details retrieved successfully", Items });
      } else {
        return next(errorHandle(404, " Items not fonud "));
      }
    } catch (error) {
      console.log(error.message);
  
      next(error);
    }
  };

  //low items advertisement
  export const LowItemInfrom = async (req, res, next) => {
    
  
    const {  contactN,  wantdate, desc} = req.body;
  
    const newProduct = new Lowitem({
        
      
     
      contactN,
    
      wantdate,
      desc


    });
    try {
      const savedproduct = await newProduct.save();
      res.status(201).json(savedproduct);
    } catch (error) {
      next(error);
    }
  };

  //get all Advertisment
 export const getAlladvertisment = async (req, res, next) => {
  try {
    const Items = await Lowitem.find();

    if (Items.length > 0) {
      res.json({ message: "Items details retrieved successfully", Items });
    } else {
      return next(errorHandle(404, " Items not fonud "));
    }
  } catch (error) {
    console.log(error.message);

    next(error);
  }
};


//get all suplier
export const getsupplier = async (req, res, next) => {
  try {
      // Query users with employee role set to true
      const supplier = await User.find({ supplier: true });

      // Send the response
      res.json(supplier);
  } catch (error) {
      // Handle errors
      next(error);
  }
};

//delete employee
export const deletesupplier = async (req, res, next) => {
  
  try {
    await User.findByIdAndDelete(req.params.supplierId);
    res.status(200).json("The product has been deleted");
  } catch (error) {
    next(error);
  }
};

//add new supliar done in auth funtion 


 