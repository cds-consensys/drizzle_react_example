import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Drizzle, generateStore } from "drizzle";
import { DrizzleContext } from "drizzle-react";

const options = { contracts: [] };
const drizzleStore = generateStore(options);
const drizzle = new Drizzle(options, drizzleStore);

ReactDOM.render(
  <DrizzleContext.Provider drizzle={drizzle}>
      <div>
        <App />
      </div>
   </DrizzleContext.Provider>
, document.getElementById('root'));
