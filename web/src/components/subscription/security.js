import React from 'react';
import { Radio,Button,Input} from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import './hostForm.css';


class Security extends React.Component{
    state={
        value:null,
        numbers:['+233505707987'],
        enable:false
    };
    handlEnable=()=>{
    this.setState({
    enable:!this.state.enable
    })
    }
    handleChange = e => {
        console.log('radio checked', e.target.value);
        this.setState({
          value: e.target.value,
        });
      };

      addNumber=(e)=>{
        let number=e.target.value;
        this.state.numbers.push(number)
        this.setState({
            enable:false,
            newNumber:'Enter a New Number',
        });
        
      }
          
      
      getSnapshotBeforeUpdate(nextProps,nextState){
        localStorage.setItem('security',JSON.stringify(nextState));
        return null;
    }
    componentDidUpdate(prevProps,prevState,snapshot){

    }
    render(){
        const {numbers} =this.state;
        return(
            <div style={{paddingLeft:20}}>
                <div className='dC'>
                    <span className='medText'>Protect your account.</span>
                    <span className='smallText'>Send a verification code to your phone to confirm your identity.</span>
                </div>
                <div className='dC'>
                <span className='smallText3'>choose the number you will like to use.</span>
                <Radio.Group onChange={this.handleChange} value={this.state.value} className="dC">
                            {
                            numbers.map((number)=><Radio key={number} value={number} className="smallText">{number}</Radio>)
                            }
                </Radio.Group>
                
                <span className="smallText"><Button className='tipsButton' onClick={this.handlEnable} type='link' style={{fontSize:17}}><PlusCircleOutlined/></Button>Add a new Number</span>
                <div hidden={!this.state.enable} className='dC'>
                <Input name="newNumber"  size='large'  style={{border:'0.5px solid #E3E3E3'}} onPressEnter={this.addNumber}  className='entries' placeholder='Enter a new Number and press Enter'/>
                <span className='smSpan' >Enter a new number and press Enter</span>
                </div>

                </div>
                <div className='dC1'>
                <Button className='finalButton' onClick={this.props.handleBack}>Back</Button>
                <Button className='finalButton' onClick={this.props.handleNext}>Next</Button>                 
               </div>

            </div>
        );
    }
    
}
export default Security;