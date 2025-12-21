// import React from 'react'
// import { useEffect } from 'react'
// import { useState } from 'react'
// import axios from 'axios'
// import {backendUrl} from '../App'
// import {toast} from 'react-toastify'
// import { assets } from '../assets/assets'

// const Orders = ({token}) => {

//   const [orders , setOrders] = useState([])

//   const fetchAllOrders = async () =>{
//     if(!token){
//       return null;
//     }

//     try {
//       const response = await axios.post(backendUrl + '/api/order/list' , {} , {headers:{token}})
//       if(response.data.success){
//         setOrders(response.data.orders)
//       }else{
//         toast.error(response.data.message)
//       }
      
//     } catch (error) {
//       toast.error(error.message)
      
//     }

//   }

//   useEffect( () =>{
//     fetchAllOrders();
//   },[token])


//   return (
//     <div>
//       <h3>Order page</h3>
//       <div>
//         {
//           orders.map((order , index) => (
//             <div key={index}>
//               <img src={assets.parcel_icon} alt="" /> 
//                 <div>
//                   {
//                     order.item.map((item , index) =>{
//                       if(index === order.item.length){
//                         return <p key={index}> {item.name} x {item.quantity} <span>{item.size}</span></p>

//                       }
//                       else{

//                       }
//                     })
//                   }

//                 </div>
              
//             </div>
//           ))
//         }
//       </div>
//     </div>
//   )
// }

// export default Orders






import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { backendUrl, currency } from '../App';
import { toast } from 'react-toastify';
import { assets } from '../assets/assets';

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    if (!token) return;

    try {
      const response = await axios.post( `${backendUrl}/api/order/list`,  {} ,     { headers: { token } }     );
       

      if (response.data.success) {
        setOrders(response.data.orders);
      } else {
        toast.error(response.data.message);
      }
    } 
    catch (error) {
      toast.error(error.message);
    }
  };

  const statusHandler = async(event , orderId) =>{
        try {
          const response = await axios.post(backendUrl + '/api/order/status' , {orderId, status:event.target.value} , {headers:{token}})
          if(response.data.success){
             await fetchAllOrders();
          }

        } catch (error) {
          console.log(error)
          toast.error(response.data.message)
        }
  }

  useEffect(() => {
    fetchAllOrders();
  }, [token]);

  return (
    <div className="p-4">
      <h3 className="text-2xl font-medium mb-4">All Orders</h3>
      <div className="space-y-4">
        {orders.map((order, orderIndex) => (
          <div
            key={orderIndex}
            className="p-4 border rounded flex gap-4 items-start"
          >
            <img src={assets.parcel_icon} alt="Parcel" className="w-12 h-12" />
            <div>
              {order.items.map((item, itemIndex) => (
                <p key={itemIndex}>
                  {item.name} x {item.quantity} <span>Size: {item.size}</span>
                </p>
              ))}

             <p>
        {order.address.firstName} {order.address.lastName}
      </p>
      <p>
        {order.address.street}, {order.address.city}, {order.address.state} - {order.address.zipcode}, {order.address.country}
      </p>
      <p>Phone: {order.address.phone}</p>


              <p className="text-sm text-gray-500 mt-2">
                Status: {order.status} | Payment: {order.payment ? 'Paid' : 'Pending'} | Method: {order.paymentMethod}
              </p>
              <p className="text-sm text-gray-400">
                Date: {new Date(order.date).toLocaleDateString()}
              </p>

                   <p>{currency}{order.amount}</p>
                   <select onChange={(event) => statusHandler(event , order._id)} value={order.status} >
                    <option value="Order Placed ">Order Placed</option>
                    <option value="Packing">Packing</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Out for delivery">Out for delivery</option>
                    <option value="Delivered">Delivered</option>

                   </select>
            </div>
       
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
