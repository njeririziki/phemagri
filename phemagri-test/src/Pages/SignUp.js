import React,{useState} from 'react';
import {Row, Grid, Form, Space, Input, Button, message, Typography} from 'antd';
import '../Styles/SignIn.css'
import {UnlockOutlined,EyeOutlined,EyeInvisibleOutlined, } from '@ant-design/icons';
import {withRouter, Link, }  from 'react-router-dom'
// import {projectAuth} from '../Firebase/config'



const {Item: FormItem} = Form;
const SignIn = ({history}) => {
    const [form] = Form.useForm();
    const initialValues = {};
    const screens = Grid.useBreakpoint();
    const [disable, setDisable] = React.useState(true);
  
    const [loading,setLoading]= useState(false)

    const onFinish = async(values)=>{
        setLoading(true)
        
            try {
                // await projectAuth.createUserWithEmailAndPassword(values.email,values.password)
                // .then((res)=> {
                //     console.log(res)
                //     console.log(values.username)
                //     const user = projectAuth.currentUser
                //     user.updateProfile({
                //         displayName: values.username
                //      });
                     message.success( `${values.username} welcome to Rizi`);
                     history.push('/');
                     form.resetFields();
                // }).catch((err)=> console.log(`error creating user ${err}`));
                //     message.success('Successfuly registered')
        }catch(error){
            message.error(`Failed to register user.Please try again`);
           console.log(`error creating user ${error}`)
        };
        setLoading(false)
            
    }

    const onFinishFailed=(errorInfo)=>{
    message.error(`Failed to register user.Please try again`)
    }

    return (
             <Space size="large" direction="horizontal" className={'root'}>
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
                        name="username"
                        label="Username"
                        rules={[{required: true, message: 'Username is required'}]}>
                        <Input size="large" placeholder="Username" />
                    </FormItem>

                    <FormItem
                        name="email"
                        label="Email"
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
                
                    <FormItem >
                        <Button
                            size="large"
                            type= 'primary'
                            disabled={ disable}
                            loading={loading}
                            htmlType="submit"
                           
                           >
                            Register
                        </Button>
                    </FormItem>
                    <FormItem >
                        <Typography.Text type='secondary'>
                             <b> Do you alredy have an account? </b><br/>
                        </Typography.Text>
                     <Link to ='/login'> 
                     <Typography>
                        Log In instead
                        </Typography>  
                     </Link>    
                    </FormItem>

                </Form>
 
    </Space>
      
      );
}
 
export default withRouter(SignIn);