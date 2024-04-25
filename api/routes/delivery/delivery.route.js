import express from "express";
import {
    addDriver,
  currentdriver,
 
  deletedriver,
  drivercreate,
  getAlldiver,
} from "../../controllers/DeliveryManagement/Delivery.controller.js";


const router = express.Router();


router.post("/divcreate", drivercreate);
router.get("/get", getAlldiver);
router.delete("/dirver/:dirverId", deletedriver);
router.put("/addriver/:id", addDriver);
router.get('/getformm/:customerId', currentdriver);


export default router;