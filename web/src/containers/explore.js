import React from 'react'
import Building from '../components/buildings'
import Hostel from '../components/hostels'
import {useParams} from 'react-router-dom'
import ForSale from '../components/forsale'


export default class Explore extends React.Component{
    state = {
        to: null,
    }

    componentDidMount() {
        let {location} = useParams;
        this.setState({to:location})
    }
    
    render() {
        return (
            <div>
                {this.state.to === 'hostel' && <Hostel />}
                {this.state.to === 'rentApartment' && <Building />}
                {this.state.to === 'sale' && <ForSale /> }
            </div>
        )
    }
}