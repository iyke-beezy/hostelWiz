import React from 'react';
import Proptypes from 'prop-types';
import { Carousel } from 'antd';
import { Pane } from 'evergreen-ui';
import 'antd/dist/antd.css';
import '../containers/App.css';
import './slider.css';

const proptypes = {
  images: Proptypes.arrayOf(Proptypes.string).isRequired
};
//Images Props must be of the form, Eg.
// require("assets/image.jpg") for local images
// or url for online images

const Slider = (props) => {
  const images = [
    require('../Assets/apart1.jpg'),
    require('../Assets/apart2.jpg'),
    require('../Assets/sale.jpg')
  ];
  var imagess=props.images;

  console.log(imagess)
  return (
    <Pane
      elevation={1}
      border="none"
      borderTopLeftRadius={16}
      borderTopRightRadius={16}
      width={'100%'}
      height={'auto'}
      margin={0}
    >
      {
        props.images?
        <Carousel autoplay >
        {props.images.map(image => {
          return <div key={image.id} style={{borderTopRightRadius: 16}}><img className='image'  src={image.image} alt="item" style={{ borderRadius: "16px 16px 0px 0px", }} /></div>
        })}
      </Carousel>
        : null
      }
    </Pane>



  );

};
Slider.propTypes = proptypes;

export default Slider;