import '../style/style.scss';
import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';

const application = (<BrowserRouter><App /></BrowserRouter>)

ReactDom.render(application,document.querySelector('#app'));