import React from 'react';
import { List, Card, Typography, Divider,Grid,Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

 
const FarmersList = ({data,date,header,actions,pageSize,action}) => {

    return ( <div>
        <Card > 
         <List
        header={header}
        dataSource ={data}
       // rowKey={data[0].key}
        pagination={{pageSize:pageSize}}
        renderItem={item=> (
        <List.Item key={item.key}
        actions={[ 
        <a>{action}</a>
        ]}
        >
            <List.Item.Meta 
           avatar={
            <Avatar src={item.avatar} style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
           }
            title={item.name}
            description= {<p> Contact: {item.phone} <br/> {item.email}</p>}
            />
           {/* <div>  
           { item.avatar? <Link href='/client_id' as={`/client_${item.key}`}>
        <a>Manage</a>
        </Link>:'' } 
           </div>
        */}
            </List.Item>)}
            
        /></Card>
       
    </div> );
}
 
export default FarmersList;