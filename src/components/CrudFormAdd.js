import React, { useState } from "react";
import { formDataForCrud } from "../data/formData";
import CrudForInput from "./CrudForInput";

function CrudFormAdd({ productsData, setProductsData, record }) {
  
  const [FormData, setFormData] = useState(formDataForCrud);
  const submitHandler = (e) => {
    e.preventDefault();
    const productData = {
      id: getMethod("id"),
      title: getMethod("title"),
      price: getMethod("price"),
      brand: getMethod("brand"),
      discountPercentage: getMethod("discountPercentage"),
      thumbnail: getMethod("thumbnail"),
    };
    function getMethod(name) {
      let [ele] = FormData.filter((l) => l.name === name);
      return ele.value;
    }
    let upData = productsData.map((el) => {
      if (el.id == record.id) {
        return productData;
      } else {
        return el;
      }
    });

    setProductsData(upData);

    console.log("record", record);
    console.log("product", productData);
    console.log("Hello i am executing");
 
  };

  function change(val, obj) {
    let copyOfData = FormData;
    let index = FormData.findIndex((v) => v.id == obj.id);
    copyOfData[index].value = val;
    setFormData(copyOfData);
  }

  return (
    <div>
      <div
        className="signup_container w-100 d-flex justify-content-center "
        style={{ marginBottom: "20px" }}
      >
        <div className="signup_form mt-2 w-30">
          <form onSubmit={submitHandler}>
            {formDataForCrud.map((obj) => (
              <CrudForInput obj={obj} edit={record} change={change} />
            ))}
            <div style={{marginLeft:"60%"}}>
            <button  className='btn btn-danger m-1'>Cancel</button>
            <button
              type="submit"
              className="btn" style={{backgroundColor:"#40ada4",color:'white'}}
              onSubmit={(e) =>submitHandler(e)}
              
            >
              Save
            </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CrudFormAdd;
