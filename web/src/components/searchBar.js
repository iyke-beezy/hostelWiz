import React from 'react'
import { Input, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import "../components/homepage.css"
import {searchProperty} from '../api' 

class SearchBar extends React.Component {

    state = {
        //searchQuery: '',
        searchedProp: '',
        responseMessage: '',
        location: '',
        filter: ''
    }

    getSearchedProperty = async () => {
        try {
            const searchedData = await searchProperty(this.state.location);
            this.setState({ searchedProp: searchedData.result, responseMessage: searchedData.message });
            console.log(searchedData)
        }
        catch (err) {
            this.setState({ responseMessage: null })
            console.log(err.errMessage)
        }
    }

    handleChange = event => {
        let cred = this.state;
        cred[event.target.name] = event.target.value;
        this.setState({ state: cred });
    }


    render() {
        return (

            <div className="searchWrapper">
                <div className="innerWrap">
                    <div className="locDiv">
                        <span>Location</span><br />
                        <Input className="inputField" placeholder="Add city, Address or Landmark" name="location" value={this.state.location} onChange={this.handleChange} />
                    </div>
                    <div className="buildDiv">
                        <span>Building Type</span><br />
                        <Input className="inputField" placeholder="Apply Building Type filter" name="filter" value={this.state.filter} onChange={this.handleChange} />
                    </div>
                    <Button className="searchButton" onClick={() => this.getSearchedProperty()}>
                        {<SearchOutlined />}
                    Search
                </Button>


                </div>
            </div>



        );
    }

}
export default SearchBar;