const mongoose = require("mongoose");

const connnectToDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        // await mongoose.connect("mongodb://localhost:27017/ems");
    } catch (error) {
        console.log(`Connection Error : ${error}`);
    }
}

module.exports = connnectToDatabase;