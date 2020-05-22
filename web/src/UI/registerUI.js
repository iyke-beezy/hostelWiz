import React from 'react'
import { Input} from 'antd';
import { UserOutlined, MailOutlined, PhoneOutlined} from '@ant-design/icons';

const RegisterUI = (props) => {
    const handleChange = evt => {
        props.handleChange(evt)
    }
    return (
        <div>
                <div className="mt-8">
                    <h2>Full Name</h2>
                    <Input placeholder="Enter Full Name" size="large" name="name" prefix={<UserOutlined />} onChange={handleChange}
                    />
                </div>
                <div className="mt-8">
                    <h2>Email</h2>
                    <Input placeholder="Enter Email" size="large" name="email" prefix={<MailOutlined />} onChange={handleChange} />
                </div>

                <div className="mt-8">
                    <h2>Phone Number</h2>
                    <Input placeholder="Enter Phone" size="large" name="number" prefix={<PhoneOutlined />} onChange={handleChange} />
                </div>
            </div>
    )
}
 
export default RegisterUI