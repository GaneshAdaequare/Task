import React from "react";
import { FacebookFilled, LinkedinFilled, TwitterOutlined } from '@ant-design/icons';
function BootstrapCard({img,alt,des,name,text}) {
  return (
    <div className="card" style={{width:"18rem",margin:"10px"}}>
      <img src={img} className="card-img-top" alt={alt}/>
      <div className="card-body">
        <p className="card-text text-center">
          {des}
        </p>
        <h6 className="card-text text-center">
          {name}
        </h6>
        <p className="text-center"><span className="m-1"><FacebookFilled/></span><span className="m-1"><LinkedinFilled/></span><span className="m-1"><TwitterOutlined/></span></p>
        <hr style={{width:"60%",color:"orangered",margin:"0 auto"}}/>
        <p style={{textAlign:"center",marginTop:"10px",fontStyle:"italic"}}>{text}</p>
      </div>
    </div>
  );
}
export default BootstrapCard;
