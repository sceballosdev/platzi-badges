import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'

import './global.css'
import App from "./components/App";

const container = document.getElementById('root');

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(<App/>, container);
