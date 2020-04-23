import React from 'react';
import Filters from './Filters';
import './homepage.css';
import 'antd/dist/antd.css';

let filters=[
    require('../Assets/apart1.jpg'),
    require('../Assets/apart2.jpg'),
    require('../Assets/apart6.jpg')
]
const FilterClass=({filter})=>{
    return(
        <div className="filterWrap">
                <div className="heading">
                    <div></div>
                    <span>Discover A Whole New Experience</span>
                </div>
             <div className="filterSection">
                <div className="filterSectionDiv"></div>
                <Filters image={filters[0]}/>
                <Filters image={filters[1]}/>
                <Filters image={filters[2]}/>
                <div className="filterSectionDiv"></div>

                </div>

        </div>
        



    );
}
export default FilterClass;