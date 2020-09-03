import React, { Component } from "react";
import API from "../utils/api";
import Card from "../components/Card";
import Row from "../components/Row";
import Container from "../components/Container";
import Column from "../components/Column";
import "./style.css";

class Emp extends Component {
  state = {
    results: [],
    filteredRes: [],
  };

  componentDidMount() {
    API.findPeople().then((res) => {
      this.setState({
        filteredRes: res.data.results,
        results: res.data.results,
      });
    });
  }

  handelSearchFN = (event) => {
    const queryFN = event.target.value;
    this.searchPeopleFN(queryFN);
  };
  handelSearchLN = (event) => {
    const queryLN = event.target.value;
    this.searchPeopleLN(queryLN);
  };

  searchPeopleLN = (value) => {
    const searchResults = this.state.results.filter((x) => {
      return x.name.last.toLowerCase().includes(value);
    });
    this.setState({
      filteredRes: searchResults,
    });
  };
  searchPeopleFN = (value) => {
    const searchResults = this.state.results.filter((x) => {
      return x.name.first.toLowerCase().includes(value);
    });
    this.setState({ filteredRes: searchResults });
    console.log(this.state.filteredRes);
  };

  handleSortAsc = (event) => {
    const sorted = this.state.results.sort((a, b) =>
      a.name.first > b.name.first ? 1 : -1
    );
    this.setState({ filteredRes: sorted });
  };

  handleSortDesc = (event) => {
    const sorted = this.state.results.sort((a, b) =>
      a.name.first < b.name.first ? 1 : -1
    );
    this.setState({ filteredRes: sorted });
  };

  render() {
    const results = this.state.filteredRes;
    return (
      <div id='appRender'>
        <h1 className="text-center">Employees</h1>
        {/* <Row className="row" id="sortRow"> */}
          {/* <Column className="col-sm-3" id="EmptyCol">
            <div></div>
          </Column>
          <Column className="col-sm-3" id="ascendCol"> */}
            <button
              type="button"
              className="btn"
              onClick={this.handleSortAsc}
              id="sortAscend"
            >
              Sort Ascending
            </button>
          {/* </Column>
          <Column className="col-sm-3" id="descendCol"> */}
            <button
              type="button"
              className="btn"
              onClick={this.handleSortDesc}
              id="sortdescend"
            >
              Sort Descending
            </button>
          {/* </Column>
          <Column className="col-sm-3" id="EmptyCol">
            <div></div>
          </Column>
        </Row> */}

        <form className="search form-inline" id="searchForm">
          <div id="searchFields">
            <div id="FNSearch">
              <input
                className="employeeSearch"
                placeholder="Search by First Name. "
                onChange={this.handelSearchFN}
              />
            </div>
            <div id="LNsearch">
              <input
                className="employeeSearch"
                placeholder="Search by Last Name. "
                onChange={this.handelSearchLN}
              />
            </div>
          </div>
        </form>
        <Container>
          <Row>
            {results.map((employee, i) => (
              <Column key={i}>
                <Card
                  image={employee.picture.large}
                  firstName={employee.name.first}
                  lastName={employee.name.last}
                  fullname={employee.name.first + employee.name.last}
                  age={employee.dob.age}
                  DOB={employee.dob.date}
                  phoneNum={employee.phone}
                  email={employee.email}
                />
              </Column>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}

export default Emp;
