import React from 'react'
import PropTypes from 'prop-types';
import { Skeleton, Switch, Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import Slider from '../productSlider'
var FontAwesome = require('react-fontawesome')

const propTypes = {
    property: PropTypes.array.isRequired,
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
                actions={[
                    <SettingOutlined key="setting" />,
                    <EditOutlined key="edit" />,
                    <EllipsisOutlined key="ellipsis" />,
                ]}
                hoverable cover={<Slider />}
                loading={this.props.loading}
                style={{borderRadius: "16px 16px 0px 0px"}}
            >
                <Meta
                    title="Card title"
                    description="This is the description"
                />
                {this.props.property ? (
                    <div>
                        <h3>{this.props.property.title}</h3>
                        <FontAwesome name="star" className={this.props.property.avg_rating > 0 ? 'orange' : ''} />
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
            </Card>


        )
    }
}

PropertyItem.propTypes = propTypes
PropertyItem.defaultProps = defaultProps

export default PropertyItem