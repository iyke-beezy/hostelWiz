import React from 'react';
import Proptypes from 'prop-types';
import { Carousel } from  'antd';
import { Pane } from 'evergreen-ui'
import 'antd/dist/antd.css';
import'./App.css';
import'./components/slider.css';

const proptypes={
  images:Proptypes.arrayOf(Proptypes.string).isRequired
};

const Slider=({images})=>{
return(
  <Pane
  elevation={1}

  width={330}
  height={'auto'}
  margin={24}


>
<Carousel autoplay >
          {images.map(image => {
           return <div><img className={'image'} src={image} alt="babe"/></div>
          })}
      </Carousel>
</Pane>



);

};
Slider.propTypes=proptypes;

export default Slider;