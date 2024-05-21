import React,{useState} from 'react';

import {useNavigate} from 'react-router-dom';
import TableAnt from './TableAnt';
function TableD({td}) {
  const navigateTo=useNavigate();
  const [dataSource,setDataSource]=useState(td);
  function deleteRow(record){
    let upData=dataSource.filter((i)=>i.email !==record.email);
    localStorage.setItem("myData",JSON.stringify(upData));
    setDataSource(upData);
  }
  function editRow(record){
    console.log(record);
    navigateTo('/login',{state:record})
    
  }


    const columns=[{key:"0",title:"action",render:(record)=>{
      return(
        <>
        <button onClick={()=>editRow(record)}>edit</button>
        
        <button onClick={()=>deleteRow(record)}>delete</button>
 
        </>
      )
    }},
    {key:"1",title:"firstname",dataIndex:"firstname"},
    {key:"2",title:"lastname",dataIndex:"lastname"},
    {key:"3",title:"email",dataIndex:"email"}
]
  return (
    <div>
        <TableAnt data={dataSource} col={columns}/>
        
    </div>
  )
}

export default TableD;
