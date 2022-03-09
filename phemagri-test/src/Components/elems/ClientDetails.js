import React, {useEffect,useState}from 'react'
import {Card,Avatar,Typography,Tooltip,Menu,Dropdown, Button} from 'antd'
import {Edit3,MoreHorizontal,Plus, User} from 'react-feather'
import { UserOutlined } from '@ant-design/icons';

const Dets=({details})=>(
    <div>
    <Avatar style={{ width:'200px',height:'200px', backgroundColor:'#000000',marginBottom:'20px'}}
    src={details.photo} icon={<UserOutlined/>} />
    
    <Typography.Title level={4}>
    {details.name}
    </Typography.Title>
    <Typography.Text>
    {details.description} 
    </Typography.Text>
    </div>
   
)
const Edit=({details})=>(
    <div>
 
    <Typography.Title level={4}>
    {details.name} 
    </Typography.Title>
    <Typography.Text>
    {details.description} 
    </Typography.Text>
    <Typography.Text>
    {details.email} 
    </Typography.Text>
   
    </div>

)
const {Meta}= Card
const {Item}= Menu
const tablist=[
    {key:'front', tab: <User/>},
    {key:'edit', tab: <Edit3/>}
]


const ClientDetails = ({details,id}) => {
 
    const [key, setKey] = useState('front')
    const ActionMenu=(

        <Menu style={{ width: 250 }}>
            <Item>    Vendors </Item>
            <Item >  Input Providers </Item>
            <Item> Financiers </Item>
          
        </Menu>
        )
        const content={
            front: <Dets details={details}/>,
             edit:<Edit details={details}/>
         }
    return (
        <div style ={{width:'300px',height:'470px',marginRight:'20px'}}>
         <Card 
         style={{  display:'flex', flexDirection:'column', justifyContent:'center'}}
         tabList={tablist}
      
         activeTabKey={key}
         //defaultActiveTabKey='details'
         onTabChange={key=> setKey(key)}
         actions={[
           
            <Tooltip title="Add profile">
                 <Button icon={ <Plus/>} ></Button>,
              </Tooltip>,
            <Tooltip title="Import Products">
              <Dropdown overlay={ActionMenu}>
                  <MoreHorizontal/>
              </Dropdown>       
               </Tooltip>
              
         ]}>
      
        {content[key]}
        </Card>   

        </div>
    )
}

export default ClientDetails
