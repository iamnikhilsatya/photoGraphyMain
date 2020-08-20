import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './Routes'
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import { AuthProvider } from './context/AuthContext';

ReactDOM.render(<AuthProvider>
    <Routes />
</AuthProvider>, document.getElementById("root"))
