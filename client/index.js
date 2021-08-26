import React from 'react';
import ReactDOM from 'react-dom';
import {render} from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx'

render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  document.getElementById('app')
)
//ReactDOM.render(<App />, document.getElementById('app'))