import React from 'react';
import Head from './head';
import Foot from './foot';
import SearchBar from './searchBar'
import FilterClass from './filterClass';
import BigImage from './bigImage';
import 'antd/dist/antd.css';
//import { Space } from 'antd';
import NewsClass from './newsClass';
import { withCookies } from 'react-cookie';

let filterImages=[
    require('../Assets/apart1.jpg'),
    require('../Assets/apart2.jpg'),
    require('../Assets/apart6.jpg')
]
class HomePage extends React.Component{

    state={
        loggedIn: false
    }

    logOut = () => {
        this.setState({loggedIn: false})
        this.props.cookies.remove('mr-token')
    }

    componentDidMount(){
        if(this.props.cookies.get('mr-token'))
            this.setState({loggedIn:true})
    }

    render(){
        return(
        <div className="root">
            <Head loggedIn = {this.state.loggedIn} logOut={this.logOut}/>
            <div
                style={{
                    display:"flex",
                    flexDirection:"column",
                    justifyContent:"center",
                    width: "auto",
                    height: "auto"
                }}
                className="homepage"
            >
                <SearchBar/>
                <FilterClass filter={filterImages}/>
                <BigImage/>
                <NewsClass/>

            </div>
            <Foot></Foot>
        </div>

        );


    }



}

export default withCookies(HomePage);