const express = require("express");
const cors = require("cors");

var empModel =require("./model/employee");
const EmployeeModel = require("./model/employee");
const app = express();
var PORT = 8090;
app.use(express.json());
app.use(cors());
require("./connection");
//Write missing code here

app.post("/add", async (req, res) => {
  try {
    console.log(req.body);
    // const result = await BlogModel(req.body).save();
    await EmployeeModel(req.body).save();
    res.send({ message: "Employee added" });
  } catch (error) {
    console.log(error);
  }
});

// Write GET API Code
app.get("/get",async(req,res)=>{
  try{
      var data=await EmployeeModel.find()
      res.send(data)
  }
  catch{
    console.log(error)
  }

})
app.delete('/remove/:a',async(req,res)=>{
  console.log(req.params.a)
    try{
        var id =req.params.a
        await empModel.findByIdAndDelete(id)
        res.send("data deleted!!")
          }
    catch(error){
      console.log(error)

    }
})
app.put('/edit/:a',async(req,res)=>{
  console.log(req.params.a);
  try{
    var id=req.params.a
        var output =await empModel.findByIdAndUpdate(id,req.body)
        res.send({message:"updated",output})

  }
  catch(error){
    console.log(error)
  }
})

app.listen(PORT, () => {
  console.log(`${PORT} is up and running`);
});
