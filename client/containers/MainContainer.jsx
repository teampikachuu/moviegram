import React, { Component } from 'react';
import SearchBar from '../components/SearchBar.jsx';
import ToWatch from '../components/ToWatch.jsx';

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="container">
          <SearchBar />
          <ToWatch />
      </div>
    );
  }
}

export default MainContainer; 