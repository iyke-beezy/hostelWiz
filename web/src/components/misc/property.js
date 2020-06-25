import React from 'react'
import PropTypes from 'prop-types';
import { Card, Modal,Button,Divider,Space, Input  } from 'antd';
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
        visible:false,
        property:''
    }
    componentDidMount(){
        this.setState({
            property:this.props.property,
        })
    }
    handleEdit=event=>{
        let proper=this.state.property
        proper[event.target.name]=event.target.value
        this.setState({
            property:proper
        })
    }
    showModal = () => {
        this.setState({
          visible: true,
        });
      };
    
      handleOk = () => {
        console.log(this.state.property)
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
                        {console.log(this.state.property)}
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
                    Cancel
                  </Button>,
                    <Button key="submit" type="primary" onClick={this.handleOk}>
                        Update
                      
                    </Button>,
        
                  ]}
                >
                        <h1>Edit Property Details</h1>
                        <Divider/>
                        <div style={{marginBottom:15}}>
                            <h3>Name</h3>
                            <Input name='name' onChange={this.handleEdit} value={this.state.property.name}/>
                        </div>
                    
                        <div style={{marginBottom:15}}>
                            <h3>Accomodation Number</h3>
                            <Input name='accomodates' onChange={this.handleEdit} value={this.state.property.accomodates}/>
                        </div>
                        <div style={{marginBottom:15}}>
                            <h3>Address</h3>
                            <Input name='address' onChange={this.handleEdit} value={this.state.property.address}/>
                        </div>
                        <div style={{marginBottom:15}}>
                            <h3>Description</h3>
                            <Input name='description' onChange={this.handleEdit} value={this.state.property.description}/>
                        </div>
                        <div style={{marginBottom:15}}>
                            <h3>City</h3>
                            <Input name='city' onChange={this.handleEdit} value={this.state.property.city}/>
                        </div>
                        <div style={{marginBottom:15}}>
                            <h3>Rate Type</h3>
                            <Input name='rate_type' onChange={this.handleEdit} value={this.state.property.rate_type}/>
                        </div>
                        <div style={{marginBottom:15}}>
                            <h3>Number of Rooms</h3>
                            <Input name='numberOfRooms' onChange={this.handleEdit} value={this.state.property.numberOfRooms}/>
                        </div>
                        <div style={{marginBottom:15}}>
                            <h3>Price</h3>
                            <Input name='price' onChange={this.handleEdit} value={this.state.property.price}/>
                        </div>
                        <Space style={{height:'50px'}}></Space>
                        <Divider/>
                    
        
                            </Modal>           
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
                 style={{marginBottom:15}}<h2>Location</h2>
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