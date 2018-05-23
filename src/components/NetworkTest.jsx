import React, { Component,Fragment } from 'react';
// 
import { getRecentlyRegisteredBusinesses } from '../network/oregonDataService';
// 
import './NetworkTest.css'

interface OregonBusinessData {
    address_: string;
    associated_name_type: string;
    business_name: string;
    city: string;
    entity_type: string;
    registry_date: string;
    registry_number: string;
    state: string;
    zip_code: string;
}

export default class NetworkTest extends Component {

    state: {
        businesses: OregonBusinessData[],
        loading: boolean
    } = {
            businesses: [],
            loading: true
        }

    componentDidMount() {
        getRecentlyRegisteredBusinesses().then(this.setBusinesses)
    }

    setBusinesses = (businesses: OregonBusinessData[]) =>
        this.setState({ businesses, loading: false })

    render() {
        if (this.state.loading) return <p>Fetching Businesses...</p>;
        return (
        <Fragment>
            <p>This demonstrates the <b>@jackcom/NetworkLayer</b> library. Engine source files are in <b>/src/network</b></p>
            <p>Fetched {this.state.businesses.length} businesses</p>
            <ul className="list list--businesses list--wrap">
            {this.state.businesses.map(business => 
            <li 
                key={business.registry_number}
                className="list-item list--column half"
                >{business.business_name}</li>)}
            </ul>
        </Fragment>);
    }
}