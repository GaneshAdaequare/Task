import React, { useState, useEffect } from "react";
import { GetService } from "../services/Services";
import TableAnt from './TableAnt';
import CrudForModal from "./CrudForModal";
import CrudFormAdd from "./CrudFormAdd";
import CrudDelete from './CrudDelete';
import {MinusCircleFilled,PlusCircleFilled } from "@ant-design/icons";
const api = "https://dummyjson.com/products";
function CrudTable() {
  const [productsData, setProductsData] = useState(null);
  
  useEffect(() => {
    getData();
  }, []);
  function getData() {
    GetService(api)
      .then((res) => setProductsData(res.data.products))
      .catch((err) => console.log(err));
  }

  const columns = [{
    key:"0",
    title: "Image",
    dataIndex: "thumbnail",
    render : (thumbnail)=>{
        return(
            <img src={thumbnail } width="100px" height="100px" className="resImgCrud"/>
        )
    },
    ellipsis:true,
  
},
    {
    key:"1",
    title:"Title",
    dataIndex :"title",
    ellipsis:true,
},
{
    key:"2",
    title:"Price",
    dataIndex :"price"
},

{
    key:"3",
    title:"Brand",
    dataIndex :"brand",
    responsive:['sm'],
},
{
    key:"4",
    title:"Discount Percentage",
    dataIndex :"discountPercentage",
    responsive:['sm'],
},
{
    key:"5",
    title:"Action",
    render: (record) => {
        return (
          <div className="d-flex gap-1">
          <CrudForModal title="Edit Data">{<CrudFormAdd  productsData={productsData} setProductsData={setProductsData} record={record}/>}</CrudForModal>
          <CrudForModal title='Delete Data'>{<CrudDelete  productsData={productsData} setProductsData={setProductsData} record={record}/>}</CrudForModal>
          </div>
        );
      },
},
]


  return (
    <div >
      <div
        style={{
          width: "98%",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "#3b5066",
          padding: "10px",
          color: "white",
          borderRadius: "5px",
          alignItems: "center",
        }}
      >
        <div>Manage Products</div>
        <div>
          <button className="btn btn-danger">
           
              <MinusCircleFilled />
          
            Delete
          </button>
            <button className="btn btn-success">
            <span>
              <PlusCircleFilled />
            </span>
            Add Product
          </button>
     
        </div>
      </div>
      <div className='tableResponsive'><TableAnt data={productsData} col={columns} /></div>
      
    </div>
  );
}

export default CrudTable;
