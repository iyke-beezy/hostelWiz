import React from 'react';
import { Avatar, Space,Popover, Input, Button } from 'antd';
import { PhoneFilled,TwitterOutlined,InstagramOutlined,WhatsAppOutlined } from '@ant-design/icons';


const Contact = () => {
  return (

    <div style={{marginTop:35}}>
        <h1>Contact Us</h1>
        <div>
          <Input size='large' placeholder='Send A Question to our Mail' style={{width:'70%'}}/>
          <Button className='form-button'>Send</Button>
      </div>
        <div style={{display:'flex', flexDirection:'row', marginBottom:20}}>
        <Space size={20}>
        <Popover content={'0505707987'} title="Number" trigger="click">
        <Avatar style={{backgroundColor:'#E7C654'}} size={50} icon={<PhoneFilled />} />
        </Popover>
        <Popover content={'0505707987'} title="Whatsapp" trigger="click">
            <Avatar style={{backgroundColor:'#E7C654'}} size={50} icon={<WhatsAppOutlined />} />
        </Popover>
        </Space>

      </div>

    </div>


  );
};

export default Contact;