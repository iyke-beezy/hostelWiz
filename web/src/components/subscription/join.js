import React from 'react';
import {Input,Button} from 'antd';
import './hostForm.css';
import '../../UI/loginUI.css';
import 'antd/dist/antd.css';
import { ArrowLeftOutlined } from '@ant-design/icons';

class Join extends React.Component{
    joins;
    state={
        fname:'',
        lname:'',
        email:'',
        id:'',
        code:'+233',
        number:'',
        login:false,
        password:'',
        cpassword:''
    }
    handleChange= event => {
     
        let cred = this.state;
        cred[event.target.name] = event.target.value;
        this.setState({state: cred});
    }
   handleBackJoin=()=>{
       this.props.goBack();
   }
   loginSignUp=()=>{
        this.setState({
            login:!this.state.login,
            email:'',
            password:'',

        });
   }


componentWillUpdate(nextProps,nextState){
    localStorage.setItem('join',JSON.stringify(nextState));
}
    render(){
    let content;
    const {login}=this.state;
    if (login){
        content=(
            <div>
            <div style={{minHeight:"260px", height:"auto"}}>
            <Button onClick={this.handleBackJoin}><ArrowLeftOutlined/></Button>
                <h2 className="medText">One Last Step</h2>
                <div>
                
                <span className="smallText" style={{color:'#000000'}}>Don't have an account?</span><Button  className="link-button" type="link" onClick={this.loginSignUp}>Sign Up</Button>
                <div style={{display:'flex', flexDirection:'row'}}>
                 <div style={{display:'flex', flexDirection:'column',marginRight:19}}>
                <span className='smSpan'>Email</span>
                <Input  name="email" value={this.state.email}   onChange={this.handleChange} style={{width:163}}/>
                </div>
                <div style={{display:'flex', flexDirection:'column'}}>
                <span className='smSpan'>Password</span>
                <Input  name="password" type='password' value={this.state.password}   onChange={this.handleChange} style={{width:163}}/>
                </div>
           
                </div>
                </div>
            </div>
                <Button className="form-button">Next</Button>
            </div>            
        );
    }else{
        content=(
            <div style={{width:'330px'}}>
            <div style={{minHeight:"260px", height:"auto"}}>
            <Button onClick={this.handleBackJoin}><ArrowLeftOutlined/></Button>
                <h2 className="medText">One Last Step</h2>
                <div>
                
                <span className="smallText" style={{color:'#000000'}}>Already have an account?</span><Button className="link-button" type="link" onClick={this.loginSignUp}>Login</Button>
                <div style={{display:'flex', flexDirection:'column'}}>
                <div style={{display:'flex', flexDirection:'row',marginBottom:3}}>
                    <div style={{display:'flex', flexDirection:'column',marginRight:19}}>
                    <span className='smSpan'>First Name</span>
                    <Input name="fname" value={this.state.fname}   onChange={this.handleChange} style={{width:163}}/>
                    </div>
                    <div style={{display:'flex', flexDirection:'column'}}>
                    <span className='smSpan'>Last Name</span>
                    <Input name="lname" value={this.state.lname}  onChange={this.handleChange} style={{width:163}}/>
                    </div>
                 </div>
                 <div style={{display:'flex', flexDirection:'column',marginBottom:3}}>
                     <span className='smSpan'>Mobile</span>
                    <div style={{display:'flex', flexDirection:'row'}}>
                        <Input name="code" value={this.state.code}  onChange={this.handleChange} style={{width:82,marginRight:14}}/>
                        <Input name="number" value={this.state.number} onChange={this.handleChange} style={{width:249}}/>
                    </div>
                
                </div>
                 <div style={{display:'flex', flexDirection:'column',marginBottom:3}}>
                 <span className='smSpan'>Email</span>
                <Input  name="email" value={this.state.email}   onChange={this.handleChange} style={{width:300}}/>
                </div>
                <div style={{display:'flex', flexDirection:'row',marginBottom:3}}>
                    <div style={{display:'flex', flexDirection:'column',marginRight:19}}>
                    <span className='smSpan'>Password</span>
                    <Input name="password" value={this.state.password} type='password'  onChange={this.handleChange} style={{width:163}}/>
                    </div>
                    <div style={{display:'flex', flexDirection:'column'}}>
                    <span className='smSpan'>Repeat Password</span>
                    <Input name="cpassword" value={this.state.cpassword} type='password' onChange={this.handleChange} style={{width:163}}/>
                    </div>
                 </div>
           
            </div>
                </div>
            </div>
                <Button className="form-button">Next</Button>
            </div>            
        );
    }
    return(
        <div>
            {content}
        </div>
        

    );
    }
}
export default Join;