import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const PlaceOrder = () => {

   const [method , setMethod] = useState('cod');
   const {navigate , backendUrl , token , cartItems , setCartItems , getCartAmount , delivery_fee , products } = useContext(ShopContext);


   const [formData , setFormData] = useState({
    firstName:'',
    lastName:'',
    email:'',
    street:'',
    city:'',
    state:'',
    zipcode:'',
    country:'',
    phone:''
   })

   const onChangeHandler = (event) =>{
        const name = event.target.name;
        const value = event.target.value

        setFormData(data => ({...data , [name]:value}))
    }

   const onSubmitHandler = async (event) =>{
      event.preventDefault()

      try {
        
        let orderItems = []

        for(const items in cartItems){
          for(const item in cartItems[items]){
            if (cartItems[items][item] > 0) {
               const itemInfo = structuredClone(products.find(products => products._id === items))
               if(itemInfo){
                itemInfo.size = item
                itemInfo.quantity = cartItems[items][item]
                orderItems.push(itemInfo)
               }
              
            }
          }
        }
        console.log(orderItems);

        let orderData = {
          address: formData,
          items: orderItems,
          amount : getCartAmount() + delivery_fee
        }

        switch(method){

          // API call for cod
          case 'cod':
            const response = await axios.post(backendUrl + '/api/order/place' , orderData ,{headers:{token}})
            if (response.data.success) {
              setCartItems({})
              navigate('/order')
            }else{
              toast.error(response.data.message)
            }

           break;

           case 'stripe':
            const responseStripe = await axios.post(backendUrl + '/api/order/stripe' , orderData , {headers:{token}})
            if (responseStripe.data.success) {
              const {session_url} = responseStripe.data
              window.location.replace(session_url)
            }else{
              toast.error(responseStripe.data.message)
            }

          default:
            break;
        }


      } catch (error) {
        console.log(error)
        toast.error(error.message)
        
      }
   }

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      {/* ------------Left side ----------- */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>

        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={'DELIVERY'} text2={'INFORMATION'}/>
        </div>
        <div className='flex gap-3'>
            <input required onChange={onChangeHandler} name='firstName' value={formData.firstName} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='First Name' />
             <input required onChange={onChangeHandler} name='lastName' value={formData.lastName} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Last Name' />
        </div>

          <input required onChange={onChangeHandler} name='email' value={formData.email} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="email" placeholder='Email address' />
          <input required onChange={onChangeHandler} name='street' value={formData.street} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Street' />

         <div className='flex gap-3'>
            <input required onChange={onChangeHandler} name='city' value={formData.city} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='City' />
             <input required onChange={onChangeHandler} name='state' value={formData.state} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='State' />
         </div>

          <div className='flex gap-3'>
            <input required onChange={onChangeHandler} name='zipcode' value={formData.zipcode}  className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='PinCode' />
             <input onChange={onChangeHandler} name='country' value={formData.country} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Country' />
         </div>

         <input required onChange={onChangeHandler} name='phone' value={formData.phone} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Phone' />

        

      </div>


      {/* ----------- Right Side ------------ */}
      <div className='mt-8'>
        <div className='mt-8  min-w-80'>
          <CartTotal/>
        </div>
        <div className='mt-12'>
          <Title text1={'PAYMENT'} text2={'METHOD'}/>
          {/* -----------Payment method selection ---------- */}
          <div className='flex gap-3 flex-col  lg:flex-row'>
            <div onClick={() => setMethod('stripe')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-400' : ''} `}>  </p>
                <img  className='h-5 mx-4' src={assets.stripe_logo} alt="" />            
            </div>
             <div onClick={() => setMethod('razorpay')}  className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full   ${method === 'razorpay' ? 'bg-green-400' : ''}  `}>  </p>
                <img  className='h-5 mx-4' src={assets.razorpay_logo} alt="" />            
            </div>
             <div onClick={() => setMethod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full  ${method === 'cod' ? 'bg-green-400' : ''}  `}>  </p>
                <p className='text-gray-300 text-sm font-medium mx-4'>CASH ON DELIVERY</p>      
            </div>
          </div>

        <div className='w-full text-end mt-8 '>
          <button type='submit'  className='bg-black text-white px-16 py-3 text-sm'>PLACE ORDER</button>
        </div>

        </div>
      </div>
    </form>
  )
}

export default PlaceOrder
























// import React, { useContext, useState } from 'react'
// import Title from '../components/Title'
// import CartTotal from '../components/CartTotal'
// import { assets } from '../assets/assets'
// import { ShopContext } from '../context/ShopContext'
// import axios from 'axios'
// import { toast } from 'react-toastify'

