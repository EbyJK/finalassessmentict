
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
//Write missing code here
// import Home from './components/Home'
import Navbar from './components/Navbar'
import Add from './components/Add'
import { useState } from "react";
function App() {
  const [count,setCount]=useState(0);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/view" element={<Home/>} />
      </Routes>
       {/* <Add/> */}
      {/* <View/> */}
    </>
  );
}

export default App;
