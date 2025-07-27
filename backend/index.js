const express = require("express");
const cors = require("cors");
const connnectToDatabase = require("./db/db");
const authRouter = require("./routes/auth");

require("dotenv").config();
const app = express();
app.use(express.json());
app.use(cors());
connnectToDatabase();
app.use('/api/auth', authRouter);

const PORT = process.env.PORT || 8000; 
app.listen(PORT, () => {
    console.log(`Server running on port : ${PORT}`);
});
