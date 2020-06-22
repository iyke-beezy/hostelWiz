import React from 'react'
import PropTypes from 'prop-types';
import { Card, Modal,Button,Divider,Space } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Slider from '../productSlider'

const propTypes = {
    property: PropTypes.object.isRequired,
    loggedIn: PropTypes.bool,
    loading: PropTypes.bool
};

const defaultProps = {
    loading: true
};

const { Meta } = Card;

class PropertyItem extends React.Component {
    state={
        visible:false
    }
    showModal = () => {
        this.setState({
          visible: true,
        });
      };
    
      handleOk = () => {
        this.setState({
            visible: false,
          });
      };
    
      handleCancel = () => {
        this.setState({ visible: false });
      };
    render() {
        return (
            <div>{
                this.props.allowEdit?(
                    <div>
                    <Card
                        hoverable cover={<Slider images={this.props.property.images} />}
                        loading={this.props.loading}
                        style={{borderRadius: "16px 16px 0px 0px", width:'300px'}}
                        onClick={this.showModal}
                    >
                        <div style={{display:'flex',justifyContent:'space-between'}}>
                        <div>
                        <Meta
                            title={<h2 >{this.props.property.name}</h2>}
                            
                        />
                        {this.props.property ? (
                            <div style={{flex: 1, fontSize: 20}}>                        
                                <FontAwesomeIcon icon="star" className={this.props.property.avg_rating > 0 ? 'orange' : 'star'} />
                                <FontAwesomeIcon icon="star" className={this.props.property.avg_rating > 1 ? 'orange' : 'star'} />
                                <FontAwesomeIcon icon="star" className={this.props.property.avg_rating > 2 ? 'orange' : 'star'} />
                                <FontAwesomeIcon icon="star" className={this.props.property.avg_rating > 3 ? 'orange' : 'star'} />
                                <FontAwesomeIcon icon="star" className={this.props.property.avg_rating > 4 ? 'orange' : 'star'} />
                                    ({this.props.property.no_of_ratings})
        
                                { /*<div className="rate-container">
                                    <h2>Rate it!!!</h2>
                                    {[...Array(5)].map((e, i) => {
                                        return <FontAwesome name="star" key={i} className={this.state.highlighted > i - 1 ? 'purple' : ''}
                                            onMouseEnter={this.highlightRate(i)}
                                            onMouseLeave={this.highlightRate(-1)}
                                            onClick={this.clickRate(i)} />
                                    })}
                                </div> */}
        
                            </div>
                        ) : null}
                        </div>
                        <div>
                            <h2>Ghc&nbsp;{this.props.property.price}</h2>
                            <h4 style={{textAlign:'right'}}>{this.props.property.rate_type}</h4>
                        </div>
                        </div>
        
        
                    </Card>
                { /*   <Modal
                  visible={this.state.visible}
                  width={800}
                  onOk={this.handleOk}
                  onCancel={this.handleCancel}
                  footer={[
                   <Button key="back" onClick={this.handleCancel}>
                    Return
                  </Button>,
                <Button key="link" type="primary" onClick={this.handleOk}>
                <a href='https://www.google.com.gh/maps/place/Jean+Nelson+Aka+Hall/@5.6353794,-0.1884183,19.1z/data=!4m5!3m4!1s0xfdf9b82cd331fcf:0x1f7df347a9ab45d6!8m2!3d5.6352795!4d-0.1886103'>View On Map</a>
                </Button>,
                    <Button key="submit" type="primary" onClick={this.handleOk}>
                  Call Host
                      
                    </Button>,
        
                  ]}
                >
                        <h1>{this.props.property.name}</h1>
                        <div style={{fontSize: 20}}>                        
                        <FontAwesomeIcon icon="star" className={this.props.property.avg_rating > 0 ? 'orange' : 'star'} />
                                <FontAwesomeIcon icon="star" className={this.props.property.avg_rating > 1 ? 'orange' : 'star'} />
                                <FontAwesomeIcon icon="star" className={this.props.property.avg_rating > 2 ? 'orange' : 'star'} />
                                <FontAwesomeIcon icon="star" className={this.props.property.avg_rating > 3 ? 'orange' : 'star'} />
                                <FontAwesomeIcon icon="star" className={this.props.property.avg_rating > 4 ? 'orange' : 'star'} />
                                    ({this.props.property.no_of_ratings})
        
        
                                { /*<div className="rate-container">
                                    <h2>Rate it!!!</h2>
                                    {[...Array(5)].map((e, i) => {
                                        return <FontAwesome name="star" key={i} className={this.state.highlighted > i - 1 ? 'purple' : ''}
                                            onMouseEnter={this.highlightRate(i)}
                                            onMouseLeave={this.highlightRate(-1)}
                                            onClick={this.clickRate(i)} />
                                    })}
                                </div> }
        
                            </div>
                        <Divider/>
                        <Slider images={this.props.property.images} />
                        <Space style={{height:'50px'}}></Space>
                        <Divider/>
        
                        <div>
                        <h2>Location</h2>
                        <h3>Located at {this.props.property.location}</h3>
                        </div>
                        <Divider/>
                        <div>
                         <h2>Amenities</h2>
                        </div>
                    
        
                            </Modal>   */}        
                    </div>
                ):(
                              <div>
            <Card
                hoverable cover={<Slider images={this.props.property.images} />}
                loading={this.props.loading}
                style={{borderRadius: "16px 16px 0px 0px", width:'300px'}}
                onClick={this.showModal}
            >
                <div style={{display:'flex',justifyContent:'space-between'}}>
                <div>
                <Meta
                    title={<h2 >{this.props.property.name}</h2>}
                    
                />
                {this.props.property ? (
                    <div style={{flex: 1, fontSize: 20}}>                        
                        <FontAwesomeIcon icon="star" className={this.props.property.avg_rating > 0 ? 'orange' : 'star'} />
                        <FontAwesomeIcon icon="star" className={this.props.property.avg_rating > 1 ? 'orange' : 'star'} />
                        <FontAwesomeIcon icon="star" className={this.props.property.avg_rating > 2 ? 'orange' : 'star'} />
                        <FontAwesomeIcon icon="star" className={this.props.property.avg_rating > 3 ? 'orange' : 'star'} />
                        <FontAwesomeIcon icon="star" className={this.props.property.avg_rating > 4 ? 'orange' : 'star'} />
                            ({this.props.property.no_of_ratings})

                        { /*<div className="rate-container">
                            <h2>Rate it!!!</h2>
                            {[...Array(5)].map((e, i) => {
                                return <FontAwesome name="star" key={i} className={this.state.highlighted > i - 1 ? 'purple' : ''}
                                    onMouseEnter={this.highlightRate(i)}
                                    onMouseLeave={this.highlightRate(-1)}
                                    onClick={this.clickRate(i)} />
                            })}
                        </div> */}

                    </div>
                ) : null}
                </div>
                <div>
                    <h2>Ghc&nbsp;{this.props.property.price}</h2>
                    <h4 style={{textAlign:'right'}}>{this.props.property.rate_type}</h4>
                </div>
                </div>


            </Card>
            <Modal
          visible={this.state.visible}
          width={800}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
           <Button key="back" onClick={this.handleCancel}>
            Return
          </Button>,
        <Button key="link" type="primary" onClick={this.handleOk}>
        <a href='https://www.google.com.gh/maps/place/Jean+Nelson+Aka+Hall/@5.6353794,-0.1884183,19.1z/data=!4m5!3m4!1s0xfdf9b82cd331fcf:0x1f7df347a9ab45d6!8m2!3d5.6352795!4d-0.1886103'>View On Map</a>
        </Button>,
            <Button key="submit" type="primary" onClick={this.handleOk}>
          Call Host
              
            </Button>,

          ]}
        >
                <h1>{this.props.property.name}</h1>
                <div style={{fontSize: 20}}>                        
                <FontAwesomeIcon icon="star" className={this.props.property.avg_rating > 0 ? 'orange' : 'star'} />
                        <FontAwesomeIcon icon="star" className={this.props.property.avg_rating > 1 ? 'orange' : 'star'} />
                        <FontAwesomeIcon icon="star" className={this.props.property.avg_rating > 2 ? 'orange' : 'star'} />
                        <FontAwesomeIcon icon="star" className={this.props.property.avg_rating > 3 ? 'orange' : 'star'} />
                        <FontAwesomeIcon icon="star" className={this.props.property.avg_rating > 4 ? 'orange' : 'star'} />
                            ({this.props.property.no_of_ratings})


                        { /*<div className="rate-container">
                            <h2>Rate it!!!</h2>
                            {[...Array(5)].map((e, i) => {
                                return <FontAwesome name="star" key={i} className={this.state.highlighted > i - 1 ? 'purple' : ''}
                                    onMouseEnter={this.highlightRate(i)}
                                    onMouseLeave={this.highlightRate(-1)}
                                    onClick={this.clickRate(i)} />
                            })}
                        </div> */}

                    </div>
                <Divider/>
                <Slider images={this.props.property.images} />
                <Space style={{height:'50px'}}></Space>
                <Divider/>

                <div>
                <h2>Location</h2>
                <h3>Located at {this.props.property.location}</h3>
                </div>
                <Divider/>
                <div>
                 <h2>Amenities</h2>
                </div>
            

        </Modal>           
            </div>
                )

            }
            </div>
  


        )
    }
}

PropertyItem.propTypes = propTypes
PropertyItem.defaultProps = defaultProps

export default PropertyItem