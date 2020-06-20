import React from 'react';
import { Upload,Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import './hostForm.css';


class AddPhotos extends React.Component{
    state={
        fileList:[],
      
    };

    handleChange = info => {
        let fileList = [...info.fileList];
    
        // 1. Limit the number of uploaded files
        // Only to show two recent uploaded files, and old ones will be replaced by the new
        fileList = fileList.slice(-4);
    
        // 2. Read from response and show file link
        fileList = fileList.map(file => {
          if (file.response) {
            // Component will show file.url as link
            file.url = file.response.url;
          }
          return file;
        });
    
        this.setState({ fileList });
      };

      getSnapshotBeforeUpdate(nextProps,nextState){
        localStorage.setItem('addPhotos',JSON.stringify(nextState));
        return null;
    }
    componentDidUpdate(prevProps,prevState,snapshot){

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
                    <h3 className="smallText">Upload Images</h3>
                    <Upload {...props} fileList={this.state.fileList}>
                        <Button className="upload-button">
                        <PlusOutlined /> 
                        <h3>Upload</h3>
                        </Button>
                    </Upload>
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