// import React, { useContext, useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import {ShopContext} from '../context/ShopContext';
// import { assets } from '../assets/assets';
// import RelatedProducts from '../components/RelatedProducts';

// const Product = () => {

//   const {productId} = useParams();
//   const {products, currency , addToCart} = useContext(ShopContext);
//   const [productData , setProductData] = useState(false);
//   const [image , setImage] = useState('');
//   const [size, setSize] = useState('')


//   const fetchProductData = async () =>{
     
//     products.map( (item) =>{
//       if(item._id === productId){
//         setProductData(item)
//         setImage(item.image[0])
       
//         return null;
//       }
//     })

//   }

//   useEffect (()=>{
//     fetchProductData();
//   },[productId ])

//   return productData ? (
//     <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100 '>
//      {/*----------- product data -----------*/}
//       <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row '>
//         {/* -----------product imagae----------- */}
//         <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
//           <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between  sm:justify-normal sm:w-[18.7%] w-full'>
//             {
//               productData.image.map((item , index) =>(
//                 <img onClick={() => setImage(item)} src={item } key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursosr-pointer  ' alt="" />
//               ))
//             }
//           </div>
//           <div className='w-full sm:w-[80%]'>
//             <img  className='w-full h-auto ' src={image} alt="" />
//           </div>
//         </div>

//         {/* -----------product info -------- */}
//         <div className='flex-1'>
//           <h1 className='font-medium text- 2xl mt-2'>{productData.name}</h1>
//           <div className='flex items-center gap-1 mt-2'>
//               <img src={assets.star_icon} alt="" className="w3 5" />
//               <img src={assets.star_icon} alt="" className="w3 5" />
//               <img src={assets.star_icon} alt="" className="w3 5" />
//               <img src={assets.star_icon} alt="" className="w3 5" />
//               <img src={assets.star_dull_icon}alt="" className="w3 5" />
//               <p className='pl-2'>(122)</p>             
//           </div>

//           <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
//           <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
//           <div className='flex flex-col gap-4 my-8'>
//             <p>Select Size</p>
//             <div className='flex gap-2'>
//               {
//                 productData.sizes.map((item , index) =>(
//                   <button onClick={() => setSize(item)}  className={`border  py-2 px-4 bg-gray-100  ${item == size ? 'border-orange-500' : ''} `} key={index}  >{item}</button>
//                 ))
//               }
//             </div>
//           </div>
//           <button    onClick={() => addToCart(productData._id , size)}  className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
//           <hr  className='mt-8 sm:w-4/5 '/>
//           <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
//             <p>100% Original product</p>
//             <p>Cash on delivery is available on this product.</p>
//             <p>Easy returnn and exchange policy within 7 days.</p>
//           </div>
//         </div>
//       </div>

//       {/* --------Description & Review Section------------ */}
//         <div className='mt-20'>
//           <div className='flex'>
//             <b className='border px-5 py-3 text-sm '>Description</b>
//             <p className='border px-5 py-3 texxt-sm'>Review (122)</p>
//           </div>

//           <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
//               <p>An e-commerce website is an online platform that facilitates the buying and selling of product or services over the internet . It serves as a virtual marketplace where businesses and individual can shocase their product interact with customer and conduct transaction witour the need for a physical presenece . E-commerence websites have gained immense popularity due to their convenience , accesibiliy  and the global reach they offer.</p>
//               <p>E-commerce website typically display product or servies along with detailed description , image , pricea and any available variation (e.g. sizes , colors etc) Each product usually has its own dedicated page with relavent information</p>
//           </div>
//         </div>

//         {/* ------display related product -------------*/}
//         <RelatedProducts category={productData.category} subcategory={productData.subcategory}/>
//      </div>
//   ) : <div className='opacity-0'></div>
// }

// export default Product








// import React, { useContext, useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { ShopContext } from '../context/ShopContext';
// import { assets } from '../assets/assets';
// import RelatedProducts from '../components/RelatedProducts';

// const Product = () => {
//   const { productId } = useParams();
//   const { products, currency, addToCart } = useContext(ShopContext);

//   const [productData, setProductData] = useState(null);
//   const [image, setImage] = useState('');
//   const [size, setSize] = useState('');

