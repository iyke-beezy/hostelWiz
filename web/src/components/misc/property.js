import React from 'react'
import PropTypes from 'prop-types';
import { Skeleton, Switch, Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

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
            hoverable cover={<img style={{ borderRadius: "16px 16px 0px 0px" }} alt="example" src={props.property.imgurl} />}
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