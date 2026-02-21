const mongoose = require('mongoose');

async function connectDB(){
    const mongoUri = process.env.MONGO_URI;

    if(!mongoUri){
        console.error("Mongo URI is not defined.");
    }

    try{
        await mongoose.connect(mongoUri);
        console.log("Database connected successfully");
    }
    catch(error){
        console.error("Error connecting to database:", error);
    }

}

module.exports = connectDB;