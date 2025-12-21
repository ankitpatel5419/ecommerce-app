




















// import React, { useContext } from 'react'
// import { ShopContext } from '../context/ShopContext'
// import Title from '../components/Title';

// const Order = () => {

//   const{products , currency } = useContext(ShopContext);

//   return (
//     <div className='border-t pt-16'>

//       <div className='text-2xl'>
//         <Title text1={'MY'} text2={'ORDER'}/>
//       </div>

//       <div>
//         {
//           products.slice(1,4).map( (item , index) => (
//             <div key={index} className='py-4 border-t border-b text-gray-700 flex flex-col md:items-center md:justify-between gap-4 '> 
//                 <div className='flex items-start gap-6 text-sm'>
//                   <img className='w-16 sm:w-20' src={item.image[0]} alt="" />
//                   <div>
//                     <p className='sm:text-base font-medium'>{item.name} </p>
//                     <div className='flex items-center gap-3 mt-2 text-base text-gray-700'>
//                       <p className='text-lg'>{currency}{item.price}</p>
//                       <p>Quantity: 1</p>
//                       <p>Size: M</p>
//                     </div>
//                     <p className='mt-2'>Date: <span className=' text-gray-400 '>25 ,july ,2025</span></p>
//                   </div>
//                 </div>

//             </div>
//           ))
//         }
//       </div>

//     </div>
//   )
// }

// export default Order










// import React, { useContext } from 'react';
// import { ShopContext } from '../context/ShopContext';
// import Title from '../components/Title';
// import { useState } from 'react';
// import { useEffect } from 'react';
// import axios from 'axios';

// const Order = () => {
//   const {  currency ,backendUrl , token } = useContext(ShopContext);

//   const [orderData , setOrderData] = useState([])

//   const loadOrderData = async() =>{
//     try {
//       if(!token){
//         return null
//       }

//       const response = await axios.post(backendUrl + '/api/order/userorders' , {} , {headers:{token}})
//       if(response.data.success){
//         let allOrdersItem = []
//         response.data.orders.map(() =>{
//           order.item.map((item) =>{
//             item['status'] = Order.status
//             item['payment'] = Order.payment
//             item['paymentMethod'] = Order.paymentMethod
//             item['date'] = Order.date
//             allOrdersItem.push(item)


//           })

//         })
//        setOrderData(allOrdersItem.reverse())
//       }
      
//     } catch (error) {
      
//     }
//   }

//   useEffect(() =>{
//     loadOrderData()
//   },[token])

//   return (
//     <div className="border-t pt-16">

//       <div className="text-2xl">
//         <Title text1="MY" text2="ORDER" />
//       </div>

//       <div className="mt-6">
//         {orderData.map(item => (
//           <div
//             key={item._id}
//             className="py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
//           >
//             {/* Left side */}
//             <div className="flex items-start gap-6 text-sm">
//               <img className="w-16 sm:w-20" src={item.image[0]} alt={item.name} />

//               <div>
//                 <p className="sm:text-base font-medium">{item.name}</p>

//                 <div className="flex items-center flex-wrap gap-3 mt-2 text-base text-gray-700">
//                   <p className="text-lg">{currency}{item.price}</p>
//                   <p>Quantity: 1</p>
//                   <p>Size: M</p>
//                 </div>

//                 <p className="mt-2">
//                   Date: <span className="text-gray-400">25 July 2025</span>
//                 </p>
//               </div>
//             </div>
//             <div className='md:w-1/2 flex justify-between'>
//               <div className='flex items-center gap-2'>
//                 <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
//                 <p className='text-sm md:text-base '>Ready to ship</p>
//               </div>
//               <button className='border px-4 py-2 text-sm font-medium rounded-sm'>Track Order</button>

//             </div>
          
//           </div>
//         ))}
//       </div>

//     </div>
//   );
// };

// export default Order;









// import React, { useContext } from 'react'
// import { ShopContext } from '../context/ShopContext'
// import Title from '../components/Title';

// const Order = () => {

//   const { products, currency } = useContext(ShopContext);

//   return (
//     <div className="border-t pt-16">

//       <div className="text-2xl">
//         <Title text1="MY" text2="ORDER" />
//       </div>

//       <div className="mt-6">
//         {products.slice(1, 4).map(item => (
          
//           <div 
//             key={item._id}
//             className="py-4 border-t border-b text-gray-700 flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
//           >

//             {/* LEFT SECTION */}
//             <div className="flex gap-4 items-start w-full md:w-2/3">
//               <img 
//                 src={item.image[0]} 
//                 alt={item.name} 
//                 className="w-20 h-20 object-cover rounded"
//               />

//               <div className="text-sm">
//                 <p className="text-base font-medium">{item.name}</p>

