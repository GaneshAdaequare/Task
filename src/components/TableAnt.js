import React from 'react'
import {Table} from 'antd';

function TableAnt({data,col}) {
  return (
    <div>
        <Table dataSource={data} columns={col}/>
      
    </div>
  )
}

export default TableAnt
