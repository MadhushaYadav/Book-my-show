import React,{useState} from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import "./index.css"
import Login from '../login';
function Register(){
   const [login,setLogin]=useState(false);
   const handleLogin=()=>{
     setLogin(true);
  }
  if(login){
    return <Login></Login>
  }

  const onFinish=()=>{
    
  }

  return(
      <div>
          <div className="header">
          <h2>REGISTER</h2>
          </div>
          <div className="boxBody">
            <Form
            name="basic"
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
          message: 'Please input your username!',
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
      <Button type="primary" htmlType="submit">
        Register
      </Button>
    </Form.Item>
    <div className="alreadyAccount">
    <a onClick={handleLogin}>If already have an account, please Login!</a>
    </div>
    </div>
   </Form>
   </div>
</div>
    )
}

export default Register