import React from 'react'
import PropTypes from 'prop-types';
import { Skeleton, Switch, Card, Avatar } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import Slider from '../productSlider'
var FontAwesome = require('react-fontawesome')

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
    render() {
        return (
            <Card
                hoverable cover={<Slider images={this.props.property.images} />}
                loading={this.props.loading}
                style={{borderRadius: "16px 16px 0px 0px", width:'300px'}}
            >
                <div style={{display:'flex',justifyContent:'space-between'}}>
                <div>
                <Meta
                    title={<h2 >{this.props.property.name}</h2>}
                    
                />
                {this.props.property ? (
                    <div>                        
                        <FontAwesome name="star" className={this.props.property.avg_rating > 1 ? 'orange' : ''} />
                        <FontAwesome name="star" className={this.props.property.avg_rating > 2 ? 'orange' : ''} />
                        <FontAwesome name="star" className={this.props.property.avg_rating > 3 ? 'orange' : ''} />
                        <FontAwesome name="star" className={this.props.property.avg_rating > 4 ? 'orange' : ''} />
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


        )
    }
}

PropertyItem.propTypes = propTypes
PropertyItem.defaultProps = defaultProps

export default PropertyItem