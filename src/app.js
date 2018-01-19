import React from 'react';
import Header from './components/header';
import Search from './components/search';
import Results from './components/result';
import Saved from './components/saved';


class App extends React.Component {
    constructor(props) {
        super(props);


    };


    render() {

        return (
            <div>
                <Header />
                <Search />
                <Results />
                <Saved />
            </div>

        );
    }

}

export default App;