//                 <div className="flex flex-wrap gap-3 mt-2">
//                   <p className="font-semibold">{currency}{item.price}</p>
//                   <p>Quantity: 1</p>
//                   <p>Size: M</p>
//                 </div>

//                 <p className="mt-2">
//                   Date: <span className="text-gray-500">25 July 2025</span>
//                 </p>
//               </div>
//             </div>

//             {/* RIGHT SECTION */}
//             <div className="w-full md:w-auto text-sm text-gray-600">
//               <p>Status: <span className="text-green-600 font-medium">Delivered</span></p>
//             </div>

//           </div>

//         ))}
//       </div>

//     </div>
//   )
// }

// export default Order;



// import { useContext } from 'react';
// import { ShopContext } from '../context/ShopContext';
// import Title from '../components/Title'


// const Orders = () => {
//   const { orders, products, currency } = useContext(ShopContext);

//   // Function to format the current date
//   const formatDate = (date) => {
//     const options = { day: '2-digit', month: 'short', year: 'numeric' };
//     return date.toLocaleDateString('en-US', options);
//   };

//   // Get the current date
//   const currentDate = formatDate(new Date());

//   return (
//     <div className="pt-16 border-t">
//       <div className="mb-3 text-2xl">
//         <Title text1={'MY'} text2={'ORDERS'} />
//       </div>

//       {orders.length === 0 ? (
//         <p className="text-gray-500">You have no orders.</p>
//       ) : (
//         <div>
//           {orders.map((order, index) => {
//             const productData = products.find(
//               (product) => product._id === order._id
//             );

//             return (
//               <div
//                 key={index}
//                 className="py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between g4"
//               >
//                 <div className="flex items-start gap-6">
//                   <img
//                     src={productData.image[0]}
//                     alt=""
//                     className="w-16 sm:w-20"
//                   />

//                   <div>
//                     <p className="sm:text-base font-medium">
//                       {productData.name}
//                     </p>

//                     <div className="flex items-center gap-5 mt-2 text-base text-gray-700">
//                       <p>
//                         {currency}
//                         {productData.price}
//                       </p>
//                       <p>Quantity: {order.quantity}</p>
//                       <p>Size: {order.size}</p>
//                     </div>
//                     <p className="mt-2">
//                       Date: <span className="text-gray-400">{currentDate}</span>
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex justify-between md:w-1/2">
//                   <div className="flex items-center gap-2">
//                     <p className="min-w-2 h-2 rounded-full bg-green-400"></p>
//                     <p className="text-sm md:text-base">Ready to ship</p>
//                   </div>
//                   <button className="border px-4 py-2 text-sm font-medium rounded-sm text-gray-700">
//                     Track Order
//                   </button>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Orders;





































import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import axios from 'axios';

const Order = () => {
  const { currency, backendUrl, token } = useContext(ShopContext);
  const [orderData, setOrderData] = useState([]);

  const loadOrderData = async () => {
    try {
      if (!token) return;

      const response = await axios.post(
        backendUrl + '/api/order/userorders',
        {},
        { headers: { token } }
      );

      if (response.data.success) {
        let allItems = [];

        response.data.orders.forEach(order => {
          order.items.forEach(item => {
            allItems.push({
              ...item,
              status: order.status,
              payment: order.payment,
              paymentMethod: order.paymentMethod,
              date: order.date,
            });
          });
        });

        setOrderData(allItems.reverse());
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadOrderData();
  }, [token]);

  return (
    <div className="border-t pt-16">
      <div className="text-2xl">
        <Title text1="MY" text2="ORDER" />
      </div>

      <div className="mt-6">
        {orderData.map((item, index) => (
          <div
            key={index}
            className="py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          >
            {/* Left side */}
            <div className="flex items-start gap-6 text-sm">
              <img className="w-16 sm:w-20" src={item.image[0]} alt={item.name} />

              <div>
                <p className="sm:text-base font-medium">{item.name}</p>

                <div className="flex items-center flex-wrap gap-3 mt-2 text-base text-gray-700">
                  <p className="text-lg">
                    {currency}
                    {item.price}
                  </p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Size: {item.size}</p>
                </div>

                <p className="mt-2">
                  Date:{' '}
                  <span className="text-gray-400">
                    {new Date(item.date).toDateString()}
                  </span>
                </p>
                   <p className="mt-2">
                    Payment:
                  <span className="text-gray-400">
                    { (item.paymentMethod)}
                  </span>
                </p>
              </div>
            </div>

            {/* Right side */}
            <div className="md:w-1/2 flex justify-between">
              <div className="flex items-center gap-2">
                <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
                <p className="text-sm md:text-base">{item.status}</p>
              </div>
              <button onClick={loadOrderData} className="border px-4 py-2 text-sm font-medium rounded-sm">
                Track Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Order;
