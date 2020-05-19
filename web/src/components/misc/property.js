import React from 'react'
import PropTypes from 'prop-types';
import { Skeleton, Switch, Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import Slider from '../productSlider'

const propTypes = {
    property: PropTypes.array.isRequired,
    loading: PropTypes.bool
};

const defaultProps = {
    loading: true
};

const { Meta } = Card;

const PropertyItem = props => {
    return (
        <Card
            actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
            ]}
            hoverable cover={<Slider />}
            loading={props.loading}
        >
            <Meta
                title="Card title"
                description="This is the description"
            />
        </Card>
    )
}

PropertyItem.propTypes = propTypes
PropertyItem.defaultProps = defaultProps

export default PropertyItem