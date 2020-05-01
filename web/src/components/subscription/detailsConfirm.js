import React from 'react';
import { Input, Dropdown,Button,Select,Menu } from 'antd';
import { UserOutlined, LaptopOutlined, DownOutlined,UpOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import './hostForm.css';
import TextArea from 'antd/lib/input/TextArea';
const {Option}=Select;

class DetailsConfirm extends React.Component{
    state={
        headline:'',
        description:'',
        toggle:true,
        toggle1:true,
        propertyType:'Apartment',
        bedrooms:0,
        accomodates:0,
        bathrooms:0,
    }
    handleChange= event => {
     
        let cred = this.state;
        cred[event.target.name] = event.target.value;
        this.setState({state: cred});
    }
    handletoggle=()=>{
        this.setState({
            toggle:!this.state.toggle
        });
    }
    handletoggle1=()=>{
        this.setState({
            toggle1:!this.state.toggle1
        });
    }
    handleTypeChange=(value)=>{

        this.setState({
            propertyType:value
        });
    }
    componentWillUpdate(nextProps,nextState){
        localStorage.setItem('propertyDetails',JSON.stringify(nextState));
    }
    render(){
 
        return(
            <div >
                <div style={{marginBottom:15}}>
                    <span className='medText'>Give your property a proper headline and and description</span>
                    <h4>Describe what makes your property special to let travelers know your home is the perfect place for their stay.</h4>
                </div>
                <div style={{marginBottom:15}}>
                    <span className='medText'>Property Headline</span>
                    <h4>An engaging headline can grab a traveler’s attention as they browse search results.</h4>
                    <Button type='link' style={{padding:0,color:'#E7C654'}} onClick={this.handletoggle}>Headline Tips {this.state.toggle?<DownOutlined />:<UpOutlined />}</Button>
                    <div style={{display:'flex',flexDirection:'column',paddingLeft:20}} hidden={this.state.toggle}>
                        <span>Important details to include:</span>
                        <span>Property type (such as house, villa, or condo)</span>
                        <span>Special amenities (such as hot tub or deck)</span>
                        <span>Nearby attractions (such as beaches or parks)</span>
                    </div>
                    <div style={{display:'flex', flexDirection:'column',marginBottom:15}}>
                        <Input size='large' name="headline" value={this.state.headline}   onChange={this.handleChange} style={{width:'40%'}}/>
                        <span style={{fontSize:12}}>20 minimum</span>
                    </div>
                </div>
                <div>                
                    <span className='medText'>Property Description</span>
                    <h4>Let travelers know the story behind your home by describing your floor plan, what's unique about it, and what their stay might be like.</h4>
                    <Button type='link' style={{padding:0,color:'#E7C654'}} onClick={this.handletoggle1}>Description Tips {this.state.toggle1?<DownOutlined />:<UpOutlined />}</Button>
                    <div style={{display:'flex',flexDirection:'column',paddingLeft:20}} hidden={this.state.toggle1}>
                        <span>Important details to include:</span>
                        <span>Amenities they'll find(spacious bathub, large dining table, or a comfy couch)</span>
                        <span>Your favorite rooms (a large, inviting living room, or a porch with a view)</span>
                        <span>Think about the things that made you fall in love with your property, and help travelers do the same</span>
                    </div>                      
                    <div style={{display:'flex', flexDirection:'column',marginBottom:15}}>
                        <TextArea size='large' name="description"  value={this.state.description}    onChange={this.handleChange} style={{width:'40%'}}/>
                        <span style={{fontSize:12}}>400 minimum</span>
                    </div>  
        
               </div>
               <div style={{display:'flex', flexDirection:'column',marginBottom:15}}>
                        <span style={{fontSize:12}}>Property Type</span>
                        <Select defaultValue={this.state.propertyType}  size={'large'} style={{ width: '40%' }} onChange={this.handleTypeChange}>
                            <Option value="Apartment">Apartment</Option>
                            <Option value="Hostel">Hostel</Option>
                        </Select>              
              </div>
              <div style={{display:'flex', flexDirection:'column',marginBottom:15}}>
                        <span style={{fontSize:12}}>Bedrooms</span>
                        <Input size='large' name="bedrooms" value={this.state.bedrooms}   onChange={this.handleChange} style={{width:'40%'}}/>
                        
              </div>
              <div style={{display:'flex', flexDirection:'column',marginBottom:15}}>
                        <span style={{fontSize:12}}>Accomodates</span>
                        <Input size='large' name="accomodates" value={this.state.accomodates}   onChange={this.handleChange} style={{width:'40%'}}/>
                        
              </div>
              <div style={{display:'flex', flexDirection:'column',marginBottom:30}}>
                        <span style={{fontSize:12}}>Bathrooms</span>
                        <Input size='large' name="bathrooms" value={this.state.bathrooms}   onChange={this.handleChange} style={{width:'40%'}}/>
                        
              </div> 
              <div style={{marginBottom:15,display:'flex', flexDirection:'row',justifyContent:'space-between',width:'40%'}}>
                <Button className='finalButton' onClick={this.props.handleBack}>Back</Button>
                <Button className='finalButton' >Finish</Button>                  
               </div>  
        
            </div>
        );
    }
}
export default DetailsConfirm;