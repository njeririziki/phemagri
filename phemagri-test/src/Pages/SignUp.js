import React,{useState,useEffect,useContext} from 'react';
import {Row, Grid, Form, Space, Input, Button, message, Typography,Select } from 'antd';
import '../styles/SignIn.css'
import {UnlockOutlined,EyeOutlined,EyeInvisibleOutlined, } from '@ant-design/icons';
import { Link,useNavigate}  from 'react-router-dom';
import axios from '../Utilities/Api';
import {RoleContext} from '../Context/RoleContext'

 
const susbcriptions=[
    {id:1, name:'Farmer'},
    {id:2, name:'Input Provider'},
    {id:3, name:'Bank/Investor'},
    {id:4, name:'Vendor'}, 
]
const { Option } = Select;
const options=(arr)=>(
    arr.map(option=><Option key={option.id} value={option.id}>{option.name}</Option>)
    );
const {Item: FormItem} = Form;
const SignUp = () => {
    const [form] = Form.useForm();
    const initialValues = {};
    const screens = Grid.useBreakpoint();
    const [disable, setDisable] = React.useState(true);
    const [loading,setLoading]= useState(false)
    const navigate = useNavigate();
    const {creds,setCreds}= useContext(RoleContext);
 

    
    const onFinish = async(values)=>{
        setLoading(true)
//         try{
//             const auth= await axios.post('/register',values)
//             console.log(auth);
//             const {success,user}= auth.data;
//             if(auth.status === 200){
//                 message.success('Successful login')
//                 const userInfo = JSON.parse(user)
//                 console.log(userInfo);
//                 const userName= userInfo.first_name + userInfo.last_name;
//                 const role = userInfo.role_id
//                 // const res= await axios.get(`/roles?id=${user.role_id}`)
//                 // const {success,data}= res.data;
//                 // const roleName = data.role_name;
//               message.success(`Sucessfuly logged in ${userName}`);
//                 //  navigate(`/home/${role}/${userName}`);
//                  form.resetFields();
               
//             } else{
//                message.error('You entered the wrong username or password. Please try again');
//             }


// } catch(error){
//     alert(` Encountering ${error}`);
// } 
        const credential ={
            email: values.email,
            password: values.password,
            password2: values.password_confirmation,
            phoneNumber:values.phone,
            role_id:values.role_id,
           firstName:values.first_name,
           sirName:values.last_name
       }
     if (credential.length !== 0){
     
       localStorage.setItem("creds", JSON.stringify( credential))
       setCreds(credential);
       const user= values.first_name+values.last_name;
       const role = values.role_id
           message.success(`Successfuly registered ${user}`  )
           navigate(`/home/${role}/${user}`);


     } else{
            message.error(`Failed to register user.Please try again`);
           console.log(`error creating user`)
        };
       
        setLoading(false)
        return ;
            
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
                               name="phone"
                               label="Phone Number"
                               rules={[{required: true,
                               message: 'Phone Number is required'}]}>
                               <Input size="small" placeholder="Phone Number" />
                           </FormItem>
                           <FormItem
                               name="first_name"
                               label="First Name"
                               rules={[{required: true,
               
                               message: 'Please enter your first name'}]}>
                               <Input size="small" placeholder="first name" />
                           </FormItem>
                           <FormItem
                               name="last_name"
                               label="Sir Name"
                               rules={[{required: true,
               
                               message: 'Sir Name is required'}]}>
                               <Input size="small" placeholder="Sir name" />
                           </FormItem>
                           <FormItem
                               name="email"
                               label="Email"
                               rules={[{required: true,
                                type:'email',
                               message: 'Please enter a valid email'}]}>
                               <Input size="small" placeholder="username@domain.com" />
                           </FormItem>
       
                           <FormItem
                               name="password"
                               label="Password"
                               rules={[{required: true, message: 'Please enter a strong passwird'}]}>
       
                               <Input.Password 
                               placeholder="Password" 
                               size="small" 
                               onChange={()=>setDisable(false)}
                                  iconRender={(visible) => (visible ? <EyeOutlined /> : <EyeInvisibleOutlined />)} 
                                  />
                           </FormItem>
                           <FormItem
                               name="password_confirmation"
                               label="Confirm Password"
                               rules={[{required: true, message: 'Enter the same password as above'}]}>
       
                               <Input.Password 
                               placeholder="Password" 
                               size="small" 
                               onChange={()=>setDisable(false)}
                                  iconRender={(visible) => (visible ? <EyeOutlined /> : <EyeInvisibleOutlined />)} 
                                  />
                           </FormItem>
                           <FormItem
                               name="role_id"
                               label="Role"
                               rules={[{required: true,
                               message: 'Please select your role'}]}>
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
 
export default SignUp;