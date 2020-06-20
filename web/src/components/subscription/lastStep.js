import React from 'react';
import { Layout, Menu,Progress,Button ,Tabs} from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import './hostForm.css';
import Head from '../head';
import { withCookies } from 'react-cookie';
import LocConfirm from './locConfirm';
import DetailsConfirm from './detailsConfirm';
import Uploads from './upload';
import Security from './security';
import Pricing from './pricing';
import PublishListing from './publishListing';
const {Header}=Layout;
const {TabPane}=Tabs;

class LastStep extends React.Component{
    state={
        current:'1',
        percent:14.29,
        loggedIn: false
    }

    componentDidMount(){
        if(this.props.cookies.get('mr-token'))
        this.setState({loggedIn:true})
    }

    logOut = () => {
        this.setState({loggedIn: false})
        this.props.cookies.remove('mr-token')
    }

    handleBack=()=>{
        let currentNumber=parseInt(this.state.current)
        currentNumber=currentNumber-1
        this.setState({
            current:String(currentNumber),

            
        })
    }
        
    handleNext=()=>{
        var currentNumber=parseInt(this.state.current)
        currentNumber=currentNumber+1
       this.setState({
            current:String(currentNumber),
        })
    }
    handleTab=(e)=>{
        this.setState({
            current:String(e.target.key)
        })
    }

    
    render(){
        return(
        <div style={{fontFamily:'Baloo Paaji Medium'}}>
            <Header className='lStepHeaderCover' >
            <Head list={false} loggedIn = {this.state.loggedIn} logOut={this.logOut}/>
            <div className='lStepHeader'>
                <div className='progress' >
                <h3 className='medText'>Progress</h3>
                <Progress percent={parseInt(this.state.percent*this.state.current)} status="active" showInfo={false}/>
                </div>
                <div className='lastInfo'>
                    <h2 className='medText2' >Welcome, verify the final details of your property </h2>
                    <h3>Just few steps remaining</h3>
                </div>
            </div>
            </Header>
            <div className="lastContent" >
            <Tabs  tabPosition='left' className='taboo'   activeKey={this.state.current} style={{ height:'auto',width:'70%',overflowY:'scroll'}}>
                <TabPane key={0} disabled={true} tab={'Welcome'}>
                </TabPane>
                <TabPane tab={'Location'} key={1} style={{position:'relative'}}>
                  <LocConfirm handleNext={this.handleNext}></LocConfirm>
                </TabPane>
                <TabPane tab={'Details'} key={2}>
                 <DetailsConfirm handleNext={this.handleNext} handleBack={this.handleBack}></DetailsConfirm>
                </TabPane>               
                <TabPane  tab={'Security'} key={3}>
                <Security handleNext={this.handleNext} handleBack={this.handleBack}/>
                </TabPane>                
                <TabPane  tab={'Pricing'} key={4}>
                <Pricing handleNext={this.handleNext} handleBack={this.handleBack}/>
                </TabPane>                 
                <TabPane  tab={'Publish Listing'} key={5}>
                 <PublishListing handleNext={this.handleNext} handleBack={this.handleBack}/>
                </TabPane>
                <TabPane  tab={'Photos'} key={6}>
                 <Uploads handleNext={this.handleNext} handleBack={this.handleBack}/>
                </TabPane>
            </Tabs>
            <div style={{marginBottom:500}}>
            </div>
        </div>

        
        
        </div>

        );
    }
}
export default withCookies(LastStep);