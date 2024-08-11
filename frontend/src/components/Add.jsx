import { Box, Button, TextField } from "@mui/material";
import  React,{ useState,useEffect } from "react";
import axios from "axios";
import {  useNavigate,useLocation } from "react-router-dom";

const Add = (props) => {
  const navigate = useNavigate();
  var [inputs, setInputs] = useState({
    EmpName: "",
    designation: "",
    empId:"",
    img_url: ""
  });
  var naviigate=useNavigate()
  var location=useLocation()
  console.log(location.state)



  const inputHandler = (e) => {
    console.log(e.target.value);
    setInputs({ ...inputs, [e.target.name]: e.target.value });
    console.log("in",inputs);
  };
  const AddHandler = () => {
    //Write missing code here
    if(location.state !==null){
      axios.put("http://localhost:8090/edit/"+location.state.val._id,inputs)
      .then((res)=>{
        console.log(res)
        alert(res.data.message)
        navigate('/view')
      })
      .catch((err)=>{
        console.log(err)
      })
    }else{
      axios.post("http://localhost:8090/add",inputs)
      .then((res)=>{
        console.log(res)
        alert(res.data.message)
        navigate('/')
      })
      .catch((err)=>{
        console.log(err)
      })
    }
  };
  useEffect(()=>{
    if(location.state !== null)
      setInputs({
        ...inputs,
        EmpName:location.state.val.EmpName,
        designation:location.state.val.designation,
        empId:location.state.val.empId,
        img_url:location.state.val.img_url,
    
      })
  },[])
  return (
    <div>
      <div>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "90vh",
          }}
        >
          <Box
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              width: "600px",
            }}
          >
            <TextField
              variant="outlined"
              placeholder="Employee Name"
              onChange={inputHandler}
              name="EmpName"
              value={inputs.EmpName}
              fullWidth
            >Name</TextField>
            <TextField
              variant="outlined"
              placeholder="Designation"
              onChange={inputHandler}
              name="designation"
              value={inputs.designation}
              multiline={true}
            >Designation</TextField>
             <TextField
              variant="outlined"
              placeholder="Employee Id"
              onChange={inputHandler}
              name="empId"
              value={inputs.empId}
            >empId</TextField>
            <TextField
              variant="outlined"
              placeholder="Photo(paste any link from the browser)"
              onChange={inputHandler}
              name="img_url"
              value={inputs.img_url}
            >img_url</TextField>
           

            <Button variant="contained" color="secondary" onClick={AddHandler}>
              Submit
            </Button>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default Add;
