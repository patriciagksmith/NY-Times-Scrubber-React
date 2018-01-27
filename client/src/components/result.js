import React from 'react';
import PropTypes from 'prop-types';
import API from '../utils/API';

class Results extends React.Component {



  savedArticle = id => {
    API.saveArticle(id)
      .then(res => console.log("saved"))
      .catch(err => console.log(err));
  };


render() {

    return (
        <ul className="list-group">
        {this.props.results.map(result => 
          <li className="list-group-item" key={result._id} >
           <p> {result.headline.main}</p>
           <p> {result.pub_date}</p>
           <a href={result.web_url}>{result.web_url}</a>  
          <button onClick={() => this.savedArticle(result._id)} 
          id={result._id}
          >Save Article</button>

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