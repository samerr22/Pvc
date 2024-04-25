import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv";
import UserRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import studentRoutes from './routes/student.route.js';
import DeliveryRoutes from './routes/delivery/delivery.route.js';
import EmployeRoutes from './routes/employee/employee.route.js';
import InventryRoutes from './routes/inventryRoute/Inventry.route.js';
import SaleRoutes from './routes/saleRoute/Sale.route.js';
import suppplierRoutes from './routes/supplier/supplier.route.js';

import cookieParser from 'cookie-parser';

dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
    console.log('is commd');
})
.catch((err) => {
    console.log(err);
})
const app = express();

app.use(express.json());
app.use(cookieParser());

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})



app.use('/api/user', UserRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/student', studentRoutes);
app.use('/api/delivery', DeliveryRoutes);
app.use('/api/Empl', EmployeRoutes);
app.use('/api/Inventry', InventryRoutes);
app.use('/api/Sale', SaleRoutes);
app.use('/api/supplier', suppplierRoutes);





app.use((err, req, res, next) =>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
})
 