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
    getSnapshotBeforeUpdate(nextProps,nextState){
        localStorage.setItem('propertyDetails',JSON.stringify(nextState));
        return null;
    }
    componentDidUpdate(prevProps,prevState,snapshot){

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
                    <Button type='link' className='tipsButton' onClick={this.handletoggle}>Headline Tips {this.state.toggle?<DownOutlined />:<UpOutlined />}</Button>
                    <div className='tips' hidden={this.state.toggle}>
                        <span>Important details to include:</span>
                        <span>Property type (such as house, villa, or condo)</span>
                        <span>Special amenities (such as hot tub or deck)</span>
                        <span>Nearby attractions (such as beaches or parks)</span>
                    </div>
                    <div className='dC'>
                        <Input size='large' name="headline" value={this.state.headline}   onChange={this.handleChange} className='entries'/>
                        <span className='smSpan'>20 minimum</span>
                    </div>
                </div>
                <div>                
                    <span className='medText'>Property Description</span>
                    <h4>Let travelers know the story behind your home by describing your floor plan, what's unique about it, and what their stay might be like.</h4>
                    <Button type='link' className='tipsButton' onClick={this.handletoggle1}>Description Tips {this.state.toggle1?<DownOutlined />:<UpOutlined />}</Button>
                    <div className='tips' hidden={this.state.toggle1}>
                        <span>Important details to include:</span>
                        <span>Amenities they'll find(spacious bathub, large dining table, or a comfy couch)</span>
                        <span>Your favorite rooms (a large, inviting living room, or a porch with a view)</span>
                        <span>Think about the things that made you fall in love with your property, and help travelers do the same</span>
                    </div>                      
                    <div className='dC'>
                        <TextArea size='large' name="description"  value={this.state.description}    onChange={this.handleChange} className='entries'/>
                        <span className='smSpan' >400 minimum</span>
                    </div>  
        
               </div>
               <div className='dC'>
                        <span className='smSpan'>Property Type</span>
                        <Select defaultValue={this.state.propertyType}  size={'large'} className='entries' onChange={this.handleTypeChange}>
                            <Option value="Apartment">Apartment</Option>
                            <Option value="Hostel">Hostel</Option>
                        </Select>              
              </div>
              <div className='dC'>
                        <span className='smSpan'>Bedrooms</span>
                        <Input size='large' name="bedrooms" value={this.state.bedrooms}   onChange={this.handleChange} className='entries'/>
                        
              </div>
              <div className='dC'>
                        <span className='smSpan'>Accomodates</span>
                        <Input size='large' name="accomodates" value={this.state.accomodates}   onChange={this.handleChange} className='entries'/>
                        
              </div>
              <div className='dC'>
                        <span className='smSpan'>Bathrooms</span>
                        <Input size='large' name="bathrooms" value={this.state.bathrooms}   onChange={this.handleChange} className='entries'/>
                        
              </div> 
              <div className='dC1'>
                <Button className='finalButton' onClick={this.props.handleBack}>Back</Button>
                <Button className='finalButton' onClick={this.props.handleNext}>Next</Button>                  
               </div>  
        
            </div>
        );
    }
}
export default DetailsConfirm;