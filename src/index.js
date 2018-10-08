import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import { callbackify } from 'util';
//import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();

function getPackageJSON(packageName, callback, errorCallback) {
    const url = '/api/' + packageName
   
    const request = new XMLHttpRequest()
    request.open('GET', url)
    request.addEventListener('load', function (event) {
      const data = JSON.parse(request.responseText)
      if (request.status === 200) {
        callback(data)
      } else if (errorCallback) {
        errorCallback(data)
      }
    })
   
    request.send()
   }
   getPackageJSON("react",
    result => console.log("ok!", result),
    error => console.error("error!", error))