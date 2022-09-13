import React from "react";
import ReactDOM from "react-dom/client";

//Nota: importaciones unitarias {fnName1, fnName2}
// import { HelloWorldApp } from './HelloWorldApp';

import { FirstApp } from "./FirstApp";
import { CounterApp } from "./CounterApp";

import './styles.css';

ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        {/* <FirstApp title="Hola soy el titulo" /> */}
        <CounterApp value={24}/>
    </React.StrictMode>
);