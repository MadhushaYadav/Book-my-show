import React,{useState} from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import "./index";
import Register from '../Register';

function Login(){
  const [isRegister,setIsRegister]=useState(false);
  const handleRegister=()=>{
    setIsRegister(true);
  }

  if(isRegister){
    return <Register></Register>
  }
   return(
        <div>
          <div className="header">
          <h2>LOGIN</h2>
        </div>
    <div className="boxBody">
    <Form
    name="basic"
    // labelCol={{
    //   span: 8,
    // }}
    // wrapperCol={{
    //   span: 16,
    // }}
    
    initialValues={{
      remember: true,
    }}
    // onFinish={onFinish}
    // onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <div className="formBox">
     
    <Form.Item
      label="Name"
      name="Name"
      rules={[
        {
          required: true,
          message: 'Please input your usernName!',
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="Username"
      name="username"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      
      <Button type="primary" htmlType="submit" style={{ marginRight: '10px' }}>
        Login
      </Button>
      <Button type="primary" onClick={handleRegister}>Signup</Button>
      
      
    </Form.Item>
    
    </div>
  </Form>
  </div>




  </div>
    )
}

export default Login;