import React, {useEffect,useState}from 'react'
import drop from '../../drop.png'
import {Card,Avatar,Typography,Tooltip,Menu,Dropdown, Button} from 'antd'
import {Edit3,MoreHorizontal,Plus, User,Layers} from 'react-feather'
import { UserOutlined } from '@ant-design/icons';
import ProfileUpdate from '../Forms/ProfileUpdate'

const Dets=({details})=>(
    <div>
    <Avatar style={{ width:'200px',height:'200px', backgroundColor:'#000000',marginBottom:'20px'}}
    src={drop} icon={<UserOutlined/>} />
    
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
    {key:'edit', tab: <Layers/>}
]


const ClientDetails = ({details,id}) => {
    const [openProfileForm, setOpenProfileForm] = useState(false)
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
           
            <Tooltip title="Edit profile">
                 <Button icon={ <Edit3/>} 
                 onClick={()=>setOpenProfileForm(true)}
                 ></Button>,
              </Tooltip>,
            <Tooltip title="Import Products">
              <Dropdown overlay={ActionMenu}>
                  <MoreHorizontal/>
              </Dropdown>       
               </Tooltip>
              
         ]}>
      
        {content[key]}
        </Card>   
        <ProfileUpdate visible={openProfileForm} onCancel={()=>setOpenProfileForm(false)} />
        </div>
    )
}

export default ClientDetails
