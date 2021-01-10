import React, { Component } from "react";
import SearchForm from "./SearchForm";
import EmployeeCard from "./EmployeeCard";
import API from "../utils/API";
import "../styles/Result.css";


class SearchResult extends Component {
    
    // set initial state
state = {
    search: "",
    filter: "",
    result: [],
    sortField: "",
    filterBy: "lastName"

  };

  componentDidMount() {
    API.getRandomUser()
      .then(res => {
             this.setState({
            result: res.data.results.map((user, i) => ({
            firstName: user.name.first,
            lastName: user.name.last,
            picture: user.picture.large,
            email: user.email,
            phone: user.phone,
            key: i
        }))

        })
     
      })
      .catch(err => console.log(err));
  }

  filterEmployees = () => {
    if (this.state.result.length === 0) return;
    const filterResult = this.state.result.filter(el => {
        if (el.firstName === this.state.search) return true;
        return false;

    })
    this.setState({
        searchResults: filterResult
    })
}


  handleFormSubmit = event => {
    event.preventDefault();
    this.filterEmployees(this.state.search);
  };



  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
        [name]: value
    }, ()=> {
        if (!this.state.search) {
            this.setState({
                searchResults: this.state.result
            })
        }
    });
};


  render() {


    return (

        <div className="container">

            {/* Title   */}
            <div className="row">
                <h3>Employee Directory</h3>
            </div>

            {/* The line with the form */}
            <div className="row">    
                <SearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                />
            </div>
        
            {/* Each employee card info */}
            <div className="row">
                <table className="table">
                    {[...this.state.result].map((item) =>
                    <EmployeeCard
                        picture={item.picture}
                        firstName={item.firstName}
                        lastName={item.lastName}
                        email={item.email}
                        phone={item.phone}
                        key={item.key}
                    />
                    )}
                </table>
            </div>


        </div>
    );
  }
}

export default SearchResult;