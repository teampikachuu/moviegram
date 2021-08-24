import React, { Component } from 'react';
import SearchBar from '../components/SearchBar.jsx';

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="container">
          <SearchBar />
      </div>
    );
  }
}

export default MainContainer; 