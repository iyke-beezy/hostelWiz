import React from 'react';
import Head from './head';
import Foot from './foot';
import SearchBar from './searchBar'
import FilterClass from './filterClass';
import BigImage from './bigImage';
import 'antd/dist/antd.css';
import { Space } from 'antd';
import NewsClass from './newsClass';

let filterImages=[
    require('../Assets/apart1.jpg'),
    require('../Assets/apart2.jpg'),
    require('../Assets/apart6.jpg')
]
class HomePage extends React.Component{

    render(){

        return(
        <div>
            <Head></Head>
            <div
                style={{
                    display:"flex",
                    flexDirection:"column",
                    justifyContent:"center",
                    alignContent:"space-between"
                }}
            
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

export default HomePage;