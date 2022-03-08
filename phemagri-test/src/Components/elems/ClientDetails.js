import React, {useEffect,useState}from 'react'
import {Card,Avatar,Typography,Tooltip,Menu,Dropdown, Button} from 'antd'
import {EditOutlined,MoreHorizOutlined, BuildOutlined,Person} from '@material-ui/icons'
import OnboardForm from '@/components/Modal/OnboardForm'
import Issuesmodal from '@/components/Modal/IssuesForm'
import AddButton from '@/components/AddButton'
import SubMenu from 'antd/lib/menu/SubMenu'
import {testCategories,vendors,customers,products} from '@/utils/constants'
const Dets=({details})=>(
    <div>
    <Avatar style={{ width:'200px',height:'200px'}}
    src={details.photo}/>
    
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
    {key:'front', tab: <Person/>},
    {key:'edit', tab: <EditOutlined/>}
]


const ClientDetails = ({details,id}) => {
    const [openIssueForm, setOpenIssueForm] = useState(false)
    const [openVendorsForm, setOpenVendorsForm] = useState(false)
    const [openProductsForm, setOpenProductsForm] = useState(false)
    const [openCustomersForm, setOpenCustomersForm] = useState(false)
    const [key, setKey] = useState('front')
    const ActionMenu=(

        <Menu style={{ width: 250 }}>
            <Item onClick={()=>setOpenVendorsForm(true)}>   Import Vendors </Item>
            <Item onClick={()=>setOpenProductsForm(true)}> Import Products </Item>
            <Item onClick={()=>setOpenCustomersForm(true)}>Import Customers </Item>
          
        </Menu>
        )
        const content={
            front: <Dets details={details}/>,
             edit:<Edit details={details}/>
         }
    return (
        <div >
         <Card 
         style={{  display:'flex', flexDirection:'column', justifyContent:'center',}}
         tabList={tablist}
      
         activeTabKey={key}
         //defaultActiveTabKey='details'
         onTabChange={key=> setKey(key)}
         actions={[
           
            <Tooltip title="raise an issue">
                 <AddButton icon={ <BuildOutlined/>}  openModal={()=>setOpenIssueForm(true)}/> ,
              </Tooltip>,
            <Tooltip title="Import Products">
              <Dropdown overlay={ActionMenu}>
                  <MoreHorizOutlined/>
              </Dropdown>
              
               </Tooltip>
              
         ]}>
      
        {content[key]}
        </Card>   
        <Issuesmodal visible={openIssueForm} onCancel={()=>setOpenIssueForm(false)} 
        currentBusinessId='4'/>
        <OnboardForm visible={openVendorsForm} onCancel={()=>setOpenVendorsForm(false)}
            modalTitle={'Vendors'} itemslabel={'List of vendors'}
            apiEndpoint={`vendors`} categories={testCategories}/>
             <OnboardForm visible={openProductsForm} onCancel={()=>setOpenProductsForm(false)}
            modalTitle={'Products'} itemslabel={'List of Products'} categories={testCategories}
            apiEndpoint={`products`}/>
             <OnboardForm visible={openCustomersForm} onCancel={()=>setOpenCustomersForm(false)}
            modalTitle={'Customers'} itemslabel={'List of Customers'} categories={testCategories}
            apiEndpoint={`customers`}/>
        </div>
    )
}

export default ClientDetails
