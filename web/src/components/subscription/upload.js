import React from 'react';
import {Upload,Button} from 'antd';
import {PlusOutlined} from '@ant-design/icons';
import './hostForm.css';
import 'antd/dist/antd.css';
import Join from './join';



class Uploads extends React.Component{
    state = {
        page:true,
        fileList: [
        ],
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

      handlePage=()=>{
        if(this.state.page){
            this.setState({
                page:false
            });
        }
        else{
            this.setState({
                page:true
            });
        }

    }
    componentWillUpdate(nextProps,nextState){
        localStorage.setItem('uploads',JSON.stringify(nextState));
    }


    render(){
        const props = {
            action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
            onChange: this.handleChange,
            multiple: true,
          };
          let show;
          if(this.state.page){
            show=<div>
            <div className="upload" style={{minHeight:"250px", height:"auto"}}>
                <h2 className="medText">Show us your Property</h2>
                <div>
                    <h3 className="smallText">Upload Images</h3>
                    <Upload {...props} fileList={this.state.fileList}>
                        <Button className="upload-button">
                        <PlusOutlined /> 
                        <h3>Upload</h3>
                        </Button>
                    </Upload>
                </div>
            </div>

                <Button className="form-button" onClick={this.handlePage}>Next</Button>
        </div>
          }else{
              show=<Join/>
          }
        return(

        <div>{show}</div>



        );



    }




};
export default Uploads;