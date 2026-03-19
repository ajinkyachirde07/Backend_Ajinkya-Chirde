import express from "express";
import dotenv from "dotenv"
dotenv.config();
import connectDB from "./utils/db.js";



const app = express();
const port = 3000;

import userRoute from "./routes/user.routes.js";



app.use(express.json());


app.use("/api/v1/user", userRoute);


app.get('/',(req, res) => {
   res.send('hello world')
})

app.listen(port, () => {
  connectDB();
  console.log(`Server running at port ${port}`);
});