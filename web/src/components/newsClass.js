import React from 'react';
import News from './news';
import 'antd/dist/antd.css';
const NewsClass=()=>{
    return(
    <div className="newsWrap">
           <div className="newsHead">
               <span>Latest News</span>
            </div>
        <div  className="newsContent">
           <News></News>
           <News></News>
           <News></News>
        </div>

       </div>
       


    );
}
export default NewsClass;