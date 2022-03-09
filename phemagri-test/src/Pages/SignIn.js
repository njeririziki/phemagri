import React,{useState,useEffect} from 'react';
import { Grid, Form, Space, Input, Button, message,Typography} from 'antd';
import '../styles/SignIn.css'
import {UnlockOutlined,EyeOutlined,EyeInvisibleOutlined,QuestionCircleOutlined, } from '@ant-design/icons';
// import {withRouter, Link}  from 'react-router-dom'
import {Link,useNavigate} from 'react-router-dom'
import SplashScreen from './SplashScreen'
// import {projectAuth} from '../Firebase/config'


//, VisibilityOutlined, VisibilityOffOutlined, ContactSupportOutlined

const {Item: FormItem} = Form;
const SignIn = () => {


    const [form] = Form.useForm();
    const initialValues = {};
    const screens = Grid.useBreakpoint();
    const [disable, setDisable] = React.useState(true);
    const [splash,setSplash]= useState(true);
    const [loading,setLoading]= useState(false)
    const navigate = useNavigate();

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
        
                // await projectAuth.signInWithEmailAndPassword(values.email,values.password);
               const registered= localStorage.getItem("creds");
                 const credentials= JSON.parse(registered);
              let  email = values.email === credentials.email
               console.log('')
               let  password = values.password === credentials.password
                if (email && password){
                   
                    const user= credentials.username;
                    const role = credentials.role
                    message.success(`Sucessfuly logged in ${user}`);
                        navigate(`/home/${role}/${user}`);
                    form.resetFields();
                }else {
         
           message.error(`Email and password is wrong`);
           console.log(`error creating user `)

        };
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
                        name="email"
                        label="email"
                        rules={[{required: true,
                         type:'email',
                        message: 'email is required'}]}>
                        <Input size="large" placeholder="username@domain.com" />
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
                            disabled={ disable}
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