import React from 'react';
import Filters from './Filters';
import './homepage.css';
import 'antd/dist/antd.css';

const FilterClass =({ filter }) => {
    return (
        <div className="filterWrap">
            <div className="heading">
                <div></div>
                <span>Discover A Whole New Experience</span>
            </div>
            <Filters />

        </div>




    );
}
export default FilterClass;