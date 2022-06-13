const express = require("express");
const app = express();

// mongoose
const mongoose = require("mongoose");

// .env used
const dotenv = require("dotenv");
// routes fldr use its crct method api used [import user.js]
const userRoute = require("./routes/user");
// routes fldr auth.js import
const authRoute = require("./routes/auth");
// routes fldr product.js import
const productRoute = require("./routes/product");
// routes fldr cart.js import
const cartRoute = require("./routes/cart");
// routes fldr order.js import
const orderRoute = require("./routes/order");

dotenv.config();


mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("DB connection succesfull!"))
.catch((err) => {
    console.log(err);
});

// app.get("/api/ashok", ()=>{
//     console.log("test ashok is sucess");
// })

// before useRoute postman json data post so use json
app.use(express.json());
app.use("/api/auth", authRoute);    // auth api
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);

app.listen(process.env.PORT || 5000, ()=>{
    console.log("Backend server is runing")
})