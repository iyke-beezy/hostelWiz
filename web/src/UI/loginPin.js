import React from "react";
import PropTypes from 'prop-types';
import PinInput from "react-pin-input";
import {Button} from 'antd';
import './loginUI.css'
import UserPass from "./userPass";

const propTypes={
  code:PropTypes.number,
  fname:PropTypes.string,
  email:PropTypes.string,
  number:PropTypes.string
}
class Pin extends React.Component {

  
  state = {
    value: "",
    disabled:false,
    verify:false,
    continue:false
     };

    

  onChange = value => {
    if(value.length===4){
      this.setState({ 
        disabled:true,
      });
      if(value===String(this.props.code)){
        this.setState({ 
          verify:true
        });        
      }
    }
    this.setState({ value });
  };

  onContinue=()=>{
  
    this.setState({ 
        continue:true,
      });

  }

 /* onClear = () => {
    this.setState({
      value: "",
      disabled:false,
      verify:false
      
    });
    this.pin.clear();
  };*/

  render() {
    const { disabled,verify } = this.state;
    const{code,fname,email,number}=this.props;
    let view;
    if(this.state.continue){
        view=<UserPass fname={fname} email={email} number={number}/>

    }else{
        view=
        
        <div className="mt-8">
       
        <PinInput
          length={4}
          focus
          style={{
            padding: '20px',

        }}  
          inputStyle={{borderColor: '#808080', borderWidth:'1.0px', width:'70px',height:'70px', margin: '10px',boxShadow: "1px 1px 1px #9E9E9E"}}
          inputFocusStyle={{borderColor: '#E7C654'}}
          disabled={disabled}     
          ref={p => (this.pin = p)}
          type="numeric"
          onChange={this.onChange}
          
        />
        <div className="mt-8">
            <h2>{code}</h2>
        </div>
            <div className="mt-8">
            <Button size="large" disabled={!verify} onClick={this.onContinue}>
                Continue
            </Button>
        </div>
      </div>
    }



    return (
      <div>       
         {view}
         </div>

    );
  }
}
Pin.propTypes = propTypes
export default Pin;


