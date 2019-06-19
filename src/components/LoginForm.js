import React from 'react'
import { Input, Button } from 'antd';



function LoginForm(){

    
    return <>
    <h3>User</h3>
    <Input placeholder="User" style={{ width: 200 }}/>
    <br/>
    <h3>Password</h3>
    <Input placeholder="Password" style={{ width: 200 }}/>
    <br/>
    <br/>
    <Button type="primary">Login</Button>
    </>
}

export default LoginForm