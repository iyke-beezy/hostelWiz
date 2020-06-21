import React from 'react';
import { Upload,Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import './hostForm.css';
import axios from 'axios';
import { create_hostel } from '../../api'


class AddPhotos extends React.Component{
  upload;
  state = {
    id:localStorage.getItem('id'),
    page:true,
      content: '',
      image: [],
      imageSet:[],
      page:true,
      disable:false,
      fileList: [
      ],
    };

    componentDidMount(){
      console.log(this.state.id)
    }
  
    handleChange = (e) => {
      this.setState({
        [e.target.id]: e.target.value
      })
    };
  
    handleImageChange = (e) => {
      this.setState({
        image:[...this.state.image, ...e.target.files]
      })
    };


 
      getSnapshotBeforeUpdate(nextProps,nextState){
        localStorage.setItem('addPhotos',JSON.stringify(nextState));
        return null;
    }
    componentDidUpdate(prevProps,prevState,snapshot){

    }
        
    handleSubmit = (e) => {
      e.preventDefault();
      console.log(this.state);
      const token = '286ffbb3abfacc19e516ae4327deae01bb7132b5';
      this.setState({disabled:true});
      for (var i = 0; i < this.state.image.length; i++) {
        let form_data = new FormData();
        form_data.append('image', this.state.image[i] , this.state.image[i].name);

      
    
      form_data.append('property', this.state.id);
   

     let url = 'http://127.0.0.1:8000/hostelwiz/images/';
      axios.post(url, form_data, {
        headers: {
          'content-type': 'multipart/form-data',
          'Authorization':`Token ${token}`
        }
      })
          .then(res => {
            console.log(res.data);
          })
          .catch(err => console.log(err))

        }
    };

    _publish = async (data) => {
      /*
      this.storeToken(t)*/
      try {
        
         
          const token = '286ffbb3abfacc19e516ae4327deae01bb7132b5'
        const response = await create_hostel(data,token);
        
      }
      catch (err) {
        console.log(err.errMessage)
        this.setState({ error: err.errMessage, loading: false })
      }
    }
  

    render(){
        const props = {
            action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
            onChange: this.handleChange,
            multiple: true,
          };
        return(
            <div style={{paddingLeft:20}}>
                <div style={{marginBottom:15}}>
                    <span className='medText'>Add Photos of your property</span>
                    <h4>Let guests see why they should pick your property with well-lit, landscape-oriented photos of the areas they will be able to access.</h4>
                </div>
                  <div>
                  <div className="App">
              <form onSubmit={this.handleSubmit}>
              <p>
                Select photos you wish to add
              </p>
            
              <p>
                <input type="file"
                       id="image"
                       accept="image/png, image/jpeg" multiple onChange={this.handleImageChange} required/>
              </p>
              <input disabled={this.state.disabled} type="submit"/>
            </form>
          </div>

                </div>   
                <div style={{marginBottom:15}}>
                    <span className='medText'>You need at least 6 photos</span>
                    <h4>Photos must be JPEG or PNG format and at least 1024x683 pixels. Up to 50 photos may be added.</h4>
                </div>  
                <div className='dC1'>
                <Button className='finalButton' onClick={this.props.handleBack}>Back</Button>
                <Button className='finalButton' onClick={this.props.handleNext}>Next</Button>                  
               </div>         
            </div>
        );
    }
}
export default AddPhotos;