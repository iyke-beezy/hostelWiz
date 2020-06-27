import React from 'react';
import News from './news';
import 'antd/dist/antd.css';
const NewsClass=(props)=>{
    return(

    <div className="newsWrap">
            {
                props.forNews?
                (<div><div>
                <h1 style={{fontSize:60,fontWeight:'bolder'}}>Latest News</h1>
             </div>
         <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap',justifyContent:'space-between'}}>
            <News></News>
            <News></News>
            <News></News>
         </div></div>)
                :
                (<div><div className="newsHead">
                <span>Latest News</span>
             </div>
         <div  className="newsContent">
            <News></News>
            <News></News>
            <News></News>
         </div></div>)
        }


       </div>
       


    );
}
export default NewsClass;