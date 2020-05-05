import React from 'react';
import { Select, Button } from 'antd';
import './hostForm.css';
import 'antd/dist/antd.css';
import Amenities from './amenities'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import 'react-google-places-autocomplete/dist/index.min.css';
import { ArrowLeftOutlined } from '@ant-design/icons';
import Join from './join';
const { Option } = Select
class Selection extends React.Component {
    buildingData;
    state = {
        next: false,
        buildingType: "Hostel",
        buildingPurpose: "Rent",
        jump: false
    };
    handleTypeChange = (value) => {

        this.setState({
            buildingType: value
        });
    }
    handlePurposeChange = (value) => {

        this.setState({
            buildingPurpose: value
        });
    }

    handlePage = () => {
        this.state.buildingType === 'Apartment' ?
            this.setState({
                next: true,
                jump: true
            })
            :
            this.setState({ next: true })

    }


    handleBack = () => {
        this.setState({
            next: true
        });
    }
    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('selection', JSON.stringify(nextState));
    }

    render() {
        return (
            <div>
                {!this.state.next ?             //if next hasn't been clicked show the first form.
                    (
                        <div>
                            <div style={{ minHeight: "250px", height: "auto" }}>
                                <h2 className="medText">Tell us more about your property</h2>
                                <div className="selectors">
                                    <div className="building">
                                        <h3 className="smallText">Building Type</h3>
                                        <Select defaultValue={this.state.buildingType} size={'large'} style={{ width: 200 }} onChange={this.handleTypeChange}>
                                            <Option value="Hostel">Hostel</Option>
                                            <Option value="Apartment">Apartment</Option>
                                        </Select>

                                    </div>
                                    <div className="location">
                                        <h3 className="smallText">Location</h3>
                                        <GooglePlacesAutocomplete
                                            onSelect={console.log}
                                            autocompletionRequest={{
                                                componentRestrictions: {
                                                    country: ['gh'],
                                                }
                                            }}
                                            inputStyle={{
                                                width: 200,
                                                height: 40,
                                                color: "#92A5A3",
                                                marginBottom: "10px",
                                                border: "0.5px solid #92A5A3",
                                                boxShadow: "0px 0px 0px",
                                            }}

                                        />
                                    </div>
                                    <div className="purpose">
                                        <h3 className="smallText">Sale Type</h3>
                                        <Select defaultValue={this.state.buildingPurpose} disabled={this.state.buildingType != 'Apartment'} size={'large'} style={{ width: 200 }} onChange={this.handlePurposeChange}>
                                            <Option value="Rent">For rent</Option>
                                            <Option value="Sale">For sale</Option>
                                        </Select>
                                    </div>
                                    <div className="form-btn">
                                        <Button className="form-button" onClick={this.handlePage}>Next</Button>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    :           //if apartment is chosen, move to registration component else show amentities for hostel
                    (<div>
                        {this.state.jump ? <Join /> : <Amenities goBack={this.handleBack} />}
                    </div>)

                }

            </div>
        )

    }

};
export default Selection;