import React from 'react'
import PropertyItem from './misc/property'
import { withCookies } from 'react-cookie'
import { getProperties } from '../api'

class Building extends React.Component {

    state = {
        loading: true,
        data: null,
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
            const data = success.filter(property => property.type === 'building')
            if (data.length > 0) {
                this.setState({ data })
                this.setState({ loading: false })
            }
        }
        catch (err) {
            console.log(err.errMessage)
        }
    }

    render() {
        return (
            <React.Fragment>
                {this.state.data ?

                    (this.state.data.map(property => {
                        return (
                            <div className="propertyItem" key={property.id} style={{ marginRight: '8%' }}>
                                <PropertyItem property={property} loading={this.state.loading} loggedIn={this.state.loggedIn} />
                            </div>
                        )
                    }))
                    :
                    (
                        <div className="no-data">
                            <h3 style={{ fontFamily: 'Baloo Paaji Medium', fontSize: 45, color: '#92A5A3' }}>No buildings on sale</h3>
                        </div>
                    )

                }
            </React.Fragment>
        )
    }
}

export default withCookies(Building)