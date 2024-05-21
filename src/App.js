import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Form1 from "./components/Form1";
import NotFound from "./components/NotFound";
import "./App.css";
import React, { useState } from "react";
import TableD from "./components/TableD";
import Products1 from "./data/Products1";

import {Routes,Route} from "react-router-dom";
import CrudTable from "./components/CrudTable";
import CrudForModal from "./components/CrudForModal";

function App() {

  const[td,setTd] = useState([])
  return (
    <div className="containers">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/login" element={<Form1 td={td} setTd={setTd}/>}/>
        <Route path="/table" element={<TableD td={td}/>}/>
        <Route path='/table1' element={<Products1/>}/>
        <Route path='/etable' element={<CrudTable/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer/>
      
    </div>
  );
}

export default App;
