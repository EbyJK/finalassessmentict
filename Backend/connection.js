const mongoose = require("mongoose");
//Write missing code 
mongoose
  .connect(
   "mongodb+srv://ebyjk:atlas1@cluster0.wtupewv.mongodb.net/empapp2?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });
