import React from 'react';


const Search = () => {

    return (
        <div className="row">
            <div className="col-lg-12">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">Search Parameters</h3>
                    </div>
                    <div className="panel-body">
                        <form role="form">
                            <div className="form-group">
                                <label for="search">Search Term:</label>
                                <input type="text" className="form-control" id="search" />
                            </div>
                            <div className="form-group">
                                <label for="start-year">Start Year:</label>
                                <input type="text" className="form-control" id="start-year" />
                            </div>
                            <div className="form-group">
                                <label for="end-year">End Year:</label>
                                <input type="text" className="form-control" id="end-year" />
                            </div>
                            <button type="submit" className="btn btn-default" id="search-btn">Search</button>
                            <button type="button" className="btn btn-default">Clear</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Search;