// const PlaceOrder = () => {

//   const [method, setMethod] = useState('cod');
//   const { navigate, backendUrl, token, cartItems, setCartItems, getCartAmount, delivery_fee, products } = useContext(ShopContext);

//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     street: '',
//     city: '',
//     state: '',
//     zipcode: '',
//     country: '',
//     phone: ''
//   });

//   const onChangeHandler = (e) => {
//     setFormData({...formData, [e.target.name]: e.target.value});
//   };

//   const onSubmitHandler = async (event) => {
//     event.preventDefault();

//     // Prevent empty order
//     if (!Object.keys(cartItems).length) {
//       toast.error("Your cart is empty!");
//       return;
//     }

//     try {
//       let orderItems = [];

//       for (const productId in cartItems) {
//         for (const size in cartItems[productId]) {
//           const quantity = cartItems[productId][size];

//           if (quantity > 0) {
//             const product = products.find(p => p._id === productId);

//             if (!product) continue;

//             orderItems.push({
//               productId: product._id,
//               name: product.name,
//               price: product.price,
//               size,
//               quantity,
//               image: product.image[0]
//             });
//           }
//         }
//       }

//       const orderData = {
//         address: formData,
//         items: orderItems,
//         amount: getCartAmount() + delivery_fee,
//         method
//       };

//       const response = await axios.post(
//         backendUrl + "/api/order/place",
//         orderData,
//         { headers: { token } }
//       );

//       if (response.data.success) {
//         toast.success("Order placed!");
//         setCartItems({});
//         navigate('/orders');
//       } else {
//         toast.error(response.data.message);
//       }

//     } catch (error) {
//       console.log(error);
//       toast.error("Order failed: " + error.message);
//     }
//   };

//   return (
//     <form onSubmit={onSubmitHandler} className="flex flex-col sm:flex-row gap-4 pt-10 border-t">

//       {/* LEFT SIDE */}
//       <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
//         <Title text1="DELIVERY" text2="INFORMATION" />

//         <div className="flex gap-3">
//           <input required name="firstName" onChange={onChangeHandler} value={formData.firstName} className="border rounded px-3.5 py-2 w-full" placeholder="First Name" />
//           <input required name="lastName" onChange={onChangeHandler} value={formData.lastName} className="border rounded px-3.5 py-2 w-full" placeholder="Last Name" />
//         </div>

//         <input required name="email" onChange={onChangeHandler} value={formData.email} className="border rounded px-3.5 py-2" placeholder="Email" />
//         <input required name="street" onChange={onChangeHandler} value={formData.street} className="border rounded px-3.5 py-2" placeholder="Street" />

//         <div className="flex gap-3">
//           <input required name="city" onChange={onChangeHandler} value={formData.city} className="border rounded px-3.5 py-2 w-full" placeholder="City" />
//           <input required name="state" onChange={onChangeHandler} value={formData.state} className="border rounded px-3.5 py-2 w-full" placeholder="State" />
//         </div>

//         <div className="flex gap-3">
//           <input required name="zipcode" onChange={onChangeHandler} value={formData.zipcode} className="border rounded px-3.5 py-2 w-full" placeholder="Zipcode" />
//           <input name="country" onChange={onChangeHandler} value={formData.country} className="border rounded px-3.5 py-2 w-full" placeholder="Country" />
//         </div>

//         <input required name="phone" onChange={onChangeHandler} value={formData.phone} className="border rounded px-3.5 py-2" placeholder="Phone" />

//       </div>

//       {/* RIGHT SIDE */}
//       <div className="mt-8">
//         <CartTotal />

//         <div className="mt-12">
//           <Title text1="PAYMENT" text2="METHOD" />

//           <div className="flex gap-3 flex-col lg:flex-row">

//             <div onClick={() => setMethod('stripe')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
//               <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-400' : ''}`}></p>
//               <img src={assets.stripe_logo} className="h-5 mx-4" />
//             </div>

//             <div onClick={() => setMethod('razorpay')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
//               <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-green-400' : ''}`}></p>
//               <img src={assets.razorpay_logo} className="h-5 mx-4" />
//             </div>

//             <div onClick={() => setMethod('cod')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
//               <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`}></p>
//               <p className="text-gray-700 text-sm font-medium mx-4">CASH ON DELIVERY</p>
//             </div>

//           </div>

//           <div className="text-right mt-8">
//             <button type="submit" className="bg-black text-white px-16 py-3">PLACE ORDER</button>
//           </div>

//         </div>
//       </div>
//     </form>
//   )
// }

// export default PlaceOrder
