import React,{useState,useEffect,useContext} from 'react';
import {Row, Grid, Form, Space, Input, Button, message, Typography,Select } from 'antd';
import '../styles/SignIn.css'
import {UnlockOutlined,EyeOutlined,EyeInvisibleOutlined, } from '@ant-design/icons';
import { Link,useNavigate}  from 'react-router-dom';
import axios from '../Utilities/Api';
import {RoleContext} from '../Context/RoleContext'
import {createCookie} from '../Utilities/Session'

 
const roleTypes=[
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
    const [disable, setDisable] =useState(true);
    const [loading,setLoading]= useState(false)
    const navigate = useNavigate();
    const {updateUser}= useContext(RoleContext);
     const [password,setPassword] =useState()

    const onFinish = async(values)=>{
        setLoading(true)
        try{
            const auth= await axios.post('/register',values)
            // console.log(auth);
            const {token,user}= auth.data;
            if(auth.status === 201){
        //    /     console.log(user);
                // console.log(token);
                const userName= user.first_name +" "+ user.last_name;
                const role = user.role_id
              message.success(`Sucessfuly logged in ${userName}`);
                  navigate(`/home/${role}/${userName}`);
                   updateUser(user);
                   createCookie(token);
               
                 form.resetFields();
               
            } else{
               message.error('You entered the wrong username or password. Please try again');
            }


        } catch(error){
            alert(` Encountering ${error}`);
        }  
          setLoading(false);
            
    }
    //  const validatePassword =()=>{
        
        
    //  }
     const validatePassword  = (_, value) => {
        if (value.number === password) {
          return Promise.resolve();
          setDisable(true)
        }
    
        return Promise.reject(new Error('Confirm password must be the same as password'));
      };
    const onFinishFailed=(errorInfo)=>{
    message.error(`Failed to register user.Please try again`)
    }
      
               return(
                    <Space size="small" direction="horizontal" className='signuproot'>
                      
                       <Form
                           form={form}
                           name="basic"
                           layout="vertical"
                           onFinish={onFinish}
                           {...{initialValues}}
                            onFinishFailed={onFinishFailed}
                           requiredMark={false}
                           size='small'
                           scrollToFirstError
                           className={[screens.xs ? 'mobile-form' : 'signup-form']}>
                           <FormItem style={{textAlign:'center'}} >
                            <UnlockOutlined className='icon'/>
                           </FormItem>
                           <FormItem
                               name="phone"
                               label="Phone Number"
                            //   tooltip="Format 0711223344 no spaces"
                               rules={[{required: true,
                                type:'string',
                               
                               message: 'Phone Number should be 10 digits',
                                whitespace:false },
                                ({ getFieldValue }) => ({
                                    validator(_, value) {
                                      if (!value || value !== " ") {
                                        return Promise.resolve();
                                      }
                                       return Promise.reject(new Error('phone number is should have 10 digits'));
                                    },
                                    // len(_,value){
                                    //     if(value ===10){
                                    //         return Promise.resolve();
                                    //     }
                                    //     return Promise.reject(new Error('phone number is less than 10'));
                                    // }
                                  }),]}>
                               <Input size="small" placeholder="0711223344" />
                           </FormItem>
                           <FormItem
                               name="first_name"
                               label="First Name"
                               rules={[{required: true,
                                type:'string',
                                whitespace:false,
                               message: 'Please enter your first name'}]}>
                               <Input size="small" placeholder="first name" />
                           </FormItem>
                           <FormItem
                               name="last_name"
                               label="Sir Name"
                               rules={[{required: true,
                                type:'string',
                                whitespace:false,
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
                               rules={[{required: true, 
                                whitespace:false,
                                min:4,
                               message: 'Please enter a strong password'}]}
                               hasFeedback
                               >
       
                               <Input.Password 
                               placeholder="Password" 
                               size="small" 
                               onChange={(e)=>setPassword(e.target.value)}
                                  iconRender={(visible) => (visible ? <EyeOutlined /> : <EyeInvisibleOutlined />)} 
                                  />
                           </FormItem>
                           <FormItem
                               name="password_confirmation"
                               label="Confirm Password"
                               dependencies={['password']}
                               rules={[{required: true,
                                whitespace:false, 
                               message: 'Enter the same password as above'},
                               ({ getFieldValue }) => ({
                                validator(_, value) {
                                  if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                  }
                                  return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                },
                              }),
                            ]}
                               
                               hasFeedback
                               >
       
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
                                            {options(roleTypes)}
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