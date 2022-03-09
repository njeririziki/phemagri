import React, {useEffect,useState} from 'react'
import {Tag,Card} from 'antd'
import Grid from '../elems/Grid';
import List from '../elems/List'
import Table from '../elems/Expandable';
import Radial from '../elems/Radial'
import axios from 'axios'
import '../../styles/components.css'

const totals=[
    {title:'Revenue', number: 134543,color:'#00c853', percent:'50'},
    {title: 'Invoiced', number: 234225, color:'#e91e63', percent:'30'},
    {title: 'New Clients', number:34,color:'#4dd0e1', percent:'12'}, 
    {title: 'Accounts ', number: 134,color:'#ff7043', percent:'8'}, 
  ]
  const data=[
    { id:'33462',  name:'Teaji  Fertilisers Ltd'},
    {id:'37312', name: ' Geray Agribusiness Ltd'},
    { id:'39212',  name: ' Cesay Equipment Ltd'},
    { id:'33902',  name: ' CLay Seeds Ltd'},
    { id:'49212',  name: ' Waky Machinery Ltd'},
    { id:'34902',  name: ' CPlar Ltd'},
    { id:'39412',  name: ' Yevwa Ltd'},
    { id:'33942',  name: ' Poela Ltd'},
]
  const columns = [
    { title: 'Farmer', dataIndex: 'client', key: 'client',  },
    { title: 'Product ', dataIndex: 'number', key: 'number ',  sortOrder: 'descend',
     responsive: ['sm'] },
    { title: ' Date ', dataIndex: 'date', key: 'date',  
    sortOrder: 'descend',
    responsive: ['md'] },
    { title: 'Amount', dataIndex: 'amount', key: 'amount', 
    defaultSortOrder:'descend',
    sorter: (a,b)=> a.amount - b.amount,
    responsive: ['sm']},
    {
        title: 'Progress',
        key: 'status',
        dataIndex: 'status',
        render: (tag,color)=> {
              if (tag === 'Partial') {
                color = 'volcano';
              } else { color ='green'}
              return (
                <Tag color={color} key={tag}>
                  {tag}
                </Tag>
              );
            }
         
       , responsive: ['md'],
       filters: [
        {
          text: 'Funded',
          value: 'Funded',
        },
        {
          text: 'Open',
          value: 'Open',
        },
      ],
      onFilter: (value, record) => record.status.indexOf(value) === 0,
      },
      {
        title: 'Action', key: 'action',
        render: (text, record) => (  
          <a>Fund</a>
           
          ), 

      },
    
  ];
  const tableData =[
    { key: 0,
      client: 'Sheridan',
     number: 6788,
      date: '12/2/2021',
      amount: 12783,
      status: 'Partial',
    },
    { 
      key:1,
      client: 'Brandon',
      number: 8765,
      date: '17/2/2021',
      amount: 15783,
      status: 'Funded',
    },
    { 
      key: 2,
      client: 'Gerald',
      number: 5368,
      date: '14/2/2021',
      amount: 32243,
      status: 'Partial',
    },
    
    { 
      key:3,
      client: 'Brandon',
      number: 9345,
      date: '18/2/2021',
      amount: 45703,
      status: 'Funded',
    }]


const Financier =()=>{

    return(
        <div className='root'>
          <div style={{marginRight:'20px'}} className='gridroot'>
          <Card title= 'Market Performance'>
          <Radial/>
          </Card>
          <List header='Top Brands' data={data}   pageSize={5} action='Order' />
          </div>
         
         <Table title='Top Farmers' data={tableData}  columns={columns} />
       
        </div>
        )
  
}

export default Financier;
