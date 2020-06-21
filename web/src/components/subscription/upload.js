import React from 'react';
import './hostForm.css';
import 'antd/dist/antd.css';
import axios from 'axios';
import { create_hostel } from '../../api'



class Uploads extends React.Component{
    upload;
    state = {
      id:localStorage.getItem('id'),
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

      
    
      handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        const token = '286ffbb3abfacc19e516ae4327deae01bb7132b5';
        this.setState({disabled:true});
        for (var i = 0; i < this.state.image.length; i++) {
          console.log(this.state.image[i])
        /*  let form_data = new FormData();
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
            .catch(err => console.log(err))*/

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
    

     /* handleChange = info => {
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
            this.setState({
                page:false
            });
      


    }
    handleBackJoin=()=>{
        this.setState({
            page:true
        });
    }

    componentWillUpdate(nextProps,nextState){
        localStorage.setItem('uploads',JSON.stringify(nextState));
    }
    handleBackUp=()=>{
        this.props.goBack();
    }*/

    render(){
      /*  const props = {
            action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
            onChange: this.handleChange,
            multiple: true,
          };
          let show;
          if(this.state.page){
            show=<div>
              <Button onClick={this.handleBackUp}><ArrowLeftOutlined/></Button>
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
              show=<Join goBack={this.handleBackJoin}/>
          }
        return(

        <div>{show}</div>



        );*/
        return (
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
        );



    }




};
export default Uploads;