// console.clear()
const express=require("express")
const connectDB=require("./config/dbConnect");
const app=express();
require("dotenv").config();

//connect to db
connectDB();
// routes
app.use(express.json());
app.use("/user",require("./routes/user"));
app.use("/card",require("./routes/card"))
app.use("/category",require("./routes/category"))
//connect to server
PORT=process.env.PORT;
app.listen(PORT,(err)=>
err?console.log(err):console.log(`server is running on ${PORT}`)
);