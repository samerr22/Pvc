import express from "express";
import { verifyToken } from "../../utils/VerfiyUser.js";
import {
    LowItemInfrom,
  deletesupplier,
  getAlladvertisment,
  getAllcartt,
  getsupplier,
} from "../../controllers/supplierManger/supplier.controller.js";

const router = express.Router();

router.get("/getallout", getAllcartt);
router.post("/advertisment", LowItemInfrom);
router.get("/outstock", getAlladvertisment);
router.get("/supplier", getsupplier);
router.delete("/sup/:supplierId",deletesupplier);



export default router;