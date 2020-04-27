import React from 'react';
import {Layout, Divider} from 'antd';
import './hostForm.css';
import 'antd/dist/antd.css';


class Item extends React.Component{
    props={
        title:"",
        paragraph:""
    }
    render(){


    return(
        <div className="itemWrap">
           <img src={require("../../Assets/tick.png")}/>
            <div>
                <h4>{this.props.title}</h4>
                <div>
                    <p className="dP">{this.props.paragraph}</p>
                </div>
            </div>

        </div>

    );
    }
}
export default Item;