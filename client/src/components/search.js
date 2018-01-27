import React from 'react';
import PropTypes from 'prop-types';


class Search extends React.Component {

    render () {
        const {handleInputChange, search, handleFormSubmit } = this.props

    return (
        <div className="row">
            <div className="col-lg-12">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">Search Parameters</h3>
                    </div>
                    <div className="panel-body">
                        <form>
                            <div className="form-group">
                                <label>Search Term:</label>
                                <input 
                                onChange={handleInputChange}
                                value={search}
                                name="search"
                                type="text" 
                                className="form-control" 
                                id="search" 
                                />
                            </div>
                       
                            <button 
                            onClick={handleFormSubmit}
                            type="submit" 
                            className="btn btn-default" 
                            id="search-btn">
                            Search
                            </button>
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
}
}

Search.props = {
    handleInputChange: PropTypes.func,
    search: PropTypes.string,
    handleFormSubmit: PropTypes.func
  }

export default Search;