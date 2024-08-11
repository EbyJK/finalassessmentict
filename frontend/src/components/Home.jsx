import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

import {
  Button,
  Card,
  CardActions,
  CardMedia,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import "../App.css";
import axios from "axios";

const Home = () => {
  var [emp, setemp] = useState([]);
  var navigate =useNavigate();
  useEffect(() => {
    axios.get("http://localhost:8090/get")
      .then((res) => {
        console.log(res.data);
        setemp(res.data);
      })
      .catch((err) => {console.log(err)});
  }, []);
  const delvalue =(id)=>{
   
      console.log(id);
      axios.delete("http://localhost:8090/remove/"+id)
      .then ((res)=>{
        alert(res.data.message)
        window.location.reload()
      })
      .catch((err)=>{
        console.log(err)
      })
    
  }
  const updatevalue=(val)=>{
    console.log("update clicked")
    navigate("/add",{state:{val}});
  }
  return (
    <div className="Mar">
      {/* <Typography variant='h3'>Employees</Typography> */}
      <Grid container spacing={6}>
        {emp.map((val, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Card sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent>
                <img
                  src={val.img_url}
                  className="img-fluid rounded-start"
                  width="100%"
                  alt="image"
                />
                <Typography gutterBottom variant="h5">
                  {val.EmpName}
                </Typography>
                <Typography component="div">{val.designation}</Typography>
                <Typography component="div">{val.empId}</Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "center" }}>
                <Button size="small" variant="contained" color="secondary" onClick={()=>{delvalue((val._id))}}>
                  Delete
                </Button>
                <Button size="small" variant="contained" color="secondary" onClick={()=>{updatevalue((val))}}>
                  Update
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Home;
