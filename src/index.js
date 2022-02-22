import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { contacts_data as data } from './data';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <App data={data} />
  </Router>,
  document.getElementById('root')
);
