import React from 'react';
import { render } from 'react-dom';
import { Scrollbar } from "react-scrollbars-custom";
import './styles/index.scss';
import App from './pages/App';
import reportWebVitals from './reportWebVitals';
import { Tooltip } from 'bootstrap'
import Background from './components/Background';

render(
  <React.StrictMode>
    <App />
    <Background/>
  </React.StrictMode>,
  document.getElementById('root')
);

// Enable bootstrap tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  var tooltip = new Tooltip(tooltipTriggerEl);
  tooltip.show();
  return tooltip;
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
