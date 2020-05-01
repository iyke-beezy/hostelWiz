import React from 'react';
import { Layout, Menu,Progress,Button ,Tabs} from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import './hostForm.css';
import Head from '../head';
import LocConfirm from './locConfirm';
import DetailsConfirm from './detailsConfirm';
const {Header}=Layout;
const {TabPane}=Tabs;

class LastStep extends React.Component{
    state={
        current:'1',
        percent:30,
    }
    handleBack=()=>{
        this.setState({
            current:'1',
            percent:30
            
        })
    }
        
    handleNext=()=>{

        this.setState({
            current:'2',
            percent:60
        })
    }
    handleTab=()=>{
        if(this.state.current==='1'){
            this.handleNext();
        }
        else{
            this.handleBack();
    }
}
    
    render(){
        return(
        <div style={{fontFamily:'Baloo Paaji Medium'}}>
            <Header style={{margin:0,padding:0,height:'auto',backgroundColor:'#FFFFFF',lineHeight:'20px'}}>
            <Head list={false}></Head>
            <div style={{display:'flex', flexDirection:'column',alignItems:'center',marginBottom:'20px',marginTop:'20px'}}>
                <div style={{display:'flex', flexDirection:'column',alignItems:'flex-start',width:'75%',marginBottom:'20px'}}>
                <h3 className='medText'>Progress</h3>
                <Progress percent={this.state.percent} status="active" showInfo={false}/>
                </div>
                <div style={{display:'flex', flexDirection:'column',alignItems:'flex-start',width:'70%'}}>
                    <h2 className='medText2' >Welcome, verify the final details of your property </h2>
                    <h3>Just few steps remaining</h3>
                </div>
            </div>
            </Header>
            <div style={{display:'flex', flexDirection:'row',justifyContent:'center'}}>
            <Tabs  activeKey={this.state.current} tabPosition='left' className='taboo' onTabClick={this.handleTab}   style={{ height:'340px',width:'70%',overflowY:'scroll'}}>
                <TabPane key={1}  tab={'Welcome'}>
                </TabPane>
                <TabPane tab={'Location'} key={1} style={{position:'relative'}}>
                  <LocConfirm handleNext={this.handleNext}></LocConfirm>
                </TabPane>
                <TabPane tab={'Details'} key={2}>
                 <DetailsConfirm handleBack={this.handleBack}></DetailsConfirm>
                </TabPane>
            </Tabs>
            </div>
            <div style={{margin:20}}>

            </div>
        
        
        </div>

        );
    }
}
export default LastStep;