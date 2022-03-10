import React,{useState,useEffect,useContext} from 'react';
import {Row, Grid, Form, Space, Input, Button, message, Typography,Select } from 'antd';
import '../styles/SignIn.css'
import {UnlockOutlined,EyeOutlined,EyeInvisibleOutlined, } from '@ant-design/icons';
import { Link,useNavigate}  from 'react-router-dom';


 
const susbcriptions=[
    {id:1, name:'Farmer'},
    {id:2, name:'Input Provider'},
    {id:3, name:'Investor'},
    {id:4, name:'Vendor'}, 
]
const { Option } = Select;
const options=(arr)=>(
    arr.map(option=><Option key={option.id} value={option.name}>{option.name}</Option>)
    );
const {Item: FormItem} = Form;
const SignIn = () => {
    const [form] = Form.useForm();
    const initialValues = {};
    const screens = Grid.useBreakpoint();
    const [disable, setDisable] = React.useState(true);
    const [loading,setLoading]= useState(false)
    const navigate = useNavigate();
 

    

   

    const onFinish = async(values)=>{
        setLoading(true)
        const credential ={
            email: values.email,
            password: values.password,
            phoneNumber:values.phoneNumber,
            role:values.role,
            username:values.username
       }
     if (credential.length !== 0){
     
       localStorage.setItem("creds", JSON.stringify( credential))
       const user= values.username;
       const role = values.role
           message.success(`Successfuly registered ${user}`  )
           navigate(`/home/${role}/${user}`);

     } else{
            message.error(`Failed to register user.Please try again`);
           console.log(`error creating user`)
        };
        setLoading(false)
            
    }

    const onFinishFailed=(errorInfo)=>{
    message.error(`Failed to register user.Please try again`)
    }
      
               return(
                    <Space size="small" direction="horizontal" className='signinroot'>
                      
                       <Form
                           form={form}
                           name="basic"
                           layout="vertical"
                           onFinish={onFinish}
                           {...{initialValues}}
                            onFinishFailed={onFinishFailed}
                           requiredMark={false}
                           size='small'
                           className={[screens.xs ? 'mobile-form' : 'signup-form']}>
                           <FormItem style={{textAlign:'center'}} >
                            <UnlockOutlined className='icon'/>
                           </FormItem>
                           <FormItem
                               name="phoneNumber"
                               label="Phone Number"
                               rules={[{required: true,
                               message: 'Phone Number is required'}]}>
                               <Input size="small" placeholder="Phone Number" />
                           </FormItem>
                           <FormItem
                               name="username"
                               label="User Name"
                               rules={[{required: true,
               
                               message: 'User Name is required'}]}>
                               <Input size="small" placeholder="username" />
                           </FormItem>
                           <FormItem
                               name="email"
                               label="Email"
                               rules={[{required: true,
                                type:'email',
                               message: 'email is required'}]}>
                               <Input size="small" placeholder="username@domain.com" />
                           </FormItem>
       
                           <FormItem
                               name="password"
                               label="Password"
                               rules={[{required: true, message: 'Password is required'}]}>
       
                               <Input.Password 
                               placeholder="Password" 
                               size="small" 
                               onChange={()=>setDisable(false)}
                                  iconRender={(visible) => (visible ? <EyeOutlined /> : <EyeInvisibleOutlined />)} 
                                  />
                           </FormItem>
                           <FormItem
                               name="role"
                               label="Role"
                               rules={[{required: true,
                               message: 'role is required'}]}>
                             <Select placeholder='Role'>
                                            {options(susbcriptions)}
                              </Select>
                           </FormItem>
                           <FormItem >
                               <Button
                                   size="middle"
                                   type= 'primary'
                                   disabled={disable}
                                   loading={loading}
                                   htmlType="submit" 
                                  >
                                   Register
                               </Button>
                           </FormItem>
                           <FormItem >
    
                            <Link to ='/'> 
                            <Typography>
                               Log In instead
                               </Typography>  
                            </Link>    
                           </FormItem>
       
                       </Form>
                  
           </Space>
          );
      
            
}
 
export default SignIn;