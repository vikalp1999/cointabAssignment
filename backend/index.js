require("dotenv").config();
const express= require("express");
const cors= require("cors");
const connect = require("./src/config/db");
const Auth = require("./src/routes/user.route")

const PORT= process.env.PORT;


const app= express();
app.use(cors());
app.use(express.json());


app.use("/",Auth)




app.listen(PORT,async()=>{
    await connect();
    console.log(`listening at http://localhost:${PORT}`)
})