//   // Fetch the product data based on the productId
//   useEffect(() => {
//     if (products && products.length > 0) {
//       const product = products.find((item) => item._id === productId);
//       if (product) {
//         setProductData(product);
//         setImage(product.image[0]);
//       }
//     }
//   }, [productId, products]);

//   if (!productData) {
//     return <div className="opacity-0">Loading product...</div>;
//   }

//   return (
//     <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
//       {/* ----------- Product Data ----------- */}
//       <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
//         {/* Product Images */}
//         <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
//           <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
//             {productData.image?.map((item, index) => (
//               <img
//                 key={index}
//                 onClick={() => setImage(item)}
//                 src={item}
//                 className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
//                 alt={productData.name}
//               />
//             ))}
//           </div>
//           <div className="w-full sm:w-[80%]">
//             <img className="w-full h-auto" src={image} alt={productData.name} />
//           </div>
//         </div>

//         {/* Product Info */}
//         <div className="flex-1">
//           <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
//           <div className="flex items-center gap-1 mt-2">
//             <img src={assets.star_icon} alt="" className="w-3 h-3" />
//             <img src={assets.star_icon} alt="" className="w-3 h-3" />
//             <img src={assets.star_icon} alt="" className="w-3 h-3" />
//             <img src={assets.star_icon} alt="" className="w-3 h-3" />
//             <img src={assets.star_dull_icon} alt="" className="w-3 h-3" />
//             <p className="pl-2">(122)</p>
//           </div>

//           <p className="mt-5 text-3xl font-medium">
//             {currency}
//             {productData.price}
//           </p>

//           <p className="mt-5 text-gray-500 md:w-4/5">{productData.description}</p>

//           {/* Size Selection */}
//           <div className="flex flex-col gap-4 my-8">
//             <p>Select Size</p>
//             <div className="flex gap-2">
//               {productData.sizes?.map((item, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setSize(item)}
//                   className={`border py-2 px-4 bg-gray-100 ${
//                     item === size ? 'border-orange-500' : ''
//                   }`}
//                 >
//                   {item}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <button
//             onClick={() => addToCart(productData._id, size)}
//             className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700"
//           >
//             ADD TO CART
//           </button>

//           <hr className="mt-8 sm:w-4/5" />

//           <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
//             <p>100% Original product</p>
//             <p>Cash on delivery is available on this product.</p>
//             <p>Easy return and exchange policy within 7 days.</p>
//           </div>
//         </div>
//       </div>

//       {/* Description & Review Section */}
//       <div className="mt-20">
//         <div className="flex">
//           <b className="border px-5 py-3 text-sm">Description</b>
//           <p className="border px-5 py-3 text-sm">Review (122)</p>
//         </div>

//         <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
//           <p>
//             An e-commerce website is an online platform that facilitates the buying and selling
//             of products or services over the internet. It serves as a virtual marketplace where
//             businesses and individuals can showcase their products, interact with customers, and
//             conduct transactions without the need for a physical presence.
//           </p>
//           <p>
//             E-commerce websites typically display products or services along with detailed
//             descriptions, images, prices, and any available variations (e.g., sizes, colors,
//             etc.). Each product usually has its own dedicated page with relevant information.
//           </p>
//         </div>
//       </div>

//       {/* Related Products */}
//       <RelatedProducts
//         category={productData.category}
//         subcategory={productData.subcategory}
//       />
//     </div>
//   );
// };

// export default Product;




































// import React, { useContext, useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import { ShopContext } from '../context/ShopContext'
// import { assets } from '../assets/assets'
// import RelatedProducts from '../components/RelatedProducts'

// const Product = () => {
//   const { productId } = useParams();
//   const { products, currency, addToCart } = useContext(ShopContext);

//   const [productData, setProductData] = useState(null);
//   const [image, setImage] = useState('');
//   const [size, setSize] = useState('');

//   useEffect(() => {
//     if (!products || products.length === 0) return;

//     console.log("URL Product ID:", productId);
//     console.log("Available products:", products);

//     const product = products.find(item => item._id === productId);

