import React, { Component } from 'react';
import SearchBar from '../components/SearchBar.jsx';
import ToWatch from '../components/ToWatch.jsx';
import Watched from '../components/Watched.jsx';

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="container">
          <SearchBar />
          <div className="tables">
            <ToWatch />
            <Watched />
          </div>
      </div>
    );
  }
}

export default MainContainer; 