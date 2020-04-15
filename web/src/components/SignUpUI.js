import React from 'react';
import { Row,Col } from  'antd';
import 'antd/dist/antd.css';
import '../components/SignUpUI.css';
import Login from '../components/Login.js';



const SignUpUI =()=>{
  return(
    <Row className="mainDiv">
      <Col xs={0} sm={5} md={9} lg={12} xl={13} className='firstDiv' >
        <div className="overlay">
        </div>
      </Col>
      <Col  xs={24} sm={19} md={15} lg={12} xl={11} className="secondDiv">
        <div className="group">
            <Login></Login>
        </div> 
      </Col>
    </Row>
  );
};

export default SignUpUI;