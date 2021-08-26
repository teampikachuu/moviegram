import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainContainer from './containers/MainContainer.jsx';

class App extends React.Component{
    render(){
        return(
            <MainContainer />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))