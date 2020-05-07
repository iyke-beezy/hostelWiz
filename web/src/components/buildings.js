import React from 'react'
import PropertyItem from './misc/property'

export default class Building extends React.Component {

    state = {
        loading: true,
        data: [
            {
                id: "id",
                imgurl: require('../Assets/apart1.jpg'),
                name: 'name',
                price: 'price',
                type: 'rent',
            }
        ]
    }
    componentDidMount() {
        //this.setState({loading:false})
    }

    render() {
        return (
            <React.Fragment>
                {this.state.data.map(property => {
                    return (
                        <div className="propertyItem">
                            <PropertyItem property={this.state.data} loading={this.state.loading} />
                        </div>
                    )
                })}
            </React.Fragment>
        )
    }
}