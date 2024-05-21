import { useState, useEffect } from "react";
import { GetService } from "../services/Services";
import TableAnt from "../components/TableAnt";

const api = "https://dummyjson.com/products";
function Products1() {
    const [productsData, setProductsData] = useState(null);
    useEffect(()=>{
      getData();
    },[])
    function getData(){
      GetService(api)
      .then(res=>setProductsData(res.data.products))
      .catch(err => console.log(err))
    }
    const columns=[{key:"1",title:"ID",dataIndex:"id"},
    {key:"2",title:"Name",dataIndex:"title"},
    {key:"3",title:"Price",dataIndex:"price"},
    {key:"4",title:"Brand",dataIndex:"brand"},
    {key:"5",title:"Rating",dataIndex:"rating"}
]
    return (
        <div>
            <h1>Data fetching</h1>
            <TableAnt data={productsData} col={columns}/>
            {/* <Table dataSource={productsData} columns={columns}/> */}
        </div>
    );
}
export default Products1;
