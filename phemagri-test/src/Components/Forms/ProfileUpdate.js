import React, { useContext } from 'react';
import { Button, Modal, Form, Input,DatePicker,message,Select, Avatar} from 'antd';
import {EyeOutlined,EyeInvisibleOutlined } from '@ant-design/icons';
import axios from '../../Utilities/Api'
import { RoleContext } from '../../Context/RoleContext';
import {useNavigate} from 'react-router-dom'


const roleTypes=[
    {id:1, name:'Farmer'},
    {id:2, name:'Input Provider'},
    {id:3, name:'Bank/Investor'},
    {id:4, name:'Vendor'}, 
]
const { Option } = Select;

const options=(arr)=>(
arr.map(option=><Option key={option.id} value={option.id}>{option.name}</Option>)
)

const ProfileForm = ({ visible, onCancel }) => {
  const navigate = useNavigate();
 const {user,updateUser}= useContext(RoleContext)
  const [form] = Form.useForm();
  console.log(user);
  const onFinish = async(values) => {
    console.log('Received values of form: ', values);
      
    const payload = {
      ...values, 
      date_of_birth: values.date_of_birth.format('YYYY-MM-DD'),
      user_id:user.id
    }
    const newUser = {
       first_name:payload.first_name? payload.first_name:user.first_name ,
       last_name: payload.last_name? payload.last_name:user.last_name ,
       email:payload.email? payload.email:user.email,
      phone: payload.phone? payload.phone:user.phone ,
      location:payload.location? payload.location:user.location ,
      role_id:payload.role_id? payload.role_id:user.role_id ,
      date_of_birth:values.date_of_birth,
      id:payload.user_id,

     }
    console.log('Received payload: ', payload);
    console.log('Created new user: ', newUser);
    updateUser(newUser)
    // try{
    //    await axios.post('/profile/update', payload)
    //   .then(res=>{
    //     if(res.status===200){
    //     message.success('Successfully updated profile');
      
    //   } else if (res.status===401){
    //     navigate('/')
    //   }
    //   }).catch(error=> console.log(` Error encountered ${error}`) )  
    // } catch(error){
    //   message.error(`This ${error} occured when updating a user`)
    // }
  };
  return (
    <Modal
      visible={visible}
      title="Edit Profile"
      okText="Submit"
      cancelText="Cancel"
      
      onCancel={()=>{
        form.resetFields();
        onCancel()
      }}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
             onFinish(values);
            onCancel();
          })
          .catch((info) => {
            console.log('Validate Failed:', info);
            // onCancel();
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="profileform"
        initialValues={{user}}
        autoComplete="off"
      >
      
        <Form.Item
             name="first_name"
           label="First Name"
        >
       <Input size="middle" placeholder="first name" defaultValue={user.first_name} value={user.first_name}/>
       </Form.Item>
          <Form.Item
              name="last_name"
              label="Sir Name"
            >
         <Input size="middle" placeholder="Sir name" defaultValue={user.last_name} value={user.last_name} />
          </Form.Item>
        <Form.Item
              name="email"
                label="Email"
          >
          <Input size="middle" placeholder="username@domain.com"defaultValue={user.email} value={user.email}/>
           </Form.Item>
           <Form.Item
              name="password"
              label="Password"
                           >
               <Input.Password 
                  min={4}
                   placeholder="*******" 
                  size="middle" 
                iconRender={(visible) => (visible ? <EyeOutlined /> : <EyeInvisibleOutlined />)} 
                                  />
                           </Form.Item>    
        <Form.Item
          name="phone"
          label="Phone Number"
        >
          <Input value={user.phone} defaultValue={user.phone}  />
    
        </Form.Item>
        <Form.Item
          name="role_id"
          label="Role"
        
        >
         <Select placeholder=''defaultValue={user.role_id} value={user.role_id}>
            {options(roleTypes)}
          </Select>
        </Form.Item>
      
        <Form.Item name="date_of_birth" label="Date of Birth"
          rules={[
            {
              required: true,
              message: 'Please enter your date of birth',
            },
          ]}>
         <DatePicker />
        </Form.Item>
        <Form.Item
          name="location"
          label='Location'
          rules={[
            {
              required: true,
              message: 'Please enter your location',
            },
          ]}
        >
              <Input size="middle" />
        </Form.Item>
     
      </Form>
    </Modal>
  );
};


export default ProfileForm;