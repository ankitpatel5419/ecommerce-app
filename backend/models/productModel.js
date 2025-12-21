import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    description:{
        type:String,
        required: true
    },
    price:{
        type:Number,
       required: true
    },
    image:{
        type:Array,
        required: true
    },
    category:{
        type:String,
       required: true
    },
    subCategory:{
        type:String,
        required: true
    },
    sizes:{
        type:[String],
       required: true
    },
    bestseller:{
        type:Boolean,
    },
    date:{
        type:Number,
       required: true
    },

})

const productModel =  mongoose.model.product || mongoose.model("product" , productSchema);

export default productModel;





// import mongoose from "mongoose";

// const productSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     description: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     price: {
//         type: Number,
//         required: true,
//         min: 0
//     },
//     category: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     subCategory: {
//         type: String,
//         trim: true
//     },
//     sizes: {
//         type: [String],  // Array of strings like ["S", "M", "L"]
//         default: []
//     },
//     bestseller: {
//         type: Boolean,
//         default: false
//     },
//     image: {
//         type: [String],  // Array of image URLs
//         default: []
//     },
//     date: {
//         type: Date,
//         default: Date.now
//     }
// });

// // Create model
// const productModel = mongoose.model("Product", productSchema);

// export default productModel;
