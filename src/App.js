import React from 'react';
import './css/App.css'

import data from './data_de_los_casos';
import Casos from './casos';
import Star from "./star";



let App = () =>
    <div>
        <Casos casos={data}/>
        <Star/>
    </div>


export default App;
