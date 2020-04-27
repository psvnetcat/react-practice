import React from 'react';
import 'bulma/css/bulma.css';
import './css/App.css'

import data from './data_de_los_casos';
import Casos from './casos';

let App = () => {
    return <Casos casos={data}/>
}

export default App;
