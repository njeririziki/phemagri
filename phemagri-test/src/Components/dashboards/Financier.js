import React, {useEffect,useState} from 'react'
import {Tag,Card} from 'antd'
import List from '../elems/List'
import Table from '../elems/Expandable';
import Radial from '../elems/Radial'
import '../../styles/components.css'


  const data=[
    { id:'33462',  name:'Vegetables' },
    {id:'37312', name: ' Fruits'  },
    { id:'39212',  name: 'Cereals' },
    { id:'33902',  name: ' Wheat', },
    { id:'49212',  name: ' Maize', },
    { id:'34902',  name: ' Tea leaves', },
    { id:'39412',  name: ' Coffee',},
    { id:'33942',  name: ' Cashew Nuts',},
]
  const columns = [
    { title: 'Farmer', dataIndex: 'client', key: 'client',  },
    { title: 'Product ', dataIndex: 'product', key: 'product ',  sortOrder: 'descend',
     responsive: ['sm'] },
    { title: ' Date Posted', dataIndex: 'date', key: 'date',  
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
     product: 'Sugarcane',
      date: '12/2/2022',
      amount: 1278300,
      status: 'Partial',
    },
    { 
      key:1,
      client: 'Brandon',
      product: 'Maize',
      date: '17/2/2022',
      amount: 1578300,
      status: 'Funded',
    },
    { 
      key: 2,
      client: 'Gerald',
      product: 'Barley',
      date: '14/2/2022',
      amount: 3224300,
      status: 'Partial',
    },
    
    { 
      key:3,
      client: 'Brandon',
      product: 'Vegetables',
      date: '18/2/2022',
      amount: 457030,
      status: 'Funded',
    }]


const Financier =()=>{

    return(
        <div className='root'>
          <div className='gridroot'>
          <Card title= 'Market Performance'>
          <Radial/>
          </Card>
          <div className='sidelist'>
          <List header='Top Selling Products' data={data}   pageSize={4} action='Invest' />
          </div>
          </div>
         
         <Table title='Top Farmers' data={tableData}  columns={columns} />
       
        </div>
        )
  
}

export default Financier;
