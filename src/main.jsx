import React from 'react';
import ReactDOM from 'react-dom/client';
import {HelloWorldApp} from './HelloWorldApp'
import { FirstApp } from './FirstApp';
import { CounterApp } from './counterApp';

import './style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <HelloWorldApp/> */}
        {/* <FirstApp subTitle={123}/> */}
        <CounterApp variable={124} />
    </React.StrictMode>
);