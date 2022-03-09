import React,{useState} from 'react'
import { Grid,Table,Typography,Descriptions} from 'antd';


 const NestedTable =({columns,data,title,pageSize}) => {
    const screens = Grid.useBreakpoint()
    const [expandedRow, setExpandedRow] = useState()
    const onExpand=(expanded,record)=>{
      console.log('it rendered before')
      let keys=[]
      if(expanded){
        keys.push(record.key);
        setExpandedRow(keys);
        console.log('it rendered onExpand')
      }
      console.log('it rendered after')
    }
    return (
      <Table
         //style={{backgroundColor:''}}
        columns={columns}
        expandedRowKeys={expandedRow}
        onExpand={()=>onExpand}
        title={()=>title}
        expandable={{   
         expandedRowRender:  screens.xs? (item=> 
          <Descriptions key={item.key} title='Details' size='small'> 
           {item.location? <p>Location:{item.location}</p>: null}
           <Descriptions.Item label='Account'> {item.client}</Descriptions.Item> 
           {item.name? <Descriptions.Item label='Name'>  {item.name}</Descriptions.Item>: null}
           {item.phone? <Descriptions.Item label='Phone'>  {item.phone}</Descriptions.Item>: null}
           {item.email? <Descriptions.Item label='Email'>  {item.email}</Descriptions.Item>: null}
           {item.reference_number? <Descriptions.Item label='Invoice Number'>  {item.reference_number}</Descriptions.Item>: null}
           {item.due_date? <Descriptions.Item label='Due Date '>{item.due_date}</Descriptions.Item>: ''}
           {item.amount? <Descriptions.Item label='Amount'>{item.amount}</Descriptions.Item>: null}
           {item.status? <Descriptions.Item label='Status'> {item.status}</Descriptions.Item>: ''}
           {item.description? <Descriptions.Item label='Description '> {item.description}</Descriptions.Item>:''}
          </Descriptions>):
           (item=>
            <Descriptions title='Details' >
            <Descriptions.Item label='Description '>{item.description}</Descriptions.Item>
            </Descriptions> )
        }}
        dataSource={data}
        pagination={{pageSize:pageSize}}
      />
    );
  }

  export default NestedTable;