import React,{useState,useEffect,useContext} from 'react';
import { Grid, Form, Space, Input, Button, message,Typography} from 'antd';
import '../styles/SignIn.css'
import {UnlockOutlined,EyeOutlined,EyeInvisibleOutlined,QuestionCircleOutlined, } from '@ant-design/icons';
import {Link,useNavigate} from 'react-router-dom'
import SplashScreen from './SplashScreen'
import axios from '../Utilities/Api'
import {RoleContext} from '../Context/RoleContext'
import {createCookie} from '../Utilities/Session'


const {Item: FormItem} = Form;
const SignIn = () => {


    const [form] = Form.useForm();
    const initialValues = {};
    const screens = Grid.useBreakpoint();
    const [disable, setDisable] = React.useState(true);
    const [splash,setSplash]= useState(true);
    const [loading,setLoading]= useState(false)
    const navigate = useNavigate();
    const {updateUser}= useContext(RoleContext);

    useEffect(() => {
        setSplash(true)
      const loading =  setTimeout(()=>{
         setSplash(false)
         } ,1000)
      return () => {
      clearTimeout(loading)
      }
    }, [])

    const onFinish = async(values)=>{
        setLoading(true)
        
        try{
                const auth= await axios.get('/roles')
                console.log(auth);
                // const {token,user}= auth.data;
                 if(auth.status === 200){
                //     console.log(user);
                //     console.log(token);
                //     const userName= user.first_name +" "+ user.last_name;
                //     const role = user.role_id ;
                           
                  message.success(`Sucessfuly logged in `);
                  //navigating to the user profile page
                    //   navigate(`/home/${role}/${userName}`);
                    //   //updating the context api
                    //   updateUser(user);
                    //   createCookie(token);
                    
                    //  form.resetFields();
                   
                } else{
                   message.error('You entered the wrong username or password. Please try again');
                }

    
    } catch(error){
        alert(` You entered the wrong username or password. Please try again`);
    } 
        setLoading(false)
            
    }

    const onFinishFailed=(errorInfo)=>{
    alert(`Failed to submit form ${errorInfo}`)
    }

   
        if(splash){
            return <SplashScreen/>
        }
          else{
            return (
             <Space size="large" direction="horizontal" className={'signinroot'}>
        
                <Form
                    form={form}
                    name="basic"
                    layout="vertical"
                    onFinish={onFinish}
                    {...{initialValues}}
                     onFinishFailed={onFinishFailed}
                    requiredMark={false}
                    className={[screens.xs ? 'mobile-form' : 'desktop-form']}>
                    <FormItem style={{textAlign:'center'}}>
                     <UnlockOutlined className='icon'/>
                    </FormItem>
                    <FormItem
                        name="phone"
                        label="Phone Number"
                        rules={[{required: true,
                            type:'string',
                            // len:10,
                            whitespace:false,
                            message:" Please input your phone number, it should be 10 digits"
                      },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                // let val= value.length;
                                // console.log(`val is ${val}`)
                              if ( value.startsWith(0, 0) ) {
                                return Promise.resolve();
                              }
                               return Promise.reject(new Error('phone number is should have start with zero no spaces'));
                            },
                         
                          }),
                        ]}>
                        <Input size="large" placeholder="" />
                    </FormItem>

                    <FormItem
                        name="password"
                        label="Password"
                        rules={[{required: true, message: 'Password is required'}]}>
                        <Input.Password 
                        placeholder="Password" 
                        size="large" 
                        onChange={()=>setDisable(false)}
                           iconRender={(visible) => (visible ? <EyeOutlined /> : <EyeInvisibleOutlined />)} 
                           />
                    </FormItem>
                    <FormItem
                      
                    >
                        <Button
                            size="large"
                            type= 'primary'
                            disabled={disable}
                            loading={loading}
                            htmlType="submit" >
                            Sign in 
                        </Button>
                    </FormItem>
                    <FormItem>
                        <Typography.Text type='secondary'> <b>Forgot password? </b><br/>
                        </Typography.Text>
                        <Typography.Link >
                        <QuestionCircleOutlined className='icon'/>
                         Please contact support 
                        </Typography.Link>     
                    </FormItem>
                    <FormItem>
                    <Link to ='/signup'> 
                    <Typography>
                            Create an account
                        </Typography>
                   
                    </Link>
                    </FormItem>   
            
                </Form>
    </Space>
      
      );
                        }
}
 

export default SignIn;

    //        const registered= localStorage.getItem("user");
        //          const credentials= JSON.parse(registered);
        //       let  email = values.email === credentials.email
        //        console.log('')
        //        let  password = values.password === credentials.password
        //         if (email && password){
                   
        //             const user= credentials.username;
        //             const role = credentials.role
        //             message.success(`Sucessfuly logged in ${user}`);
        //                 navigate(`/home/${role}/${user}`);
        //             form.resetFields();
        //         }else {
         
        //    message.error(`Email and password is wrong`);
        //    console.log(`error creating user `)};



         // const res= await axios.get(`/roles?id=${user.role_id}`)
                    // const {success,data}= res.data;
                    // const roleName = data.role_name;