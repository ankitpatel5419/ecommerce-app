import express from 'express'
import adminAuth from '../middleware/adminAuth.js'
import authUser from '../middleware/auth.js'

import { placeOrder , placeOrderStripe ,placeOrderRazorpay ,allOrders , updateStatus, userOrders ,verifyStripe} from '../controllers/orderController.js'

const orderRouter = express.Router()

// Admin feature
orderRouter.post('/list' ,adminAuth , allOrders)
orderRouter.post('/status' , adminAuth , updateStatus)

// payment Feature
orderRouter.post('/place' , authUser , placeOrder)
orderRouter.post('/stripe' , authUser , placeOrderStripe)
orderRouter.post('/razorpay' , authUser , placeOrderRazorpay)

// user feature
orderRouter.post('/userorders' , authUser , userOrders)

// verify payment 
orderRouter.post('/verifyStripe' , authUser ,verifyStripe)

export default orderRouter;