//     if (product) {
//       setProductData(product);
//       setImage(product.image[0]);
//     } else {
//       console.error("Product not found with ID:", productId);
//     }
//   }, [productId, products]);

//   if (!productData) {
//     return <div className="p-10 text-center text-gray-400">Loading product...</div>
//   }

//   return (
//     <div className="border-t-2 pt-10">
//       <div className="flex gap-12 flex-col sm:flex-row">

//         {/* Product images */}
//         <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
//           <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll sm:w-[20%] w-full">
//             {productData.image?.map((img, index) => (
//               <img
//                 key={index}
//                 onClick={() => setImage(img)}
//                 src={img}
//                 className="w-[24%] sm:w-full sm:mb-3 cursor-pointer"
//               />
//             ))}
//           </div>

//           <div className="w-full sm:w-[80%]">
//             <img className="w-full h-auto" src={image} />
//           </div>
//         </div>

//         {/* Product details */}
//         <div className="flex-1">
//           <h1 className="font-medium text-2xl">{productData.name}</h1>

//           <p className="mt-5 text-3xl font-medium">
//             {currency}{productData.price}
//           </p>

//           <p className="mt-5 text-gray-500">{productData.description}</p>

//           {/* Sizes */}
//           <div className="flex flex-col gap-4 my-8">
//             <p>Select Size</p>
            

//             <div className="flex gap-2">
//               {(productData.sizes ?? productData.size)?.map((item, i) => (
//                 <button
//                   key={i}
//                   onClick={() => setSize(item)}
//                   className={`border py-2 px-4 bg-gray-100 ${item === size ? "border-orange-500" : ""}`}
//                 >
//                   {item}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <button
//             onClick={() => addToCart(productData._id, size)}
//             className="bg-black text-white px-8 py-3"
//           >
//             ADD TO CART
//           </button>
//         </div>
//       </div>

//       <RelatedProducts
//         category={productData.category}
//         subcategory={productData.subcategory}
//       />
//     </div>
//   );
// };

// export default Product;





























import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import RelatedProducts from '../components/RelatedProducts'

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);

  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');

  useEffect(() => {
    if (!products || products.length === 0) return;

    const product = products.find(item => item._id === productId);

    if (product) {
      setProductData(product);
      setImage(product.image[0]);
    } else {
      console.error("Product not found:", productId);
    }
  }, [productId, products]);

  if (!productData) {
    return <div className="p-10 text-center text-gray-400">Loading product...</div>
  }

  // 👇 This ensures we ALWAYS have a sizes array
  const availableSizes = Array.isArray(productData.sizes)
    ? productData.sizes
    : Array.isArray(productData.size)
    ? productData.size
    : productData.size
    ? [productData.size]     // convert "M" into ["M"]
    : [];

  return (
    <div className="border-t-2 pt-10">

      <div className="flex gap-12 flex-col sm:flex-row">

        {/* Product images */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll sm:w-[20%] w-full">
            {productData.image?.map((img, index) => (
              <img
                key={index}
                onClick={() => setImage(img)}
                src={img}
                className="w-[24%] sm:w-full sm:mb-3 cursor-pointer"
              />
            ))}
          </div>

          <div className="w-full sm:w-[80%]">
            <img className="w-full h-auto" src={image} />
          </div>
        </div>

        {/* Product details */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl">{productData.name}</h1>

          <p className="mt-5 text-3xl font-medium">
            {currency}{productData.price}
          </p>

          <p className="mt-5 text-gray-500">{productData.description}</p>

          {/* Sizes */}
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>

            <div className="flex gap-2">

              {availableSizes.length > 0 ? (
                availableSizes.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setSize(item)}
                    className={`border py-2 px-4 bg-gray-100 ${
                      size === item ? "border-orange-500" : ""
                    }`}
                  >
                    {item}
                  </button>
                ))
              ) : (
                <p className="text-red-500">No sizes available</p>
              )}

            </div>
          </div>

          <button
            onClick={() => addToCart(productData._id, size)}
            className="bg-black text-white px-8 py-3"
          >
            ADD TO CART
          </button>
        </div>
      </div>

      <RelatedProducts
        category={productData.category}
        subcategory={productData.subcategory}
      />
    </div>
  );
};

export default Product;
