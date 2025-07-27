const mongoose = require("mongoose");
require("dotenv").config();
const User = require("./models/User");

const checkUsers = async () => {
    await mongoose.connect(process.env.MONGODB_URL);
    const users = await User.find({});
    console.log(users);
    process.exit();
};

checkUsers();
