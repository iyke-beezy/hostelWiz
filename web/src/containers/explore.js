import React from 'react'
import Building from '../components/buildings'
import Hostel from '../components/hostels'
import { useParams } from 'react-router-dom'
import ForSale from '../components/forsale'
import './App.css'
import '../components/homepage.css'
import Head from '../components/head'


export default function Explore() {
    let { explore } = useParams();
    return (
        <div className='root'>
            <Head />
            <div className="heading" style={{paddingLeft:'80px'}}>
                <div></div>
                {
                    explore === 'sale' ?
                        <span>Explore all On-Sale Properties</span>
                        :
                        explore === 'rentApartment' ?
                            <span>Explore all rented Properties</span>
                            :
                            explore === 'hostel' ?
                                <span>Explore all Hostels</span>
                                : null
                }
            </div>
            <div className="explore" style={{justifyContent:'start'}}>
                    {explore === 'hostel' && (<Hostel />)}
                    {explore === 'rentApartment' && (<Building />)}
                    {explore === 'sale' && (<ForSale />)}
            </div>
        </div>
    )
}