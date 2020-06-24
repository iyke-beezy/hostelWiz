import React from 'react';
import { Avatar, Space } from 'antd';
import { FacebookOutlined,TwitterOutlined,InstagramOutlined } from '@ant-design/icons';


const Follow = () => {
  return (


    <div style={{display:'flex', flexDirection:'row'}}>
        <Space size={30}>
        <Avatar style={{backgroundColor:'#E7C654'}} size={50} icon={<FacebookOutlined />} />
        <Avatar style={{backgroundColor:'#E7C654'}} size={50} icon={<TwitterOutlined />} />
        <Avatar style={{backgroundColor:'#E7C654'}} size={50} icon={<InstagramOutlined />} />
        </Space>

      </div>

  );
};

export default Follow;