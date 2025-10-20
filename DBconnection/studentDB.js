// // config/db.js
// import mongoose from 'mongoose';

// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log('MongoDB connected');
//   } catch (err) {
//     console.error('MongoDB connection error:', err.message);
//     process.exit(1);
//   }
// };

// export default connectDB;


import mongoose from "mongoose";
let connectDB=async(dbstring,dbname)=>{
try {
    await mongoose.connect(dbstring+dbname);
    console.log('Db connected success') //for testing 
} catch (error) {
    console.log('check in db connection');
} 
}
export default connectDB;