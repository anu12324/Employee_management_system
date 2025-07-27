const User = require("./models/User");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
require("dotenv").config();

const userRegister = async () => {
    try {

        await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        const hashPassword = await bcrypt.hash("admin", 10);
        const newUser = new User({
            name: "Admin",
            email: "admin@gmail.com",
            password: hashPassword,
            role: "admin"
        })
        await newUser.save()
    } catch (error) {
        console.log(`Error : ${error}`);
    }
}

userRegister();