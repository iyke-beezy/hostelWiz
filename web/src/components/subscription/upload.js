import React from 'react';
import { Button } from 'antd';
import './hostForm.css';
import Join from "./join";
import '../../UI/loginUI.css';
import 'antd/dist/antd.css';
import { ArrowLeftOutlined } from '@ant-design/icons';
import axios from 'axios';
import { create_hostel } from '../../api'



class Uploads extends React.Component{
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

    getSnapshotBeforeUpdate(nextProps,nextState){
        localStorage.setItem('uploads',JSON.stringify(nextState));
        return null;
    }
    componentDidMount(nextProps,nextState,snapshot){

    }
    handleBackUp=()=>{
        this.props.goBack();
    }

    render(){
      
          let show;
          if(this.state.page){
            show=<div>
              <Button onClick={this.handleBackUp}><ArrowLeftOutlined/></Button>
            <div className="App">
              <form onSubmit={this.handleSubmit}>
              <p>
                Select photos you want to add
              </p>
            
              <p>
                <input type="file"
                       id="image"
                       accept="image/png, image/jpeg" multiple onChange={this.handleImageChange} required/>
              </p>
              <input disabled={this.state.disabled} type="submit"/>
            </form>
          </div>

                <Button className="form-button" onClick={this.handlePage}>Next</Button>
        </div>
          }else{
              show=<Join goBack={this.handleBackJoin}/>
          }
        return(

        <div>{show}</div>



        );




    }




};
export default Uploads;