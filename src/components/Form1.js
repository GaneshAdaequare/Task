import React, { useState} from "react";
import Input1 from "./Input1";
import { formData } from "../data/formData";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
function Form({setTd, td}) {
  const locate=useLocation();
  const editData=locate.state;
  
const[FormData,setFormData] = useState(formData)
  const navigateTo=useNavigate();
  const submitHandler=(e)=>{
    e.preventDefault();
    const emailreg = /^\S+@\S+\.\S+$/;
    const passwordReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z0-9@$&*]{8,}$/;
    const updatedData=[...FormData];
    updatedData.forEach((item)=>{
      switch(item.name){
        case "firstname":
        case "lastname":
          if(item.value ===""){
            item.error=true;
            item.errorMessage=`${item.name} should not be empty`; 
          }else{
            item.error=false;
            item.errorMessage=``;
          }
          break;
        case "email":
          if(item.value ===""){
            item.error=true;
            item.errorMessage=`${item.name} should not be empty`;
          }else if(!emailreg.test(item.value)){
            item.error=true;
            item.errorMessage=`${item.name} is not valid`;
          }
          else{
            item.error=false;
            item.errorMessage=``;
          }
          break;
        case "password":
          if(item.value===""){
            item.error=true;
            item.errorMessage=`${item.name} should not be empty`;
          }else if(!passwordReg.test(item.value)){
            item.error=true;
            item.errorMessage=`${item.name} is not valid`;
          }
          else{
            item.error=false;
            item.errorMessage=``; 
          }
          break;
        default:
          if(item.value===""){
            item.error=true;
            item.errorMessage=`${item.name} is not valid`;
          }else{
            item.error=false;
            item.errorMessage=``;
          }
      }
      setFormData(updatedData)
    })
    
    const userData={
      firstname:getMethod("firstname"),
      lastname:getMethod("lastname"),
      email:getMethod("email"),
      password:getMethod('password'),
    }
    function getMethod(name){
      let [ele]=formData.filter((l)=>l.name===name);
      return ele.value;
    }
    const v=FormData.some((item)=>item.error);
    
    
    const index = td.findIndex((x)=>x.email === userData.email)

    if(!v){
      console.log(userData);
      if(index=== -1){
        setTd((prev)=>[...prev,userData]);
        navigateTo('/table');
        console.log(FormData);
      } else {
        let arr = td;
        arr[index] = userData;
        setTd(arr);
        navigateTo('/table');
      }
    }else{
      alert("data is not valid")
      
    }

    
  }
  return (
    <div className="signup_container w-100 d-flex justify-content-center " style={{marginBottom:"20px"}}>
      <div className="signup_form mt-2 w-30">
      <form onSubmit={submitHandler}>
        {formData.map((obj,index) => <Input1 key={index} edit={editData} obj={obj}/>
        )}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      </div>
    </div>
  );
}
export default Form;
