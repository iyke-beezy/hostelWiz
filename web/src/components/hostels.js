import React from 'react'
import PropertyItem from './misc/property'
import { withCookies } from 'react-cookie'
import { getProperties } from '../api'

class Hostel extends React.Component {

    state = {
        loading: true,
        data: [
            {
                id: "id",
                imgurl: require('../Assets/apart1.jpg'),
                name: 'name',
                price: 'price',
                type: 'rent',
            },
        ],
        loggedIn: false,
        token: null,
    }
    componentDidMount() {
        this.getProperties()
        if (this.props.cookies.get('mr-token')) {
            this.setState({ loggedIn: true, token: this.props.cookies.get('mr-token') })
        }
    }

    //get properties from api
    getProperties = async () => {
        try {
            const success = await getProperties()
            this.setState({ data: success.filter(property => property.type === 'hostel') })
            this.setState({ loading: false })
        }
        catch (err) {
            console.log(err.errMessage)
        }
    }

    render() {
        const { properties } = this.props
        //console.log(properties)
        return (
            <React.Fragment>
                {properties ?
                    properties.map(property => {
                        return (
                            <div className="propertyItem" key={property.id} style={{ marginRight: '8%' }}>
                                <PropertyItem property={property} loading={this.state.loading} loggedIn={this.state.loggedIn} allowEdit={this.props.allowEdit} />
                            </div>
                        )
                    })
                    :
                    this.state.data.map(property => {
                        return (
                            <div className="propertyItem" key={property.id} style={{ marginRight: '8%' }}>
                                <PropertyItem property={property} loading={this.state.loading} loggedIn={this.state.loggedIn} allowEdit={this.props.allowEdit} />
                            </div>
                        )
                    })}
            </React.Fragment>
        )
    }
}

export default withCookies(Hostel)