import React from 'react';
import Header from './header';
import Search from './search';
import Results from './result';
import Saved from './saved';
import API from '../utils/API';


class SearchContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            results: []
          };

    }

    componentDidMount() {
        this.searchTimes("");
      }

    searchTimes = query => {
        API.search(query)
          .then(res => {
            console.log(res.data.response.docs);
            this.setState({ results: res.data.response.docs })
          })
          .catch(err => console.log(err));
      };

      handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
          [name]: value
        });
      };


      handleFormSubmit = event => {
        event.preventDefault();
        this.searchTimes(this.state.search);
      };

    render() {

        return (
            <div>
                <Header />
                <Search 
                search={this.state.search}
                handleFormSubmit={this.handleFormSubmit}
                handleInputChange={this.handleInputChange}
                />
                <Results results={this.state.results} />
                <Saved />
            </div>

        );
    }

}


export default SearchContainer;
