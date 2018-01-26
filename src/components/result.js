import React from 'react';
import PropTypes from 'prop-types';

class Results extends React.Component {
    
render() {

    return (
        <ul className="list-group">
        {this.props.results.map(result => 
          <li className="list-group-item" key={result._id} >
           <p> {result.headline.main}</p>
           <p> {result.pub_date}</p>
           <a href={result.web_url}>{result.web_url}</a>        
          </li>
        
        )}
      </ul>
    )

}
}

Results.props = {
    results: PropTypes.array
  }

export default Results;